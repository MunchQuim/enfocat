package Pruebas;
import java.util.Scanner;
import java.util.Timer;
import java.util.TimerTask;


public class Banderas {
	
	///
    final String RESET = "\033[0m";
    final String AZUL = "\033[48;5;12m";
    final String DARK_CYAN= "\033[48;5;27m";
    final String B_BLUE= "\033[48;5;32m";
    final String BLANCO= "\033[48;5;15m";
    final String ROJO= "\033[48;5;124m";
    final String B_ROJO= "\033[48;5;160m";
    final String B_NEGRO= "\033[48;5;0m";
    final String B_AMARILLO= "\033[48;5;11m";
    final String B_NARANJA= "\033[48;5;220m";
	///
    String color = "";
    String text = "";
    //
    
    //
    public void menu() {
    	Timer timer = new Timer();
    	
    	text = "";
    	String codigo = "";
    	System.out.println(RESET+"Escoja el Pais");
    	Scanner miScaner = new Scanner(System.in);
    	System.out.print("1.Grecia     2.Ucrania     3.Francia\n4.Espana     5.Cataluna     6.Alemania\n\n");
    	codigo = miScaner.next();
    	
    	switch (codigo.toLowerCase()) {
			case "1": case "grecia":
				grecia();
				break;
			case "2": case "ucrania":
				ucrania();
				break;
			case "3": case "francia":
				francia();
				break;
			case "4": case "españa": case "espana":
				espanya();
				break;
			case "5": case "cataluña": case "cataluna":
				catalunya();
				break;
			case "6": case "alemania":
				alemania();
				break;
			default:
				System.err.println("ERROR, LA BANDERA NO EXISTE\n");
				System.err.println("todavia\n");
				
		  
		        
		}//switch    	
		menu();
    	//ojala poder decir que si el nombre coincide con el nombre (String nombre = ;) de alguna funcion ejecutar dicha funcion.
    	
    	
    }
	
	public void grecia(){
		String num = "1";
		String nombre = "grecia";
		byte alto =9;
	    byte ancho =13;	
	    
	    for (int i = 0; i < alto; i++) {
			
	    	for (int j = 0; j < ancho; j++) {
	    		
	    		if((i%2==0&&(j!=2 || i>5)&&(i!=2||j>4))||((i%2!=0&&i<4)&&j!=2&&j<5)) {//pares salvo impares menor a 4
	    			color=DARK_CYAN;
	    		}else {
	    			color=BLANCO;
	    		}
	    		text+=color+" "+" ";
			}//for interior	     	
	    	text +="\n";    	
		}//for exterior
	    System.out.println(text);
	    
	}//griega
	
	
	public void ucrania(){
		String num = "2";
		String nombre = "ucrania";
		byte alto =8;
	    byte ancho =13;	
	    
	    for (int i = 0; i < alto; i++) {
			
	    	for (int j = 0; j < ancho; j++) {
	    		
	    		if(i<4) {//pares salvo impares menor a 4
	    			color=AZUL;
	    		}else{
	    			color=B_AMARILLO;
	    		}
	    		text+=color+" "+" ";
			}//for interior	     	
	    	text +="\n";    	
		}//for exterior
	    System.out.println(text);	 
	}//ucrania
	
	public void francia(){
		String num = "3";
		String nombre = "francia";
		byte alto =8;
	    byte ancho =15;	
	    
	    for (int i = 0; i < alto; i++) {
			
	    	for (int j = 0; j < ancho; j++) {
	    		
	    		if(j<5) {//pares salvo impares menor a 4
	    			color=B_BLUE;
	    		}else if(j<10){
	    			color=BLANCO;
	    		}else {
	    			color=B_ROJO;
	    		}
	    		text+=color+" "+" ";
			}//for interior	     	
	    	text +="\n";    	
		}//for exterior
	    System.out.println(text);	 
	}//francia
	
	public void espanya(){
		String num = "4";
		String nombre = "españa";
		byte alto =8;
	    byte ancho =15;	
	    
	    for (int i = 0; i < alto; i++) {
			
	    	for (int j = 0; j < ancho; j++) {
	    		
	    		if(i<2||i>5) {//pares salvo impares menor a 4
	    			color=B_ROJO;
	    		}else {
	    			color=B_NARANJA;
	    		}
	    		text+=color+" "+" ";
			}//for interior	     	
	    	text +="\n";    	
		}//for exterior
	    System.out.println(text);	 
	}//españa
	public void catalunya(){
		String num = "5";
		String nombre = "cataluña";
		byte alto =9;
	    byte ancho =15;	
	    
	    for (int i = 0; i < alto; i++) {
			
	    	for (int j = 0; j < ancho; j++) {
	    		
	    		if(i%2==0) {//pares salvo impares menor a 4
	    			color=B_ROJO;
	    		}else {
	    			color=B_NARANJA;
	    		}
	    		text+=color+" "+" ";
			}//for interior	     	
	    	text +="\n";    	
		}//for exterior
	    System.out.println(text);	 
	}//catalunya
	public void alemania(){
		String num = "6";
		String nombre = "alemania";
		byte alto =9;
	    byte ancho =15;	
	    
	    for (int i = 0; i < alto; i++) {
			
	    	for (int j = 0; j < ancho; j++) {
	    		
	    		if(i<3) {//pares salvo impares menor a 4
	    			color=B_NEGRO;
	    		}else if(i<6){
	    			color=B_ROJO;
	    		}else {
	    			color=B_NARANJA;
	    		}
	    		text+=color+" "+" ";
			}//for interior	     	
	    	text +="\n";    	
		}//for exterior
	    System.out.println(text);	 
	}//alemania
	
}


