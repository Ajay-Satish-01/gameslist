let api =
  'https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/games';

const apicall = fetch(api)
  .then((data) => data.json())
  .catch((err) => console.log(err));
const result = apicall.then((res) => gamesfunction(res));

const gameslist = document.querySelector('#gameslist');

{
  /* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */
}
let rowdiv = document.createElement('div');
rowdiv.setAttribute('class', 'row');
const gamesfunction = (gamedata) => {
  const gamedataarray = gamedata;
  const title = document.getElementById('title');
  title.innerHTML = `All Games (${20})`;
  for (let i = 0; i < 20; i++) {
    console.log(gamedataarray[i]);
    //title,thumbnail,short-description
    //row,column

    let col1 = document.createElement('div');
    col1.setAttribute('class', 'col-6');
    let col2 = document.createElement('div');
    col2.setAttribute('class', 'col-6');
    let column = '';
    //card
    if (i % 2 === 0) {
      column = col1;
    } else {
      column = col2;
    }
    let carddiv = document.createElement('div');
    carddiv.setAttribute('class', 'card m-2');
    let img = document.createElement('img');
    img.src = gamedataarray[i].thumbnail;
    img.setAttribute('class', 'card-img-top');
    let cardbody = document.createElement('div');
    cardbody.setAttribute('class', 'card-body');
    let h5 = document.createElement('h5');
    h5.setAttribute('class', 'card-title');
    h5.innerText = gamedataarray[i].title;
    let p = document.createElement('p');
    p.setAttribute('class', 'card-text');
    p.innerText = gamedataarray[i].short_description;
    cardbody.append(h5, p);
    carddiv.append(img, cardbody);
    column.append(carddiv);
    rowdiv.append(column);
    gameslist.append(rowdiv);
    document.body.append(gameslist);
  }
};
