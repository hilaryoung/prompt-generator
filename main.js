// Setup a Markov chain with an n-gram of length 4
generator = RiTa.markov(4);

// Load data to be fed to Markov chain
let story1, story2, story3, story4, story5, story6, story7, story8, story9, story10, 
story11, story12, story13, story14, story15, story16, story17, story18, story19, story20,
story21, story22, story23, story24, story25,
collection1, collection2, collection3, collection4, collection5, collection6, collection7,
collection8, collection9, collection10, collection11, collection12, collection13, collection14,
collection15, collection16;
Promise.all([
	fetch("./stories/cinder.txt").then((res) => res.text()).then((text) => story1 = text),
	fetch("./stories/lostRobot.txt").then((res) => res.text()).then((text) => story2 = text),
	fetch("./stories/frankenstein.txt").then((res) => res.text()).then((text) => story3 = text),
	fetch("./stories/pinocchio.txt").then((res) => res.text()).then((text) => story4 = text),
	fetch("./stories/machineLikeMe.txt").then((res) => res.text()).then((text) => story5 = text),
	fetch("./stories/enders.txt").then((res) => res.text()).then((text) => story6 = text),
	fetch("./stories/robbie.txt").then((res) => res.text()).then((text) => story7 = text),
	fetch("./stories/catchTheRabit.txt").then((res) => res.text()).then((text) => story8 = text),
	fetch("./stories/sheepDream.txt").then((res) => res.text()).then((text) => story9 = text),
	fetch("./stories/systemRed.txt").then((res) => res.text()).then((text) => story10 = text),
	fetch("./stories/banister.txt").then((res) => res.text()).then((text) => story11 = text),
	fetch("./stories/seaOfRust.txt").then((res) => res.text()).then((text) => story12 = text),
	fetch("./stories/sleepingGiant.txt").then((res) => res.text()).then((text) => story13 = text),
	fetch("./stories/story14.txt").then((res) => res.text()).then((text) => story14 = text),
	fetch("./stories/story15.txt").then((res) => res.text()).then((text) => story15 = text),
	fetch("./stories/story16.txt").then((res) => res.text()).then((text) => story16 = text),
	fetch("./stories/story17.txt").then((res) => res.text()).then((text) => story17 = text),
	fetch("./stories/story18.txt").then((res) => res.text()).then((text) => story18 = text),
	fetch("./stories/story19.txt").then((res) => res.text()).then((text) => story19 = text),
	fetch("./stories/story20.txt").then((res) => res.text()).then((text) => story20 = text),
	fetch("./stories/story21.txt").then((res) => res.text()).then((text) => story21 = text),
	fetch("./stories/story22.txt").then((res) => res.text()).then((text) => story22 = text),
	fetch("./stories/story23.txt").then((res) => res.text()).then((text) => story23 = text),
	fetch("./stories/story24.txt").then((res) => res.text()).then((text) => story24 = text),
	fetch("./stories/story25.txt").then((res) => res.text()).then((text) => story25 = text),

	fetch("./stories/collection1.txt").then((res) => res.text()).then((text) => collection1 = text), //12 short stories
	fetch("./stories/collection2.txt").then((res) => res.text()).then((text) => collection2 = text),
	fetch("./stories/collection3.txt").then((res) => res.text()).then((text) => collection3 = text),
	fetch("./stories/collection4.txt").then((res) => res.text()).then((text) => collection4 = text),
	fetch("./stories/collection5.txt").then((res) => res.text()).then((text) => collection5 = text),
	fetch("./stories/collection6.txt").then((res) => res.text()).then((text) => collection6 = text),
	fetch("./stories/collection7.txt").then((res) => res.text()).then((text) => collection7 = text),
	fetch("./stories/collection8.txt").then((res) => res.text()).then((text) => collection8 = text),
	fetch("./stories/collection9.txt").then((res) => res.text()).then((text) => collection9 = text),
	fetch("./stories/collection10.txt").then((res) => res.text()).then((text) => collection10 = text),
	fetch("./stories/collection11.txt").then((res) => res.text()).then((text) => collection11 = text),
	fetch("./stories/collection12.txt").then((res) => res.text()).then((text) => collection12 = text),
	fetch("./stories/collection13.txt").then((res) => res.text()).then((text) => collection13 = text),
	fetch("./stories/collection14.txt").then((res) => res.text()).then((text) => collection14 = text),
	fetch("./stories/collection15.txt").then((res) => res.text()).then((text) => collection15 = text),
	fetch("./stories/collection16.txt").then((res) => res.text()).then((text) => collection16 = text)
]).then(() => {
	// "Train" Markov chain with data
	generator.addText(story1); generator.addText(story2); generator.addText(story3);
	generator.addText(story4); generator.addText(story5); generator.addText(story6);
	generator.addText(story7); generator.addText(story8); generator.addText(story9);
	generator.addText(story10); generator.addText(story11); generator.addText(story12);
	generator.addText(story13); generator.addText(story14); generator.addText(story15);
	generator.addText(story16); generator.addText(story17); generator.addText(story18);
	generator.addText(story19); generator.addText(story20); generator.addText(story21);
	generator.addText(story22); generator.addText(story23); generator.addText(story24);
	generator.addText(story25);

	generator.addText(collection1); generator.addText(collection2); generator.addText(collection3);
	generator.addText(collection4); generator.addText(collection5); generator.addText(collection6);
	generator.addText(collection7); generator.addText(collection8); generator.addText(collection9);
	generator.addText(collection10); generator.addText(collection11); generator.addText(collection12);
	generator.addText(collection13); generator.addText(collection14); generator.addText(collection15);
	generator.addText(collection16);
	
});
/* Total input
	- Collection1: 12 short stories from Daily Science Fiction
	- Collection2: 7 Medium articles about AI
	- Collection3: 10 Medium articles about AI and Robotics in the field of early childhood education
	- Collection4: 10 short stories from Daily Science Fiction genre: Sci Fi Future World
	- Collection5: 12 short stories from Daily Science Fiction genre: robot and machines
	- Collection6: 6 short stories from Daily Science Fiction genre: robot and machines
	- Collection7: 14 short stories from Daily Science Fiction genre: robot and machines
	- Collection8: 13 short stories from Daily Science Fiction genre: sci fi
	- Collection9: a collection of 9 articles about definig robot qualities
	- Collection10: a collection of 3 articles about robotics
	- Collection11: 4 academic essay about robotics
	- Collection12: 10 short stories about virtual reality
	- Collection13: 12 short stories about virtual reality
	- Collection14: 14 short stories about virtual reality
	- Collection15: 15 short stories about virtual reality
	- Collection16: 13 short stories about virtual reality
	- 27 story books
	total: 191 stories
*/

// Generate text with Markov chain based n-grams
const textarea = document.getElementById("textarea");
//textarea.addEventListener("click", generate);

function generate() {
	// Generate 10 sentences
	const lines = generator.generate(10);
	textarea.innerText = lines.join(" ");
}

const probabilitiesButton = document.getElementById("generatePrompts");
probabilitiesButton.addEventListener("click", generateNewPrompts);

function generateNewPrompts(){
	//console.log(generator.probabilities());
	const lines = generator.generate(10);
	textarea.innerText = lines.join(" ");
}