module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	globalTeardown: './tests/teardown.ts',
};

// import type {Config} from '@jest/types';
// // Sync object
// const config: Config.InitialOptions = {
//   verbose: true,
//   transform: {
//   '^.+\\.tsx?$': 'ts-jest',
//   },
// };
// export default config;
