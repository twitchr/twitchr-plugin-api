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
import * as api from 'twitchr-plugin-api';

...

const hooks: api.PluginEventListener = {
    ...
};

const plugin: api.Plugin = {
    hooks: hooks,
};

export = plugin;
```

Every plugin must export an object of type `Plugin` whose `hooks` property is used to define the plugin's event listeners.
Currently supported events are `JOIN`, `PRIVMSG`, `NAMES` and `PART`.

Each event listener takes a context argument which provides information about the respective event.
This context argument is also used to perform Twitch IRC related actions like `ban()` or `timeout()`.
For a simple example see [twitchr-example](https://github.com/twitchr/twitchr-example). Use it as a starting point.

Using TypeScript and building the plugin e.g. on `prepublish` is the recommended approach but using plain JavaScript works as well. In that case use this library as a reference only.

## License

This project is licensed under the terms of the [MIT license](https://github.com/twitchr/twitchr-plugin-api/blob/master/LICENSE).
