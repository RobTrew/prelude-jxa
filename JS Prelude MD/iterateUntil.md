```javascript
// iterateUntil :: (a -> Bool) -> (a -> a) -> a -> [a]
const iterateUntil = p =>
    f => function*(x) {
        let v = x;
        while (!p(v)) {
            yield(v);
            v = f(v);
        }
    };
```