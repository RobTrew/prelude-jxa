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


```javascript
// approxRatio :: Float -> Float -> Ratio
const approxRatio = epsilon =>
    // An ratio derived by approximation
    // (at granularity epsilon) to the float n.
    n => {
        const
            gcde = (e, x, y) => {
                const _gcd = (a, b) => (b < e ? a : _gcd(b, a % b));
                return _gcd(abs(x), abs(y));
            },
            c = gcde(Boolean(epsilon) ? epsilon : (1 / 10000), 1, abs(n)),
            r = ratio(quot(abs(n))(c))(quot(1, c));
        return {
            type: 'Ratio',
            n: r.n * signum(n),
            d: r.d
        };
    };
```