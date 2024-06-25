export class Maths {
    /*
        static PI = 3.14
    
        static max(a, b) {
            return a > b
        } // this passes all bar from one: should return the greater of two numbers
    */
    static PI = 3.14

    static max(a, b) {
        //Math.max(a, b)
        /*
                if (a > b) {
                    return a
                } else {
                    return b
                }
        */
        return a > b ? a : b // using boolean with Wiesje- this is the same as if/else as above 
    }
}

/* Exercise 1: Static methods and properties: 
- Add a static property `PI` to `Maths`. The value of `Maths.PI` should be
      `3.14`.
- Add the static method `Maths.max(a, b)`, which returns the largest of `a`
      and `b`.

Static Properties: properties that belong to the class itself, rather that it's instances 

Tech Docs: use "static" within class to assign (before constructors)
Static methods: defining actions which affect the whole class
Example:

 static resetHost() {
    SmartCamera.host = 1
  }

 -- 
 
largestNumber = Math.max(number1, number2);

--

  the max method
      1) should exist
      2) should be a function
      3) should return the greater of two numbers
 
*/

