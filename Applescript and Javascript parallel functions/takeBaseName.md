```applescript
-- takeBaseName :: FilePath -> String
on takeBaseName(strPath)
    if strPath ≠ "" then
        if text -1 of strPath = "/" then
            ""
        else
            set fn to item -1 of splitOn("/", strPath)
            if fn contains "." then
                intercalateString(".", items 1 thru -2 of splitOn(".", fn))
            else
                fn
            end if
        end if
    else
        ""
    end if
end takeBaseName
```

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