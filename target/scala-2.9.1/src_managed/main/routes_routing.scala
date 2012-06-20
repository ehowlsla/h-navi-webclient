// @SOURCE:/Users/rupy1014/julieExtJS/julieExtJS/conf/routes
// @HASH:ea7d08720ae09e293ce6a138496a010fce8f4073
// @DATE:Wed Jun 20 11:26:33 KST 2012

import play.core._
import play.core.Router._
import play.core.j._

import play.api.mvc._
import play.libs.F

import Router.queryString

object Routes extends Router.Routes {


// @LINE:6
val controllers_Application_connect0 = Route("GET", PathPattern(List(StaticPart("/connect"))))
                    

// @LINE:7
val controllers_Application_index1 = Route("GET", PathPattern(List(StaticPart("/index"))))
                    

// @LINE:10
val controllers_Assets_at2 = Route("GET", PathPattern(List(StaticPart("/assets/"),DynamicPart("file", """.+"""))))
                    
def documentation = List(("""GET""","""/connect""","""controllers.Application.connect()"""),("""GET""","""/index""","""controllers.Application.index()"""),("""GET""","""/assets/$file<.+>""","""controllers.Assets.at(path:String = "/public", file:String)"""))
             
    
def routes:PartialFunction[RequestHeader,Handler] = {        

// @LINE:6
case controllers_Application_connect0(params) => {
   call { 
        invokeHandler(_root_.controllers.Application.connect(), HandlerDef(this, "controllers.Application", "connect", Nil))
   }
}
                    

// @LINE:7
case controllers_Application_index1(params) => {
   call { 
        invokeHandler(_root_.controllers.Application.index(), HandlerDef(this, "controllers.Application", "index", Nil))
   }
}
                    

// @LINE:10
case controllers_Assets_at2(params) => {
   call(Param[String]("path", Right("/public")), params.fromPath[String]("file", None)) { (path, file) =>
        invokeHandler(_root_.controllers.Assets.at(path, file), HandlerDef(this, "controllers.Assets", "at", Seq(classOf[String], classOf[String])))
   }
}
                    
}
    
}
                