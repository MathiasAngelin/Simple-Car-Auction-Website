let listOfbids = [];

function ValidateInput(e){
    e.preventDefault();
    let firstname = document.getElementById('Firstname').value;
    let lastname = document.getElementById('Lastname').value;
    let phone = document.getElementById('Phonenumber').value;
    let bid = document.getElementById('Bid').value;
    if(!firstname){
        alert("Firstname cannot be null")
        return false;
    }
    else if(!lastname)
    {
        alert("Lastname cannot be null")
            return false;
    }
    else if(!phone){
        alert("Phone cannot be null")
            return false;
    }
    else if(!bid){
        alert("Bid cannot be null")
            return false;
           
    }
    else if(listOfbids[0] && (Number(bid) <= Number(listOfbids[0].Bid)))
    {
         alert("Your bid is to low")
         sortArray();
            return false;
    }
    else
    {
        let newBid = new ABid(firstname, lastname, phone, bid);
        listOfbids.push(newBid)
        clearList();
        sortArray();
        listAllBids();
        return true;
    }
}

document.getElementById('form1').onsubmit = ValidateInput;
sortArray = () =>{
    listOfbids.sort(function (a,b)
    {
        return b.Bid - a.Bid;
    })
}

let list = document.getElementById('bidList')
listAllBids = () =>{
    listOfbids.forEach((item) => {
        let li = document.createElement("li");
        let string = `Name: ${item.Fname} ${item.Lname}, Tel: ${item.Tel}, Bid: ${item.Bid}`;
        li.innerText = string
        list.appendChild(li);
    })
}

function clearList() {
   list.innerHTML = '';
}
