package pruebas;

public class Ej_322 {
	static byte num_1 = 2;//sin metodos
	static short num_2 =4;//sin metodos
	static Integer num_3 =5;//con metodos
	static Long num_4 = 26L;//con metodos
public static void main(String[]args) {
	clasificador(num_1);
	clasificador(num_2);
	clasificador(num_3);
	clasificador(num_4);
	} 
	public static void apartado_1() {//apartado 1		
		System.out.println(Byte.valueOf(num_1).getClass().getName());
		System.out.println(Short.valueOf(num_2).getClass().getName());
		System.out.println(num_3.getClass().getName());
		System.out.println(num_4.getClass().getName());
	}
	public static void clasificador(Object param) {
		System.out.println(param.getClass().getName());
	}
}
