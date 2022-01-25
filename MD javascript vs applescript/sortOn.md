```javascript
// sortOn :: Ord b => (a -> b) -> [a] -> [a]
const sortOn = f =>
    // Equivalent to sortBy(comparing(f)), but with f(x)
    // evaluated only once for each x in xs.
    // ('Schwartzian' decorate-sort-undecorate).
    xs => xs.map(
        x => Tuple(f(x))(x)
    )
    .sort(uncurry(comparing(x => x[0])))
    .map(x => x[1]);
```


```applescript
-- sortOn :: Ord b => (a -> b) -> [a] -> [a]-- sortOn :: Ord b => [((a -> b), Bool)]  -> [a] -> [a]on sortOn(f, xs)	-- Sort a list by comparing the results of a key function applied to each	-- element. sortOn f is equivalent to sortBy(comparing(f), xs), but has the	-- performance advantage of only evaluating f once for each element in	-- the input list. This is called the decorate-sort-undecorate paradigm,	-- or Schwartzian transform.	-- Elements are arranged from from lowest to highest.		-- In this Applescript implementation, f can optionally be [(a -> b)]	-- or [((a -> b), Bool)]) to specify a compound sort order		--    xs:  List of items to be sorted. 	--          (The items can be records, lists, or simple values).	--	--    f:    A single (a -> b) function (Applescript handler),	--          or a list of such functions.	--          if the argument is a list, any function can 	--          optionally be followed by a bool. 	--          (False -> descending sort)	--	--          (Subgrouping in the list is optional and ignored)	--          Each function (Item -> Value) in the list should 	--          take an item (of the type contained by xs) 	--          as its input and return a simple orderable value 	--          (Number, String, or Date).	--	--          The sequence of key functions and optional 	--          direction bools defines primary to N-ary sort keys.	script keyBool		on |λ|(x, a)			if boolean is class of x then				{asc:x, fbs:fbs of a}			else				{asc:true, fbs:({Tuple(x, asc of a)} & fbs of a)}			end if		end |λ|	end script	set {fs, bs} to {|1|, |2|} of unzip(fbs of foldr(keyBool, ¬		{asc:true, fbs:{}}, flatten({f})))		set intKeys to length of fs	set ca to current application	script dec		property gs : map(my mReturn, fs)		on |λ|(x)			set nsDct to (ca's NSMutableDictionary's ¬				dictionaryWithDictionary:{val:x})			repeat with i from 1 to intKeys				(nsDct's setValue:((item i of gs)'s |λ|(x)) ¬					forKey:(character id (96 + i)))			end repeat			nsDct as record		end |λ|	end script		script descrip		on |λ|(bool, i)			ca's NSSortDescriptor's ¬				sortDescriptorWithKey:(character id (96 + i)) ¬					ascending:bool		end |λ|	end script		script undec		on |λ|(x)			val of x		end |λ|	end script		map(undec, ((ca's NSArray's arrayWithArray:map(dec, xs))'s ¬		sortedArrayUsingDescriptors:map(descrip, bs)) as list)end sortOn
```