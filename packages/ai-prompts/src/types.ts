import { NullOr } from "@bewitching-eggs/types-test";
import type OpenAI from "openai";

export type Messages = OpenAI.Chat.ChatCompletionCreateParams["messages"];

export type Completion = NullOr<OpenAI.Chat.Completions.ChatCompletion>;
