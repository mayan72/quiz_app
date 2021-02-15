var i = 0;
var correctCount = 0 ;
//initialize the first question
generate(0);


// generate from json array data with index
function generate(index) {
    document.getElementById("question").innerHTML = jsonData[index].question;
    document.getElementById("optt1").innerHTML = jsonData[index].a;
    document.getElementById("optt2").innerHTML = jsonData[index].b;
    document.getElementById("optt3").innerHTML = jsonData[index].c;
    document.getElementById("optt4").innerHTML = jsonData[index].d;
    document.getElementById("answer").innerHTML = jsonData[index].answer;
}

function checkAnswer() {
    if (document.getElementById("a").checked && jsonData[i].a == jsonData[i].answer) {
       correctCount++;
       console.log('you are right');
    }
    if (document.getElementById("b").checked && jsonData[i].b == jsonData[i].answer) {
        correctCount++;
        console.log('you are right');
        // window.print('you are right');
    }
    if (document.getElementById("c").checked && jsonData[i].c == jsonData[i].answer) {
        correctCount++;
        console.log('you are right');
        
    }
    if (document.getElementById("d").checked && jsonData[i].d == jsonData[i].answer) {
        correctCount++;
        console.log('you are right');
        
    }

    // increment i for next question
    i++;
    if(jsonData.length-1 < i){
        document.write("<body style='background-color:#348322;'>");
        document.write("<div style='color:#ffffff;font-size:18pt;text-align:center;'>*****Your score is : "+correctCount+"*****</div>");
        document.write("</body>");
    }
    // callback to generate
    generate(i);
}