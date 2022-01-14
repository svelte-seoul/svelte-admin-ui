module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  setupFilesAfterEnv: ['<rootDir>/test/jestSetup.ts', '@testing-library/jest-dom/extend-expect'],
  transform: {
    '^.+\\.(js|ts)$': 'ts-jest',
    '^.+\\.svelte$': ['svelte-jester', {'preprocess': true}],
  },
  moduleNameMapper: {'^.+\\.(css|less|scss|svg)$': 'babel-jest', '^(\\.{1,2}/.*)\\.js$': '$1'},
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js?|ts?|svelte?)$',
  moduleFileExtensions: ['js', 'ts', 'svelte'],
  modulePathIgnorePatterns: ['dist', 'build'],
  testEnvironment: 'jsdom',
  testURL: "http://test.com/auth/sign-in",
  globals: {
    window: {},
    'ts-jest': {
      babelConfig: true,
      tsconfig: 'tsconfig.json',
    },
  },
};
