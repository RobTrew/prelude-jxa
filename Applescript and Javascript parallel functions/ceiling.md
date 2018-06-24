```applescript
-- ceiling :: Num -> Int
on ceiling(x)
    set nr to properFraction(x)
    set n to |1| of nr
    if (|2| of nr) > 0 then
        n + 1
    else
        n
    end if
end ceiling
```

```js
// The least integer not less than x
```

```js
// ceiling :: Num -> Int
const ceiling = x => {
    const
      nr = properFraction(x),
      n = nr[0]
    return nr[1] > 0 ? n + 1 : n;
};
```