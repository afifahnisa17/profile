import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
    dir: './',
});

const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        '^@/components/(.*)$': '<rootDir>/src/components/$1',
        '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
        '\\.(scss|sass|css)$': 'identity-obj-proxy',
    },
};

export default createJestConfig(customJestConfig);