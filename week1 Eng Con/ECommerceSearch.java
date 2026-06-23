import java.util.*;

class Product{
	int productId;
	String productName;
	String category;
	
	Product(int productId, String productName, String category){
		this.productId = productId;
		this.productName = productName;
		this.category= category;
	}
	
	public String toString(){
		return productId + " - " + productName + " - " + category;
	} 
}

public class ECommerceSearch{
	
	public static Product linearSearch(Product[] products,String targetName){
		for(int i = 0; i< products.length;i++){
			if(products[i].productName.equalsIgnoreCase(targetName)){
				return products[i];
			}
		}
		return null;
		
	}
	
	public static Product binarySearch(Product[] products,String targetName){
		int left = 0;
		int right = products.length - 1;
		
		while(left <= right){
			int mid = left + (right - left) / 2;
			
			int result = products[mid].productName.compareToIgnoreCase(targetName);
			
			if(result == 0){
				return products[mid];
			}else if(result < 0){
				left = mid + 1;
			}else{
				right = mid - 1;
			}
		}
		
		return null;
	}
	
	public static void main(String[] args){
		Product[] products = {
				new Product(101,"Laptop","Electronic"),
				new Product(102,"Shoes","Fashion"),
				new Product(103,"Mobile","Electronic"),
				new Product(104,"Watch","Accessories"),
				new Product(105,"Book","Education")
		};
		
		Product foundLinear = linearSearch(products, "Mobile");
		
		if(foundLinear != null){
			System.out.println("Linear Search Found: " + foundLinear);
		}else{
			System.out.println("Product not found");
		}
		
		Arrays.sort(products,Comparator.comparing(p-> p.productName.toLowerCase()));
		
		Product foundBinary = binarySearch(products,"Mobile");
		
		if(foundBinary != null){
			System.out.println("Binary Search Found: " + foundBinary);
		
		}else{
			System.out.println("Product not found");
		}
	}
}
