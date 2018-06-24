```applescript
-- lcm :: Int -> Int -> Int
on lcm(x, y)
    if (x = 0 or y = 0) then
        0
    else
        abs(floor(x / (gcd(x, y))) * y)
    end if
end lcm
```

```js
// lcm :: Int -> Int -> Int
const lcm = (x, y) =>
   ( x === 0 || y === 0) ? 0 : Math.abs(Math.floor(x / gcd(x, y)) * y);
```