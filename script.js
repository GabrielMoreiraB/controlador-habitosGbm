const form = document.querySelector(".form-habits")
const nlwSetup = new NLWSetup(form);
const button = document.querySelector(".cabecalho__botao");

button.addEventListener("click", add);
form.addEventListener("change", save);


function add(){
  const today = new Date().toLocaleDateString('pt-br').slice(0,-5);
  const dayExists = nlwSetup.dayExists(today);

  if(dayExists){
    alert('Dia já incluso');
    return;
  }
  nlwSetup.addDay(today);
}

function save(){
  localStorage.setItem('gSetup@habits', JSON.stringify(nlwSetup.data));
}
const data = JSON.parse(localStorage.getItem('gSetup@habits')) || {};

nlwSetup.setData(data)
nlwSetup.load()

//const data = {
//  run: ["01-01", "01-02", "01-06", "01-07", "01-08", "01-09"],
//  water: ["01-04", "01-05"],
//  food: ["01-01", "01-03"],
//  takePills: ["01-03"],
//  journal: ["01-02", "01-03", "01-06"],
//}