((d) => {
 
    let input = d.getElementById("player");
    let button = d.getElementById("add");
    let store = [];
    let count = 1;
    let generate = d.getElementById("generate");
    let finalPairing = [];


     button.addEventListener ("click", () => {

         store.push(input.value);
        
        let item = d.createElement("li");
        item.append("Player " + count + ": " + input.value);
        d.getElementById("lis").append(item);
        input.value = "";
        count++; 

     });

     generate.addEventListener("click", (evt) => {

        let n = 2;
        let randomItem = [];
        let temp = store;
        
        for (let i = 0; i < store.length; i += 2) { 
 
        randomItem = temp.sort(() => Math.random() - Math.random()).slice(0, n);

        finalPairing.push(randomItem);

        temp = temp.filter(v => !randomItem.includes(v));      
     
        }
   
        for (let j = 0; j < finalPairing.length; j++) {
            let item = d.createElement("li");
            item.append("Pairing: " + finalPairing[j][0] + " vs " + finalPairing[j][1]);
            d.getElementById("list").append(item);
        }

    });


})(document);