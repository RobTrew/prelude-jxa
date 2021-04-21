```javascript
// base64encode :: String -> String
const base64encode = s =>
    ObjC.unwrap(
        $.NSString.stringWithString(s)
        .dataUsingEncoding(
            $.NSUTF8StringEncoding
        )
        .base64EncodedStringWithOptions(0)
    );
```


```applescript
-- base64encode :: String -> String
on base64encode(s)
    tell current application
        set encodingOption to its NSUTF8StringEncoding
        base64EncodedStringWithOptions_(0) of ¬
            dataUsingEncoding_(encodingOption) of ¬
            (stringWithString_(s) of its NSString) as string
    end tell
end base64encode
```