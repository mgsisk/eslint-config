module.exports = {
  rules: {
    // ----- Helpful Warnings --------------------------------------------------
    "import/no-deprecated": "error",
    "import/no-empty-named-blocks": "error",
    "import/no-extraneous-dependencies": "error",
    "import/no-mutable-exports": "error",
    "import/no-unused-modules": "error",

    // ----- Module Systems ----------------------------------------------------
    "import/no-amd": "error",
    // "import/no-commonjs": "error",
    // "import/no-import-module-exports": "error",
    // "import/no-nodejs-modules": "error",
    // "import/unambiguous": "error",

    // ----- Static Analysis ---------------------------------------------------
    "import/no-absolute-path": "error",
    "import/no-cycle": "error",
    // "import/no-dynamic-require": "error",
    // "import/no-internal-modules": "error",
    "import/no-relative-packages": "error",
    "import/no-relative-parent-imports": "error",
    "import/no-restricted-paths": "error",
    "import/no-self-import": "error",
    "import/no-useless-path-segments": "error",
    "import/no-webpack-loader-syntax": "error",

    // ----- Style Guide -------------------------------------------------------
    "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
    // "import/dynamic-import-chunkname": "error",
    "import/exports-last": "error",
    "import/extensions": "error",
    "import/first": "error",
    "import/group-exports": "error",
    "import/max-dependencies": "error",
    "import/newline-after-import": "error",
    "import/no-anonymous-default-export": "error",
    // "import/no-default-export": "error",
    "import/no-named-default": "error",
    // "import/no-named-export": "error",
    "import/no-namespace": "error",
    "import/no-unassigned-import": "error",
    // "import/order": "error",
    "import/prefer-default-export": "error",
  },
};
