package documents;

public class PdfDocument implements Document {

    private String fileName;

    public PdfDocument(String fileName) {
        this.fileName = fileName;
    }

    @Override
    public void open() {
        System.out.println("Opening Adobe Reader... \n" + fileName + " Is Being Opened");
    }

    @Override
    public void save() {
        System.out.println("Saving Changes To " + fileName);
    }

    @Override
    public void close() {
        System.out.println("Adobe Reader Closed");
    }

    @Override
    public String getType() {
        return "PDF Document";
    }
}
