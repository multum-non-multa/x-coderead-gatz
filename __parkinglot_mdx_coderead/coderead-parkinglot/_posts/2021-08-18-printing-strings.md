---
layout: post
title: "[3] Strings, Print, Input, Variables"
---


1. Project

2. Printing to the Console in Python

3. String Manipulation

4. Indentation & Spacing Python Code

5. Code Intelligence

6. The Python `input` Function

7. Practice Using `input`

8. Variables

9. f-Strings

10. Title Generator Project

---

## 1.  Project

---

### a.  Goal: Generate a 'Title' with Two Separate String Inputs

<div style="position: relative; padding-bottom: 46.32352941176471%; height: 0;"><iframe src="https://www.loom.com/embed/3bef87aeacfb4254bb1d5949e5a4bb35" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

Result:  Take two inputs from the console and, after combining them, print out the result:

```

Welcome.
This program generates a title for any number of uses --- a restaurant, a band, whatever.

In what town or city were you born?

Chicago

What is your favorite food?

Pizza

You generated the title Pizza Chicago

```

### b.  Requirements

In order to complete this project, we need to know how to:

- handle `strings`

- obtain input from a user

- use variables

- use `f` format operator to embed variables in `strings`

- print variables

---

### 2. Printing to the Console in Python

---

- `print()` function

- think of functions as mini-programs

- a great deal of the code you write will consist of functions

  - don't worry about the details of functions now; you'll be writing thousands of your own soon enough.

- here we use two Python _<u>built-in</u>_ functions:

  - `print()`

  - `input()`

---

### 3. String Manipulation

---

#### a. String is a 'data type'

- `string` is a _<u>data type</u>_ in Python

  - Python has several data types, `strings` one of the fundamental types.  Other fundamental types we will deal with over the next few days are:

    - `integers`

    - `floats`

    - `booleans` (`True` or `False`)

    - `None` (you read that right)

- `strings` can be between either double `"` or single `'` quotes; the rule: _whatever type of quote mark you start with, finish with_

- a _very_ common error with strings is to forget one of the quotation marks

```bash
File "main.py", line 1
    print('Hello, World)
                       ^
SyntaxError: EOL while scanning string literal
```

#### b. Error Messages

But how to interpret the error message above?

Well, you do know:

- occurred in `File "main.py"`
- on line 1 of that file
- that it was a `SyntaxError` involving `EOL`

What is a `SyntaxError`?  What does the `^` tell you?  `EOL`?

The first three things to remember about error messages:

- Get used to them
- Learn to decipher them
- Don't be afraid of them

The error message itself will usually tell you where and what the problem is.  It is one of your first methods for 'debugging' your code.

If you cannot for the life of you figure out what the message means, copy the error and dump it into a search engine.  Typically you find yourself at [StackOverflow](https://stackoverflow.com/).  For example, if you type into Google, "SyntaxError: EOL while scanning string literal", one of your first results will be at [StackOverflow's page where that question was posed](https://stackoverflow.com/questions/3561691/python-syntaxerror-eol-while-scanning-string-literal).

#### c. `string` data type and comments

```python

# this is a comment
# the hashtag tells the Python interpreter to ignore the whole line or ...

print('a string to print')  # ... the right it

# You will use comments a lot ... more on that later

# Note these strings

"Hello"

# vs

'Hello'

# but not

"Hello'

#  also

"Goodbye 'Cruel' World"

# vs

"Goodbye "Cruel" World"

# special characters for strings and printing
# escape
"Goodbye \"Cruel\" World"

# prints: Goodbye "Cruel" World
# or
"Goodbye 'Cruel' World" # combine single and double

# also new line and tab characters

"Hello\nHello"

# if printed will print out
# Hello
# Hello
# The escape n or \n instructs the interpreted to insert a line break

"Hello\tHello"

# will print
# Hello     Hello
# inserting a tab space between the two words

```

#### d. `string` concatenation

What is __'concatenation'__ of `strings`?

Well, data types typically come with a set of 'operators' that can be used on them, e.g.,

```python
# math on two number data types
1 + 2
1 - 2
```

Those `+` and `-` signs are called 'operators,' i.e., they operate on the numbers which, to carry the terminology to technical use, are 'operands,' i.e., expressions on which the 'operators' 'operate.'

Without getting bogged down right now in too much terminology, just remember that `strings` have operators as well.

To understand what some of those might be, first understand the origin of the term `strings`.

Under the hood, `strings` are essentially one or more characters, as long as they are all between quotation marks.

Knowing this the term 'concatenation' makes a bit more sense:

> concatenare, from con- ‘together’

> catenare, from catena ‘chain’

A `string` is a _chaining together_ of characters.  (Perhaps not relevant to you now, but a `string` in Python is actually an `array` of characters stored in memory together.)

As it turns out the `+` operator works on `strings` as well as numbers.  E.g.,

```python
print('Hello' + 'World')
# prints HelloWorld

print('Hello ' + 'World')
# prints Hello World
#             ^
# note the space - because the string 'Hello ' inserted a space at end
```

If you concatenate `strings`, you will often need to insert spacing, e.g.,

```python
print('Hello ' + 'World')
# or
print('Hello' + ' World')
# or
print('Hello' + ' ' + 'World')
```
---

### 4. Indentation & Spacing Python Code

---

```python
# put a space or two or three before the print
1   print('string number 1 to print')
# remove the spaces
2 print('string number 2 to print')
```

```bash
File "main.py", line 1
    print('string number 1 to print')
    ^
IndentationError: unexpected indent
```

Neither line 1 nor line 2 will run.

Why?

Line 1:  Python, unlike many other languages, determines how to interpret code based on, among other things, the __<u>indentation</u>__ of a line of code.

Line 2: Because it is a type of 'compilation' or interpreter error, the interpreter will not even get to line 2.

If you correct line 1, both lines will print.

---

### 5. Code Intelligence

---

To both spot errors _before_ you run your code __and__ obtain help with Python, enable _Code intelligence_ in your repl:

<iframe width="465" height="816" src="https://www.loom.com/embed/9335f63e611a49a1a336e6abce26a810" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

---

When you enable code intelligence notice a few things ...

---

<div style="position: relative; padding-bottom: 45.729537366548044%; height: 0;"><iframe src="https://www.loom.com/embed/786180e2818c4ee38a025ee30f8d9f7a" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

---
- Somewhere in the line of code, a red, underscore squiggly line shows that something is not right.  Moreover, the red bar to the right of the frame emphasizes a problem.

- The other thing you'll notice a type of 'drop-down menu' of code possibilities.  Ignore that for now.  That rather busy snippet of code is for helping you when, later on, you write code and you want to see more information on code you are writing.

If you find this too annoying, simply disable the code intelligence.

---

### 6. The Python `input` Function

---

#### a. Model for a Program: I.P.O.

Programs use a lot of data because, in the end, programs are, for the most part, a matter of trying to produce the correct data with data you currently have or can obtain.

Here we'll sometimes provide manual data, sometimes some 'dummy' data; sometimes from files, sometimes from elsewhere.

Think of a program as a matter of __<u>I</u>__.__<u>P</u>__.__<u>O</u>__., i.e.

__<u>I</u>nput__ of data

__<u>P</u>rocessing__ of data

__<u>O</u>utput__ of new data

The `input` function enables you to get data at the console from a user.

#### b. `input()`

The `input()` function is different from `print()` in a few ways.  You can think of it as almost the reverse of `print`.  That latter outputs to the console; the former takes input from the console:

```python
my_variable_here = input('What is your name? ')
print('You said your name is ' + my_variable_here)
```

The console would look like this:

```bash
> What is your name?
# upon entering a name of 'Fred' such that the line would appear
> What is your name? Fred
# the output would appear
You said your name is Fred
```

A few things to note for now:

- we used a variable for the first time:  `my_variable_here`

- `input()` actually _returned_ a value, i.e., whatever is typed into the console by the user in response to the prompt is then taken in by `input()` and returned from it.  That, value returned, in fact, is what was stored in `my_variable_here`.

The Python documentation says of `input()`:

>The function ... reads a line from input, converts it to a string (stripping a trailing newline), and returns that.


---

### 7. Practice Using `input`

---

When running a program from the command line or, as it is done in a repl, you should notice something about the prompt.  A prompt can take on any kind of look, but for the most part you'll see an angle bracket or 'greater than' sign [`>`] or a dollar sign [`$`], e.g.:

```bash
>
```

or

```bash
$
```

But however the prompt appears, it plays an important role when running programs at the command line or console:  as long as you see the prompt and cursor on the same line, then no program is currently running.  If you had been running a program, it is now finished.  E.g.:

```bash
# before the program runs, at the console the prompt is visible
>
# program is run and
# input function asks for name
# and you enter 'Fred'
What is your name? Fred
# Note: if you had not entered anything, the program would remain running awaiting some input

# the print function produces 'Fred'
Fred
# program has now finished and you are back to the prompt
>
```

- see team project regarding input function

---

### 8. Variables

---

#### a. Variables in General

Program data must be stored in memory if for no other reason than to process it.

However, most such data must be recalled for additional processing.

Hence the need to use names or variable names or, as they are more generally called, _identifiers_ for an object or data value.

For example, above the string literal, 'Hello, World' is used.

That very simple example, however, may be used in code in which some message must be passed to a user every time he logs in.  So, let's say the user is one Fred and the string should be 'Welcome back, Fred.'

Somewhere in the program that produces that welcome screen on login a variable, or identifier, must be used.  Hence, the program might read:

```python
# upon first login
first_name = input('Please enter your first name? ')
# store that variable first_name in a database of users
store_name(first_name)
# where store_name() is some function that does the heavy lifting of stores the name in a database, to be retrieved upon each login.
```

`first_name` is that variable.  It might be used several times.

First, the program will typically verify the accuracy of the name entered; later on the program may produce a special username based on that first name.

The point is: merely using the string literal, like `Fred`, is not sufficient --- the programmer will need to refer to the value later on.  The way to "hold on" to `Fred` is to use a variable name for it.

#### b. Variable-Naming Syntax

```python
# left side: variable name
# middle: assignment operator =
# right side: value to be stored
variable_name = 'the value'
```

#### c. Rules on Variable Names

But not everything will be accepted by the Python interpreter as a variable name.  Moreover, it is a good idea to adhere to certain naming conventions.  First the requirements.

##### (i) Python Variable-Naming Rules

- can use any alphabet character

- can use any integer as long as the variable name does not _begin_ with an integer

- can use underscores

- variable names are case sensitive

```python
jumbo = 'elephant'
Jumbo = 'elephant'
# these two variables are not the same
```

- do not use a Python 'keyword' for a variable name.  A keyword is a reserved in the language for its own purposes, e.g., you should not use `print` because it will confuse the interpreter.

##### (ii) Python Variable-Naming Conventions

You are not required to, but Pythonic code follows some conventions for variable names, e.g.,

- variables are usually lower-case (exceptions will be discussed later)

- use descriptive names, e.g., if a city name you may call the variable `city_name`

- compound variable words, like `city_name`, are joined by what is called 'snake case' --- `this_is_snake_case` (vs. something like camelCase)

More conventions are to follow, but that's sufficient for now.

---

### 9. f-Strings

---

A [formatted string literal](#f-strings) or f-string is a string literal that is prefixed with 'f' or 'F'.

```python
first_name = 'Fred'
# print message using f-string
print(f"Hello, {first_name}")
# that is, begin the string with 'f' or 'F', insert variable in curly braces in string
```

Some useful things about `f-strings`:

- If you've declared your data as variables, you need not concatenate `strings` or `ints` or the other data types and perform type conversion on them.  E.g., no need to do:

```Python
print("McDonalds is " + str(65) + " years old.")
```
 . . . instead you can

```Python
# assuming somewhere you've assigned: yrs = 65
print(f"McDonalds is {yrs} years old.")
```

- Moreover, you can embed expressions in the `{}` brackets.

```Python
print(f"McDonalds is {yrs + 1} years old.")
```

### 10. Title Generator Project

_see repl project ..._

---

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>