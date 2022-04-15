package com.example.demo.entities;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;


@Entity
@Table(name = "myorder")
public class MyOrder {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int oid;
	@Column
	private String uname;
	@Column
	private String address;
	@Column
	private String contactno;
	@Column
	private float totalprice;
	@Column
	private int qty;
	@Column
	private String ostatus="Placed";

	/*@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "uid")
	@JsonProperty(access = Access.WRITE_ONLY)
	private Customer cust;*/
@Column
private int uid;
	@ManyToMany(cascade = CascadeType.MERGE)
	@JoinTable(name = "MYORDER_PRODUCT", 
		joinColumns = { @JoinColumn(name = "oid") }, 
		inverseJoinColumns = { @JoinColumn(name = "pid") })
	private List<Product> products = new ArrayList<Product>();

	
	/*public Customer getCust() {
		return cust;
	}

	public void setCust(Customer cust) {
		this.cust = cust;
	}*/
	

	public MyOrder() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getUid() {
		return uid;
	}

	public void setUid(int uid) {
		this.uid = uid;
	}

	public MyOrder(String uname, String address, String contactno, float totalprice, int qty, String ostatus) {
		super();
		this.uname = uname;
		this.address = address;
		this.contactno = contactno;
		this.totalprice = totalprice;
		this.qty = qty;
		this.ostatus = ostatus;
	}

	public MyOrder(String uname, String address, String contactno, float totalprice, int qty, String ostatus, int uid,
			List<Product> products) {
		super();
		this.uname = uname;
		this.address = address;
		this.contactno = contactno;
		this.totalprice = totalprice;
		this.qty = qty;
		this.ostatus = ostatus;
		this.uid = uid;
		this.products = products;
	}

	public int getOid() {
		return oid;
	}

	public void setOid(int oid) {
		this.oid = oid;
	}

	public String getUname() {
		return uname;
	}

	public void setUname(String uname) {
		this.uname = uname;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getContactno() {
		return contactno;
	}

	public void setContactno(String contactno) {
		this.contactno = contactno;
	}

	public float getTotalprice() {
		return totalprice;
	}

	public void setTotalprice(float totalprice) {
		this.totalprice = totalprice;
	}

	public int getQty() {
		return qty;
	}

	public void setQty(int qty) {
		this.qty = qty;
	}

	public String getOstatus() {
		return ostatus;
	}

	public void setOstatus(String ostatus) {
		this.ostatus = ostatus;
	}

	public List<Product> getProducts() {
		return products;
	}

	public void setProducts(List<Product> products) {
		this.products = products;
	}
	
	

}
