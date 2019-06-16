```applescript
-- foldr :: (a -> b -> b) -> b -> [a] -> b
on foldr(f, startValue, xs)
    tell mReturn(f)
        set v to startValue
        set lng to length of xs
        repeat with i from lng to 1 by -1
            set v to |λ|(item i of xs, v, i, xs)
        end repeat
        return v
    end tell
end foldr
```

```js
// Note that that the Haskell signature of foldr differs from that of
// foldl - the positions of accumulator and current value are reversed
```

```js
// foldr :: (a -> b -> b) -> b -> [a] -> b
const foldr = (f, a, xs) =>
    xs.reduceRight((a, x) => f(x, a), a);

// or deep-curried:
// foldr :: (b -> a -> a) -> a -> [b] -> a
// const foldr = f => a => xs => {
//     let v = a,
//         i = xs.length;
//     while (i--) v = f(xs[i])(v);
//     return v;
// };
```