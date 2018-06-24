```applescript
-- Mirror image of cons
-- New copy of the list, with an atom added at the end
```

```applescript
-- snoc :: [a] -> a -> [a]
on snoc(xs, x)
    xs & {x}
end snoc
```

```js
// Mirror image of cons
// New copy of the list, with an atom added at the end
```

```js
// snoc :: [a] -> a -> [a]
const snoc = (xs, x) => xs.concat(x);
```