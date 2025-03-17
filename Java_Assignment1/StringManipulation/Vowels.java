//2. Implement a function to count the number of vowels in a string.
package StringManipulation;
import java.util.Scanner;

public class Vowels{
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the String : ");
        String str = scanner.nextLine();
        int count = CountVowels(str);
        System.out.println("Number of Vowels : " + count);
        scanner.close();
    }
    public static int CountVowels(String str){
        int count = 0;
        for(int i=0; i<str.length(); i++){
            char ch = Character.toLowerCase(str.charAt(i));
            if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u'){
                count++;
            }
        }
        return count;
    }
}