import 'styled-components';

import { Colors } from '../styles/theme/light/color/types';
import { Typography } from '../styles/theme/light/typography/types';

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: string;
    color: Colors;
    typography: Typography;
    border: {
      '0px': string;
      '4px': string;
      '8px': string;
      '10px': string;
      '16px': string;
    };
  }
}
