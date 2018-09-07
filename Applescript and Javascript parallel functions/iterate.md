```applescript
-- iterate :: (a -> a) -> a -> Generator [a]
on iterate(f, x)
    script
        property v : missing value
        property g : mReturn(f)'s |λ|
        on |λ|()
            if v is missing value then
                set v to x
            else
                set v to g(v)
            end if
            return v
        end |λ|
    end script
end iterate
```

```js
// iterate :: (a -> a) -> a -> Generator [a]
function* iterate(f, x) {
    let v = x;
    let i = 1;
    while (true) {
        yield(v);
        v = f(v, i);
        i = 1 + i;
    }
}
```