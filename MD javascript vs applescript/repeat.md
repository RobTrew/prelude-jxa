```applescript
-- repeat :: a -> Generator [a]
on |repeat|(x)
    script
        on |λ|()
            return x
        end |λ|
    end script
end |repeat|
```


```javascript
// repeat :: a -> Generator [a]
const repeat = function* (x) {
    while (true) {
        yield x;
    }
};
```