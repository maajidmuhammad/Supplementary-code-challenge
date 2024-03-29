function countWords() {
    var sentence = document.getElementById("sentenceInput").value.trim();
    var wordCount = 0;
  
    if (sentence !== "") {
      // Split the sentence by spaces and count the number of elements
      wordCount = sentence.split(/\s+/).length;
    }
  
    document.getElementById("wordCountResult").innerText =
      "Word count: " + wordCount;
    console.log(wordCount);
  }
