```javascript
// iterateUntilGen :: (a -> Bool) -> (a -> a) ->
// a -> Generator [a]
const iterateUntilGen = p =>
    f => function* (x) {
        let v = x;

        while (!p(v)) {
            yield v;
            v = f(v);
        }
    };
```