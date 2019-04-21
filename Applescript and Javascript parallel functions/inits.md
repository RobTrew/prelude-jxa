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

```js
// inits([1, 2, 3]) -> [[], [1], [1, 2], [1, 2, 3]
// inits('abc') -> ["", "a", "ab", "abc"]
```

```js
// inits :: [a] -> [[a]]
// inits :: String -> [String]
const inits = xs => [
        []
    ]
    .concat(('string' === typeof xs ? xs.split('') : xs)
        .map((_, i, lst) => lst.slice(0, 1 + i)));
```