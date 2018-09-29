```applescript
-- takeWhileGen :: (a -> Bool) -> Gen [a] -> [a]
on takeWhileGen(p, xs)
    set ys to {}
    set v to |λ|() of xs
    tell mReturn(p)
        repeat while (|λ|(v))
            set end of ys to v
            set v to xs's |λ|()
        end repeat
    end tell
    return ys
end takeWhileGen
```

```js
// takeWhileGen :: (a -> Bool) -> Gen [a] -> [a]
const takeWhileGen = (p, xs) => {
    const ys = [];
    let
        nxt = xs.next(),
        v = nxt.value;
    while (!nxt.done && p(v)) {
        ys.push(v);
        nxt = xs.next();
        v = nxt.value
    }
    return ys;
};
```