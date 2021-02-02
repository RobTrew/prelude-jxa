```applescript
-- argvLength :: Function -> Int
on argvLength(h)
    try
        mReturn(h)'s |λ|()
        0
    on error errMsg
        set {dlm, my text item delimiters} to {my text item delimiters, ","}
        set xs to text items of errMsg
        set my text item delimiters to dlm
        length of xs
    end try
end argvLength
```


```javascript
// argvLength :: Function -> Int
const argvLength = f =>
    f.length;
```