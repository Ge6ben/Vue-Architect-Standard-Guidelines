# Vue-Architect-Standard-Guidelines

This is the official scaffolding tool for Vuetify, designed to give you a head start in building your new Vuetify application. It sets up a base template with all the necessary configurations and standard directory structure, enabling you to begin development without the hassle of setting up the project from scratch.


## 💿 Install

Set up your project using your preferred package manager. Use the corresponding command to install the dependencies:

| Package Manager                                                | Command        |
|---------------------------------------------------------------|----------------|
| [yarn](https://yarnpkg.com/getting-started)                   | `yarn install` |


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
