






document.querySelector('.search').addEventListener('submit', async (event) =>{
    event.preventDefault();

    let input = document.querySelector('#searchInput').value;
  
   // if(input !== ''){
    //    showWarning('Carregando...');
    //}else
    const data = await getData(input);

    showInfo(data);       
})

async function getData(input){
    const baseURL = `https://api.sampleapis.com/coffee/hot?q=${encodeURI(input)}`;
    const response = await fetch(baseURL);
    const data = await response.json();
   
    return data;
    
}

function showInfo(data) {
   // showWarning('');
    const ul = document.getElementById('myUL');
    //ul.innerHTML = '';

    data.forEach(object => {
        const { title,description } = object;
        
        const li = document.createElement('li');
        li.innerHTML = `<a> <strong>${title}</strong> <em>${description}</em> </a>`
        ul.appendChild(li);


        //ul.style.display = 'block';


/*
        document.querySelector('.title').innerHTML = title;
        document.querySelector('.description').innerHTML = description;

        console.log(object);
        document.querySelector('pre').innerHTML += 'teste';
 */       
    });

    
}

/*
function show(title,description,data){
 
        let optionsHtml = '';
        for(let i in data) {
            optionsHtml += `<div data-op="${title}" class="title"><span>${parseInt(i)+1}</span> ${title}</div>`;
        }
        document.querySelector('.options').innerHTML = optionsHtml;
        
}
*/





/* REF:  https://www.w3schools.com/howto/howto_js_filter_lists.asp  */ 
function myFunction(object) {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText ;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}












/*****************************************************************/
/*
function produto(nome, tipo, preco, descricao){
    this.nome = nome;
    this.tipo = tipo;
    this.preco = preco;
    this.desc = descricao;
 }
 
 //Chamar a função
 const meuProduto = new produto(object.title);
 
 //Pegar id da lista
 const lista = document.getElementById('lista');
 
 //Criar elemento para cada campo
 const itemPro = document.createElement('li');
 const itemTip = document.createElement('li');
 const itemPre = document.createElement('li');
 const itemDes = document.createElement('li');
 
 //Atribuir valores para cada elemento
 itemPro.innerHTML = "Produto: " + " " + meuProduto.nome;
 itemTip.innerHTML = "Tipo: " + " " + meuProduto.tipo;
 itemPre.innerHTML = "Preço: " + " " + meuProduto.preco;
 itemDes.innerHTML = "Descrição: " + " " + meuProduto.desc;
 
 //Adicionar cada elemento na lista ul
 lista.appendChild(itemPro);
 lista.appendChild(itemTip);
 lista.appendChild(itemPre);
 lista.appendChild(itemDes);







/*
    document.querySelector('.resultado').style.display = 'block';

    document.querySelector('.name').innerHTML = `${resp[0].name}`;
    //document.querySelector('.tempInfo').innerHTML = `${resp[0].price}`;

    document.querySelector('.name').innerHTML = JSON.stringify(data, null, 2);
    console.log("CONSOLE", resp[0].price);



    //document.querySelector(".resultado").innerHTML = JSON.stringify(data, null, 2);
    //document.querySelector('.name').innerHTML = JSON.stringify(`${data.name}`, null, 2); 
    
    
    //document.querySelector('.tempo img').setAttribute('src', `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`);
    
   
}

function showWarning(msg){
    document.querySelector('.aviso').innerHTML = msg;
}      

/*


        const baseURL = `https://api.sampleapis.com/beers/ale?q=${encodeURI(input)}`;
        
        
        fetch(baseURL)
            .then(resp => resp.json())
            .then(data => showInfo(data));

         

        //let results = await fetch(url);
        //let json = await results.json();
       
        //console.log(data);

        //if(resp.cod === 200) {
            /*
            showInfo({
                name: resp[0].name
                
            });
            */
        //} else {
         //   showWarning('Não encontramos esta localização.')
         //}
 








 //IF TERNARIO
        //input !== '' ? showWarning('Carregando...') : await getData()