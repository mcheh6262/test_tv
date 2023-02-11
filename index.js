const arr = [
  {
    Id: 1,
    Name_of_the_store: "Avi_super",
    Adress: "arlotrov_20",
    City: "Tel_Aviv",
    Price: 3200,
    Link_of_the_store: new URL("https://www.soferavi.co.il"),
    Rating_of_the_place: 3.5,
  },
  {
    Id: 2,
    Name_of_the_store: "Buy_Buy",
    Adress: "Rishon_Lezion_1",
    City: "Netanya",
    Price: 3000,
    Link_of_the_store: new URL("https://www.buy-buy.co.i"),
    Rating_of_the_place: 2.5,
  },
  {
    Id: 3,
    Name_of_the_store: "City_Deal",
    Adress: "shivtei_israel_16",
    City: "Jerusalem",
    Price: 3340,
    Link_of_the_store: new URL("https://www.citydeal.co.il"),
    Rating_of_the_place: 1.5,
  },
  {
    Id: 4,
    Name_of_the_store: "Speed",
    Adress: "Haglil_20",
    City: "Haifa",
    Price: 3100,
    Link_of_the_store: "https://speedofsound.co.il",
    Rating_of_the_place: 5.5,
  },
];

const rating_threshold = 4;
const rating_smallest = 2;
const high_rated_tv_color = "rgb(61, 190, 61)";
const high_rated_tv_color2 = "red";
const number_tv = 4;
const better_tv = `blue`;

// a button that fills the table
function full() {
  for (let i = 0; i < arr.length; i++) {
    $("#table").append(`<tr id="tab${i}"><td>${arr[i].Id}</td>

        <td> <button type="button" onclick="button()" id="button"> <svg xmlns = new URL("http://www.w3.org/2000/svg") width="16" height="16" fill="currentColor" class= viewBox="0 0 16 16">
        <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3h11.991zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z"/>
      </svg></button></td>
                                 <td>${arr[i].Name_of_the_store}</td>
                                 <td>${arr[i].Adress}</td>
                                 <td>${arr[i].City}</td>
                                 <td id="price${i}">${arr[i].Price}</td>
                                 <td><a href="${arr[i].Link_of_the_store}">click here to shop</a></td>
                                 <td id="rating${i}">${arr[i].Rating_of_the_place}</td>
                                 <td><button type="button" class="btn btn-danger" id="${i}" onclick="myFunction(this)">delete</button> 
                                 <td> <button class="btn btn-success" type="button" data-toggle="tooltip"
                                 data-placement="top" title="Edit" data-bs-toggle="modal" data-bs-target="#myModal${i}" onclick="buy()">buy</button>
                                 <div class="modal" id="myModal${i}">
                                 <div class="modal-dialog ">
                                     <div class="modal-content">
                                         <div class="modal-header divmodalbody">
                                             <h2 class="modal-title">Edit Your Order</h2>
                                         </div>
                                         <!-- Modal body -->
                                         <div class="modal-body divmodalbody" >
                                                 <form>
                                                     <div class="form-container form-outline">
                                                     <div>
                                    
                                                         <label for="typeText">first Name</label>
                                                         <input type="text" id="typeText"
                                                             class="form-control form-control-lg" minlength="19"
                                                             maxlength="19" />
                                                         </div><br>
                                                         <div>
                                                         <label for="typeText">last Number</label>
                                                         <input type="text" id="typeText"
                                                         class="form-control form-control-lg" minlength="19" maxlength="19" />
                                                         </div><br>
                                                         <div class="field-container">
                                                         <label for="expirationdate">credit card</label>
                                                         <input id="expirationdate" type="text"
                                                         class="form-control form-control-lg"/>
                                                         </div>
                                                         <div>
                                                         <label for="typeText">Email</label>
                                                         <input type="password" id="typeText"
                                                         class="form-control form-control-lg" minlength="3" maxlength="3" />
                                                        </div>
                                                     </div>
                                                 </form>
                                             </div>
                                         <!-- Modal footer -->
                                         <div class="modal-footer">
                                             <button type="button" class="btn btn-outline-success"
                                                 data-bs-dismiss="modal" onclick="edit_button()">Buy</button>
                                             <button type="button" class="btn btn-outline-danger"
                                                 data-bs-dismiss="modal">Cancel</button>
                                         </div>
                                     </div>
                                 </div>
                             </div></td></tr>`);
  }
}

// avrage of the tvs in the screen
function avg_of_selected_tvs() {
  let avrege = 0;
  for (let i = 0; i < arr.length; i++) {
    let price = $(`#price${i}`).text();
    avrege += parseFloat(price);
  }
  avrege_tv = avrege / number_tv;
  alert(avrege_tv);
}

// find the best rated tv in the lowest price
function rating() {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].Rating_of_the_place >= rating_threshold) {
      document.getElementById(`tab${i}`).style.backgroundColor =
        high_rated_tv_color;
    }
    if (arr[i].Rating_of_the_place < rating_smallest) {
      document.getElementById(`tab${i}`).style.backgroundColor =
        high_rated_tv_color2;
    }
  }
}

// deletes a line
function myFunction(elem) {
  console.log(elem.id);

  $(`#${elem.id}`).parent().parent().remove();
}

// find the best tv price
function better() {
  let better = arr[0].Price;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].Price < better) {
      better = arr[i].Price;
    }

    let y = arr.find((x) => x.Price == 3000);

    document.getElementById(`tab${y.Id - 1}`).style.backgroundColor = better_tv;
  }
  console.log(better);
  let y = arr.find((x) => x.Price == 3000);
  $(y).remove();
}

full();
rating();
avg_of_selected_tvs();
