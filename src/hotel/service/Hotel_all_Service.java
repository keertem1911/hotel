package hotel.service;

import java.util.List;

import hotel.dao.Hotel_all_Dao;
import hotel.vo.Customer;
import hotel.vo.Page_info;
import hotel.vo.Pcityvo;
import hotel.vo.Hotel;
import hotel.vo.user_info;

public class Hotel_all_Service {
	private Hotel_all_Dao hotel_all_Dao;

	public Hotel_all_Dao getHotel_all_Dao() {
		return hotel_all_Dao;
	}

	public void setHotel_all_Dao(Hotel_all_Dao hotel_all_Dao) {
		this.hotel_all_Dao = hotel_all_Dao;
	}
	public int Create_Hotel(Hotel hotel){
		return hotel_all_Dao.Create_Hotel(hotel);
	}
	public List<Pcityvo> Select_pro_city_Infor(String id){
		return hotel_all_Dao.Select_pro_city_Infor(id);
	}
	public user_info login(user_info user){
		return hotel_all_Dao.login(user);
	}
	public List<Customer> SelectCustomer(Customer customer){
		 return  hotel_all_Dao.SelectCustomer(customer);	
	}
	public List<Hotel> SelectHotel(Hotel hotel){
		 return  hotel_all_Dao.SelectHotel(hotel);	
	}
	public int CreateCustomer(Customer customer){
		return hotel_all_Dao.CreateCustomer(customer);
	}
	public List<Customer> Inti_User_List(Page_info page){
		return hotel_all_Dao.Inti_User_List(page);
	}
	public int OperateCustomer(String hander_name,Customer customer){
		return hotel_all_Dao.OperateCustomer(hander_name,customer);
	}
	public int OperateHotel(String hander_name,Hotel hotel){	
		return hotel_all_Dao.OperateHotel(hander_name,hotel);
	}
	public int FindUserListSize(){
		return hotel_all_Dao.FindUserListSize();
	}
	public int batch_delete_user(int [] id){
		return hotel_all_Dao.batch_delete_user(id);
	}
}
