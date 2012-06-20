
package views.html

import play.templates._
import play.templates.TemplateMagic._

import play.api.templates._
import play.api.templates.PlayMagic._
import models._
import controllers._
import java.lang._
import java.util._
import scala.collection.JavaConversions._
import scala.collection.JavaConverters._
import play.api.i18n._
import play.api.templates.PlayMagicForJava._
import play.mvc._
import play.data._
import play.api.data.Field
import com.avaje.ebean._
import play.mvc.Http.Context.Implicit._
import views.html._
/**/
object connect extends BaseScalaTemplate[play.api.templates.Html,Format[play.api.templates.Html]](play.api.templates.HtmlFormat) with play.api.templates.Template0[play.api.templates.Html] {

    /**/
    def apply():play.api.templates.Html = {
        _display_ {

Seq(format.raw/*1.1*/("""<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title id="page-title">Rest & HDFS Server Connect</title>

    <link rel="stylesheet" type="text/css" href=""""),_display_(Seq(/*6.51*/routes/*6.57*/.Assets.at("/extjs-4.1.0/resources/css/ext-all.css"))),format.raw/*6.109*/("""">



    <script type="text/javascript" src=""""),_display_(Seq(/*10.42*/routes/*10.48*/.Assets.at("/extjs-4.1.0/ext-all.js"))),format.raw/*10.85*/(""""></script>
	
 	<script type="text/javascript" src=""""),_display_(Seq(/*12.40*/routes/*12.46*/.Assets.at("/app/controller/connect/connect.js"))),format.raw/*12.94*/(""""></script>  
</head>
<body bgcolor="#fffafa">
</body>
</html>
"""))}
    }
    
    def render() = apply()
    
    def f:(() => play.api.templates.Html) = () => apply()
    
    def ref = this

}
                /*
                    -- GENERATED --
                    DATE: Wed Jun 20 05:02:26 KST 2012
                    SOURCE: /Users/rupy1014/julieExtJS/julieExtJS/app/views/connect.scala.html
                    HASH: 717f7cde73505b3f91204f19d57a61d3b834a911
                    MATRIX: 816->0|1045->199|1059->205|1133->257|1211->304|1226->310|1285->347|1369->400|1384->406|1454->454
                    LINES: 30->1|35->6|35->6|35->6|39->10|39->10|39->10|41->12|41->12|41->12
                    -- GENERATED --
                */
            