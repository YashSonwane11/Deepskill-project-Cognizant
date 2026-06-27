public class RemoteControlTest {
    public static void main(String[] args) {

        Light light = new Light();
        RemoteControl remote = new RemoteControl();

        remote.setCommand(new LightOnCommand(light));
        System.out.println("\n--- Pressing Button To Turn On ---\n");
        remote.pressButton();

        remote.setCommand(new LightOffCommand(light));
        System.out.println("\n--- Pressing Button To Turn Off ---\n");
        remote.pressButton();
    }
}