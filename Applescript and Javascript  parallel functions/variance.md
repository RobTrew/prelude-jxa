```applescript
-- variance :: [Num] -> Numon variance(xs)	set m to mean(xs)	script		on |λ|(a, x)			a + (x - m) ^ 2		end |λ|	end script	foldl(result, 0, xs) / ((length of xs) - 1)end variance
```

```js
// variance :: [Num] -> Num
const variance = xs => {
    const
        lng = xs.length,
        mean = xs.reduce((a, b) => a + b, 0) / lng;
    return xs.reduce(
        (a, b) => a + Math.pow(b - mean, 2),
        0
    ) / (lng - 1);
};
```