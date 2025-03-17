//2.  Implement a function to sort an array in ascending order using bubble sort or selection sort.

package Arrays;
public class SortArray{
    public static void bubbleSort(int arr[]){
        int n = arr.length;
        for (int i = 0; i < n-1; i++)
            for (int j = 0; j < n-i-1; j++)
                if (arr[j] > arr[j+1]) {
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
    }
    public static void main(String[] args){
        int arr[] = {64, 34, 25, 12, 22, 11, 90};
        System.out.println("Original array:");
        for(int i = 0; i < arr.length; i++){
            System.out.print(arr[i] + " ");
        }
        bubbleSort(arr);
        System.out.println("\nSorted array:");
        for(int i = 0; i < arr.length; i++){
            System.out.print(arr[i] + " ");
        }
    }
}