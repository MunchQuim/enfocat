package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.slf4j.LoggerFactory;

import ch.qos.logback.classic.Logger;

@SpringBootApplication
public class MyFirstApiApplication {
	private static final Logger LOGGER = (Logger) LoggerFactory.getLogger(MyFirstApiApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(MyFirstApiApplication.class, args);
		LOGGER.info("Info");
		LOGGER.warn("warning");
		LOGGER.error("soy un error");
		LOGGER.debug("SOY debug");//no se muestra//logging.level.root = debug
		LOGGER.trace("trace");//no se muestra//logging.level.root = trace
		//logging.level.root = off desactivaria los loggers
		
		//logging.file.name=./logs/spring_app_log_file.log muestra el logs en esta carpeta
	}

}
