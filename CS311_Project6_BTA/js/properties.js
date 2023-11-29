function showLTL()
{
    const LTLgrid = document.getElementById("LTLiabs");
    const LTLbutton = document.getElementById("ltlButton")

    LTLbutton.style.display = "none";
    LTLgrid.style.display = "block";

}

function showSTL()
{
    const STLgrid = document.getElementById("cLiabs");
    const STLbutton = document.getElementById("clButton")

    STLbutton.style.display = "none";
    STLgrid.style.display = "block";

}

function showAssets()
{
    const Agrid = document.getElementById("cAssets");
    const Abutton = document.getElementById("assetButton")

    Abutton.style.display = "none";
    Agrid.style.display = "block";

}

function showIPE()
{
    const IPEgrid = document.getElementById("cIPE");
    const IPEbutton = document.getElementById("ipeButton")

    IPEbutton.style.display = "none";
    IPEgrid.style.display = "block";

}

function showIntangible()
{
    const Igrid = document.getElementById("cIntangible");
    const Ibutton = document.getElementById("intButton");

    Ibutton.style.display = "none";
    Igrid.style.display = "block";

}

function totals()
{
    let cash = document.querySelector("#cash").value;
    let inventory = document.querySelector("#inventory").value;
    let supplies = document.querySelector("#supplies").value;
    let tempInv = document.querySelector("#tempInv").value;
    let assetTotal = Number(cash) + Number(inventory) + Number(supplies) + Number(tempInv);
    document.getElementById("TCA").innerHTML = "Total Current Assets: $" + assetTotal.toFixed(2);

    let land = document.querySelector("#land").value;
    let BnI = document.querySelector("#BnI").value;
    let equipment = document.querySelector("#equipment").value;
    let tempInvest = document.querySelector("#tempInvest").value;
    let TIPETotal = Number(land) + Number(BnI) + Number(equipment) + Number(tempInvest);
    document.getElementById("TIPE").innerHTML = "Total Investment Property and Equipment: $" + TIPETotal.toFixed(2);

    let tradeNames = document.querySelector("#tradeNames").value;
    let goodwill = document.querySelector("#goodwill").value;
    let intanTotal = Number(tradeNames) + Number(goodwill);
    document.getElementById("intang").innerHTML = "Total Intangible Assets: $" + intanTotal.toFixed(2);

    let acctPay = document.querySelector("#acctPay").value;
    let notePay = document.querySelector("#notePay").value;
    let intPay = document.querySelector("#intPay").value;
    let accExp = document.querySelector("#accExp").value;
    let wagePay = document.querySelector("#wagePay").value;
    let cLiabTotal = Number(acctPay) + Number(intPay) + Number(notePay) + Number(accExp) + Number(wagePay);
    document.getElementById("cLiabilities").innerHTML = "Total Current Liabilities: $" + cLiabTotal.toFixed(2);

    let LTnotePay = document.querySelector("#LTnotePay").value;
    let bondsPay = document.querySelector("#bondsPay").value;
    let LTtotal = Number(LTnotePay) + Number(bondsPay);
    document.getElementById("longTerm").innerHTML = "Total Long-Term Liabilities: $" + LTtotal.toFixed(2);

    let totalAssets = Number(assetTotal) + Number(TIPETotal);
    let totalLiabilities = Number(cLiabTotal) + Number(LTtotal);
    let position = Number(totalAssets) - Number(totalLiabilities);

    document.getElementById("tAssets").innerHTML = "Total Assets: $" + totalAssets.toFixed(2);
    document.getElementById("tLiability").innerHTML = "Total Liability: $" + totalLiabilities.toFixed(2);
    document.getElementById("pos").innerHTML = "Position: $" + position.toFixed(2);

}