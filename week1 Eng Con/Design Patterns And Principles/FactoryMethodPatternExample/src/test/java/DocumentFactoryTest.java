import documents.*;
import factories.*;

public class DocumentFactoryTest {
    public static void main(String[] args) {

        System.out.println("---- Factory Method Pattern Test ----\n");

        DocumentFactory wordFactory = new WordDocumentFactory();
        DocumentFactory pdfFactory = new PdfDocumentFactory();
        DocumentFactory excelFactory = new ExcelDocumentFactory();

        Document projectReport = wordFactory.createDocument("Project Report");
        Document userManual = pdfFactory.createDocument("User Manual");
        Document salesData = excelFactory.createDocument("Sales Data");

        System.out.println("Documents Created:");
        System.out.println(projectReport.getType() + " -> Project Report");
        System.out.println(userManual.getType() + " -> User Manual");
        System.out.println(salesData.getType() + " -> Sales Data");
    }
}