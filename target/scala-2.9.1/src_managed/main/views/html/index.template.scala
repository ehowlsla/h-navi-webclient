
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
object index extends BaseScalaTemplate[play.api.templates.Html,Format[play.api.templates.Html]](play.api.templates.HtmlFormat) with play.api.templates.Template0[play.api.templates.Html] {

    /**/
    def apply():play.api.templates.Html = {
        _display_ {

Seq(format.raw/*1.1*/("""<meta http-equiv="Content-Type" content="text/html; charset=utf-8"> 
<html>
<head>
    
    <title id="page-title">Rest & HDFS Server Connect</title>
	<!-- <script type="text/javascript" src=""""),_display_(Seq(/*6.44*/routes/*6.50*/.Assets.at("/extjs-4.1.0/locale/ext-lang-ko.js"))),format.raw/*6.98*/("""" charset="utf-8"></script> -->
    <link rel="stylesheet" type="text/css" href=""""),_display_(Seq(/*7.51*/routes/*7.57*/.Assets.at("/extjs-4.1.0/resources/css/ext-all.css"))),format.raw/*7.109*/("""">



    <script type="text/javascript" src=""""),_display_(Seq(/*11.42*/routes/*11.48*/.Assets.at("/extjs-4.1.0/ext-all.js"))),format.raw/*11.85*/(""""></script>
	
	
	
 	<script type="text/javascript" src=""""),_display_(Seq(/*15.40*/routes/*15.46*/.Assets.at("/app/model/index/gridmodel.js"))),format.raw/*15.89*/(""""></script>
	
	<script type="text/javascript" src=""""),_display_(Seq(/*17.39*/routes/*17.45*/.Assets.at("/app/store/index/gridstore.js"))),format.raw/*17.88*/(""""></script>  
	<script type="text/javascript" src=""""),_display_(Seq(/*18.39*/routes/*18.45*/.Assets.at("/app/store/index/treestore.js"))),format.raw/*18.88*/(""""></script>  
	
	<script type="text/javascript" src=""""),_display_(Seq(/*20.39*/routes/*20.45*/.Assets.at("/app/view/index/contextmenu.js"))),format.raw/*20.89*/(""""></script>  
	<script type="text/javascript" src=""""),_display_(Seq(/*21.39*/routes/*21.45*/.Assets.at("/app/view/index/gridpanel.js"))),format.raw/*21.87*/(""""></script>   
	<script type="text/javascript" src=""""),_display_(Seq(/*22.39*/routes/*22.45*/.Assets.at("/app/view/index/toolbar.js"))),format.raw/*22.85*/(""""></script>  
	<script type="text/javascript" src=""""),_display_(Seq(/*23.39*/routes/*23.45*/.Assets.at("/app/view/index/treepanel.js"))),format.raw/*23.87*/(""""></script>  
	<script type="text/javascript" src=""""),_display_(Seq(/*24.39*/routes/*24.45*/.Assets.at("/app/view/index/contextmenu.js"))),format.raw/*24.89*/(""""></script>  
	
	<script type="text/javascript" src=""""),_display_(Seq(/*26.39*/routes/*26.45*/.Assets.at("/app/view/index/winfileupload.js"))),format.raw/*26.91*/(""""></script>  
	<script type="text/javascript" src=""""),_display_(Seq(/*27.39*/routes/*27.45*/.Assets.at("/app/view/index/winnewfolder.js"))),format.raw/*27.90*/(""""></script>  
	<script type="text/javascript" src=""""),_display_(Seq(/*28.39*/routes/*28.45*/.Assets.at("/app/view/index/winprogressbar.js"))),format.raw/*28.92*/(""""></script>  
	<script type="text/javascript" src=""""),_display_(Seq(/*29.39*/routes/*29.45*/.Assets.at("/app/view/index/winrename.js"))),format.raw/*29.87*/(""""></script>  
    <script type="text/javascript" src=""""),_display_(Seq(/*30.42*/routes/*30.48*/.Assets.at("/app/view/index/index.js"))),format.raw/*30.86*/(""""></script> 
	<script type="text/javascript" src=""""),_display_(Seq(/*31.39*/routes/*31.45*/.Assets.at("/app/controller/index/index.js"))),format.raw/*31.89*/(""""></script>
	  
</head>
<body>
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
                    DATE: Wed Jun 20 11:43:19 KST 2012
                    SOURCE: /Users/rupy1014/julieExtJS/julieExtJS/app/views/index.scala.html
                    HASH: e9852422378e970cf550792f2195e08fd9f510d0
                    MATRIX: 814->0|1037->193|1051->199|1120->247|1232->329|1246->335|1320->387|1398->434|1413->440|1472->477|1560->534|1575->540|1640->583|1723->635|1738->641|1803->684|1886->736|1901->742|1966->785|2051->839|2066->845|2132->889|2215->941|2230->947|2294->989|2378->1042|2393->1048|2455->1088|2538->1140|2553->1146|2617->1188|2700->1240|2715->1246|2781->1290|2866->1344|2881->1350|2949->1396|3032->1448|3047->1454|3114->1499|3197->1551|3212->1557|3281->1604|3364->1656|3379->1662|3443->1704|3529->1759|3544->1765|3604->1803|3686->1854|3701->1860|3767->1904
                    LINES: 30->1|35->6|35->6|35->6|36->7|36->7|36->7|40->11|40->11|40->11|44->15|44->15|44->15|46->17|46->17|46->17|47->18|47->18|47->18|49->20|49->20|49->20|50->21|50->21|50->21|51->22|51->22|51->22|52->23|52->23|52->23|53->24|53->24|53->24|55->26|55->26|55->26|56->27|56->27|56->27|57->28|57->28|57->28|58->29|58->29|58->29|59->30|59->30|59->30|60->31|60->31|60->31
                    -- GENERATED --
                */
            