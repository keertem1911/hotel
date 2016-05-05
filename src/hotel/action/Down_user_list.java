package hotel.action;

import hotel.service.DExelService;
import hotel.vo.Customer;

import java.io.IOException;
import java.util.List;
 

import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFCellStyle;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.hssf.util.HSSFColor;

import BasicClass.BasicSupper;

public class Down_user_list extends BasicSupper{
	private DExelService dExelService;
	
	public String dExel(){
		HSSFWorkbook workbook = new HSSFWorkbook();
		HSSFSheet sheet = workbook.createSheet();
		 HSSFRow row = sheet.createRow(0);
		 HSSFCellStyle style = workbook.createCellStyle();
		 style.setFillBackgroundColor(HSSFColor.YELLOW.index2);
		 style.setAlignment(HSSFCellStyle.ALIGN_CENTER);
		 String []head ={"姓名","邮箱","手机"};
		 for(int i =0;i<head.length;++i){
		 HSSFCell c1 = row.createCell(i,HSSFCell.CELL_TYPE_STRING);
		 c1.setCellStyle(style);
		 c1.setCellValue(head[i]);
		 }
		 List<Customer> customers = dExelService.dExel();
		 if(customers!=null){
			 for(int i =0;i<customers.size();++i){
				 row = sheet.createRow(i+1);
				 HSSFCell c1 = row.createCell(0,HSSFCell.CELL_TYPE_STRING);
				 c1.setCellStyle(style);
				 c1.setCellValue(customers.get(i).getUsername());
				  c1= row.createCell(1,HSSFCell.CELL_TYPE_STRING);
				 c1.setCellStyle(style);
				 c1.setCellValue(customers.get(i).getEmail());
				 c1= row.createCell(2,HSSFCell.CELL_TYPE_STRING);
				 c1.setCellStyle(style);
				 c1.setCellValue(customers.get(i).getPhone());
			 }
		 }
		 response.setContentType("application/vnd.ms-excel");
		 response.setHeader("Content-Disposition","attachment;filename=FileName.xls");
		 try {
			 workbook.write(response.getOutputStream());
		} catch (IOException e) {
			 
			e.printStackTrace();
		}
		 return null;
	}

	public void setdExelService(DExelService dExelService) {
		this.dExelService = dExelService;
	}
}
