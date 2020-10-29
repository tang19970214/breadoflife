var getDateTime = new Date();
var username = "陳怡君";
var getM = "";
var getD = "";
var getHr = "";
var getMin = "";
if (((getDateTime.getMonth() + 1) / 10) < 1) {
    getM = '0' + (getDateTime.getMonth() + 1);
} else {
    getM = getDateTime.getMonth() + 1;
}
if ((getDateTime.getDate() / 10) < 1) {
    getD = '0' + getDateTime.getDate();
} else {
    getD = getDateTime.getDate();
}
if ((getDateTime.getHours() / 10) < 1) {
    getHr = '0' + getDateTime.getHours();
} else {
    getHr = getDateTime.getHours();
}
if ((getDateTime.getMinutes() / 10) < 1) {
    getMin = '0' + getDateTime.getMinutes();
} else {
    getMin = getDateTime.getMinutes();
}

var getDay = getDateTime.getDay();
var day_list = ['日', '一', '二', '三', '四', '五', '六'];
var countDateTime = getDateTime.getFullYear() + "-" + getM + "-" + getD + "（" + day_list[getDay] + "）";
var rightCardDate = getDateTime.getFullYear() + "-" + getM + "-" + getD;
var workTime = getHr + ":" + getMin;
var completeTime = rightCardDate + " " + workTime;


// ----------------------
function closeNotice() {
    document.getElementById("notice").style.display = "none";
}
// ----------------------

// Web
document.getElementById("nameLabel").innerHTML = username;
document.getElementById("timeStyle").innerHTML = countDateTime;
document.getElementById("workDate").innerHTML = countDateTime;
document.getElementById("defaultOpen").click();
    // 控制Tab
function openTab(element, pageName, index) {
    if (index == 1) {
        document.getElementById("goToWork_choose").style.display = "block";
        document.getElementById("goToWork_notyet").style.display = "none";
        document.getElementById("goOffWork_choose").style.display = "block";
        document.getElementById("goOffWork_notyet").style.display = "none";
        document.getElementById("secondOpen").classList.remove("active");
    } else {
        document.getElementById("goToWork_choose").style.display = "none";
        document.getElementById("goToWork_notyet").style.display = "block";
        document.getElementById("goOffWork_choose").style.display = "none";
        document.getElementById("goOffWork_notyet").style.display = "block";
        document.getElementById("defaultOpen").classList.remove("active");
    }
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-c");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");

    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    element.currentTarget.className += " active";
}
    // Web__上班資訊-------------------------------------------------------------------------
var cardNum_goToWork = document.getElementById("input_cardNum");
var temp_goToWork = document.getElementById("input_temp");
var chooseLocal_goToWork = document.getElementById("chooseLocal_goToWork");

function reset_goToWork() {
    cardNum_goToWork.value = "";
    temp_goToWork.value = "";
    chooseLocal_goToWork.value = "";
}
document.getElementById("getYear").innerHTML = getDateTime.getFullYear();
document.getElementById("getMonthDate").innerHTML = getM + "-" + getD;
document.getElementById("getTimeNow").innerHTML = workTime;
document.getElementById("showUsername").innerHTML = username;

    // Web__下班資訊===========================================================================
var cardNum_goOffWork = document.getElementById("input_cardNum_goOff");
var temp_goOffWork = document.getElementById("input_temp_goOff");
var chooseLocal_goOffWork = document.getElementById("chooseLocal_goOffWork");

function reset_goOffWork() {
    cardNum_goOffWork.value = "";
    temp_goOffWork.value = "";
    chooseLocal_goOffWork.value = "";
}
document.getElementById("getYear_goOffWork").innerHTML = getDateTime.getFullYear();
document.getElementById("getMonthDate_goOffWork").innerHTML = getM + "-" + getD;
document.getElementById("getTimeNow_goOffWork").innerHTML = workTime;
document.getElementById("showUsername_goOffWork").innerHTML = username;





// Phone
document.getElementById("nameLabel_phone").innerHTML = username;
document.getElementById("timeStyle_phone").innerHTML = countDateTime;
document.getElementById("workDate_phone").innerHTML = countDateTime;
document.getElementById("defaultOpen_phone").click();
    // 控制Tab
function openTab_phone(element, pageName, index) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-c_phone");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks_phone");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    element.currentTarget.className += " active";
    if (index == 1) {
        document.getElementById("goToWork_choose_phone").style.display = "block";
        document.getElementById("goToWork_notyet_phone").style.display = "none";
        document.getElementById("goOffWork_choose_phone").style.display = "block";
        document.getElementById("goOffWork_notyet_phone").style.display = "none";
        document.getElementById("secondOpen_phone").classList.remove("active");
        document.getElementById("goToWork_phone").style.display = "block";
        document.getElementById("goOffWork_phone").style.display = "none";
    } else {
        document.getElementById("goToWork_choose_phone").style.display = "none";
        document.getElementById("goToWork_notyet_phone").style.display = "block";
        document.getElementById("goOffWork_choose_phone").style.display = "none";
        document.getElementById("goOffWork_notyet_phone").style.display = "block";
        document.getElementById("defaultOpen_phone").classList.remove("active");
        document.getElementById("goToWork_phone").style.display = "none";
        document.getElementById("goOffWork_phone").style.display = "block";
    }
}
    // phone__上班資訊-------------------------------------------------------------------------
var cardNum_goToWork_phone = document.getElementById("input_cardNum_phone");
var temp_goToWork_phone = document.getElementById("input_temp_phone");
var chooseLocal_goToWork_phone = document.getElementById("chooseLocal_goToWork_phone");

function reset_goToWork_phone() {
    cardNum_goToWork_phone.value = "";
    temp_goToWork_phone.value = "";
    chooseLocal_goToWork_phone.value = "";
}
document.getElementById("getYear_phone").innerHTML = getDateTime.getFullYear();
document.getElementById("getMonthDate_phone").innerHTML = getM + "-" + getD;
document.getElementById("getTimeNow_phone").innerHTML = workTime;
document.getElementById("showUsername_phone").innerHTML = username;


    // phone__下班資訊-------------------------------------------------------------------------
var cardNum_goOffWork_phone = document.getElementById("input_cardNum_goOff_phone");
var temp_goOffWork_phone = document.getElementById("input_temp_goOff_phone");
var chooseLocal_goOffWork_phone = document.getElementById("chooseLocal_goOffWork_phone");

function reset_goOffWork_phone() {
    cardNum_goOffWork_phone.value = "";
    temp_goOffWork_phone.value = "";
    chooseLocal_goOffWork_phone.value = "";
}
document.getElementById("getYear_goOffWork_phone").innerHTML = getDateTime.getFullYear();
document.getElementById("getMonthDate_goOffWork_phone").innerHTML = getM + "-" + getD;
document.getElementById("getTimeNow_goOffWork_phone").innerHTML = workTime;
document.getElementById("showUsername_goOffWork_phone").innerHTML = username;
