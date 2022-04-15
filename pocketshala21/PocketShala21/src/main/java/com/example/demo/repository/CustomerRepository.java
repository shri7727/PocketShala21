package com.example.demo.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Customer;
@Transactional
@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {
	
	@Query(value="select * from customer where uemail =?1 and upassword=?2",nativeQuery = true )
	public Customer loginCustomer(String uemail, String upassword);
	@Query(value="select * from customer where ucontactno=?1",nativeQuery = true)
	public Customer forgotPwdCust(String ucontactno);
	@Modifying
	@Query(value="update customer set upassword=?2 where uid=?1",nativeQuery = true)
	public void resetPwd(int uid, String newpwd);
//	@Modifying
//	@Query(value="update customer set uwallet=uwallet+?2 where uid=?1",nativeQuery = true)
//	public void addMoneyToWallet(int uid, float amount);
}
