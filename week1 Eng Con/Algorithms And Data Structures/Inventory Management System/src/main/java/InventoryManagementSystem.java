import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

class Product {
    private final int productId;
    private String productName;
    private int stockQuantity;
    private double productPrice;

    public Product(int productId, String productName, int stockQuantity, double productPrice) {
        this.productId = productId;
        this.productName = productName;
        this.stockQuantity = stockQuantity;
        this.productPrice = productPrice;
    }

    public void update(String productName, int stockQuantity, double productPrice) {
        this.productName = productName;
        this.stockQuantity = stockQuantity;
        this.productPrice = productPrice;
    }

    public void display() {
        System.out.println("Product ID: " + productId);
        System.out.println("Product Name: " + productName);
        System.out.println("Quantity: " + stockQuantity);
        System.out.println("Price: " + productPrice);
    }
}

public class InventoryManagementSystem {

    private final Map<Integer, Product> inventory = new HashMap<>();
    private final Scanner scanner = new Scanner(System.in);

    public void addProduct() {
        System.out.print("\nEnter Product ID: ");
        int productIdentifier = scanner.nextInt();
        scanner.nextLine();

        System.out.print("Enter Product Name: ");
        String productName = scanner.nextLine();

        System.out.print("Enter Quantity: ");
        int stockQuantity = scanner.nextInt();

        System.out.print("Enter Price: ");
        double productPrice = scanner.nextDouble();

        inventory.put(productIdentifier, new Product(productIdentifier, productName, stockQuantity, productPrice));
        System.out.println("\nProduct Added Successfully");
    }

    public void updateProduct() {
        System.out.print("\nEnter Product ID To Update: ");
        int productIdentifier = scanner.nextInt();
        scanner.nextLine();

        Product product = inventory.get(productIdentifier);

        if (product == null) {
            System.out.println("\nProduct Not Found");
            return;
        }

        System.out.print("Enter New Product Name: ");
        String productName = scanner.nextLine();

        System.out.print("Enter New Quantity: ");
        int stockQuantity = scanner.nextInt();

        System.out.print("Enter New Price: ");
        double productPrice = scanner.nextDouble();

        product.update(productName, stockQuantity, productPrice);
        System.out.println("\nProduct Updated Successfully");
    }

    public void deleteProduct() {
        System.out.print("\nEnter Product ID To Delete: ");
        int productIdentifier = scanner.nextInt();

        if (inventory.remove(productIdentifier) != null) {
            System.out.println("\nProduct Deleted Successfully");
        } else {
            System.out.println("\nProduct Not Found");
        }
    }

    public void displayProducts() {
        if (inventory.isEmpty()) {
            System.out.println("\nNo Products Available");
            return;
        }

        System.out.println("\n--- Available Products ---\n");

        for (Product product : inventory.values()) {
            product.display();
            System.out.println();
        }
    }

    public static void main(String[] args) {
        InventoryManagementSystem inventorySystem = new InventoryManagementSystem();

        while (true) {
            System.out.println("\n--- Inventory Management System ---\n");
            System.out.println("1. Add Product");
            System.out.println("2. Update Product");
            System.out.println("3. Delete Product");
            System.out.println("4. View Products");
            System.out.println("5. Exit");

            System.out.print("\nEnter Your Choice: ");
            int userChoice = inventorySystem.scanner.nextInt();

            switch (userChoice) {
                case 1:
                    inventorySystem.addProduct();
                    break;
                case 2:
                    inventorySystem.updateProduct();
                    break;
                case 3:
                    inventorySystem.deleteProduct();
                    break;
                case 4:
                    inventorySystem.displayProducts();
                    break;
                case 5:
                    inventorySystem.scanner.close();
                    System.out.println("Exiting...");
                    return;
                default:
                    System.out.println("Invalid Choice");
            }
        }
    }
}