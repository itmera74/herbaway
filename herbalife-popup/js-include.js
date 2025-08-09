// Popup HTML
var varHTML = '<style>html{font-family: sans-serif; line-height: 1.15; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%}body{margin: 0; font-family: \'Helvetica\', \'Arial\', sans-serif !important;}p{margin: 0.5em;}p.para-lead{font-size: 1.2em; margin: 0.75em;}a{background-color: transparent; -webkit-text-decoration-skip: objects}a:active,a:hover{outline-width: 0}#herbalifepopup p,#herbalifepopup h1{font-family: \'Helvetica\', \'Arial\', sans-serif!important; color: #6c6d70!important}.herbalife-popup{position: fixed !important; top: 0 !important; right: 0 !important; bottom: 0 !important; left: 0 !important; z-index: 999999 !important; text-align: center !important; display: none; color: #6c6d70 !important}.herbalife-bg{position: absolute !important; top: 0 !important; right: 0 !important; bottom: 0 !important; left: 0 !important; background: #000 !important; opacity: 0.9 !important; z-index: 999998 !important}.herbalife-wrap{min-width: 400px !important; height: auto !important; max-height: 100% !important; position: absolute !important; top: 50% !important; left: 50% !important; z-index: 999999 !important; transform: translate(-50%, -50%) !important; margin: 0 auto !important; color: #6c6d70 !important;}.herbalife-content{position: relative !important; display: inline-block !important; padding: 15px !important; background: #fff !important; color: #6c6d70 !important}.herbalife-info{position: relative !important; float: left !important; padding: 15px !important; border: 3px solid #7ac142 !important; color: #6c6d70 !important}.herbalife-info h1{width: calc(100% - 2rem) !important; margin: 0 0 15px 0 !important; padding: 0 !important; font-size: 18px !important; line-height: 1em!important; font-weight: bold !important; color: #6c6d70 !important}.herbalife-info .herbalife-close{position: absolute !important; top: 5px !important; right: 10px !important; background: #7ac142 !important; border-radius: 50% !important; font-size: 12px !important; font-weight: bold; color: #fff !important; padding: 8px !important; text-decoration: none !important; text-align: center !important; cursor: pointer !important; line-height: 8px;}.herbalife-info .herbalife-close:hover{background: #6c6d70 !important;}.herbalife-info .herbalife-row{position: relative !important; float: left !important; color: #6c6d70 !important}.herbalife-info .left-col{width: 60% !important; position: relative !important; float: left !important; color: #6c6d70 !important}.herbalife-info .left-col.border{width: calc(60% - 16px) !important; padding: 0 15px 0 0 !important; /*border-right: 1px solid #7ac142 !important;*/ color: #6c6d70 !important}.herbalife-info .left-col img{max-width: 100% !important; height: auto; color: #6c6d70 !important}.herbalife-info .left-col img.f-right{float: right !important; margin: 10px 0 0 0 !important; color: #6c6d70 !important}.herbalife-info .right-col{width: 40% !important; position: relative !important; float: left !important; color: #6c6d70 !important}.herbalife-info .right-col.border{width: calc(40% - 15px) !important; padding: 0 0 0 15px !important; color: #6c6d70 !important; border-left: 1px solid #7ac142 !important;}.herbalife-info .right-col p.copy{margin: 15px 0 0 0 !important; font-size: 14px !important; line-height: 13px !important; color: #6c6d70 !important}.herbalife-info .right-col p span{color: #7ac142 !important}.herbalife-info p a{font-weight: bold; text-decoration: none; color: #6c6d70!important}.clear{height: 0px !important; line-height: 0px !important; clear: both !important}@media screen and (max-width:767px){.herbalife-wrap{overflow-y: auto; min-width: 90% !important}.herbalife-info .left-col, .herbalife-info .right-col, .herbalife-info .left-col.border, .herbalife-info .right-col.border{width: 100% !important; margin: 0 0 10px 0 !important; padding: 0 !important; border: 0 !important}.herbalife-info .left-col.border{text-align: center !important}.herbalife-info h1{font-size: 0.95em!important; line-height: 1.2em!important;}.herbalife-info .right-col, .herbalife-info .right-col.border{margin: 0 !important}.herbalife-info .left-col{margin: 0 !important}.herbalife-info .left-col img.f-right{float: left !important; margin: 5px 0 0 0 !important}.para-lead{font-size: 1em!important;}p{font-size: 0.85em; line-height: 1.4em!important;}}@media screen and (min-width:768px){.herbalife-wrap{min-width: 768px !important}}@media screen and (min-width:850px){.herbalife-wrap{min-width: 850px !important}}</style><div id="herbalifepopup"> <div class="herbalife-popup" id="wc_herba_popup"> <div class="herbalife-bg">&nbsp;</div><div class="herbalife-wrap"> <div class="herbalife-content"> <div class="herbalife-info"><a class="herbalife-close" href="#" onclick="wcHidePopUp()">x</a> <p class="para-lead">Данный сайт принадлежит Независимому Партнеру Herbalife Nutrition [ВСТАВИТЬ ИМЯ и ФАМИЛИЮ]</p><div class="herbalife-row"> <div class="left-col border"> <h1>У Вас уже есть Консультант по питанию?</h1> <p>Отношения с Вашим Консультантом являются ключом к достижению Ваших целей в области здорового образа жизни. Если [ИМЯ И ФАМИЛИЯ НЕЗАВИСИМОГО ПАРТНЕРА] не является Вашим Консультантом по питанию, мы настоятельно рекомендуем Вам обратиться к своему Консультанту по вопросам приобретения продукции. Если у Вас еще нет Консультанта по питанию, <a href="#" onclick="wcHidePopUp()">нажмите здесь</a>, чтобы продолжить. </p></div><div class="right-col border"> <h1>Вы уже являетесь Независимым Партнером Herbalife Nutrition?</h1> <p>Чтобы разместить заказ на свой ID, пожалуйста, посетите сайт <a href="https://www.myherbalife.com/ru-RU">myherbalife.com</a></p></div></div><div class="clear">&nbsp;</div></div></div></div></div></div>';

// Write HTML

document.getElementById('herbalifepopup').innerHTML = varHTML;

// Set a cookie
function wcSetCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Get a cookie
function wcGetCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}

// Hide popup
function wcHidePopUp () {
    document.getElementById('wc_herba_popup').style.display = 'none'; // or 'block', or whatever.
}

var cookie_content = wcGetCookie('wc_popup_herba');

if (cookie_content != "shown") {
    console.log('unset');
    document.getElementById('wc_herba_popup').style.display = 'block'; // or 'block', or whatever.
    wcSetCookie('wc_popup_herba', 'shown');
}