document.querySelector('.busca').addEventListener('submit', async (event) =>{
    event.preventDefault();

    let input = document.querySelector('#searchInput').value;
  
    console.log(input);

   // if(input !== ''){
    //    showWarning('Carregando...');
    //}else
    const data = await getData(input);

    showInfo(data);       
})

async function getData(input){
    const baseURL = `https://api.sampleapis.com/beers/ale?q=${encodeURI(input)}`;
    const response = await fetch(baseURL);
    const data = await response.json();

    return data;
}

function showInfo(data) {
    console.log(data);
   // showWarning('');
    
    

    data.forEach(object => {
        //console.log(object);
        const { name,price,id } = object;
        document.querySelector('.resultado').style.display = 'block';



        document.querySelector('.name').innerHTML += name;
        document.querySelector('.price').innerHTML += price;
        document.querySelector('.id').innerHTML += id;

        document.querySelector('pre').innerHTML += 'teste';
        console.log(document.querySelector('.name'));
    });

    
}
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




/*
document.querySelector('.busca').addEventListener('submit', async (event) =>{
    event.preventDefault();

    let input = document.querySelector('#searchInput').value;
  
    if(input !== ''){
        showWarning('Carregando...');
        
//INICIO AQUI

const baseURL = 'https://api.sampleapis.com/movies/action-adventure';
fetch(baseURL)
  .then(resp => resp.json())
  .then(data => displayData(data));

function displayData(data) {
  document.querySelector("pre").innerHTML = JSON.stringify(data, null, 2);
}





        const resp;
        //let url = `http://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=6d74a2ec006f14f1fe31ea2d92435e13&units=metric&lang=pt_br`;
        const baseURL = `https://api.sampleapis.com/beers/ale?q=${encodeURI(input)}`;
        
        fetch(baseURL)
            .then(resp => resp.json())
            .then(data => showInfo(data));

         

        //let results = await fetch(url);
        //let json = await results.json();
       
        //console.log(data);

        //if(resp.cod === 200) {
            showInfo({
                name: resp[0].name
                
        //    });
        //} else {
         //   showWarning('Não encontramos esta localização.')
         //}
    } 
})
function showInfo(resp) {
    showWarning('');
    
    document.querySelector('.resultado').style.display = 'block';

    //document.querySelector('.name').innerHTML = `${resp[0].name}`;
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
*/