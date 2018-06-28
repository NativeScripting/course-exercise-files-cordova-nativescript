window.myApp = {};

// this is populated on deviceready
let allPokemon = [];

// This is OnsenUI's bootstrap event
document.addEventListener('init', event => {
  const page = event.target;

  if (page.id === 'master') {
    renderMasterPage(page);

  } else if (page.id === 'detail') {
    renderDetailPage(page);
  }
});

function renderMasterPage(page) {
  document.getElementById('sortingSegment').addEventListener('postchange', event => {
    const sortAZ = event.index === 0;
    sortPokemon(sortAZ);
    renderMasterPagePokemonList();
  });

  document.addEventListener('offline', () => {
    document.querySelector('.connection-offline').style.display = "block";
  });

  document.addEventListener('online', () => {
    document.querySelector('.connection-offline').style.display = "none";
  });
}

function sortPokemon(asc) {
  allPokemon.sort((a, b) => a.name > b.name ? (asc ? 1 : -1) : (asc ? -1 : 1));
}

function renderMasterPagePokemonList() {
  const list = document.querySelector('ons-list');
  list.innerHTML = "";

  allPokemon.forEach((pokemon, i) => {
    const newItem = document.createElement('ons-list-item');
    newItem.id = i;
    newItem.innerHTML = `
           <div class="left">
              <img class="pokemon-sprite list-item__thumbnail" src="${pokemon.sprite}">
            </div>
            <div class="center">
              <span class="pokemon-name">${pokemon.name}</span>
            </div>`;
    list.appendChild(newItem);
  });

  document.querySelector('ons-list').onclick = event => {
    let item = event.target;
    while (item.tagName.toLowerCase() !== 'ons-list-item') {
      item = item.parentNode;
      if (!item.tagName || item.tagName.toLowerCase() === 'ons-list') {
        return;
      }
    }
    document.querySelector('#pokemonNavigator').pushPage('page2.html', {data: {pokemon: allPokemon[item.id]}});
  };
}

function renderDetailPage(page) {
  page.querySelector('ons-toolbar .center').innerHTML = page.data.pokemon.name;
  page.querySelector('img.pokemon-sprite').src = page.data.pokemon.sprite;

  page.querySelector('ons-toolbar .share-button').onclick = () => {
    window.plugins.socialsharing.shareWithOptions({
      files: [page.data.pokemon.sprite]
    });
  };

  let types = "";
  page.data.pokemon.types.forEach(type => types += `<span class="pokemon-type">${type}</span>`);
  document.querySelector('.pokemon-types').innerHTML = types;
}

// in Cordova, you need to wait for deviceready to fire before using plugins
document.addEventListener('deviceready', () => {
  // now use cordova-plugin-file to load our pokemon JSON data
  const path = cordova.file.applicationDirectory + "www/pokemon-data/pokemon.json";

  window.resolveLocalFileSystemURI(path, fileEntry => {
    fileEntry.file(file => {
      const reader = new FileReader();
      reader.onloadend = function (e) {
        allPokemon = JSON.parse(this.result);
        sortPokemon(true);
        renderMasterPagePokemonList();
      };
      reader.readAsText(file);
    });
  });
});
