let teams = JSON.parse(localStorage.getItem("lista")) || [];

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
fecharParticipanteBtn.onclick = () =>{
	overlay.classList.remove('show')
	formAddParticipante.classList.remove('show')
}

overlay.onclick = () => {
  overlay.classList.remove("show");
  formCriar.classList.remove("show");
  formAddParticipante.classList.remove('show')
};

formCriar.onsubmit = () => {
  event.preventDefault();

  if(verificarLista(nome.value)){
	
	alert('Esse nome ja esta em uso')
  }
  else{
	teams.push({
		name: nome.value,
		capacity: capacidade.value,
		members: [],
	});
  }

  localStorage.setItem("lista", JSON.stringify(teams))
  
  adicionarCard()
  

  overlay.classList.remove("show");
  formCriar.classList.remove("show");
};


formAddParticipante.onsubmit = () =>{
	event.preventDefault()
	if(teams[Number(teamID.value)].members.length == teams[Number(teamID.value)].capacity){
		alert('Capacidade maxima atingida')
	}
	else{
		teams[Number(teamID.value)].members.push(nomeParticipante.value)
		localStorage.setItem("lista", JSON.stringify(teams))
		alert('Participante inserido com sucesso')
		formAddParticipante.reset()
		adicionarCard()
	}
	
}


function adicionarCard() {
  
  listTeams.innerHTML = " ";
  if(teams.length === 0){
	listTeams.innerHTML = '<li class="semTime"><h4>Nenhum time criado</h4></li>'
	return
  }

  for (let i = 0; i < teams.length; i++) {
    listTeams.innerHTML += `
    <li>
      <h4>${teams[i].name} <box-icon name='show' onclick="mostrarParticipantes(${i})"></box-icon></h4>
      <h1>${teams[i].members.length}/ <span>${teams[i].capacity}</span></h1>
      <div class="actions">
        <button onclick = "mostrarFormParticipante(${i})">adicionar</button>
        <button onclick="aparecerExclusao(${i})"><box-icon name='trash'></box-icon></button>
      </div> 
      </li>`;
  }
}
adicionarCard()

function removerCard(){
	let auxArray = []
	for(let i = 0; i < teams.length;i++){
		if(i != sim.posicao){
			auxArray.push(teams[i])
		}

	}
	teams = auxArray
	localStorage.setItem("lista", JSON.stringify(teams))
	adicionarCard()
}

function verificarLista(nomeDoTeams){
	let achou = false
	for(let i = 0;i<teams.length;i++){
		if(teams[i].name === nomeDoTeams){
			achou = true
		}
	}
	return achou
}

function mostrarFormParticipante(indice){
	overlay.classList.add("show")
	formAddParticipante.classList.add("show")
	teamID.value = indice
}

function aparecerExclusao(i){
	sim.posicao = i;
	confirmarExcluirTeam.classList.add("show")
	overlay.classList.add("show")
}

function desaparecerExclusao(){
	event.preventDefault()
	confirmarExcluirTeam.classList.remove("show")
	overlay.classList.remove("show")
}
function mostrarParticipantes(indice){
	alert(teams[indice].members)
}