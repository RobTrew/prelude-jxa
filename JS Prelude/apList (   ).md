```js
// e.g. [(*2),(/2), sqrt] <*> [1,2,3]
// -->  ap([dbl, hlf, root], [1, 2, 3])
// -->  [2,4,6,0.5,1,1.5,1,1.4142135623730951,1.7320508075688772]

// Each member of a list of functions applied to each
// of a list of arguments, deriving a list of new values.
```

```js
// apList (<*>) :: [(a -> b)] -> [a] -> [b]
const apList = (fs, xs) => //
    fs.reduce((a, f) => a.concat(
        xs.reduce((a, x) => a.concat([f(x)]), [])
    ), []);
```