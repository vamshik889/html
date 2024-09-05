let APIKEY = "r9XCvsUeizF4UZ3j4If3wNfbSrV7FiRS";

let query = document.getElementById("query").value;
console.log(query);

async function gif(){
    try{
        let response = await fetch(`https://api.giphy.com/v1/stickers/search?api_key=${APIKEY}&q=${query}&limit=25`);
        let data = await response.json();
        appendingToDom(data.data);
    }
    catch(error){
        console.log(error);
    }

};

const appendingToDom = (args)=>{
    console.log(args);
    let main = document.getElementById("img");
    main.innerHTML = "";

    args.forEach((element)=> {
        let image = document.createElement("img");
        image.src = element.images.downsized_medium.url;
        main.append(image);
    });
}
