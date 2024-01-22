function toastClose() {
  document.getElementById('toastContainer').classList.remove('active');
}

function popUpToast(title, message, color = '#1ccacd') {
  const toast = document.getElementById('toastContainer');
  document.getElementsByClassName('toast')[0].style.backgroundColor = color;
  toast.querySelector('.toast-title').innerText = title;
  toast.querySelector('.toast-message').innerText = message;
  toast.classList.add('active');

  window.setTimeout(() => {
    toast.classList.remove('active');
  }, 3000);
}

export { toastClose, popUpToast };
