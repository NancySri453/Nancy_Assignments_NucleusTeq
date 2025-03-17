//2. Create a program to check if a number is even or odd.
package BasicJava;

import java.util.InputMismatchException;
import java.util.Scanner;

public class Even_Odd{
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = 0;
        try{
            if(scanner.hasNextInt()){
                num = scanner.nextInt();
            }
            else {
                throw new InputMismatchException("Please enter integer value");
            }
        }catch(InputMismatchException e){
            System.out.println("Invalid input. Please enter an integer value.");
            scanner.next();
            return;
        }finally{
            scanner.close();
        }
        if(num%2==0){
            System.out.println(num + " is even number.");
        }
        else if(num==0){
            System.out.println(num + " is zero and even");
        }
        else{
            System.out.println(num + " is odd number.");
        }
        scanner.close();
    }
}