package pruebas;
import java.util.Scanner;

public class Ej_426 {
	private static Ej_426_tarjeta tarjeta = new Ej_426_tarjeta();
	 public static void main(String[]args) {
		 int fase = 0;
		 int retiro = 0;
			if (tarjeta.isBloqueada()==false) {
				Scanner miEscaner = new Scanner(System.in);
				System.out.println("Que desea hacer?\n1.Ver saldo.\n2.Operaciones");
				try {
					 fase = miEscaner.nextInt();
				} catch (Exception e) {
					System.out.println("Datos incorrectos, vuelve a intentarlo");
				}//try
				
				switch (fase) {
				case 1://ver saldo
					System.out.println("su saldo es: " + tarjeta.getSaldo());
					break;
				case 2://operaciones
					System.out.println("Cuanto desea retirar?");
					retiro=miEscaner.nextInt();
					if (retiro<=tarjeta.getSaldo()&&retiro>=0) {
						//en el caso que pueda retirar
						tarjeta.setSaldo(tarjeta.getSaldo()-retiro);
						System.out.println("Ha retirado "+retiro+"piezas de oro");
					}else if(retiro<0) {// de intentar retirar un numero negativo se le cancela la tarjeta.
						System.out.println("vaya vaya, con que alguien intenta hackear el sistema no?");
						tarjeta.setBloqueada(true);
					}else {
						System.out.println("Parece que no tiene suficiente saldo");
					}
					break;
					default:
					break;
				}//switch
				main(args);
				miEscaner.close();
			}//if
			else {
				System.out.println("su tarjeta ha sido bloqueada");
			}
			
			
		} 
}
