```javascript
// cycle :: [a] -> Generator [a]
const cycle = function* (xs) {
    // An infinite repetition of xs,
    // from which a prefix of arbitrary
    // length may be drawn.
    const n = xs.length;
    let i = 0;

    while (true) {
        yield xs[i];
        i = (1 + i) % n;
    }
};
```


```applescript
-- cycle :: [a] -> Generator [a]
on cycle(xs)
    script
        property lng : 1 + (length of xs)
        property i : missing value
        on |λ|()
            if missing value is i then
                set i to 1
            else
                set nxt to (1 + i) mod lng
                if 0 = ((1 + i) mod lng) then
                    set i to 1
                else
                    set i to nxt
                end if
            end if
            return item i of xs
        end |λ|
    end script
end cycle
```