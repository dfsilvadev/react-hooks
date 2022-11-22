module.exports = {
  testEnvironment: "jsdom",
  moduleDirectories: ["node_modules", "src"],
  testPathIgnorePatterns: ["/node_modules/", "/public/"],
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/src/**/*.ts(x)?",
    "!<rootDir>/src/**/stories.tsx",
    "!<rootDir>/src/pages/**/*.tsx",
    "!<rootDir>/src/styles/**/*.ts",
    "!<rootDir>/src/types/**/*.d.ts",
    "!<rootDir>/src/**/mock.ts",
    "!<rootDir>/src/main.tsx"
  ],
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
  modulePaths: ["<rootDir>/src", "<rootDir>/.jest"],
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test|tests).[tj]s?(x)"
  ]
};
