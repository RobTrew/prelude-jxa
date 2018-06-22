```js
// stripPrefix :: Eq a => [a] -> [a] -> Maybe [a]
const stripPrefix = (pfx, s) => {
    const
        blnString = typeof pfx === 'string',
        [xs, ys] = blnString ? (
            [pfx.split(''), s.split('')]
        ) : [pfx, s];
    const
        sp_ = (xs, ys) => xs.length === 0 ? (
            Just(blnString ? ys.join('') : ys)
        ) : (ys.length === 0 || xs[0] !== ys[0]) ? (
            Nothing()
        ) : sp_(xs.slice(1), ys.slice(1));
    return sp_(xs, ys);
};
```