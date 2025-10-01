# Dependency update steps

This project uses npm (package-lock.json present). Do not edit the lockfile manually; use npm commands to regenerate it. For precise version bumps, please add your package.json to this chat so I can propose exact edits.

Recommended workflow:
1. Ensure your working tree is clean and on a new branch.
2. See what’s outdated, then update safe patch/minor versions.
3. If you want to jump to the latest major versions, update package.json, then reinstall.
4. Verify with type-check, lint, build, and app smoke test.
5. Commit and push.

Suggested commands (run from the project root):
```bash
git checkout -b chore/update-dependencies && git status --porcelain
```
```bash
npm outdated && npm update
```
```bash
npx npm-check-updates -u && npm install
```

Verify everything still works:
```bash
npm run tsc && npm run lint && npm run lint:style
```
```bash
npm run build
```

Optional security fixes (review changes before committing):
```bash
npm audit fix
```

Notes:
- npm outdated shows available newer versions.
- npm update applies compatible patch/minor updates per semver ranges in package.json and rewrites package-lock.json accordingly.
- npx npm-check-updates -u (ncu) updates package.json to the latest versions (including majors); after that, npm install will resolve and regenerate package-lock.json.
- If you want me to propose exact version changes, please add package.json to the chat.

Troubleshooting ERESOLVE peer conflicts:
- Ensure related peer packages share the same major/minor range in package.json (e.g., @typescript-eslint/eslint-plugin, @typescript-eslint/parser, and typescript-eslint all using the same 8.x minor).
- If npm install still fails, fully regenerate resolution state:
  - Delete node_modules and package-lock.json, then run npm install to produce a fresh lockfile that aligns peers.
- Avoid editing package-lock.json manually; prefer a clean reinstall to let npm compute a consistent graph.
