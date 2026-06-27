import java.util.Scanner;

class Employee {
    private int employeeId;
    private String employeeName;
    private String jobPosition;
    private int employeeSalary;

    public Employee(int employeeId, String employeeName, String jobPosition, int employeeSalary) {
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.jobPosition = jobPosition;
        this.employeeSalary = employeeSalary;
    }

    public int getEmployeeId() {
        return employeeId;
    }

    public void display() {
        System.out.println("Employee ID: " + employeeId);
        System.out.println("Name: " + employeeName);
        System.out.println("Position: " + jobPosition);
        System.out.println("Salary: " + employeeSalary);
    }
}

public class EmployeeManagementSystem {
    static Employee[] employeeList = new Employee[100];
    static int employeeCount = 0;

    public static void addEmployee(Scanner scanner) {
        if (employeeCount < employeeList.length) {
            System.out.print("\nEnter Employee ID: ");
            int employeeIdentifier = scanner.nextInt();
            scanner.nextLine();

            System.out.print("Enter Employee Name: ");
            String employeeName = scanner.nextLine();

            System.out.print("Enter Position: ");
            String jobPosition = scanner.nextLine();

            System.out.print("Enter Salary: ");
            int employeeSalary = scanner.nextInt();

            if (employeeSalary < 0) {
                System.out.println("\nSalary Cannot Be Negative !");
                return;
            }

            employeeList[employeeCount] = new Employee(employeeIdentifier, employeeName, jobPosition, employeeSalary);
            employeeCount++;

            System.out.println("\nEmployee Added");
        } else {
            System.out.println("\nEmployees List Is Full");
        }
    }

    public static void deleteEmployee(Scanner scanner) {
        System.out.print("\nEnter ID To Delete Employee: ");
        int employeeIdentifier = scanner.nextInt();

        boolean isFound = false;

        for (int index = 0; index < employeeCount; index++) {
            if (employeeList[index].getEmployeeId() == employeeIdentifier) {
                for (int nextIndex = index; nextIndex < employeeCount - 1; nextIndex++) {
                    employeeList[nextIndex] = employeeList[nextIndex + 1];
                }

                employeeList[employeeCount - 1] = null;
                employeeCount--;

                isFound = true;
                System.out.println("\nEmployee Deleted");
                break;
            }
        }

        if (!isFound) {
            System.out.println("\nNot Found");
        }
    }

    public static void searchEmployee(Scanner scanner) {
        System.out.print("\nEnter ID To Search Employee: ");
        int employeeIdentifier = scanner.nextInt();

        boolean isFound = false;

        for (int index = 0; index < employeeCount; index++) {
            if (employeeList[index].getEmployeeId() == employeeIdentifier) {
                employeeList[index].display();
                isFound = true;
                break;
            }
        }

        if (!isFound) {
            System.out.println("\nNot Found");
        }
    }

    public static void displayEmployees() {
        if (employeeCount == 0) {
            System.out.println("\nNo Employees");
        } else {
            for (int index = 0; index < employeeCount; index++) {
                employeeList[index].display();
            }
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("\n--- Employee Management System ---\n");

        while (true) {
            System.out.println("\n1. Add Employee");
            System.out.println("2. Search Employee");
            System.out.println("3. Display All");
            System.out.println("4. Delete Employee");
            System.out.println("5. Exit");

            System.out.print("\nEnter Choice: ");
            int userChoice = scanner.nextInt();

            switch (userChoice) {
                case 1:
                    addEmployee(scanner);
                    break;
                case 2:
                    searchEmployee(scanner);
                    break;
                case 3:
                    displayEmployees();
                    break;
                case 4:
                    deleteEmployee(scanner);
                    break;
                case 5:
                    scanner.close();
                    return;
                default:
                    System.out.println("\nInvalid Choice");
            }
        }
    }
}
