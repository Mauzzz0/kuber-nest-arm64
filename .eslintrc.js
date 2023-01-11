module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js', 'smsc_api.js'],
  rules: {
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "no-console": "error",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "default",
        "format": ["camelCase"]
      },
      {
        "selector": "variable",
        "format": ["camelCase", "UPPER_CASE", "snake_case"],
        "leadingUnderscore": "allow"
      },
      {
        "selector": "parameter",
        "format": ["camelCase", "snake_case"],
        "leadingUnderscore": "allow"
      },
      {
        "selector": "objectLiteralProperty",
        "format": ["camelCase", "snake_case"],
        "leadingUnderscore": "allow"
      },
      {
        "selector": "classProperty",
        "format": ["camelCase", "snake_case"],
        "leadingUnderscore": "allow"
      },
      {
        "selector": "typeProperty",
        "format": ["camelCase", "snake_case"],
        "leadingUnderscore": "allow"
      },
      {
        "selector": "typeLike",
        "format": ["PascalCase"],
      },
      {
        "selector": "enumMember",
        "format": ["UPPER_CASE", "snake_case"],
        "leadingUnderscore": "allow"
      },
      {
        "selector": "enum",
        "format": [
          "PascalCase"
        ],
        "suffix": ["Enum"]
      },
      {
        "selector": "interface",
        "format": ["PascalCase"],
      },
      {
        "selector": "function",
        "format": null,
        "filter": {
          "match": false,
          "regex": "Factory$"
        },
        "custom": {
          "match": true,
          "regex": "^[a-z]"
        }
      },
      {
        "selector": "function",
        "format": null,
        "filter": {
          "match": true,
          "regex": "Factory$",
        },
        "custom": {
          "match": true,
          "regex": "^[A-Z]"
        }
      },
    ],
    'semi': [1, 'always']
  },
};
