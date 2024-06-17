$(document).ready(function() {
  // Esta função é executada quando o documento HTML estiver completamente carregado
  
  // Quando o botão com id 'mobile_btn' é clicado
  $('#mobile_btn').on('click', function () {
      // ToggleClass adiciona ou remove a classe 'active' do elemento com id 'mobile_menu'
      $('#mobile_menu').toggleClass('active');
      // Encontra o ícone dentro do elemento com id 'mobile_btn' e alterna entre as classes 'fa-x'
      $('#mobile_btn').find('i').toggleClass('fa-x');
  });

  // Seleciona todas as seções no documento
  const sections = $('section');
  // Seleciona todos os itens de navegação com a classe 'nav-item'
  const navItems = $('.nav-item');


  //codigo ajusta posição da nav-item active para que assim que comece a section na janela ele mude o active para o nav-item adequado.
  // Adiciona um evento de rolagem à janela do navegador usando jQuery
  $(window).on('scroll', function () {
      // Seleciona o cabeçalho
      const header = $('header');
      // Obtém a posição atual de rolagem vertical e subtrai a altura do cabeçalho
      const scrollPosition = $(window).scrollTop() - header.outerHeight();

      // Define um índice para a seção ativa
      let activeSectionIndex = 0;

      // Altera a sombra do cabeçalho com base na posição de rolagem
      if (scrollPosition <= 0) {
          header.css('box-shadow', 'none');
      } else {
          header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
      }

      // Itera sobre todas as seções
      sections.each(function(i) {
          const section = $(this);
          // Obtém a posição superior e inferior da seção
          const sectionTop = section.offset().top - 140 - $('header').outerHeight();
          const sectionBottom = sectionTop + section.outerHeight();

          // Verifica se a posição de rolagem está dentro dos limites da seção
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
              activeSectionIndex = i;
              return false; // Para o loop quando encontrar a seção ativa
          }
      })
      // Remove a classe 'active' de todos os itens de navegação e adiciona à seção ativa
      navItems.removeClass('active');
      $(navItems[activeSectionIndex]).addClass('active');
  });

  // Configurações de animação de revelação usando a biblioteca ScrollReveal
  ScrollReveal().reveal('#cta', {
      origin: 'left',
      duration: 2000,
      distance: '20%'
  });

  ScrollReveal().reveal('.title_t', {
      origin: 'left',
      duration: 2000,
      distance: '10%'
  });

  ScrollReveal().reveal('.conteiner', {
      origin: 'left',
      duration: 1000,
      distance: '20%'
  });

  ScrollReveal().reveal('#tutorial', {
      origin: 'left',
      duration: 1000,
      distance: '20%'
  });

  ScrollReveal().reveal('.feedback', {
      origin: 'right',
      duration: 1000,
      distance: '20%'
  });

  ScrollReveal().reveal('#home', {
      origin: 'top',
      duration: 2000,
      distance: '30%'
  });
});

  // Função para rolar para o elemento de destino com uma distância específica do topo
function scrollToElement(elementId, offset) {
    var element = document.getElementById(elementId);
    if (element) {
      var offsetTop = element.offsetTop - offset;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth' // para uma rolagem suave, se suportado pelo navegador
      });
    }
  }
  
  // Seletor para o link interno que aponta para o ID "tutorial"
  var linkParaTutorial = document.querySelector('a[href="#tutorial"]');
  
  // Adicionar evento de clique para o link interno do tutorial
  linkParaTutorial.addEventListener('click', function(event) {
    // Previna o comportamento padrão do link
    event.preventDefault();
    
    // Chame a função de rolagem para o elemento de destino com uma distância de 50 pixels do topo
    scrollToElement('tutorial', 50);
  });
  // Função para rolar para o elemento de destino com uma distância específica do topo
function scrollToElement(elementId, offset) {
    var element = document.getElementById(elementId);
    if (element) {
      var offsetTop = element.offsetTop - offset;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth' // para uma rolagem suave, se suportado pelo navegador
      });
    }
  }
  //itemmm


///
// Seletor para todos os links internos que apontam para IDs
var linksParaItens = document.querySelectorAll('a[href^="#"]');

// Função para rolar para o conteúdo do elemento de destino mantendo uma distância fixa do topo
function scrollToWithMargin(element) {
  var offset = 100; // Distância fixa do topo (ajuste conforme necessário)
  var elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  var offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth' // para uma rolagem suave, se suportado pelo navegador
  });
}

// Adicionar evento de clique para cada link interno
linksParaItens.forEach(function(link) {
  link.addEventListener('click', function(event) {
    // Verifica se o link interno é para um elemento com ID
    if (this.getAttribute('href').startsWith('#')) {
      // Previna o comportamento padrão do link
      event.preventDefault();
      
      // Obtenha o ID do elemento de destino do atributo href do link
      var targetId = this.getAttribute('href').slice(1); // Remova o caractere '#' do início
      
      // Rolar para o conteúdo do elemento de destino mantendo uma distância fixa do topo
      scrollToWithMargin(document.getElementById(targetId));
    }
  });
});
//scroll spy


// script.js

// Certifique-se de que o código só será executado após o DOM estar completamente carregado
document.addEventListener('DOMContentLoaded', (event) => {
  // Adiciona o evento de clique ao botão com a classe button-link
  document.querySelector('.button-link').onclick = function() {
    // Redireciona para a URL especificada
    window.location.href = 'https://www.example.com';
  };
});
