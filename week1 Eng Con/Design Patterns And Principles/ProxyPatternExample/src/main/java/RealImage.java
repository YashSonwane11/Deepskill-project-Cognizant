public class RealImage implements Image {

    private String filename;

    public RealImage(String filename) {
        this.filename = filename;
        loadFromServer();
    }

    private void loadFromServer() {
        System.out.println("Loading Image From Remote Server: " + filename);
    }

    @Override
    public void display() {
        System.out.println("Displaying Image: " + filename);
    }
}