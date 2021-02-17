```javascript
// findIndexR :: (a -> Bool) -> [a] -> Maybe Int
const findIndexR = p =>
    //  Just the index of the last element in
    //  xs for which p(x) is true, or
    //  Nothing if there is no such element.
    xs => {
        const i = reverse([...xs]).findIndex(p);

        return -1 !== i ? (
            Just(xs.length - (1 + i))
        ) : Nothing();
    };
```


```applescript
-- findIndexR :: (a -> Bool) -> [a] -> Maybe Int
on findIndexR(p, xs)
    -- Just the zero-based index of the first
    -- (right-to-left match) for for the predicate p in xs, 
    -- or Nothing if no match is found.
    tell mReturn(p)
        set lng to length of xs
        repeat with i from lng to 1 by -1
            if |λ|(item i of xs) then return Just(i - 1)
        end repeat
        return Nothing()
    end tell
end findIndexR
```