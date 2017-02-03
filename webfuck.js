var WebFuckDo = function(source) {
	var m = [];
	var b = "";
	var i = 0;
	var j = 0;
	var s = 0;
	var c = false;

	source = source.replace(/(\n|\s)/gi, "");

	var tokens = {
		">": _ => i++,
		"<": _ => i--,
		"+": _ => m[i] = (m[i] || 0) + 1,
		"-": _ => m[i] = (m[i] || 0) - 1,
		".": _ => b += String.fromCharCode(m[i]),
		"[": _ => s = j,
		"]": _ => m[i] > 0 ? j = s : null
	}

	for (j = 0; j < source.length; j++) {
		if (source[j] == "/") {
			c = !c;
		} else if (!c) {
			(tokens[source[j]] || function() {
				throw "Unknow token " + source[j];
			})();
		}
	}

	eval(b);
};

(function() {
	var scripts = document.getElementsByTagName("script");

	for (var i = 0; i < scripts.length; i++) {
		if (scripts[i].type == "text/webfuck") WebFuckDo(scripts[i].innerText);
	}
})();