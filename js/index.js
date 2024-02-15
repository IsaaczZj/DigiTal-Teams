let teams = []

criarBtn.onclick = () => {
  // alert("Clicou")
  console.log("Clicou rapaz");
  overlay.classList.add("show");
  formCriar.classList.add("show");
};
fecharBtn.onclick = () => {
  overlay.classList.remove("show");
  formCriar.classList.remove("show");
};

overlay.onclick = () => {
  overlay.classList.remove("show");
  formCriar.classList.remove("show");
};



formCriar.onsubmit = () => {
  event.preventDefault();

  teams.push({
    name: nome.value,
    capacity: capacidade.value,
    members: []

  });



  // listTeams.innerHTML = " ";
  // listTeams.innerHTML = `<li>
  //  <h4>${nome.value} <box-icon name='show'></box-icon></h4>
  //   <h1>0/ <span>${capacidade.value}</span></h1>
  //   <div class="actions">
  //   <button>adicionar</button>
  //   <button><box-icon name='trash'></box-icon></button>
  //   </div>`;

  alert(nome.value);

  overlay.classList.remove("show");
  formCriar.classList.remove("show");
};
