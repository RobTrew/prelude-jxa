```js
// apLR (<*>) :: Either e (a -> b) -> Either e a -> Either e b
const apLR = (flr, lr) => {
    const pf = isRight(flr);
    return pf && isRight(lr) ? (
        Right(flr.Right(lr.Right))
    ) : (pf ? lr : flr);
};
```