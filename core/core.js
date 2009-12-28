var L_REGEX = "^.+\.";
var R_REGEX = "$";

// Supported languages
var SUPPORTED_LANGS = new Array();
SUPPORTED_LANGS["cpp"] = "(c|cpp)";
SUPPORTED_LANGS["csharp"] = "cs";
SUPPORTED_LANGS["css"] = "css";
SUPPORTED_LANGS["pascal"] = "(pas|dpr|dfm|dpk)";
SUPPORTED_LANGS["java"] = "java";
SUPPORTED_LANGS["js"] = "js";
SUPPORTED_LANGS["ruby"] = "rb";
SUPPORTED_LANGS["sql"] = "sql";
SUPPORTED_LANGS["xml"] = "(xml|xsl|xslt|xsd)";

function getBrush() {
	result = '';
	
	for(var brush in SUPPORTED_LANGS) {
		
		if( new RegExp(L_REGEX + SUPPORTED_LANGS[brush] + R_REGEX, "i").test(location.href) ) {
			result = brush;
			break;
		}
	}
	
	return result;
}