//1

  function checkAgeTernary(age) {
      return age > 18 ? true : confirm('Did parents allow you?');
  }

//2

function checkAgeOR(age) {
    return (age > 18) || confirm('Did parents allow you?');
}
