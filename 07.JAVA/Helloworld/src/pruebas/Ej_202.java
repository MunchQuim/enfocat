package pruebas;
import java.util.Scanner;

public class Ej_202 {		
		static float numero = 0f;
		
		public static void main(String[]args) {
			System.out.println("Pulse 1 para sumar 5"+"     "+"Pulse 2 para restar 15"+"\n");
			System.out.println("Pulse 3 para duplicar"+"    "+"Pulse 4 para dividir entre 2"+"\n");
			System.out.println("Pulse 5 para obtener el resto entre 3"+"\n");
			Scanner myComando = new Scanner(System.in);
			
			switch (myComando.next()) {
			case "1":
				suma_5();
				break;			
			case "2":
				resta_15();
				break;
			case "3":
				multi_2();
				break;
			
			case "4":
				divi_2();
				break;
			case "5":
				resto_3();
				break;
			
			default:
				System.err.println("\n"+"error"+"\n");
				main(args);
				break;
			}
			System.err.println("\n"+numero+"\n");
			main(args);
		}
		
		public static float suma_5() {// esta funcion devuelve una suma de 5
			numero += 5;
			return numero;
		}
		public static float resta_15() {// esta funcion devuelve un resta de 15
			numero -= 15;
			return numero;
	}
		public static float multi_2() {// esta funcion devuelve un multiplicacion de 2
			numero *= 2;
			return numero;
	}
		public static float divi_2() {// esta funcion devuelve una division de 2
			numero /= 2;
			return numero;
	}
		public static float resto_3() {// esta funcion devuelve el resto en una division entre 3
			numero %= 3;
			return numero;
	}
}
