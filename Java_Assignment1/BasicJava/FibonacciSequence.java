//4. Write a program to print the Fibonacci sequence up to a specified number.
package BasicJava;
import java.util.Scanner;

public class FibonacciSequence {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter limit for fibonacci sequence : ");
        int limit = scanner.nextInt();
        int first = 0, second = 1, next;
        while (first <= limit) {
            System.out.print(first + " ");
            next = first + second;
            first = second;
            second = next;
        }
        scanner.close();
    }
}