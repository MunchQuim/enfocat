package pruebas;

public class Ej_437 {
	public static void main(String[]args) {
		Programmer programmer = new Programmer();
		programmer.get_salary();
	}

}
class Employee{
	float salary = 550.5F;
	public void get_salary() {
		System.out.println(this.salary+"€");
	}
}
class Programmer extends Employee{
	int bonus = 250;
	public void get_salary() {
		System.out.println(this.salary+this.bonus+"€");//imprime el salario de ser empleado mas el bono de ser programador.
	}
	

}
