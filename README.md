# big-O-notation

## BigO Notation is a method for determining an algorithms efficiency

## it is a way to check how long your code takes to run, and also how it performs when your input size increases

## time complexity - how long it takes to run in terms of computational steps

### this is also known as computational complexity or temporal complexity


## space complexity - amount of memory your code uses

## Big O is 'upper-bound', meaning it measures the worst case scenario, this is because the best case scenario doesnt tell us anything

## When an algorithm takes an array as an input of 'n' size, the formula is O(n) and performs O(1) work on each element

## Why do we need Big O Notation?

### our world of technology grows every day. It is filled wiht complex applications. When building applications, it is important to test its performance when your application is strained with loads of data so we can perform better than our competitors


## Variables that can contribute to your algorithms performance:

### underlying hardware
### Operating System
### CPU
### Processor


## It's important to note when calculating BigO Notation, we oftentimes don't consider these factors

## Key time and space complexities:

### Constant: O(1)
### Linear time: O(n)
### Logarithmic time: O(n log n)
### Quadratic time: O(n^2)
### Exponential time: 2 ^(n)
### Factorial time: O(n!)


## Different types of complexities with examples:

## Constant Time: O(1)
### When there is no dependence on the input size 'n', the formula is O(1)
### Our function does not depend on the size of the array given, no matter if the array has a length of 100 or 1,000
##### see line 1 of index.js


## linear Time: O(n)
### When the running time of an algorithm increases linearly as the length of the input increases
### When a function runs for or iterates over an input size of 'n'
### Our function will log to our console 10 times if the input size is 10, or 100 times if the input size is 100
##### see lines 7 of index.js


## Logarithm Time: O(log n)
### When the size of an inpput decreases with every step of the algorithm
### Example:
#### think of a dictionarity. If we were to look for a word that starts with the letter r, Linear time would be to start from the beginning and go through each word until we find our word. In Logarithm Time, we would find the halfway point of the dictionary, then determine if our word comes before or after our halfway point. If it comes before our halfway point we scratch the second half, find the midway point of the first half, then repeat the process.

### a great example of this in an algorithm is the Binary Search
#### see line 15 of index.js


