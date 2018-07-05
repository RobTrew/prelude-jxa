```js
// apLR (<*>) :: Either e (a -> b) -> Either e a -> Either e b
const apLR = (flr, lr) => {
    const pf = (undefined === flr.Left);
    return pf && (undefined === lr.Left) ? (
        Right(flr.Right(lr.Right))
    ) : (pf ? lr : flr);
};
```