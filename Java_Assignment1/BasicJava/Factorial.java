//3. Implement a program to find the factorial of a given number.
package BasicJava;
import java.util.Scanner;

public class Factorial{
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = scanner.nextInt();
        int fact=1;
        for(int n = num; n>1 ; n--){
            fact = fact*n;
        }
        System.out.println("Factorial is " + fact);
        scanner.close();
    }
}