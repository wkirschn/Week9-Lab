
    let listItem = document.getElementById("listItem");
    let addButton = document.querySelector("#listItem + input");
    let ul = document.querySelector("ul");

    addButton.onclick = (e) => {
        //prevent the default behaviour of the form
        e.preventDefault();
        //create elements
        let li = document.createElement("li");
        let delButton = document.createElement("button");
        let checkBox = document.createElement("input");

        //building the list item elements
        let item = listItem.value;
        li.textContent = item;
        delButton.textContent = "Got It!";

        //appending things
        li.appendChild(delButton);
        ul.appendChild(li);

        //set up delete event listener in same context/scope in which the button is created
        delButton.onclick = deleteIt;
    };

    //delete functionality
    function deleteIt(e) {
        alert("Are you sure you want to delete this from your grocery list?");
        let delItem = e.target.closest("li");
        delItem.remove();
    }