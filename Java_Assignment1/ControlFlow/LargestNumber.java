//Implement a program to find the largest number among three given numbers using a conditional statement.
package ControlFlow;
import java.util.Scanner;

public class LargestNumber {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter first number : ");
        int x = scanner.nextInt();
        System.out.println("Enter second number : ");
        int y = scanner.nextInt();
        System.out.println("Enter third number : ");
        int z = scanner.nextInt();

        if(x>y){
            if(x>z){
                System.out.println(x+" is the largest number.");
            }else{
                System.out.println(z+" is the largest number.");
            }
        }else{
            if(y>z){
                System.out.println(y+" is the largest number.");
            }else{
                System.out.println(z+" is the largest number.");
            }
        }
        scanner.close();
}}