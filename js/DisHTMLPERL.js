<SCRIPT>

function htmlphp(){
	var input = document.htphp.input.value;
	output = "print  \"";
	for (var c = 0; c < input.length; c++){
		if ((input.charAt(c) == "\n" || input.charAt(c) == "\r")){
			output += "\\ n\";";
			if (c != input.length - 1) output +="\n print  \"";
			c++;
			}
                else {
			if (input.charAt(c) == "\\ n\";") 
				output += "\\\"";
				if (input.charAt(c) == "\"") {
				output += "\\\"";
				}
			else {
				if (input.charAt(c) == "\\"){
					output += "\\\\";
					}

				else {
					output += input.charAt(c);
					if (c == input.length -1) output += "\\ n\";";	
					}
				}
			}
		
		}

info="\ \n"

info2="\n print  \"\"; \n" +

"\ ";

	document.htphp.output.value =info+output+info2;
}

</SCRIPT>