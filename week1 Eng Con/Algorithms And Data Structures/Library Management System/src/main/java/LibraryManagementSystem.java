import java.util.Scanner;

class Book {
    int bookId;
    String bookTitle;
    String authorName;

    public Book(int bookId, String bookTitle, String authorName) {
        this.bookId = bookId;
        this.bookTitle = bookTitle;
        this.authorName = authorName;
    }

    public void display() {
        System.out.println("Book ID: " + bookId);
        System.out.println("Title: " + bookTitle);
        System.out.println("Author: " + authorName);
        System.out.println();
    }
}

public class LibraryManagementSystem {
    static Book[] bookList = new Book[100];
    static int bookCount = 0;

    public static void addBook(int bookId, String bookTitle, String authorName) {
        bookList[bookCount] = new Book(bookId, bookTitle, authorName);
        bookCount++;
    }

    public static void linearSearch(String targetTitle) {
        for (int index = 0; index < bookCount; index++) {
            if (bookList[index].bookTitle.equalsIgnoreCase(targetTitle)) {
                bookList[index].display();
                return;
            }
        }
        System.out.println("\nBook Not Found");
    }

    public static void binarySearch(String targetTitle) {
        int lowIndex = 0;
        int highIndex = bookCount - 1;

        while (lowIndex <= highIndex) {
            int middleIndex = lowIndex + (highIndex - lowIndex) / 2;
            int comparisonResult = bookList[middleIndex].bookTitle.compareToIgnoreCase(targetTitle);

            if (comparisonResult == 0) {
                bookList[middleIndex].display();
                return;
            } else if (comparisonResult < 0) {
                lowIndex = middleIndex + 1;
            } else {
                highIndex = middleIndex - 1;
            }
        }
        System.out.println("\nBook Not Found");
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        addBook(1, "Book 1", "Author 1");
        addBook(2, "Book 2", "Author 2");
        addBook(3, "Book 3", "Author 3");

        System.out.println("\n--- Library Book Search ---");
        System.out.println("\n1. Linear Search");
        System.out.println("\n2. Binary Search");

        while (true) {
            System.out.print("\nChoose A Search Algorithm To Search For A Book: ");
            int userChoice = scanner.nextInt();
            scanner.nextLine();

            if (userChoice != 1 && userChoice != 2) {
                System.out.println("\nInvalid Choice");
                continue;
            }

            System.out.print("\nEnter Book Title To Search: ");
            String bookTitle = scanner.nextLine();

            switch (userChoice) {
                case 1:
                    linearSearch(bookTitle);
                    break;
                case 2:
                    binarySearch(bookTitle);
                    break;
                default:
                    System.out.println("\nInvalid Choice");
                    return;
            }
        }
    }
}
