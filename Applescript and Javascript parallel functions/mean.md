```applescript
-- mean :: [Num] -> Num
on mean(xs)
    script
        on |λ|(a, x)
            a + x
        end |λ|
    end script
    foldl(result, 0, xs) / (length of xs)
end mean
```

```js
// mean :: [Num] -> Num
const mean = xs =>
  xs.reduce((a, x) => a + x, 0) / xs.length;
```