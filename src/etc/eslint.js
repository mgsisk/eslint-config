module.exports = {
  rules: {
    // ----- Possible Errors ---------------------------------------------------
    'no-await-in-loop': 'error',
    'no-console': 'error',
    'no-extra-parens': 'error',
    'no-loss-of-precision': 'error',
    'no-promise-executor-return': 'error',
    'no-template-curly-in-string': 'error',
    // 'no-unreachable-loop': 'error',
    'no-unsafe-optional-chaining': ['error', {disallowArithmeticOperators: true}],
    'no-useless-backreference': 'error',
    'require-atomic-updates': 'error',

    // ----- Best Practices ----------------------------------------------------
    'accessor-pairs': 'error',
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'class-methods-use-this': 'error',
    complexity: ['error', 8],
    // 'consistent-return': 'error',
    curly: 'error',
    'default-case': 'error',
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    eqeqeq: 'error',
    'grouped-accessor-pairs': ['error', 'getBeforeSet'],
    'guard-for-in': 'error',
    'max-classes-per-file': 'error',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-constructor-return': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    // 'no-magic-numbers': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-nonoctal-decimal-escape': 'error',
    'no-octal-escape': 'error',
    // 'no-param-reassign': 'error',
    'no-proto': 'error',
    // 'no-restricted-properties': 'error',
    'no-return-assign': ['error', 'always'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': [
      'error', {
        allowShortCircuit: true,
        allowTaggedTemplates: true,
      },
    ],
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-warning-comments': 'error',
    // 'prefer-named-capture-group': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': ['error', {disallowRedundantWrapping: true}],
    radix: ['error', 'as-needed'],
    'require-await': 'error',
    'require-unicode-regexp': 'error',
    'vars-on-top': 'error',
    'wrap-iife': 'error',
    yoda: 'error',

    // ----- Strict Mode -------------------------------------------------------
    strict: ['error', 'safe'],

    // ----- Variables ---------------------------------------------------------
    'init-declarations': ['error', 'always'],
    'no-label-var': 'error',
    // 'no-restricted-global': 'error',
    'no-shadow': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-use-before-define': ['error', 'nofunc'],

    // ----- Stylistic Issues --------------------------------------------------
    'array-bracket-newline': ['error', 'consistent'],
    'array-bracket-spacing': 'error',
    'array-element-newline': ['error', 'consistent'],
    'block-spacing': ['error', 'never'],
    'brace-style': 'error',
    camelcase: 'error',
    'capitalized-comments': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'consistent-this': ['error', 'self'],
    'eol-last': 'error',
    'func-call-spacing': 'error',
    'func-name-matching': 'error',
    'func-names': ['error', 'as-needed'],
    'func-style': ['error', 'declaration'],
    'function-call-argument-newline': ['error', 'consistent'],
    'function-paren-newline': 'error',
    // 'id-denylist': 'error',
    'id-length': ['error', {
      max: 32,
      min: 1,
    }],
    // 'id-match': 'error',
    'implicit-arrow-linebreak': 'error',
    indent: ['error', 2, {SwitchCase: 1}],
    'jsx-quotes': 'error',
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    // 'line-comment-position': 'error',
    'linebreak-style': 'error',
    'lines-around-comment': 'error',
    'lines-between-class-members': 'error',
    'max-depth': 'error',
    'max-len': [
      'error', {
        code: 120,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        tabWidth: 1,
      },
    ],
    'max-lines': [
      'error', {
        max: 1024,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'max-lines-per-function': [
      'error', {
        max: 128,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'max-nested-callbacks': ['error', 8],
    'max-params': ['error', {max: 8}],
    'max-statements': ['error', 16],
    'max-statements-per-line': 'error',
    // 'multiline-comment-style': 'error',
    'multiline-ternary': ['error', 'always-multiline'],
    'new-cap': 'error',
    'new-parens': 'error',
    'newline-per-chained-call': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    // 'no-continue': 'error',
    // 'no-inline-comments': 'error',
    'no-lonely-if': 'error',
    // 'no-mixed-operators': 'error',
    'no-multi-assign': 'error',
    'no-multiple-empty-lines': 'error',
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': ['error', {allowForLoopAfterthoughts: true}],
    'no-restricted-syntax': 'error',
    'no-tabs': 'error',
    'no-ternary': 'error',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': 'error',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': 'error',
    'object-curly-newline': ['error', {consistent: true}],
    'object-curly-spacing': 'error',
    'object-property-newline': ['error', {allowAllPropertiesOnSameLine: true}],
    'one-var': [
      'error', {
        initialized: 'never',
        uninitialized: 'always',
      },
    ],
    'one-var-declaration-per-line': 'error',
    'operator-assignment': 'error',
    'operator-linebreak': ['error', 'before', {overrides: {'=': 'after'}}],
    'padded-blocks': ['error', 'never'],
    'padding-line-between-statements': [
      'error', {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      }, {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: '*',
      }, {
        blankLine: 'always',
        prev: 'directive',
        next: '*',
      }, {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      }, {
        blankLine: 'any',
        prev: 'directive',
        next: 'directive',
      },
    ],
    'prefer-exponentiation-operator': 'error',
    'prefer-object-spread': 'error',
    'quote-props': ['error', 'as-needed'],
    quotes: ['error', 'single', {avoidEscape: true, allowTemplateLiterals: true}],
    semi: ['error', 'never'],
    'semi-spacing': 'error',
    'semi-style': 'error',
    // 'sort-keys': 'error,
    // 'sort-vars': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': 'error',
    'switch-colon-spacing': 'error',
    'template-tag-spacing': 'error',
    'unicode-bom': 'error',
    'wrap-regex': 'error',

    // ----- ECMAScript 6 ------------------------------------------------------
    'arrow-body-style': 'error',
    'arrow-parens': ['error', 'as-needed', {requireForBlockBody: true}],
    'arrow-spacing': [
      'error', {
        before: false,
        after: true,
      },
    ],
    'generator-star-spacing': 'error',
    'no-confusing-arrow': 'error',
    'no-duplicate-imports': 'error',
    // 'no-restricted-exports': 'error',
    // 'no-restricted-imports': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'rest-spread-spacing': 'error',
    'sort-imports': 'error',
    'symbol-description': 'error',
    'template-curly-spacing': 'error',
    'yield-star-spacing': 'error',
  },
}
