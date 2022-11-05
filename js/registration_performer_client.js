/*
1. Вибрать кнопку Создать обявление
2. Сделать клик по кнопке
3. Открить модальное окно
    -сделать display blok у модального окна
    -сделать display blok у blur блока
 */

buttonOk = document.querySelector("#button_continue")
completionRegister = document.querySelector(".completion__register")

buttonOk.onclick = function () {
    completionRegister.style.display = "block"

}
/* закрить Создать обявление
*/
closeCompletion = document.querySelector(".completion__register-header span")

closeCompletion.onclick = function () {
    completionRegister.style.display = "none"

}
