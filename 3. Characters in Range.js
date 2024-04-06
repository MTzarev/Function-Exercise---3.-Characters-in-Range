function charactersInRange(str1, str2) {
    let char1 = str1.charCodeAt(0);
    let char2 = str2.charCodeAt(0);
    let res = "";
    if (char1 <= char2) {
        for (let i = char1 + 1; i < char2; i++) {
            if (i>=0 && i<=127){
            let currentChar = String.fromCharCode(i);
            res += currentChar + " ";
        }
    }
    } else {
        for (let i = char2+1; i < char1; i++) {
            if (i>=0 && i<=127){
                
            let currentChar = String.fromCharCode(i);
            res += currentChar + " ";
        }
    }
    }
    console.log(res);
}
charactersInRange('a','d');
charactersInRange('#',':');
//charactersInRange('C', '#');
