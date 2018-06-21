```js
// fileStatus :: FilePath -> Either String Dict
const fileStatus = fp => {
  const
    error = $(),
    dct = $.NSFileManager.defaultManager
    .attributesOfItemAtPathError(fp, error).js;
  return dct !== undefined ? (
    Right(dct)
  ) : Left(ObjC.unwrap(error.localizedDescription));
};
```