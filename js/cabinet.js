const cabinetSecurityForm = document.querySelector('#cabinetSecurityForm');

if (cabinetSecurityForm) {
  cabinetSecurityForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const modalSecurity = document.querySelector('.modal-security');
    if (modalSecurity) modalSecurity.classList.add('active');
  });
}
