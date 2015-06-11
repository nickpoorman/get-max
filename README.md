# get-max

Get the maximum of two numbers that works the way you would expect.

It takes two anything and returns the greater number of the two. Thats it.

## example

```
var getMax = require('get-max');

getMax(0, 1); // 0
getMax('a', 1); // 1
getMax(1, null); // 1
getMax(1, undefined); // 1
getMax(1, Object(0)); // 1
getMax(1); // 1

getMax('1', '2'); // undefined
getMax('a', null); // undefined
getMax(); // undefined
```

## why?

Getting the maximum of a number and garbage should be simple. It's a number that should be returned.

This example would normally require you to initialize `num=10` if you were to use `Math.max`.

```
var num;

for (var i = 0; i < 10; i++) {
  num = getMax(num, i);
};

// num = 10
```

*vs.*

```
var num;

for (var i = 0; i < 10; i++) {
  num = Math.max(num, i);
};

// num = NaN   // whoops!
```
