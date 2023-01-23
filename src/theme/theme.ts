import { amber, cyan } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const spotUSTheme = createTheme({
  palette: {
    primary: {
      main: '#A1B0BF',
      contrastText: '#293f54',
      dark: '#7C8D9E',
      light: '#C5D7E8'
    },
    secondary: amber,
    third: {
      main: '#131e42',
      dark: '#0D1633',
      contrastText: '#050c24',
      light: '#3b4f96'
    },
    success: cyan,
    error: {
      main: '#ffc400',
      dark: '#ffa000',
      contrastText: '#9c6802',
      light: '#ffd54f'
    },
    info: {
      main: '#7C8D9E',
      light: '#8797a8',
      dark: '#617080',
      contrastText: '#2a435c'
    },
    text: {
      lightBorder: 'rgba(240, 240, 240, .3)',
      light: '#F0F0F0',
      dark: '#0D1633',
      error: '#ab0c07'
    },
    background: {
      dark: '#0D1633',
      light: '#6081D3',
      grey: '#A1B0BF',
      darkGrey: '#7C8D9E',
    }
  },
  typography: {
    fontSize: 12,
    h2: {
      fontSize: 36,
      color: '#F0F0F0',
      margin: '8px 0 16px'
    },
    h3: {
      fontSize: 20
    },
    h4: {
      fontSize: 16
    },
    body1: {
      color: '#0D1633',
      fontWeight: '500 !important',
      letterSpacing: 0.4,
      lineHeight: '20px',
      fontSize: 14
    },
    body2: {
      color: '#F0F0F0',
      lineHeight: '22px',
      fontWeight: '500 !important',
      letterSpacing: 0.4,
      fontSize: 14
    },

  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: '600 !important',
          textTransform: 'lowercase',
          borderRadius: 24,
        }
      }
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 760,
      md: 1070,
      lg: 1460,
      xl: 1920,
    }
  },
});

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    third: PaletteColor;
  }

  interface PaletteOptions {
    third: PaletteColorOptions;
  }

  interface TypeText {
    white: string;
    lightBorder: string;
    light: string;
    dark: string;
    error: string;
  }

  interface TypeBackground {
    light: string;
    dark: string;
    grey: string;
    darkGrey: string;
  }
}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    third: true;
  }
}


export default spotUSTheme;