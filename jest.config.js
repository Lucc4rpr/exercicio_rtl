module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(ts|tsx)?$': 'ts-jest',
      '^.+\\.(js|jsx)?$': 'babel-jest',
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  };
  module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(ts|tsx)?$': 'ts-jest',
      '^.+\\.(js|jsx)?$': 'babel-jest',
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
      '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
    },
  };
  