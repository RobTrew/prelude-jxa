```applescript
-- foldr :: (a -> b -> b) -> b -> [a] -> b
on foldr(f, startValue, xs)
    tell mReturn(f)
        set v to startValue
        set lng to length of xs
        repeat with i from lng to 1 by -1
            set v to |λ|(v, item i of xs, i, xs)
        end repeat
        return v
    end tell
end foldr
```

```js
// Note that that the Haskell signature of foldr is different from that of
// foldl - the positions of accumulator and current value are reversed
```

```js
// foldr :: (a -> b -> b) -> b -> [a] -> b
const foldr = (f, a, xs) => xs.reduceRight(flip(f), a);
```