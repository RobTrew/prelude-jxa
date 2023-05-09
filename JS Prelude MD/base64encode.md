```javascript
// base64encode :: String -> String
const base64encode = s =>
    // Base64 encoding of the given string.
    ObjC.unwrap(
        $.NSString.stringWithString(s)
        .dataUsingEncoding(
            $.NSUTF8StringEncoding
        )
        .base64EncodedStringWithOptions(0)
    );
```