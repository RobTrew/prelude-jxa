```javascript
// length :: [a] -> Int
const length = xs =>
    // Returns Infinity over objects without finite
    // length. This enables zip and zipWith to choose
    // the shorter argument when one is non-finite,
    // like cycle, repeat etc
    'GeneratorFunction' !== xs.constructor
    .constructor.name ? (
        xs.length
    ) : Infinity;
```


```applescript
-- length :: [a] -> Int
on |length|(xs)
    set c to class of xs
    if list is c or string is c then
        length of xs
    else
        (2 ^ 29 - 1) -- (maxInt - simple proxy for non-finite)
    end if
end |length|
```