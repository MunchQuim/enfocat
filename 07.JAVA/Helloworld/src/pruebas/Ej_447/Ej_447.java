package pruebas.Ej_447;

public class Ej_447 {

}
abstract class Ser_vivo{
	String[] comida_arr = {"agüita", "nutrientes disueltos","hierba","carne"};
	public void alimentarse() {
		for (int i = 0; i < comida_arr.length; i++) {
			System.out.println(comida_arr[i]);
		}//reahacer
		
	}
}
class Planta extends Ser_vivo{
	String[] comida_arr = {"agüita", "nutrientes disueltos"};
	public void alimentarse() {
		
		
	}
}
abstract class Animal extends Ser_vivo{
	String[] comida_arr = {"hierba","carne"};
	public void alimentarse(2,3) {
		
	}
}
class Animal_carnivoro extends Animal{
	String[] comida_arr = {"carne"};
	public void alimentarse(3,3) {
		
	}
}
class Animal_herbivoro extends Animal{
	String[] comida_arr = {"hierba"};
	public void alimentarse(2,2) {
		
	}
}