```applescript
-- Split a filename into directory and file. combine is the inverse.
```

```applescript
-- splitFileName :: FilePath -> (String, String)on splitFileName(strPath)	if strPath ≠ "" then		if last character of strPath ≠ "/" then			set xs to splitOn("/", strPath)			set stem to init(xs)			if stem ≠ {} then				Tuple(intercalate("/", stem) & "/", |last|(xs))			else				Tuple("./", |last|(xs))			end if		else			Tuple(strPath, "")		end if	else		Tuple("./", "")	end ifend splitFileName
```

```js
// Split a filename into directory and file. combine is the inverse.
```

```js
// splitFileName :: FilePath -> (String, String)
const splitFileName = strPath =>
    ('' !== strPath) ? (
         ('/' !== strPath[strPath.length - 1]) ? (() => {
            const
                xs = strPath.split('/'),
                stem = xs.slice(0, -1);
            return stem.length > 0 ? (
                Tuple(stem.join('/') + '/', xs.slice(-1)[0])
            ) : Tuple('./', xs.slice(-1)[0]);
        })() : Tuple(strPath, '')
    ) : Tuple('./', '');
```