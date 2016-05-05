package hotel.dao;

import hotel.vo.Customer;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;

public class DExelDao {
	private SqlSessionTemplate sqlSessionTemplate;
	
	public void setSqlSessionTemplate(SqlSessionTemplate sqlSessionTemplate) {
		this.sqlSessionTemplate = sqlSessionTemplate;
	}

	public List<Customer> dExel(){
		Customer cu = new Customer();
		return sqlSessionTemplate.selectList("hotel.select_customer",cu);
	}
}
