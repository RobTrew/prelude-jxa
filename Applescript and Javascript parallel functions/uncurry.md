```applescript
-- Given a curried function, returns an
-- equivalent function on a tuple or list pair.
```

```applescript
-- uncurry :: (a -> b -> c) -> ((a, b) -> c)
on uncurry(f)
    script
        on |λ|(ab)
            if class of ab is list then
                f's |λ|(item 1 of ab)'s |λ|(item 2 of ab)
            else
                f's |λ|(|1| of ab)'s |λ|(|2| of ab)
            end if
        end |λ|
    end script
end uncurry
```

```js
// Given a curried function, returns an
// equivalent function on a tuple or list pair.
```

```js
// uncurry :: (a -> b -> c) -> ((a, b) -> c)
const uncurry = f => args =>
    f(args[0])(args[1]);
```