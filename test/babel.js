const { ESLint } = require("eslint");
const tap = require("tap");

/**
 * Run babel config tests.
 * @returns {void}
 */
async function test() {
  const eslint = new ESLint({
    baseConfig: {
      parserOptions: {
        requireConfigFile: false,
      },
    },
    overrideConfigFile: "./src/cnf/babel.js",
    useEslintrc: false,
  });
  const [testPass] = await eslint.lintText("const x = 1\n\nparseFloat(x)\n");
  const [testFail] = await eslint.lintText('let x = "y"');

  tap.equal(testPass.errorCount, 0, "It passes valid Babel");
  tap.equal(testFail.errorCount, 2, "It lints invalid Babel");
}

test();
