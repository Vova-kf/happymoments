/*
1. Вибрать кнопку Я-исполнитель
2. Сделать клик по кнопке
3. Открить модальное окно
    - сделать display blok у модального окна
 */

buttonPerformer = document.querySelector(".button-performer")

attentionModal = document.querySelector(".attention__performer")

buttonPerformer.onclick = function () {
    attentionModal.style.display = "block"
}


/*
1. Вибрать кнопку Я - клиент
2. Сделать клик по кнопке
3. Открить модальное окно
    - сделать display blok у модального окна
 */

buttonClient = document.querySelector(".button-client")

clientModal = document.querySelector(".attention__client")

buttonClient.onclick = function () {
    clientModal.style.display = "block"
}


