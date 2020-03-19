```js
// elem :: Eq a => a -> [a] -> Bool
// elem :: Char -> String -> Bool
const elem = x =>
    xs => {
        const t = xs.constructor.name;
        return 'Array' !== t ? (
            xs['Set' !== t ? 'includes' : 'has'](x)
        ) : xs.some(eq(x));
    };
```