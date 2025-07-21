(function () {

    const QR_URL = 'https://quickchart.io/qr?text={url}&size=500';

    // Получаем параметры из URL
    const params = new URLSearchParams(window.location.search);
    const ref = +params.get('ref');
    const userName = sanitizeName(params.get('name').replace('_', ' '));

    // Заполняем Мета-теги
    let documentTitle = document.title;
    if (userName) documentTitle += `: ${userName}`;
    if (ref) documentTitle += ` (ID: ${ref})`;

    document.title = documentTitle;

    ['og:title', 'og:description', 'twitter:title', 'twitter:description'].forEach(attribute => {
        const attributeEl = document.querySelector(`meta[property="${attribute}"]`);
        if (attributeEl) {
            attributeEl.setAttribute('content', documentTitle);
        }
    });

    // Получаем карточку
    const cardElement = document.getElementById('card');

    // Получаем элементы карточки
    const nameEl = document.getElementById('name');
    const titleEl = cardElement.querySelector('h2.landing-block-node-title');
    const textEl = cardElement.querySelector('div.landing-block-node-text');
    const imgEl = cardElement.querySelector('img.landing-block-node-img-8001');
    const buttonOpenEl = cardElement.querySelector('a.landing-block-node-button-3358');
    const buttonCopyEl = cardElement.querySelector('a.landing-block-node-button2-5049');

    // Заполняем имя и ID
    let content = nameEl.innerHTML;
    content = content.replace('{name}', userName || undefined);
    content = content.replace('{id}', ref || undefined);
    nameEl.innerHTML = content;

    // Добавляем кнопку закрытия
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';
    closeBtn.className = 'custom-popup-close';

    // Вешаем обрабочик на кнопку закрытия
    closeBtn.addEventListener('click', () => {
        // Скрываем модальное окно
        cardElement.classList.add('d-none');
        cardElement.classList.remove('qr-modal');
    });

    // Добавляем кнопку закрытия в блок модального окна
    cardElement.appendChild(closeBtn);

    // // Вешаем обработчик на кнопку Копирвоать
    buttonCopyEl.addEventListener('click', async (event) => {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();

        try {
            await navigator.clipboard.writeText(buttonCopyEl.href);
        } catch (e) {
            alert('Не удалось скопировать ссылку');
            console.error(e);
        }
    });

    // Скрываем карточку
    cardElement.classList.add('d-none');


    // Вешаем обработчики на кнопки
    document.querySelectorAll('[id^="menu_btn"]').forEach(blockBtn => {

        const button = blockBtn.querySelector('a.landing-block-node-button');
        if (!button) return;

        button.addEventListener('click', event => {
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();

            let url = button.href || '';
            let urlWithoutParams = '';

            if (url) {
                const urlObj = new URL(url);
                urlWithoutParams = urlObj.origin + urlObj.pathname;
            }

            const data = {
                title: event.currentTarget.textContent,
                id: ref,
                url: urlWithoutParams,
                // utm_campaign: blockBtn.textContent || '',
                utm_campaign: blockBtn.id?.split('-')?.[1] || '',
            }

            // Открываем popup с найденным блоком
            showModalQrCode(cardElement, data);

            return false;
        });
    }, true);


    // Вешаем обработчик на заголовок в модальном окне
    if (titleEl) {
        titleEl.addEventListener('click', event => textEl.classList.toggle('d-none'));
    }

    // Очищает имя от неразрешенных символов
    function sanitizeName(name) {
        if (!name) return '';
        return name.replace(/[^a-zA-Zа-яА-ЯёЁ0-9 \-_'"]/g, '');
    }

    // Показывает модальное окно
    function showModalQrCode(cardElement, data = {}) {

        if (!cardElement) return;

        // Добавляем в историю новое состояние для корректной работы "Назад"
        history.pushState({ modalOpen: true }, '');
        // Вешаем слушатель popstate
        window.addEventListener('popstate', event => onPopState(event, cardElement));

        const { title, id, url, utm_campaign } = data;

        // Ссылка в QR-коде
        const qrLink = `${url}?utm_source=qr-card&utm_medium=qrcode&utm_campaign=${utm_campaign}&ref=${id}`;
        // Ссылка для кнопки Открыть
        const openLink = `${url}?ref=${id}`;
        // Ссылка для кнопки Копировать
        const clipboardLink = `${url}?utm_source=qr-card&utm_medium=link&utm_campaign=${utm_campaign}&ref=${id}`;

        // Заполняем Блок текст - пишем туда URL qr-кода
        if (textEl) {
            textEl.textContent = qrLink;
            textEl.classList.add('d-none');
        }

        // Заполняем заголовок
        if (titleEl) {
            titleEl.textContent = title || '';
        }

        // Заполняем изображение QR-кода
        if (imgEl) {
            // Собираем URL для QR-кода
            const quickchartUrl = QR_URL.replace('{url}', encodeURIComponent(qrLink));
            imgEl.src = quickchartUrl;
            imgEl.dataset.src = quickchartUrl;
            imgEl.dataset.srcset = quickchartUrl;
        }

        // Заполняем ссылку в кнопке Открыть
        if (buttonOpenEl) {
            buttonOpenEl.href = openLink;
        }

        // Заполняем ссылку в кнопке Копировать
        if (buttonCopyEl) {
            buttonCopyEl.href = clipboardLink;
        }

        // Меняем классы модального окна
        cardElement.classList.add('qr-modal');
        cardElement.classList.remove('d-none');

    }


    // Закрывает модальное окно по действию "Назад"
    function closeModal(cardElement) {
        cardElement.classList.add('d-none');
        cardElement.classList.remove('qr-modal');

        if (history.state?.modalOpen) {
            history.back();
        }
        window.removeEventListener('popstate', event => onPopState(event, cardElement));
    }

    // Обработчик события popstate
    function onPopState(event, cardElement) {
        if (cardElement.classList.contains('qr-modal') && !cardElement.classList.contains('d-none')) {
            closeModal(cardElement);
        }
    }

})();