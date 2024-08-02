
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
"pnpm": "kindly-use-yarn",
"yarn": ">=1.22.22"
}
```



# Nice To have (Optional)

- Automatically open localhost in your browser by adding -`-open --port 8080`
- Format pretties just by run format

```json
{
 "scripts": {
    "dev": "vite --open --port 8080",
     "format": "prettier .  --write"

}
```