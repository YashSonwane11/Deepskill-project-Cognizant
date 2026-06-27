public class NotifierTest {
    public static void main(String[] args) {
        Notifier emailAndSMS = new SMSNotifierDecorator(new EmailNotifier());
        System.out.println("\n--- At Email And SMS ---\n");
        emailAndSMS.send("Company Is Organizing A Party This Weekend !");

        Notifier allChannels = new SlackNotifierDecorator(new SMSNotifierDecorator(new EmailNotifier()));
        System.out.println("\n--- At All Channels ---\n");
        allChannels.send("Our Company Hits 10 Years Of Service Today. Thank You All !");
    }
}