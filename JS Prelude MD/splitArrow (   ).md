```js
// Compose a function (from a tuple to a tuple), 
// (with separate transformations for fst and snd)
```

```js
// splitArrow (***) :: (a -> b) -> (c -> d) -> ((a, c) -> (b, d))
const splitArrow = f => g => 
    tpl => Tuple(f(tpl[0]))(
        g(tpl[1])
    );
```