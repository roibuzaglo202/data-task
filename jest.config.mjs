export default {
    transform: {
        "^.+\\.js$": "babel-jest"  // Use babel-jest to transpile JavaScript files
    },
    testEnvironment: "node",  // Ensure Jest is using Node.js environment for the tests
    moduleFileExtensions: ["js"] // Support for JS extensions
};
