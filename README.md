# obtain-package-manager

A simple script to obtain a package manager.

[![NPM version](https://badge.fury.io/js/obtain-package-manager.png)](https://www.npmjs.com/package/obtain-package-manager)

## Why
Sometimes you need to install a package manager, but you don't know which one to use. This script will help you to obtain a package manager.
## 🚀 Features

- Zero dependencies  
- Obtain a package manager of the current repository

## Usage

```js
import { clearCache, getPackManagerVersion, getPackageManager } from 'obtain-package-manager'
const packageManager = await getPackageManager() // npm or yarn or pnpm
const packageManagerVersion = await getPackManagerVersion()// 6.14.4
clearCache() // clear cache
```

## Author
sudongyuer email:976499226@qq.com

## License

[MIT](./LICENSE) License © 2021 [SuDongYu](https://github.com/sudongyuer)
