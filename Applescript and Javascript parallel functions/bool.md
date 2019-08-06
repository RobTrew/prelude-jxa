```applescript
-- bool :: a -> a -> Bool -> a
on bool(f, t, p)
    if p then
        set v to t
    else
        set v to f
    end if
    -- Delayed evaluation, if needed.
    if handler is class of v then
        |λ|() of mReturn(v)
    else
        v
    end if
end bool
```

```js
// bool :: a -> a -> Bool -> a
const bool = f => t => p =>
    p ? t : f;
```