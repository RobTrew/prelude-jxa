```applescript
-- floor :: Num -> Int
on floor(x)
    if class of x is record then
        set nr to properFracRatio(x)
    else
        set nr to properFraction(x)
    end if
    set n to fst(nr)
    if 0 > snd(nr) then
        n - 1
    else
        n
    end if
end floor
```


```javascript
// floor :: Num -> Int
const floor = x => {
    const
        nr = (
            "Ratio" !== x.type ? (
                properFraction
            ) : properFracRatio
        )(x),
        n = nr[0];

    return 0 > nr[1] ? n - 1 : n;
};
```