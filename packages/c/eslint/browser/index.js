module.exports = {
    env: {
        browser: true,
        es2020: true,
    },
    settings: {
        "import/resolver": {
            node: {
                extensions: [".ts", ".tsx", ".js", ".jsx"],
            },
        },
        react: {
            version: "detect",
        },
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "prettier",
        "plugin:import/typescript",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: [
        "react",
        "react-hooks",
        "react-refresh",
        "@typescript-eslint",
        "dirnames",
        "unicorn",
        "simple-import-sort",
        "import",
    ],
    rules: {
        // code smell detection
        complexity: ["warn", 20],
        "max-nested-callbacks": "warn",
        "no-restricted-properties": [
            "error",
            {
                object: "it",
                property: "only",
                message: "Did you forget to remove 'only' from this test?",
            },
            {
                object: "describe",
                property: "only",
                message: "Did you forget to remove 'only' from this test?",
            },
            {
                object: "context",
                property: "only",
                message: "Did you forget to remove 'only' from this test?",
            },
            {
                object: "test",
                property: "only",
                message: "Did you forget to remove 'only' from this test?",
            },
        ],

        // React
        "react-refresh/only-export-components": "warn",
        "react/static-property-placement": ["error", "static public field"],
        "react/state-in-constructor": ["error", "never"],
        "react/prop-types": "off",
        "react/sort-comp": "off",
        "react/require-default-props": "off",
        "react/jsx-boolean-value": ["error", "always"],
        "react/jsx-props-no-spreading": "off",
        "react/prefer-stateless-function": "off",
        "react/destructuring-assignment": "off",
        "react/jsx-filename-extension": [1, { extensions: [".jsx", ".tsx"] }],
        "react/jsx-one-expression-per-line": "off",
        "react/function-component-definition": "off",
        "react/self-closing-comp": [
            "error",
            {
                component: true,
                html: true,
            },
        ],

        // Imports, file extensions
        "dirnames/match-kebab-case": "error",
        "unicorn/filename-case": [
            "error",
            {
                case: "kebabCase",
            },
        ],
        "simple-import-sort/imports": [
            "warn",
            {
                groups: [
                    [
                        "^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)",
                    ],
                    // Packages. `react` related packages come first.
                    ["^react", "^redux", "^@?\\w"],
                    // Components.
                    ["antd", "antd/*", "@ant-design"],
                    // Root path for project
                    ["^#"],
                    // Parent imports. Put `..` last.
                    ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
                    // Other relative imports. Put same-folder imports and `.` last.
                    ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
                    // Style imports.
                    ["^.+\\.s?css$"],
                ],
            },
        ],
        "import/no-unused-modules": [
            "error",
            {
                unusedExports: true,
                missingExports: false,
                ignoreExports: [
                    "**/src/{*/index,index,**/*.stories,**/*.d}.t{s,sx}",
                    "./vite.config.ts",
                    "./playwright.config.ts",
                ],
            },
        ],
    },
};
