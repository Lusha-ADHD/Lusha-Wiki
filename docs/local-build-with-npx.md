# Local Build With NPX

This repo expects Node 22, but a local shell may still default to an older Node version. If Node 22 is not installed or not active, use `npx` to run commands with a temporary Node 22 and npm 10 environment.

## Check Current Node

```sh
node --version
npm --version
```

If `node --version` is older than Node 20.11, prefer the `npx` commands below.

## Install Dependencies

```sh
npx -y -p node@22 -p npm@10 npm install
```

This creates or updates `node_modules/` and `package-lock.json`.

## Run The Dev Server

```sh
npx -y -p node@22 -p npm@10 npm run dev -- --host 127.0.0.1
```

Expected local URL:

```text
http://127.0.0.1:4321/
```

## Run A Production Build

```sh
npx -y -p node@22 -p npm@10 npm run build
```

This runs:

```sh
astro check && astro build
```

Expected result:

- Type/content checks pass with 0 errors.
- Static site output is generated in `dist/`.
- Sitemap and search index are generated.

## Notes For LLM Agents

- If the plain `npx` command fails with a network or registry error, rerun it with approval/escalation if the environment requires network permission.
- Do not edit `dist/` directly; it is generated.
- Do not commit `node_modules/`.
- Use `npm run build` directly only when the active local Node version is compatible.
- A non-fatal Starlight message such as `Entry docs -> 404 was not found` can appear while the build still completes successfully.
