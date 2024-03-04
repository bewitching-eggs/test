module.exports = {
  compilerOptions: {
    target: "ESNext",
    lib: ["DOM", "DOM.Iterable", "ESNext"],
    module: "ESNext",
    skipLibCheck: true,
    typeRoots: ["./src/typings", "./node_modules/@types"],

    /* Bundler mode */
    moduleResolution: "bundler",
    allowImportingTsExtensions: true,
    resolveJsonModule: true,
    isolatedModules: true,
    noEmit: true,
    jsx: "react-jsx",

    /* Linting */
    strict: true,
    noUnusedLocals: true,
    noUnusedParameters: true,
    noFallthroughCasesInSwitch: true,
  },
  include: ["src"],
  references: [{ path: "./tsconfig.node.json" }],
};