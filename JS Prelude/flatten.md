```js
// flatten :: NestedList a -> [a]
const flatten = t => {
	const go = x => 
    	Array.isArray(x) ? (
        	[].concat(...x.map(go))
    	) : x;
	return go(t);
};
```