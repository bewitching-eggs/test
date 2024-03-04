module.exports = {
  "pre-commit": "yarn lint:types && lint-staged",
  "pre-push": "yarn lint",
  "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
};
