let profiles = data.results;
let profileDiv = document.createElement("div");

// profileDiv.innerText = profiles[0].name.first;

// let body = document.querySelector("body");
// body.appendChild(profileDiv);


// for(x of profiles){
//     let user = document.createElement('div');
//     user.className = 'card';
//     user.style.backgroundColor = "red";
//     user.innerText = profile.name.first;
//     profileDiv.appendChild(user);
// }
nameArray = document.getElementsByTagName("h3");
for(i=0; i<=nameArray.length; i++){
    nameArray.innerText += profiles[0].name.first;
    // nameArray.appendChild(nameArray)
}


































