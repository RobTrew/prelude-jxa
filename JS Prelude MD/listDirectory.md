```js
// listDirectory :: FilePath -> [FilePath]
const listDirectory = strPath =>
	ObjC.unwrap(
		$.NSFileManager.defaultManager
		.contentsOfDirectoryAtPathError(
			ObjC.wrap(strPath)
			.stringByStandardizingPath,
			null
		))
	.map(ObjC.unwrap);
```