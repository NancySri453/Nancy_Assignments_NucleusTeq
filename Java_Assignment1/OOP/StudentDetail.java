//1. Create a class to represent a student with attributes like name, roll number, and marks.
package OOP;

class Student {
    private String name;
    private int RollNumber;
    private double marks;

    public Student(String name, int roll_num, double marks) {
        this.name = name;
        this.RollNumber = roll_num;
        this.marks = marks;
    }

    public void displayDetails() {
        System.out.println("Name: " + name);
        System.out.println("Roll Number: " + RollNumber);
        System.out.println("Marks: " + marks);
    }
    public String getName() {
        return name;
    }

    public int getRollNumber() {
        return RollNumber;
    }

    public double getMarks() {
        return marks;
    }
    
    public void setMarks(double marks) {
        if(marks >= 0 && marks <= 100) {
            this.marks = marks;
        } else {
            System.out.println("Invalid marks");
        }
    }

    public void updateMarks(double newMarks) {
        this.marks = newMarks;
    }

    public void updateMarks(double newMarks, double bonus) {
        this.marks = newMarks + bonus;
    }
}


class GraduateStudent extends Student {
    private String subject;

    public GraduateStudent(String name, int rollNumber, double marks, String subject) {
        super(name, rollNumber, marks);
        this.subject = subject;
    }

    public String getSubject() {
        return subject;
    }

    @Override
    public void displayDetails() {
        super.displayDetails();
        System.out.println("Subject: " + subject);
    }

    @Override
    public void updateMarks(double newMarks) {
        super.updateMarks(newMarks + 5.0);
    }
}

public class StudentDetail {

    public static void main(String[] args) {
        Student student = new Student("Nancy",  123, 93);
        System.out.println("Student Details:");
        student.displayDetails();

        student.updateMarks(92);
        System.out.println("\nUpdated Student Details:");
        student.displayDetails();

        student.updateMarks(95, 5);
        System.out.println("\nUpdated Student Details with bonus:");
        student.displayDetails();

        GraduateStudent graduateStudent = new GraduateStudent("Shubham", 666, 82, "Physics");
        System.out.println("\nGraduate Student Details:");
        graduateStudent.displayDetails();


        graduateStudent.updateMarks(90);
        System.out.println("\nUpdated Graduate Student Details:");
        graduateStudent.displayDetails();
    }
    
}