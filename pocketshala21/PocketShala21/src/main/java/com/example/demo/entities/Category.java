package com.example.demo.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "category")
public class Category {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int cid;
	@Column
	private String cname;
	@Column
	private String ctype;

	@OneToMany(mappedBy = "cat", cascade = CascadeType.ALL)
	private List<Product> products = new ArrayList<Product>();

	public Category() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Category(String cname, String ctype) {
		super();
		this.cname = cname;
		this.ctype = ctype;
	}

	public Category(String cname, String ctype, List<Product> products) {
		super();
		this.cname = cname;
		this.ctype = ctype;
		this.products = products;
	}

	public int getCid() {
		return cid;
	}

	public void setCid(int cid) {
		this.cid = cid;
	}

	public String getCname() {
		return cname;
	}

	public void setCname(String cname) {
		this.cname = cname;
	}

	public String getCtype() {
		return ctype;
	}

	public void setCtype(String ctype) {
		this.ctype = ctype;
	}

	public List<Product> getProducts() {
		return products;
	}

	public void setProducts(List<Product> products) {
		this.products = products;
		for(Product p : products)
			p.setCat(this);
	}
	
	

}
