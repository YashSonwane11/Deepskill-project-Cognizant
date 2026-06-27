public class StudentTest {
    public static void main(String[] args) {

        Student student = new Student(101, "Kalyan", "A");
        StudentView view = new StudentView();
        StudentController controller = new StudentController(student, view);

        System.out.println("\n--- Initial Student Details ---");
        controller.displayStudent();

        controller.setStudentName("Ranjan");
        controller.setStudentGrade("A");

        System.out.println("\n--- Updated Student Details ---");
        controller.displayStudent();
    }
}