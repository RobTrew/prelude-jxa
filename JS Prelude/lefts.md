```js
// lefts :: [Either a b] -> [a]
const lefts = xs =>
    concatMap(
        x => ('Either' === x.type) && (undefined !== x.Left) ? (
            [x.Left]
        ) : [], xs
    );
```