```js
// base64encode :: String -> String
const base64encode = s =>
    ObjC.unwrap(
        $.NSString.stringWithString(s)
        .dataUsingEncoding(
            $.NSUTF8StringEncoding
        ).base64EncodedStringWithOptions(0)
    );
```