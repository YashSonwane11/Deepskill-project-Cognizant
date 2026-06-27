public class CustomerService {
    private CustomerRepository customerRepository;

    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public void getCustomer(int customerId) {
        String customerName = customerRepository.findCustomerById(customerId);

        if (customerName.equals("Customer Not Found")) {
            System.out.println(customerName);
        } else {
            System.out.println("Customer Found: " + customerName);
        }
    }
}