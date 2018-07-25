require("babel-register")({
  presets: ["env"],
  "plugins": [
    ["transform-react-jsx", { "pragma": "h" }]
  ],
});
require("./server");