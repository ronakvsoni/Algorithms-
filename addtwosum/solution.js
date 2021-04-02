function sumofDigits(number) {
    sum = 0;
    while (number != 0 && number <= 9999) {
      sum = sum + number % 10
      var b = sum
      console.log(b)
      number = Math.floor(number / 10);
    }
    return sum;
  }

  var a = sumofDigits(444)
  console.log(a)


  