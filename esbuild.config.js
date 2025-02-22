const esbuild = require("esbuild");

try {
  esbuild.buildSync({
    entryPoints: ["index.js"],
    outfile: "dist/index.cjs",
    format: "cjs",
    bundle: true,
    minify: true,
    platform: "node",
    target: ["node14"],
  });
  console.log("CJS build successful");
} catch (err) {
  console.error("CJS build failed:", err);
  process.exit(1);
}

try {
  esbuild.buildSync({
    entryPoints: ["index.js"],
    outfile: "dist/index.mjs",
    format: "esm",
    bundle: true,
    minify: true,
    platform: "node",
    target: ["node14"],
  });
  console.log("ESM build successful");
} catch (err) {
  console.error("ESM build failed:", err);
  process.exit(1);
}
