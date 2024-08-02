# Vue-Architect-Standard-Guidelines

This is the official scaffolding tool for Vuetify, designed to give you a head start in building your new Vuetify application. It sets up a base template with all the necessary configurations and standard directory structure, enabling you to begin development without the hassle of setting up the project from scratch.

---
# Features

- 🗂️ [File based routing](./src/pages)

- 📑 [Layout system](./src/layouts)

- 🍍 [State Management via Pinia](https://pinia.vuejs.org/)

- 📥 [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - use Composition API and others directly

- 🧼 [ESLint flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new) with adapted [@nuxt/eslint](https://github.com/nuxt/eslint), future-proof
- 🛠️ [Api Service](./src/services/apiService.ts)
- 🔔 [ Notification Service ](./src/services/alertServices.ts)
- 👩🏾‍💻 [Programmer Error Service](./src/services/programmerError.ts)
- ⚡ [Axios Interceptor](./src/plugins/axios.ts)
- Handle Error Page
- [Global styles](src/assets/styles/global.css)
- [Common Github settings that generally should always be used with your language specific settings](.gitattributes).
- [ Pull Request Form Template](./.github/pull_request_template.md)
- [Engine Locking for Node and Yarn](enginLock.md)
- [Configuration setup for Vuetify](./src/plugins/vuetify.ts)
- [Quasar Commit Conventions](https://quasar.dev/how-to-contribute/commit-conventions)
---

---


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




