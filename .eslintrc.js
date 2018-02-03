module.exports = {
  extends: [
    'eslint-config-alloy/typescript',
  ],
  rules: {
    'indent': [
      'error',
      2,
      {
          SwitchCase: 1,
          flatTernaryExpressions: true
      }
    ],
  }
}