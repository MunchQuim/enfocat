package com.example.demo;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@SpringBootApplication
@Controller
public class Ej_207 {//esta clase contiene controladores
	@RequestMapping("/207")
	public String controller() {
		return "ejercicio3.html";//poniendo esto Aun como String te lo devuelve como html
		
	}
	@ResponseBody
	@RequestMapping("/207/patatina")
	public String restcontroller() {//permite devolver JSON y STRINGS
		return "controlador REST";
	}
	

}
