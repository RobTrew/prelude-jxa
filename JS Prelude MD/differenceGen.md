```js
// differenceGen :: Gen [a] -> Gen [a] -> Gen [a]
const differenceGen = ga => {
    return function*(gb) {
        // All values of generator stream ga except any
        // already seen in generator stream gb.
        const
            stream = zipGen(ga)(gb),
            sb = new Set([]);
        let xy = take(1)(stream);
        while (0 < xy.length) {
            const [x, y] = Array.from(xy[0]);
            sb.add(y);
            if (!sb.has(x)) yield x;
            xy = take(1)(stream);
        }
    };
};
```