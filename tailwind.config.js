module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        BlueGDM: '#26B4FF',
        GrayNavBarGDM: '#2F3337',
        GrayGDM: '#E5E7EB',
        ModalBG: 'rgba(0,0,0,0.2)',
      },
      height: {
        'screen-4rem': 'calc(100vh - 4rem)',
      },
      minHeight: {
        'screen-4rem': 'calc(100vh - 4rem)',
      },
      width: {
        'screen-30': '30vw',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
