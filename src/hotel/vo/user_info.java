package hotel.vo;

public class user_info {
	private String username;
	private String password;
	private String id;
	private String safecode;
	
	public String getSafecode() {
		return safecode;
	}
	public void setSafecode(String safecode) {
		this.safecode = safecode;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	@Override
	public String toString() {
		return "user_info [username=" + username + ", password=" + password
				+ ", id=" + id + "]";
	}
	
}
