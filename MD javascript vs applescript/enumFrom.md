```applescript
-- enumFrom :: Enum a => a -> [a]
on enumFrom(x)
    script
        property v : missing value
        property blnNum : class of x is not text
        on |λ|()
            if missing value is not v then
                if blnNum then
                    set v to 1 + v
                else
                    set v to succ(v)
                end if
            else
                set v to x
            end if
            return v
        end |λ|
    end script
end enumFrom
```


```javascript
// enumFrom :: Enum a => a -> [a]
const enumFrom = function* (x) {
    // A non-finite succession of enumerable
    // values, starting with the value x.
    let v = x;

    while (true) {
        yield v;
        v = succ(v);
    }
};
```