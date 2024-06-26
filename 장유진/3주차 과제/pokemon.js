document.addEventListener("DOMContentLoaded", function () {
  const pokemons = document.querySelectorAll(".container .pokemons .pokemon");

  const pokemonStats = {};

  function randomStats() {
    return Math.floor(Math.random() * 1000) + 1;
  }

  const pokemonImages = document.querySelectorAll('.pokemon .image');

  pokemonImages.forEach((image, index) => {
    image.addEventListener('click', () => {
      const ability = randomStats();
      const pokemonName = pokemons[index].getAttribute('class');
      alert(`${pokemonName}의 능력치: ${ability}`);
    });
  });

  const compareButton = document.createElement('button');
  compareButton.textContent = '능력치 비교';
  compareButton.id = 'compareBtn';
  document.querySelector('.container').appendChild(compareButton);

  compareButton.addEventListener("click", function () {
    const pokemon1 = parseInt(prompt("monster1을 선택해주세요. (숫자 입력)"));
    const pokemon2 = parseInt(prompt("monster2을 선택해주세요.(숫자입력)"));

    if (![pokemon1, pokemon2].every(pokemon => !isNaN(pokemon) && pokemon >= 0 && pokemon < pokemons.length)) {
      alert(`값이 올바르지 않습니다.`);
      return;
    }

    const pokemon1Stat = randomStats(); 
    const pokemon2Stat = randomStats(); 

    if (pokemon1Stat > pokemon2Stat) {
      alert(pokemon1 + "이 이깁니다.");
    } else if (pokemon1Stat < pokemon2Stat) {
      alert(pokemon2 + "이 이깁니다.");
    } else {
      alert("능력치가 동일합니다");
    }
  });
});
