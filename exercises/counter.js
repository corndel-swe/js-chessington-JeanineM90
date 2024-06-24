// Make your Counter class here

// Reviews with Tim:
class Counter {
    #count // E3 
    constructor() {
        this.#count = 0 // this object
    }

    /* exercise 1 (changed):
    class Counter {
        constructor(count) {
            this.#count = 0
        }*/

    // exercise 2 

    increment() {
        this.#count++ //++ adds one
    }

    reset() {
        this.#count = 0 // set to 0
    }

    getCount() {
        this.#count = this.#count // return current count. can also use return this.count
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

/* exercise 3:
private properties: remember from discussion this morning that this is so the values of a property can't be changed 

- Refactor the `count` property to be private, so that it's hidden from
      outside the class.

Tech docs: use # on property name:
"the property cannot be accessed or modified directly from outside the class."

--

# added to Counter class, got error:
Private field '#count' must be declared in an enclosing class
It needs adding to all mentions of Counter 
However, when adding to the class, see syntax error "Private identifiers cannot be used as parameters"
Otherwise, still see error as above... 

--

Reviews with Tim:
Had to change E1 - original kept for comparison 
For E3, had to add #count under class (before constructor)
*/