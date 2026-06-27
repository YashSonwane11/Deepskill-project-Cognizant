public class ComputerTest {
    public static void main(String[] args) {
        Computer firstBuild = new Computer.Builder()
                .setCPU("Intel Core Ultra 200S")
                .setRAM("64GB")
                .setStorage("5TB SSD")
                .build();

        Computer secondBuild = new Computer.Builder()
                .setCPU("Intel Core i5")
                .setRAM("16GB")
                .setStorage("1TB SSD")
                .build();

        System.out.println("\n--- Build 1 ---");
        firstBuild.display();

        System.out.println("\n--- Build 2 ---");
        secondBuild.display();
    }
}
