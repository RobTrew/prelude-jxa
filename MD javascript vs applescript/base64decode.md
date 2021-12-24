```applescript
-- base64decode :: String -> String
on base64decode(s)
    tell current application
        set encoding to its NSUTF8StringEncoding
        set ignore to its NSDataBase64DecodingIgnoreUnknownCharacters
        
        (((alloc() of its NSString)'s initWithData:((its (NSData's alloc()'s ¬
            initWithBase64EncodedString:s ¬
                options:(ignore)))) encoding:ignore)) as text
    end tell
end base64decode
```


```javascript
// base64decode :: String -> String
const base64decode = s =>
    // Base64 decoding of the given string.
    ObjC.unwrap(
        $.NSString.alloc.initWithDataEncoding(
            $.NSData.alloc.initWithBase64EncodedStringOptions(
                s, 0
            ),
            $.NSUTF8StringEncoding
        )
    );
```