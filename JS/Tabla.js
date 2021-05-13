
let i=0;

while (i<=20.){
    let fila =
    `<tr>
    <th scope="row">${i}</th>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
  </tr>`;
    document.getElementById("Table").innerHTML +=fila
    i+=2;
    
}

