/* DO NOT EDIT DIRECTLY */
/* This file is autogenerated by "docs/scripts/generate-props-tables.ts" script. */
export const propsData = {
  displayName: 'TextField',
  mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea',
  htmlElement: 'textarea',
  propsLists: [
    {
      name: 'TextField',
      props: [
        {
          name: 'autoComplete',
          isOptional: true,
          type: 'string',
          description:
            'Specifies permissions for browser UA to autocomplete field. See: [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)',
        },
        {
          name: 'checked',
          isOptional: true,
          type: 'boolean',
          description:
            'If checked is provided, this will be a controlled checkbox or radio.',
        },
        {
          name: 'className',
          isOptional: true,
          type: 'string',
          description: 'Additional CSS class name for component',
        },
        {
          name: 'defaultChecked',
          isOptional: true,
          type: 'boolean',
          description:
            'Use this to initialize an uncontrolled checkbox or radio.',
        },
        {
          name: 'defaultValue',
          isOptional: true,
          type: "React.AllHTMLAttributes<'input'>['defaultValue']",
          description:
            'Use this to provide a default value for an uncontrolled field.',
        },
        {
          name: 'descriptiveText',
          isOptional: true,
          type: 'React.ReactNode',
          description:
            'Provides additional information needed to fill field     (e.g. password requirements, etc.)',
        },
        {
          name: 'enterKeyHint',
          isOptional: true,
          type: 'EnterKeyHint',
          description:
            'Defines what action label (or icon) to present for the enter key on virtual keyboards. See: [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/enterkeyhint)',
        },
        {
          name: 'errorMessage',
          isOptional: true,
          type: 'string',
          description:
            'When defined and &#96;hasError&#96; is true, show error message',
        },
        {
          name: 'FieldClearButtonProps',
          isOptional: true,
          type: 'extends Partial<FieldGroupIconButtonProps>',
          description: '',
        },
        {
          name: 'FieldDescriptionProps',
          isOptional: true,
          type:
            'extends TextProps,\n' +
            "    Pick<FieldProps, 'descriptiveText' | 'labelHidden'>",
          description: '',
        },
        {
          name: 'FieldErrorMessageProps',
          isOptional: true,
          type:
            'extends TextProps,\n' +
            "    Pick<FieldProps, 'errorMessage'>,\n" +
            "    Pick<InputProps, 'hasError'>",
          description: '',
        },
        {
          name: 'hasError',
          isOptional: true,
          type: 'boolean',
          description: 'Indicates that Field is in error state.',
        },
        {
          name: 'id',
          isOptional: true,
          type: 'string',
          description: 'Unique identifier',
        },
        {
          name: 'innerEndComponent',
          isOptional: true,
          type: 'React.ReactNode',
          description:
            'FieldGroupIconButton component to show inside of input at end',
        },
        {
          name: 'innerStartComponent',
          isOptional: true,
          type: 'React.ReactNode',
          description:
            'FieldGroupIconButton component to show inside of input at start',
        },
        {
          name: 'inputMode',
          isOptional: true,
          type: 'InputMode',
          description:
            'Provides hint for virtual keyboard shown See: [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode) Default: @default "text"',
        },
        {
          name: 'isDisabled',
          isOptional: true,
          type: 'boolean',
          description:
            'Determines whether field should be disabled. Default: false',
        },
        {
          name: 'isReadOnly',
          isOptional: true,
          type: 'boolean',
          description:
            'Determines whether field should be immutable. See: [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-readonly) Default: false',
        },
        {
          name: 'isRequired',
          isOptional: true,
          type: 'boolean',
          description: 'Whether field should be marked required.',
        },
        {
          name: 'label',
          isOptional: false,
          type: 'React.ReactNode',
          description: 'Label text for field (required)',
        },
        {
          name: 'labelHidden',
          isOptional: true,
          type: 'boolean',
          description:
            'Visually hide label (not recommended in most cases) Default: false',
        },
        {
          name: 'maxLength',
          isOptional: true,
          type: 'number',
          description: 'Text contents maximum length.',
        },
        {
          name: 'name',
          isOptional: true,
          type: 'string',
          description:
            'Name of the field. Submitted with the form as part of a name/value pair.',
        },
        {
          name: 'outerEndComponent',
          isOptional: true,
          type: 'React.ReactNode',
          description: 'Component(s) to show after input',
        },
        {
          name: 'outerStartComponent',
          isOptional: true,
          type: 'React.ReactNode',
          description: 'Component(s) to show before input',
        },
        {
          name: 'placeholder',
          isOptional: true,
          type: 'string',
          description:
            'Placeholder text shown when field is empty Accessibility tip: avoid putting important instructions for filling out the TextField in the placeholder. Use descriptiveText for important instructions.',
        },
        {
          name: 'resize',
          isOptional: true,
          type: 'Property.Resize',
          description:
            'Defines if (and how) an element is resizable by the user',
        },
        {
          name: 'rows',
          isOptional: true,
          type: 'number',
          description:
            'Controls height based on number of rows of text to display.',
        },
        {
          name: 'size',
          isOptional: true,
          type: 'InputSizes',
          description:
            'Changes the font-size, padding, and height of the field.',
        },
        {
          name: 'style',
          isOptional: true,
          type: 'React.CSSProperties',
          description:
            'Accepts a JavaScript object with camelCased properties rather than a CSS string. This is consistent with the DOM style JavaScript property, is more efficient, and prevents XSS security holes. See: [React docs](https://reactjs.org/docs/dom-elements.html#style)',
        },
        {
          name: 'testId',
          isOptional: true,
          type: 'string',
          description:
            'Used to provide a &#96;data-testid&#96; attribute for testing purposes',
        },
        {
          name: 'TextAreaFieldMultilineProps',
          isOptional: true,
          type: 'extends TextFieldOptions,\n    TextAreaProps',
          description: '',
        },
        {
          name: 'TextInputFieldProps',
          isOptional: true,
          type: 'extends TextFieldOptions, InputProps',
          description: '',
        },
        {
          name: 'type',
          isOptional: true,
          type: 'React.HTMLInputTypeAttribute',
          description: 'Input field type.',
        },
        {
          name: 'value',
          isOptional: true,
          type: "React.AllHTMLAttributes<'input'>['value']",
          description: 'If value is provided, this will be a controlled field.',
        },
        {
          name: 'variation',
          isOptional: true,
          type: 'FieldVariations',
          description: 'Variants.',
        },
      ],
      utilityProps: [
        {
          name: 'Layout',
          props: [
            {
              name: 'alignContent',
              isOptional: true,
              type: 'ResponsiveStyle<Property.AlignContent>',
              description:
                "Sets the distribution of space between and around content items along a flexbox's cross-axis or a grid's block axis. See: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content)",
            },
            {
              name: 'alignItems',
              isOptional: true,
              type: 'ResponsiveStyle<Property.AlignItems>',
              description:
                'Sets the align-self value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area. See: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)',
            },
            {
              name: 'area',
              isOptional: true,
              type: 'ResponsiveStyle<Property.GridArea>',
              description:
                "Specifies a grid item's size and location within a grid by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its grid area. See: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area)",
            },
            {
              name: 'basis',
              isOptional: true,
              type: 'ResponsiveStyle<Property.FlexBasis<0 | (string & {})>>',
              description:
                'Default size of element before remaining space is distributed',
            },
            {
              name: 'column',
              isOptional: true,
              type: 'ResponsiveStyle<Property.GridColumn>',
              description:
                "Specifies a grid item's size and location within a grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area. See: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column)",
            },
            {
              name: 'columnEnd',
              isOptional: true,
              type: 'ResponsiveStyle<Property.GridColumnEnd>',
              description:
                "Specifies a grid item's end position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the block-end edge of its grid area. See: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end)",
            },
            {
              name: 'columnGap',
              isOptional: true,
              type: 'ResponsiveStyle<SpaceKeys<StyleToken<Property.GridColumnGap<0 | (string & {})>>>>',
              description:
                'Controls the spacing between Flex/Grid child columns See: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap)',
            },
            {
              name: 'columnSpan',
              isOptional: true,
              type: 'ResponsiveStyle<GridSpanType>',
              description:
                'Makes it possible for an element to span across all columns when its value is set to all. See: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/column-span)',
            },
            {
              name: 'columnStart',
              isOptional: true,
              type: 'ResponsiveStyle<Property.GridColumnStart>',
              description:
                "Specifies a grid item's start position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement. This start position defines the block-start edge of the grid area. See: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start)",
            },
            {
              name: 'direction',
              isOptional: true,
              type: 'ResponsiveStyle<Property.FlexDirection>',
              description:
                'Sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed). (maps to flex-direction CSS property)',
            },
            {
              name: 'flex',
              isOptional: true,
              type: 'ResponsiveStyle<Property.Flex<0 | (string & {})>>',
              description: 'Shorthand for flex grow / shrink / basis',
            },
            {
              name: 'gap',
              isOptional: true,
              type: 'ResponsiveStyle<SpaceKeys<StyleToken<Property.Gap<0 | (string & {})>>>>',
              description:
                'Controls the spacing between child components. Shorthand for rowGap and columnGap. See: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/gap)',
            },
            {
              name: 'grow',
              isOptional: true,
              type: 'ResponsiveStyle<Property.FlexGrow>',
              description: 'Ability for flex item to grow',
            },
            {
              name: 'justifyContent',
              isOptional: true,
              type: 'ResponsiveStyle<Property.JustifyContent>',
              description:
                'Defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container. See: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)',
            },
            {
              name: 'order',
              isOptional: true,
              type: 'ResponsiveStyle<Property.Order>',
              description:
                'Sets the order to lay out an item in a flex or grid container.',
            },
            {
              name: 'row',
              isOptional: true,
              type: 'ResponsiveStyle<Property.GridRow>',
              description:
                "Specifies a grid item's size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area. See: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row)",
            },
            {
              name: 'rowEnd',
              isOptional: true,
              type: 'ResponsiveStyle<Property.GridRowEnd>',
              description:
                "Specifies a grid item's end position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-end edge of its grid area. See: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end)",
            },
            {
              name: 'rowGap',
              isOptional: true,
              type: 'ResponsiveStyle<SpaceKeys<StyleToken<Property.RowGap<0 | (string & {})>>>>',
              description:
                'Controls the spacing between Flex/Grid child rows See: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap)',
            },
            {
              name: 'rowSpan',
              isOptional: true,
              type: 'ResponsiveStyle<GridSpanType>',
              description: '',
            },
            {
              name: 'rowStart',
              isOptional: true,
              type: 'ResponsiveStyle<Property.GridRowStart>',
              description:
                "Specifies a grid item's start position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start edge of its grid area. See: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start)",
            },
            {
              name: 'shrink',
              isOptional: true,
              type: 'ResponsiveStyle<Property.FlexShrink>',
              description: 'Ability for flex item to shrink',
            },
            {
              name: 'wrap',
              isOptional: true,
              type: 'ResponsiveStyle<Property.FlexWrap>',
              description:
                'The flexWrap property is set on containers and it controls what happens when children overflow the size of the container along the main axis. By default, children are forced into a single line (which can shrink elements). If wrapping is allowed, items are wrapped into multiple lines along the main axis if needed. (maps to flex-wrap CSS property)',
            },
          ],
        },
      ],
    },
  ],
};
