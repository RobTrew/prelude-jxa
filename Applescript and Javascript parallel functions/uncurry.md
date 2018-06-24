```applescript
-- Returns a function on a single tuple (containing 2 arguments)
-- derived from an equivalent function with 2 distinct arguments
```

```applescript
-- uncurry :: (a -> b -> c) -> ((a, b) -> c)
on uncurry(f)
    script
        property mf : mReturn(f)'s |λ|
        on |λ|(pair)
            mf(|1| of pair, |2| of pair)
        end |λ|
    end script
end uncurry
```

```js
// Converts a function of more than one argument
// to a function on Tuple type (Tuple ... TupleN)
// or array which contains those arguments.
// This implementation uses the fact that the Tuple
// constructors create an object with a private .length property
```

```js
// uncurry :: (a -> b -> c) -> ((a, b) -> c)
const uncurry = f => args => f.apply(null, args);
```