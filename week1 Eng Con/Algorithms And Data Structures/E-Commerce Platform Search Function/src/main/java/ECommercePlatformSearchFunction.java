import java.util.Scanner;

class Product {
    private int productId;
    private String productName;
    private String category;

    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    public int getProductId() {
        return productId;
    }

    public void display() {
        System.out.println("Product ID: " + productId);
        System.out.println("Product Name: " + productName);
        System.out.println("Category: " + category);
    }
}

public class ECommercePlatformSearchFunction {

    public static Product linearSearch(Product[] products, int targetProductId) {
        for (Product product : products) {
            if (product.getProductId() == targetProductId) {
                return product;
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] products, int targetProductId) {
        int lowIndex = 0;
        int highIndex = products.length - 1;

        while (lowIndex <= highIndex) {
            int middleIndex = lowIndex + (highIndex - lowIndex) / 2;

            int middleProductId = products[middleIndex].getProductId();

            if (middleProductId == targetProductId) {
                return products[middleIndex];
            }

            if (middleProductId < targetProductId) {
                lowIndex = middleIndex + 1;
            } else {
                highIndex = middleIndex - 1;
            }
        }

        return null;
    }

    public static void main(String[] args) {
        System.out.println("\n--- E-Commerce Platform Search ---\n");

        Product[] products = {
                new Product(1, "PlayStation 5", "Electronics"),
                new Product(2, "MacBook Pro", "Electronics"),
                new Product(3, "Atomic Habits", "Books"),
                new Product(4, "Bhagavad Gita", "Books")
        };

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter Product ID To Search: ");
        int targetProductId = scanner.nextInt();

        System.out.println("\nChoose The Algorithm To Use For The Search: ");
        System.out.println("1. Linear Search");
        System.out.println("2. Binary Search");

        System.out.print("\nEnter Your Choice: ");
        int userChoice = scanner.nextInt();

        Product result;

        if (userChoice == 1) {
            result = linearSearch(products, targetProductId);
        } else {
            result = binarySearch(products, targetProductId);
        }

        if (result != null) {
            System.out.println("\n--- Product Found --- \n");
            result.display();
        } else {
            System.out.println("Product Not Found");
        }

        scanner.close();
    }
}
