function Worker(name, surname, age, rate, days) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.rate = rate;
  this.days = days;

  this.getSalary = function () {
    if (isNaN(this.days) || isNaN(this.rate) || this.days > 31) {
      return false;
    }
    if(this.days > 31){
    return null;
    }
    return this.rate * this.days;
  }
}
