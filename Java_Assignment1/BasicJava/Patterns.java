// 5. Use loops to print patterns like a triangle or square.
package BasicJava;
import java.util.Scanner;

public class Patterns {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Choose a pattern(1-2): \n1. Triangle \n2. Square");
        int choice = scanner.nextInt();

        switch(choice){
            case 1:
                System.out.println("Enter number of rows: ");
                int rows = scanner.nextInt();
                for(int i=0;i<rows;i++){
                    for(int j=0;j<i;j++){
                        System.out.print("* ");
                    }
                    System.out.println();
                }
                break;
            case 2 : 
                System.out.println("Enter number of rows: ");
                int size = scanner.nextInt();
                for(int i=0;i<size;i++){
                    for(int j=0;j<size;j++){
                        System.out.print("* ");
                    }
                    System.out.println();
                }
                break;
            default:
                System.out.println("Please select number 1 or 2.");
        }
    scanner.close();
    }
}