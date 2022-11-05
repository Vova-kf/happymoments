/*
1. Скрить блок .header__cities
2. Сделать клик по блоку #selectCity
    -выбрать блок #selectCity и поместить в переменую
    -Если у #selectCity есть класс active, то
        -скрыть блок .header__cities, и
        убрать класс active
    - иначе
        -показать блок .header__cities
        -добавить класс active
*/

selectCityBtn = document.querySelector("#selectCity")
headerCitiesBlock = document.querySelector(".header__cities")


selectCityBtn.onclick = function () {
    if (selectCityBtn.classList.contains("active") == true) {
        headerCitiesBlock.style.display = "none";
        selectCityBtn.classList.remove("active");
    } else {
        headerCitiesBlock.style.display = "block";
        selectCityBtn.classList.add("active");

    }
}
