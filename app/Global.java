

import java.lang.reflect.Method;
import java.util.UUID;
import java.util.concurrent.TimeUnit;

import controllers.CORS;

 

import play.Application;
import play.GlobalSettings;
import play.Logger;
import play.libs.Akka;
import play.mvc.Action;
import play.mvc.Http;
import play.mvc.With;
 
import play.mvc.Http.Request;
import akka.util.Duration;

public class Global extends GlobalSettings {

	//	public static List<MetaInfo> init1;
	public static int REFRESH_INTERVER = 10;

	@With(CORS.class)
	@Override
	public void onStart(Application arg0) {
		play.Logger.debug("Start memcached($PATH, $TIMESTAMP) for retaining FS data every ");
		
 
		
		Akka.system().scheduler().scheduleOnce(
				Duration.create(REFRESH_INTERVER, TimeUnit.SECONDS),
				new Runnable() {
					public void run() {
						Logger.debug("START RUN JOB");
						// TODO Auto-generated method stub
						//refresh the memcached with updated data

					}
				}); 
	}
	//	
 

	//@With(CORS.class)
	@Override
	public Action onRequest(Request arg0, Method arg1) {
		// TODO Auto-generated method stub
		Logger.debug("Request from " + arg0.host() + ":" + arg0.path() + ">>" + arg1.getName());

		return super.onRequest(arg0, arg1);
	}

	public void onStop(Application arg0) {
		// TODO Auto-generated method stub
		play.Logger.debug("Why cannot do anything in this time!");
	};
	
	
	/**
	 * Check the version. If the value of the server is higher than the client return false
	 * @param version
	 * @return true - whether the client version is acceptable
	 */
	private boolean checkVersion(String version){
		return true;
	}


	private boolean isAuthorizedUser(String id){
		//TODO check the hashing value or others, then determine the authorized
		return true;
	}

	private boolean isAuthorizedToken(UUID uuid){
		//TODO check the uuid is in the memcached
		return true;

	}
}
