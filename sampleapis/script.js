document.querySelector('.search').addEventListener('submit', async (event) =>{
    event.preventDefault();
    let input = document.querySelector('#searchInput').value;
    const data = await getData(input);
    showInfo(data);       
})

// async functio to get data in api
async function getData(input){
    const baseURL = `https://api.sampleapis.com/coffee/iced?q=${encodeURI(input)}`;
    const response = await fetch(baseURL);
    const data = await response.json();

    return data; 
}

// Create elements HTML to show info
function showInfo(data) {
    const ul = document.getElementById("myUL");
    data.forEach(object => {
        const { title,description} = object;
        const li = document.createElement('li');
        li.innerHTML = `<details class="collapse card-header show"><summary class="title">${title}</summary> <div class="description">${description}</div></details>`
        ul.appendChild(li);
    }); 
}

// Function to filter 
function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput").value;
  
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');
console.log(li);
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
