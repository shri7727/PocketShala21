package com.example.demo.repository;

import java.util.List;
import javax.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entities.Customer;
import com.example.demo.entities.Product;

@Repository
@Transactional
public interface ProductRepository extends JpaRepository<Product, Integer> {
	@Query(value = "select * from product where cid=?1", nativeQuery = true)
	public List<Product> getByCategoryId(int cid);

	@Query(value = "select * from product where pname like (%?1%) or pdesc like (%?1%)", nativeQuery = true)
	public List<Product> searchbykeyword(String pname, String string);

	@Query(value = "select * from product where cid in(select cid from category where ctype='1st')", nativeQuery = true)
	public List<Product> get1st();

	@Query(value = "select * from product where cid in(select cid from category where ctype='2nd')", nativeQuery = true)
	public List<Product> get2nd();

	@Query(value = "select * from product where cid in(select cid from category where ctype='3rd')", nativeQuery = true)
	public List<Product> get3rd();
	
	@Query(value = "select * from product where cid in(select cid from category where ctype='4th')", nativeQuery = true)
	public List<Product> get4th();
	
	@Query(value = "select * from product where cid in(select cid from category where ctype='5th')", nativeQuery = true)
	public List<Product> get5th();
	
	@Query(value = "select * from product where cid in(select cid from category where ctype='6th')", nativeQuery = true)
	public List<Product> get6th();

	@Query(value = "select * from product where cid in(select cid from category where ctype='7th')", nativeQuery = true)
	public List<Product> get7th();
	
	
	@Modifying
	@Query(value = "delete from productaudit where pid=?1", nativeQuery = true)
	public void productAudit(int pid);

	@Modifying
	@Query(value = "update product set papprove='true',pprice=pprice*0.1 where pid=?1", nativeQuery = true)
	public void productadd(int pid);

	@Modifying
	@Query(value = "delete from product where pid=?1", nativeQuery = true)
	public void productdel(int pid);

	
	  @Query(value = "select cid from category where cname=?1 AND ctype=?2",
	  nativeQuery = true) public int cidReturn(String cname, String ctype);
	 

	
	  @Modifying
	  
	  @Query(value ="insert into product(cid,pname,pdesc,prating,pqty,pprice)	values(?1,?2,?3,?4,?5,?6)"
	  , nativeQuery = true) public void vaddproduct(int cid, String pname, String
	  pdesc,int prating,int pqty,float pprice);
	 
	//@Query(value = "select * from product where pqty=0 AND vid=?1", nativeQuery = true)
	//public List<Product> viewOutOfStock(int vid);

	@Query(value = "select * from product where pid=?1", nativeQuery = true)
	public List<Product> getproducts(int pid);

	
	

}
