/*
1. Вибрать кнопку Создать обявление
2. Сделать клик по кнопке
3. Открить модальное окно
    -сделать display blok у модального окна
    -сделать display blok у blur блока
 */

btnCreate = document.querySelector("#btn_create")
createModal = document.querySelector(".create__modal")

btnCreate.onclick = function () {
    createModal.style.display = "block"

}
/* закрить Создать обявление
*/
modalCloseCreate = document.querySelector(".modal__close-create")

modalCloseCreate.onclick = function () {
    createModal.style.display = "none"
}

