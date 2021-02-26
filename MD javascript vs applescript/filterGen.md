```applescript
-- filterGen :: (a -> Bool) -> Gen [a] -> Gen [a]
on filterGen(p, gen)
    -- Non-finite stream of values which are 
    -- drawn from gen, and satisfy p
    script
        property mp : mReturn(p)'s |λ|
        on |λ|()
            set v to gen's |λ|()
            repeat until mp(v)
                set v to gen's |λ|()
            end repeat
            return v
        end |λ|
    end script
end filterGen
```


```javascript
// filterGen :: (a -> Bool) -> Gen [a] -> Gen [a]
const filterGen = p => xs => {
    // Non-finite stream of values which are
    // drawn from gen, and satisfy p
    const go = function* () {
        let x = xs.next();

        while (!x.done) {
            const v = x.value;

            if (p(v)) {
                yield v;
            }
            x = xs.next();
        }
    };

    return go(xs);
};
```