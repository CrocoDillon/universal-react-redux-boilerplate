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

    // specify whether or not quotation marks should be used around font family names
    'font-family-name-quotes': 'always-where-recommended',

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
    // disallow scheme-relative urls
    'function-url-no-scheme-relative': true,
    // require or disallow quotes for urls
    'function-url-quotes': 'always',
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

    // String
    // http://stylelint.io/user-guide/rules/#string

    // disallow (unescaped) newlines in strings
    'string-no-newline': true,
    // specify single or double quotes around strings
    'string-quotes': 'single',

    // Length
    // http://stylelint.io/user-guide/rules/#length

    // disallow units for zero lengths
    'length-zero-no-unit': true,

    // Time
    // http://stylelint.io/user-guide/rules/#time

    // disallow animation and transition less than or equal to 100ms
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

    // specify lowercase or uppercase for keywords values
    'value-keyword-case': 'lower',
    // disallow vendor prefixes for values
    'value-no-vendor-prefix': true,

    // Value List
    // http://stylelint.io/user-guide/rules/#value-list

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

    // require or disallow an empty line before custom properties
    'custom-property-empty-line-before': 'always',
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
    // disallow unknown properties
    'property-no-unknown': true,
    // disallow vendor prefixes for properties
    'property-no-vendor-prefix': true,
    // specify a whitelist of allowed properties
    'property-whitelist': null,

    // Keyframe declaration
    // http://stylelint.io/user-guide/rules/#keyframe-declaration

    // disallow !important within keyframe declarations
    'keyframe-declaration-no-important': true,

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
    // require or disallow an empty line before declarations
    'declaration-empty-line-before': null,
    // disallow !important within declarations
    'declaration-no-important': null,
    // specify a blacklist of disallowed property and unit pairs within declarations
    'declaration-property-unit-blacklist': {},
    // specify a whitelist of allowed property and unit pairs within declarations
    'declaration-property-unit-whitelist': {},
    // specify a blacklist of disallowed property and value pairs within declarations
    'declaration-property-value-blacklist': {},
    // specify a whitelist of allowed property and value pairs within declarations
    'declaration-property-value-whitelist': {},

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

    // require or disallow an empty line before the closing brace of blocks
    'block-closing-brace-empty-line-before': 'never',
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
    // specify a blacklist of disallowed attribute operators
    'selector-attribute-operator-blacklist': [],
    // require a single space or disallow whitespace after operators within attribute selectors
    'selector-attribute-operator-space-after': 'never',
    // require a single space or disallow whitespace before operators within attribute selectors
    'selector-attribute-operator-space-before': 'never',
    // specify a whitelist of allowed attribute operators
    'selector-attribute-operator-whitelist': null,
    // require or disallow quotes for attribute values
    'selector-attribute-quotes': 'always',
    // specify a pattern for class selectors
    'selector-class-pattern': null,
    // require a single space or disallow whitespace after the combinators of selectors
    'selector-combinator-space-after': 'always',
    // require a single space or disallow whitespace before the combinators of selectors
    'selector-combinator-space-before': 'always',
    // specify a pattern for id selectors
    'selector-id-pattern': null,
    // limit the number of compound selectors in a selector
    'selector-max-compound-selectors': 3,
    // limit the specificity of selectors
    'selector-max-specificity': null,
    // specify a pattern for the selectors of rules nested within rules
    'selector-nested-pattern': null,
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
    // specify a blacklist of disallowed pseudo-class selectors
    'selector-pseudo-class-blacklist': [],
    // specify lowercase or uppercase for pseudo-class selectors
    'selector-pseudo-class-case': 'lower',
    // disallow unknown pseudo-class selectors
    'selector-pseudo-class-no-unknown': true,
    // require a single space or disallow whitespace on the inside of the parentheses within pseudo-class selectors
    'selector-pseudo-class-parentheses-space-inside': 'never',
    // specify a whitelist of allowed pseudo-class selectors
    'selector-pseudo-class-whitelist': null,
    // specify lowercase or uppercase for pseudo-element selectors
    'selector-pseudo-element-case': 'lower',
    // specify single or double colon notation for applicable pseudo-elements
    'selector-pseudo-element-colon-notation': 'double',
    // disallow unknown pseudo-element selectors
    'selector-pseudo-element-no-unknown': true,
    // disallow the composition of :root in selectors
    'selector-root-no-composition': true,
    // specify lowercase or uppercase for type selector
    'selector-type-case': 'lower',
    // disallow unknown type selectors
    'selector-type-no-unknown': true,
    // limit the number of adjacent empty lines within selectors
    'selector-max-empty-lines': 0,

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
    // specify lowercase or uppercase for media feature names
    'media-feature-name-case': 'lower',
    // disallow vendor prefixes for media feature names
    'media-feature-name-no-vendor-prefix': true,
    // disallow missing punctuation for non-boolean media features
    'media-feature-no-missing-punctuation': true,
    // require a single space or disallow whitespace on the inside of the parentheses within media features
    'media-feature-parentheses-space-inside': 'never',
    // require a single space or disallow whitespace after the range operator in media features
    'media-feature-range-operator-space-after': 'always',
    // require a single space or disallow whitespace before the range operator in media features
    'media-feature-range-operator-space-before': 'always',

    // Custom Media
    // http://stylelint.io/user-guide/rules/#custom-media

    // specify a pattern for custom media query names
    'custom-media-pattern': null,

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

    // At-Rule
    // http://stylelint.io/user-guide/rules/#at-rule

    // specify a blacklist of disallowed at-rules
    'at-rule-blacklist': [],
    // require or disallow an empty line before at-rules
    'at-rule-empty-line-before': 'always',
    // specify lowercase or uppercase for at-rules names
    'at-rule-name-case': 'lower',
    // require a newline after at-rule names
    'at-rule-name-newline-after': 'always-multi-line',
    // require a single space after at-rule names
    'at-rule-name-space-after': 'always-single-line',
    // disallow unknown at-rules
    'at-rule-no-unknown': true,
    // disallow vendor prefixes for at-rules
    'at-rule-no-vendor-prefix': true,
    // require a newline after the semicolon of at-rules
    'at-rule-semicolon-newline-after': 'always',
    // specify a whitelist of allowed at-rules
    'at-rule-whitelist': null,

    // stylelint-disable comment
    // http://stylelint.io/user-guide/rules/#stylelint-disable-comment

    // require a reason comment before or after stylelint-disable comments
    'stylelint-disable-reason': null,

    // Comment
    // http://stylelint.io/user-guide/rules/#comment

    // require or disallow an empty line before comments
    'comment-empty-line-before': 'always',
    // disallow empty comments
    'comment-no-empty': true,
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
    // disallow empty sources
    'no-empty-source': true,
    // disallow end-of-line whitespace
    'no-eol-whitespace': true,
    // disallow extra semicolons
    'no-extra-semicolons': true,
    // disallow colors that are suspiciously close to being identical
    'no-indistinguishable-colors': null,
    // disallow double-slash comments (//...) which are not supported by CSS
    'no-invalid-double-slash-comments': null,
    // disallow missing end-of-source newlines
    'no-missing-end-of-source-newline': true,
    // disallow animation names that do not correspond to a @keyframes declaration
    'no-unknown-animations': true,
    // disallow features that are unsupported by the browsers that you are targeting
    'no-unsupported-browser-features': null
  }
}
