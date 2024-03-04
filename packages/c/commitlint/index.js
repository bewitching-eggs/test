module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-empty": [2, "never"],
    "message-regex": [2, "always"],
  },
  plugins: [
    {
      rules: {
        "message-regex": ({ subject }) => {
          const onlyEnglishCharactersRegex = /^[a-zA-Z0-9\s.,!?'"]+$/;
          return [
            onlyEnglishCharactersRegex.test(subject),
            `The commit message must be in English. Your message: "${subject}".`,
          ];
        },
      },
    },
  ],
};
