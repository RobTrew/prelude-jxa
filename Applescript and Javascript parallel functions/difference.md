```applescript
-- difference :: Eq a => [a] -> [a] -> [a]
on difference(xs, ys)
    script 
        on |λ|(a, y)
            if a contains y then
                my |delete|(y, a)
            else
                a
            end if
        end |λ|
    end script
 
    foldl(result, xs, ys)
end difference
```

```js
// difference :: Eq a => [a] -> [a] -> [a]
const difference = (xs, ys) => {
    const s = new Set(ys);
    return xs.filter(x => !s.has(x));
};
```