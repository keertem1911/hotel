package hotel.action;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;

public class UploadAction {
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

	public String upload(){
		long timer = System.currentTimeMillis();
		String path = ServletActionContext.getServletContext().getRealPath("")+"\\images\\";
		String filename = timer+uploadFileName.substring(uploadFileName.lastIndexOf("."));
		try {
			FileInputStream fis = new FileInputStream(upload);
			FileOutputStream fos = new FileOutputStream(path+filename);
			int i =0;
			byte []b = new byte[1024];
			while((i=fis.read(b))!=-1){
				fos.write(b,0,i);
			}
			fos.flush();
			fos.close();
			HttpServletResponse respones = ServletActionContext.getResponse();
			PrintWriter pw = respones.getWriter();
			String inputstring = "";
			if(filename!=null)
			{
				inputstring = filename;
			}
			pw.write(inputstring);
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
}
