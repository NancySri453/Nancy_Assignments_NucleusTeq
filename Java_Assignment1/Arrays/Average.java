//1. Write a program to find the average of elements in an array.

package Arrays;
public class Average{
    public static void main(String[] arg){
        int[] arr = {10, 20, 30, 40, 50};
        int sum = 0;
        for(int i=0; i<arr.length; i++){
            sum += arr[i];
        }
        double average = (double)sum / arr.length;
        System.out.println("Average of elements in array: " + average);
    }
}