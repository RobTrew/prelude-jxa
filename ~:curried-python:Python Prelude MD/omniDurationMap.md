```js
// omniDurationMap :: Number -> Number ->
// { String :: Number }
const omniDurationMap = daysPerWeek =>
    // Values for all Omni duration labels, 
    // derived from given values for 'w' and 'd'.
    hoursPerDay => {
        const week = daysPerWeek * hoursPerDay;
        return {
            y: 48 * week,
            mo: 4 * week,
            w: week,
            d: hoursPerDay,
            h: 1,
            m: 1 / 60,
            s: 1 / (60 * 60)
        };
    };
```