import { useContext } from 'react';

import { DefaultTheme, ThemeContext } from 'styled-components';

export const useTheme = (): DefaultTheme => useContext(ThemeContext);

export default useTheme;
