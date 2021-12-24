```applescript
-- mappendTuple (<>) :: (a, b) -> (a, b) -> (a, b)
on mappendTuple(a, b)
    Tuple(mappend(|1| of a, |1| of b), mappend(|2| of a, |2| of b))
end mappendTuple
```


```javascript
// mappendTuple (<>) :: (a, b) -> (a, b) -> (a, b)
const mappendTuple = ([a, b]) =>
    ([c, d]) => Tuple(
        mappend(a)(c)
    )(
        mappend(b)(d)
    );
```