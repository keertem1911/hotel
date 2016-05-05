package hotel.dao;

import java.util.ArrayList;
import java.util.List;

import hotel.vo.Customer;
import hotel.vo.Page_info;
import hotel.vo.Pcityvo;
import hotel.vo.Hotel;
import hotel.vo.user_info;

import org.mybatis.spring.SqlSessionTemplate;

public class Hotel_all_Dao {
	private SqlSessionTemplate sqlSessionTemplate;

	public SqlSessionTemplate getSqlSessionTemplate() {
		return sqlSessionTemplate;
	}

	public void setSqlSessionTemplate(SqlSessionTemplate sqlSessionTemplate) {
		this.sqlSessionTemplate = sqlSessionTemplate;
	}
	public int Create_Hotel(Hotel hotel){
		return sqlSessionTemplate.insert("hotel.create_hotel",hotel);
	}
	public List<Pcityvo> Select_pro_city_Infor(String id){
		return sqlSessionTemplate.selectList("hotel.select_pro_city_id",id);
	}
	public user_info login(user_info user){
		return sqlSessionTemplate.selectOne("hotel.login",user);
	}
	
	public List<Customer> SelectCustomer(Customer customer){
		return sqlSessionTemplate.selectList("hotel.select_customer",customer);
	}
	public List<Hotel> SelectHotel(Hotel hotel){
		return sqlSessionTemplate.selectList("hotel.select_hotel",hotel);
	}
	public int FindUserListSize(){
		return sqlSessionTemplate.selectOne("hotel.find_user_list_size");
	}
	public int CreateCustomer(Customer customer){
		
		return sqlSessionTemplate.insert("hotel.create_customer",customer);	
	}
	public List<Customer> Inti_User_List(Page_info page){
		return sqlSessionTemplate.selectList("hotel.inti_user_list",page);
	}
	public int OperateCustomer(String hander_name,Customer customer){
		int flag =-1;
		int id= customer.getId();
		switch(hander_name){ 
		case "delete": flag = sqlSessionTemplate.delete("hotel.delete_customer",id);
			break;
		case "insert": flag = sqlSessionTemplate.insert("hotel.insert_customer",customer);
			break;
		case "update":  flag = sqlSessionTemplate.update("hotel.update_customer",customer);
			break;
		}
		return flag;
	}
	public int OperateHotel(String hander_name,Hotel hotel){
		int flag =-1;
		int id= hotel.getId();
		switch(hander_name){ 
		case "delete": flag = sqlSessionTemplate.delete("hotel.delete_hotel",id);
			break;
		case "insert": flag = sqlSessionTemplate.insert("hotel.insert_hotel",hotel);
			break;
		case "update":  flag = sqlSessionTemplate.update("hotel.update_hotel",hotel);
			break;
		}
		return flag;
	}
	public int batch_delete_user(int []id){
		List<Integer> list = new ArrayList<Integer>();
		for(int i=0;i<id.length;++i){
			list.add(i, id[i]);
		}
		return	sqlSessionTemplate.delete("hotel.batch_delete_user",list); 
	}
}

