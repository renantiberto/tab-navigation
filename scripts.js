const $ = document.querySelector.bind(document);

function TabNavigation() {
  const html = {
    links: [...$('.tab-links').children],
    contents: [...$('.tab-content').children],
    openTab: $('[data-default]'),
  };
  
  // Ao carregar a página o conteúdo das Tabs devem estar ocultos
  function hideAllTabContent() {
    html.contents.forEach(section => {
      section.style.display = "none";
    });
  };

  // Selecionando a Tab específica
  function selectTab(event) {
    hideAllTabContent();
    removeAllActiveClasses();
    
    const target = event.currentTarget;
    showCurrentTab(target.dataset.id);

    target.className += " active";
  }

  // Função que irá ouvir as mudanças que estão ocorrendo na aplicação
  function listenForChange() {
    html.links.forEach(tab => {
      tab.addEventListener('click', selectTab)
    });
  };

  //Removendo todas as classses ativas das Tabs
  function removeAllActiveClasses() {
    html.links.forEach(tab => {
      tab.className = tab.className.replace(" active", "");
    });
  };

  // Ao clicar na Tab deve ser exibido o conteúdo da Tab clicada
  function showCurrentTab(id) {
    const tabcontent = $('#' + id);
    tabcontent.style.display = 'block';
  }
  
  // Iniciar o código por completo
  function init() {
    hideAllTabContent();
    listenForChange();

    html.openTab.click();
  }

  return {
    init
  }
}

window.addEventListener('load', () => {
  const tabNavigation = TabNavigation();
  tabNavigation.init();
});