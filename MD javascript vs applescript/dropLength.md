```javascript
// dropLength :: [a] -> [b] -> [b]
const dropLength = xs =>
    ys => {
        const go = (x, y) =>
            0 < x.length ? (
                0 < y.length ? (
                    go(x.slice(1), y.slice(1))
                ) : []
            ) : y;
        return go(xs, ys);
    };
```


```applescript
-- dropLength :: [a] -> [b] -> [b]
on dropLength(xs, ys)
    script go
        on |λ|(x, y)
            if 0 < length of x then
                if 0 < length of y then
                    |λ|(tail(x), tail(y))
                else
                    {}
                end if
            else
                y
            end if
        end |λ|
    end script
    go's |λ|(xs, ys)
end dropLength
```