```applescript
-- eqDate :: Date -> Date -> Bool
on eqDate(dte, dte1)
    -- True if the date parts of two date-time objects
    -- (ignoring the time parts) are the same.
    tell dte
        its year = year of dte1 ¬
            and its month = month of dte1 ¬
            and its day = day of dte1
    end tell
end eqDate
```


```javascript
// eqDate :: Date -> Date -> Bool
const eqDate = dte =>
    // True if the date parts of two date-time objects
    // (ignoring the time parts) are the same.
    dte1 => {
        const dayOnly = dateTime =>
            new Date(dateTime).setUTCHours(0, 0, 0, 0);
        return dayOnly(dte) === dayOnly(dte1);
    };
```