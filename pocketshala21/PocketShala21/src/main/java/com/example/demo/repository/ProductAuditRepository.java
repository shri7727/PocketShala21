package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.ProductAudit;



@Repository
public interface ProductAuditRepository extends JpaRepository<ProductAudit, Integer> {
	
	@Query(value="select * from productaudit order by ptime desc",nativeQuery = true)
	public List<ProductAudit> getAllprojectaudit();
}
