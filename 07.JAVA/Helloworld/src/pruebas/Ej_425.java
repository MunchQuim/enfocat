package pruebas;

public class Ej_425 {
	 public static void main(String[]args) {
		 /////volvo//////////////////////////////////
		 Ej_425_coches volvo = new Ej_425_coches();
		 volvo.setMax_fuel(50);
		 volvo.setMax_speed(240);
		 volvo.setModel("volvo");
		 System.out.println(
				 "nombre: "+ volvo.getModel()+"\n"+
				 "max fuel: "+volvo.getMax_fuel()+"\n"+
				 "max speed: " +volvo.getMax_speed()+"\n");
		 /////cactus//////////////////////////////////
		 Ej_425_coches cactus = new Ej_425_coches();
		 cactus.setMax_fuel(40);
		 cactus.setMax_speed(320);
		 cactus.setModel("cactus");
		 System.out.println(
				 "nombre: "+ cactus.getModel()+"\n"+
				 "max fuel: "+cactus.getMax_fuel()+"\n"+
				 "max speed: " +cactus.getMax_speed()+"\n");
		 /////Ibiza///////////////////////////////
		 Ej_425_coches s_ibiza = new Ej_425_coches();
		 s_ibiza.setMax_fuel(45);
		 s_ibiza.setMax_speed(280);
		 s_ibiza.setModel("Seat ibiza");
		 System.out.println(
				 "nombre: "+ s_ibiza.getModel()+"\n"+
				 "max fuel: "+s_ibiza.getMax_fuel()+"\n"+
				 "max speed: " +s_ibiza.getMax_speed()+"\n");
		} 
}
