module.exports = {
  env: { node: true, browser: true, es6: true, jest: true },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react-hooks'],
  rules: {
    'react/prop-types': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx'],
      },
    ],
    'import/extensions': 'off',
    'import/no-default-export': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['webpack.*.ts'],
      },
    ],
    'import/prefer-default-export': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['webpack.*.ts'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
  reportUnusedDisableDirectives: true,
};
