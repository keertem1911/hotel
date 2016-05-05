package hotel.service;

import hotel.dao.hotel_dao;
import hotel.vo.user_info;

public class hotel_service {
	private hotel_dao dao;
	
	public hotel_dao getDao() {
		return dao;
	}

	public void setDao(hotel_dao dao) {
		this.dao = dao;
	}

	public user_info login(String username,String password){
		return dao.login(username, password);
	}
}
