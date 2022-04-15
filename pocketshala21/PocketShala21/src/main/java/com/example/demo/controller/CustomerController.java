package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Customer;
import com.example.demo.services.CustomerService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CustomerController {
	@Autowired
	CustomerService uservice;

	@GetMapping("/logincustomer")
	public Customer loginCustomer(@RequestParam("uemail") String uemail, @RequestParam("upassword") String upassword) {
		return uservice.loginCustomer(uemail, upassword);
	}

	@PostMapping("/registercustomer")
	public Customer save(@RequestBody Customer c) {
		return uservice.registerCustomer(c);
	}
	
	@GetMapping("/getallcustomer")
	public List<Customer> getAllCustomer(){
		return uservice.getAllCustomer();
	}
	@GetMapping("/forgotpwdcust")
	public Customer forgotPwdCust(@RequestParam("ucontactno") String ucontactno)
	{
		 return uservice.forgotPwdCust(ucontactno);		
	}
	@GetMapping("/resetpwd")
	public void resetPwd(@RequestParam("uid") int uid, @RequestParam("newpwd") String newpwd)
	{
		uservice.resetPwd(uid,newpwd);
	}
//	@GetMapping("/addmoneytowallet")
//	public void addMoneyToWallet(@RequestParam("uid") int uid, @RequestParam("amount") float amount)
//	{
//		uservice.addMoneyToWallet(uid,amount);
//	}
}
