module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  rules: {
    'no-shadow': 0,
    '@typescript-eslint/no-shadow': ['error'],
    'react/display-name': 0,
    'react/jsx-uses-react': 1,
    'arrow-body-style': ['error'],
  },
};
