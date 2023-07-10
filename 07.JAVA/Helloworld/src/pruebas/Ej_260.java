package pruebas;

public class Ej_260 {
public static void main(String[]args) {
	Ej_260 Main = new Ej_260();
	//apartado 1 java or null
	System.out.println(Main.java_or_null("java"));//java
	System.out.println(Main.java_or_null("afdsnfus"));//null
	System.out.println(Main.login("java","afdsnfus"));//login false
	System.out.println(Main.login("admin","1234"));//login true
	System.out.println(Main.impar_par(2));//true
	System.out.println(Main.impar_par(3));//false
	//apartado 2 login true false
	} 
	public String java_or_null(String param) {
		if(param == "java") {
			return "java";
		}
		return "null";	
	}
	public String login(String user,String password) {
		if(user == "admin" && password=="1234") {
			return "login true";
		}
		return "login false";	
	}
	//apartado 3 impar-par
	public boolean impar_par(int num) {
		return (num%2==0);
	}
	
}
