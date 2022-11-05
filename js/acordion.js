/* Accardeon
 * Функционал аккордиона faq
    1.сделать клик по аккордеону -
    2.Получить элимент по которому произошел клик
    3. Проверить есть ли у елемента класс .accordion-item-header
    4. Проверить есть ли у родителя accordion-item класс show
        -Если класса нет, то добавить класс show ->.accordion-item
        -Если класс есть, то убрать класс show


*/
// вибираем наш акордеон
accordionItems = document.querySelector("#accordion")
// делаем клик и получаем собитие
accordionItems.onclick = function (event) {
    //провереем есль ли елемент по которому делаеться клик
    if (event.target.classList.contains("accordion-item-header")) {
        //провераем открит наш елемент или нет
        if (event.target.parentElement.classList.contains("show")) {
            // если был открит елемент закриваем его
            event.target.parentElement.classList.remove("show");
        } else {
            // делаем переменую родителя с классо show
            accordionItemsShow = document.querySelector('.accordion-item.show')
            // провераем вибрали мы елемент или нет
            if (accordionItemsShow != null) {

                accordionItemsShow.classList.remove("show")
            }
            // иначе добавляем елементу клас открить show
            event.target.parentElement.classList.add("show")
        }
    }
}