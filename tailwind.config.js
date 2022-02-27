/**
 *
 * @param {string} variableName The CSS variable name.
 */
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    return opacityValue ? `rgba(var(${variableName}), ${opacityValue})` : `rgb(var(${variableName}))`;
  };
}

/**
 * @param {string} colorName The CSS variable color name.
 * @param {Object} opts
 * @param {boolean} opts.light Include light colors.
 * @param {boolean} opts.dark Include dark colors.
 */
function useColor(colorName, { light = true, dark = true } = {}) {
  const colorVariants = {
    [colorName]: withOpacity(`--color-${colorName}`),
    [`on-${colorName}`]: withOpacity(`--color-on-${colorName}`),
  };

  const lightVariants = {
    [`${colorName}-light`]: withOpacity(`--color-${colorName}-light`),
    [`on-${colorName}-light`]: withOpacity(`--color-on-${colorName}-light`),
  };

  const darkVariants = {
    [`${colorName}-dark`]: withOpacity(`--color-${colorName}-dark`),
    [`on-${colorName}-dark`]: withOpacity(`--color-on-${colorName}-dark`),
  };

  return {
    ...colorVariants,
    ...(light ? lightVariants : {}),
    ...(dark ? darkVariants : {}),
  };
}

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ...useColor('brand-main'),
        ...useColor('brand-accent'),
        ...useColor('surface', { light: false, dark: false }),
        ...useColor('background', { light: false, dark: false }),
      },
      spacing: {
        spacer: '1rem',
      },
    },
  },
  plugins: [
    // https://github.com/tailwindlabs/tailwindcss-aspect-ratio
    require('@tailwindcss/aspect-ratio'),
    // https://github.com/tailwindlabs/tailwindcss-forms
    require('@tailwindcss/forms'),
  ],
};
