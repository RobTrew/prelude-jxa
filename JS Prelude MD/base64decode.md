```js
// base64decode :: String -> String
const base64decode = s =>
    ObjC.unwrap(
        $.NSString.alloc.initWithDataEncoding(
            $.NSData.alloc.initWithBase64EncodedStringOptions(
                s, 0
            ),
            $.NSUTF8StringEncoding
        )
    );
```