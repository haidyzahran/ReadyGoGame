var crcl1 = document.getElementById("ready");
var crcl2 = document.getElementById("steady");
var crcl3 = document.getElementById("go");

var label1 = document.createElement("label");
label1.id = "label1";
label1.innerText = "READY";
label1.style.color = "white";

var label2 = document.createElement("label");
label2.id = "label2";
label2.innerText = "STEADY";
label2.style.color = "white";

var label3 = document.createElement("label");
label3.id = "label3";
label3.innerText = "GO";
label3.style.color = "white";


crcl1.insertAdjacentElement("afterend", label1);
crcl2.insertAdjacentElement("afterend", label2);
crcl3.insertAdjacentElement("afterend", label3);



var inp = document.getElementById("input");

inp.addEventListener("input", function () {
    if (inp.value === "1") {
        crcl1.style.backgroundColor = "orange";
        crcl2.style.backgroundColor = "";
        crcl3.style.backgroundColor = "";
        label1.style.color = "orange";
        label2.style.color = "white";
        label3.style.color = "white";
    }
    if (inp.value === "2") {
        crcl2.style.backgroundColor = "orange";
        crcl1.style.backgroundColor = "";
        crcl3.style.backgroundColor = "";
        label2.style.color = "orange";
        label1.style.color = "white";
        label3.style.color = "white";

    }
    if (inp.value === "3") {
        crcl3.style.backgroundColor = "orange";
        crcl1.style.backgroundColor = "";
        crcl2.style.backgroundColor = "";
        label3.style.color = "orange";
        label1.style.color = "white";
        label2.style.color = "white";
    }
    if (inp.value !== "1" && inp.value !== "2" && inp.value !== "3") {
        crcl1.style.backgroundColor = "";
        crcl2.style.backgroundColor = "";
        crcl3.style.backgroundColor = "";
        label1.style.color = "white";
        label2.style.color = "white";
        label3.style.color = "white";
    }
}
);



