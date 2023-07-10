package pruebas;

public class Ej_379 {//practicando la recursividad
	static int index = 0;
	static int contador = 1;
	static String text = "Supercalifragilisticoespialidoso";
	 public static void main(String[]args) {
		recorre();
		inversa(text);
	}//main
	 public static void recorre() {
			String[] tecnologias = {"Markdown","Regexp","HTML","CSS","JS","JAVA","SQL"};
			if (index<tecnologias.length) {
			System.out.println(tecnologias[index]);
			index ++;
			recorre();
			}//if
	 }
	 public static void inversa(String param) {//escribe la inversa de la frase parametrizada
		 System.out.print(param.charAt(param.length()-contador));
		 contador ++;
		 if(contador <= param.length()) {
			 inversa(param);
		 }
	 }
}
