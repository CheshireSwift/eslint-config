module.exports = {
  'env': {
    'es6': true,
    'node': true,
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaVersion': 2017,
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true,
    },
    'sourceType': 'module',
  },
  'rules': {
    'array-bracket-spacing': [ 'error', 'always', { } ],
    'comma-dangle': [ 'error', 'always-multiline' ],
    'comma-spacing': [ 'error', { before: false, after: true } ],
    'comma-style': [ 'error', 'last' ],
    'func-call-spacing': [ 'error', 'never' ],
    'indent': [ 'error', 2, { SwitchCase: 1 } ],
    'key-spacing': 'error',
    'keyword-spacing': [ 'error', { before: true, after: true } ],
    'linebreak-style': [ 'error', 'unix' ],
    'no-multiple-empty-lines': [ 'warn', { max: 1, maxBOF: 0, maxEOF: 0 } ],
    'no-trailing-spaces': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-spacing': [ 'error', 'always' ],
    'quotes': [ 'error', 'single' ],
    'semi': [ 'error', 'never' ],
    'space-before-function-paren': [ 'error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    } ],
    'space-in-parens': [ 'error', 'never' ],
  },
}
