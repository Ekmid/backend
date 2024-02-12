module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
<<<<<<< HEAD
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
=======
    // 'plugin:@typescript-eslint/recommended',
    // 'plugin:prettier/recommended',
>>>>>>> 8fc40cc (docker)
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
<<<<<<< HEAD
    'prettier/prettier': ["error", { "endOfLine": "auto" }]
=======
    'linebreak-style': 0
>>>>>>> 8fc40cc (docker)
  },
};
