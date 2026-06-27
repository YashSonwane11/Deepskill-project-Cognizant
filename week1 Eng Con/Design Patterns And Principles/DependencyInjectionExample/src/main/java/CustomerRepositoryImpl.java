public class CustomerRepositoryImpl implements CustomerRepository {
    @Override
    public String findCustomerById(int id) {
        if (id == 1) {
            return "Yashkumar";
        }
        else if (id == 2) {
            return "Sonwane";
        }
        else {
            return "Customer Not Found";
        }
    }
}