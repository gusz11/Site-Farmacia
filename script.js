//darkmode
function toggleMode() {
    const html= document.documentElement

 html.classList.toggle('dark')
 const isDarkMode = html.classList.contains('dark');
 localStorage.setItem('darkMode', isDarkMode);
}

window.addEventListener('DOMContentLoaded', () => {
 const isDarkMode = localStorage.getItem('darkMode') === 'true';
 const html = document.documentElement;
 
 if (isDarkMode) {
   html.classList.add('dark');
 } else {
   html.classList.remove('dark');
 }
});


//confirmaçãoregistro
function confirmarEnvio() {
  Swal.fire({
    title: 'Tem certeza?',
    text: 'Deseja se registrar?',
    icon: 'question',
    color: '#000000' ,
    showCancelButton: true,
    confirmButtonColor: '#000000',
    cancelButtonColor: '#000000',
    confirmButtonText: 'Sim',
    cancelButtonText: 'Cancelar',
    background: '#4B7A27',
  }).then((result) => {
    if (result.isConfirmed) {
      document.getElementById("form").submit();
    }
  });

  return false; 
}


//confirmarformulário
function confirmarFormulario() {
  Swal.fire({
    title: 'Tem certeza?',
    text: 'Deseja enviar esse formulário?',
    icon: 'question',
    color: '#000000' ,
    showCancelButton: true,
    confirmButtonColor: '#000000',
    cancelButtonColor: '#000000',
    confirmButtonText: 'Sim',
    cancelButtonText: 'Cancelar',
    background: '#4B7A27',
  }).then((result) => {
    if (result.isConfirmed) {
      document.getElementById("form").submit();
    }
  });

  return false; 
}


//senha1
const password = document.getElementById('password');
const icon = document.getElementById('icon');

function showHide() {
  if(password.type === 'password') {
    password.setAttribute('type','text');
    icon.classList.add('hide')
  }
  else {
    password.setAttribute('type','password');
    icon.classList.remove('hide')
  }
}


//senha2
const passworde = document.getElementById('passworde');
const eye = document.getElementById('eye');

function showHide2() {
  if(passworde.type === 'password') {
    passworde.setAttribute('type','text');
    eye.classList.add('hide')
  }
  else {
    passworde.setAttribute('type','password');
    eye.classList.remove('hide')
  }
}


//senha3
const senha = document.getElementById('senha');
const olho = document.getElementById('olho');

function showHide3() {
  if(senha.type === 'password') {
    senha.setAttribute('type','text');
    olho.classList.add('hide')
  }
  else {
    senha.setAttribute('type','password');
    olho.classList.remove('hide')
  }
}