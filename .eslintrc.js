module.exports = {
  root: true,
  extends: '@react-native-community',
  objectCurlyCpacing: ['error', 'never'],
  skipBlankLines: true,
  ignoreComments: true,
  spacedComment: ['error', 'never'],
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    'prettier/prettier': 'warn',
  },
};
