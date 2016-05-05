package hotel.vo;

public class Hotel {
	private int id;
	private String h_name;
	private int p_id;
	private int c_id;
	private String street;
	private String image;
	private String introduction;
	private String internet;
	private String park;
	private String equipment;
	private String in_out;
	private String cancel_policy;
	private String cash;
	private String pet;
	private String special_items;
	private String catering;
	private String shopping;
	private String entertainment;
	private String subway_station;
	private String view_spot;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getH_name() {
		return h_name;
	}
	public void setH_name(String h_name) {
		this.h_name = h_name;
	}
	
	public int getP_id() {
		return p_id;
	}
	public void setP_id(int p_id) {
		this.p_id = p_id;
	}
	public int getC_id() {
		return c_id;
	}
	public void setC_id(int c_id) {
		this.c_id = c_id;
	}
	public String getStreet() {
		return street;
	}
	public void setStreet(String street) {
		this.street = street;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getIntroduction() {
		return introduction;
	}
	public void setIntroduction(String introduction) {
		this.introduction = introduction;
	}
	public String getInternet() {
		return internet;
	}
	public void setInternet(String internet) {
		this.internet = internet;
	}
	public String getPark() {
		return park;
	}
	public void setPark(String park) {
		this.park = park;
	}
	public String getEquipment() {
		return equipment;
	}
	public void setEquipment(String equipment) {
		this.equipment = equipment;
	}
	public String getIn_out() {
		return in_out;
	}
	public void setIn_out(String in_out) {
		this.in_out = in_out;
	}
	public String getCancel_policy() {
		return cancel_policy;
	}
	public void setCancel_policy(String cancel_policy) {
		this.cancel_policy = cancel_policy;
	}
	public String getCash() {
		return cash;
	}
	public void setCash(String cash) {
		this.cash = cash;
	}
	public String getPet() {
		return pet;
	}
	public void setPet(String pet) {
		this.pet = pet;
	}
	public String getSpecial_items() {
		return special_items;
	}
	public void setSpecial_items(String special_items) {
		this.special_items = special_items;
	}
	public String getCatering() {
		return catering;
	}
	public void setCatering(String catering) {
		this.catering = catering;
	}
	public String getShopping() {
		return shopping;
	}
	public void setShopping(String shopping) {
		this.shopping = shopping;
	}
	public String getEntertainment() {
		return entertainment;
	}
	public void setEntertainment(String entertainment) {
		this.entertainment = entertainment;
	}
	public String getSubway_station() {
		return subway_station;
	}
	public void setSubway_station(String subway_station) {
		this.subway_station = subway_station;
	}
	public String getView_spot() {
		return view_spot;
	}
	public void setView_spot(String view_spot) {
		this.view_spot = view_spot;
	}
	@Override
	public String toString() {
		return "create_hotelvo [id=" + id + ", h_name=" + h_name + ", p_id="
				+ p_id + ", c_id=" + c_id + ", street=" + street + ", image="
				+ image + ", introduction=" + introduction + ", internet="
				+ internet + ", park=" + park + ", equipment=" + equipment
				+ ", in_out=" + in_out + ", cancel_policy=" + cancel_policy
				+ ", cash=" + cash + ", pet=" + pet + ", special_items="
				+ special_items + ", catering=" + catering + ", shopping="
				+ shopping + ", entertainment=" + entertainment
				+ ", subway_station=" + subway_station + ", view_spot="
				+ view_spot + "]";
	}
	
	
	
	
}
