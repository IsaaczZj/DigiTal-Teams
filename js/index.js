let teams = [];

criarBtn.onclick = () => {
  // alert("Clicou")
  console.log("Clicou rapaz");
  overlay.classList.toggle("show");
  formCriar.classList.toggle("show");
};
fecharBtn.onclick = () => {
  overlay.classList.toggle("show");
  formCriar.classList.toggle("show");
};

overlay.onclick = () => {
  overlay.classList.toggle("show");
  formCriar.classList.toggle("show");
};

formCriar.onsubmit = () => {
  event.preventDefault();

  teams.push({
    name: nome.value,
    capacity: capacidade.value,
    members: [],
  });

  adicionarCard()
  

  overlay.classList.remove("show");
  formCriar.classList.remove("show");
};

function adicionarCard() {
  listTeams.innerHTML = " ";
  for (let i = 0; i < teams.length; i++) {
    listTeams.innerHTML += `
    <li>
      <h4>${teams[i].name} <box-icon name='show'></box-icon></h4>
      <h1>0/ <span>${teams[i].capacity}</span></h1>
      <div class="actions">
        <button>adicionar</button>
        <button><box-icon name='trash'></box-icon></button>
      </div> 
      </li>`;
  }
}
