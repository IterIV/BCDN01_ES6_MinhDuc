const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron","fuschia","cinnabar"];
document.getElementById("colorContainer").innerHTML = colorList.map((item,index) => {
    if (index == 0) {
        return `<button class="color-button ${item} active" onclick = "selectColor('${index}')"></button>`;
    }else{
        return `<button class="color-button ${item}" onclick = "selectColor('${index}')" ></button>`;
    }
}).join("");

function selectColor(index){
    document.getElementById("house").className = `house ${colorList[index]}`;
    let eleColors = document.querySelectorAll("#colorContainer .color-button");
    eleColors.forEach((ele, key) => {
        if (key == index) {
            ele.classList.add("active");
        } else{
            ele.classList.remove("active");
        }
    });
}