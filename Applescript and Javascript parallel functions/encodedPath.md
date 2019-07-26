```applescript
-- encodedPath :: FilePath -> Percent Encoded String
on encodedPath(fp)
    tell current application
        (its ((NSString's stringWithString:fp)'s ¬
            stringByAddingPercentEncodingWithAllowedCharacters:(its NSCharacterSet's ¬
                URLPathAllowedCharacterSet))) as string
    end tell
end encodedPath
```

```js
// encodedPath :: FilePath -> Percent Encoded String
const encodedPath = encodeURI;
```