```js
// takeBaseName :: FilePath -> String
const takeBaseName = strPath =>
  ('' !== strPath) ? (
    ('/' !== strPath[strPath.length - 1]) ? (() => {
      const fn = strPath.split('/').slice(-1)[0];
      return fn.includes('.') ? (
        fn.split('.').slice(0, -1).join('.')
      ) : fn;
    })() : ''
  ) : '';
```