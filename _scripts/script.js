  /* direcao é uma variável, isto é, um alocamento de espaço na memória.
    Nesse caso, irá guardar como o usuário chegou naquele html, há duas possibilidades serão up
    (subindo) e down (descendo)
    */

$('section.pizza').waypoint(function(direcao){
  
   if (direcao == 'down'){
       $('section.pizza p').addClass('animate__animated animate__fadeInUp');
   }
   if (direcao =='up'){
       $('section.pizza p').removeClass('animate__animated animate__fadeInUp');
   }
},{
    offset:'450px;'
})

/* $('section.domingo-perfeito').waypoint(function(direcao)){
    if (direcao = "down"){

    }
} */

 /* plano principal */

 $('section.plano-principal').waypoint(function(direcao){
    if(direcao == 'down'){
        $('div.planos').addClass('animate__animated animate__bounceIn');
    }
    if(direcao == 'up'){
        $('div.planos').removeClass('animate__animated animate__bounceIn');
    }
 },{
     offset:'450px;'

 })