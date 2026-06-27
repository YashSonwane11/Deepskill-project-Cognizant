package factories;

import documents.Document;
import documents.ExcelDocument;

public class ExcelDocumentFactory extends DocumentFactory {

    @Override
    public Document createDocument(String fileName) {
        return new ExcelDocument(fileName);
    }
}