package Test;

import org.omg.CORBA.OBJ_ADAPTER;

public class Stack <T>{
	private Object [] obj = new Object[10];
	private int begin =0;
	private int end =0;
	public boolean isEmpty(){
		return begin==end;
	}
	public int size(){
		return end-begin+1;
	}
	public boolean isFull(){
		return (end-begin+1)==obj.length;
	}
	public void push(T t){
		if(this.isFull()){
			
			Object [] obj1 =new Object[obj.length*2];
			for(int i =0;i<obj.length;++i){
				obj1[i] = obj[i];
			}
			obj = obj1;
		}
		obj[end++]=t;
	}
	public T pop(){
		if(this.isEmpty()){
			return null;
		}else{
			T t = (T)obj[begin];
			
			T old = (T)obj[end-1];
			obj[end] = null;
			for(int i =begin ;i<end;++i){
				obj[i] = obj[i+1];
			}
			 
			return t;
		}
	}
	@Override
	public String toString() {
		StringBuilder builder= new StringBuilder();
		builder.append("[");
		for(int i=begin;i<end;++i){
			if(i==end-1){
				builder.append(obj[i]+"]");
			}
			else{
				builder.append(obj[i]+",");
			}
		}
		return builder.toString();
	} 
	
}
