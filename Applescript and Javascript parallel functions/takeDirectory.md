```applescript
-- takeDirectory :: FilePath -> FilePathon takeDirectory(strPath)	if strPath ≠ "" then		if character -1 of strPath = "/" then			text 1 thru -2 of strPath		else			set xs to init(splitOn("/", strPath))			if xs ≠ {} then				intercalate("/", xs)			else				"."			end if		end if	else		"."	end ifend takeDirector
```

```js
// takeDirectory :: FilePath -> FilePath
const takeDirectory = strPath =>
    strPath !== '' ? (() => {
        const xs = (strPath.split('/'))
            .slice(0, -1);
        return xs.length > 0 ? (
            xs.join('/')
        ) : '.';
    })() : '.';
```