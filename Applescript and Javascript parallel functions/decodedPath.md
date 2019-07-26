```applescript
-- use framework "Foundation"
```

```applescript
-- decodedPath :: Percent Encoded String -> FilePath
on decodedPath(fp)
    tell current application to ¬
        (stringByRemovingPercentEncoding ¬
            of stringWithString_(fp) ¬
            of its NSString) as string
end decodedPath
```

```js
// decodedPath :: Percent Encoded String -> FilePath
const decodedPath = decodeURI;
```