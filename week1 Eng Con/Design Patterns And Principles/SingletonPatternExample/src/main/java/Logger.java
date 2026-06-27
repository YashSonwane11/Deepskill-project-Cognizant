public class Logger {
    private static Logger instance;

    private Logger(){
        System.out.println("Logger Instance Created");
    }

    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        else {
            System.out.println("Logger Instance Already Exists. Reusing The Same Instance");
        }
        return instance;
    }
}
