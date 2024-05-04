# Vue-Architect-Standard-Guidelines

This is the official scaffolding tool for Vuetify, designed to give you a head start in building your new Vuetify application. It sets up a base template with all the necessary configurations and standard directory structure, enabling you to begin development without the hassle of setting up the project from scratch.

---

## 💿 Install

Set up your project using your preferred package manager. Use the corresponding command to install the dependencies:

| Package Manager                             | Command        |
| ------------------------------------------- | -------------- |
| [yarn](https://yarnpkg.com/getting-started) | `yarn install` |

### Starting the Development Server

To start the development server with hot-reload, run the following command. The server will be accessible at [http://localhost:3000](http://localhost:3000):

```bash
yarn dev
```

### Building for Production

To build your project for production, use:

```bash
yarn build
```

---

## Engine Locking

We would like for all developers working on this project to use the same Node engine and package manager we are using.
To do that we create two new files:

- `.nvmrc` - Will tell other users of the project which version of Node is used
- `.npmrc` - Will tell other users of the project which package manager is used

We are using `Node v20.12.2 Iron` and `yarn` for this project so we set those values like so:

`.nvmrc`

```.nvmrc
lts/iron
```

`.npmrc`

```
legacy-peer-deps=true
engine-strict=true
```

You can check your version of Node with `node --version` and make sure you are setting the correct one. A list of Node
version codenames can be found [here](https://github.com/nodejs/Release/blob/main/CODENAMES.md)

Note that the use of `engine-strict` didn't specifically say anything about `yarn`, we do that in `package.json`:

`package.json`

```json
{
"engines": {
"node": ">=20.12.2",
"npm": "kindly-use-yarn",
"yarn": ">=1.22.22"
}
```
# Features

 
 
- 🗂️ [File based routing](./src/pages)

- 📑 [Layout system](./src/layouts)

- 🍍 [State Management via Pinia](https://pinia.vuejs.org/)

- 📥 [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - use Composition API and others directly

- 🧼 [ESLint flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new) with adapted [@nuxt/eslint](https://github.com/nuxt/eslint), future-proof
- 🔔 Notification Service 


---

## Contribution Guide - Commit Conventions

### Goals

- Allow ignoring commits by git bisect (not important commits like formatting)
- Provide better information when browsing the history

### The Rules of a Great Git Commit Message

1. Separate subject from body with a blank line
2. Limit the subject line to 70 characters
3. Capitalize the subject line
4. Do not end the subject line with a period
5. Use the imperative mood in the subject line
6. Wrap the body at 80 characters
7. Use the body to explain what and why vs. how

### Format of a Commit Message

```
type(<scope>): <Subject> #<github-ref-id>

<body>

<footer>
```

### Example of a Commit Message

```
fix(ui): Ensure Range headers adhere more closely to RFC 2616 #2310

To add new dependency use `range-parser`to compute the range.
It is more well-tested in the wild.

BREAKING CHANGE:
port-runner command line option has changed to runner-port.
To migrate your project, change all the commands,
where you use --port-runner to --runner-port.
```

### Message Subject (First Line)

The first line cannot be longer than 70 characters, the second line is always blank. The type and scope should always be lowercase as shown below.

**Allowed `<type>` values:**

- **feat** - new feature for the user, not a new feature for build script
- **fix** - bug fix for the user, not a fix to a build script
- **docs** - documentation only changes
- **style** - changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.)
- **refactor** - refactoring production code, a code change that neither fixes a bug nor adds a feature
- **chore** - other changes that don't modify src or test files (_no production code change_) and dependency updates
- **perf** - change that improves performance
- **revert** - reverts a previous commit
- **test** - adding missing tests, refactoring tests; no production code change
- **build** - changes that affect the build system or external dependencies (e.g. `ui/build/*`)
- **ci** - changes to our Continuous Integrations configuration files and scripts (e.g. GitHub Actions)

**Example `<scope>` values:**

- Directory/package related: ui, cli, app-webpack, app-vite, etc.
- Feature related: api, TouchSwipe, QTime, etc.

::: tip
The `<scope>` can contain more values separated by ampersand(`&`). Example: `feat(app-vite&app-webpack): Add Capacitor mode`.

The `<scope>` can be empty (e.g. if the change is global), in which case the parentheses are omitted. Example: `style: Use semicolons`
:::

### Message Body

- uses the imperative, present tense: “change” not “changed” nor “changes”
- includes motivation for the change and contrasts with previous behavior

### Message Footer

### Breaking Changes

All breaking changes have to be mentioned as a breaking change block in the footer, which should start with the word BREAKING CHANGE: with a space or two newlines. The rest of the commit message is then the description of the change, justification and migration notes.

```
BREAKING CHANGE: isolate scope bindings definition has changed and
    the inject option for the directive controller injection was removed.

    To migrate the code follow the example below:

    Before:

    scope: {
      myAttr: 'attribute',
      myBind: 'bind',
      myExpression: 'expression',
      myEval: 'evaluate',
      myAccessor: 'accessor'
    }

    After:

    scope: {
      myAttr: '@',
      myBind: '@',
      myExpression: '&',
      // myEval - usually not useful, but in cases where the expression is assignable, you can use '='
      myAccessor: '=' // in directive's template change myAccessor() to myAccessor
    }
```

### Referencing Issues

Closed issues should be listed on a separate line in the footer prefixed with "Closes" keyword like this:

`Closes #234`

or in the case of multiple issues:

`Closes #123, #245, #992`

---

# Nice To have (Optional)

- Automatically open localhost in your browser by adding -`-open --port 8080`

`package.json`

```json
{
 "scripts": {
    "dev": "vite --open --port 8080"

}
```

---

# Reference

- [vitify-electron](https://github.com/kingyue737/vitify-electron)
- [Quasar Commit Conventions](https://quasar.dev/how-to-contribute/commit-conventions)
- [How to Build Scalable Architecture for your Next.js Project](https://www.youtube.com/watch?v=Iu5aZDqZt8E&t=2875s)
- [ESLint and Prettier with Vite and Vue.js 3Ï](https://vueschool.io/articles/vuejs-tutorials/eslint-and-prettier-with-vite-and-vue-js-3/)
- [eslint-plugin-vue](https://eslint.vuejs.org/user-guide/)
- [Josh Goldberg - Setting Up ESLint and TypeScript for React](https://www.youtube.com/watch?v=sSJBeWPIipQ)
- [Embrace the Future: Navigating the New Flat Configuration of ESLint](https://www.raulmelo.me/en/blog/migration-eslint-to-flat-config)
- [Implement Flat Config](https://github.com/eslint/eslint/issues/13481)
- [Nuxt Presets for Flat Config](https://nuxt.com/blog/eslint-module#eslint-flat-config)



---
# TODO
- [Use vee-validate and Zod for fields validations](https://vee-validate.logaretm.com/v4/integrations/zod-schema-validation/)
- 🧭 Auto generated navigation drawer and breadcrumbs based on routes
