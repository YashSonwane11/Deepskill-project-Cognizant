public class PaymentStrategyTest {

    public static void main(String[] args) {

        PaymentContext context = new PaymentContext(new CreditCardPayment());
        System.out.println("\n--- Credit Card Payment ---\n");
        context.executePayment(1500);

        context.setStrategy(new PayPalPayment());
        System.out.println("\n--- Switched To PayPal Payment ---\n");
        context.executePayment(1200);
    }
}