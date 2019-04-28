```applescript
-- bindFn (>>=) :: (a -> b) -> (b -> a -> c) -> a -> c
on bindFn(f, bop)
    script
        property mf : mReturn(f)
        property mop : mReturn(bop)
        on |λ|(x)
            mop's |λ|(mf's |λ|(x), x)
        end |λ|
    end script
end bindFn
```

```js
// bindFn (>>=) :: (a -> b) -> (b -> a -> c) -> a -> c
const bindFn = (f, bop) =>
    // Where either bop or f is a binary operator.
    x => curry(bop)(curry(f)(x))(x)
```