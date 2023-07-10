package pruebas;

public class Ej_238 {
	public static void main(String[]args) {
		apartado_2();
		} 
	public static void apartado_1(){
		//un programa que imprima los numeros divisibles por 3 de un array.
				int[] array = {1,6,4,5,2,645,3452436,5236524,324,523,45};
				String text = "";
				for (int i = 0; i < array.length; i++) {
					if (array[i]%3==0) {
						text += array[i]+", ";
					}//if
				}//for
				System.out.println(text);	
	}
	public static void apartado_2() {
		String[] abc = {"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"};
		String text = "";
		for (int i = 0; i < abc.length; i++) {
			text+=abc[i];
			System.out.println(text);
		}text = "";
		for (int i = 0; i < abc.length-1; i++) {//25 bucles
			for (int j = 0; j < abc.length-i-1; j++) {//cada bucle imprime 26-1(para no repetir)-la cantidad de bucles
				//vamos que imprimer una letra menos por bucle.
				text+=abc[j];
				}//for interior
			System.out.println(text);
			text = "";
		}//for exterior
		
		
		
	}
}
