package documents;

public class WordDocument implements Document {

    private String fileName;

    public WordDocument(String fileName) {
        this.fileName = fileName;
    }

    @Override
    public void open() {
        System.out.println("Launching Microsoft Word... \n" + fileName + " Is Being Opened");
    }

    @Override
    public void save() {
        System.out.println("Saving Changes To " + fileName);
    }

    @Override
    public void close() {
        System.out.println("Microsoft Word Closed");
    }

    @Override
    public String getType() {
        return "Word Document";
    }
}
