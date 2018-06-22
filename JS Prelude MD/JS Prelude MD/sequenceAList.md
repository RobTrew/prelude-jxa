```js
// sequenceAList :: Applicative f => [f a] -> f [a]
const sequenceAList = us =>
    us.length > 0 ? (
        us.reduceRight(
            (v, u) => ap(fmap(x => xs => [x, ...xs], u), v),
            pureT(us[0])([])
        )
    ) : us;
```