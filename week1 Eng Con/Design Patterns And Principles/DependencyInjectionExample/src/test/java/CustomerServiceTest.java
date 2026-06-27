public class CustomerServiceTest {
    public static void main(String[] args) {

        CustomerRepository repository = new CustomerRepositoryImpl();
        CustomerService service = new CustomerService(repository);

        System.out.println("\n--- Finding Customers ---\n");
        service.getCustomer(1);
        service.getCustomer(2);
        service.getCustomer(3);
    }
}