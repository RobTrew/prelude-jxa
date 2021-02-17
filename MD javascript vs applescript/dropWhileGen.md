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


```applescript
-- dropWhileGen :: (a -> Bool) -> Gen [a] -> [a]
on dropWhileGen(p, xs)
    set v to |λ|() of xs
    tell mReturn(p)
        repeat while (|λ|(v))
            set v to xs's |λ|()
        end repeat
    end tell
    return cons(v, xs)
end dropWhileGen
```