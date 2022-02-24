```applescript
-- curry :: ((a, b) -> c) -> a -> b -> c
on curry(f)
    script
        on |λ|(a)
            script
                on |λ|(b)
                    |λ|(a, b) of mReturn(f)
                end |λ|
            end script
        end |λ|
    end script
end curry
```


```javascript
// curry :: ((a, b) -> c) -> a -> b -> c
const curry = f =>
    a => b => 1 < f.length ? (
        f(a, b)
    ) : f(Tuple(a)(b));
```