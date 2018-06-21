```applescript
-- liftMmay :: (a -> b) -> (Maybe a -> Maybe b)on liftMmay(f)	script		on |λ|(mb)			if Nothing of mb then				mb			else				tell mReturn(f) to |λ|(Just of mb)			end if		end |λ|	end scriptend liftMmay
```

```js
// liftMmay :: (a -> b) -> (Maybe a -> Maybe b)
const liftMmay = f =>
    mb => mb.Nothing ? mb : {
        Nothing: false,
        Just: f(mb.Just)
    };
```