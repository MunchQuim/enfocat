package pruebas;
import java.util.Scanner;

public class Ej_199 {
	static int numero = 0;
	
	public static void main(String[]args) {
		System.out.println("Pulse 1 para incrementar 1"+"     "+"Pulse 2 para decrementar 2"+"\n");
		Scanner myComando = new Scanner(System.in);
		
		switch (myComando.next()) {
		case "1":
			incrementar();
			break;
		
		case "2":
			decrementar();
			break;
		
		default:
			System.err.println("\n"+"error"+"\n");
			main(args);
			break;
		}
		System.err.println("\n"+numero+"\n");
		main(args);
	}
	
	public static int incrementar() {// esta funcion devuelve un incremento de 1 unidad de el int numero
		numero ++;
		return numero;
	}
	public static int decrementar() {// esta funcion devuelve un decremento de 2 unidades de el int numero
		for (int i = 0; i < 2; i++) {
			numero --;
		}
		return numero;
	}
	
}
