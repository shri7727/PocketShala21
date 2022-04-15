package com.example.demo.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entities.Product;
import com.example.demo.entities.ProductAudit;
import com.example.demo.services.ProductService;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.ObjectMapper;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ProductController {
	
	@Autowired
	ProductService pservice;
	
	@GetMapping("/getallproducts")
	public List<Product> getAllProducts() {
		return pservice.getAllProducts();
		
	}
	@GetMapping("/getallproductaudit")
	public List<ProductAudit> getAllProductAudit() {
		return pservice.getAllProductAudit();
	}

	/*
	 * @PostMapping("/addproduct") public Product save(@RequestBody Product p) {
	 * return pservice.save(p); }
	 */
	@GetMapping("/getbyid")
	public List<Product> getByCategoryId(@RequestParam("cid") int cid) {
		return pservice.getByCategoryId(cid);
	}
	@PostMapping("/searchbykeyword")
	public List<Product> searchbykeyword(@RequestBody Product p) {
		return pservice.searchbykeyword(p.getPname(), p.getPdesc());
	}
	@GetMapping("/get1st") // class1
	public List<Product> get1st() {
		return pservice.get1st();
	}

	@GetMapping("/get3rd") // class2
	public List<Product> get3rd() {
		return pservice.get3rd();
	}

	@GetMapping("/get2nd") // class3
	public List<Product> get2nd() {
		return pservice.get2nd();
	}

	@GetMapping("/get4th") // class4
	public List<Product> get4th() {
		return pservice.get4th();
	}

	
	  @GetMapping("/get5th")//class5 
	  public List<Product> get5th() { return
	  pservice.get5th(); }
	  
	  @GetMapping("/get6th")//class6
	  public List<Product> get6th() { return
	  pservice.get6th(); }
	  
	  @GetMapping("/get7th")//class7
	  public List<Product> get7th() { return
	  pservice.get7th(); }
	 
//	@GetMapping("/viewbyvid")
//	public List<Product> getByVid(@RequestParam("vid")int vid){
//		return pservice.getByVid(vid);
//	}
	/*
	 * @GetMapping("/productstatusaction") public void
	 * productStatusAction(@RequestParam("pid") int pid,@RequestParam("pprice")
	 * float pprice,@RequestParam("pqty") int pqty,@RequestParam("action") String
	 * action) { pservice.productStatusAction(pid,pprice,pqty,action); }
	 */
	
	  String product;
	  
	  @PostMapping("/vaddproduct") public void vaddproduct(@RequestParam("cname")
	  String cname,@RequestParam("ctype")String ctype, @RequestParam("pname")
	  String pname, @RequestParam("pdesc") String pdesc,
	  @RequestParam("prating") int
	  prating, @RequestParam("pqty") int pqty,
	  
	  @RequestParam("pprice") float pprice ){ int cid = pservice.cidReturn(cname,
	  ctype); try { //Product product=new Product();
	  
	  pservice.vaddproduct( cid, pname,pdesc, prating, pqty, pprice);
	  
	  
	  }catch(Exception e) { e.printStackTrace(); }
	  
	  
	  }
	 
	 
	/*
	 * @PostMapping("/vaddproduct") public Boolean saveProduct(
	 * 
	 * @RequestParam("file") MultipartFile file,
	 * 
	 * @RequestParam("pname") String pname,
	 * 
	 * @RequestParam("pdesc") String pdesc,
	 * 
	 * @RequestParam("prating") int prating,
	 * 
	 * @RequestParam("pqty") int pqty,
	 * 
	 * @RequestParam("pprice") int pprice,
	 * 
	 * @RequestParam("cid") String cid) throws Exception
	 * 
	 * {
	 * 
	 * pservice.addProduct(file,pname,pdesc,prating,pqty,pprice,cid); return true;
	 * 
	 * }
	 */
	
	  
	  /*String message="";
		try {
			ProductDto productDetails = new ObjectMapper().readValue(productDto, ProductDto.class);
			
			if(image!=null) {
				image.transferTo(new File(location, image.getOriginalFilename()));
				productDetails.getProduct().setImageName(image.getOriginalFilename());
			}

			//System.out.println("Product Details: "+productDetails);
			message = prodService.addProduct(productDetails);
		} catch (Exception e) {
			message="error";
			e.printStackTrace();
		}
		return new ResponseEntity<>(new ResponseDto<>("success",message),HttpStatus.CREATED);
	}*/
	  
	
	  @PostMapping("/addrproduct") 
	  public Product save(@RequestBody Product p ){ 
		  return pservice.addproduct(p);
	  }
	 
}
