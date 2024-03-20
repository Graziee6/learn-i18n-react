module.exports = {
  defaultNamespace: "translation", //corresponds to the name of the files
  lexers: {
    js: ["JsxLexer"], //we're writing jsx in js files
    default: ["JavascriptLexer"],
  },
  locales: ["en", "fr"],
  output: "public/locales/$LOCALE/$NAMESPACE.json",
  input: ["src/*js"],
};
