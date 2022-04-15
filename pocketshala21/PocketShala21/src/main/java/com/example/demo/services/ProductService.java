package com.example.demo.services;

import java.io.IOException;
import java.util.Base64;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entities.Product;
import com.example.demo.entities.ProductAudit;
import com.example.demo.repository.CategoryRepository;
import com.example.demo.repository.ProductAuditRepository;
import com.example.demo.repository.ProductRepository;

@Service
public class ProductService {
	@Autowired
	ProductRepository prepo;
	@Autowired
	ProductAuditRepository parepo;
	@Autowired
	CategoryRepository catrepo;

	public List<Product> getAllProducts() {
		return prepo.findAll();
	}

	public List<Product> getproducts(int pid) {
		return prepo.getproducts(pid);
	}

	public Product save(Product p) {
		return prepo.save(p);
	}

	public List<Product> getByCategoryId(int cid) {
		return prepo.getByCategoryId(cid);
	}

	public List<Product> searchbykeyword(String pname, String pdesc) {
		// TODO Auto-generated method stub
		return prepo.searchbykeyword(pname, pdesc);

	}



	public List<Product> get1st() {
		return prepo.get1st();
	}

	public List<Product> get2nd() {
		return prepo.get2nd();
	}

	public List<Product> get3rd() {
		return prepo.get3rd();
	}
	
	public List<Product> get4th() {
		return prepo.get4th();
	}
	
	public List<Product> get5th() {
		return prepo.get5th();
	}
	
	public List<Product> get6th() {
		return prepo.get6th();
	}
	
	public List<Product> get7th() {
		return prepo.get7th();
	}

	public List<ProductAudit> getAllProductAudit() {
		return parepo.getAllprojectaudit();
	}

	/*
	 * public void vaddproduct(String cid, String pname, String pdesc,int
	 * prating,int pqty,float pprice) {
	 * 
	 * Product p=new Product(); //String
	 * fileName=StringUtils.cleanPath(pimg.getOriginalFilename());
	 * 
	 * 
	 * // prepo.vaddproduct(cid,pname,pdesc,pimg,prating,pqty,pprice);
	 * if(fileName.contains("..")) { System.out.println("not valid"); }
	 * 
	 * try { p.setPimg(Base64.getEncoder().encodeToString(pimg.getBytes()));
	 * 
	 * } catch(IOException e) { e.printStackTrace();
	 * 
	 * } p.setPname(pname); p.setPdesc(pdesc); p.setPrating(prating);
	 * p.setPqty(pqty); p.setPprice(pprice);
	 * p.setCat(catrepo.findById(Integer.parseInt(cid)).get());
	 * 
	 * prepo.save(p); }
	 */

	/*
	 * public void addProduct(MultipartFile file,String pname,String pdesc,int
	 * prating,int pqty,float pprice,String cid)throws Exception {
	 * 
	 * Product p=new Product();
	 * 
	 * String fileName=StringUtils.cleanPath(file.getOriginalFilename());
	 * 
	 * 
	 * if(fileName.contains("..")) { System.out.println("not valid"); }
	 * 
	 * try { p.setPimg(Base64.getEncoder().encodeToString(file.getBytes()));
	 * 
	 * } catch(IOException e) { e.printStackTrace();
	 * 
	 * } p.setPname(pname); p.setPdesc(pdesc); p.setPrating(prating);
	 * p.setPqty(pqty); p.setPprice(pprice);
	 * p.setCat(catrepo.findById(Integer.parseInt(cid)).get());
	 * 
	 * prepo.save(p);
	 * 
	 * 
	 * }
	 */
	public void vaddproduct(int cid,  String pname, String pdesc, int prating, int pqty,
			float pprice) {
		prepo.vaddproduct( cid, pname,pdesc, prating, pqty, pprice);
	}
	
	public int cidReturn(String cname,String ctype) {
		return prepo.cidReturn(cname, ctype);
	}
	

	public Product addproduct(Product p) {
		return prepo.save(p);
	}

}
