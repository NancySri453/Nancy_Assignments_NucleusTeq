package Advanced;
/*
 * * 1. Explain the concept of interfaces and abstract classes with examples.
 * 
 *- An abstract class connot be instantiated and serves as a base class for other classes.
 *- It contains both abstract and concrete methods(with implementation)
 *- It can have constructors and can be extended multiple times.
 *- An abstract class can have default implementation for some methods.
 *- It supports single inheritance 
 *- It is used as a base class when multiple classes share common behavior.
 * 
 * Example : 
 */
abstract class Animal {
    abstract void makeSound();  // Abstract method

    void eat() {  // Concrete method (has implementation)
        System.out.println("This animal eats food.");
    }
}

class Cat extends Animal {
    public void makeSound() {
        System.out.println("Cat meows!");
    }
}

public class AbstractClassExample {
    public static void main(String[] args) {
        Cat myCat = new Cat();
        myCat.makeSound();  // Calls overridden method
        myCat.eat();  // Calls inherited concrete method
    }
}
