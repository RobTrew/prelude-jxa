```applescript
-- differenceGen :: Gen [a] -> Gen [a] -> Gen [a]
on differenceGen(ga, gb)
    -- All values of ga except any
    -- already seen in gb.
    script
        property g : zipGen(ga, gb)
        property bs : {}
        property xy : missing value
        on |λ|()
            set xy to g's |λ|()
            if missing value is xy then
                xy
            else
                set x to |1| of xy
                set y to |2| of xy
                set bs to {y} & bs
                if bs contains x then
                    |λ|() -- Next in series.
                else
                    x
                end if
            end if
        end |λ|
    end script
end differenceGen
```


```javascript
// differenceGen :: Gen [a] -> Gen [a] -> Gen [a]
const differenceGen = ga =>
    function *(gb) {
        // All values of generator stream ga except any
        // already seen in generator stream gb.
        const
            stream = zipGen(ga)(gb),
            sb = new Set([]);

        let xy = take(1)(stream);

        while (Boolean(xy.length)) {
            const [x, y] = Array.from(xy[0]);

            sb.add(y);
            if (!sb.has(x)) {
                yield x;
            }
            xy = take(1)(stream);
        }
    };
```