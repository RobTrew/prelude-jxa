```javascript
// exp :: Float -> Float
const exp = Math.exp;
```


```applescript
-- exp :: Float -> Float
on exp(n)
    Just of evalJSMay(("Math.exp(" & n as string) & ")")
end exp
```