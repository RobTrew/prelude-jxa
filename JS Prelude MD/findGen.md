```javascript
// findGen :: (a -> Bool) -> Gen [a] -> Maybe a
const findGen = p =>
    // Just the first match for the predicate p
    // in the generator stream xs, or Nothing
    // if no match is found.
    xs => {
        const
            mb = until(
                ([nxt]) => nxt.done || p(nxt.value)
            )(
                ([, b]) => Tuple(b.next())(
                    b
                )
            )(
                Tuple(xs.next())(xs)
            )[0];

        return mb.done
            ? Nothing()
            : Just(mb.value);
    };
```