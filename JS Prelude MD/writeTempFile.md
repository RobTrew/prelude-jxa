```javascript
// writeTempFile :: String -> String -> IO FilePath
const writeTempFile = template =>
    // File name template -> string data -> IO temporary path
    txt => {
        const
            fp = ObjC.unwrap($.NSTemporaryDirectory()) +
            takeBaseName(template) + Math.random()
            .toString()
            .substring(3) + takeExtension(template);

        return (writeFile(fp)(txt), fp);
    };
```