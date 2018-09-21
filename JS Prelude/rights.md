```js
// rights :: [Either a b] -> [b]
const rights = xs =>
    concatMap(
        x => ('Either' === x.type) && (undefined !== x.Right) ? (
            [x.Right]
        ) : [], xs
    );
```