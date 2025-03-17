//3. Create a program to convert a temperature from Celsius to Fahrenheit and vice versa.

package Data_Type_and_Operators;
import java.util.Scanner;
public class Convert_Temp{
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        double celsius, fahrenheit;
        System.out.println("Select your conversion(1-2) : ");
        System.out.println("1. Celsius -> Fahrenheit");
        System.out.println("2. Fahrenheit -> Celsius");
        int choice = scanner.nextInt();

        switch(choice){
            case 1:
                System.out.println("Enter temperature in Celsius : ");
                celsius = scanner.nextDouble();
                fahrenheit = (celsius * 9/5) + 32;
                System.out.println("Temperature in Fahrenheit : " + fahrenheit);
                break;
            case 2:
                System.out.println("Enter temperature in Fahrenheit : ");
                fahrenheit = scanner.nextDouble();
                celsius = (fahrenheit - 32) * 5/9;
                System.out.println("Temperature in Celsius : " + celsius);
                break;
            default:
                System.out.println("Invalid choice, please try again!");
        }
        scanner.close();
    } 

}