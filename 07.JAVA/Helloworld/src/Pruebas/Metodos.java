package Pruebas;
import java.util.Scanner;

public class Metodos {
	
	public void ejercicio1 ()
	{
		
		for (int i = 0; i < 5; i++) {
			System.out.print("hola mundo ");
		}
		System.out.println(" ");
		for (int i = 0; i < 5; i++) {
			System.out.println("hola mundo");
		}
		
	}
	///////////////////////////////////////
	
	public void ejercicio2 ()
	{
		/*
		 * num1 && num2 son las entradas
		 * suma es el proceso
		 * el sysout es la salida
		 */
		int num1=20;
		int num2=40;
		int suma = num1 + num2;
		System.out.println(suma);
	}
	////////////////////////////////////////
	public void ejercicio3 ()
	{
		byte num1 = (byte) (Byte.MAX_VALUE +5);
		short num2 = (short) (Short.MAX_VALUE +25) ;
		int num3 = (int) (Integer.MAX_VALUE +10000);
		long num4 = (long) (Long.MAX_VALUE +20000L);
		
		System.out.println("byte " + num1 +"\n short " + num2 +"\n int " + num3+"\n long " + num4);
	}
	////////////////////////////////////////
	public void ejercicio4 ()//pg 168
	{
		final byte NUM1 = (byte) (Byte.MAX_VALUE +5);
		final short NUM2 = (short) (Short.MAX_VALUE +25) ;
		final int NUM3 = (int) (Integer.MAX_VALUE +10000);
		final long NUM4 = (long) (Long.MAX_VALUE +20000L);
		
		System.out.println("byte " + NUM1 +"\n short " + NUM2 +"\n int " + NUM3+"\n long " + NUM4);
	}
	/////////////////////////////////////////////	
	public void ejercicio5 ()//pg 186 
	{
		String nombre = "Quim",apellido_1 = "Pineda", apellido_2 = "Sotés",calle = "falsa",calle_num = "123",codigo_postal = "000000";
		char sexo = 'M';
		System.out.println("Nombre y apellidos: "+ nombre.concat(" "+apellido_1+" "+apellido_2)+ ". \nSexo: "+sexo
		+". \nDirección: "+ "Calle".concat(" "+calle+" "+calle_num+"."+"\nCodigo postal: "+codigo_postal+"."));		
	}
	////////////////////////////////////////////////
	public void ejercicio6()//pg196
	{
		
		byte num_1 = 10;
		byte num_2 = 55;
		byte num_3 = 3;
		byte num_4 = 5;
		byte num_5 = 25;
		float result = 0;
		
		byte[] num_array = {num_1,num_2,num_3,num_4,num_5};
		
		for (int i = 0; i < num_array.length; i++) {
			
			switch (i) {
			case 0: {
				 result = num_array[i] -5;				
				break;
			}
			case 1: {
				 result = num_array[i] + 45;				
				break;
			}
			case 2: {
				result = num_array[i] * (-1);			
				break;
			}
			case 3: {
				result = num_array[i] * 5;				
				break;
			}
			case 4: {
				result = Math.round(num_array[i]/7);
				 System.out.println(result);//no lo redondea bien
				 result = (float)num_array[i]/7;
				 System.out.println(result);
				 result = num_array[i]%4;				 
				break;
			}
			
			}System.out.println(result);
		}	
	}
	
	public void arbolito(){
		String text = "";
		
		Scanner miPunta = new Scanner(System.in);  // escanea la punta del arbol
	    System.out.println("Que ancho debe tener la punta del arbol?");
	    byte ini_star = miPunta.nextByte();
	    
	    Scanner miBase = new Scanner(System.in);
	    if(ini_star%2==0) {//dependiendo de si es par o emite un mensaje u otro, escanea la base de la copa del arbol.
	    System.out.println("Que ancho debe tener base de la copa del arbol?\n Ha de ser PAR y mayor que: "+ini_star);
	    }else {
	    System.out.println("Que ancho debe tener base de la copa del arbol?\n Ha de ser IMPAR y mayor que: "+ini_star);
	    }
	    byte end_star = miBase.nextByte();
	    byte BUCLES = (byte)((end_star-ini_star)/2);
	    
	    Scanner miAncho = new Scanner(System.in);
	    if(ini_star%2==0) {//dependiendo de si es par o emite un mensaje u otro, escanea la base de la copa del arbol.
		    System.out.println("Que ancho debe tener el tronco del arbol?\n Ha de ser PAR y menor que: "+end_star);
		    }else {
		    System.out.println("Que ancho debe tener el tronco del arbol?\n Ha de ser IMPAR y menor que: "+end_star);
		    }
	    byte ancho = miAncho.nextByte();
	    
	    Scanner miLargo = new Scanner(System.in);
	    System.out.println("Que altura debe tener el tronco?");
		byte largo = miLargo.nextByte();
				
		if (ini_star<end_star && end_star>ancho && ((ini_star%2 == 0 && end_star%2 == 0 && ancho%2 == 0)||(ini_star%2 != 0 && end_star%2 != 0&& ancho%2 != 0))) {
		//funcion que hace copas//
			for (int i = 0; i < BUCLES ; i++) {
				for (int j = 0; j < end_star; j++) {
					
					if (j>((end_star-ini_star)/2)-1 && j<end_star-((end_star-ini_star)/2)) {
						text += "*";
					}else {
						text +=" ";
					}				
				}		
				System.out.println(text);
				ini_star +=2;
				text = "";
			}
			//funcion que hace tronco//
			//ejecuta la funcion tantas veces como el largo, al final de esta imprime una linea
			for (int i = 0; i < largo ; i++) {
				
				for (int j = 0; j < end_star; j++) {
					/*la funcion añade espacios siempre que no este a una posicion de la diferencia entre la copa y el ancho 
					atencion que pasa si la copa es mas pequeña que el tronco*/
					if (j>((end_star-ancho)/2)-1 && j<(end_star-(end_star-ancho)/2)) {
						text += "*";
					}else {
						text +=" ";
					}				
				}		
				System.out.println(text);
				text = "";
				
			}
		}else {
			System.out.println("procura que siga los parametros establecidos");
		}
		
	}
	
	public void arbolito_2(){
		boolean interruptor = true;
		byte fase = 0;
		String text = "";
		byte ini_star = 0;
		byte end_star = 0;
		byte BUCLES = 0;
		byte ancho = 0;
		byte largo = 0;
		
		while(interruptor == true) {
			
			switch (fase) {
			case 0: {
				Scanner miPunta = new Scanner(System.in);  // escanea la punta del arbol
			    System.out.println("Que ancho debe tener la punta del arbol?\n No debe ser mayor a 50");
			    ini_star = miPunta.nextByte();
			    if(ini_star>50) {
			    	System.out.println("Porfavor, siga las instrucciones");				 
			    }else {				    		
			    	fase ++;    				    		
			    }	
			    continue;
			}
			case 1: {
				Scanner miBase = new Scanner(System.in);
			    if(ini_star%2==0) {//dependiendo de si es par o emite un mensaje u otro, escanea la base de la copa del arbol.
			    System.out.println("Que ancho debe tener base de la copa del arbol?\n Ha de ser PAR y mayor que: "+ini_star+"\nNo puede ser mayor a 99");
			    }else {
			    System.out.println("Que ancho debe tener base de la copa del arbol?\n Ha de ser IMPAR y mayor que: "+ini_star+"\nNo puede ser mayor a 99");
			    }
			    end_star = miBase.nextByte();
			    if(((ini_star%2==0 && end_star%2==0)||(ini_star%2!=0 && end_star%2!=0))&&end_star<99) {
			    	BUCLES = (byte)((end_star-ini_star)/2);
			    	fase++;
			    }else {
			    	System.out.println("Porfavor, siga las instrucciones");
			    }		
			    continue;
			}
			case 2: {
				Scanner miAncho = new Scanner(System.in);
			    if(ini_star%2==0) {//dependiendo de si es par o emite un mensaje u otro, escanea la base de la copa del arbol.
				    System.out.println("Que ancho debe tener el tronco del arbol?\n Ha de ser PAR y menor que: "+end_star);
				    }else {
				    System.out.println("Que ancho debe tener el tronco del arbol?\n Ha de ser IMPAR y menor que: "+end_star);
				    }
			    
			    if(((ini_star%2==0 && ancho%2==0)||(ini_star%2!=0 && ancho%2!=0))&&ancho<end_star) {
			    	ancho = miAncho.nextByte();
			    	fase++;
			    }else {
			    	System.out.println("Porfavor, siga las instrucciones");
			    }		
			    continue;
			    
			}
			case 3:{
				Scanner miLargo = new Scanner(System.in);
			    System.out.println("Que altura debe tener el tronco?");
				largo = miLargo.nextByte();
				break;
			}
			
			}//switch
			
		}//while
		   
		
		
			
			
			
		
		    
		
		//////////////////////////////////////
		
	    /////////////////////////////////////////
	    
	    /////////////////////////////////////////////
		if (ini_star<end_star && end_star>ancho && ((ini_star%2 == 0 && end_star%2 == 0 && ancho%2 == 0)||(ini_star%2 != 0 && end_star%2 != 0&& ancho%2 != 0))) {
			//funcion que hace copas//
				for (int i = 0; i < BUCLES ; i++) {
					for (int j = 0; j < end_star; j++) {
						
						if (j>((end_star-ini_star)/2)-1 && j<end_star-((end_star-ini_star)/2)) {
							text += "*";
						}else {
							text +=" ";
						}				
					}		
					System.out.println(text);
					ini_star +=2;
					text = "";
				}
				//funcion que hace tronco//
				//ejecuta la funcion tantas veces como el largo, al final de esta imprime una linea
				for (int i = 0; i < largo ; i++) {
					
					for (int j = 0; j < end_star; j++) {
						/*la funcion añade espacios siempre que no este a una posicion de la diferencia entre la copa y el ancho 
						atencion que pasa si la copa es mas pequeña que el tronco*/
						if (j>((end_star-ancho)/2)-1 && j<(end_star-(end_star-ancho)/2)) {
							text += "*";
						}else {
							text +=" ";
						}				
					}		
					System.out.println(text);
					text = "";
					
				}
			}else {
				System.out.println("procura que siga los parametros establecidos");
			}
			
		}
	    ///////////////////////////////////////////////////////
	    
		///////////////////////////////////////////////////////		
		

}


