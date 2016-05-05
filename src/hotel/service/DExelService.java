package hotel.service;

 
import hotel.dao.DExelDao;
import hotel.vo.Customer;

import java.util.List;

public class DExelService {
	private DExelDao dExelDao;
	public List<Customer> dExel(){
		return dExelDao.dExel();
	}
	public void setdExelDao(DExelDao dExelDao) {
		this.dExelDao = dExelDao;
	}
	 
	
}
