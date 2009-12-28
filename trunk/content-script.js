if($('head').get(0) == undefined) {
	$('body').append('<link type="text/css" rel="stylesheet" href="' + chrome.extension.getURL("core/syntaxhighlighter/css/shCore.css") + '"/>');
	$('body').append('<link type="text/css" rel="stylesheet" href="' + chrome.extension.getURL("core/syntaxhighlighter/css/shThemeDefault.css") + '"/>');

	var brush = getBrush();

	if(brush != '') {
		$('pre').addClass("brush: " + brush + "; ");
	}

	SyntaxHighlighter.config.showButtons = false;
	SyntaxHighlighter.all();
}