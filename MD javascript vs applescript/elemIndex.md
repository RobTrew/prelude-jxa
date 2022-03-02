```javascript
// elemIndex :: Eq a => a -> [a] -> Maybe Int
const elemIndex = x =>
    // Just the index of x in xs, if it is found,
    // or Nothing, if xs does not contain x.
    xs => {
        const i = xs.indexOf(x);

        return -1 === i ? (
            Nothing()
        ) : Just(i);
    };
```


```applescript
-- elemIndex :: Eq a => a -> [a] -> Maybe Inton elemIndex(x, xs)    -- Just the zero-based index of x in xs,    -- or Nothing if x is not found in xs.	set lng to length of xs	repeat with i from 1 to lng		if x = (item i of xs) then return Just(i - 1)	end repeat	return Nothing()end elemIndex
```