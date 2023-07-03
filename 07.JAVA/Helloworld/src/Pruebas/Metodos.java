package Pruebas;

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
	
}

