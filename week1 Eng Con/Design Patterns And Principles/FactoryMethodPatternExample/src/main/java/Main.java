import factories.*;

public class Main {
    public static void main(String[] args) {
        System.out.println("---- Factory Method Pattern Implementation ----\n");

        DocumentFactory wordFactory = new WordDocumentFactory();
        DocumentFactory pdfFactory = new PdfDocumentFactory();
        DocumentFactory excelFactory = new ExcelDocumentFactory();

        wordFactory.processDocument("Project Report");
        pdfFactory.processDocument("User Manual");
        excelFactory.processDocument("Sales Data");
    }
}