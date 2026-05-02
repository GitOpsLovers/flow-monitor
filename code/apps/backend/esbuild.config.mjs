import { build } from "esbuild";

await build({
    entryPoints: ["src/index.ts"],
    bundle: true,
    platform: "node",
    format: "esm",
    outdir: "dist",
    alias: {
        "@core": "./src/core",
        "@features": "./src/features"
    },
});
