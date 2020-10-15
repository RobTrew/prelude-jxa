```js
// omniDurationUnit :: () -> Parser String
const omniDurationUnit = () => {
    // An Omni duration label extracted from the 
    // front of a string of letters, with 
    // any residual letters discarded.
    const
        unitLabel = s => bindP(
            stringCI(s)
        )(k => bindP(
            many(satisfy(c => !isDigit(c)))
        )(
            constant(pureP(k))
        ));
    return [
        'y', 'mo', 'w', 'd', 'h', 'm'
    ].reduceRight(
        (a, k) => altP(unitLabel(k))(a),
        unitLabel('s')
    );
};
```