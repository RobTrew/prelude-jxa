```javascript
// base64decode :: String -> String
const base64decode = s =>
    // Base64 decoding of the given string.
    ObjC.unwrap(
        $.NSString.alloc.initWithDataEncoding(
            $.NSData.alloc.initWithBase64EncodedStringOptions(
                s, $.NSDataBase64DecodingIgnoreUnknownCharacters
            ),
            $.NSUTF8StringEncoding
        )
    );
```