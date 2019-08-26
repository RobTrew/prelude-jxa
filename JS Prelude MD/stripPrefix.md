```js
// stripPrefix :: Eq a => [a] -> [a] -> Maybe [a]
const stripPrefix = pfx => s => {
    const
        blnString = 'string' === typeof pfx,
        [xs, ys] = blnString ? (
            [pfx.split(''), s.split('')]
        ) : [pfx, s];
    const
        sp_ = (xs, ys) => 0 === xs.length ? (
            Just(blnString ? ys.join('') : ys)
        ) : (0 === ys.length || xs[0] !== ys[0]) ? (
            Nothing()
        ) : sp_(xs.slice(1), ys.slice(1));
    return sp_(xs, ys);
};
```