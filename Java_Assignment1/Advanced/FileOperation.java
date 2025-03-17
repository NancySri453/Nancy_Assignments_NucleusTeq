//3. Implement a simple file I/O operation to read data from a text file.
package Advanced;

import java.io.*;

public class FileOperation {
    public static void main(String[] args) {
        String fileName = "Java_Assignment1\\Advanced\\file.txt";

        try (BufferedReader bufferedReader = new BufferedReader(new FileReader(fileName))) {
            System.out.println("Reading from file: " + fileName);

            String line;
            while ((line = bufferedReader.readLine()) != null) {
                System.out.println(line);
            }

        } catch (FileNotFoundException e) {
            System.out.println("Error: File not found.");
        } catch (IOException e) {
            System.out.println("Error: Unable to read the file.");
        }
    }
}
