module.exports = {
  rules: {

    // Color
    // http://stylelint.io/user-guide/rules/#color

    // specify lowercase or uppercase for hex colors
    'color-hex-case': 'lower',
    // specify short or long notation for hex colors
    'color-hex-length': 'short',
    // require (where possible) or disallow named colors
    'color-named': null,
    // disallow hex colors
    'color-no-hex': null,
    // disallow invalid hex colors
    'color-no-invalid-hex': true,

    // Font Family
    // http://stylelint.io/user-guide/rules/#font-family

    // specify whether or not quotation marks should be used around font family names, and whether single or double
    'font-family-name-quotes': 'single-where-recommended',

    // Font Weight
    // http://stylelint.io/user-guide/rules/#font-weight

    // require numeric or named (where possible) font-weight values
    'font-weight-notation': 'numeric',

    // Function
    // http://stylelint.io/user-guide/rules/#function

    // specify a blacklist of disallowed functions
    'function-blacklist': null,
    // disallow an unspaced operator within calc functions
    'function-calc-no-unspaced-operator': true,
    // require a newline or disallow whitespace after the commas of functions
    'function-comma-newline-after': 'always-multi-line',
    // require a newline or disallow whitespace before the commas of functions
    'function-comma-newline-before': 'never-multi-line',
    // require a single space or disallow whitespace after the commas of functions
    'function-comma-space-after': 'always-single-line',
    // require a single space or disallow whitespace before the commas of functions
    'function-comma-space-before': 'never',
    // disallow direction values in linear-gradient() calls that are not valid according to the standard syntax
    'function-linear-gradient-no-nonstandard-direction': true,
    // limit the number of adjacent empty lines within functions
    'function-max-empty-lines': null,
    // specify lowercase or uppercase for function names
    'function-name-case': 'lower',
    // require a newline or disallow whitespace on the inside of the parentheses of functions
    'function-parentheses-newline-inside': 'always-multi-line',
    // require a single space or disallow whitespace on the inside of the parentheses of functions
    'function-parentheses-space-inside': 'never',
    // require or disallow data URIs for urls
    'function-url-data-uris': null,
    // specify single, double or no quotes for urls
    'function-url-quotes': 'single',
    // specify a whitelist of allowed functions
    'function-whitelist': null,
    // require or disallow whitespace after functions
    'function-whitespace-after': 'always',

    // Number
    // http://stylelint.io/user-guide/rules/#number

    // require or disallow a leading zero for fractional numbers less than 1
    'number-leading-zero': 'always',
    // limit the number of decimal places allowed in numbers
    'number-max-precision': 4,
    // disallow trailing zeros in numbers
    'number-no-trailing-zeros': true,
    // disallow units for zero lengths
    'number-zero-length-no-unit': true,

    // String
    // http://stylelint.io/user-guide/rules/#string

    // disallow (unescaped) newlines in strings
    'string-no-newline': true,
    // specify single or double quotes around strings
    'string-quotes': 'single',

    // Time
    // http://stylelint.io/user-guide/rules/#time

    // disallow animation and transition times under 100ms
    'time-no-imperceptible': true,

    // Unit
    // http://stylelint.io/user-guide/rules/#unit

    // specify a blacklist of disallowed units
    'unit-blacklist': null,
    // specify lowercase or uppercase for units
    'unit-case': 'lower',
    // disallow unknown units
    'unit-no-unknown': true,
    // specify a whitelist of allowed units
    'unit-whitelist': null,

    // Value
    // http://stylelint.io/user-guide/rules/#value

    // disallow vendor prefixes for values
    'value-no-vendor-prefix': true,

    // Value List
    // http://stylelint.io/user-guide/rules/#value-list

    // specify lowercase or uppercase for keywords values
    'value-keyword-case': 'lower',
    // require a newline or disallow whitespace after the commas of value lists
    'value-list-comma-newline-after': 'always-multi-line',
    // require a newline or disallow whitespace before the commas of value lists
    'value-list-comma-newline-before': 'never-multi-line',
    // require a single space or disallow whitespace after the commas of value lists
    'value-list-comma-space-after': 'always-single-line',
    // require a single space or disallow whitespace before the commas of value lists
    'value-list-comma-space-before': 'never',

    // Custom Property
    // http://stylelint.io/user-guide/rules/#custom-property

    // disallow custom properties outside of :root rules
    'custom-property-no-outside-root': null,
    // specify a pattern for custom properties
    'custom-property-pattern': null,

    // Shorthand Property
    // http://stylelint.io/user-guide/rules/#shorthand-property

    // disallow redundant values in shorthand properties
    'shorthand-property-no-redundant-values': true,

    // Property
    // http://stylelint.io/user-guide/rules/#property

    // specify a blacklist of disallowed properties
    'property-blacklist': null,
    // specify lowercase or uppercase for properties
    'property-case': 'lower',
    // disallow vendor prefixes for properties
    'property-no-vendor-prefix': true,
    // specify a blacklist of disallowed units for specific properties
    'property-unit-blacklist': null,
    // specify a whitelist of allowed units for specific properties
    'property-unit-whitelist': null,
    // specify a blacklist of disallowed values for specific properties
    'property-value-blacklist': null,
    // specify a whitelist of allowed values for specific properties
    'property-value-whitelist': null,
    // specify a whitelist of allowed properties
    'property-whitelist': null,

    // Declaration
    // http://stylelint.io/user-guide/rules/#declaration

    // require a single space or disallow whitespace after the bang of declarations
    'declaration-bang-space-after': 'never',
    // require a single space or disallow whitespace before the bang of declarations
    'declaration-bang-space-before': 'always',
    // require a newline or disallow whitespace after the colon of declarations
    'declaration-colon-newline-after': 'always-multi-line',
    // require a single space or disallow whitespace after the colon of declarations
    'declaration-colon-space-after': 'always-single-line',
    // require a single space or disallow whitespace before the colon of declarations
    'declaration-colon-space-before': 'never',
    // disallow !important within declarations
    'declaration-no-important': null,

    // Declaration Block
    // http://stylelint.io/user-guide/rules/#declaration-block

    // disallow duplicate properties within declaration blocks
    'declaration-block-no-duplicate-properties': true,
    // disallow property values that are ignored due to another property value in the same rule
    'declaration-block-no-ignored-properties': true,
    // disallow shorthand properties that override related longhand properties within declaration blocks
    'declaration-block-no-shorthand-property-overrides': true,
    // specify the order of properties within declaration blocks
    'declaration-block-properties-order': null,
    // require a newline or disallow whitespace after the semicolons of declaration blocks
    'declaration-block-semicolon-newline-after': 'always',
    // require a newline or disallow whitespace before the semicolons of declaration blocks
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    // require a single space or disallow whitespace after the semicolons of declaration blocks
    'declaration-block-semicolon-space-after': 'always-single-line',
    // require a single space or disallow whitespace before the semicolons of declaration blocks
    'declaration-block-semicolon-space-before': 'never',
    // limit the number of declaration within single line declaration blocks
    'declaration-block-single-line-max-declarations': null,
    // require or disallow a trailing semicolon within declaration blocks
    'declaration-block-trailing-semicolon': 'always',

    // Block
    // http://stylelint.io/user-guide/rules/#block

    // require a newline or disallow whitespace after the closing brace of blocks
    'block-closing-brace-newline-after': 'always',
    // require a newline or disallow whitespace before the closing brace of blocks
    'block-closing-brace-newline-before': 'always',
    // require a single space or disallow whitespace after the closing brace of blocks
    'block-closing-brace-space-after': 'always-single-line',
    // require a single space or disallow whitespace before the closing brace of blocks
    'block-closing-brace-space-before': 'always-single-line',
    // disallow empty blocks
    'block-no-empty': true,
    // disallow single-line blocks
    'block-no-single-line': true,
    // require a newline after the opening brace of blocks
    'block-opening-brace-newline-after': 'always',
    // require a newline or disallow whitespace before the opening brace of blocks
    'block-opening-brace-newline-before': null,
    // require a single space or disallow whitespace after the opening brace of blocks
    'block-opening-brace-space-after': 'always-single-line',
    // require a single space or disallow whitespace before the opening brace of blocks
    'block-opening-brace-space-before': 'always',

    // Selector
    // http://stylelint.io/user-guide/rules/#selector

    // require a single space or disallow whitespace on the inside of the brackets within attribute selectors
    'selector-attribute-brackets-space-inside': 'never',
    // specify a pattern for class selectors
    'selector-class-pattern': null,
    // require a single space or disallow whitespace after the combinators of selectors
    'selector-combinator-space-after': 'always',
    // require a single space or disallow whitespace before the combinators of selectors
    'selector-combinator-space-before': 'always',
    // specify a pattern for id selectors
    'selector-id-pattern': null,
    // limit the specificity of selectors
    'selector-max-specificity': null,
    // disallow attribute selectors
    'selector-no-attribute': null,
    // disallow combinators in selectors
    'selector-no-combinator': null,
    // disallow id selectors
    'selector-no-id': true,
    // disallow qualifying a selector by type
    'selector-no-qualifying-type': true,
    // disallow type selectors
    'selector-no-type': null,
    // disallow the universal selector
    'selector-no-universal': null,
    // disallow vendor prefixes for selectors
    'selector-no-vendor-prefix': true,
    // specify lowercase or uppercase for pseudo-class selectors
    'selector-pseudo-class-case': 'lower',
    // require a single space or disallow whitespace on the inside of the parentheses within pseudo-class selectors
    'selector-pseudo-class-parentheses-space-inside': 'never',
    // specify lowercase or uppercase for pseudo-element selectors
    'selector-pseudo-element-case': 'lower',
    // specify single or double colon notation for applicable pseudo-elements
    'selector-pseudo-element-colon-notation': 'double',
    // disallow the composition of :root in selectors
    'selector-root-no-composition': true,
    // specify lowercase or uppercase for type selector
    'selector-type-case': 'lower',

    // Selector List
    // http://stylelint.io/user-guide/rules/#selector-list

    // require a newline or disallow whitespace after the commas of selector lists
    'selector-list-comma-newline-after': 'always-multi-line',
    // require a newline or disallow whitespace before the commas of selector lists
    'selector-list-comma-newline-before': 'never-multi-line',
    // require a single space or disallow whitespace after the commas of selector lists
    'selector-list-comma-space-after': 'always-single-line',
    // require a single space or disallow whitespace before the commas of selector lists
    'selector-list-comma-space-before': 'never',

    // Root Rule
    // http://stylelint.io/user-guide/rules/#root-rule

    // disallow standard properties inside :root rules
    'root-no-standard-properties': true,

    // Rule
    // http://stylelint.io/user-guide/rules/#rule

    // require or disallow an empty line before nested rules
    'rule-nested-empty-line-before': 'always',
    // require or disallow an empty line before non-nested rules
    'rule-non-nested-empty-line-before': 'always',

    // Media Feature
    // http://stylelint.io/user-guide/rules/#media-feature

    // require a single space or disallow whitespace after the colon in media features
    'media-feature-colon-space-after': 'always',
    // require a single space or disallow whitespace before the colon in media features
    'media-feature-colon-space-before': 'never',
    // disallow vendor prefixes for media feature names
    'media-feature-name-no-vendor-prefix': true,
    // disallow missing punctuation for non-boolean media features
    'media-feature-no-missing-punctuation': true,
    // require a single space or disallow whitespace after the range operator in media features
    'media-feature-range-operator-space-after': 'always',
    // require a single space or disallow whitespace before the range operator in media features
    'media-feature-range-operator-space-before': 'always',

    // Custom Media
    // http://stylelint.io/user-guide/rules/#custom-media

    // specify a pattern for custom media query names
    'custom-media-pattern': null,

    // Media Query
    // http://stylelint.io/user-guide/rules/#media-query

    // require a single space or disallow whitespace on the inside of the parentheses within media queries
    'media-query-parentheses-space-inside': 'never',

    // Media Query List
    // http://stylelint.io/user-guide/rules/#media-query-list

    // require a newline or disallow whitespace after the commas of media query lists
    'media-query-list-comma-newline-after': 'always-multi-line',
    // require a newline or disallow whitespace before the commas of media query lists
    'media-query-list-comma-newline-before': 'never-multi-line',
    // require a single space or disallow whitespace after the commas of media query lists
    'media-query-list-comma-space-after': 'always-single-line',
    // require a single space or disallow whitespace before the commas of media query lists
    'media-query-list-comma-space-before': 'never',

    // At Rule
    // http://stylelint.io/user-guide/rules/#at-rule

    // require or disallow an empty line before at-rules
    'at-rule-empty-line-before': 'always',
    // specify lowercase or uppercase for at-rules names
    'at-rule-name-case': 'lower',
    // disallow vendor prefixes for at-rules
    'at-rule-no-vendor-prefix': true,
    // require a newline after the semicolon of at-rules
    'at-rule-semicolon-newline-after': 'always',

    // Comment
    // http://stylelint.io/user-guide/rules/#comment

    // require or disallow an empty line before comments
    'comment-empty-line-before': 'always',
    // require or disallow whitespace on the inside of comment markers
    'comment-whitespace-inside': 'always',
    // specify a blacklist of disallowed words within comments
    'comment-word-blacklist': null,

    // General / Sheet
    //http://stylelint.io/user-guide/rules/#general--sheet

    // specify indentation
    'indentation': 2,
    // limit the number of adjacent empty lines
    'max-empty-lines': 2,
    // limit the length of a line
    'max-line-length': null,
    // limit the depth of nesting
    'max-nesting-depth': 2,
    // disallow browser hacks that are irrelevant to the browsers you are targeting
    'no-browser-hacks': true,
    // disallow selectors of lower specificity from coming after overriding selectors of higher specificity
    'no-descending-specificity': null,
    // disallow duplicate selectors
    'no-duplicate-selectors': true,
    // disallow end-of-line whitespace
    'no-eol-whitespace': true,
    // disallow colors that are suspiciously close to being identical
    'no-indistinguishable-colors': null,
    // disallow double-slash comments (//...) which are not supported by CSS
    'no-invalid-double-slash-comments': null,
    // disallow missing end-of-file newline
    'no-missing-eof-newline': true,
    // disallow animation names that do not correspond to a @keyframes declaration
    'no-unknown-animations': true,
    // disallow features that are unsupported by the browsers that you are targeting
    'no-unsupported-browser-features': null,
    // require a reason comment before or after stylelint-disable comments
    'stylelint-disable-reason': null
  }
}
