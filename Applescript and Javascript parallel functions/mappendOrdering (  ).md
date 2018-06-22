```applescript
-- Ordering :: ( LT | EQ | GT ) | ( -1 | 0 | 1 )
```

```applescript
-- mappendOrdering (<>) :: Ordering -> Ordering -> Orderingon mappendOrdering(a, b)	if my |EQ| = a then		b	else		a	end ifend mappendOrdering
```

```js
// mappendOrdering (<>) :: Ordering -> Ordering -> Ordering
const mappendOrdering = (a, b) => eqOrdering(EQ, a) ? b : a;
```