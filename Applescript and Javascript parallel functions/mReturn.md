```applescript
-- Lift 2nd class handler function into 1st class script wrapper 
```

```applescript
-- mReturn :: First-class m => (a -> b) -> m (a -> b)
on mReturn(f)
    if class of f is script then
        f
    else
        script
            property |λ| : f
        end script
    end if
end mReturn
```

```js
// Not required in JS, which has first functions by default
// Included for comparison with AS, which can only obtain
// first class functions by lifting 'handlers' into 'scripts'
// as anonymous |λ|() functions.

// Here Just an alternative name for id.
```

```js
// mReturn :: First-class m => (a -> b) -> m (a -> b)
const mReturn = id;
```