```applescript
-- encodedPath :: FilePath -> Percent Encoded String
on encodedPath(fp)
    tell current application
        set charSet to URLPathAllowedCharacterSet of its NSCharacterSet
        (stringByAddingPercentEncodingWithAllowedCharacters_(charSet) of ¬
            stringWithString_(fp) of its NSString) as string
    end tell
end encodedPath
```


```javascript
// encodedPath :: FilePath -> Percent Encoded String
const encodedPath = encodeURI;
```