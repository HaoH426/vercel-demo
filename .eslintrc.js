module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['airbnb', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    // 'no-console': process.env.NODE_ENV === 'development' ? 'off' : 'error',
    // 'no-alert': process.env.NODE_ENV === 'development' ? 'off' : 'error'
  }
};
