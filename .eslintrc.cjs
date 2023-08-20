module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['react-refresh', 'react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/react-in-jsx-scope': 'off',
    'linebreak-style': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/semi': 'off',
    'react/no-unused-prop-types': 1,
    'arrow-body-style': 0,
    'react/function-component-definition': 0,
    '@typescript-eslint/ban-types': 1,
    'jsx-quotes': ['error', 'prefer-single'],

    '@typescript-eslint/comma-dangle': [
      'error',
      {
        arrays: 'only-multiline',
        objects: 'only-multiline',
        imports: 'always-multiline',
        exports: 'only-multiline',
        functions: 'never',
      },
    ],
    'import/extensions': 0,
    '@typescript-eslint/indent': 0,
    'react/no-array-index-key': 1,
    'import/no-extraneous-dependencies': 0,
    'object-curly-newline': 0,
    'import/prefer-default-export': 1,
    'react/jsx-props-no-spreading': 1,
  },
}
