const tailwind = import('prettier-plugin-tailwindcss');

module.exports = {
  singleQuote: true,
  trailingComma: 'es5',
  printWidth: 100,
  quoteProps: 'consistent',
  endOfLine: 'auto',
  plugins: [tailwind],
};
