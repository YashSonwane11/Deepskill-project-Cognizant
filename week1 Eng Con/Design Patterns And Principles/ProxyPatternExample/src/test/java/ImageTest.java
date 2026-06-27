public class ImageTest {
    public static void main(String[] args) {
        Image image = new ProxyImage("kalyan.png");

        System.out.println("\n--- Display 1 (Loads From Server) ---\n");
        image.display();

        System.out.println("\n--- Display 2 (Fetched From Cache) ---\n");
        image.display();
    }
}