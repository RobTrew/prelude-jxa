```js
// The listToMaybe function returns Nothing on 
// an empty list or Just the head of the list.
```

```js
// listToMaybe :: [a] -> Maybe a
const listToMaybe = xs =>
    xs.length > 0 ? (
        Just(xs[0])
    ) : Nothing();
```