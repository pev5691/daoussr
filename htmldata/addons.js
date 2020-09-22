/*
 * @project: WellBeingNetwork
 * @version: Development (beta)
 * @license: MIT (not for evil)
 * @copyright: Yuriy Ivanov (Vtools) 2017-2020 [progr76@gmail.com]
 * @copypaste: Evgeny Pustolenko (pev5691)  2019-2020 [pev5691@yandex.ru]
 * Facebook: https://www.facebook.com/pev5691
 * Telegram:  https://t.me/wellbeingnetwork
 * Github: https://github.com/pev5691/wbn1995
 * Discord: https://discord.gg/t9V9uj
 */
/*
window.open("http://localhost:63342/setting-depencies-daoussr/htmldata/slaider.html?_ijt=e2c0hd4brt8pl63dg1k1f5qgva", "_blank", "top=100, left=100, width=400, height=500, scrollbars=no, resizable=no");
*/
//создать переменную, в которой будем хранить ссылку на объект window открытого окна
var myWindow;
function myWindowOpen {
    myWindow = window.open("http://www.yandex.ru", “myWindow", "width=250, height=250");
}
function myWindowClose {
    if (myWindow) {
        myWindow.close();
        myWindow = null;
    }
}

<button onClick="myWindowOpen()">Oткрыть oкно</button>
<button onClick="myWindowClose()">Закрыть окно</button>