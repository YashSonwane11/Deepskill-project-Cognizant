public class StockMarketTest {
    public static void main(String[] args) {
        StockMarket stockMarket = new StockMarket();

        Observer mobileApp = new MobileApp();
        Observer webApp = new WebApp();

        stockMarket.register(mobileApp);
        stockMarket.register(webApp);

        System.out.println("\n--- Stock Price Updated For Stock 1 ---\n");
        stockMarket.setStockPrice("Stock 1", 200.25);

        System.out.println("\n--- Stock Price Updated For Stock 2 ---\n");
        stockMarket.setStockPrice("Stock 2", 130.76);

        System.out.println("\n--- WebApp Deregistered ---");
        stockMarket.deregister(webApp);

        System.out.println("\n--- Stock Price Updated For Stock 3 ---\n");
        stockMarket.setStockPrice("Stock 3", 800.14);
    }
}