```javascript
// bindFn (>>=) :: (a -> b) -> (b -> a -> c) -> a -> c
const bindFn = f =>
    // Binary operator applied over f x and x.
    op => x => op(f(x))(x);
```


```applescript
-- bindFn (>>=) :: (a -> b) -> (b -> a -> c) -> a -> c
on bindFn(f, bop)
    -- Where either bop or f is a  binary operator.
    script
        property mf : mReturn(f)
        property mop : mReturn(bop)
        on |λ|(x)
            try
                curry(mop)'s |λ|(mf's |λ|(x))'s |λ|(x)
            on error
                mop's |λ|(curry(mf)'s |λ|(x))'s |λ|(x)
            end try
        end |λ|
    end script
end bindFn
```