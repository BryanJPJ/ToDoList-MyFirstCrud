let names = [];

export default function create() {
    
    let name = document.getElementById("nameExample").value;
    names.push(name);
    read();
}

function read(){

    let listNames = document.getElementById("listOfNames");
    listNames.innerHTML = "";
    for ( let i = 0; i < names.length; i++){
         let name = names[i];
        let p = document.createElement("p");
        let button = document.createElement("button");
        button.appendChild(document.createTextNode("Borrar"));
        let buttonEdit = document.createElement("button");
        buttonEdit.appendChild(document.createTextNode("Editar"));
        p.appendChild(document.createTextNode(name));
        listNames.appendChild(p);
        listNames.appendChild(button);
        listNames.appendChild(buttonEdit)
    }
}
function holaMundo(){
    alert("HOLA")
}