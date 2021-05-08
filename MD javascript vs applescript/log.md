```javascript
// log :: Float -> Float
const log = Math.log;
```


```applescript
-- log :: Float -> Float
on |log|(n)
    Just of evalJSMay(("Math.log(" & n as string) & ")")
end |log|
```