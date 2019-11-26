$(document).ready(function(){
   db.collection("table").get().then((data)=> {
     
       var result = "";
       data.forEach(element => {
           result += `
           
                <div class="card">
                    <div class="card-header">
                        <img src ="${element.data().profile}" class="img-fluid rounded-circle" width="50" height="50">
                        ${element.data().name}
                    </div>
                    <div class="card-body">
                    <img src ="${element.data().profile}" class="img-fluid" >
                    </div>
                    <div class="card-body">
                    ${element.data().text}
                    </div>
                </div>
           `;
       });
       $('#table').append(result);
   });
  
});

const btn = document.querySelector("#button").value;
    var name = document.querySelector("#name").value;
    var profile = document.querySelector("#profile").value;
    var post = document.querySelector("#post").value;
    var text = document.querySelector("#text").value;
    
   db.collection('table').add({
       name: name,

   });

   FormData.reset();