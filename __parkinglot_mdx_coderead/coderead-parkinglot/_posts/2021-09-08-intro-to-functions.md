---
layout: post
title: "[8] Introduction to Functions"
---
<div style="border: 1px solid black;background: beige; padding-left: 150px; padding-bottom: 50px">
<h2 style="color:firebrick">

    Under Construction

</h2>
</div>

## An Example

Let's say your program, on several occasions, must take two values from repeated user input and produce a ratio to be used in the rest of the program.

If we assume two `string` inputs, `savings_account_balance` and `debt_owed`, you need, at the very least, convert them into `floats`, calculate the ratio, and return a properly rounded value.

A function would be the very thing you'd want.

You write the function just once.  Then, whenever you need to use it, you just __call__ the function, dump the two values in, have the function perform the actions mentioned in the paragraph above, and return the value desired:

```python

# only need to do this once
def calc_ratio(savings, debt):
    savings = float(savings)
    debt = float(debt)
    return round(savings/debt, 2)


savings_account_balance = input("Enter savings balance ")
debt_owed = input("Enter overall debt ")

# now that the function has been defined,
# every time you need to use it, you `call` it:
ratio = calc_ratio(savings_account_balance, debt_owed)
# do something with ratio --- a variable that now holds the return value
# ...

```

## Anatomy of a Function

![Anatomy](/code/assets/images/functions/anatomy.png)

---

- `def` keyword

- name

- parentheses `()`

- `parameters` (later `arguments`)

- colon `:`

- indented code; here you code whatever you want done

- `return` value

    - this is optional, but unless you use it, nothing is returned

    - an example of a function without `return` --- one that just contains a `print()` statement:

    ```python

    def just_print_add(a,b):
        print(a + b)
    # no return statement
    ```

---

<iframe src="https://trinket.io/embed/python/d801d5e390" width="100%" height="500" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

## Need Them?

Just all the time.

##  Mini-Programs

```
data in == the arguments

process == what happens in the function block

data out == return value
```

