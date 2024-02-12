module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFiles: ["./jest.setup.js"],
  transformIgnorePatterns: ["/node_modules/", "^.+\\.css$", "^.+\\.js$"],
  moduleNameMapper: {
    "^@root(.*)$": "<rootDir>/src$1",
    "^api(.*)$": "<rootDir>/src/apps/api$1",
    "^components(.*)$": "<rootDir>/src/apps/components$1",
    "^contexts(.*)$": "<rootDir>/src/apps/contexts$1",
    "^hooks(.*)$": "<rootDir>/src/apps/hooks$1",
    "^interfaces(.*)$": "<rootDir>/src/apps/interfaces$1",
    "^providers(.*)$": "<rootDir>/src/apps/providers$1",
    "^utils(.*)$": "<rootDir>/src/apps/utils$1",
    "^views(.*)$": "<rootDir>/src/apps/views$1",
  },
};
