function rev(){
    var input = document.getElementById("rev").value;
    var chars=input.split('');
    var chars_length=chars.length;
    var reversed=[];
    

    for (var i = chars_length-1; i>=0; i--){
        reversed.push(chars[i]);
    }

    document.getElementById("output").innerText=reversed.join('');
}