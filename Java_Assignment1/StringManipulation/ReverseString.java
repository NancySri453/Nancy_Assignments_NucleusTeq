// 1. Write a program to reverse a given string.
package StringManipulation;

// Using StringBuilder
public class ReverseString{
    public static void main(String[] args){
        String str = "Hello World";
        StringBuilder sb = new StringBuilder(str);
        sb.reverse();
        System.out.println("Reversed string: " + sb.toString());
    }
}
// public class ReverseString{
//     public static void main(String[] args){
//         String str = "Hello World";
//         String reversed = "";

//         //Reverse using loop
//         for(int i = str.length()-1;i>=0;i--){
//             reversed += str.charAt(i);
//         }
//         System.out.println("Reversed string : "+reversed);
//     }
// }