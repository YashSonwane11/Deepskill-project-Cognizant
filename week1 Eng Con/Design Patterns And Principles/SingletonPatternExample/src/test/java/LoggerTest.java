public class LoggerTest {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        if(logger1 == logger2){
            System.out.println("Singleton Pattern Is Maintained (Both Logger1 And Logger2 Refer To The Same Logger Instance)");
        }
        else {
            System.out.println("Singleton Pattern Is Violated (Multiple Logger Instances Found)");
        }
    }
}
