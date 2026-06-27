package factories;

import documents.Document;
import documents.WordDocument;

public class WordDocumentFactory extends DocumentFactory {

    @Override
    public Document createDocument(String fileName) {
        return new WordDocument(fileName);
    }
}