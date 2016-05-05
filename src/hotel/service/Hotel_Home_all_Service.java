package hotel.service;

import java.util.List;

import hotel.dao.Hotel_Home_all_Dao;
import hotel.vo.Pcityvo;

public class Hotel_Home_all_Service {
	private Hotel_Home_all_Dao hotel_Home_all_Dao;

	public Hotel_Home_all_Dao getHotel_Home_all_Dao() {
		return hotel_Home_all_Dao;
	}

	public void setHotel_Home_all_Dao(Hotel_Home_all_Dao hotel_Home_all_Dao) {
		this.hotel_Home_all_Dao = hotel_Home_all_Dao;
	}
	public List<Pcityvo> Add_hot_menu_ul(){
		return hotel_Home_all_Dao.Add_hot_menu_ul();
	}
}
