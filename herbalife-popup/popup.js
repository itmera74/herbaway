(function () {

    // <link rel="stylesheet" href="https://itmera74.github.io/herbaway/herbalife-popup/popup.css">

    const varHTML = `
        <link rel="stylesheet" href="/herbalife-popup/popup.css">
        <div class="herbalife-popup" id="wc_herba_popup">
            <div class="herbalife-bg btn-close"></div>
            <div class="herbalife-wrap">
                <div class="herbalife-content">
                <a class="herbalife-close btn-close" href="#">&times;</a>
                    <div class="herbalife-info">
                        <p class="popup-lead">
                            Данный сайт принадлежит Независимому Партнеру Herbalife
                        </p>

                        <div class="herbalife-row">

                            <div class="col">
                                <h3>У Вас уже есть Консультант по питанию?</h3>
                                <p>
                                    Отношения с вашим Консультантом являются ключом к достижению ваших целей в
                                    области здорового образа жизни.
                                    Если у Вас уже есть Консультант по питанию, мы настоятельно рекомендуем Вам
                                    обратиться к своему Консультанту по вопросам приобретения продукции.
                                </p>
                                <p>
                                    Если у Вас еще нет Консультанта по питанию,
                                    <a class="btn-close" href="#">нажмите&nbsp;здесь</a>, чтобы продолжить.
                                </p>
                            </div>
                            
                            <div class="separator"></div>
                            
                            <div class="col">
                                <h3>Вы уже являетесь Независимым Партнером Herbalife?</h3>
                                <p>
                                    Чтобы разместить заказ на свой ID, пожалуйста, посетите сайт
                                    <a href="https://www.myherbalife.com/ru-RU" target="_blank"
                                        rel="noopener noreferrer">
                                        myherbalife.com
                                    </a>
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>`;

    
    document.addEventListener('DOMContentLoaded', () => {
        
        const cookieHlf = getCookie('wc_popup_herba');
        const cookieQrCode = getCookie('qr_code');
        if (cookieHlf === 'shown' || cookieQrCode === '1') return;
        
        // Добавляем код окна на страницу
        const popupEl = document.getElementById('herbalifepopup');
        popupEl.innerHTML = varHTML;
        
        // Получаем все кнопки
        const btnCloseEls = popupEl.querySelectorAll('.btn-close');
        // Вешаем обработчики на все кнопки
        btnCloseEls.forEach(btn => btn.addEventListener('click', (event) => {
            event.preventDefault();
            hidePopUp(popupEl);
        }));
        
        // Вешаем обработчки на кнопку Esc и Space
        document.addEventListener('keydown', (event) => {
            if (event.code === 'Escape' || event.code === 'Space') {
                hidePopUp(popupEl);
            }
        });
        
        // Отображаем окно
        popupEl.classList.remove('d-none');

    });


    // Set a cookie
    function setCookie(name, value, days) {
        const maxAge = days * 24 * 60 * 60;
        name = encodeURIComponent(name);
        value = encodeURIComponent(value);
        document.cookie = `${name}=${value}; samesite=strict; secure; max-age=${maxAge}; path=/`;
    }

    // Get a cookie
    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    // Hide popup
    function hidePopUp(popupEl) {
        if (popupEl.classList.contains('d-none')) return;
        popupEl.classList.add('d-none');
        setCookie('wc_popup_herba', 'shown', 30);
    }

})();


