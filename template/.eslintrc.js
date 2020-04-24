const restrictedGlobals = require('confusing-browser-globals')

module.exports = {
  root: true,

  parser: 'babel-eslint',

  plugins: ['import', 'flowtype', 'jsx-a11y', 'react', 'react-hooks', 'prettier'],

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },

  settings: {
    react: {
      version: 'detect'
    }
  },

  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        },
        warnOnUnsupportedTypeScriptVersion: true
      },
      plugins: ['@typescript-eslint'],
      rules: {
        'default-case': 'off',
        'no-dupe-class-members': 'off',
        'no-undef': 'off',

        // Add TypeScript specific rules (and turn off ESLint equivalents)
        '@typescript-eslint/consistent-type-assertions': 'warn',
        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': 'warn',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [
          'warn',
          {
            functions: false,
            classes: false,
            variables: false,
            typedefs: false
          }
        ],
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': [
          'error',
          {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: true
          }
        ],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            args: 'none',
            ignoreRestSiblings: true
          }
        ],
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'warn'
      }
    }
  ],

  extends: ['react-app', 'prettier'],

  rules: {
    'prettier/prettier': 'warn',
    // http://eslint.org/docs/rules/
    'array-callback-return': 'warn',
    'arrow-parens': 0,
    'arrow-spacing': 2,
    'camelcase': 1,
    'comma-dangle': ['error', 'never'],
    'default-case': ['warn', {
      commentPattern: '^no default$'
    }],
    'dot-location': ['warn', 'property'],
    'eol-last': 0,
    'eqeqeq': ['warn', 'smart'],
    'getter-return': 'warn',
    'jsx-quotes': [2, 'prefer-double'],
    'new-parens': 'warn',
    'no-alert': 2,
    'no-array-constructor': 'warn',
    'no-caller': 'warn',
    'no-class-assign': 2,
    'no-cond-assign': ['error', 'except-parens'],
    'no-console': 0,
    'no-const-assign': 'error',
    'no-control-regex': 'warn',
    'no-debugger': 1,
    'no-delete-var': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'warn',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 1,
    'no-empty-character-class': 'warn',
    'no-empty-pattern': 'warn',
    'no-eval': 'warn',
    'no-ex-assign': 'warn',
    'no-extend-native': 'warn',
    'no-extra-bind': 'warn',
    'no-extra-boolean-cast': 2,
    'no-extra-label': 'warn',
    'no-fallthrough': 'warn',
    'no-func-assign': 'error',
    'no-implied-eval': 'warn',
    'no-invalid-regexp': 'warn',
    'no-invalid-this': 0,
    'no-irregular-whitespace': 0,
    'no-iterator': 'warn',
    'no-label-var': 'warn',
    'no-labels': ['warn', {
      allowLoop: true,
      allowSwitch: false
    }],
    'no-lone-blocks': 'warn',
    'no-loop-func': 'warn',
    'no-mixed-operators': ['warn', {
      allowSamePrecedence: false,
      groups: [['&', '|', '^', '~', '<<', '>>', '>>>'], ['==', '!=', '===', '!==', '>', '>=', '<', '<='], ['&&', '||'], ['in', 'instanceof']]
    }],
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-str': 'warn',
    'no-native-reassign': 'warn',
    'no-negated-in-lhs': 'warn',
    'no-new-func': 'warn',
    'no-new-object': 'warn',
    'no-new-symbol': 'warn',
    'no-new-wrappers': 'warn',
    'no-obj-calls': 'warn',
    'no-octal': 'warn',
    'no-octal-escape': 'warn',
    'no-redeclare': ['error', {
      builtinGlobals: false
    }],
    'no-regex-spaces': 'warn',
    'no-restricted-globals': ['error'].concat(restrictedGlobals),
    'no-restricted-properties': ['error', {
      message: 'Please use import() instead.',
      object: 'require',
      property: 'ensure'
    }, {
      message: 'Please use import() instead.',
      object: 'System',
      property: 'import'
    }],
    'no-restricted-syntax': ['warn', 'WithStatement'],
    'no-script-url': 'warn',
    'no-self-assign': 'warn',
    'no-self-compare': 'warn',
    'no-sequences': 'warn',
    'no-shadow-restricted-names': 'warn',
    'no-spaced-func': 2,
    'no-sparse-arrays': 'warn',
    'no-template-curly-in-string': 'warn',
    'no-this-before-super': 'warn',
    'no-throw-literal': 'warn',
    'no-trailing-spaces': 1,
    'no-undef': 'error',
    'no-undef': 2,
    'no-underscore-dangle': 0,
    'no-unreachable': 'warn',
    'no-unreachable': 1,
    'no-unused-expressions': ['error', {
      allowShortCircuit: true,
      allowTaggedTemplates: true,
      allowTernary: true
    }],
    'no-unused-labels': 'warn',
    'no-unused-vars': ['warn', {
      args: 'none',
      ignoreRestSiblings: true,
      vars: 'all'
    }],
    'no-use-before-define': ['error', {
      classes: false,
      functions: false,
      variables: false
    }],
    'no-useless-computed-key': 'warn',
    'no-useless-concat': 'warn',
    'no-useless-constructor': 'warn',
    'no-useless-escape': 'warn',
    'no-useless-rename': ['warn', {
      ignoreDestructuring: false,
      ignoreExport: false,
      ignoreImport: false
    }],
    'no-var': 2,
    'no-whitespace-before-property': 'warn',
    'no-with': 'warn',
    'prefer-arrow-callback': 2,
    'prefer-const': ['warn', {
      destructuring: 'all'
    }],
    'prefer-destructuring': [0, {
      AssignmentExpression: {
        array: false,
        object: false
      },
      VariableDeclarator: {
        array: false,
        object: true
      }
    }, {
      enforceForRenamedProperties: false
    }],
    'quotes': [1, 'single', {
      allowTemplateLiterals: false,
      avoidEscape: true
    }],
    'react-hooks/exhaustive-deps': 'warn',
    'require-yield': 'warn',
    'rest-spread-spacing': ['warn', 'never'],
    'semi': [2, 'never'],
    'semi-spacing': [2, {
      after: true,
      before: false
    }],
    'strict': ['warn', 'never'],
    'unicode-bom': ['warn', 'never'],
    'use-isnan': 'warn',
    'valid-typeof': 'warn',

    // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
    'import/first': 'error',
    'import/no-amd': 'error',
    'import/no-webpack-loader-syntax': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
    'react/forbid-foreign-prop-types': ['warn', { allowInPropTypes: true }],
    'react/jsx-no-comment-textnodes': 'warn',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-target-blank': 'warn',
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': [
      'warn',
      {
        allowAllCaps: true,
        ignore: []
      }
    ],
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'error',
    'react/no-danger-with-children': 'warn',
    'react/no-direct-mutation-state': 'error',
    'react/no-is-mounted': 'warn',
    'react/no-typos': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/require-render-return': 'error',
    'react/style-prop-object': 'warn',
    'react/display-name': 0,
    'react/forbid-prop-types': [2, { forbid: ['any'] }],
    'react/jsx-boolean-value': 2,
    'react/jsx-closing-bracket-location': 1,
    'react/jsx-curly-spacing': [2, { when: 'never', children: true }],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-key': 1,
    'react/jsx-max-props-per-line': [1, { maximum: 6 }],
    'react/jsx-no-bind': 0,
    'react/jsx-no-literals': 0,
    'react/jsx-sort-props': 2,
    'react/no-danger': 1,
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-multi-comp': 2,
    'react/no-set-state': 0,
    'react/no-unknown-property': 2,
    'react/prefer-es6-class': 2,
    'react/prop-types': 0,
    'react/self-closing-comp': 0,
    'react/sort-comp': 2,
    'react/no-array-index-key': 0,
    'react/no-deprecated': 1,
    'react/jsx-equals-spacing': 2,

    // https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules
    'jsx-a11y/accessible-emoji': 'warn',
    'jsx-a11y/alt-text': 'warn',
    'jsx-a11y/anchor-has-content': 'warn',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['noHref', 'invalidHref']
      }
    ],
    'jsx-a11y/aria-activedescendant-has-tabindex': 'warn',
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-role': ['warn', { ignoreNonDOM: true }],
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/heading-has-content': 'warn',
    'jsx-a11y/iframe-has-title': 'warn',
    'jsx-a11y/img-redundant-alt': 'warn',
    'jsx-a11y/no-access-key': 'warn',
    'jsx-a11y/no-distracting-elements': 'warn',
    'jsx-a11y/no-redundant-roles': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
    'jsx-a11y/scope': 'warn',

    // https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks
    'react-hooks/rules-of-hooks': 'error',

    // https://github.com/gajus/eslint-plugin-flowtype
    'flowtype/define-flow-type': 'warn',
    'flowtype/require-valid-file-annotation': 'warn',
    'flowtype/use-flow-type': 'warn',


  }
}
