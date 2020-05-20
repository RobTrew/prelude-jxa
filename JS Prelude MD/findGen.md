```js
// findGen :: (a -> Bool) -> Gen [a] -> Maybe a
const findGen = p =>
    // Just the first match for the predicate p
    // in the generator stream xs, or Nothing
    // if no match is found.
    xs => {
        const
            mb = until(tpl => {
                const nxt = tpl[0];
                return nxt.done || p(nxt.value);
            })(
                tpl => Tuple(tpl[1].next())(
                    tpl[1]
                )
            )(Tuple(xs.next())(xs))[0];
        return mb.done ? (
            Nothing()
        ) : Just(mb.value);
    };
```