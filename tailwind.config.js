/* refer for more details https://tailwindcss.com/docs/configuration */

module.exports = {
  content: ['src/**/*.{html,js, jsx, tsx, ts}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#981C1B',

          secondary: '#474747',

          accent: '#1FB2A6',

          neutral: '#191D24',

          'base-100': '#2A303C',

          info: '#3ABFF8',

          success: '#36D399',

          warning: '#FBBD23',

          error: '#F87272',
        },
      },
    ],
  },
  darkMode: 'media',
  theme: {
    fontFamily: {
      primary: ['Poppins'],
      secondary: ['Open Sans'],
    },
    borderRadius: {
      none: '0',
      tiny: '5px',
      sm: '8px',
      DEFAULT: '12px',
      md: '14px',
      lg: '24px',
      full: '9999px',
    },
    minWidth: {
      0: '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
      300: '300px',
      '90vw': '90vw',
    },
    minHeight: {
      500: '500px',
    },
    fontSize: {
      tiny: '8px',
      xs: '12px',
      sm: '14px',
      base: '15px',
      lg: '16px',
      xl: '35px',
      '2xl': '45px',
      '3xl': '75px',
    },
    colors: {
      transparent: 'transparent',
      main: '#991b1b',
      mainSecondary: '#db5858',
      ratings: '#2226D8',
      white: '#ffffff',
      grey: {
        500: '#3c3d44',
      },
      yellow: {
        500: '#f2b619',
      },
      success: {
        500: '#95c602',
      },
      danger: {
        500: '#ff1717',
      },
    },
    extend: {
      aspectRatio: {
        poster: '8 / 13',
      },
      width: {
        300: '300px',
        '1/20': '5%',
        '1/10': '10%',
        '1.5/10': '15%',
        '2.5/10': '25%',
        '3/10': '30%',
        '3.5/10': '35%',
        '4.5/10': '45%',
        '5.5/10': '55%',
        '6.5/10': '65%',
        '7/10': '70%',
        '8.5/10': '85%',
        '9/10': '90%',
        '9.5/10': '95%',
      },
      height: {
        500: '500px',
        '1/10': '10%',
        '1.5/10': '15%',
        '3/10': '30%',
        '3.5/10': '35%',
        '4.5/10': '45%',
        '5.5/10': '55%',
        '6.5/10': '65%',
        '7/10': '70%',
        '8.5/10': '85%',
        '9/10': '90%',
        '9.5/10': '95%',
      },
    },
  },
  variants: {},
  plugins: [require('daisyui')],
  corePlugins: {
    outline: false,
  },
};
