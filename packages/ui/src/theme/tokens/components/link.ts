import { ColorValue, DesignToken, FontSizeValue } from '../types/designToken';

interface LinkStateTokens {
  color: DesignToken<ColorValue>;
}

interface LinkSizeTokens {
  fontSize: DesignToken<FontSizeValue>;
}

export interface LinkTokens {
  /**
   * @deprecated To be removed in the next major version release, please use _active
   */
  active: LinkStateTokens;
  color: DesignToken<ColorValue>;
  /**
   * @deprecated To be removed in the next major version release, please use _focus
   */
  focus: LinkStateTokens;
  /**
   * @deprecated To be removed in the next major version release, please use _hover
   */
  hover: LinkStateTokens;
  /**
   * @deprecated To be removed in the next major version release, please use _visited
   */
  visited: LinkStateTokens;
  _active?: LinkStateTokens;
  _focus?: LinkStateTokens;
  _hover?: LinkStateTokens;
  _visited?: LinkStateTokens;
}

export const link: LinkTokens = {
  active: {
    color: { value: '{colors.font.active.value}' },
  },
  color: { value: '{colors.font.interactive.value}' },
  focus: {
    color: { value: '{colors.font.focus.value}' },
  },
  hover: {
    color: { value: '{colors.font.hover.value}' },
  },
  visited: {
    color: { value: '{colors.font.interactive.value}' },
  },
};
