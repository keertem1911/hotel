package hotel.dao;

import java.util.HashMap;
import java.util.Map;

import hotel.vo.user_info;

import org.mybatis.spring.SqlSessionTemplate;

public class hotel_dao {
	SqlSessionTemplate sqlTemplate;

	public SqlSessionTemplate getSqlTemplate() {
		return sqlTemplate;
	}
	public user_info login(String username,String password){
		Map<String, String> map = new HashMap<String, String>();
		map.put("username", username);
		map.put("password", password);
		return sqlTemplate.selectOne("hotel.sel1",map);
	}
	public void setSqlTemplate(SqlSessionTemplate sql) {
		this.sqlTemplate = sql;
	}
	
}
