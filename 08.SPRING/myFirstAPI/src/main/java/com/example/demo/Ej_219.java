package com.example.demo;
import java.awt.PageAttributes.MediaType;
import java.net.http.HttpHeaders;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.JdbcTemplateAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
@RequestMapping("/219")
public class Ej_219 {
	
	@RequestMapping("/1")
	public ResponseEntity<String> aleatorio() {//segun un numero aleatorio del 0-1
		byte num = (byte) (Math.random()*2);
		switch (num) {
		case 0:
			return prueba_1(num);//devuelve prueba 1
		case 1:
			return prueba_2(num);//devuelve prueba 1
		default:
			return dfault();
		}
	}//aleatorio
	public ResponseEntity<String> prueba_1(byte num) {
		return new ResponseEntity<String>("prueba 1",HttpStatus.ACCEPTED);//que es acptada
		
	}
	
	public ResponseEntity<String> prueba_2(byte num) {
		return new ResponseEntity<String>("prueba 2",HttpStatus.I_AM_A_TEAPOT);//que es teapot
		
		
	}
	
	public ResponseEntity<String> dfault() {
		return new ResponseEntity<String>("esto es default",HttpStatus.CONFLICT);
		
	}
	
}
