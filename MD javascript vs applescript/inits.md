```javascript
// inits :: [a] -> [[a]]
const inits = xs =>
    // All prefixes of the argument,
    // shortest first.
    xs.reduce(
        (a, x) => a.concat(
            [a.slice(-1)[0].concat(x)]
        ),
        [[]]
    );
```


```applescript
-- inits :: [a] -> [[a]]
-- inits :: String -> [String]
on inits(xs)
    script elemInit
        on |λ|(_, i, xs)
            items 1 thru i of xs
        end |λ|
    end script
    
    script charInit
        on |λ|(_, i, xs)
            text 1 thru i of xs
        end |λ|
    end script
    
    if class of xs is string then
        {""} & map(charInit, xs)
    else
        {{}} & map(elemInit, xs)
    end if
end inits
```