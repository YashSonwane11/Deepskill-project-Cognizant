import java.util.Scanner;

class Task {
    int taskId;
    String taskName;
    String taskStatus;
    Task nextTask;

    public Task(int taskId, String taskName, String taskStatus) {
        this.taskId = taskId;
        this.taskName = taskName;
        this.taskStatus = taskStatus;
        this.nextTask = null;
    }

    public void display() {
        System.out.println("Task ID: " + taskId);
        System.out.println("Task Name: " + taskName);
        System.out.println("Status: " + taskStatus);
        System.out.println();
    }
}

public class TaskManagementSystem {
    private static Task firstTask = null;

    public static void addTask(int taskId, String taskName, String taskStatus) {
        Task newTask = new Task(taskId, taskName, taskStatus);

        if (firstTask == null) {
            firstTask = newTask;
        } else {
            Task currentTask = firstTask;
            while (currentTask.nextTask != null) {
                currentTask = currentTask.nextTask;
            }
            currentTask.nextTask = newTask;
        }
    }

    public static void searchTask(int taskId) {
        Task currentTask = firstTask;

        while (currentTask != null) {
            if (currentTask.taskId == taskId) {
                System.out.println("\nFound: " + currentTask.taskName + " | Status: " + currentTask.taskStatus);
                return;
            }
            currentTask = currentTask.nextTask;
        }

        System.out.println("\nTask Not Found");
    }

    public static void deleteTask(int taskId) {
        if (firstTask == null) {
            return;
        }

        if (firstTask.taskId == taskId) {
            firstTask = firstTask.nextTask;
            return;
        }

        Task currentTask = firstTask;

        while (currentTask.nextTask != null) {
            if (currentTask.nextTask.taskId == taskId) {
                currentTask.nextTask = currentTask.nextTask.nextTask;
                return;
            }
            currentTask = currentTask.nextTask;
        }
    }

    public static void traverse() {
        Task currentTask = firstTask;

        if (currentTask == null) {
            System.out.println("\nList Is Empty");
            return;
        }

        while (currentTask != null) {
            System.out.println("\nID: " + currentTask.taskId + " | Name: " + currentTask.taskName + " | Status: " + currentTask.taskStatus);
            currentTask = currentTask.nextTask;
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        boolean isRunning = true;

        System.out.println("\n --- Task Management System ---");

        while (isRunning) {
            System.out.println("\n1. Add");
            System.out.println("2. Search");
            System.out.println("3. Delete");
            System.out.println("4. Traverse");
            System.out.println("5. Exit");

            System.out.print("\nEnter Your Choice: ");
            int userChoice = scanner.nextInt();

            switch (userChoice) {
                case 1:
                    System.out.print("\nEnter Task ID: ");
                    int taskIdentifier = scanner.nextInt();
                    scanner.nextLine();

                    System.out.print("Enter Task Name: ");
                    String taskTitle = scanner.nextLine();

                    System.out.print("Enter Status: ");
                    String taskStatus = scanner.nextLine();

                    addTask(taskIdentifier, taskTitle, taskStatus);
                    break;

                case 2:
                    System.out.print("\nEnter Task ID To Search: ");
                    searchTask(scanner.nextInt());
                    break;

                case 3:
                    System.out.print("\nEnter Task ID To Delete: ");
                    deleteTask(scanner.nextInt());
                    break;

                case 4:
                    traverse();
                    break;

                case 5:
                    isRunning = false;
                    break;
            }
        }
        scanner.close();
    }
}
