```js
// The mapMaybe function is a version of map which can throw out
// elements. In particular, the functional argument returns
// something of type Maybe b. If this is Nothing, no element is
// added on to the result list. If it just Just b, then b is
// included in the result list.
```

```js
// mapMaybe :: (a -> Maybe b) -> [a] -> [b]
const mapMaybe = (mf, xs) =>
    concatMap(compose(mf, maybeToList), xs);
```