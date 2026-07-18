// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.navtoggle');
  var links = document.querySelector('.navlinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  // Contact form — submits to Formspree via fetch so we can show an
  // inline status message instead of a full page redirect.
  var form = document.querySelector('form.contact');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = document.querySelector('.form-status');
      var data = new FormData(form);
      status.textContent = 'Sending…';

      fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      })
        .then(function (response) {
          if (response.ok) {
            status.textContent = "Thanks — got it. I'll reply within a day or two.";
            form.reset();
          } else {
            status.textContent = 'Something went wrong — please email directly instead.';
          }
        })
        .catch(function () {
          status.textContent = 'Something went wrong — please email directly instead.';
        });
    });
  }
});
