```applescript
-- Lift 2nd class handler function into 1st class script wrapper 
```

```applescript
-- mReturn :: First-class m => (a -> b) -> m (a -> b)
on mReturn(f)
    if script is class of f then
        f
    else
        script
            property |λ| : f
        end script
    end if
end mReturn
```

```js
// Not required in JS, which has first functions by default.
// Included only for comparison with AS, which has to derive
// first class functions by lifting 'handlers' into 'scripts'
// as anonymous |λ|() functions.

// In JS, mReturn is just an alternate name for id.
```

```js
// mReturn :: First-class m => (a -> b) -> m (a -> b)
const mReturn = x => id(x);
```