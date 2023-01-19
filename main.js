const setup = {
    rows: 8,
    seats: 15,
    letters: ["A","B","C","D","F","G","H","I"]
}
generateRows();

function generateRows() {
    let teatroParent = document.querySelector("#platea");
    // let teatroParent = document.querySelector("#platea");


    for (let lettersRow = 0; lettersRow < setup.rows; lettersRow++) {
        teatroParent.innerHTML += `<div class="d-flex justify-content-around ${setup.letters[lettersRow]}">
        <div class"seats">${setup.letters[lettersRow]}</div>`;

    for (let seats = 1; seats <= setup.seats; seats++) {
        document.querySelector(`.${setup.letters[lettersRow]}`).innerHTML+= `<div class="seats" onclick="selectSeat('${setup.letters[lettersRow]}',${seats})">${seats}</div>`;
    }
    teatroParent.innerHTML += `</div>`
    }
}

function selectSeat(letter, numberSeat) {
    document.querySelector(
      ".selecRta"
    ).innerHTML = `La silla seleccionada es: ${letter + numberSeat}`;
    document.querySelector(
      ".selecRta"
    )
    .innerHTML = `<button type="button" class="selecRta" onclick="reserve('${letter}', ${numberSeat})">Enviar</button`;
  }



