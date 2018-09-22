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

```js
// repeat :: a -> Generator [a]
function* repeat(xs) {
    while(true) yield xs;
}
```