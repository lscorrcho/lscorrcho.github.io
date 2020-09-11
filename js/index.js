function cartify() {
	// get the original text
	var userInput = document.getElementById("userinput").value;

	var cartiOutput = userInput;

	// replace line break with linebreak AND SPACE
	cartiOutput = cartiOutput.replace(/(\r\n|\n|\r)/gm," \n");

	var words = cartiOutput.split(' ');
	cartiOutput = "";
	var wordSeperator = "";
	var rand = 1;
	var lastWordSeperated = false;
	for (var i = 0; i < words.length; i++) {
		// probability 2/3 that there will be some sort of non-space separator after a word
		// if the last word has a separator, this one won't
		// unless there's less than 25 words
		if (words.length < 25) {
			lastWordSeperated = false;
		}
		rand = Math.floor(Math.random() * 3);
		if (rand != 1 && !lastWordSeperated) {
			rand = Math.floor(Math.random() * 21);
			if (rand == 0) {
				wordSeperator = " ++** ";
			} else if (rand == 1) {
				wordSeperator = " *! +:) ";
			} else if (rand == 2) {
				wordSeperator = " +* ";
			} else if (rand == 3) {
				wordSeperator = "\! ";
			} else if (rand == 4) {
				wordSeperator = " +:) ";
			} else if (rand == 5) {
				wordSeperator = " **!++ ";
			} else if (rand == 6) {
				wordSeperator = "🦋 ";
			} else if (rand == 7) {
				wordSeperator = " ** - ";
			} else if (rand == 8) {
				wordSeperator = "🖤& * ";
			} else if (rand == 9) {
				wordSeperator = " ..$ ";
			} else if (rand == 10 || rand == 19) {
				wordSeperator = " :( 💕 ";
			} else if (rand == 11) {
				wordSeperator = " *^! ";
			} else if (rand == 12) {
				wordSeperator = " :) xo! ";
			} else if (rand == 13) {
				wordSeperator = " ^ 🦋* !+  ";
			} else if (rand == 14) {
				wordSeperator = " * ok !+";
			} else if (rand == 15) {
				wordSeperator = " ok! ";
			} else if (rand == 16) {
				wordSeperator = " . ";
			} else if (rand == 17) {
				wordSeperator = " 💔 ";
			} else if (rand == 18) {
				wordSeperator = " :( ";
			} else if (rand == 20) {
				wordSeperator = " 💔 +** ";
			}
			lastWordSeperated = true;
		} else { // otherwise it's just a space
			wordSeperator = " ";
			lastWordSeperated = false;
		}
		cartiOutput += words[i] + wordSeperator;
	}

	// look for all the punctuation, and add a space before it
	cartiOutput = cartiOutput.replace(/!/g, ' !')
	cartiOutput = cartiOutput.replace(/\?/g, ' \?');
	cartiOutput = cartiOutput.replace(/,/g, ' ,');
	cartiOutput = cartiOutput.replace(/\./g, ' .');

	// 4 different beginnings
	rand = Math.floor(Math.random() * 4);
	var beginning = "";
	if (rand == 0) {
		beginning = "*  *";
	} else if (rand == 1) {
		beginning = "*+!:) !!";
	} else if (rand == 2) {
		beginning = "🦋🦋🦋";
	} else if (rand == 3) {
		beginning = "+* ok ! 🖤"
	}

	cartiOutput = beginning + "\n" + cartiOutput;

	// 6 different endings
	rand = Math.floor(Math.random() * 6);
	var ending = "\n";
	if (rand == 0) {
		ending += "ok ! * +";
	} else if (rand == 1) {
		ending += "*+ _ SLATT !";
	} else if (rand == 2) {
		ending += "+:)  🍄🍄🍄";
	} else if (rand == 3) {
		ending += "++** +:) love ! Lit **!++";
	} else if (rand == 4) {
		ending += "* SLATT _ !";
	} else if (rand == 5) {
		ending += "++ 🖤#love *";
	}

	cartiOutput += ending;

	// change case (upper/lower) if necessary

	if (document.getElementById('upper').checked) {
  		cartiOutput = cartiOutput.toUpperCase();
	}
	else if (document.getElementById('lower').checked) {
		cartiOutput = cartiOutput.toLowerCase();
	}

	document.getElementById("cartitext").value = cartiOutput;

	document.getElementById("cartitext").style.height = "100px";

	document.getElementById("cartitext").style.height = (document.getElementById("cartitext").scrollHeight) + "px";
}
