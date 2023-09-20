```javascript
// approxRatio :: Real -> Real -> Ratio
const approxRatio = epsilon =>
    n => {
        const
            c = gcdApprox(
                Boolean(epsilon)
                    ? epsilon
                    : (1 / 10000)
            )(1, n);

        return Ratio(
            Math.floor(n / c),
            Math.floor(1 / c)
        );
    };


// gcdApprox :: Real -> (Real, Real) -> Real
const gcdApprox = epsilon =>
    (x, y) => {
        const _gcd = (a, b) => (
            b < epsilon
                ? a
                : _gcd(b, a % b)
        );

        return _gcd(Math.abs(x), Math.abs(y));
    };
```


```applescript
-- approxRatio :: Float -> Float -> Ratio
on approxRatio(epsilon, n)
    if {real, integer} contains (class of epsilon) and 0 < epsilon then
        set e to epsilon
    else
        set e to 1 / 10000
    end if
    
    script gcde
        on |λ|(e, x, y)
            script _gcd
                on |λ|(a, b)
                    if b < e then
                        a
                    else
                        |λ|(b, a mod b)
                    end if
                end |λ|
            end script
            |λ|(abs(x), abs(y)) of _gcd
        end |λ|
    end script
    
    set c to |λ|(e, 1, n) of gcde
    Ratio((n div c), (1 div c))
end approxRatio
```