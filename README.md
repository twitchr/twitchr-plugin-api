# twitchr-plugin-api
[![npm](https://img.shields.io/npm/v/twitchr-plugin-api.svg)](https://www.npmjs.com/package/twitchr-plugin-api)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

This package provides a set of helpful interfaces describing the plugin API of [twitchr](https://github.com/twitchr/twitchr).
Every plugin should depend on this wrapper library.

## Usage

This package is available via [npm](https://www.npmjs.com/package/twitchr-plugin-api):

```sh
npm install --save twitchr-plugin-api
```

A basic plugin structure inside an `index.ts` file might look like this:

```ts
import * as pluginApi from 'twitchr-plugin-api';

...

let hooks: pluginApi.PluginEventListener = {
    ...
};

let plugin: pluginApi.Plugin = {
    hooks: hooks,
};

export = plugin;
```

Every plugin must export an object of type `Plugin` whose `hooks` property is used to define the plugin's event listeners.
Currently supported events are `ACTION`, `JOIN`, `MESSAGE`, `NAMES` and `PART`.

Each event listener takes a number of event-related arguments and returns a string containing a message or a command to be executed by the IRC client.
For a simple example see [twitchr-example](https://github.com/twitchr/twitchr-example). Use it as a starting point.

**Important:** Plugins only work if their project folders contain at least a `package.json` and an `index.ts` file exporting an object of type `Plugin`.
Using TypeScript is the recommended approach but plain JavaScript works as well. In that case use this library as a reference only.

## License

This project is licensed under the terms of the [MIT license](https://github.com/twitchr/twitchr-plugin-api/blob/master/LICENSE).
