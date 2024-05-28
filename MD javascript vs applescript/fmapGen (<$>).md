```applescript
-- fmapGen <$> :: (a -> b) -> Gen [a] -> Gen [b]
on fmapGen(f, gen)
    script
        property g : mReturn(f)
        on |λ|()
            set v to gen's |λ|()
            if v is missing value then
                v
            else
                g's |λ|(v)
            end if
        end |λ|
    end script
end fmapGen
```


```javascript
// fmapGen <$> :: (a -> b) -> Gen [a] -> Gen [b]
const fmapGen = f =>
    // The map of f over a stream of generator values.
    function* (gen) {
        let v = gen.next();

        while (!v.done) {
            yield f(v.value);
            v = gen.next();
        }
    };
```