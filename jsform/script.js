var userdata=[];
function setuserdata () {
    uname =document.getElementById('username').value;
    userdata.push(uname);
    email =document.getElementById('email').value;
    userdata.push(email);
    pass =document.getElementById('password').value;
    userdata.push(pass);
    phone =document.getElementById('tel').value;
    userdata.push(phone);
    console.log(userdata);
};


 let tabutton = document.querySelector('button');
 let utable = document.querySelector('#table');
 let headers = ['UserName','Email','Password','Phone Number'];
  tabutton.addEventListener('click', ()  =>  {

    let table = document.createElement('table');
    let tabrow = document.createElement('tr');

      headers.forEach(heads => {

          let tHead= document.createElement('th');
          let Hdata = document.createTextNode(heads);
          tHead.appendChild(Hdata);
          tabrow.appendChild(tHead);
      });

      table.appendChild(tabrow);
      let tabrow_1 = document.createElement('tr');

      userdata.forEach(data => {

           let tdata = document.createElement('th');
            let info = document.createTextNode(data);
            tdata.appendChild(info);
             tabrow_1.appendChild(tdata);
          });
    
         table.appendChild(tabrow_1);
        
         utable.appendChild(table);
  });

