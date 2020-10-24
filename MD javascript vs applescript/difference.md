```javascript
// difference :: Eq a => [a] -> [a] -> [a]
const difference = xs =>
    ys => {
        const s = new Set(ys);
        return xs.filter(x => !s.has(x));
    };
```


```applescript
-- difference :: Eq a => [a] -> [a] -> [a]
on difference(xs, ys)
    script p
        on |λ|(x)
            x is not in ys
        end |λ|
    end script
    filter(p, xs)
end difference
```