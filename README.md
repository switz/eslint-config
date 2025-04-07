HI

# switz's eslint-config

## Installation

```
$ yarn add -D eslint @switz/eslint-config
# or
$ pnpm install -D eslint @switz/eslint-config
```

Update your eslint config (`eslint.config.mjs`)

```
import main from '@switz/eslint-config';

export default [...main];
```

If you need React support, use

```
import react from '@switz/eslint-config/react';

export default [...react];
```

If you need mdx support, use

```
import mdx from '@switz/eslint-config/mdx';

export default [...mdx];
```

You should be able to combine configs just by spreading more into the array.

## Reference

https://eslint.org/docs/developer-guide/shareable-configs

## License

MIT, have fun
