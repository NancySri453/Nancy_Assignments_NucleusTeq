//3. Create a program to check if two strings are anagrams.
package StringManipulation;
import java.util.Arrays;
import java.util.Scanner;

public class Anagrams{
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter first string: ");
        String str1 = scanner.nextLine();
        System.out.print("Enter second string: ");
        String str2 = scanner.nextLine();
        scanner.close();

        if(IsAnagram(str1,str2)){
            System.out.println("The strings are anagrams.");
            return;
        }else{
            System.out.println("The strings are not anagrams.");
            return;
        }
    }
    public static boolean IsAnagram(String str1,String str2){

        str1 = str1.toLowerCase();
        str2 = str2.toLowerCase();

        if(str1.length()!=str2.length()){
            return false;
        }

        //Convert string to character array and then sort
        char[] charArray1 = str1.toCharArray();
        char[] charArray2 = str2.toCharArray();
        Arrays.sort(charArray1);
        Arrays.sort(charArray2);

        return Arrays.equals(charArray1, charArray2);
}
}
