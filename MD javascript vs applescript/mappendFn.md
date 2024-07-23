```javascript
// mappendFn (<>) :: Monoid b => (a -> b) -> (a -> b) -> (a -> b)
const mappendFn = f =>
    g => x => mappend(f(x))(
        g(x)
    );
```


```applescript
-- mappendFn :: Monoid b => (a -> b) -> (a -> b) -> (a -> b)
on mappendFn(f, g)
    script
        property mf : mReturn(f)
        property mg : mReturn(g)
        on |λ|(x)
            mappend(mf's |λ|(x), mg's |λ|(x))
        end |λ|
    end script
end mappendFn
```