const containerMain = document.querySelector('#containerCard');

const pesquisa = async () => {
  console.log("entrou aqui!!");
  var url = `http://localhost/public/api/user`;
  var dados = await fetch(url);
  var contas = await dados.json();
  console.log(contas.status);
  if (contas.status === "error") {
    paginaNadaEncontrado()
  } else if (contas.status != "error") {
    contruindoCard(contas.data);
  };
};

pesquisa();


const paginaNadaEncontrado = () => {
  containerMain.innerHTML += `
<h1 class="display-4">Não encotramos nada ;-;</h1>
<p class="lead">
  Adicione uma Pessoa
</p>

<form action="index.php" method="POST" enctype="multipart/form-data" class="row g-3">
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">E-mail</label>
  <input type="email" required class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Senha</label>
  <input type="password" required class="form-control" id="exampleFormControlInput1" placeholder="******">
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Nome</label>
  <input type="password" required class="form-control" id="exampleFormControlInput1" placeholder="Coloque seu nome">
</div>
<div class="mb-3">
  <label for="formFile" class="form-label">Default file input example</label>
  <input class="form-control" required type="file" id="formFile">
</div>
<div class="col-auto">
<button type="submit" class="btn btn-primary mb-3">Adicionar</button>
</div>
</form>

`


}


const contruindoCard = (contas) => {
  contas.forEach(element => {

    containerMain.innerHTML += `
    <div class="card mx-auto m-5" style = "width: 18rem;" >
        <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Cadrastros</h5>
                <p class="card-text">Dados de cadrastros encontrado do banco de dados</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Nome: ${element.nome}</li>
                <li class="list-group-item">E-mail: ${element.email}</li>
                <li class="list-group-item">Senha: ${element.senha}</li>
            </ul>
            </div>
         `
  });
}

