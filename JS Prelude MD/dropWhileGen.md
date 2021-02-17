```javascript
// dropWhileGen :: (a -> Bool) -> Gen [a] -> [a]
const dro// dropWhileGen :: (a -> Bool) -> Gen [a] -> [a]
const dropWhileGen = p =>
    xs => {
        let
            nxt = xs.next(),
            v = nxt.value;

        while (!nxt.done && p(v)) {
            nxt = xs.next();
            v = nxt.value;
        }

        return cons(v)(xs);
    };pWhileGen = p =>
    xs => {
        let
            nxt = xs.next(),
            v = nxt.value;
        while (!nxt.done && p(v)) {
            nxt = xs.next();
            v = nxt.value;
        }
        return cons(v)(xs);
    };
```