package hotel.action;

import hotel.service.Hotel_Home_all_Service;
import hotel.vo.Pcityvo;

import java.util.List;

import BasicClass.BasicSupper;

public class Hotel_Home_all_Action extends BasicSupper{
	private Hotel_Home_all_Service   hotel_Home_all_Service;

	
	public Hotel_Home_all_Service getHotel_Home_all_Service() {
		return hotel_Home_all_Service;
	}


	public void setHotel_Home_all_Service(
			Hotel_Home_all_Service hotel_Home_all_Service) {
		this.hotel_Home_all_Service = hotel_Home_all_Service;
	}


	public String Add_hot_menu_ul(){
		List<Pcityvo> city = hotel_Home_all_Service.Add_hot_menu_ul();
		return null;
	}
}
