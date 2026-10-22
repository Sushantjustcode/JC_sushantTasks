import createPrompt from "prompt-sync";
const prompt = createPrompt();

const readId = prompt("enter the id to read : ");

// ----get, read --------//

// GET
if (readId) {
  fetchUserData(readId);
  async function fetchUserData(readId) {
    try {
      const response = await fetch(`https://api.sampleapis.com/beers/ale/${readId}`);
      const data = await response.json();

      console.log(data);
    } catch (error) {
    console.error("Failed:", error);
  }
}
}

let putRes = prompt("if want to update something press Y or y else N or n : ");
if(putRes.trim().toLowerCase() === 'y'){
  let putId = prompt("enter the id to update : ");
  const putPrice = prompt("enter the price to update : ");
  const putName = prompt("enter the name to update  : ");
  const putRating = prompt("enter the rating to update  : ");
  const putImage = prompt("enter the new image ur to update : ");
  updateUserData(putId,putPrice,putName,putRating,putImage);
}
else if (putRes.trim().toLowerCase() === 'n'){
console.log("you denied for the update");
}else{
  console.log("any other input will be considered a NO");
}


// PUT FUN

async function updateUserData(putId, putPrice, putName, putRating, putImage) {
  try {
    const response = await fetch(`https://api.sampleapis.com/beers/ale/${putId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        price: "$10",
        name:  `${putName}`,
        rating: `${putRating}`,
        image:`${putImage}`,
        id: putId
      })
    });

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error("Failed:", error);
  }
}




let delRes = prompt("if want to delete something press Y or y else N or n : ");
if (delRes.trim().toLowerCase() === 'y') {
  const delId = prompt("enter the Id number of the object you wanna delete : ");
  if(delId){deleteUserData(delId);}
}
else if (delRes.trim().toLowerCase() === 'n') {
  console.log("you denied for the deletion");
} else {
  console.log("any other input will be considered a NO");
}



// DELETE FUN
async function deleteUserData(id) {
  try {
    const response = await fetch(`https://api.sampleapis.com/beers/ale/${id}`, {
      method: "DELETE"
    });

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error( error);
  }
}


// POST


let postRes = prompt("if want to post something press Y or y else N or n : ");
if (postRes.trim().toLowerCase() === 'y') {
  let postId = prompt("enter the id to post : ");
  const postPrice = prompt("enter the price to post : ");
  const postName = prompt("enter the name to post  : ");
  const postRating = prompt("enter the rating to post  : ");
  const postImage = prompt("enter the new image ur to post : ");
  addNewUser(postId, postPrice, postName, postRating, postImage);
}
else if (postRes.trim().toLowerCase() === 'n') {
  console.log("you denied for the post");
} else {
  console.log("any other input will be considered a NO");
}

async function addNewUser(postId, postPrice, postName, postRating, postImage){
  try {
    const response = await fetch(`https://api.sampleapis.com/beers/ale/`,{
        method:"POST",
       headers:{"Content-Type": "application/json"},
       body:JSON.stringify({
         price: `${postPrice}`,
         name: `${postName}`,
         rating: `${postRating}`,
         image: `${postImage}`,
         id: postId
       })
    })

  } catch (error) {
    console.log(error);
  }
}




