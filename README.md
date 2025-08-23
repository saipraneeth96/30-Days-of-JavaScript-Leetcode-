# 30-Days-of-JavaScript-Leetcode-
This is a repository that has solutions for the 30 day javascript challenge by leetcode along with concepts involved in solving the solution.


Day 1:

--You call createHelloWorld() one time.
--Its only job is to return a brand new, anonymous function.
--This anonymous function returns "Hello World"

Day 2:

--CLOSURE - A closure is created when a function remembers the variables from its parent's scope, even after the parent               function has finished executing.
--The parent function is createCounter(n). It creates a variable called currentCount.
--It returns a new, inner function.
--This inner function closes over the currentCount variable. It maintains a private, persistent reference to it.
--The output depends on the number of times createCounter() is called.

DAY 3:

--The expect Function
You start by calling expect() with a value you want to test. For example, expect(5).
This function doesn't do the test itself. Instead, it gives you back an object with two special tools (functions) inside it: toBe and notToBe.

--The toBe Tool: To check if two values are exactly the same.
--The notToBe Tool: To check if two values are different.
