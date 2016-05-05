package Test;

public class testservice {
	private testdao dao;
	public void test(){
		System.out.println("dao next is ");
		dao.test();
	}
	public testdao getDao() {
		return dao;
	}
	public void setDao(testdao dao) {
		this.dao = dao;
	}
	
}
