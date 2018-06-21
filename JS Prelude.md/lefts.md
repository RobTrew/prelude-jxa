```js
// lefts :: [Either a b] -> [a]
const lefts = xs =>
    concatMap(
        x => x.type === 'Either' && x.Left !== undefined ? (
            [x.Left]
        ) : [], xs
    );
```