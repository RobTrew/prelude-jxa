```javascript
// index (!!) :: [a] -> Int -> Maybe a
// index (!!) :: Generator (Int, a) -> Int -> Maybe a
// index (!!) :: String -> Int -> Maybe Char
const index = xs =>
    i => {
        const s = xs.constructor.constructor.name;

        return "GeneratorFunction" !== s ? (() => {
            const v = xs[i];

            return undefined !== v ? Just(v) : Nothing();
        })() : (take(i)(xs), xs.next().value);
    };
```


```applescript
-- index (!!) :: [a] -> Int -> Maybe a
-- index (!!) :: Gen [a] -> Int -> Maybe a
-- index (!!) :: String -> Int -> Maybe Char
on |index|(xs, i)
    if script is class of xs then
        repeat with j from 1 to i
            set v to |λ|() of xs
        end repeat
        if missing value is not v then
            Just(v)
        else
            Nothing()
        end if
    else
        if length of xs < i then
            Nothing()
        else
            Just(item i of xs)
        end if
    end if
end |index|
```