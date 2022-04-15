package com.example.demo.entities;


import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

import javax.persistence.Table;

import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
@Table(name = "product")
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int pid;
	@Column
	private String pname;
	@Column
	private String pdesc;
	// img1 and img2
	@Column
	private int prating;
	@Column
	private int pqty;
	@Column
	private double pprice;
	
	/*
	 * @Lob
	 * 
	 * @Column(columnDefinition="MEDIUMBLOB") private String pimg;
	 */
	

	

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "cid")
	@JsonProperty(access = Access.WRITE_ONLY)
	private Category cat;

	
	
	@ManyToMany(mappedBy = "products", cascade = CascadeType.ALL)
	@JsonProperty(access = Access.WRITE_ONLY)
	private List<MyOrder> myorders = new ArrayList<MyOrder>();

	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Product(int pid, String pname, String pdesc, int prating, int pqty, double pprice, Category cat,
			List<MyOrder> myorders) {
		super();
		this.pid = pid;
		this.pname = pname;
		this.pdesc = pdesc;
		this.prating = prating;
		this.pqty = pqty;
		this.pprice = pprice;
		this.cat = cat;
		this.myorders = myorders;
	}

	public int getPid() {
		return pid;
	}

	public void setPid(int pid) {
		this.pid = pid;
	}

	public String getPname() {
		return pname;
	}

	public void setPname(String pname) {
		this.pname = pname;
	}

	public String getPdesc() {
		return pdesc;
	}

	public void setPdesc(String pdesc) {
		this.pdesc = pdesc;
	}

	public int getPrating() {
		return prating;
	}

	public void setPrating(int prating) {
		this.prating = prating;
	}

	public int getPqty() {
		return pqty;
	}

	public void setPqty(int pqty) {
		this.pqty = pqty;
	}

	public double getPprice() {
		return pprice;
	}

	public void setPprice(double pprice) {
		this.pprice = pprice;
	}

	public Category getCat() {
		return cat;
	}

	public void setCat(Category cat) {
		this.cat = cat;
	}

	public List<MyOrder> getMyorders() {
		return myorders;
	}

	public void setMyorders(List<MyOrder> myorders) {
		this.myorders = myorders;
	}

	@Override
	public String toString() {
		return "Product [pid=" + pid + ", pname=" + pname + ", pdesc=" + pdesc + ", prating=" + prating + ", pqty="
				+ pqty + ", pprice=" + pprice + ", cat=" + cat + ", myorders=" + myorders + "]";
	}

	
	

	

}
