
function vaccine(){
    var vv=vac.options[vac.selectedIndex].value
    var vn=vac.options[vac.selectedIndex].text
    vname.innerHTML="&#10148;"+"<b>VACCINE NAME:"+vn+"</b>"
    vprice.innerHTML="&#10148;"+"<b>PRICE:"+"&#8377;"+vv+"</b>"
    vimg.src=vn+".jpg"
}

function subtract(){
    var ad=area.options[area.selectedIndex].value
    var tr=rgst.value-ad
    rdose.innerHTML="&#10148;"+"<b>REQUIRED DOSE:"+tr+"</b>"
    demand.innerHTML="&#10148;"+"<b>TOTAL DEMAND:"+rgst.value+"</b>"

    var an=area.options[area.selectedIndex].text
    areaname.innerHTML="&#10148;"+"<b>AREANAME:"+an+"</b>"
    tdose.innerHTML="&#10148;"+"<b>TOTAL AVAILABLE DOSE:"+area.options[area.selectedIndex].value+"</b>"
}
