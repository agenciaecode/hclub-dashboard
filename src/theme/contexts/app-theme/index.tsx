import React, { createContext, useMemo } from 'react';

import { ThemeProvider } from 'styled-components';

import { light } from '../../styles/theme/light';

import { DataAppThemeContext, AppThemeProps } from './types';

export const AppThemeContext = createContext({} as DataAppThemeContext);

export const AppTheme = ({ children }: AppThemeProps): React.ReactElement => {
  const value = useMemo(
    () => ({
      theme: 'light',
    }),
    [],
  );

  const theme = useMemo(
    () => ({
      ...light,
    }),
    [],
  );

  return (
    <AppThemeContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppThemeContext.Provider>
  );
};
