//Write a program to check if a given number is prime using an if-else statement.
package ControlFlow;

import java.util.Scanner;

public class PrimeNumber {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter number: ");
        int num = scanner.nextInt();

        if (num <= 1) {
            System.out.println("Not a prime number");
        } else {
            boolean isPrime = true; //Default value
            for (int i = 2; i <= Math.sqrt(num); i++) { // Loop up to sqrt(num) for efficiency
                if (num % i == 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                System.out.println(num + " is prime number.");
            } else {
                System.out.println(num + " is not a prime number.");
            }
        }
        scanner.close();
    }
}
