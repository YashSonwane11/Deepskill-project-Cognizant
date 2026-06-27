package documents;

public class ExcelDocument implements Document {

    private String fileName;

    public ExcelDocument(String fileName) {
        this.fileName = fileName;
    }

    @Override
    public void open() {
        System.out.println("Launching Microsoft Excel... \n" + fileName + " Is Being Opened");
    }

    @Override
    public void save() {
        System.out.println("Saving Changes To " + fileName);
    }

    @Override
    public void close() {
        System.out.println("Microsoft Excel Closed");
    }

    @Override
    public String getType() {
        return "Excel Document";
    }
}
