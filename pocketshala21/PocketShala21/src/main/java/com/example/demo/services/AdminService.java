package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Admin;
import com.example.demo.repository.AdminRepository;

@Service
public class AdminService {

	@Autowired
	AdminRepository arepo;

	public Admin loginAdmin(int adminid, String apassword) {
		Admin a= arepo.loginAdmin(adminid, apassword);
		if (a != null)
		{
			System.out.println("true");		
			return a;
		}
		else
		{
			System.out.println("false");
			return null;
		}
	}
}
