---
layout: post
title: "[5] Numbers and Booleans"
---

---

### Note

<h4 style="color:firebrick;font-weight:bold">When you see a code snippet below, dump it in a repl and play around with it.  It will help you build an understanding of, and memory for, Python.</h4>

---

## Number Types in Python

Python has two types of real numbers:  `integers` and `floats`.  (See `Complex Numbers` below.)

`Integers` are simply the whole numbers, whether `signed` (i.e., positive and negative).  `Floats` are simply those with a level of decimal precision, e.g., `3.14159`.

## Basic Arithmetic Operations

Python has 7 arithmetic operators:

___Addition___  `+`

```python
>>> 1 + 2
3
```

___Subtraction___ `-`

```python
>>> 1 - 2
-1
```

___Multiplication___ `*`

```python
>>> 1 * 2
2
```

___Division___  `/`

> returns a `float`

```python
>>> 1 / 2
0.5
```



___Floor Division___ `//`

> returns a `int`

```python
>> 1 // 2
0
```


___Exponentation___ `**`

```python
>>> 3**2
9
```

___Modulus___ `%` (where `%` is the __modulo__ operator)

```python
>>> 4 % 3
1
```

> the modulo operation returns the remainder ... of a division, after one number is divided by another ...  [Wikipedia](https://en.wikipedia.org/wiki/Modulo_operation)

---

Try it out some of the math operators here:

<iframe src="https://trinket.io/embed/python3/1d27960c6b?runOption=console&runMode=console" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

---

Above or in a `main.py` file on Replit, see the result of the modulo operator.  Simply code the following (without worrying about exactly what the code means):

```python
for i in range(0,37):
    print(f"{i}%12 =", i%12)
```

If you run this, you'll see:

```python

0%12 = 0
1%12 = 1
2%12 = 2
3%12 = 3
4%12 = 4
5%12 = 5
6%12 = 6
7%12 = 7
8%12 = 8
9%12 = 9
10%12 = 10
11%12 = 11
12%12 = 0
13%12 = 1
14%12 = 2
15%12 = 3
16%12 = 4
17%12 = 5
18%12 = 6
19%12 = 7
20%12 = 8
21%12 = 9
22%12 = 10
23%12 = 11
24%12 = 0
25%12 = 1
26%12 = 2
27%12 = 3
28%12 = 4
29%12 = 5
30%12 = 6
31%12 = 7
32%12 = 8
33%12 = 9
34%12 = 10
35%12 = 11
36%12 = 0
```

Notice that the math acts much like a 'clock' --- when the numerator becomes something wholly divisible by 12, it 'resets' the value and starts all over.

This operator is quite useful, even beyond mathematical operations.  One example is its use in finding even numbers

---

## Order of Operation

The arithmetic operators in Python (and other programming languages) are interpreted according to an _order of operation_, an order that follows that of algebra.

The _'P.E.M.D.A.S.'_ rule holds:

- math operations occur from left to right

- __P__ arentheses `()`

- __E__ xponents `**`

- __M__ ultiplication & __D__ ivision `*` and `/` (or `//`)

- __A__ ddition & __S__ ubstraction `+` and `-`

For example:

```python
>>> 3 + 4 * 2 - 8
3
```

That is, the product of 4 and 2 (`4 * 2 = 8`) is first calculated before being added to 3 (`3 + 8 = 11`), and lastly 8 is subtracted from that (`11 - 8 = 3`).

If you wanted something different, use parentheses, e.g.:

```python
>>> (3 + 4) * 2 - 8
6
```



Operator precedence goes well beyond simple mathmatical operators.  See [orders of precedence](https://docs.python.org/3/reference/expressions.html#operator-precedence).

But simply use `()` parentheses to establish the order you desire.

---

## Booleans

Only two values in this type: `True` and `False`.  These will be used extensively when we do conditional statements and logical operators.

```python
>>> type(True)
<class 'bool'>
>>> type(False)
<class 'bool'>
```

Booleans are closely related to numbers in Python as we'll see later.

---

## Aside:  Complex Numbers

You may have dealt with complex numbers in math, i.e., numbers with two parts: a real part and an imaginary part.

To create a complex number in Python, you simply write the real part, then a plus sign, then the imaginary part with the letter `j` at the end:

```python
cplx_number = 1 + 2j
```

__Note__:  In math, the imaginary part is typically written with an `i`.  Python uses the `j`.

---

___See also___ [Data Type Conversions, More Built-in Functions, Math](https://multum-non-multa.github.io/code/2021/09/06/conversion-math-module-etc.html)
