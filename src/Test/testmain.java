package Test;

public class testmain {
	public static void main(String[] args) {
		Stack<String> stack = new Stack<String>();
		for(int i =0;i<20;++i){
			stack.push(i+"ss");
		}
		byte b= 1-129;
		System.out.println(b);
		int n=120;
		for(int i=2;i<n/2;++i){
			if(n%i==0){
				break;
			}
		}
	}
}
