package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Integer> {
	@Query(value = "select * from admin where adminid =?1 and apassword=?2", nativeQuery = true)
	public Admin loginAdmin(int adminid, String apassword);
}
