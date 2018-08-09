```applescript
-- bindFn :: (a -> b) -> (b -> c) -> a -> c
on bindFn(m, mf)
    script
        property mnd : mReturn(m)
        property f : mReturn(mf)'s |λ|
        on |λ|(x)
            script
                on |λ|(y)
                    mnd's |λ|(x, y)
                end |λ|
            end script
            f(result)'s |λ|(x)
        end |λ|
    end script
end bindFn
```

```js
// bindFn :: (a -> b) -> (b -> c) -> a -> c
const bindFn = (m, mf) =>
    x => mf(y => m(x, y))(x);
```