package pruebas;

public class Ej_234 {
public static void main(String[]args) {
	final String ROJO= "\033[48;5;124m";
	final String NEGRO= "\033[48;5;0m";
	final String RESET = "\033[0m";
	String color ="";
	String text = "";
	for (int i = 0; i < 10; i++) {
		for (int j = 0; j < 20; j++) {
			if(aleatorio()) {
				color = ROJO;
			}else {
				color = NEGRO;
			}
			text +=color+"  "+RESET;
		}//for interno		
		text+="\n";
	}//for externo
	System.out.println(text);
	
	} 
	public static boolean aleatorio() {
		//parte 1 if-if
		/*int randum = (int) Math.floor(Math.random()*2);//0-1
		if(randum==0) {
			return true;
		}
		if(randum==1) {
			return false;
		}
		return bol;*/
		//parte 2 if-else
		/*int randum = (int) Math.floor(Math.random()*2);//0-1
		if(randum==0) {
			return true;
		}
		else{
			return false;
		}
		return bol;*/
		//parte 3 ternario
		//return (Math.floor(Math.random()*2)==0)?true:false;
		// parte 4 Quim
		return (Math.floor(Math.random()*2) ==0);
		
		
		
	}
}
