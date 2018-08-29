```applescript
-- compose (<<<) :: (b -> c) -> (a -> b) -> a -> c
on compose(f, g)
    script
        property mf : mReturn(f)
        property mg : mReturn(g)
        on |λ|(x)
            mf's |λ|(mg's |λ|(x))
        end |λ|
    end script
end compose
```

```js
// compose (<<<) :: (b -> c) -> (a -> b) -> a -> c
const compose = (f, g) => x => f(g(x));
```