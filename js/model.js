/*
1. Вибрать кнопку
2. Сделать клик по кнопке
3. Открить модальное окно
    -сделать display blok у модального окна
    -сделать display blok у blur блока
 */

modalBlurBlock = document.querySelector(".modal-blur");
btnModalLogin = document.querySelector("#btnModalLogin")
modalLoginBlock = document.querySelector("#modalLogin")

btnModalLogin.onclick = function () {
    modalBlurBlock.style.display = "block"
    modalLoginBlock.style.display = "block"
}
/*
Закрить модальное окно
*/
btnModalClose = document.querySelector(".modal .modal__close")

btnModalClose.onclick = function () {
    modalBlurBlock.style.display = "none"
    modalLoginBlock.style.display = "none"
}
/*
==========================================================================
*/
