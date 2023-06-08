```javascript
// appendGen (++) :: Gen [a] -> Gen [a] -> Gen [a]
const appendGen = xs =>
// A new generator composed from the
// concatenation of two existing generators.
    function *(ys) {
        for (const vs of [xs, ys]) {
            let nxt = vs.next();

            while (!nxt.done) {
                yield nxt.value;
                nxt = vs.next();
            }
        }
    };
```


```applescript
-- appendGen (++) :: Gen [a] -> Gen [a] -> Gen [a]
on appendGen(xs, ys)
    script
        property vs : xs
        on |λ|()
            set v to |λ|() of vs
            if missing value is not v then
                v
            else
                set vs to ys
                |λ|() of ys
            end if
        end |λ|
    end script
end appendGen
```