```javascript
// compose (<<<) :: (b -> c) -> (a -> b) -> a -> c
const compose = (...fs) =>
    // A function defined by the right-to-left
    // composition of all the functions in fs.
    fs.reduce(
        (f, g) => x => f(g(x)),
        x => x
    );
```


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