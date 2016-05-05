package hotel.vo;

public class Page_info {
	private int page_number;//第几页
	private int page_count ;//每页多少个
	private int page_begin;//开始页数
	public Page_info(){
		page_count =7;//默认一页为7页
	}
	public int getPage_number() {
		return page_number;
	}
	public void setPage_number(int page_number) {
		this.page_number = page_number;
	}
	public int getPage_count() {
		return page_count;
	}
	public void setPage_count(int page_count) {
		this.page_count = page_count;
	}
	public int getPage_begin() {
		return page_begin;
	}
	public void setPage_begin(int page_begin) {
		this.page_begin = page_begin;
	}
}
