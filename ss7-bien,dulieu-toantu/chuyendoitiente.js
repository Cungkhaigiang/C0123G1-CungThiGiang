function reset() {
    var Amount = document.getElementById("Amount").value;
    var Form = document.getElementById("Form").value;
    var To = document.getElementById("To").value;
    var Result = "";
    if ( Form == "USD" && To == "VND"){
    Result = "Result:" + (Amount * 23000) + "Đ";
    }
    else if ( Form == "VND" && To == "USD"){
    Result = "Result:" + (Amount / 23000) + "$";
    }
    else if ( Form == "VND"){
    Result = "Result:" + Amount + "Đ";
    }
    else {
    Result = "Result:" + Amount + "$";
    }
    document.getElementById("Result").innerHTML = Result;
}