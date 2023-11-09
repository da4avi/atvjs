var data = "20/02/2005";

var divData = data.split("/");

console.log(divData[0] +" de "+ mes(divData[1]) +" de "+ divData[2]);

function mes(mes){
    if(divData[1] === "01") return "janeiro";

    else if(divData[1] === "02") return "fevereiro";

    else if(divData[1] === "03") return "maio";
    
    else if(divData[1] === "04") return "março";

    else if(divData[1] === "05") return "abril";

    else if(divData[1] === "06") return "junho";

    else if(divData[1] === "07") return "julho";

    else if(divData[1] === "08") return "agosto";

    else if(divData[1] === "09") return "setembro";

    else if(divData[1] === "10") return "outubro";

    else if(divData[1] === "11") return "novembro";

    else if(divData[1] === "12") return "dezembro";
}