```js
// elem :: Eq a => a -> [a] -> Bool
const elem = x =>
    // True if xs contains an instance of x.
    xs => {
        const t = xs.constructor.name;
        return 'Array' !== t ? (
            xs['Set' !== t ? 'includes' : 'has'](x)
        ) : xs.some(eq(x));
    };
```