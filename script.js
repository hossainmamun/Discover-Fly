function handleTicketPrice(ticket, isIncrease){
    const ticketInput = document.getElementById(ticket + "Input");
    const ticketCount = parseInt(ticketInput.value);
    let ticketNewValue = ticketCount;
    if(isIncrease == true){
        ticketNewValue = ticketCount + 1;
    }
    if(isIncrease == false && ticketCount > 0){
        ticketNewValue = ticketCount - 1;
    }
    ticketInput.value = ticketNewValue;
    let ticketTotal = 0;
    if(ticket == 'firstClass'){
        ticketTotal = ticketNewValue * 150;
    }
    if(ticket == 'economy'){
        ticketTotal = ticketNewValue * 100;
    }
    const ticketPrice = document.getElementById(ticket + "Ticket");
    ticketPrice.innerText = `Total = $${ticketTotal}`; 

    // call totalPrice function...
    totalPrice();
}

function totalPrice(){
    const firstClassInput = document.getElementById("firstClassInput");
    const firstClassCount = parseInt(firstClassInput.value);

    const economyInput = document.getElementById("economyInput");
    const economyCount = parseInt(economyInput.value)

    const total = firstClassCount * 150 + economyCount * 100;
    const totalSUbTotal = document.getElementById("subtotal");
    totalSUbTotal.innerText = `$${total}`;

    const charge = total * 0.1;
    const totalVat = document.getElementById("vat");
    totalVat.innerText = `$${charge}`;

    const finalPrice = total + charge;
    const grandPrice = document.getElementById("grandTotal");
    grandPrice.innerText = `$${finalPrice}`;
}