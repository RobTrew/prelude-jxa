```javascript
// traverseListLR (a -> Either b c) ->
// [a] -> Either b [c]
const traverseListLR = flr =>
    // Traverse over [a] with (a -> Either b c)
    // Either Left b or Right [c]
    xs => {
        const n = xs.length;

        return 0 < n
            ? until(
                ([i, lr]) => (n === i) || ("Left" in lr)
            )(
                ([i, lr]) => {
                    // Passing an option index argument
                    // which flr can ignore or use
                    const lrx = flr(xs[i], i);

                    return [
                        1 + i,
                        "Right" in lrx
                            ? Right(
                                lr.Right.concat([
                                    lrx.Right
                                ])
                            )
                            : lrx
                    ];
                }
            )(
                Tuple(0)(Right([]))
            )[1]
            : Right([]);
    };
```