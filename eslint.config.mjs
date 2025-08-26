import {
  dirname,
} from "path";
import {
  fileURLToPath,
} from "url";

import {
  FlatCompat,
} from "@eslint/eslintrc";
import tseslint from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": ["error", {
        varsIgnorePattern: "^[A-Z_]",
        argsIgnorePattern: "^_",
        ignoreRestSiblings: true,
      }],
      "no-unused-vars": "off",
      "no-undef": "off",
      "prefer-const": "error",
      "no-var": "error",
      "no-console": "warn",
      "no-debugger": "error",
      "no-alert": "warn",
      "no-duplicate-imports": "error",
      "no-unreachable": "error",
      "no-unused-expressions": "error",
      "prefer-template": "error",
      "object-shorthand": "error",
      "arrow-spacing": "error",
      "object-property-newline": ["error", {
        allowAllPropertiesOnSameLine: false,
      }],
      "import/newline-after-import": "error",

      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "error",
      "react/style-prop-object": "error",
      "react/jsx-key": "error",
      "react/jsx-no-duplicate-props": "error",
      "react/jsx-no-undef": "error",
      "react/jsx-pascal-case": "error",
      "react/no-children-prop": "error",
      "react/no-danger-with-children": "error",
      "react/no-deprecated": "error",
      "react/no-direct-mutation-state": "error",
      "react/no-find-dom-node": "error",
      "react/no-is-mounted": "error",
      "react/no-render-return-value": "error",
      "react/no-string-refs": "error",
      "react/no-unescaped-entities": "error",
      "react/no-unknown-property": "error",
      "react/require-render-return": "error",
      "react/self-closing-comp": "error",
      "react/jsx-max-props-per-line": ["error", {
        maximum: 1,
        when: "always",
      }],
      "react/jsx-first-prop-new-line": ["error", "always"],
      "react/jsx-closing-bracket-location": ["error", "tag-aligned"],
      "react/jsx-tag-spacing": ["error", {
        closingSlash: "never",
        beforeSelfClosing: "always",
        afterOpening: "never",
        beforeClosing: "never",
      }],
      "react/jsx-indent-props": ["error", 2],
      "react/jsx-indent": ["error", 2],
      "react/jsx-wrap-multilines": ["error", {
        declaration: "parens-new-line",
        assignment: "parens-new-line",
        return: "parens-new-line",
        arrow: "parens-new-line",
        condition: "parens-new-line",
        logical: "parens-new-line",
        prop: "parens-new-line",
      }],
      "react/jsx-one-expression-per-line": ["error", {
        allow: "none",
      }],
      "react-hooks/rules-of-hooks": "off",

      "import/no-unresolved": "error",
      "import/named": "error",
      "import/default": "error",
      "import/no-absolute-path": "error",
      "import/no-self-import": "error",
      "import/no-cycle": "error",
      "import/no-useless-path-segments": "error",
      "indent": ["error", 2, {
        "ignoredNodes": [
          "JSXElement",
          "JSXElement > *",
          "JSXAttribute",
          "JSXIdentifier",
          "JSXNamespacedName",
          "JSXMemberExpression",
          "JSXSpreadAttribute",
          "JSXExpressionContainer",
          "JSXOpeningElement",
          "JSXClosingElement",
          "JSXFragment",
          "JSXOpeningFragment",
          "JSXClosingFragment",
          "JSXText",
          "JSXEmptyExpression",
          "JSXSpreadChild",
        ],
      }],
      "semi": ["error", "always"],
      "import/order": ["error", {
        "groups": [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "always",
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true,
        },
      }],
      "object-curly-newline": ["error", {
        ObjectExpression: {
          multiline: true,
          minProperties: 1,
        },
        ObjectPattern: {
          multiline: true,
          minProperties: 1,
        },
        ImportDeclaration: "always",
        ExportDeclaration: {
          multiline: true,
          minProperties: 1,
        },
      }],

      "jsx-a11y/alt-text": "error",
      "jsx-a11y/anchor-has-content": "error",
      "jsx-a11y/anchor-is-valid": "error",
      "jsx-a11y/click-events-have-key-events": "warn",
      "jsx-a11y/heading-has-content": "error",
      "jsx-a11y/img-redundant-alt": "error",
      "jsx-a11y/no-access-key": "error",
      "quotes": ["error", "double"],
      "no-multi-spaces": "error",
      "comma-dangle": ["error", "always-multiline"],
      "max-len": ["error", {
        "code": 120,
        "tabWidth": 2,
        "ignoreUrls": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true,
        "ignoreRegExpLiterals": true,
      }],
    },
  },
];

export default eslintConfig;
