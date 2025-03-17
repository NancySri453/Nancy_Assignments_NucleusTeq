package OOP;
/*2. Explain the concept of encapsulation with a suitable example.

* Encapsulation is one of the four fundamental principles of Object-Oriented Programming (OOP). 
* It refers to the practice of bundling data (variables) and methods (functions) that operate on the data into a single unit (class) while restricting direct access to some details of the object.
*
* Key Points : 
- It protects data from Unauthorized access
- Increases Code Maintainability
- We can restrict invalid data entry through controlled methods.
- Enhances Modularity
*/
class Person{
    private String name;
    private int age;

    public void setName(String name){
        this.name = name;
    }

    public String getName(){
        return name;
    }

    public void setAge(int age){
        if(age>0){
            this.age = age;
        }else{
            System.out.println("Please enter positive number");
        }
    }

    public int getAge(){
        return age;
    }
}
public class Encapsulation{
    public static void main(String[] args){
        Person p = new Person();

    p.setName("Nancy");
    p.setAge(22);

    System.out.println("Name: "+p.getName());
    System.out.println("Age : "+p.getAge());
    }
}