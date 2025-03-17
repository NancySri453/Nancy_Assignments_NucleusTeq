//1. Write a program to calculate the area of a circle, rectangle, or triangle based on user input.
package BasicJava;
import java.util.Scanner; 

public class AreaCalculator{
    //Area of circle
    static double area_circle(double radius){
        return Math.PI * radius * radius;
    }
    //Area of rectangle
    static double area_rectangle(double length,double width){
        return length * width;
    }
    //Area of triangle
    static double area_triangle(double base,double height){
        return 0.5 * base * height;
    }
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

        System.out.println("Choose shape(1-3) : ");
        System.out.println("1. Circle");
        System.out.println("2. Rectangle");
        System.out.println("3. Triangle");
        
        int shape = scanner.nextInt();

        switch(shape){
            case 1:
                System.out.println("Enter radius of circle : ");
                double radius = scanner.nextDouble();
                if (radius < 0){
                    System.out.println("Radius cannot be negative,please try again!");
                }else {
                    System.out.println("Area of circle : "+area_circle(radius));
                }
                break;
            case 2: 
                System.out.println("Enter length of rectangle : ");
                double length = scanner.nextDouble();
                System.out.println("Enter length of rectangle : ");
                double width = scanner.nextDouble();
                if (length < 0 || width < 0){
                    System.out.println("Length and width cannot be negative, please try again!");
                } else {
                    System.out.println("Area of rectangle : "+area_rectangle(length, width));
                }
                break;
            case 3:
                System.out.println("Enter base of triangle : ");
                double base = scanner.nextDouble();
                System.out.println("Enter height of triangle : ");
                double height = scanner.nextDouble();
                if(base < 0 || height < 0){
                    System.out.println("Base and height cannot be negative, please try again!");
                } else {
                    System.out.println("Area of triangle : "+area_triangle(base, height));
                }
                break;
            default:
                System.out.println("Invalid choice, please try again!");
            }
        scanner.close();
    }
}