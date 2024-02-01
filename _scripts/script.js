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

$('section.domingo-perfeito').waypoint(function(direcao){
    if (direcao = 'down'){
        $('div.folha1').addClass('animate__animated animate__fadeInUp');
        $('div.folha3').addClass('animate__animated animate__fadeInUp');
        $('div.camarao').addClass('animate__animated animate__fadeInUp animate__slow');
        $('div.tomate').addClass('animate__animated animate__fadeInUp animate__slower');
        $('div.folha2').addClass('animate__animated animate__fadeInUp animate__slower');
        $('div.queijo').addClass('animate__animated animate__fadeInUp animate__slower');
    }
    if(direcao == 'up'){
        $('div.folha1').removeClass('animate__animated animate__fadeInUp');
        $('div.folha3').removeClass('animate__animated animate__fadeInUp');
        $('div.camarao').removeClass('animate__animated animate__fadeInUp animate__slow');
        $('div.tomate').removeClass('animate__animated animate__fadeInUp animate__slower');
        $('div.folha2').removeClass('animate__animated animate__fadeInUp animate__slower');
        $('div.queijo').removeClass('animate__animated animate__fadeInUp animate__slower');
    }
},{
    offset:'450px;'
})
 /* plano principal */

 $('section.plano-principal').waypoint(function(direcao){
    if(direcao == 'down'){
        $('div.planos').addClass('animate__animated animate__fadeInUp');
    }
    if(direcao == 'up'){
        $('div.planos').removeClass('animate__animated animate__fadeInUp');
    }
 },{
     offset:'450px;'

 })

 $('section.testemunha').waypoint(function(direcao){
     if(direcao == 'down'){
        $('div.testemunhos ul:eq(0)').addClass('animate__animated animate__fadeInUp animate__slower');
        $('div.testemunhos ul:eq(1)').addClass('animate__animated animate__fadeInUp animate__slow');
        $('div.testemunhos ul:eq(2)').addClass('animate__animated animate__fadeInUp animate__slower');
     }
     if (direcao == 'up'){
        $('div.testemunhos ul:eq(0)').removeClass('animate__animated animate__fadeInUp animate__slower');
        $('div.testemunhos ul:eq(1)').removeClass('animate__animated animate__fadeInUp animate__slow');
        $('div.testemunhos ul:eq(2)').removeClass('animate__animated animate__fadeInUp animate__slower');
     }
 },{
    offset: '400px;'
 })

 $('div.transicao-testemunha-plano').waypoint(function(direcao){
     if(direcao == 'down'){
        $('div.decoracao1').removeClass('animate__animated animate__fadeOutLeft animate__slow');
        $('div.decoracao2').removeClass('animate__animated animate__fadeOut animate__slow');
        $('div.decoracao3').removeClass('animate__animated animate__fadeOutRight animate__slow');

        $('div.decoracao1').addClass('animate__animated animate__fadeOutLeft animate__slow');
        $('div.decoracao2').addClass('animate__animated animate__fadeOut animate__slow');
        $('div.decoracao3').addClass('animate__animated animate__fadeOutRight animate__slow');
     }else{
        $('div.decoracao1').addClass('animate__animated animate__fadeOutLeft animate__slow');
        $('div.decoracao2').addClass('animate__animated animate__fadeOut animate__slow');
        $('div.decoracao3').addClass('animate__animated animate__fadeOutRight animate__slow');
     }
 },{
    offset: '600px;'
 })

 $('section.plano-principal').waypoint(function(direcao){

    if(direcao == 'down'){
        $('div.planos:eq(0)').addClass('animate__animated animate__fadeInLeft animate__slower');
        $('div.planos:eq(1)').addClass('animate__animated animate__fadeInUp animate__slower');
        $('div.planos:eq(2)').addClass('animate__animated animate__fadeRight animate__slower');
    } else{
        $('div.planos:eq(0)').removeClass('animate__animated animate__fadeInLeft animate__slower');
        $('div.planos:eq(1)').removeClass('animate__animated animate__fadeInUp animate__slower');
        $('div.planos:eq(2)').removeClass('animate__animated animate__fadeInRight animate__slower');
    }
    

 },{
     offset: '450px;'

 })

 $('footer').waypoint(function(direcao){
     if(direcao == 'down'){
         $('div.mapa').addClass('animate__animated animate__fadeIn');
         $('div.info').addClass('animate__animated animate__fadeIn');
         $('div.pizza-rodape-decoracao').addClass('animate__animated animate__fadeIn');
     } else{
        $('div.mapa').removeClass('animate__animated animate__fadeIn');
        $('div.info').removeClass('animate__animated animate__fadeIn');
        $('div.pizza-rodape-decoracao').removeClass('animate__animated animate__fadeIn');
     }

 },{
    offset: '650px;'
 })
 
 