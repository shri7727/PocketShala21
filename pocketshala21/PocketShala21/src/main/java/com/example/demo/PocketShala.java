package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.web.servlet.MultipartAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
@SpringBootApplication(exclude = {MultipartAutoConfiguration.class})
@ComponentScan(basePackages = "com.example.demo.*")
public class PocketShala {

	public static void main(String[] args) {
		SpringApplication.run(PocketShala.class, args);
	}

}
