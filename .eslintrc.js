// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': 0,
    'no-underscore-dangle': 0,
    'prefer-arrow-callback': 0,
    'func-names': 0,
    'space-before-function-paren': 0,
    'consistent-return': 0,
    'no-param-reassign': 0,
    'global-require': 0,
    "import/no-dynamic-require": 0,
    'no-mixed-spaces-and-tabs': 0,
    'no-tabs': 0,
    'indent': 0,
    'comma-dangle': 0,
    'eol-last': 0,
    'no-unused-vars': 0
  }
}
