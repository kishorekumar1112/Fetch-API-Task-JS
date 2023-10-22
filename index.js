fetch("https://jsonplaceholder.typicode.com/comments").then((data) => {
            // console.log(data);
            // here all data of the url is json format so we need to access these data we must convert json to object.
            return data.json();
        }).then((objectData)=>{
            // console.log(objectData[0].name);
            const cardContainer = document.getElementById("myCard");

            let cardData = "";

            console.log(JSON.stringify(objectData));
            objectData.map((values)=> {
                const card = document.createElement("div");
                card.className = "col";
                card.innerHTML = `
                <div class="card" style="width:18rem; height : 20rem; margin-top:10px;">
                <div class="card-body">
                <h5>${values.name}</h5>
                                  <p>${values.body}</p>
                                  <h5>${values.email}</h5>
                                  </div>
                </div>`;
                cardContainer.appendChild(card);
            })
            
        });