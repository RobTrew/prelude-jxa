```javascript
// mappendTuple (<>) :: (a, b) -> (a, b) -> (a, b)
const mappendTuple = ([a, b]) =>
    ([c, d]) => Tuple(
        mappend(a)(c)
    )(
        mappend(b)(d)
    );
```