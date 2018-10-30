function renderTable(columns, rows) {
    let num = 1;
    const div = document.getElementById(`task`);
    const table = document.createElement(`table`);
    for (let i = 0; i < rows; i++) {
        const row = document.createElement(`tr`);
        for (let j = 0; j < columns; j++) {
            const cell = document.createElement(`td`);
            cell.innerHTML = num;
            num++;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    div.appendChild(table);

    table.addEventListener(`click`, (event) => { 
        alert(event.target.innerHTML); 
        
    });
}

window.onload = renderTable(4, 3);