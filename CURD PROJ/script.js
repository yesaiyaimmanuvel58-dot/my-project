let data = [];
let id = 1;

function addData() {

    let name = document.getElementById("name").value;

    if(name==""){
        alert("Enter Name");
        return;
    }

    data.push({
        id:id++,
        name:name
    });

    document.getElementById("name").value="";

    displayData();

}

function displayData(){

    let table="";

    data.forEach((item)=>{

        table += `
        <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>
                <button onclick="editData(${item.id})">Edit</button>
                <button onclick="deleteData(${item.id})">Delete</button>
            </td>
        </tr>
        `;

    });

    document.getElementById("tableBody").innerHTML=table;

}

function deleteData(id){

    data=data.filter(item=>item.id!==id);

    displayData();

}

function editData(id){

    let item=data.find(x=>x.id===id);

    let newName=prompt("Enter New Name",item.name);

    if(newName!=null && newName!=""){

        item.name=newName;

        displayData();

    }

}