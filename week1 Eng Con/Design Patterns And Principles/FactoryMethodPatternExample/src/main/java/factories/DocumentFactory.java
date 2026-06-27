package factories;

import documents.Document;

public abstract class DocumentFactory {

    public abstract Document createDocument(String fileName);

    public void processDocument(String fileName) {
        Document doc = createDocument(fileName);
        System.out.println("Created: " + doc.getType() + " (" + fileName + ")");
        doc.open();
        doc.save();
        doc.close();
        System.out.println();
    }
}
