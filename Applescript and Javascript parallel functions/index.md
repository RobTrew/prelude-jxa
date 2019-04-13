```applescript
-- index (!!) :: [a] -> Int -> Maybe a
-- index (!!) :: String -> Int -> Maybe Char
on |index|(xs, i)
    if script is class of xs then
      -- not yet defined for generators
      -- missing value
    else
        if length of xs < i then
            Nothing()
        else
            Just(item i of xs)
        end if
    end if
end |index|
```

```js
// index (!!) :: [a] -> Int -> Maybe a
// index (!!) :: Generator (Int, a) -> Int -> Maybe a
// index (!!) :: String -> Int -> Maybe Char
const index = xs => i => {
    const s = xs.constructor.constructor.name;
    return 'GeneratorFunction' !== s ? (() => {
        const v = xs[i];
        return undefined !== v ? Just(v) : Nothing();
    })() : (() => {
        const v = until(
            x => x.done || i <= fst(x.value),
            () => xs.next(),
            xs.next()
        );
        return v.done ? Nothing() : Just(snd(v.value));
    })();
};
```