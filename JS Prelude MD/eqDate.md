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