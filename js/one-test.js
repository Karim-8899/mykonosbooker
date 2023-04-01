const villaform = document.getElementById('villa-Form');
const hotelform = document.getElementById('hotel-Form');


villaform.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent the form from submitting
  
    const datein = villaform.elements['villas-in-date'].value;
    const dateout = villaform.elements['villas-out-date'].value;
    const bedrooms = villaform.elements['villas-bedrooms'].value;

    
    
    const dateComponents = datein.split("-");

    const year = dateComponents[0];
    const month = dateComponents[1];
    const day = dateComponents[2];
  
    console.log(`In: ${datein}`);
    console.log(`year: ${year}`);
    console.log(`month: ${month}`);
    console.log(`day: ${day}`);

    const dateComponentsout = dateout.split("-");
    const yearout = dateComponentsout[0];
    const monthout = dateComponentsout[1];
    const dayout = dateComponentsout[2];

    console.log(`out: ${dateout}`);
    
    console.log(`year: ${yearout}`);
    console.log(`month: ${monthout}`);
    console.log(`day: ${dayout}`);

    console.log(`rooms: ${bedrooms}`);
    window.location.href = `https://bookings.mykonosbooker.com/#/search/${year}~2F${month}~2F${day}/${yearout}~2F${monthout}~2F${dayout}/Mykonos%20Island/OT-LOC-GEO-257055/(nationality:75,rooms:!(('$$hashKey':'object:45',adults:2,children:0,childrenAges:!(),quantity:1)),searchOnRequestRooms:!f,stars:(max:5,min:0)) `;    

  });

  hotelform.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent the form from submitting
  
    const hallkids = hotelform.elements['hotel-allkids'].value;
    const hallrooms = hotelform.elements['hotel-allrooms'].value;
    const halladult = hotelform.elements['hotel-alladult'].value;
    const hotelkid1 = hotelform.elements['hotel-kid1-age'].value;
    const hotelkid2 = hotelform.elements['hotel-kid2-age'].value;
    const hotelkid3 = hotelform.elements['hotel-kid3-age'].value;
    const hotelkid4 = hotelform.elements['hotel-kid4-age'].value;
    const hotelkid5 = hotelform.elements['hotel-kid5-age'].value;
    const hotelkid6 = hotelform.elements['hotel-kid6-age'].value;
  
    console.log(`allkids: ${hallkids}`);
    console.log(`allrooms: ${hallrooms}`);
    console.log(`alladult: ${halladult}`);
    console.log(`kid1: ${hotelkid1}`);
    console.log(`kid1: ${hotelkid2}`);
    console.log(`kid1: ${hotelkid3}`);
    console.log(`kid1: ${hotelkid4}`);
    console.log(`kid1: ${hotelkid5}`);
    console.log(`kid1: ${hotelkid6}`);
    window.location.href = `https://bookings.mykonosbooker.com/#/search/2023~2F03~2F11/2023~2F03~2F25/Athens%20Center,%20Athens/OT-LOC-GEO-9186/(nationality:75,rooms:!(('$$hashKey':'object:51',adults:${halladult},children:${hallkids},childrenAges:!(${hotelkid1},${hotelkid2},${hotelkid3},${hotelkid3},${hotelkid4},${hotelkid5},${hotelkid6}),quantity:1)),searchOnRequestRooms:!f,stars:(max:5,min:0))`;
 

});







