```applescript
-- comparing :: (a -> b) -> (a -> a -> Ordering)
on comparing(f)
    script
        on |λ|(a, b)
            tell mReturn(f)
                set fa to |λ|(a)
                set fb to |λ|(b)
                if fa < fb then
                    -1
                else if fa > fb then
                    1
                else
                    0
                end if
            end tell
        end |λ|
    end script
end comparing
```


```javascript
// comparing :: (a -> b) -> (a -> a -> Ordering)
const comparing = f =>
    // The ordering of f(x) and f(y) as a value
    // drawn from {-1, 0, 1}, representing {LT, EQ, GT}.
    x => y => {
        const
            a = f(x),
            b = f(y);

        return a < b ? -1 : (a > b ? 1 : 0);
    };
```