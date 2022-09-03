# obtain-package-manager
Obtain the package manager you are using.

[![NPM version](https://badge.fury.io/js/obtain-package-manager.png)](https://www.npmjs.com/package/obtain-package-manager)

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

## 🌸 Credits

- [detect-package-manager](https://github.com/egoist/detect-package-manager)

## Author
sudongyuer email:976499226@qq.com

## License

[MIT](./LICENSE) License © 2021 [SuDongYu](https://github.com/sudongyuer)
