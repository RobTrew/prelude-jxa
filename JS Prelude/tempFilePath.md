```js
// File name template to temporary path
// Random digit sequence inserted between template base and extension
```

```js
// tempFilePath :: String -> IO FilePath
const tempFilePath = template =>
  ObjC.unwrap($.NSTemporaryDirectory()) +
    takeBaseName(template) + Math.random()
    .toString()
    .substring(3) + takeExtension(template);
```