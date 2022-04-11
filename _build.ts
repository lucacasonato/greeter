import { build, emptyDir } from "https://deno.land/x/dnt/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  shims: {
    deno: "dev",
  },
  package: {
    // package.json properties
    name: "@lucacasonato/greeter",
    version: Deno.args[0],
    description: "A demo project for my TypeScript Congress talk",
    license: "MIT",
  },
});

Deno.copyFileSync("README.md", "npm/README.md");
