```applescript
-- log :: Float -> Float
on |log|(n)
    Just of evalJSMay(("Math.log(" & n as string) & ")")
end |log|
```

```js
// log :: Float -> Float
const log = Math.log;
```