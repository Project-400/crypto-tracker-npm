# Common Types & Interfaces NPM Package Boilerplate Template

This is an npm package of TypeScript types, interfaces, enums and functions that are common amongst
each a projects infrastructure, ie. Client and Backend.
Copy this template and publish to `npmjs.com` to deploy your own NPM package.

---

To build the TypeScript, run the following command:

```
npm run build
```

The build files will end up in the `/lib` directory. These files should not be pushed 
to GitHub (`.gitignore` file excludes this directory).

In order to install the package and test your changes without publishing to npm
first, install using a relative path, eg:

```
npm install path/to/npm/package
```

This will install the package as if it was pulling it from the real npm repo.

---

To publish your changes to the npm repo, run the following command:

```
npm publish --access public
```

If you are using a private npm repo, the command will be:

```
npm publish
```
