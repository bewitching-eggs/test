import OpenAI from "openai";
import Ajv from "ajv";
import { Schema } from "ajv/dist/types";

import { Completion, Messages } from "./types";

const ajv = new Ajv();

export class Prompt<Result> {
  private readonly openai: OpenAI;
  private readonly model: string;
  private readonly temperature: number;

  private completion: Completion = null;
  protected messages: Messages = [];
  protected schema: Schema = {};

  protected readonly ajv: Ajv = ajv;

  protected valid = false;

  constructor(
    openai: OpenAI,
    messages: Messages = [],
    model: string,
    temperature: number
  ) {
    this.model = model;
    this.temperature = temperature;
    this.openai = openai;
    this.messages = messages;
  }

  async execute(params?: Record<string, unknown>): Promise<Result>;
  async execute() {
    try {
      this.completion = await this.openai.chat.completions.create({
        model: this.model,
        messages: this.messages,
        temperature: this.temperature,
      });

      const [choice] = this.completion.choices;
      const answer = choice.message.content;

      if (!answer) {
        throw new Error("[Prompt] No answer from AI.");
      }

      const result = this.parse(answer);

      this.validate(result);

      this.messages.push(choice.message);

      return result;
    } catch (error) {
      throw new Error(`[Prompt] Unexpected error: ${error}`);
    }
  }

  protected validate(result: JSON) {
    const validate = this.ajv.compile(this.schema);
    this.valid = validate(result);

    if (!this.valid) {
      throw validate.errors;
    }
  }

  protected parse(text: string) {
    const withoutTags = text.replace(/(```json|```)/g, "").trim();

    return JSON.parse(withoutTags);
  }

  getMessages() {
    return this.messages;
  }

  getValid() {
    return this.valid;
  }
}
