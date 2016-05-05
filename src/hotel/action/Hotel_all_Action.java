package hotel.action;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.print.DocFlavor.STRING;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;

import com.alibaba.fastjson.JSON;
import com.opensymphony.xwork2.ActionContext;

import BasicClass.BasicSupper;
import hotel.service.Hotel_all_Service;
import hotel.vo.Operate_Customer;
import hotel.vo.Page_info;
import hotel.vo.Pcityvo;
import hotel.vo.Response_Static;
import hotel.vo.Hotel;
import hotel.vo.Customer;
import hotel.vo.user_info;

public class Hotel_all_Action extends BasicSupper{
	private Hotel_all_Service hotel_all_Service;
	private user_info user;
	private Hotel hotel;
	private Customer customer;
	private Operate_Customer operate;
	private Page_info page;
	
	public Page_info getPage() {
		return page;
	}

	public void setPage(Page_info page) {
		this.page = page;
	}

	public Operate_Customer getOperate() {
		return operate;
	}

	public void setOperate(Operate_Customer operate) {
		this.operate = operate;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public user_info getUser() {
		return user;
	}

	public void setUser(user_info user) {
		this.user = user;
	}

	public Hotel getHotel() {
		return hotel;
	}

	public void setHotel(Hotel hotel) {
		this.hotel = hotel;
	}

	public Hotel_all_Service getHotel_all_Service() {
		return hotel_all_Service;
	}

	public void setHotel_all_Service(Hotel_all_Service hotel_all_Service) {
		this.hotel_all_Service = hotel_all_Service;
	}

	public String CreateHotel(){
		int i =hotel_all_Service.Create_Hotel(hotel);	
		response.setContentType("text/html;charset=utf-8");
		try {
			Response_Static res = new Response_Static();
			res.setSuccess_data("添加酒店成功");
			res.setError_data("添加酒店失败");
			PrintWriter pw = response.getWriter();
			if(i != 0 ){		res.setId("EC01");
			}
			String json = JSON.toJSONString(res);
			pw.write(json);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
	public String SelectprocityInfor(){// 省份城市查找	
		try {
		String id = request.getParameter("id");
		List<Pcityvo> list1 = hotel_all_Service.Select_pro_city_Infor(id);
		String json = JSON.toJSONString(list1);
		response.setContentType("text/html;charset=utf-8");
		PrintWriter pw = response.getWriter();
		pw.write(json);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	public String  login(){	
		HttpSession s = ServletActionContext.getRequest().getSession();
		String kaptcha = (String) s.getAttribute("code");
		kaptcha = kaptcha.toUpperCase();
		String safecode = user.getSafecode().toUpperCase();
		System.out.println("safe"+safecode+"input"+kaptcha);
		Response_Static res = new Response_Static();
		try {
			PrintWriter pw = response.getWriter();
			if(safecode.equals(kaptcha)){
			user_info user_new  =hotel_all_Service.login(user);
			
			HttpServletResponse respones = ServletActionContext.getResponse();
			
			response.setContentType("text/html;charset=utf-8");
					
					res.setSuccess_data("登陆成功");
					res.setError_data("登陆失败");
					
					if(user_new!= null ){
						res.setId("EC01");
					}
						s.setAttribute("userID","s");
			
			}else{
				res.setId("ER01");
			}
			String json = JSON.toJSONString(res);
				pw.write(json);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	public String Inti_User_List(){
		int begin = (page.getPage_number()-1)*page.getPage_count();
		page.setPage_begin(begin);
		response.setContentType("text/html;charset=utf-8");
		int page_number=0;
		List<Customer> list = hotel_all_Service.Inti_User_List(page);
		int size = hotel_all_Service.FindUserListSize();
		if(size!=0){
		page_number  =size/page.getPage_count();
		if(size%page.getPage_count()!=0){
			page_number+=1;
		}
		}
		try {
			PrintWriter pw = response.getWriter();
			String info = "";
		
			if(list!=null&&page_number!=0){

				Map<String, Object> map = new HashMap<String, Object>();
				map.put("list", list);
				map.put("total_page", size);
				map.put("page_number",page.getPage_number());
				map.put("size",page_number);
				info = JSON.toJSONString(map);
			}
			pw.write(info);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	public String OperateCustomer(){
	 int flag = -1;
		if(customer ==null){
			customer = new Customer();
			customer.setId(operate.getId());
		}
		String hander_name = operate.getOperate();
		response.setContentType("text/html;charset=utf-8");
		List<Customer> customer_list =null;
		switch(hander_name){
		case "delete":	 
		case "insert":	 
		case "update":  flag =	hotel_all_Service.OperateCustomer(hander_name,customer);
			break;
		case "check":	customer_list = hotel_all_Service.SelectCustomer(customer);
			break;
		}
		Response_Static res = new Response_Static();
		res.setSuccess_data(hander_name+"成功");
		res.setError_data(hander_name+"失败");
		String json="";
		if(flag!=-1){
			res.setId("EC01");
			json = JSON.toJSONString(res);
		}else if(customer_list!=null){
			json = JSON.toJSONString(customer_list);
		}
		try {
			
			PrintWriter pw = response.getWriter();
			pw.write(json);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	public String OperateHotels(){
	 
		
		int flag = -1;
		if(hotel ==null){
			hotel = new Hotel();
			hotel.setId(operate.getId());
		}
		String hander_name = operate.getOperate();
		response.setContentType("text/html;charset=utf-8");
		List<Hotel> hotel_list =null;
		switch(hander_name){
		case "delete":	 
		case "insert":	 
		case "update":  flag =	hotel_all_Service.OperateHotel(hander_name,hotel);
			break;
		case "check":	hotel_list = hotel_all_Service.SelectHotel(hotel);
			break;
		}
		Response_Static res = new Response_Static();
		res.setSuccess_data(hander_name+"成功");
		res.setError_data(hander_name+"失败");
		String json="";
		if(flag!=-1){
			res.setId("EC01");
			json = JSON.toJSONString(res);
		}else if(hotel_list!=null){
			json = JSON.toJSONString(hotel_list);
		}
		try {
			
			PrintWriter pw = response.getWriter();
			pw.write(json);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	public String batch_delete_user(){
		String ids = request.getParameter("ids");
		if(ids!=null){
			String [] idstr = ids.split(",");
			int []id=new  int[idstr.length];
			for(int i=0;i<id.length;++i){
				id[i] =Integer.parseInt(idstr[i]);
			}
			int flag = hotel_all_Service.batch_delete_user(id);
			if(flag!=0){
				HashMap<String, String> map = new HashMap<String,String>();
				try {
					map.put("check","EC01");
					response.getWriter().write(JSON.toJSONString(map));
				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		}
		return null;
	}
}
