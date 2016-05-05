package hotel.interceptor;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;

import com.alibaba.fastjson.JSON;
import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.MethodFilterInterceptor;

public class Login_Interceptor extends MethodFilterInterceptor{

	@Override
	protected String doIntercept(ActionInvocation arg0) throws Exception {
		 Map<String, Object> session = arg0.getInvocationContext().getSession();
		HttpServletResponse response = ServletActionContext.getResponse();
		System.out.println("--------------");
		if(session.get("userID") ==null){
			Map<String, Object> map = new HashMap<String,Object>();
			map.put("check", "ER01");
			response.getWriter().write(JSON.toJSONString(map));
			System.out.println("--------");
			return null;
		}
		return arg0.invoke();
	}
	
}
