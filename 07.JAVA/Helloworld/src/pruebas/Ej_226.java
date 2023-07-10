package pruebas;
import java.util.Scanner;

public class Ej_226 {
	
	public static void main(String[]args) {
		
		Scanner myNum = new Scanner(System.in); 
		System.out.println("digame un numero");
		try {
			int num = myNum.nextInt();
			if (num%2==0) {
				System.out.println(num+" Es par");
			}else {
				System.out.println(num+" Es impar");
			}
				
		} catch (Exception e) {
			System.err.println("Error");
		}
		main(args);
		
	}//main

}//Main
