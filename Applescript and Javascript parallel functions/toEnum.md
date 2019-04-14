```applescript
-- toEnum :: a -> Int -> a
on toEnum(e)
    script
        property c : class of e
        on |λ|(x)
            if integer is c or real is c then
                x as number
            else if text is c then
                character id x
            else if boolean is c then
                if 0 ≠ x then
                    true
                else
                    false
                end if
            end if
        end |λ|
    end script
end toEnum
```

```js
// The first argument is a sample of the type
// allowing the function to make the right mapping
```

```js
// toEnum :: a -> Int -> a
const toEnum = e => x =>
    ({
        'number': Number,
        'string': String.fromCodePoint,
        'boolean': Boolean,
        'object': v => e.min + v
    } [typeof e])(x);
```