animals = [

    {
        "id": 1,
        "name": "lion",
        "img": "imgs/animals/lion.png",
        "desc": "The lion (Panthera leo) is a large felid of the genus Panthera native mainly to Africa.",
        "sound": "Roar",
        "mp3": "mp3/animals/lion-roar.mp3"

    },
    {
        "id": 2,
        "name": "tiger",
        "img": "imgs/animals/tiger.jpg",
        "desc": "The tiger (Panthera tigris) is the largest living cat species and a member of the genus Panthera.",
        "sound": "Chuff",
        "mp3": "mp3/animals/tiger-chuff.mp3"

    },
    {
        "id": 3,
        "name": "Cat",
        "img": "imgs/animals/cat.jpg",
        "desc": "The cat (Felis catus) is a domestic species of small carnivorous mammal.",
        "sound": "Meowing",
        "mp3": "mp3/animals/cat-meowing.mp3"

    },
    {
        "id": 4,
        "name": "chicken",
        "img": "imgs/animals/chiken.jpg",
        "desc": "The chicken (Gallus gallus domesticus), a subspecies of the red junglefowl.",
        "sound": "Cluck",
        "mp3": "mp3/animals/chicken-cluck.mp3"

    },


];

//loop


for (let i = 0; i < animals.length; i++) {
    document.getElementById("cards-content").innerHTML += `
    <div class="col-sm-6 col-md-4 col-lg-3 mb-2">
    <div class="card shadow-lg">
        <img class="card-img-top img-fluid" src="${animals[i].img}" alt="Card image">
        <div class="card-body">
            <h4 class="card-title">${animals[i].name}</h4>
            <p class="card-text">${animals[i].desc}</p>
            <button onclick="sound('${animals[i].mp3}')" class="btn btn-primary w-100"><i class="fa fa-volume-up"></i> ${animals[i].sound}</button>
        </div>
    </div>
    </div>
    
    `;
}

function sound(mp3) {
    let audio = new Audio(mp3);
    audio.play();
}