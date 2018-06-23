```applescript
-- doesPathExist :: FilePath -> IO Boolon doesPathExist(strPath)	set ca to current application	ca's NSFileManager's defaultManager's ¬		fileExistsAtPath:((ca's NSString's ¬			stringWithString:strPath)'s ¬			stringByStandardizingPath)end doesPathExist
```

```js
// doesPathExist :: FilePath -> IO Bool
const doesPathExist = strPath =>
	$.NSFileManager.defaultManager
	.fileExistsAtPath(
		$(strPath).stringByStandardizingPath
	);
```