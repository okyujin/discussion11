let pokemonList = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];

// Answers

// Question 1
var hostName = document.getElementById("host-name").innerHTML = "Jessica";
var collaborator = document.getElementById("collaborator-name").innerHTML = "Yujin";

// Question 2
// You can also create their own CSS classes in style.css file and use that. 
var toggleButton = document.getElementById("instruction_button");

toggleButton.addEventListener("click", function() {
    toggleButton.classList.toggle("active");
    var questions = document.getElementsByClassName("question");
    for (var i = 0; i < questions.length; i++) {
        if (toggleButton.classList.contains("active")) {
            questions[i].style.display = "none";
        } else {
            questions[i].style.display = "";
        }
    }
});

// Question 3
// Try change event first
// There is another event which fires for every character. This is what we want to use.
var firstNameInput = document.getElementById('first_name');
var lastNameInput = document.getElementById('last_name');

firstNameInput.addEventListener('input', function() {
  if (firstNameInput.value.toLowerCase() === 'john') {
    lastNameInput.value = 'Doe';
  } else {
    lastNameInput.value = '';
  }
});

// Question 4
// Try change event first
// There is another event which fires for every character. This is what we want to use.

/* <div class="question"><span>4</span>There is a preconfigured variable called 'pokemonList'. As the user
                types, check if the user already exists in that array. If yes, change the alert text to "Username
                already exists". If not, change the alert to "Unique username created"</div>
            <div class="label-grid">
                <label for="user_name">Username</label>
                <input type="text" id="user_name" name="username" />
                <p id="username-alert">Username alert text</p>
            </div>
            <hr /> */
            
            var question = document.createElement("div");
            question.setAttribute("class", "question");
            for (var i = 0; i < questions.length; i++) {
                if (question.innerHTML.contains("[pokemonList")) {
                    questions[i].style.display = "Username already exists";
                } else {
                    questions[i].style.display = "Unique username created";
                }
            }
            


// Question 5
// Try change event first
// There is another event which fires for every character. This is what we want to use.

/* <div class="question">
                <span>5</span>
                <div>
                    <p>Check if the passwords match as and when the user is typing.
                        If they match, change the alert text below to "Password Matches". If they don't match, change
                        the text to "Password does not match". </p>
                    <p><strong>Challenge: </strong>Implement the Hide Password button. The button text should change
                        accordingly. Also add a keyboard shortcut 'h' to do the same. </p>
                </div>
            </div>
            <div class="label-grid">
                <label for="password">Password</label>
                <input type="text" id="password" name="password" /> */

                var question = document.createElement("div");
                question.setAttribute("class", "question");
            

//Question 6





//Question 7 





//Question 8





//Question 9 

