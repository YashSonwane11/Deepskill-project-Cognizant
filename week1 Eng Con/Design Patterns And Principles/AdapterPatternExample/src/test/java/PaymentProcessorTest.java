public class PaymentProcessorTest {
    public static void main(String[] args) {
        PaymentProcessor stripe = new StripeAdapter(new StripeGateway());
        PaymentProcessor razorPay = new RazorPayAdapter(new RazorPayGateway());

        System.out.println("\n--- Stripe Payment ---\n");
        stripe.processPayment(1000);

        System.out.println("\n--- RazorPay Payment ---\n");
        razorPay.processPayment(5000);
    }
}