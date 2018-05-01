const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninty"];
const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const hundred = ["", "one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"];

for (let i = 0; i <= 1000; i++) {
    if (i < 10) {
        document.write(ones[i] + "<br>");
    } else if (i < 20) {
        document.write(teens[i - 10] + "<br>");
    } else if (i < 100) {
        document.write(tens[Math.floor(i / 10)] + ones[i % 10] + "<br>");
    } else if (i < 1000) {
        let temp = "" + i;
        let j = Number(temp[1] + temp[2])
        if (j > 9 && j < 20) {
            document.write(hundred[Math.floor(i / 100)] + " " + teens[j - 10] + "<br>");
        } else {
            document.write(hundred[Math.floor(i / 100)] +" " + tens[Math.floor(j / 10)] + " " + ones[j % 10] + "<br>");
        }
    }

}
document.write("One Thousand!");
/*else if (i<1000){
        console.log(tens[i-900] + ones[i-900])
    }*/

/*for (let i=1; i<ones.length; i++) {
    console.log(ones[i]);
}
for (let i=0;i<teens.length; i++) {
    console.log(teens[i]);
}

for (let i=0; i<tens.length; i++) {
    for (let j=0; j<ones.length; j++) {
        let toonehundo = tens[i] + ones[j];
        console.log(toonehundo);
    }
}

for (let i=1; i<ones.length; i++) {
    let oneshundo = ones[i] + "hundred";
    /*for (let t=0; i<tens.length; i++){
        let tenshundo = oneshundo + tens[i];
        console.log(tenshundo);
    }*/
//console.log(ones[] + "," + tens[0] + "," + teens[]);
//let prob1part2 = teens.map()