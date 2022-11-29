export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleDirectories: ["node_modules", "src"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/", "/public/"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.ts(x)?",
    "!src/**/stories.tsx",
    "!src/pages/**/*.tsx",
    "!src/styles/**/*.ts",
    "!src/@types/**/*.d.ts",
    "!src/**/mock.ts",
    "!src/App.tsx",
    "!src/main.tsx",
    "!vite-env.d.ts"
  ],
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
  modulePaths: ["<rootDir>/src", "<rootDir>/.jest"]
};
