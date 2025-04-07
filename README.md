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

Or typescript:

```
import typescript from '@switz/eslint-config/typescript';

export default [...typescript];
```

Or tailwind:

```
import tailwind from '@switz/eslint-config/tailwind';

export default [...tailwind];
```

## Reference

https://eslint.org/docs/developer-guide/shareable-configs

## License

MIT, have fun
