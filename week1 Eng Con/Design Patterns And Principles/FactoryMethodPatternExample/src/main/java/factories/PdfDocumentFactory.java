package factories;

import documents.Document;
import documents.PdfDocument;

public class PdfDocumentFactory extends DocumentFactory {

    @Override
    public Document createDocument(String fileName) {
        return new PdfDocument(fileName);
    }
}
