```javascript
// curryN :: Curry a b => a -> b
const curryN = f =>
    // A curried function derived from a
    // function over a tuple of any order.
    (...args) => {
        const
            go = xs => f.length <= xs.length ? (
                f(...xs)
            ) : (...ys) => go(xs.concat(ys));
        return go(args);
    };
```