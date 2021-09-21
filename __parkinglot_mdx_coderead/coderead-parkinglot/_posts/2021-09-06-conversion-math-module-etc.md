---
layout: post
title: "[7] Data Type Conversions, More Built-in Functions, Math +, and Another Project"
---

- Project: Diners' Calculator

- Data Types Revisited

- Type Conversion

- `f-strings` Redux

- Math Methods & Functions

  - Built-ins

  - Intro to Custom (i.e., __Your Own__) Functions

  - Math Module & Imports

- Beware Floats

- Shorthand Operators

---

### Note

<h4 style="color:firebrick;font-weight:bold">When you see a code snippet below, dump it in a repl and play around with it.  It will help you build an understanding of, and memory for, Python.</h4>

---

## Diner's Calculator Project

---

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/3054c971777345a0a0181e3fd1ce6a51" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

---

## Data Types Revisited

Let's go a bit further with some of the things mentioned in an earlier post - _see_ [Variable Types in Python](http://localhost:4000/code/2021/08/31/variables-string-methods-functions.html).

As mentioned, we may or may not be able to use a Python built-in function with the data.  For example, you can't use

- the `len()` function on a number, but only a sequence like a `string`

- the `[ ]` subscripting operators on a number, but, once again, only a sequence like a `string`

Sometimes, however you are able to convert from one type to another.

---

## Type Conversion

Converting from one type to another is often used when the input data is a `string` but needs to be processed as an `integer` or `float`.

E.g.,

```python
age = input("Enter your age in years")

# convert to an integer
int_age = int(age)
# or you could just do
age = int(age) # changing the existing variable

weight = input("Enter your weight in kilos ")

# convert to a float
float_weight = float(weight)
```

But it occurs elsewhere.  For example, you may want convert a `float` to an `integer`:

```python
>>> ratio_value = 38 / 6
>>> ratio_value
6.333333333333333
>>> ratio_value_estimate = int(ratio_value)
>>> ratio_value_estimate
6
>>>
```

---

## `f-strings` Redux

Refer back to [the first mention of f-strings](https://multum-non-multa.github.io/code/2021/08/18/printing-strings.html).

Also, you'll remember that sometimes you wanted to convert an `integer` to a `string` in order to accomplish concatenation:

```python
print("The estimated ratio value is " + str(ratio_value_estimate))
```

With `f-strings` you need not convert types:

```python
print(f"The estimated ratio value is {ratio_value_estimate}")
```

And you can combine types in same `f-string` and even embed expressions:

```python
message = f"The estimated ratio value is {ratio_value_estimate}; the more precise value is {ratio_value}, representing an error of approximately {ratio_value - ratio_value_estimate}"
```

If printed out it will render:

```bash
'The estimated ratio value is 6; the more precise value is 6.333333333333333, representing an error of approximately 0.33333333333333304'
```

---

Try `f-strings` below:

<iframe src="https://trinket.io/embed/python3/51cabfcbe9" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

---

## Math Methods & Functions

### Built-ins

We've seen a number of __built-in__ methods or functions in Python, e.g.,

- `len()` to determine the length of a `string`

- `int()` converts a data type into an `integer`

- `str()` converts a data type into a `string`

- `print()`

- `input()`

In fact, Python has almost 70 [built-in functions](https://docs.python.org/3/library/functions.html#built-in-functions).

We won't be using all of them and, for now, we'll only mention a few more.

#### `round()`

This [function](https://docs.python.org/3/library/functions.html#round) will to whatever decimal value you desire.  Here we ask for 3 decimal values:

```python
>>> round(ratio_value, 3)
6.333
```

In fact, without the second argument (see the `3` in the first use above), it will round down or up using the usual 0.5 rule:

```python
>>> round(6.99999)
7
>>> round(6.4999)
6
>>> round(6.5)
6
>>> round(6.50001)
7
```

#### `max()` and `min()`

[These](https://docs.python.org/3/library/functions.html#max) will take in between the parenthesis any number of `integers` or `floats` and return the maximum or minimum value:

```python
>>> max(100, 0)
100
>>> max(100, 101)
101
>>> max(100, 101, 333, 54)
333
>>> min(100, 101, 333, 54)
54
>>> min(100, 101, 333, 54.999)
54.999
```

#### `sum()`

Whereas `min()` and `max()` can take a number of comma-separated values in the parentheses, `sum()` must take in a list of items.  We'll be going through `lists` and _iterables_ quite a bit later, but for now, just know that you can get the sum of values using this function merely by providing a comma-separated list of the values within square brackets `[ ]`:

```python
>>> sum([1,2,3])
6
```

### Intro to Custom (i.e., __Your Own__) Functions

You'll be spending a lot of time crafting your own functions, and we'll dig deeper as time goes on.  However, a quick anatomy of a function will help understand something of what's going on under the hood with these built-in functions and the math module below.

A function is essentially a _black box_ --- you need not know how it operates in order to use it.  You simply need to know two things:  what type of thing to put in and what type of thing it will return to you.

![black box](/code/assets/images/fx-machine.png)

That is true, of course, if the only thing you're doing is using it.  If you're the one ___writing___ the function, you're the one who puts the insides in it.

In Python, a function is defined by the keyword `def`, followed by the name of the function, a set of parentheses, and a colon `:` .

The code implementing the function appears on __indented__ lines below that function __signature__.

Put this in a repl and run it:

```python

def speak():
  print("I am talking") # note the indentation

# that ends the function definition
# but for it to work, you have to call it:

speak()

```

The resulting output is just as you'd expect:

```bash
I am talking
```

But typically you want a function to 'take in' values (i.e., in the parentheses) that will be 'processed' somehow and then return a value:

```python
def add(a, b):
  return a + b  # 'return' is a python keyword
```

Here we've defined a function, but we haven't used it.

How do you do that?  What are `a` and `b`?

Best by way of example:

```python
>>> add3_4 = add(3,4)
>>> add3_4
7
```

> __Function Terminology__

> The a and b are called __parameters__.  But when you call the function and put in actual values, those are called __arguments__.  So here both 3 and 4 are the arguments.

__To repeat something said earlier, but to emphasize here__:  notice that the `add()` function defined above would only work with certain types.  You could use two `ints` or a `float` and an `int`.  You could even use two `strings`.  However, it wouldn't work with two `booleans` or a `string` and a `float`.

Later on we'll talk about how you handle or anticipate errors that might be raised when someone uses your function with inappropriate argument types.

### Math Module & Imports

We've used basic arithmetic operators like `+` and `*`.  But Python provides a great deal more for mathematical operations.  The [Python math module](https://docs.python.org/3/library/math.html#module-math) provides some sophisticated and not so sophisticated methods / functions.

The problem is that these are not built-in.  They are ___in___ Python, but you need to `import` them in order to use them.

Let's take the example of the `pow()` [method](https://docs.python.org/3/library/math.html#math.pow) in the math module.  It takes two arguments in the form of numbers.  The docs explain:

```

math.pow(x, y):  Returns x raised to the power y.

```

Example:

```python
# must import the math module
import math
# then can use by way of the `dot` notation
# mentioned in an earlier post
>>> math.pow(2,3)
8.0
```

Here `2` is cubed and the method returns `8.0`.  (Note that it returns a `float` value.)

The module contains many more, but its worth considering for now  the [random module](https://docs.python.org/3/library/random.html#module-random).

### Random

One of its methods, `randint()`, generates a random integer.  You supply two arguments to determine the range:

```python
>>> import random
>>> random.randint(1, 100)
12
>>> random.randint(1, 100)
97
>>> random.randint(1, 100)
62
>>>
```

Whereas `random.random()` returns __the next random floating point number in the range [0.0, 1.0).__

```python
>>> random.random()
0.08740664919851404
>>> random.random()
0.021291023690050426
>>> random.random()
0.68783739905084
>>>
```

---

## Inexactitude of Floating Point Numbers and Why You Round

Note what happens here:

```python
>>> 100 * 1.12
112.00000000000001
>>>

```

See this [article](https://docs.python.org/3/tutorial/floatingpoint.html) on this rather common problem.

So it's a good idea to choose a rounding so as not to factor in that inexactitude.

It's not an issue now; still we'll return to it when we do comparison operators and conditional statements.

## Shorthand Arithmetic Operations

Because arithmetic operators are so common, a shorthand has been built in to many programming languages.

Thus, in Python, for example, when incrementing a score:


```python
# starting score
score = 0
# add a point
score = score + 1
# or use shorthand operator
score += 1
```

Or halving:

```python
>>> volume = 85.0
>>> volume /= 2
>>> volume
42.5
>>> volume /= 2
>>> volume
21.25
>>>
```

Or exponential growth:

```python
>>> gain = 2
>>> gain **= 2
>>> gain
4
>>> gain **= 2
>>> gain
16
```
