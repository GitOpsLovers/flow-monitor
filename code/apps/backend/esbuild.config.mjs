import { build } from "esbuild";
import { nodeExternalsPlugin } from "esbuild-node-externals";

await build({
    entryPoints: ["src/index.ts"],
    bundle: true,
    platform: "node",
    format: "esm",
    outdir: "dist",
    plugins: [nodeExternalsPlugin()],
    alias: {
        "@core": "./src/core",
        "@features": "./src/features"
    },
});
