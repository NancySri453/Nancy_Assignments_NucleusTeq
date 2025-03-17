//Create a program to calculate the sum of even numbers from 1 to 10 using a while loop

package ControlFlow;

public class SumEvenNumbers {
    public static void main(String[] args) {
        int i = 1,sum=0;
        while(i<=10){
            if(i%2==0){
                sum+=i;
            }
            i++;
        }
        System.out.println("Sum is : "+ sum);
    }
}