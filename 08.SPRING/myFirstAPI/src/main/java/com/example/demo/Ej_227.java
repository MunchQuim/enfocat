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
@RequestMapping("/227")
public class Ej_227 {
	@ResponseStatus(HttpStatus.I_AM_A_TEAPOT)
	@RequestMapping("/1")
	public String prueba(){
		return "you can see me";
	}
}
