import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

class Order {
    private int orderId;
    private String customerName;
    private int totalPrice;

    public Order(int orderId, String customerName, int totalPrice) {
        this.orderId = orderId;
        this.customerName = customerName;
        this.totalPrice = totalPrice;
    }

    public int getTotalPrice() {
        return totalPrice;
    }

    public void display() {
        System.out.println("Order ID: " + orderId);
        System.out.println("Customer Name: " + customerName);
        System.out.println("Total Price: " + totalPrice);
    }
}

public class CustomerOrderSorting {

    private static void swap(List<Order> orders, int firstIndex, int secondIndex) {
        Order temporaryOrder = orders.get(firstIndex);
        orders.set(firstIndex, orders.get(secondIndex));
        orders.set(secondIndex, temporaryOrder);
    }

    public static void bubbleSort(List<Order> orders) {
        int listSize = orders.size();

        for (int outerIndex = 0; outerIndex < listSize - 1; outerIndex++) {
            boolean isSorted = true;

            for (int innerIndex = 0; innerIndex < listSize - outerIndex - 1; innerIndex++) {
                if (orders.get(innerIndex).getTotalPrice() > orders.get(innerIndex + 1).getTotalPrice()) {
                    swap(orders, innerIndex, innerIndex + 1);
                    isSorted = false;
                }
            }

            if (isSorted) {
                break;
            }
        }
    }

    public static void quickSort(List<Order> orders, int leftIndex, int rightIndex) {
        if (leftIndex >= rightIndex) {
            return;
        }

        int pivotIndex = partition(orders, leftIndex, rightIndex);

        quickSort(orders, leftIndex, pivotIndex - 1);
        quickSort(orders, pivotIndex + 1, rightIndex);
    }

    private static int partition(List<Order> orders, int leftIndex, int rightIndex) {
        int randomIndex = leftIndex + (int) (Math.random() * (rightIndex - leftIndex + 1));

        swap(orders, randomIndex, rightIndex);

        int priceAtPivot = orders.get(rightIndex).getTotalPrice();

        for (int currentIndex = leftIndex; currentIndex < rightIndex; currentIndex++) {
            if (orders.get(currentIndex).getTotalPrice() <= priceAtPivot) {
                swap(orders, currentIndex, leftIndex);
                leftIndex++;
            }
        }

        swap(orders, leftIndex, rightIndex);
        return leftIndex;
    }

    public static void displayOrders(List<Order> orders) {
        System.out.println("\n--- Customer Orders ---\n");
        for (Order order : orders) {
            order.display();
            System.out.println();
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        List<Order> orders = new ArrayList<>();

        orders.add(new Order(1, "Kalyan", 10500));
        orders.add(new Order(2, "Vikash", 15275));
        orders.add(new Order(3, "Ranjan", 10000));

        System.out.println("\n --- Sorting Customer Orders --- \n");
        System.out.println("1. Bubble Sort");
        System.out.println("2. Quick Sort");
        System.out.println("3. Exit");

        System.out.print("\nChoose The Algorithm To Sort Orders By Their Total Price: ");
        int userChoice = scanner.nextInt();

        switch (userChoice) {
            case 1:
                bubbleSort(orders);
                displayOrders(orders);
                break;
            case 2:
                quickSort(orders, 0, orders.size() - 1);
                displayOrders(orders);
                break;
            case 3:
                System.out.println("Exiting ...");
                return;
            default:
                System.out.println("Invalid Choice");
        }
        scanner.close();
    }
}
