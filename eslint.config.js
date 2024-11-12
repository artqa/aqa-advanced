import globals from 'globals';
import pluginJs from '@eslint/js';
import stylisticJs from '@stylistic/eslint-plugin-js';
import jest from 'eslint-plugin-jest';
import cypressEslint from 'eslint-plugin-cypress/flat'


export default [
  {
    files: ["**/*.js", "**/*.mjs"],
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.node,
    },
  },
  pluginJs.configs.recommended,
  cypressEslint.configs.recommended,
  jest.configs['flat/recommended'],
  {
    plugins: {
      '@stylistic/js': stylisticJs,
    }
  },
  {
    rules: {
      "no-unused-vars": "error",
      "no-console": "off",
      "no-prototype-builtins": 0,
      "@stylistic/js/indent": [
        "error",
        2,
        { "SwitchCase": 1 }
      ],
      "space-in-parens": ["error", "never"]
    }
  },
  {
    files: ["**/*.mjs"],
    rules: {
      "indent": "off"
    }
  },
  {
    ignores: ["data/**"]
  },
];