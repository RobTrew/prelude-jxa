```applescript
-- exp :: Float -> Float
on exp(n)
    Just of evalJSMay(("Math.exp(" & n as string) & ")")
end exp
```


```javascript
// exp :: Float -> Float
const exp = Math.exp;
```