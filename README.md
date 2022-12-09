# BigO Notation

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


# Different types of complexities with examples:

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
##### see line 15 of index.js


## Quadratic Time: O(n^2)
### Directly related to the squared size of the input data collection
### You will encounter such time complexity when making several iterations over your input
### In our example, we have two nested loops. If the array has 'n' items, the outer loop will iterate 'n' times, and the inner loop will iterate 'n' times for each iteration of the outer loop.
### If the size of the input is 10, then the loop runs 10x10 times
##### see line 36 of index.js


## Exponential Time: O(2^n)
### With each addition to the input (n), the growth rate doubles, and the algorithm iterates across all subsets of the input elements
### When an input is increased by 1, the number of operations executed is doubled.
### In our function, we use recursion to calculate the fibonacci sequence.
##### see line 46 of index.js


## Factorial Time: O(n!)
## Note: AVOID THIS TYPE OF ALGORITHM
### A factorial is the product of every number up to that number
#### For exampke: 6! = 1 x 2 x 3 x 4 x 5 x 6 = 720
### Things can quickly get out of hand with this algorithm
### Real life example: The traveling salesman
#### Given a number of cities, and the distance between each city, the goal would be to find the shortest possible route that vists each city once and then returns to the origin. Let's say we have 3 cities, that means we would have to calculate the distance between each combination of the cities, which would be 3! (1 x 2 x 3 = 6).
### In our function, every number in our factorial will run its own function until it reaches 0, with each recursive function adding its response to our original number. In other words, if we pass in 3, it is then multiplied by 2, then by 1, until it hits 0, giving us the answer of 6 aka 3!
##### see lines 56 of index.js