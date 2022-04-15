package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Customer;
import com.example.demo.repository.CustomerRepository;

@Service
public class CustomerService {
	@Autowired
	CustomerRepository crepo;

	public Customer loginCustomer(String uemail, String upassword) {
		Customer c= crepo.loginCustomer (uemail, upassword);
		if (c != null) {
			System.out.println("true");		
			return c;
		}
		else
		{
			System.out.println("false");
			return null;
		}
			
	}

	public Customer registerCustomer(Customer c) {
		return crepo.save(c);
	}

	public List<Customer> getAllCustomer() {
		return crepo.findAll();
	}

	public Customer forgotPwdCust(String ucontactno) 
	{
		// TODO Auto-generated method stub
		Customer c= crepo.forgotPwdCust(ucontactno);
		if(c!=null)
			 return c;
		else
			 return null;
	}
	public void resetPwd(int uid, String newpwd) {
		// TODO Auto-generated method stub
		crepo.resetPwd(uid,newpwd);
		
	}
//	public void addMoneyToWallet(int uid, float amount) {
//		// TODO Auto-generated method stub
//		crepo.addMoneyToWallet(uid,amount);
//	}
}
