package Advanced;
/*
 * * 1. Explain the concept of interfaces and abstract classes with examples.
 * 
 * Interface 
 * 
 * An interface is a blueprint for a class.
 * It contains constants, default methods, nested types and static methods.
 * It suports multiple inheritance.
 * It cannot have constructors.
 * It defines what methods a class must implement but does not provide implementations.
 * 
 * Example : 
 */
interface Animal {
    void makeSound();  // Abstract method (no implementation)
}

class Dog implements Animal {
    public void makeSound() {
        System.out.println("Dog barks!");
    }
}

public class InterfaceExample {
    public static void main(String[] args) {
        Dog myDog = new Dog();
        myDog.makeSound();
    }
}

