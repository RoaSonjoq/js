async function getData(){
    const response = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
    const data = await response.json();
    console.log(data);
    const recipes = data.recipes;
    const result =recipes.map(function(ele){
        return `
        <div>
        <h2>${ele.title}</h2>
        <a href ="details.html?pizza_id=${ele.recipe_id}">details</a>
        </div>
        `;
    }).join('');
    document.querySelector(".pizza .row").innerHTML=result;
    document.querySelector(".numberOfitem").textContent=data.count;

}
 getData();


