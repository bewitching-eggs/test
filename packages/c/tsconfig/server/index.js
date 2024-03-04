module.exports = {
  compilerOptions: {
    composite: true,
    skipLibCheck: true,
    module: "ESNext",
    moduleResolution: "bundler",
    allowSyntheticDefaultImports: true,
  },
  include: ["vite.config.ts", "pwa.config.ts"],
};