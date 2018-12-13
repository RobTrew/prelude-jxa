```applescript
-- radians :: Float x => Degrees x -> Radians x
on radians(x)
    (pi / 180) * x
end radians
```

```js
// radians :: Float x => Degrees x -> Radians x
const radians = x =>
    (Math.PI / 180) * x;
```