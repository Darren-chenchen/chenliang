//tab的切换效果
var tabs = document.getElementById('header').getElementsByTagName('li');
for(var i=0;i<tabs.length;i++){
    tabs[i].onclick=function(){change(this);}
}
function change(obj) {
    for (var i = 0; i < tabs.length; i++) {
        if (tabs[i] == obj) {
            tabs[i].className = "topSelected";
            document.getElementById("items" + i).style.display = "block";
            // $('body,html').animate({scrollTop:0},100);
            if (i == 2) {  // 教育经历
                setTimeout("inputText()",2000);
                bashBegin();
            }
            if (i==3){  // 工作经历
                setTimeout("workExprience()",2000);
                bashWorkBegin();
            }
        } else {
            tabs[i].className = "";
            document.getElementById("items" + i).style.display = "none";
        }
    }
}

//教育经历打字效果
var TextTime = 100;       //每条信息中的字出现的间隔时间
var index = 0;
var txttimer;     //调用setInterval的返回值，用于取消对函数的周期性执行
var educationText = "初中2003年-2006年就读于安徽省亳州市蒙城县范集镇范集中学;高中2006-2010年就读于蒙城县第一中学;2010-2014年就读于安徽工程大学,大4下学期在芜湖参加了ios培训,然后毕业后来到上海打拼.";
educationText=educationText.replace(/;/g,"\n");
function inputText() {
    var newtext = educationText.substring(0, index+1);
    clearInterval(txttimer); // 先清除定时器,放置index不断增加
    if (index>newtext.length) {  // 打字完成后就停止定时器
        clearInterval(txttimer);
        index = 0;
        return;
    } else {
        document.getElementById("bash_body_input").innerHTML = newtext;
        index++;
        txttimer = setInterval("inputText()",100);
    }
}
//教育经历bash缩放动画
function bashBegin() {
    var bash = document.getElementById("bash");
    bash.style.animationName = "bashTransform";
}

//工作经历
var indexWork = 0;
var txttimerWork;     //调用setInterval的返回值，用于取消对函数的周期性执行
var workText = "2014年7月份左右，在老师的推荐下，我来到了上海励容有限责任公司，开始了实习生活,由于公司的app是由第三方公司开发的," +
    "所以前期我主要是测试app中存在的问题,及时反馈给第三方公司,并提出新的需求,3个月后项目交付我主要负责项目的日常维护工作,由于后期公司对app这一块并不是很重视,我也就离开了这家公司" +
    ";2015年5月份我入职了现在这家公司-闪酷,由于公司是外包性质的公司,项目周期短,所以在这近2年中做的项目比较多,学到的知识也大有提升,基本上电商类的所有产品都接触到了;" +
    "由于自身的原因感觉到自己已经用OC开发了3年,所以非常想换一种语言开发,来不断提高自己,在闪酷的这2年中,我利用业余时间学习了swift编程,学习了html5,css3和js基础,也接触了" +
    "一些React Native知识,通过这样的学习我感觉到了自己对于编程的热爱.并且要求自己从基础开始一步步提高自己";
workText=workText.replace(/;/g,"\n");
function workExprience() {
    var newtext = workText.substring(0, indexWork+1);
    clearInterval(txttimerWork); // 先清除定时器,放置index不断增加
    if (indexWork>newtext.length) {  // 打字完成后就停止定时器
        clearInterval(txttimerWork);
        indexWork = 0;
        return;
    } else {
        document.getElementById("bash_body_inputWork").innerHTML = newtext;
        indexWork++;
        txttimerWork = setInterval("workExprience()",100);
    }
}
//工作经历动画
function bashWorkBegin() {
    var bash = document.getElementById("bash_work");
    bash.style.animationName = "bashTransform_Work";
}
