export type White = {
  /**
   * @string `#FFFFFF`
   */
  default: string;
};

export type Teal = {
  /**
   * @string `#2C91AD`
   */
  default: string;
  /**
   * @string `#206A7F`
   */
  dark: string;
  /**
   * @string `#54B8D3`
   */
  light: string;
  /**
   * @string `#EEF7FA`
   */
  soft: string;
};

export type Green = {
  /**
   * @string `#29A152`
   */
  default: string;
  /**
   * @string `#1D7246`
   */
  dark: string;
  /**
   * @string `#47D089`
   */
  light: string;
  /**
   * @string `#DDF5E4`
   */
  soft: string;
};

export type Gray = {
  /**
   * @string `#1D1D26`
   */
  100: string;
  /**
   * @string `#363A40`
   */
  200: string;
  /**
   * @string `#4D5766`
   */
  300: string;
  /**
   * @string `#828C99`
   */
  400: string;
  /**
   * @string `#A1A8B3`
   */
  500: string;
  /**
   * @string `#B8C0CC`
   */
  600: string;
  /**
   * @string `#CAD3E0`
   */
  700: string;
  /**
   * @string `#EDEFF2`
   */
  800: string;
  /**
   * @string `#F8FAFD`
   */
  900: string;
};

export type Palette = {
  /**
   * @object {
   *
   * * `default: #FFFFFF`
   *
   * }
   */
  white: White;
  /**
   * @object {
   *
   * * `default: #2C91AD`
   * * `dark: #206A7F`
   * * `light: #54B8D3`
   * * `soft: #EEF7FA`
   *
   * }
   */
  teal: Teal;
  /**
   * @object {
   *
   * * `default: #29A152`
   * * `dark: #1D7246`
   * * `light: #47D089`
   * * `soft: #DDF5E4`
   *
   * }
   */
  green: Green;
  /**
   * @object {
   *
   * * `100: #1D1D26`
   * * `200: #363A40`
   * * `300: #4D5766`
   * * `400: #828C99`
   * * `500: #A1A8B3`
   * * `600: #B8C0CC`
   * * `700: #CAD3E0`
   * * `800: #EDEFF2`
   * * `900: #F8FAFD`
   *
   * }
   */
  gray: Gray;
};

export type Auxiliary = {
  /**
   * @string `#E61739`
   */
  negative: string;
  /**
   * @string `#F27A00`
   */
  warning: string;
  /**
   * @string `#29A152`
   *
   * * `teal.default`
   *
   */
  informational: string;
};

export type Primary = {
  /**
   * @string `#2C91AD`
   *
   * * `teal.default`
   *
   */
  teal: string;
  /**
   * @string `#29A152`
   *
   * * `green.default`
   *
   */
  green: string;
  /**
   * @string `#1D1D26`
   *
   * * `gray[100]`
   *
   */
  'gray-100': string;
  /**
   * @string `#FFFFFF`
   *
   * * `white.default`
   *
   */
  white: string;
};

export type Neutral = {
  /**
   * @string `#1D1D26`
   *
   * * `gray[100]`
   *
   */
  100: string;
  /**
   * @string `#4D5766`
   *
   * * `gray[300]`
   *
   */
  300: string;
  /**
   * @string `#CAD3E0`
   *
   * * `gray[700]`
   *
   */
  700: string;
  /**
   * @string `#FFFFFF`
   *
   * * `white.default`
   *
   */
  900: string;
};

export type Colors = {
  /**
   * @object {
   *
   * * `white`
   * * `teal`
   * * `green`
   * * `gray`
   *
   * }
   */
  palette: Palette;
  /**
   * @object {
   *
   * * `100: #1D1D26`
   * * `300: #4D5766`
   * * `700: #CAD3E0`
   * * `900: #FFFFFF`
   *
   * }
   */
  neutral: Neutral;
  /**
   * @object {
   *
   * * `teal: #2C91AD`
   * * `green: #29A152`
   * * `'gray-100': #1D1D26`
   * * `white: #FFFFFF`
   *
   * }
   */
  primary: Primary;
  /**
   * @object {
   *
   * * `negative: #E61739`
   * * `warning: #F27A00`
   * * `informational: #29A152`
   *
   * }
   */
  auxiliary: Auxiliary;
};
