```javascript
// doesPathExist :: FilePath -> IO Bool
const doesPathExist = fp =>
	$.NSFileManager.defaultManager
	.fileExistsAtPath(
		$(fp).stringByStandardizingPath
	);
```