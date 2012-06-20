package controllers;

import play.mvc.Action;
import play.mvc.Http.Context;
import play.mvc.Result;

 
public class CORS extends Action.Simple {
	
	@Override
	public Result call(Context arg0) throws Throwable {
		arg0.response().getHeaders().put("Access-Controll-Allow-Origin", "*");
		return delegate.call(arg0);

	}
}
