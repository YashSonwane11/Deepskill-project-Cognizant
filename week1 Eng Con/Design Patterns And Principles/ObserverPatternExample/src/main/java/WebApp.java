public class WebApp implements Observer {
    @Override
    public void update(String stockName, double price) {
        System.out.println("Web App Alert: " + stockName + " Price Changed To : Rs " + price);
    }
}