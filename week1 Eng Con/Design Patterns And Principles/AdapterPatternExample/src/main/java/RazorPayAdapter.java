public class RazorPayAdapter implements PaymentProcessor {
    private RazorPayGateway razorPayGateway;

    public RazorPayAdapter(RazorPayGateway razorPayGateway) {
        this.razorPayGateway = razorPayGateway;
    }

    @Override
    public void processPayment(double amount) {
        razorPayGateway.processRazorPayPayment(amount);
    }
}