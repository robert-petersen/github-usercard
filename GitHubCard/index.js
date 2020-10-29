import axios from "axios";
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/
let parent = document.querySelector(".cards");

const followersArray = ["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];

followersArray.forEach((user)=>{
  axios
  .get(`https://api.github.com/users/${user}`)
  .then((res)=>{
    console.log(res);

    parent.appendChild(gitCardMaker(res.data));
  })
  .catch((err)=>{
    console.log("Error", err);
  });
});

// axios
//   .get("https://api.github.com/users/robert-petersen")
//   .then((res)=>{
//     console.log(res);
//     parent.appendChild(gitCardMaker(res));
//   })
//   .catch((err)=>{
//     console.log("Error", err);
//   })

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/


function gitCardMaker({avatar_url, name, login, location, html_url, followers, following, bio}){
  // create gitCard
  let gitCard = document.createElement("div");
  gitCard.classList.add("card");
  // profileImg
  let profileImg = document.createElement("img");
  profileImg.src = avatar_url;
  gitCard.appendChild(profileImg);
  //cardContent
  let cardContent = document.createElement("div");
  cardContent.classList.add("card-info");
  gitCard.appendChild(cardContent);
  //cardName
  let cardName = document.createElement("h3");
  cardName.classList.add("name");
  cardName.textContent = name;
  cardContent.appendChild(cardName);
  //cardUserName
  let cardUserName = document.createElement("p");
  cardUserName.classList.add("username");
  cardUserName.textContent = login;
  cardContent.appendChild(cardUserName);
  //cardLocation
  let cardLocation = document.createElement("p");
  cardLocation.textContent = `Location: ${location}`;
  cardContent.appendChild(cardLocation);
  //cardProfileContainer
  let cardProfileContainer = document.createElement("p");
  cardProfileContainer.textContent = "Profile: "
  cardContent.appendChild(cardProfileContainer);
  //CardProfile
  let cardProfile = document.createElement("a");
  cardProfile.textContent = "Click ME !!!!!!"
  cardProfile.href = html_url;
  cardProfileContainer.appendChild(cardProfile);
  //cardFollowers
  let cardFollowers = document.createElement("p");
  cardFollowers.textContent = `Followers: ${followers}`;
  cardContent.appendChild(cardFollowers);
  //cardFollowing
  let cardFollowing = document.createElement("p");
  cardFollowing.textContent = `Following: ${following}`;
  cardContent.appendChild(cardFollowing);
  //cardBio
  let cardBio = document.createElement("p");
  cardBio.textContent = `Bio: ${bio}`;
  cardContent.appendChild(cardBio);

  return gitCard;
}



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
