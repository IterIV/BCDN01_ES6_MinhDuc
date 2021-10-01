function calcDiemTB(...params){
    let sum = 0;
    params.map(item => {
        sum += item;
    });
    return sum/params.length;
}
function getEle(idString){
    return document.getElementById(idString);
}
getEle("btnKhoi1").addEventListener("click", () =>{
    let diemToan = Number(getEle("inpToan").value);
    let diemLy = Number(getEle("inpLy").value);
    let diemHoa = Number(getEle("inpHoa").value);
    getEle("tbKhoi1").innerHTML = "Điểm trung bình: " + calcDiemTB(diemToan, diemLy, diemHoa);
});
getEle("btnKhoi2").addEventListener("click", () =>{
    let diemVan = Number(getEle("inpVan").value);
    let diemSu = Number(getEle("inpSu").value);
    let diemDia = Number(getEle("inpDia").value);
    let diemAnh = Number(getEle("inpEnglish").value);
    getEle("tbKhoi2").innerHTML = "Điểm trung bình: " + calcDiemTB(diemVan, diemSu, diemDia,diemAnh);
});