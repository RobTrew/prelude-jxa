```javascript
// center :: Int -> Char -> String -> String
const center = n =>
    // Size of space -> filler Char ->
    // String -> Centered String
    c => s => {
        const gap = n - s.length;

        return 0 < gap ? (() => {
            const
                margin = c.repeat(Math.floor(gap / 2)),
                dust = c.repeat(gap % 2);

            return `${margin}${s}${margin}${dust}`;
        })() : s;
    };
```