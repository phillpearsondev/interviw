module.exports = {
  testEnvironment: 'node',
  verbose: true,
  moduleDirectories: ['node_modules', 'src'],
  modulePaths: ['<rootDir>/src', '<rootDir>/node_modules'],
  moduleFileExtensions: ['js', 'ts', 'json', 'node', 'html'],
  transform: {
    '^.+\\.html$': '<rootDir>/config/htmlLoader.js'
  },
  transformIgnorePatterns: ['node_modules/(?!(bootstrap-vue)/)'],
  testPathIgnorePatterns: [
    '/build/',
    '/config/',
    '/data/',
    '/dist/',
    '/node_modules/',
    '/test/',
    '/vendor/'
  ],
  globals: {
    'ts-jest': {
      tsConfig: './src/app/tsconfig.json'
    },
    NODE_ENV: 'test'
  }
}