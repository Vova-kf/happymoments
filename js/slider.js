/*
1.Сделать клик по .slider__list
    - если клик был по картинке то заменить картинку в блоке slider__photo
    - добавить клас active картинке
    - если на картинке есть клас active то ничего не делать
*/

// Блок со списком фотографий
sliderListBlock = document.querySelector(".slider__list")
//Блок с большой фото
sliderPhotoImg = document.querySelector(".slider__photo img")

//Клик по блоку со списком фото
sliderListBlock.onclick = function (sobitie) {
    //делаем переменую для елемента по которому произошел клик
    // let работает только внурти функции
    let element = sobitie.target;
    //если элимент имеет тег img
    if (element.nodeName == "IMG") {
        //меняем путь большой картинки на ту по которой кликнули
        sliderPhotoImg.src = element.dataset.src;
        //выбрать активную картинку в списке фото
        let activeImage = document.querySelector(".slider__list img.active")
        //убрать класс active у активной картинки в списке фото
        activeImage.classList.remove("active")
        // добавить класс active активной картинке
        element.classList.add("active")

    }

}
/*
1. Вибрать кнопку Next
2. Сделать клик по кнопке Next
- выбрать следующий елемент в slider__list
    -убираем класс active у текущего елемента
    -добавляем класс active следующему елементу
    -меняем большую картинку
1. Проверка если мы дошли до самой последней картинки то после,
последнего клика вправо переходить на первую картинку
2. Проверка если мы кликаем влево, и это начало списка,
то после клика влево переходить на последнюю картинку
*/

nextBtn = document.querySelector(".slider__photo .next")
nextBtn.onclick = function () {
    //выбрать активную картинку в списке фото
    let activeImage = document.querySelector(".slider__list img.active");
    // выбрать следующую картинку
    let nextElement = activeImage.nextElementSibling;
    if (nextElement == null) {
        nextElement = activeImage.parentElement.firstElementChild
    }
    //убрать класс active у активной картинки в списке фото
    activeImage.classList.remove("active");
    //добавить следующему елементу  класс active
    nextElement.classList.add("active");
    sliderPhotoImg.src = nextElement.dataset.src

}
/*
1. Вибрать кнопку prev
2. Сделать клик по кнопке prev
- выбрать следующий елемент в slider__list
    -убираем класс active у текущего елемента
    -добавляем класс active следующему елементу
    -меняем большую картинку
*/
prevtBtn = document.querySelector(".slider__photo .prev");
prevtBtn.onclick = function () {
    //выбрать активную картинку в списке фото
    let activeImage = document.querySelector(".slider__list img.active");
    // выбрать следующую картинку
    let prevElement = activeImage.previousElementSibling;
    if (prevElement == null) {
        prevElement = activeImage.parentNode.lastElementChild
    }
    //убрать класс active у активной картинки в списке фото
    activeImage.classList.remove("active");
    //добавить следующему елементу  класс active
    prevElement.classList.add("active");
    sliderPhotoImg.src = prevElement.dataset.src

}

