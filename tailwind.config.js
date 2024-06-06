module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      transitionTimingFunction: {
        'custom-ease': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      },
      transitionDuration: {
        250: '250ms',
      },
      colors: {
        lemon: '#64ffda',
        light: '#ccd6f6',
        darkgrey: '#495670',
        grey: '#8892b0',
        main: '#00ffff',
      },
    },
  },
  plugins: [],
}
