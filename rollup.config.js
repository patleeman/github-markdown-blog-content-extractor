import babel from "@rollup/plugin-babel";

export default {
  input: "src/main.js",
  output: {
    file: "dist/bundle.js",
    format: "umd",
  },
  plugins: [babel({ babelHelpers: "bundled" })],
};
