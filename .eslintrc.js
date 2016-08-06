module.exports = {
  parserOptions: {
    ecmaVersion: 7,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
      experimentalObjectRestSpread: true
    },
    sourceType: 'module'
  },
  parser: 'babel-eslint',
  env: {
    node: true,
    es6: true
  },
  globals: {
    __DEV__: true,
    __PROD__: true,
    __SERVER__: true,
    __CLIENT__: true
  },
  plugins: [
    'react',
    'flowtype'
  ],
  rules: {

    // Possible Errors
    // http://eslint.org/docs/rules/#possible-errors

    // disallow assignment operators in conditional expressions
    'no-cond-assign': [2, 'except-parens'],
    // disallow the use of console
    'no-console': 2,
    // disallow constant expressions in conditions
    'no-constant-condition': 2,
    // disallow control characters in regular expressions
    'no-control-regex': 2,
    // disallow the use of debugger
    'no-debugger': 2,
    // disallow duplicate arguments in function definitions
    'no-dupe-args': 2,
    // disallow duplicate keys in object literals
    'no-dupe-keys': 2,
    // disallow duplicate case labels
    'no-duplicate-case': 2,
    // disallow empty character classes in regular expressions
    'no-empty-character-class': 2,
    // disallow empty block statements
    'no-empty': [2, { allowEmptyCatch: true }],
    // disallow reassigning exceptions in catch clauses
    'no-ex-assign': 2,
    // disallow unnecessary boolean casts
    'no-extra-boolean-cast': 2,
    // disallow unnecessary parentheses
    'no-extra-parens': [2, 'functions'],
    // disallow unnecessary semicolons
    'no-extra-semi': 2,
    // disallow reassigning function declarations
    'no-func-assign': 2,
    // disallow function or var declarations in nested blocks
    'no-inner-declarations': [2, 'both'],
    // disallow invalid regular expression strings in RegExp constructors
    'no-invalid-regexp': 2,
    // disallow irregular whitespace outside of strings and comments
    'no-irregular-whitespace': 2,
    // disallow calling global object properties as functions
    'no-obj-calls': 2,
    // disallow use of Object.prototypes builtins directly
    'no-prototype-builtins': 2,
    // disallow multiple spaces in regular expression literals
    'no-regex-spaces': 2,
    // disallow sparse arrays
    'no-sparse-arrays': 2,
    // disallow template literal placeholder syntax in regular strings
    'no-template-curly-in-string': 2,
    // disallow confusing multiline expressions
    'no-unexpected-multiline': 2,
    // disallow unreachable code after return, throw, continue, and break statements
    'no-unreachable': 2,
    // disallow control flow statements in finally blocks
    'no-unsafe-finally': 2,
    // disallow negating the left operand of relational operators
    'no-unsafe-negation': 2,
    //require calls to isNaN() when checking for NaN
    'use-isnan': 2,
    // enforce valid JSDoc comments
    'valid-jsdoc': 0,
    // enforce comparing typeof expressions against valid strings
    'valid-typeof': 2,

    // Best Practices
    // http://eslint.org/docs/rules/#best-practices

    // enforce getter and setter pairs in objects
    'accessor-pairs': 2,
    // enforce return statements in callbacks of array methods
    'array-callback-return': 0,
    // enforce the use of variables within the scope they are defined
    'block-scoped-var': 0,
    // enforce a maximum cyclomatic complexity allowed in a program
    'complexity': 0,
    // require return statements to either always or never specify values
    'consistent-return': 0,
    // enforce consistent brace style for all control statements
    'curly': 2,
    // require default cases in switch statements
    'default-case': 0,
    // enforce consistent newlines before and after dots
    'dot-location': [2, 'property'],
    // enforce dot notation whenever possible
    'dot-notation': 0,
    // require the use of === and !==
    'eqeqeq': [2, 'smart'],
    // require for-in loops to include an if statement
    'guard-for-in': 2,
    // disallow the use of alert, confirm, and prompt
    'no-alert': 2,
    // disallow the use of arguments.caller or arguments.callee
    'no-caller': 2,
    // disallow lexical declarations in case clauses
    'no-case-declarations': 2,
    // disallow division operators explicitly at the beginning of regular expressions
    'no-div-regex': 0,
    // disallow else blocks after return statements in if statements
    'no-else-return': 0,
    // disallow empty functions
    'no-empty-function': [2, { allow: [] }],
    // disallow empty destructuring patterns
    'no-empty-pattern': 2,
    // disallow null comparisons without type-checking operators
    'no-eq-null': 0,
    // disallow the use of eval()
    'no-eval': 2,
    // disallow extending native types
    'no-extend-native': 2,
    // disallow unnecessary calls to .bind()
    'no-extra-bind': 2,
    // disallow unnecessary labels
    'no-extra-label': 2,
    // disallow fallthrough of case statements
    'no-fallthrough': [2, { commentPattern: 'break' }],
    // disallow leading or trailing decimal points in numeric literals
    'no-floating-decimal': 2,
    // disallow assignments to native objects or read-only global variables
    'no-global-assign': 2,
    // disallow shorthand type conversions
    'no-implicit-coercion': 0,
    // disallow var and named function declarations in the global scope
    'no-implicit-globals': 2,
    // disallow the use of eval()-like methods
    'no-implied-eval': 2,
    // disallow this keywords outside of classes or class-like objects
    'no-invalid-this': 2,
    // disallow the use of the __iterator__ property
    'no-iterator': 2,
    // disallow labeled statements
    'no-labels': 0,
    // disallow unnecessary nested blocks
    'no-lone-blocks': 0,
    // disallow function declarations and expressions inside loop statements
    'no-loop-func': 2,
    // disallow magic numbers
    'no-magic-numbers': 0,
    // disallow multiple spaces
    'no-multi-spaces': 0,
    // disallow multiline strings
    'no-multi-str': 0,
    // disallow new operators with the Function object
    'no-new-func': 2,
    // disallow new operators with the String, Number, and Boolean objects
    'no-new-wrappers': 2,
    // disallow new operators outside of assignments or comparisons
    'no-new': 2,
    // disallow octal escape sequences in string literals
    'no-octal-escape': 2,
    // disallow octal literals
    'no-octal': 2,
    // disallow reassigning function parameters
    'no-param-reassign': 0,
    // disallow the use of the __proto__ property
    'no-proto': 2,
    // disallow var redeclaration
    'no-redeclare': 2,
    // disallow assignment operators in return statements
    'no-return-assign': [2, 'except-parens'],
    // disallow javascript: urls
    'no-script-url': 2,
    // disallow assignments where both sides are exactly the same
    'no-self-assign': 2,
    // disallow comparisons where both sides are exactly the same
    'no-self-compare': 2,
    // disallow comma operators
    'no-sequences': 2,
    // disallow throwing literals as exceptions
    'no-throw-literal': 2,
    // disallow unmodified loop conditions
    'no-unmodified-loop-condition': 2,
    // disallow unused expressions
    'no-unused-expressions': 0,
    // disallow unused labels
    'no-unused-labels': 2,
    // disallow unnecessary calls to .call() and .apply()
    'no-useless-call': 2,
    // disallow unnecessary concatenation of literals or template literals
    'no-useless-concat': 2,
    // disallow unnecessary escape characters
    'no-useless-escape': 2,
    // disallow void operators
    'no-void': 2,
    // disallow specified warning terms in comments
    'no-warning-comments': 0,
    // disallow with statements
    'no-with': 2,
    // enforce the consistent use of the radix argument when using parseInt()
    'radix': [2, 'always'],
    // require var declarations be placed at the top of their containing scope
    'vars-on-top': 0,
    // require parentheses around immediate function invocations
    'wrap-iife': [2, 'outside'],
    // require or disallow “Yoda” conditions
    'yoda': [2, 'never', { exceptRange: true }],

    // Strict Mode
    // http://eslint.org/docs/rules/#strict-mode

    // require or disallow strict mode directives
    'strict': [2, 'never'],

    // Variables
    // http://eslint.org/docs/rules/#variables

    // require or disallow initialization in var declarations
    'init-declarations': 0,
    // disallow catch clause parameters from shadowing variables in the outer scope
    'no-catch-shadow': 2,
    // disallow deleting variables
    'no-delete-var': 2,
    // disallow labels that share a name with a variable
    'no-label-var': 2,
    // disallow specified global variables
    'no-restricted-globals': 2,
    // disallow identifiers from shadowing restricted names
    'no-shadow-restricted-names': 2,
    // disallow var declarations from shadowing variables in the outer scope
    'no-shadow': [2, { allow: ['resolve', 'reject'] }],
    // disallow initializing variables to undefined
    'no-undef-init': 2,
    // disallow the use of undeclared variables unless mentioned in /*global */ comments
    'no-undef': 2,
    // disallow the use of undefined as an identifier
    'no-undefined': 2,
    // disallow unused variables
    'no-unused-vars': [2, 'local'],
    // disallow the use of variables before they are defined
    'no-use-before-define': [2, { functions: false }],

    // Node.js and CommonJS
    // http://eslint.org/docs/rules/#nodejs-and-commonjs

    // require return statements after callbacks
    'callback-return': 0,
    // require require() calls to be placed at top-level module scope
    'global-require': 0,
    // require error handling in callbacks
    'handle-callback-err': 0,
    // disallow require calls to be mixed with regular var declarations
    'no-mixed-requires': 0,
    // disallow new operators with calls to require
    'no-new-require': 2,
    // disallow string concatenation with __dirname and __filename
    'no-path-concat': 2,
    // disallow the use of process.env
    'no-process-env': 0,
    // disallow the use of process.exit()
    'no-process-exit': 2,
    // disallow specified modules when loaded by require
    'no-restricted-modules': 0,
    // disallow synchronous methods
    'no-sync': 0,

    // Stylistic Issues
    // http://eslint.org/docs/rules/#stylistic-issues

    // enforce consistent spacing inside array brackets
    'array-bracket-spacing': [2, 'never'],
    // enforce consistent spacing inside single-line blocks
    'block-spacing': [2, 'always'],
    // enforce consistent brace style for blocks
    'brace-style': [2, '1tbs', { allowSingleLine: true }],
    // enforce camelcase naming convention
    'camelcase': 0,
    // require or disallow trailing commas
    'comma-dangle': [2, 'never'],
    // enforce consistent spacing before and after commas
    'comma-spacing': [2, { before: false, after: true }],
    // enforce consistent comma style
    'comma-style': [2, 'last'],
    // enforce consistent spacing inside computed property brackets
    'computed-property-spacing': [2, 'never'],
    // enforce consistent naming when capturing the current execution context
    'consistent-this': 0,
    // enforce at least one newline at the end of files
    'eol-last': [2, 'unix'],
    // require or disallow spacing between function identifiers and their invocations
    'func-call-spacing': [2, 'never'],
    // require or disallow named function expressions
    'func-names': 0,
    // enforce the consistent use of either function declarations or expressions
    'func-style': 0,
    // disallow specified identifiers
    'id-blacklist': 0,
    // enforce minimum and maximum identifier lengths
    'id-length': 0,
    // require identifiers to match a specified regular expression
    'id-match': 0,
    // enforce consistent indentation
    'indent': [2, 2],
    // enforce the consistent use of either double or single quotes in JSX attributes
    'jsx-quotes': [2, 'prefer-double'],
    // enforce consistent spacing between keys and values in object literal properties
    'key-spacing': [2, { beforeColon: false, afterColon: true, mode: 'minimum' }],
    // enforce consistent spacing before and after keywords
    'keyword-spacing': [2, { before: true, after: true }],
    // enforce consistent linebreak style
    'linebreak-style': [2, 'unix'],
    // require empty lines around comments
    'lines-around-comment': 0,
    // enforce a maximum depth that blocks can be nested
    'max-depth': 0,
    // enforce a maximum line length
    'max-len': 0,
    // enforce a maximum file length
    'max-lines': 0,
    // enforce a maximum depth that callbacks can be nested
    'max-nested-callbacks': 0,
    // enforce a maximum number of parameters in function definitions
    'max-params': 0,
    // enforce a maximum number of statements allowed per line
    'max-statements-per-line': 0,
    // enforce a maximum number of statements allowed in function blocks
    'max-statements': 0,
    // enforce newlines between operands of ternary expressions
    'multiline-ternary': 0,
    // require constructor function names to begin with a capital letter
    'new-cap': [2, { newIsCap: true, capIsNew: true }],
    // require parentheses when invoking a constructor with no arguments
    'new-parens': 2,
    // require or disallow an empty line after var declarations
    'newline-after-var': 0,
    // require an empty line before return statements
    'newline-before-return': 0,
    // require a newline after each call in a method chain
    'newline-per-chained-call': 0,
    // disallow Array constructors
    'no-array-constructor': 2,
    // disallow bitwise operators
    'no-bitwise': 0,
    // disallow continue statements
    'no-continue': 0,
    // disallow inline comments after code
    'no-inline-comments': 0,
    // disallow if statements as the only statement in else blocks
    'no-lonely-if': 2,
    // disallow mixes of different operators
    'no-mixed-operators': 0,
    // disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 2,
    // disallow multiple empty lines
    'no-multiple-empty-lines': [2, { max: 2, maxEOF: 0, maxBOF: 0 }],
    // disallow negated conditions
    'no-negated-condition': 0,
    // disallow nested ternary expressions
    'no-nested-ternary': 0,
    // disallow Object constructors
    'no-new-object': 2,
    // disallow the unary operators ++ and --
    'no-plusplus': 0,
    // disallow specified syntax
    'no-restricted-syntax': 0,
    // disallow tabs in file
    'no-tabs': 2,
    // disallow ternary operators
    'no-ternary': 0,
    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 2,
    // disallow dangling underscores in identifiers
    'no-underscore-dangle': 0,
    // disallow ternary operators when simpler alternatives exist
    'no-unneeded-ternary': 2,
    // disallow whitespace before properties
    'no-whitespace-before-property': 2,
    // enforce consistent line breaks inside braces
    'object-curly-newline': 0,
    // enforce consistent spacing inside braces
    'object-curly-spacing': [2, 'always'],
    // enforce placing object properties on separate lines
    'object-property-newline': 0,
    // require or disallow newlines around var declarations
    'one-var-declaration-per-line': 0,
    // enforce variables to be declared either together or separately in functions
    'one-var': 0,
    // require or disallow assignment operator shorthand where possible
    'operator-assignment': 0,
    // enforce consistent linebreak style for operators
    'operator-linebreak': [2, 'after'],
    // require or disallow padding within blocks
    'padded-blocks': 0,
    // require quotes around object literal property names
    'quote-props': [2, 'consistent-as-needed'],
    // enforce the consistent use of either backticks, double, or single quotes
    'quotes': [2, 'single', { allowTemplateLiterals: true }],
    // require JSDoc comments
    'require-jsdoc': 0,
    // enforce consistent spacing before and after semicolons
    'semi-spacing': 2,
    // require or disallow semicolons instead of ASI
    'semi': [2, 'never'],
    // require variables within the same declaration block to be sorted
    'sort-vars': 0,
    // enforce consistent spacing before blocks
    'space-before-blocks': 0,
    // enforce consistent spacing before function definition opening parenthesis
    'space-before-function-paren': [2, { anonymous: 'always', named: 'never' }],
    // enforce consistent spacing inside parentheses
    'space-in-parens': [2, 'never'],
    // require spacing around operators
    'space-infix-ops': [2, { int32Hint: true }],
    // enforce consistent spacing before or after unary operators
    'space-unary-ops': [2, { words: true, nonwords: false }],
    // enforce consistent spacing after the // or /* in a comment
    'spaced-comment': [2, 'always'],
    // require or disallow the Unicode BOM
    'unicode-bom': [2, 'never'],
    // require parenthesis around regex literals
    'wrap-regex': 0,

    // ECMAScript 6
    // http://eslint.org/docs/rules/#ecmascript-6

    // require braces around arrow function bodies
    'arrow-body-style': [2, 'as-needed'],
    // require parentheses around arrow function arguments
    'arrow-parens': 0,
    // enforce consistent spacing before and after the arrow in arrow functions
    'arrow-spacing': [2, { before: true, after: true }],
    // require super() calls in constructors
    'constructor-super': 2,
    // enforce consistent spacing around * operators in generator functions
    'generator-star-spacing': [2, { before: false, after: true }],
    // disallow reassigning class members
    'no-class-assign': 2,
    // disallow arrow functions where they could be confused with comparisons
    'no-confusing-arrow': [2, { allowParens: true }],
    // disallow reassigning const variables
    'no-const-assign': 2,
    // disallow duplicate class members
    'no-dupe-class-members': 2,
    // disallow duplicate module imports
    'no-duplicate-imports': [2, { includeExports: false }],
    // disallow new operators with the Symbol object
    'no-new-symbol': 2,
    // disallow specified modules when loaded by import
    'no-restricted-imports': 0,
    // disallow this/super before calling super() in constructors
    'no-this-before-super': 2,
    // disallow unnecessary computed property keys in object literals
    'no-useless-computed-key': 2,
    // disallow unnecessary constructors
    'no-useless-constructor': 2,
    // disallow renaming import, export, and destructured assignments to the same name
    'no-useless-rename': 0,
    // require let or const instead of var
    'no-var': 2,
    // require or disallow method and property shorthand syntax for object literals
    'object-shorthand': [2, 'properties'],
    // require arrow functions as callbacks
    'prefer-arrow-callback': [2, { allowNamedFunctions: true }],
    // require const declarations for variables that are never reassigned after declared
    'prefer-const': [2, { destructuring: 'all' }],
    // require Reflect methods where applicable
    'prefer-reflect': 0,
    // require rest parameters instead of arguments
    'prefer-rest-params': 2,
    // require spread operators instead of .apply()
    'prefer-spread': 2,
    // require template literals instead of string concatenation
    'prefer-template': 2,
    // require generator functions to contain yield
    'require-yield': 0,
    // enforce spacing between rest and spread operators and their expressions
    'rest-spread-spacing': [2, 'never'],
    // enforce sorted import declarations within modules
    'sort-imports': 0,
    // require or disallow spacing around embedded expressions of template strings
    'template-curly-spacing': [2, 'always'],
    // require or disallow spacing around the * in yield* expressions
    'yield-star-spacing': [2, { before: false, after: true }],

    // ESLint-plugin-React
    // https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules

    // prevent missing displayName in a React component definition
    'react/display-name': [2, { ignoreTranspilerName: true }],
    // forbid certain props on Components
    'react/forbid-component-props': 0,
    // forbid certain propTypes
    'react/forbid-prop-types': 0,
    // prevent usage of dangerous JSX properties
    'react/no-danger': 0,
    // prevent problem with children and props.dangerouslySetInnerHTML
    'react/no-danger-with-children': 0,
    // prevent usage of deprecated methods
    'react/no-deprecated': 2,
    // prevent usage of setState in componentDidMount
    'react/no-did-mount-set-state': 2,
    // prevent usage of setState in componentDidUpdate
    'react/no-did-update-set-state': 2,
    // prevent direct mutation of this.state
    'react/no-direct-mutation-state': 2,
    // prevent usage of findDOMNode
    'react/no-find-dom-node': 2,
    // prevent usage of isMounted
    'react/no-is-mounted': 2,
    // prevent multiple component definition per file
    'react/no-multi-comp': 2,
    // prevent usage of the return value of React.render
    'react/no-render-return-value': 2,
    // prevent usage of setState
    'react/no-set-state': 0,
    // prevent using string references in ref attribute
    'react/no-string-refs': 2,
    // prevent usage of unknown DOM property
    'react/no-unknown-property': 2,
    // enforce ES5 or ES6 class for React Components
    'react/prefer-es6-class': 2,
    // enforce stateless React Components to be written as a pure function
    'react/prefer-stateless-function': 0,
    // prevent missing props validation in a React component definition
    'react/prop-types': 2,
    // prevent missing React when using JSX
    'react/react-in-jsx-scope': 2,
    // restrict file extensions that may be required
    'react/require-extension': 0,
    // enforce React components to have a shouldComponentUpdate method
    'react/require-optimization': 0,
    // enforce ES5 or ES6 class for returning value in render function
    'react/require-render-return': 2,
    // prevent extra closing tags for components without children
    'react/self-closing-comp': 2,
    // enforce component methods order
    'react/sort-comp': 2,
    // enforce propTypes declarations alphabetical sorting
    'react/sort-prop-types': 0,

    // ESLint-plugin-React JSX
    // https://github.com/yannickcr/eslint-plugin-react#jsx-specific-rules

    // enforce boolean attributes notation in JSX
    'react/jsx-boolean-value': [2, 'never'],
    // validate closing bracket location in JSX
    'react/jsx-closing-bracket-location': 2,
    // enforce or disallow spaces inside of curly braces in JSX attributes
    'react/jsx-curly-spacing': [2, 'always'],
    // enforce or disallow spaces around equal signs in JSX attributes
    'react/jsx-equals-spacing': [2, 'never'],
    // restrict file extensions that may contain JSX
    'react/jsx-filename-extension': [2, { extensions: ['.js'] }],
    // enforce position of the first prop in JSX
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    // enforce event handler naming conventions in JSX
    'react/jsx-handler-names': 0,
    // validate JSX indentation
    'react/jsx-indent': [2, 2],
    // validate props indentation in JSX
    'react/jsx-indent-props': [2, 2],
    // validate JSX has key prop when in array or iterator
    'react/jsx-key': 2,
    // limit maximum of props on a single line in JSX
    'react/jsx-max-props-per-line': 0,
    // prevent usage of .bind() and arrow functions in JSX props
    'react/jsx-no-bind': 2,
    // prevent comments from being inserted as text nodes
    'react/jsx-no-comment-textnodes': 2,
    // prevent duplicate props in JSX
    'react/jsx-no-duplicate-props': 2,
    // prevent usage of unwrapped JSX strings
    'react/jsx-no-literals': 0,
    // prevent usage of unsafe target='_blank'
    'react/jsx-no-target-blank': 0,
    // disallow undeclared variables in JSX
    'react/jsx-no-undef': 2,
    // enforce PascalCase for user-defined JSX components
    'react/jsx-pascal-case': 2,
    // enforce props alphabetical sorting
    'react/jsx-sort-props': 0,
    // validate spacing before closing bracket in JSX
    'react/jsx-space-before-closing': 2,
    // prevent React to be incorrectly marked as unused
    'react/jsx-uses-react': 2,
    // prevent variables used in JSX to be incorrectly marked as unused
    'react/jsx-uses-vars': 2,
    // prevent missing parentheses around multilines JSX
    'react/jsx-wrap-multilines': 2,

    // eslint-plugin-flowtype
    // https://github.com/gajus/eslint-plugin-flowtype#configuration

    // marks Flow type identifiers as defined
    'flowtype/define-flow-type': 2,
    // requires that all function parameters have type annotations
    'flowtype/require-parameter-type': 0,
    // requires that functions have return type annotation
    'flowtype/require-return-type': 0,
    // makes sure that files have a valid @flow annotation
    'flowtype/require-valid-file-annotation': 2,
    // enforces consistent spacing after the type annotation colon
    'flowtype/space-after-type-colon': [2, 'always'],
    // enforces consistent spacing before the type annotation colon
    'flowtype/space-before-type-colon': [2, 'never'],
    // enforces a consistent naming pattern for type aliases
    'flowtype/type-id-match': 0,
    // marks Flow type alias declarations as used
    'flowtype/use-flow-type': 2,
    // checks for simple Flow syntax errors
    'flowtype/valid-syntax': 2
  }
}
