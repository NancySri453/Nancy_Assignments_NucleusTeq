package Data_Type_and_Operators;
/*
 * * Explain the difference between primitive and reference data types with example**
 * 
 * Primitive Data Types 
 * 
 * - These are predefined Data types in java.
 * - They store simple values directly in stack memory.
 * - They are part of java language itself and not created as objects.
 * - They have fixed memory size
 * - They have default values and cannot be null.
 * - Primitive data types can be typecasted
 * - Java provides 8 built-in primitive data types : 
 *   byte, short, int, long, float, double, char, boolean
 * 
 * Reference Data Types
 * 
 * - It stores a reference(memory address) to an object rather than actual value.
 * - They refer to objects created in heap memory.
 * - They include classes, interfaces and user defined objects.
 * - Unlike primitive data types,they can have methods and fields associated with them.
 * - They can have null value if not initialized.
 * 
 * Types of Reference Data Types:
 * 1. Class Types : Instances of class(object)
 * 2. Array Types : Arrays of primitive or object types
 * 3. Interface Types : Implementations of interfaces.
 * 4. Enum Types : Special classes representing fixed sets of constants.
 * 
 * * Differences 
 * - Primitive data types are stored directly in memory and have fixed size.
 * - Reference Data types store a reference of object in heap memory
 * 
 * - Primitive data types have fixed size in memory
 * - Reference Data types size varies depending on object size
 * 
 * - Primitive data types have default values
 * - Reference Data types can be null
 * 
 * - Primitive data types cannot have methods associated
 * - Reference Data types have.
 * 
 * - Primitive data types are faster , since we get direct access.
 * - Reference Data types are comparatively slower, due to heap access.
 * 
 * - Primitive data types are immutable
 * - Reference Data types are mutable.
 */

public class Theory1 {
    public static void main(String[] args){
        // Primitive Data Type Example 
        int num = 10;  // Stores the actual value 10 in stack memory
        double price = 99.99;
        boolean isJavaFun = true; 

        //Reference Data Type Example
        String name = "John"; 
        int[] numbers = {1, 2, 3, 4};
    }
}