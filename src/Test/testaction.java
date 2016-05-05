package Test;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

import javax.servlet.ServletContext;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ModelDriven;

import BasicClass.BasicSupper;
import User_info.User;

public class testaction extends BasicSupper{
		private File upload;
		private String uploadFileName;
		public File getUpload() {
			return upload;
		}
		public void setUpload(File upload) {
			this.upload = upload;
		}
		public String getUploadFileName() {
			return uploadFileName;
		}
		public void setUploadFileName(String uploadFileName) {
			this.uploadFileName = uploadFileName;
		}
		public String test(){
			long timer = System.currentTimeMillis();
			uploadFileName  = timer+uploadFileName.substring(uploadFileName.lastIndexOf("."));
			try {
				String path = ServletActionContext.getServletContext().getRealPath("")+"\\images";
			//	System.out.println(path);
				FileInputStream fis= new FileInputStream(upload);
				FileOutputStream fos=  new FileOutputStream(path+"\\"+uploadFileName);
				int i ;
				byte []b = new byte[1024];
				while((i=fis.read(b))!=-1){
					fos.write(b,0,i);
				}
				fos.flush();
				fos.close();
				response.getWriter().write(uploadFileName);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			return null;
		}
	
}
