let i = 1;
for (let i = 1; i < 50000; i++) {
  let raqam = +prompt('raqam kiriting')
  if (raqam % 2) {
    alert('siz toq son kiritingiz')
  }else if (0 < raqam) {
    alert('siz juft son kiritingiz')
  }else if(String == raqam == 0) {
    alert("BUNDAY SON MAVJUD EMAS")
  }
}
