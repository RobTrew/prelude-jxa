```applescript
-- mReturn :: First-class m => (a -> b) -> m (a -> b)
on mReturn(f)
    -- 2nd class handler function lifted into 1st class script wrapper. 
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

// In JS, mReturn is just an alternate name for identity.
```

```js
// mReturn :: First-class m => (a -> b) -> m (a -> b)
const mReturn = x => identity(x);
```