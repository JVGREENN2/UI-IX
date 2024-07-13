//FUNÇÃO PRA INTERATIVIDADE COM O CSS:
document.getElementById('open_btn').addEventListener('click', function(){
    document.getElementById('sidebar').classList.toggle('open-sidebar'); });
    document.getElementById('logout_btn').addEventListener('click', function(){
        changeColor(grayColor);;})
    //////////////////////////////////////////////////////////////////////////
    //ALTERAR CORES DO BODY:
    //CONSTANTES:
    const darkColor = '#000000';
    const lightColor = '#FFFFFF';
    const blueColor = '#002699';
    const greenColor = '#336600';
    const yellowColor ='#FF7733';
    const redColor = '#800000';
    const purpleColor = '#660066';
    const grayColor = '#666699';
    //O QUE VAI ALTERAR:
    const body = document.getElementsByTagName('body')[0];
    const footer = document.getElementsByTagName('footer')[0];
    //ADICIONAR A FUNÇÃO PRO ID MUDAR A COR QUANDO APERTADO O BUTTON:
    document.getElementById('black_btn').addEventListener('click', function(){
        changeColor(darkColor, grayColor); });
    document.getElementById('blue_btn').addEventListener('click', function(){
        changeColor(blueColor, grayColor); });
    document.getElementById('green_btn').addEventListener('click', function(){
        changeColor(greenColor, grayColor); });
    document.getElementById('yellow_btn').addEventListener('click', function(){
        changeColor(yellowColor, grayColor); });
    document.getElementById('red_btn').addEventListener('click', function(){
        changeColor(redColor, grayColor); });
    document.getElementById('purple_btn').addEventListener('click', function(){
        changeColor(purpleColor, grayColor) ;});
    document.getElementById('light_btn').addEventListener('click', function(){
        changeColor(lightColor, grayColor); });
    //ADICIONA A FUNÇÃO CHANGE COLOR 2 PARÁMETROS, O DE MUDAR O BODY E FOOTER:
    function changeColor(backgroundColor, textColor) {
    body.style.backgroundColor = backgroundColor;
    body.style.color = textColor;
    footer.style.backgroundColor = backgroundColor;
    footer.style.color = textColor;}
    //DEFINE A COR INICIAL DO FOOTER E BODY:
    body.style.backgroundColor = grayColor;
    body.style.color = darkColor;
    footer.style.backgroundColor = grayColor;
    footer.style.color = darkColor;
    ///////////////////////////////////////////