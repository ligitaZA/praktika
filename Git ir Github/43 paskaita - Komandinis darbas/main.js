function openModal() { 
  document.getElementById('myModal').style.display = 'block';
  document.getElementById('display').style.display = 'none';
}

function closeModal() {
  document.getElementById('myModal').style.display = 'none';
  document.getElementById('display').style.display = 'block';

}
// // Uždaryti issokantįjį langą, paspaudus lango foną
// window.onclick = function(event) {
//   if (event.target == document.getElementById('myModal')) {
//     document.getElementById('myModal').style.display = 'none';
//   }
  
// }