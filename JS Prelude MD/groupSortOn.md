```js
// groupSortOn :: (a -> b) -> [a] -> [[a]]
const groupSortOn = f =>
    xs => map(map(snd))(
        groupBy(on(eq)(fst))(
            sortOn(fst)(
                map(fanArrow(f)(identity))(
                    xs
                )
            )
        )
    );
```