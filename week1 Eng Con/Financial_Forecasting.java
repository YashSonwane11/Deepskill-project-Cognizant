public class Financial_Forecasting {

	 public static double predictFutureValue(double currentValue, double growthRate, int years) {

	        return currentValue * Math.pow(1 + growthRate, years);
	 }

    public static void main(String[] args) {

        double currentValue = 10000;
        double growthRate = 0.10;
        int years = 5;

        double futureValue = predictFutureValue(currentValue, growthRate, years);

        System.out.println("Future Value after " + years + " years: " + futureValue);
    }
}