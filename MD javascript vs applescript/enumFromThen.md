```applescript
-- enumFromThen :: Int -> Int -> Gen [Int]
on enumFromThen(m, n)
    -- A non-finite stream of integers,
    -- starting with m and n, and continuing
    -- with the same interval.
    script
        property d : n - m
        property v : m
        on |λ|()
            set x to v
            set v to d + v
            return x
        end |λ|
    end script
end enumFromThen
```


```javascript
// enumFromThen :: Int -> Int -> Gen [Int]
const enumFromThen = x =>
    // A non-finite stream of integers,
    // starting with x and y, and continuing
    // with the same interval.
    function* (y) {
        const d = y - x;
        let v = y + d;

        yield x;
        yield y;
        while (true) {
            yield v;
            v = d + v;
        }
    };
```