const orderButtonCollection = document.querySelectorAll('button[data-order]');

orderButtonCollection.forEach((button) => {
  button.addEventListener('click', createOrder);

  function createOrder(e) {
    const button = e.currentTarget;
    const container = button.parentNode;

    const order = {
      id: button.getAttribute('data-order'),
      title: container.querySelector('.js-title').innerText,
      price: container.querySelector('.js-price').innerText,
      desc: container.querySelector('.js-desc').innerText,
    };

    localStorage.setItem('order', JSON.stringify(order));

    const orderUrl = window.location.href.replace('pies.html', 'order.html');
    window.location.href = orderUrl;
  }
});
