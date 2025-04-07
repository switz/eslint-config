HI

# switz's eslint-config

## Installation

```
$ yarn add -D eslint @switz/eslint-config
# or
$ pnpm install -D eslint @switz/eslint-config
```

Update your eslint config (`eslint.config.mjs`)

```js
import main from '@switz/eslint-config';

export default [...main];
```

If you need React support, use

```js
import react from '@switz/eslint-config/react.mjs';

export default [...react];
```

If you need mdx support, use

```js
import mdx from '@switz/eslint-config/mdx.mjs';

export default [...mdx];
```

If you need tailwind support, use:

```js
import main from '@switz/eslint-config/main.mjs';
import react from '@switz/eslint-config/react.mjs';
import tailwind from '@switz/eslint-config/tailwind.mjs';

export default [...main, ...react, ...tailwind];
```

You should be able to combine configs just by spreading more into the array.

## Reference

https://eslint.org/docs/developer-guide/shareable-configs

## License

MIT, have fun
