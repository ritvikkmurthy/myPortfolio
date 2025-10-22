 // Bootstrap form validation (simple)
    (function () {
      'use strict'
      var forms = document.querySelectorAll('.needs-validation')
      Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          } else {
            // simulate sending
            event.preventDefault();
            var btn = form.querySelector('button[type=submit]');
            btn.disabled = true; btn.innerText = 'Sending...';
            setTimeout(function(){
              btn.disabled = false; btn.innerText = 'Send Message';
              var modal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
              modal.hide();
              form.reset();
              alert('Thanks! Your message was sent (simulated).');
            }, 1200);
          }
          form.classList.add('was-validated')
        }, false)
      })
    })()

    // Small enhancement: close dropdowns on link click in mobile
    document.querySelectorAll('.navbar-collapse .nav-link').forEach(function(el){
      el.addEventListener('click', function(){
        var bsCollapse = new bootstrap.Collapse(document.querySelector('.navbar-collapse'), {toggle:false});
        bsCollapse.hide();
      })
    });