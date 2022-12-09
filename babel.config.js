module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js', 'svg'],
        alias: {
          root: ['.'],
          _: './src',
          _navigation: './src/navigation',
          _screens: './src/screens',
        },
      },
    ],
    'jest-hoist',
  ],
};
