```applescript
-- Derive a script with |λ| handler from the name of an infix operator
```

```applescript
-- op :: String -> (a -> a -> b)
on op(strOp)
    run script "script\non |λ|(a, b)\na " & strOp & " b\nend |λ|\nend script"
end op
```

```js
// Derive a function from the name of a JS infix operator
```

```js
// op :: String -> (a -> a -> b)
const op = strOp =>
    eval(`(a, b) => a ${strOp} b`);
```