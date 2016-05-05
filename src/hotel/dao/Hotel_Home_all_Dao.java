package hotel.dao;

import hotel.vo.Pcityvo;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;

public class Hotel_Home_all_Dao {
	private SqlSessionTemplate  sqlTemplate;

	public SqlSessionTemplate getSqlTemplate() {
		return sqlTemplate;
	}

	public void setSqlTemplate(SqlSessionTemplate sqlTemplate) {
		this.sqlTemplate = sqlTemplate;
	}
	public List<Pcityvo> Add_hot_menu_ul(){
		return sqlTemplate.selectList("hotel.add_hot_menu_ul");
	}
}
