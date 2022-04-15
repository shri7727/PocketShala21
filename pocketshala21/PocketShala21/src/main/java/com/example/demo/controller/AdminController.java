package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Admin;
import com.example.demo.services.AdminService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AdminController {
	@Autowired
	AdminService aservice;

	@GetMapping("/loginadmin")
	public Admin loginAdmin(@RequestParam("adminid") int adminid, @RequestParam("apassword") String apassword) {
		return aservice.loginAdmin(adminid, apassword);
	}
}
