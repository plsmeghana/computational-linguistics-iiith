var c;
var b, r;
var ans = "";
var i;
let select = document.getElementById("language");
function shuffle(jumbled) {
    var jumble = jumbled.split(" ");
    var n = jumble.length,
        temp, rand;
    while (0 !== n) {
        rand = Math.floor(Math.random() * n);
        n = n - 1;
        temp = jumble[n];
        jumble[n] = jumble[rand];
        jumble[rand] = temp;
    }
    return jumble;
}
var sentence = "";
function formed(id, value) {
    document.getElementById("sen4").innerHTML = "Formed Sentence(after selecting words)";
       sentence += value + " ";
    document.getElementById("sen5").innerHTML = sentence;
    document.getElementById(id).style.display = "none";
document.getElementById("reform").style.visibility="visible";
    c++;
if (b == c) {
        document.getElementById("sen7").innerHTML = "<center><button id='correctness'  onclick='correctsen()'>Check the correctness</button></center>"
    }
}
function reset() {
    for (j = 0; j <= i.length - 1; j++) {
        document.getElementById('btn' + j).style.display = "";
    }
    sentence = "";
    document.getElementById("sen5").innerHTML = "";
 document.getElementById("correctan").innerHTML = "";
    document.getElementById("sen7").innerHTML = "";
    //document.getElementById("sen6").innerHTML = "";
    document.getElementById("sen10").innerHTML = "";
    document.getElementById("sen4").innerHTML = "";
    document.getElementById("sen8").innerHTML = "";
    document.getElementById("sen9").innerHTML = "";
    c = 0;
}
function correctsen() {
    var sr = sentence.trim();
    for (var i = 0; i < ansarray.length; i++) {
        var sr1 = ansarray[i];
        var m = sr1.localeCompare(sr);
        if (m == 0) {
            document.getElementById('sen8').innerHTML = "Right Answer!!!";
return true;

        }
    }
    document.getElementById("sen9").innerHTML = "Wrong Anwer!!!";
document.getElementById("sen10").innerHTML = "<center><button id='showansbtn' onclick='getcor()'>Get Correct Sentence</button></center>"
}
function getcor() {
    ans = "";
    var ts = 0;
    document.getElementById("correctan").innerHTML = "";
    if (select.value == '2') {
        ts = arrenglish[r].length - 1;
        document.getElementById("sen10").innerHTML = "<center><button id='showamsbtn' onclick='hide()'>hide correct answer</button></center>"
        for (i = 0; i <= ts; i++) {
            ans += arrenglish[r][i] + "<br>"
        }
        document.getElementById("correctan").innerHTML = ans;
    } else if (select.value == '3') {
        ts = arrhindi[r].length - 1;
        document.getElementById("sen10").innerHTML = "<center><button id='showamsbtn' onclick='hide()'>hide correct answer</button></center>"
        for (i = 0; i <= ts; i++) {
            ans += arrhindi[r][i] + "<br>"
        }
        document.getElementById("correctan").innerHTML = ans;
    }
}

function hide() {
    document.getElementById('sen10').innerHTML = "<center><button id='showansbtn' onclick='togg()'>Get Correct Sentence</button></center>"
    document.getElementById("correctan").innerHTML = "";
}

function togg() {
    while (document.getElementById("correctan").innerHTML == "") {

        document.getElementById('sen10').innerHTML = "<center><button id='showansbtn' onclick='hide()'>hide correct answer</button></center>"
        document.getElementById("correctan").innerHTML = ans;
    }
}

function languagefun() {
if (select.value === '2') {
        ans = "";
document.getElementById("correctan").innerHTML = "";
sentence = "";
document.getElementById("sen4").innerHTML = "";
        document.getElementById("sen5").innerHTML = "";
        //document.getElementById("sen6").innerHTML = "";
        document.getElementById("sen7").innerHTML = "";
        document.getElementById("sen8").innerHTML = "";
        document.getElementById("sen9").innerHTML = "";
        document.getElementById("sen10").innerHTML = "";
document.getElementById("lang1").innerHTML = "Form a sentence (Declarative or Interrogative or any          other type) from the given words";
        document.getElementById("lang2").innerHTML = "(select the buttons in proper order)";  
r = Math.floor(Math.random() * arrenglish.length);
        var jumbled = arrenglish[r][0];
        i = shuffle(jumbled);
        b = 0;
        c = 0;
        var s1 = "";
        var s2 = "";
 for (j = 0; j <= i.length - 1; j++) {
            val = i[j];
s1 = "  <button id='btn" + j + "' onclick='formed(this.id,this.value)' value='" + val + "'>" + val + "</button>  ";
            s2 += s1;
            b++;

        }
        sen3.innerHTML = s2.trim();
    } 
if (select.value === '3') {
        ans = "";
document.getElementById("correctan").innerHTML = "";
 sentence = "";
 document.getElementById("sen4").innerHTML = "";
        document.getElementById("sen5").innerHTML = "";
        //document.getElementById("sen6").innerHTML = "";
        document.getElementById("sen7").innerHTML = "";
        document.getElementById("sen8").innerHTML = "";
        document.getElementById("sen9").innerHTML = "";
        document.getElementById("sen10").innerHTML = "";
document.getElementById("lang1").innerHTML = "Form a sentence (Declarative or Interrogative or any          other type) from the given words";
        document.getElementById("lang2").innerHTML = "(select the buttons in proper order)";  
r = Math.floor(Math.random() * arrhindi.length);
        var jumbled = arrhindi[r][0];
        i = shuffle(jumbled);
        b = 0;
        c = 0;
        var s1 = "";
        var s2 = "";
 for (j = 0; j <= i.length - 1; j++) {
            val = i[j];
s1 = "  <button id='btn" + j + "' onclick='formed(this.id,this.value)' value='" + val + "'>" + val + "</button>  ";
            s2 += s1;
            b++

        }
        sen3.innerHTML = s2.trim();
    }
                            
   }
var hindisen1 = ["राम और श्याम बाजार गयें", "राम और श्याम गयें बाजार", "बाजार गयें राम और श्याम", "गयें बाजार राम और श्याम"];
var hindisen2 = ["राम सोया और श्याम भी", "श्याम सोया और राम भी", "सोया श्याम और राम भी", "सोया राम और श्याम भी"];
var hindisen3 = ["मैंने उसे बताया कि राम सो रहा है", "मैंने उसे बताया कि सो रहा है राम", "उसे मैंने बताया कि राम सो रहा है", "उसे मैंने बताया कि सो रहा है राम", "मैंने बताया उसे कि राम सो रहा है", "मैंने बताया उसे कि सो रहा है राम", "उसे बताया मैंने कि राम सो रहा है", "उसे बताया मैंने कि सो रहा है राम", "बताया मैंने उसे कि राम सो रहा है", "बताया मैंने उसे कि सो रहा है राम", "बताया उसे मैंने कि राम सो रहा है", "बताया उसे मैंने कि सो रहा है राम"];
var hindisen4 = ["राम खाकर सोया", "खाकर राम सोया", "राम सोया खाकर", "खाकर सोया राम", "सोया राम खाकर", "सोया खाकर राम"];
var hindisen5 = ["बिल्लियों को मारकर कुत्ता सो गया", "मारकर बिल्लियों को कुत्ता सो गया", "बिल्लियों को मारकर सो गया कुत्ता", "मारकर बिल्लियों को सो गया कुत्ता", "कुत्ता सो गया बिल्लियों को मारकर", "कुत्ता सो गया मारकर बिल्लियों को", "सो गया कुत्ता बिल्लियों को मारकर", "सो गया कुत्ता मारकर बिल्लियों को"];
var hindisen6 = ["एक लाल किताब वहाँ है", "एक लाल किताब है वहाँ", "वहाँ है एक लाल किताब", "है वहाँ एक लाल किताब"];
var hindisen7 = ["एक बड़ी सी किताब वहाँ है", "एक बड़ी सी किताब है वहाँ", "बड़ी सी एक किताब वहाँ है", "बड़ी सी एक किताब है वहाँ", "वहाँ है एक बड़ी सी किताब", "वहाँ है बड़ी सी एक किताब", "है वहाँ एक बड़ी सी किताब", "है वहाँ बड़ी सी एक किताब"];
var englishsen1 = ["John ate an apple before afternoon", "before afternoon John ate an apple", "John before afternoon ate an apple"];
var englishsen2 = ["some students like to study in the night", "at night some students like to study"];
var englishsen3 = ["John and Mary went to church", "Mary and John went to church"];
var englishsen4 = ["John went to church after eating", "after eating John went to church", "John after eating went to church"];
var englishsen5 = ["did he go to market", "he did go to market"];
var englishsen6 = ["the woman who called my sister sells cosmetics", "the woman who sells cosmetics called my sister", "my sister who sells cosmetics called the woman", "my sister who called the woman sells cosmetics"];
var englishsen7 = ["John goes to the library and studies", "John studies and goes to the library"];
var englishsen8 = ["John ate an apple so did she", "she ate an apple so did John"];
var englishsen9 = ["the teacher returned the book after she noticed the error", "the teacher noticed the error after she returned the book", "after the teacher returned the book she noticed the error", "after the teacher noticed the error she returned the book", "she returned the book after the teacher noticed the error", "she noticed the error after the teacher returned the book", "after she returned the book the teacher noticed the error", "after she noticed the error the teacher returned the book"];
var englishsen10 = ["I told her that I bought a book yesterday", "I told her yesterday that I bought a book", "yesterday I told her that I bought a book", "I bought a book that I told her yesterday", "I bought a book yesterday that I told her", "yesterday I bought a book that I told her"];
var arrhindi = [hindisen1, hindisen2, hindisen3, hindisen4, hindisen5, hindisen6, hindisen7];
var arrenglish = [englishsen1, englishsen2, englishsen3, englishsen4, englishsen5, englishsen6, englishsen7, englishsen8, englishsen9, englishsen10];
var ansarray = [
    "John ate an apple before afternoon", "before afternoon John ate an apple", "John before afternoon ate an apple",
    "some students like to study in the night", "at night some students like to study",
    "John and Mary went to church", "Mary and John went to church",
    "John went to church after eating", "after eating John went to church", "John after eating went to church",
    "did he go to market", "he did go to market",
    "the woman who called my sister sells cosmetics", "the woman who sells cosmetics called my sister", "my sister who sells cosmetics called the woman", "my sister who called the woman sells cosmetics",
    "John goes to the library and studies", "John studies and goes to the library",
    "John ate an apple so did she", "she ate an apple so did John",
    "the teacher returned the book after she noticed the error", "the teacher noticed the error after she returned the book", "after the teacher returned the book she noticed the error", "after the teacher noticed the error she returned the book", "she returned the book after the teacher noticed the error", "she noticed the error after the teacher returned the book", "after she returned the book the teacher noticed the error", "after she noticed the error the teacher returned the book",
    "I told her that I bought a book yesterday", "I told her yesterday that I bought a book", "yesterday I told her that I bought a book", "I bought a book that I told her yesterday", "I bought a book yesterday that I told her", "yesterday I bought a book that I told her",
    "राम और श्याम बाजार गयें", "राम और श्याम गयें बाजार", "बाजार गयें राम और श्याम", "गयें बाजार राम और श्याम",
    "राम सोया और श्याम भी", "श्याम सोया और राम भी", "सोया श्याम और राम भी", "सोया राम और श्याम भी",
    "मैंने उसे बताया कि राम सो रहा है", "मैंने उसे बताया कि सो रहा है राम", "उसे मैंने बताया कि राम सो रहा है", "उसे मैंने बताया कि सो रहा है राम", "मैंने बताया उसे कि राम सो रहा है", "मैंने बताया उसे कि सो रहा है राम", "उसे बताया मैंने कि राम सो रहा है", "उसे बताया मैंने कि सो रहा है राम", "बताया मैंने उसे कि राम सो रहा है", "बताया मैंने उसे कि सो रहा है राम", "बताया उसे मैंने कि राम सो रहा है", "बताया उसे मैंने कि सो रहा है राम",
    "राम खाकर सोया", "खाकर राम सोया", "राम सोया खाकर", "खाकर सोया राम", "सोया राम खाकर", "सोया खाकर राम",
    "बिल्लियों को मारकर कुत्ता सो गया", "मारकर बिल्लियों को कुत्ता सो गया", "बिल्लियों को मारकर सो गया कुत्ता", "मारकर बिल्लियों को सो गया कुत्ता", "कुत्ता सो गया बिल्लियों को मारकर", "कुत्ता सो गया मारकर बिल्लियों को", "सो गया कुत्ता बिल्लियों को मारकर", "सो गया कुत्ता मारकर बिल्लियों को",
    "एक लाल किताब वहाँ है", "एक लाल किताब है वहाँ", "वहाँ है एक लाल किताब", "है वहाँ एक लाल किताब",
    "एक बड़ी सी किताब वहाँ है", "एक बड़ी सी किताब है वहाँ", "बड़ी सी एक किताब वहाँ है", "बड़ी सी एक किताब है वहाँ", "वहाँ है एक बड़ी सी किताब", "वहाँ है बड़ी सी एक किताब", "है वहाँ एक बड़ी सी किताब", "है वहाँ बड़ी सी एक किताब"
];


















