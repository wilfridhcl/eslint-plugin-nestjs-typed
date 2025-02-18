export = {
    parser: "@typescript-eslint/parser",
    parserOptions: {sourceType: "module"},
    rules: {
        //  "nestjs-typed/api-methods-have-documentation": "error",
        "@darraghor/nestjs-typed/provided-injected-should-match-factory-parameters":
            "error",
        "@darraghor/nestjs-typed/injectable-should-be-provided": [
            "error",
            {
                src: ["src/**/*.ts"],
                filterFromPaths: ["node_modules", ".test.", ".spec."],
            },
        ],
        "@darraghor/nestjs-typed/api-property-matches-property-optionality":
            "error",
        "@darraghor/nestjs-typed/api-method-should-specify-api-response":
            "error",
        "@darraghor/nestjs-typed/controllers-should-supply-api-tags": "error",
        "@darraghor/nestjs-typed/api-enum-property-best-practices": "error",
        "@darraghor/nestjs-typed/api-property-returning-array-should-set-array":
            "error",
        "@darraghor/nestjs-typed/should-specify-forbid-unknown-values": "error",
        "@darraghor/nestjs-typed/param-decorator-name-matches-route-param":
            "error",
        "@darraghor/nestjs-typed/validated-non-primitive-property-needs-type-decorator":
            "error",
        "@darraghor/nestjs-typed/validate-nested-of-array-should-set-each":
            "error",
    },
};
