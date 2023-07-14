package com.example.demo;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

@SpringBootApplication
@RequestMapping("/218")
@RestController
public class Ej_218 {
	@RequestMapping("/1")
	public TextToJson prueba() {
		return new TextToJson("esto ahora es un JSON");		
	}
	@RequestMapping(path ="/2",produces="application/json")
	public String prueba_2(){
		return "{\"page\": \"ejercicio3.html\"}";
	}
	@RequestMapping("/3")
	public ObjectNode prueba_3() {
		ObjectMapper mapper = new ObjectMapper();
		ObjectNode objectNode = mapper.createObjectNode();
		objectNode.put("key","value");
		objectNode.put("foo","bar");
		objectNode.put("number","43");
		
		return objectNode;		
	}
	//faltaria el tipo response entity
}
