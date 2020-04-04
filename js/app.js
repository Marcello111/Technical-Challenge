((d) => {
 
    let input = d.getElementById("player");
    let button = d.getElementById("add");
    let store = [];
    let count = 1;


     button.addEventListener ("click", () => {

         store.push(input.value);
        
        let item = d.createElement("li");
        item.append("Player " + count + ": " + input.value);
        d.getElementById("lis").append(item);
        input.value = "";
        count++; 

     });


})(document);