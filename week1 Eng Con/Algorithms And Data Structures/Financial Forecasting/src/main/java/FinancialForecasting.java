import java.util.Scanner;

public class FinancialForecasting {
    public static double futureValue(double presentValue, double growthRate, int years) {
        if (years == 0) {
            return presentValue;
        }
        return futureValue(presentValue, growthRate, years - 1) * (1 + growthRate);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter Present Value: ");
        double presentValue = scanner.nextDouble();

        System.out.print("Enter Growth Rate: ");
        double growthRate = scanner.nextDouble();

        System.out.print("Enter Number Of Years: ");
        int years = scanner.nextInt();

        System.out.println("\nFuture Value: " + futureValue(presentValue, growthRate, years));

        scanner.close();
    }
}