```js
// rights :: [Either a b] -> [b]
const rights = xs =>
    concatMap(
        x => x.type === 'Either' && x.Right !== undefined ? (
            [x.Right]
        ) : [], xs
    );
```