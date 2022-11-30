export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleDirectories: ["node_modules", "src"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/", "/public/"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/components/index.ts",
    "!src/pages/**/*.tsx",
    "!src/pages/index.ts",
    "!src/routes/*.{js,jsx,ts,tsx}",
    "!src/styles/**/*.ts",
    "!src/template/**/*.{js,jsx,ts,tsx}",
    "!src/template/*.{js,jsx,ts,tsx}",
    "!src/**/stories.tsx",
    "!src/@types/**/*.d.ts",
    "!src/utils/tests/renderWithTheme.tsx",
    "!src/**/mock.ts",
    "!src/App.tsx",
    "!src/main.tsx",
    "!vite-env.d.ts"
  ],
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
  modulePaths: ["<rootDir>/src", "<rootDir>/.jest"]
};
