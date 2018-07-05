```js
// The listToMaybe function returns Nothing on 
// an empty list or Just the head of the list.
```

```js
// listToMaybe :: [a] -> Maybe a
const listToMaybe = xs =>
    0 < xs.length ? (
        Just(xs[0])
    ) : Nothing();
```