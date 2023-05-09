```javascript
// decodedPath :: Percent Encoded String -> FilePath
const decodedPath = decodeURI;
```


```applescript
-- decodedPath :: Percent Encoded String -> FilePath
on decodedPath(fp)
    -- use framework "Foundation"
    tell current application to ¬
        (stringByRemovingPercentEncoding ¬
            of stringWithString_(fp) ¬
            of its NSString) as string
end decodedPath
```