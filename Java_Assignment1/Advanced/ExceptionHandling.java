//2. Create a program to handle exceptions using try-catch blocks.
package Advanced;

import java.util.Scanner;

public class ExceptionHandling{
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        try {
            System.out.print("Enter the numerator: ");
            int numerator = scanner.nextInt();

            System.out.print("Enter the denominator: ");
            int denominator = scanner.nextInt();

            double result = numerator / denominator;
            System.out.println("Result: " + result);

        } catch (ArithmeticException e) {
            // Handling division by zero
            System.out.println("Error: Division by zero is not allowed.");

        } catch (java.util.InputMismatchException e) {
            // Handling invalid input (if user enters a non-integer value)
            System.out.println("Error: Invalid input. Please enter integers only.");

        } finally {
            scanner.close();
            System.out.println("Execution completed.");
        }
    }
}
