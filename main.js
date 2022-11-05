document.getElementById("generatePrompt").disabled = true;

function myFunction() {
	// Extracting user's input of the 'n' gram
	var nInput = document.getElementById("myNumber").value;
	var nNumber = parseInt(nInput);

	// Conditioning the Markov Chain to a maximum of n=4 to not overload the function
	if (nNumber >= 0 && nNumber <= 4) {
		// 1. Enable generate button
		document.getElementById("generatePrompt").disabled = false;

		// 2. Setting up Markov Chain with Rita.js 
		markov = RiTa.markov(nNumber);
		
		// 3. Load data to add to Markov Chain
		let book1, book2, book3, book4, book5, book6, book7, book8, book9, book10, book11, book12, book13, book14, book15,
			book16, book17, book18, book19, book20, book21, book22, book23, book24, book25, book26, 
			collection1, collection2, collection3, collection4, collection5, collection6, collection7, collection8, collection9, 
			collection10, collection11, collection12, collection13, collection14, collection15, collection16;
		Promise.all([
			fetch("./TXT/book1.txt").then((res) => res.text()).then((text) => book1 = text), fetch("./TXT/book2.txt").then((res) => res.text()).then((text) => book2 = text),
			fetch("./TXT/book3.txt").then((res) => res.text()).then((text) => book3 = text), fetch("./TXT/book4.txt").then((res) => res.text()).then((text) => book4 = text),
			fetch("./TXT/book5.txt").then((res) => res.text()).then((text) => book5 = text), fetch("./TXT/book6.txt").then((res) => res.text()).then((text) => book6 = text),
			fetch("./TXT/book7.txt").then((res) => res.text()).then((text) => book7 = text), fetch("./TXT/book8.txt").then((res) => res.text()).then((text) => book8 = text),
			fetch("./TXT/book9.txt").then((res) => res.text()).then((text) => book9 = text), fetch("./TXT/book10.txt").then((res) => res.text()).then((text) => book10 = text),
			fetch("./TXT/book11.txt").then((res) => res.text()).then((text) => book11 = text), fetch("./TXT/book12.txt").then((res) => res.text()).then((text) => book12 = text),
			fetch("./TXT/book13.txt").then((res) => res.text()).then((text) => book13 = text), fetch("./TXT/book14.txt").then((res) => res.text()).then((text) => book14 = text),
			fetch("./TXT/book15.txt").then((res) => res.text()).then((text) => book15 = text), fetch("./TXT/book16.txt").then((res) => res.text()).then((text) => book16 = text),
			fetch("./TXT/book17.txt").then((res) => res.text()).then((text) => book17 = text), fetch("./TXT/book18.txt").then((res) => res.text()).then((text) => book18 = text),
			fetch("./TXT/book19.txt").then((res) => res.text()).then((text) => book19 = text), fetch("./TXT/book20.txt").then((res) => res.text()).then((text) => book20 = text),
			fetch("./TXT/book21.txt").then((res) => res.text()).then((text) => book21 = text), fetch("./TXT/book22.txt").then((res) => res.text()).then((text) => book22 = text),
			fetch("./TXT/book23.txt").then((res) => res.text()).then((text) => book23 = text), fetch("./TXT/book24.txt").then((res) => res.text()).then((text) => book24 = text),
			fetch("./TXT/book25.txt").then((res) => res.text()).then((text) => book25 = text), fetch("./TXT/book25.txt").then((res) => res.text()).then((text) => book26 = text),

			fetch("./TXT/collection1.txt").then((res) => res.text()).then((text) => collection1 = text), fetch("./TXT/collection2.txt").then((res) => res.text()).then((text) => collection2 = text),
			fetch("./TXT/collection3.txt").then((res) => res.text()).then((text) => collection3 = text), fetch("./TXT/collection4.txt").then((res) => res.text()).then((text) => collection4 = text),
			fetch("./TXT/collection5.txt").then((res) => res.text()).then((text) => collection5 = text), fetch("./TXT/collection6.txt").then((res) => res.text()).then((text) => collection6 = text),
			fetch("./TXT/collection7.txt").then((res) => res.text()).then((text) => collection7 = text), fetch("./TXT/collection8.txt").then((res) => res.text()).then((text) => collection8 = text),
			fetch("./TXT/collection9.txt").then((res) => res.text()).then((text) => collection9 = text), fetch("./TXT/collection10.txt").then((res) => res.text()).then((text) => collection10 = text),
			fetch("./TXT/collection11.txt").then((res) => res.text()).then((text) => collection11 = text), fetch("./TXT/collection12.txt").then((res) => res.text()).then((text) => collection12 = text),
			fetch("./TXT/collection13.txt").then((res) => res.text()).then((text) => collection13 = text), fetch("./TXT/collection14.txt").then((res) => res.text()).then((text) => collection14 = text),
			fetch("./TXT/collection15.txt").then((res) => res.text()).then((text) => collection15 = text), fetch("./TXT/collection16.txt").then((res) => res.text()).then((text) => collection16 = text)

		]).then(() => {
			// "Train" Markov chain with data
			markov.addText(book1); markov.addText(book2); markov.addText(book3); markov.addText(book4); markov.addText(book5);
			markov.addText(book6); markov.addText(book7); markov.addText(book8); markov.addText(book9); markov.addText(book10);
			markov.addText(book11); markov.addText(book12); markov.addText(book13); markov.addText(book14); markov.addText(book15); 
			markov.addText(book16); markov.addText(book17); markov.addText(book18); markov.addText(book19); markov.addText(book20); 
			markov.addText(book21); markov.addText(book22); markov.addText(book23); markov.addText(book24); markov.addText(book25);
			markov.addText(book26);

			markov.addText(collection1); markov.addText(collection2); markov.addText(collection3); markov.addText(collection4); 
			markov.addText(collection5); markov.addText(collection6); markov.addText(collection7); markov.addText(collection8);
			markov.addText(collection9); markov.addText(collection10); markov.addText(collection11); markov.addText(collection12);
			markov.addText(collection13); markov.addText(collection14); markov.addText(collection15); markov.addText(collection16);
		});

		// 4. Generate text with Markov chain based inputted 'n' gram
		const probabilitiesButton = document.getElementById("generatePrompt");
		probabilitiesButton.addEventListener("click", generate);

		function generate(){
			// 5. Assigning input 'n' gram to a variable and make it to an integer
			var nInput2 = document.getElementById("myNumber").value;
			var nNumber2 = parseInt(nInput2);

			// 6. Conditioning if input 'n' gram is less/equal to 4, then generate function
			if (nNumber2 >= 0 && nNumber2 <= 4) {
				// 7. Extract inputed 'number of lines' and turning it to an integer
				var lineInput = document.getElementById("lines").value;
				var generateLines = parseInt(lineInput);

				// 8. pass value to Markov Chain
				const lines = markov.generate(generateLines);
				textarea.innerText = lines.join(" ");

			} else{
				// 9. Create a disable condition if 'n' gram is too large
				console.log('number too big')
			}

		}

	} else {
		// 10. Create a disable condition if 'n' gram is too large
		console.log('number too big')
		document.getElementById("generatePrompt").disabled = true;
		document.getElementById("demo").innerHTML = "The 'n' gram is too large";

	}


}