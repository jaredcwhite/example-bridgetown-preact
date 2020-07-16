run "yarn add preact react-hook-form @babel/plugin-transform-react-jsx"

inject_into_file("webpack.config.js", after: "extensions: [\".js\", \".jsx\"],\n") do
<<-JS
    alias: {
      "react": "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat",
    },
JS
  end

inject_into_file(
  "webpack.config.js",
  before: "              [\"@babel/plugin-proposal-decorators\", { \"legacy\": true }],\n"
) do
<<-JS
              ["@babel/plugin-transform-react-jsx", {
                "pragma": "h",
                "pragmaFrag": "Fragment",
              }],
JS
end

say_status "setup", "Preact and React Hook Form have been installed!"
say_status "setup", "Example form code here: https://github.com/jaredcwhite/example-bridgetown-preact/blob/master/frontend/javascript/Form.jsx"
say_status "setup", "Just add <my-preact-form></my-preact-form> to a page to display the example form."