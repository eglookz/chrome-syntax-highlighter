var L_REGEX = "^.+\.";
var R_REGEX = "$";

// Supported languages
var SUPPORTED_LANGS = new Array();
SUPPORTED_LANGS["cpp"] = "(c|cpp)";
SUPPORTED_LANGS["csharp"] = "cs";
SUPPORTED_LANGS["css"] = "css";
SUPPORTED_LANGS["pascal"] = "(pas|dpr|dfm|dpk)";
SUPPORTED_LANGS["java"] = "java";
SUPPORTED_LANGS["js"] = "(js|json)";
SUPPORTED_LANGS["ruby"] = "rb";
SUPPORTED_LANGS["sql"] = "sql";
SUPPORTED_LANGS["xml"] = "(xml|xsl|xslt|xsd)";

SUPPORTED_LANGS["as3"] = "(as3|as)";
SUPPORTED_LANGS["bash"] = "sh";
SUPPORTED_LANGS["cf"] = "cf";
SUPPORTED_LANGS["diff"] = "(diff|patch)";
SUPPORTED_LANGS["erl"] = "erl";
SUPPORTED_LANGS["groovy"] = "groovy";
SUPPORTED_LANGS["jfx"] = "jfx";
SUPPORTED_LANGS["perl"] = "pl";
SUPPORTED_LANGS["php"] = "php";
SUPPORTED_LANGS["powershell"] = "ps";
SUPPORTED_LANGS["python"] = "py";
SUPPORTED_LANGS["ruby"] = "(rb|ror)";
SUPPORTED_LANGS["scala"] = "scala";
SUPPORTED_LANGS["vb"] = "vb";

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