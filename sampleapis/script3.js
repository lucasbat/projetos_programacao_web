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
    const baseURL = `https://api.sampleapis.com/beers/ale?q=${encodeURI(input)}`;
    const response = await fetch(baseURL);
    const data = await response.json();

    return data;
}

function showInfo(data) {
  
   // showWarning('');
    
    

    data.forEach(object => {
        //console.log(object);
        const { name,price } = object;
        document.querySelector('.result').style.display = 'block';


        document.querySelector('.name').innerHTML += name;
        document.querySelector('.price').innerHTML += price;


        document.querySelector('.nameZ').innerHTML += name;
        document.querySelector('.priceZ').innerHTML += price;

        document.querySelector('pre').innerHTML += 'teste';
        
    });

    
}









/* REF:  https://www.w3schools.com/howto/howto_js_filter_lists.asp  */ 
function myFunction(apiData) {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText || a.apiData;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
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