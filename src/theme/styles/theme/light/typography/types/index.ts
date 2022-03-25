export type FontFamily = {
  fontFamily: string;
  fontWeight: number;
  fontStyle: string;
  path: string;
};

export type Family = {
  /**
   * @string `Fira Sans`
   * @object {
   *
   * * `regular: FiraSans-Regular`
   * * `medium: FiraSans-Medium`
   * * `semiBold: FiraSans-SemiBold`
   *
   * }
   */
  default: {
    /**
     * @object {
     *
     * * `fontFamily: Raleway-Regular`
     * * `fontWeight: 400`
     * * `fontStyle: normal`
     *
     * }
     */
    regular: FontFamily;
    /**
     * @object {
     *
     * * `fontFamily: Raleway-Medium`
     * * `fontWeight: 500`
     * * `fontStyle: normal`
     *
     * }
     */
    medium: FontFamily;
    /**
     * @object {
     *
     * * `fontFamily: Raleway-Bold`
     * * `fontWeight: 700`
     * * `fontStyle: normal`
     *
     * }
     */
    bold: FontFamily;
  };
};

export type Size = {
  /**
   * @number `1.2 [12px]`
   */
  sm: number;
  /**
   * @number `1.6 [16px]`
   */
  base: number;
  /**
   * @number `2.0 [20px]`
   */
  lg: number;
  /**
   * @number `2.4 [24px]`
   */
  xl: number;
  /**
   * @number `3.0 [30px]`
   */
  '2xl': number;
  /**
   * @number `3.4 [34px]`
   */
  '3xl': number;
};

export type LineHeight = {
  /**
   * @number `1.4 [14px]`
   */
  sm: number;
  /**
   * @number `1.9 [19px]`
   */
  base: number;
  /**
   * @number `2.3 [23px]`
   */
  lg: number;
  /**
   * @number `2.8 [28px]`
   */
  xl: number;
  /**
   * @number `3.5 [35px]`
   */
  '2xl': number;
  /**
   * @number `4.0 [40px]`
   */
  '3xl': number;
};

export type Typography = {
  /**
   * @object {
   *
   * * `default: Raleway`
   *
   * }
   */
  family: Family;
  /**
   * @object {
   * * `sm: 1.2 [12]`
   * * `base: 1.6 [16]`
   * * `lg: 2.0 [20]`
   * * `xl: 2.4 [24]`
   * * `'2xl': 3.0 [30]`
   * * `'3xl': 3.4 [34]`
   * }
   */
  size: Size;
  /**
   * @object {
   * * `sm: 1.4 [14]`
   * * `base: 1.9 [19]`
   * * `lg: 2.3 [23]`
   * * `xl: 2.8 [28]`
   * * `'2xl': 3.5 [35]`
   * * `'3xl': 4.0 [40]`
   * }
   */
  lineHeight: LineHeight;
};
