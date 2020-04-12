```js
// groupSortOn :: (a -> b) -> [a] -> [[a]]
const groupSortOn = f =>
    compose(
        map(map(snd)),
        groupBy(on(eq)(fst)),
        sortBy(comparing(fst)),
        map(fanArrow(f)(identity))
    );
```