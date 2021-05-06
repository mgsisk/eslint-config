module.exports = {
  rules: {
    // ----- Static Analysis ---------------------------------------------------
    'import/no-restricted-paths': 'error',
    'import/no-absolute-path': 'error',
    // 'import/no-dynamic-require': 'error',
    // 'import/no-internal-modules': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/no-self-import': 'error',
    'import/no-cycle': 'error',
    'import/no-useless-path-segments': 'error',
    'import/no-relative-parent-imports': 'error',

    // ----- Helpful Warnings --------------------------------------------------
    'import/no-deprecated': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-unused-modules': 'error',

    // ----- Module Systems ----------------------------------------------------
    // 'import/unambiguous': 'error',
    // 'import/no-commonjs': 'error',
    'import/no-amd': 'error',
    // 'import/no-nodejs-modules': 'error',
    // 'import/no-import-module-exports': 'error',

    // ----- Style Guide -------------------------------------------------------
    'import/first': 'error',
    'import/exports-last': 'error',
    'import/no-namespace': 'error',
    'import/extensions': 'error',
    // 'import/order': 'error',
    'import/newline-after-import': 'error',
    'import/prefer-default-export': 'error',
    'import/max-dependencies': 'error',
    'import/no-unassigned-import': 'error',
    'import/no-named-default': 'error',
    // 'import/no-default-export': 'error',
    // 'import/no-named-export': 'error',
    'import/no-anonymous-default-export': 'error',
    'import/group-exports': 'error',
    // 'import/dynamic-import-chunkname': 'error',
  },
}
