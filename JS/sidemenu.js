const menuAbrindo = document.getElementById('botao_menu');
const menu = document.getElementById('cabecalho_botoes');

menuAbrindo.addEventListener('click', ()=>{
    menu.classList.toggle('hidden');
});
