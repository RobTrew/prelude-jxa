```applescript
-- ratio :: Int -> Int -> Ratio Int
on ratio(x, y)
    script go
        on |λ|(x, y)
            if 0 ≠ y then
                set d to gcd(x, y)
                {type:"Ratio", n:(x div d), d:(y div d)}
            else
                missing value
            end if
        end |λ|
    end script
    go's |λ|(x * (signum(y)), abs(y))
end ratio
```

```js
// ratio :: Int -> Int -> Ratio Int
const ratio = (x, y) => {
  const go = (x, y) =>
    0 !== y ? (() => {
      const d = gcd(x, y);
      return {
        type: 'Ratio',
        'n': quot(x, d), // numerator
        'd': quot(y, d) // denominator
      };
    })() : undefined;
  return go(x * signum(y), abs(y));
};
```