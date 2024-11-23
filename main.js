async function fechdata(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json(); 
    const orderlist = document.getElementById("list");
    data.forEach((data1)=> {
        const lielem = document.createElement("li");
        lielem.textContent = data1.title;
        lielem.style.color ="blue";
        lielem.style.paddingBottom = "20px";
        lielem.className = "lielee";
        orderlist.appendChild(lielem);
        
    });
}

     
async function fetchData() {
            
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
   
    const data = await res.json(); 
    const tableBody = document.getElementById("table-body");

        data.forEach((data1) => {
        const row = document.createElement("tr"); 
        const idCell = document.createElement("td"); 
        const titleCell = document.createElement("td");
        const bodyCell = document.createElement("td");

        idCell.textContent = data1.id; 
        titleCell.textContent = data1.title; 
        bodyCell.textContent = data1.body; 

     
        row.appendChild(idCell);
        row.appendChild(titleCell);
        row.appendChild(bodyCell);

       
        tableBody.appendChild(row);
    });
}


fetchData();