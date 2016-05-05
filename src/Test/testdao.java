package Test;

import org.mybatis.spring.SqlSessionTemplate;

public class testdao {
	private SqlSessionTemplate sql;
	public void test(){
		System.out.println("dao next is");
		System.out.println(sql);
	}
	public SqlSessionTemplate getSql() {
		return sql;
	}
	public void setSql(SqlSessionTemplate sql) {
		this.sql = sql;
	}
	
}
