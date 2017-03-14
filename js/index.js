/**
 * Created by darren on 17/3/14.
 */
var tabs = document.getElementById('header').getElementsByTagName('li')
for(var i = 0; i < tabs.length; i++){
    tabs[i].onclick = function () {
        tabbarCilck(this)
    }
}

function tabbarCilck(tab) {
    for(var i = 0; i < tabs.length; i++){
        if (tabs[i]==tab) {
            tabs[i].className = "topSelected"
        } else  {
            tabs[i].className = ""
        }
    }
}
