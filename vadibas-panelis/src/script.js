// Функция для отправки формы на сервер
function sendForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://example.com/api/form');
    xhr.send(formData);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
        // Оповещение пользователя об успешной отправке формы
      }
    }
  }
  
  // Обработчик события для кнопки "Добавить в корзину"
  document.querySelector('.add-to-cart').addEventListener('click', function() {
    const productId = this.dataset.productId;
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://example.com/api/cart');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({productId}));
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
        // Обновление содержимого корзины на странице
      }
    }
  });
  
  // Функция для загрузки списка товаров из API
  function loadProducts() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://example.com/api/products');
    xhr.send();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const products = JSON.parse(xhr.responseText);
        // Вывод списка товаров на страницу
      }
    }
  }