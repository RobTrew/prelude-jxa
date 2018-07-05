```applescript
-- floor :: Num -> Int
on floor(x)
    set nr to properFraction(x)
    set n to |1| of nr
    if (|2| of nr) < 0 then
        n - 1
    else
        n
    end if
end floor
```

```js
// floor :: Num -> Int
const floor = x => {
    const
      nr = properFraction(x),
      n = nr[0];
    return 0 > nr[1] ? n - 1 : n;
};
```