```applescript
-- Retuns the conjunction of a Boolean 
-- list. For the result to be true, 
-- all values in the list must be true.
```

```applescript
-- and :: [Bool] -> Boolon |and|(xs)	repeat with x in xs		if not (contents of x) then return false	end repeat	return trueend |and|
```

```js
// | The conjunction of a container of Bools. 
// True unless any contained value is false.
```

```js
// and :: [Bool] -> Bool
const and = xs => {
    let i = xs.length;
    while (i--)
        if (!xs[i]) return false;
    return true;
};
```