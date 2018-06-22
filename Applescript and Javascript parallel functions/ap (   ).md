```applescript
-- Applies wrapped functions to wrapped values, 
-- for example applying a list of functions to a list of values
-- or applying Just(f) to Just(x), Right(f) to Right(x), etc
```

```applescript
-- ap (<*>) :: Monad m => m (a -> b) -> m a -> m bon ap(mf, mx)	if class of mx is list then		apList(mf, mx)	else if class of mf is record then		set ks to keys(mf)		if ks contains "type" then			set t to type of mx			if t = "Either" then				apEither(mf, mx)			else if t = "Maybe" then				apMaybe(mf, mx)			else if t = "Tuple" then				apTuple(mf, mx)			else				missing value			end if		else			missing value		end if	end ifend ap
```

```js
// Applies wrapped functions to wrapped values, 
// for example applying a list of functions to a list of values
// or applying Just(f) to Just(x), Right(f) to Right(x), etc
```

```js
// ap (<*>) :: Monad m => m (a -> b) -> m a -> m b
const ap = (mf, mx) => {
    const t = mx.type;
    return (t !== undefined ? (
        t === 'Either' ? (
            apEither
        ) : t === 'Maybe' ? (
            apMaybe
        ) : t === 'Node' ? (
            apTree
        ) : apTuple
    ) : apList)(mf, mx);
};
```