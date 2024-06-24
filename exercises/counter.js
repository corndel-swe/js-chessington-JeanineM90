// Make your Counter class here

class Counter {
    constructor(count) {
        this.count = 0
    }

    // exercise 2

    increment() {
        this.count++ //++ adds one
    }

    reset() {
        this.count = 0 // set to 0
    }

    getCount() {
        this.count = this.count // return current count 
    }

}

// Replace `null` with an _instance_ of your counter
const counterInstance = new Counter()

// Please don't change the lines below!
export { Counter, counterInstance }

/* exercise 1
- create a new class called `Counter`: Make sure your class name has a capital `C`
- Give it a constructor that initialises `count` to `0`
- Assign the variable `counterInstance` to an instance of your counter
      class.

      Tech Docs:
      To create an instance from this blueprint (class), we use the "new" keyword 

The count didn't work initially as I didn't use "this."       
*/

/* exercise 2:
We'll want to be able to increment the counter, reset our counter, and get the
current count:
-`increment()`, which adds one to `count` 
-`reset()`, which sets `count` to `0`
-`getCount()`, which returns the current `count`

Instance Methods in Tech Docs 
(functions)

forgot this. again- stated that count was undefinded - remember this! 
*/