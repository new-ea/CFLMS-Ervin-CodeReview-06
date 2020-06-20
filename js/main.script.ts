"use strict";

///////////////////////////// SUPER CLASS /////////////////////////////////////////////////
class Locations {
    protected name: string;
    protected city: string
    protected zip: number;
    protected address: string;
    protected img: string;
    protected dateCreated: any;

    constructor(name: string, city: string, zip: number, address: string, img: string) {
        this.name = name;
        this.city = city;
        this.zip = zip;
        this.address = address;
        this.img = img;
        this.dateCreated = this.randomDate()
    }

    protected randomDate() {
        const start = new Date(2018, 0, 1)
        const end = new Date()
        let date =  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        return date;
    }
}

///////////////////////////// EXTENDING CLASS /////////////////////////////////////////////////
class placeOfInterest extends Locations {

    constructor(name: string, city: string, zip: number, address: string, img: string) {
        super(name, city, zip, address, img);  
    }
    
protected display(): void {

        let cards = ` <div class="col-sm-12 col-md-6 col-lg-4 card cardBox">
                        <div class="imgBoxCardLocation">
                            <img src="${this.img}" class="card-img-top" alt="...">
                        </div>
                        <div class="card-body bg-info text-white">
                            <h4 class="card-title">Name: ${this.name}</h4>
                            <p class="card-text">Address: ${this.address}, ${this.zip}</p>
                            <p class="card-text">City: ${this.city}</p>
                            <p class="card-text text-dark text-right pt-1" style="font-size:0.7em">Date Created: ${this.dateCreated.toLocaleDateString()}</p>
                        </div>
                      </div>`
                        
        $(".out1").append(cards);
    }
}

///////////////////////////// EXTENDING CLASS /////////////////////////////////////////////////
class Events extends Locations {
    dateEvent: string;
    price: number;

    constructor(name: string, city: string, zip: number, address: string, img: string, dateEvent: string, price: number) {
        super(name, city, zip, address, img);
        this.dateEvent = dateEvent;
        this.price = price;
    }

    display(): void {
        let cards = ` <div class="d-sm-flex col-sm-12 col-md-12 col-lg-6 cardBox">
                        <div class="col-sm-6 imgBoxCardEvents">
                            <img src="${this.img}" class="card-img-top" alt="...">
                        </div>
                        <div class="col-sm-6 card-body bg-dark text-white">
                            <h5 class="card-title">Event: ${this.name}</h5>
                            <p class="card-text">Address: ${this.address}, ${this.zip}</p>
                            <p class="card-text">Location: ${this.city}</p>
                            <p class="card-text">Event Time: ${this.dateEvent}</p>
                            <p class="card-text">Price Ticket: ${this.price}€</p>
                            <p class="card-text text-right pt-1" style="font-size:0.7em">Date Created: ${this.dateCreated.toLocaleDateString()}</p>
                        </div>
                      </div>`
                        
        $(".out2").append(cards);
    }
}


///////////////////////////// EXTENDING CLASS /////////////////////////////////////////////////
class Restaurants extends Locations {
    protected type: string;
    protected phoneNumber: number;
    protected web: string;

    constructor(name: string, city: string, zip: number, address: string, img: string, type: string, phoneNumber: number, web: string ) {
        super(name, city, zip, address, img);
        this.type = type;
        this.phoneNumber = phoneNumber;
        this.web = web;
    }

    display() {
        let card = ` <div class="col-sm-6 col-md-4 col-lg-3 card cardBox cardBoxRestaurant">
                        <div class="imgBoxCardRestaurants">
                            <img src="${this.img}" class="card-img-top" alt="...">
                        </div>
                        <div class="card-body bg-success">
                            <h4 class="card-title">${this.name}</h4>
                            <p class="card-text text-white">Type: ${this.type}</p>
                            <p class="card-text text-white">Address: ${this.address}, ${this.zip}</p>
                            <p class="card-text text-white">Location: ${this.city}</p>
                            <p class="card-text text-white">Phone: +43-1-${this.phoneNumber}</p>
                            <a href="${this.web}" class="text-white">Web: ${this.web}</a>
                            <p class="card-text text-right pt-1" style="font-size:0.7em">Date Created: ${this.dateCreated.toLocaleDateString()}</p>
                        </div>
                      </div>`

        $(".out3").append(card);
    }
}

///////////////////////////////// FUNCTIONS //////////////////////////////////////////
//Function for displaying content of array
let renderContent = (arr: any, out: any) => {
    for (let index in arr) {
        out.append(arr[index].display())
    }
}

//Sort function descending
let sortContentDescending = (arr: any) => {
    return arr.sort((a: any, b:any) => b.dateCreated - a.dateCreated);
}

//Sort function ascending
let sortContentAscending = (arr: any) => {
    return arr.sort((a: any, b:any) => a.dateCreated - b.dateCreated);
}

///////////////////////////// PLACES /////////////////////////////////////////////////
let arrPlacesOfInterest: any = [];
// name: string, city: string, zip: number, address: string, img: string
let place1 = new placeOfInterest("Schloss Schönbrunn", "Vienna", 1130, "Schönbrunner Schloßstraße 47", "img/schönbrunn.jpg");
let place2 = new placeOfInterest("Hofburg", "Vienna", 1010, "Michaelerkuppel", "img/hofburg.jpg");
let place3 = new placeOfInterest("Schloss Belvedere", "Vienna", 1030, "Schloss Belvedere", "img/belvedere.jpg");
let place4 = new placeOfInterest("Stephansdom", "Vienna", 1010, "Stephansplatz 3", "img/stephansdom.jpg");
let place5 = new placeOfInterest("Staatsoper", "Vienna", 1010, "Opernring 2", "img/staatsoper.jpeg");
let place6 = new placeOfInterest("Rathaus", "Vienna", 1010, "Friedrich-Schmidt-Platz 1", "img/rathaus.jpeg");
arrPlacesOfInterest.push(place1, place2, place3, place4, place5, place6);

///////////////////////////// EVENTS /////////////////////////////////////////////////////
let arrEvents: any = [];
// name: string, city: string, zip: number, address: string, img: string, dateEvent: string, price: string
let event1 = new Events("Ed Sheeran", "Vienna", 1020, "Meiereistraße 7", "img/sheeran.jpg", "10.10.2021 19:00", 99);
let event2 = new Events("Lady Gaga", "Vienna", 1020, "Meiereistraße 7", "img/gaga.jpg", "16.4.2022 20:00", 189);
let event3 = new Events("Elton John", "Vienna", 1020, "Meiereistraße 7", "img/elton.jpg", "09.11.2021 16:00", 299);
let event4 = new Events("Andreas Gabalier", "Vienna", 1110, "Guglgasse 7", "img/gabalier.jpg", "01.3.2020 19:30", 19);
arrEvents.push(event1, event2, event3, event4);

///////////////////////////// RESTAURANTS /////////////////////////////////////////////////
let arrRestaurant: any = [];
// name: string, city: string, zip: number, address: string, img: string, type: string, phoneNumber: number, web: string
let restaurant1 = new Restaurants("Porterhouse", "Vienna", 1010, "Schulerstraße", "img/porterhouse.jpeg", "Steakhouse", 5128143, "https://www.porterhouse.at/");
let restaurant2 = new Restaurants("Ebi", "Vienna", 1070, " Mariahilfer Str. 112", "img/ebi.png", "Asian", 5221018, "https://www.ebi-vienna.at/");
let restaurant3 = new Restaurants("Fabios", "Vienna", 1010, "Tuchlauben 4/6", "img/fabios.jpg", "Mixed", 5322222, "https://fabios.at/");
let restaurant4 = new Restaurants("Plachutta", "Vienna", 1010, "Wollzeile 38", "img/plachutta.jpg", "Vienna cuisine", 5121577, "https://www.plachutta.at/");
let restaurant5 = new Restaurants("Steiereck", "Vienna", 1030, "Am Heumarkt 2A", "img/steiereck.jpg", "Vienna cuisine", 7133168, "https://www.steirereck.at/");
let restaurant6 = new Restaurants("Tian", "Vienna", 1010, "Himmelpfortgasse 23", "img/tian.jpg", "Vegetarian", 8904665, "https://www.tian-restaurant.com/");
arrRestaurant.push(restaurant1, restaurant2, restaurant3, restaurant4, restaurant5, restaurant6);

//////////////////////////////////////////////////////////////////////////////////////////////

const out1 = $(".out1");
renderContent(arrPlacesOfInterest,out1)

const out2 = $(".out2");
renderContent(arrEvents, out2);

const out3 = $(".out3");
renderContent(arrRestaurant, out3);



//Sorting
$(".sort1").on("click", () => {
    sortContentDescending(arrPlacesOfInterest);
    sortContentDescending(arrEvents);
    sortContentDescending(arrRestaurant);
    $(".cardBox").remove();
    renderContent(arrPlacesOfInterest,out1);
    renderContent(arrEvents,out2);
    renderContent(arrRestaurant, out3);
})

$(".sort2").on("click", () => {
    sortContentAscending(arrPlacesOfInterest);
    sortContentAscending(arrEvents);
    sortContentAscending(arrRestaurant);
    $(".cardBox").remove();
    renderContent(arrPlacesOfInterest,out1);
    renderContent(arrEvents,out2);
    renderContent(arrRestaurant, out3);
})
