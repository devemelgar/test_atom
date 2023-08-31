module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'google',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'ecmaVersion': 'latest',
    'project': ['tsconfig.json', 'tsconfig.dev.json'],
    'sourceType': 'module',
    'tsconfigRootDir': __dirname,
  },
  ignorePatterns: [
    '/lib/**/*', // Ignore built files.
  ],
  plugins: [
    '@typescript-eslint',
    'import',
    'security-node',
  ],
  rules: {
    'quotes': ['error', 'single'],
    'linebreak-style': 'off',
    'import/no-unresolved': 0,
    'indent': ['off', 2],
    'require-jsdoc': 0,
    'object-curly-spacing': ['error', 'always'],
    'no-console': 'warn',
    'new-cap': ['error', { 'capIsNew': false }],
  },
};
