"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
///////////////////////////// SUPER CLASS /////////////////////////////////////////////////
var Locations = /** @class */ (function () {
    function Locations(name, city, zip, address, img) {
        this.name = name;
        this.city = city;
        this.zip = zip;
        this.address = address;
        this.img = img;
        this.dateCreated = this.randomDate();
    }
    Locations.prototype.randomDate = function () {
        var start = new Date(2018, 0, 1);
        var end = new Date();
        var date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        return date;
    };
    return Locations;
}());
///////////////////////////// EXTENDING CLASS /////////////////////////////////////////////////
var placeOfInterest = /** @class */ (function (_super) {
    __extends(placeOfInterest, _super);
    function placeOfInterest(name, city, zip, address, img) {
        return _super.call(this, name, city, zip, address, img) || this;
    }
    placeOfInterest.prototype.display = function () {
        var cards = " <div class=\"col-sm-12 col-md-6 col-lg-4 card cardBox\">\n                        <div class=\"imgBoxCardLocation\">\n                            <img src=\"" + this.img + "\" class=\"card-img-top\" alt=\"...\">\n                        </div>\n                        <div class=\"card-body bg-info text-white\">\n                            <h4 class=\"card-title\">Name: " + this.name + "</h4>\n                            <p class=\"card-text\">Address: " + this.address + ", " + this.zip + "</p>\n                            <p class=\"card-text\">City: " + this.city + "</p>\n                            <p class=\"card-text text-dark text-right pt-1\" style=\"font-size:0.7em\">Date Created: " + this.dateCreated.toLocaleDateString() + "</p>\n                        </div>\n                      </div>";
        $(".out1").append(cards);
    };
    return placeOfInterest;
}(Locations));
///////////////////////////// EXTENDING CLASS /////////////////////////////////////////////////
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(name, city, zip, address, img, dateEvent, price) {
        var _this = _super.call(this, name, city, zip, address, img) || this;
        _this.dateEvent = dateEvent;
        _this.price = price;
        return _this;
    }
    Events.prototype.display = function () {
        var cards = " <div class=\"d-sm-flex col-sm-12 col-md-12 col-lg-6 cardBox\">\n                        <div class=\"col-sm-6 imgBoxCardEvents\">\n                            <img src=\"" + this.img + "\" class=\"card-img-top\" alt=\"...\">\n                        </div>\n                        <div class=\"col-sm-6 card-body bg-dark text-white\">\n                            <h5 class=\"card-title\">Event: " + this.name + "</h5>\n                            <p class=\"card-text\">Address: " + this.address + ", " + this.zip + "</p>\n                            <p class=\"card-text\">Location: " + this.city + "</p>\n                            <p class=\"card-text\">Event Time: " + this.dateEvent + "</p>\n                            <p class=\"card-text\">Price Ticket: " + this.price + "\u20AC</p>\n                            <p class=\"card-text text-right pt-1\" style=\"font-size:0.7em\">Date Created: " + this.dateCreated.toLocaleDateString() + "</p>\n                        </div>\n                      </div>";
        $(".out2").append(cards);
    };
    return Events;
}(Locations));
///////////////////////////// EXTENDING CLASS /////////////////////////////////////////////////
var Restaurants = /** @class */ (function (_super) {
    __extends(Restaurants, _super);
    function Restaurants(name, city, zip, address, img, type, phoneNumber, web) {
        var _this = _super.call(this, name, city, zip, address, img) || this;
        _this.type = type;
        _this.phoneNumber = phoneNumber;
        _this.web = web;
        return _this;
    }
    Restaurants.prototype.display = function () {
        var card = " <div class=\"col-sm-6 col-md-4 col-lg-3 card cardBox cardBoxRestaurant\">\n                        <div class=\"imgBoxCardRestaurants\">\n                            <img src=\"" + this.img + "\" class=\"card-img-top\" alt=\"...\">\n                        </div>\n                        <div class=\"card-body bg-success\">\n                            <h4 class=\"card-title\">" + this.name + "</h4>\n                            <p class=\"card-text text-white\">Type: " + this.type + "</p>\n                            <p class=\"card-text text-white\">Address: " + this.address + ", " + this.zip + "</p>\n                            <p class=\"card-text text-white\">Location: " + this.city + "</p>\n                            <p class=\"card-text text-white\">Phone: +43-1-" + this.phoneNumber + "</p>\n                            <a href=\"" + this.web + "\" class=\"text-white\">Web: " + this.web + "</a>\n                            <p class=\"card-text text-right pt-1\" style=\"font-size:0.7em\">Date Created: " + this.dateCreated.toLocaleDateString() + "</p>\n                        </div>\n                      </div>";
        $(".out3").append(card);
    };
    return Restaurants;
}(Locations));
///////////////////////////////// FUNCTIONS //////////////////////////////////////////
//Function for displaying content of array
var renderContent = function (arr, out) {
    for (var index in arr) {
        out.append(arr[index].display());
    }
};
//Sort function descending
var sortContentDescending = function (arr) {
    return arr.sort(function (a, b) { return b.dateCreated - a.dateCreated; });
};
//Sort function ascending
var sortContentAscending = function (arr) {
    return arr.sort(function (a, b) { return a.dateCreated - b.dateCreated; });
};
///////////////////////////// PLACES /////////////////////////////////////////////////
var arrPlacesOfInterest = [];
// name: string, city: string, zip: number, address: string, img: string
var place1 = new placeOfInterest("Schloss Schönbrunn", "Vienna", 1130, "Schönbrunner Schloßstraße 47", "img/schönbrunn.jpg");
var place2 = new placeOfInterest("Hofburg", "Vienna", 1010, "Michaelerkuppel", "img/hofburg.jpg");
var place3 = new placeOfInterest("Schloss Belvedere", "Vienna", 1030, "Schloss Belvedere", "img/belvedere.jpg");
var place4 = new placeOfInterest("Stephansdom", "Vienna", 1010, "Stephansplatz 3", "img/stephansdom.jpg");
var place5 = new placeOfInterest("Staatsoper", "Vienna", 1010, "Opernring 2", "img/staatsoper.jpeg");
var place6 = new placeOfInterest("Rathaus", "Vienna", 1010, "Friedrich-Schmidt-Platz 1", "img/rathaus.jpeg");
arrPlacesOfInterest.push(place1, place2, place3, place4, place5, place6);
///////////////////////////// EVENTS /////////////////////////////////////////////////////
var arrEvents = [];
// name: string, city: string, zip: number, address: string, img: string, dateEvent: string, price: string
var event1 = new Events("Ed Sheeran", "Vienna", 1020, "Meiereistraße 7", "img/sheeran.jpg", "10.10.2021 19:00", 99);
var event2 = new Events("Lady Gaga", "Vienna", 1020, "Meiereistraße 7", "img/gaga.jpg", "16.4.2022 20:00", 189);
var event3 = new Events("Elton John", "Vienna", 1020, "Meiereistraße 7", "img/elton.jpg", "09.11.2021 16:00", 299);
var event4 = new Events("Andreas Gabalier", "Vienna", 1110, "Guglgasse 7", "img/gabalier.jpg", "01.3.2020 19:30", 19);
arrEvents.push(event1, event2, event3, event4);
///////////////////////////// RESTAURANTS /////////////////////////////////////////////////
var arrRestaurant = [];
// name: string, city: string, zip: number, address: string, img: string, type: string, phoneNumber: number, web: string
var restaurant1 = new Restaurants("Porterhouse", "Vienna", 1010, "Schulerstraße", "img/porterhouse.jpeg", "Steakhouse", 5128143, "https://www.porterhouse.at/");
var restaurant2 = new Restaurants("Ebi", "Vienna", 1070, " Mariahilfer Str. 112", "img/ebi.png", "Asian", 5221018, "https://www.ebi-vienna.at/");
var restaurant3 = new Restaurants("Fabios", "Vienna", 1010, "Tuchlauben 4/6", "img/fabios.jpg", "Mixed", 5322222, "https://fabios.at/");
var restaurant4 = new Restaurants("Plachutta", "Vienna", 1010, "Wollzeile 38", "img/plachutta.jpg", "Vienna cuisine", 5121577, "https://www.plachutta.at/");
var restaurant5 = new Restaurants("Steiereck", "Vienna", 1030, "Am Heumarkt 2A", "img/steiereck.jpg", "Vienna cuisine", 7133168, "https://www.steirereck.at/");
var restaurant6 = new Restaurants("Tian", "Vienna", 1010, "Himmelpfortgasse 23", "img/tian.jpg", "Vegetarian", 8904665, "https://www.tian-restaurant.com/");
arrRestaurant.push(restaurant1, restaurant2, restaurant3, restaurant4, restaurant5, restaurant6);
//////////////////////////////////////////////////////////////////////////////////////////////
var out1 = $(".out1");
renderContent(arrPlacesOfInterest, out1);
var out2 = $(".out2");
renderContent(arrEvents, out2);
var out3 = $(".out3");
renderContent(arrRestaurant, out3);
//Sorting
$(".sort1").on("click", function () {
    sortContentDescending(arrPlacesOfInterest);
    sortContentDescending(arrEvents);
    sortContentDescending(arrRestaurant);
    $(".cardBox").remove();
    renderContent(arrPlacesOfInterest, out1);
    renderContent(arrEvents, out2);
    renderContent(arrRestaurant, out3);
});
$(".sort2").on("click", function () {
    sortContentAscending(arrPlacesOfInterest);
    sortContentAscending(arrEvents);
    sortContentAscending(arrRestaurant);
    $(".cardBox").remove();
    renderContent(arrPlacesOfInterest, out1);
    renderContent(arrEvents, out2);
    renderContent(arrRestaurant, out3);
});
