// script.js
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('volForm');
  const success = document.getElementById('successMsg');
  const clearBtn = document.getElementById('clearBtn');

  // Load saved demo data
  const saved = JSON.parse(localStorage.getItem('hb_volunteer') || 'null');
  if (saved) {
    document.getElementById('name').value = saved.name || '';
    document.getElementById('email').value = saved.email || '';
    document.getElementById('phone').value = saved.phone || '';
    document.getElementById('area').value = saved.area || 'education';
    document.getElementById('message').value = saved.message || '';
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }
    const data = {
      name: document.getElementById('name').value.trim(),
      email: document.getElementById('email').value.trim(),
      phone: document.getElementById('phone').value.trim(),
      area: document.getElementById('area').value,
      message: document.getElementById('message').value.trim(),
      ts: new Date().toISOString()
    };
    // For this demo we store submissions in localStorage
    localStorage.setItem('hb_volunteer', JSON.stringify(data));
    success.classList.remove('d-none');
    form.reset();
    form.classList.remove('was-validated');
    // hide success after 4s
    setTimeout(()=> success.classList.add('d-none'), 4000);
    console.log('Volunteer (demo) saved:', data);
  });

  clearBtn.addEventListener('click', function () {
    localStorage.removeItem('hb_volunteer');
    alert('Saved demo data cleared.');
  });
});
