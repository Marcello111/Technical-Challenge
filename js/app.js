((d) => {
 
    let input = d.getElementById("player");
    let button = d.getElementById("add");
    let store = [];
    let count = 1;
    let generate = d.getElementById("generate");
    let finalPairing = [];
    let winner = d.getElementById("winner");

    // Add player's name
    button.addEventListener ("click", () => {

        // Prevent unexpected user interaction if there is no name submitted
        if (input.value.length == 0) {
            alert("Please enter the player's name");
        } else {

            store.push(input.value);

            let item = d.createElement("li");
            item.append("Player " + count + ": " + input.value);
            d.getElementById("list-player").append(item);
            input.value = "";
            count++; 
            }

    });

    // Generate pairs randomly
    generate.addEventListener("click", (evt) => {
        let n = 2;
        let randomItem = [];
        let temp = store;

        // Prevent unexpected user interaction if there is odd number of players submitted    
        if (store.length % 2 == 1) {
            alert("The submitted players' number must be even");
            
        } else {

            for (let i = 0; i < store.length; i += 2) { 

                // Choose 2 random players
                randomItem = temp.sort(() => Math.random() - Math.random()).slice(0, n);

                // Add 2 paired players to the finalPairing array
                finalPairing.push(randomItem);

                // Store the rest of players except the 2 previously paired players
                temp = temp.filter(v => !randomItem.includes(v));
            }

        }

        // Put paired players into the list
        for (let j = 0; j < finalPairing.length; j++) {

            let item = d.createElement("li");
            item.append("Pairing: " + finalPairing[j][0] + " vs " + finalPairing[j][1]);
            d.getElementById("list-pairs").append(item);
        }

    });

    // Generate the winners randomly
    winner.addEventListener("click", () => {

        for (let i = 0; i < finalPairing.length; i++) {

            // Choose 1 random player from the finalPairing array
            winner = finalPairing[i][Math.floor(Math.random()*finalPairing[i].length)];

            let item = d.createElement("li");
            item.append(winner);
            d.getElementById("list-win").append(item)
        }

    });

})(document);