/*
const Student = {
    getAverageScore: function () {
        let sumOfMarks = 0;
        let numberOfSubjects = 0;

        for(let key in this.tabel) {
            sumOfMarks += this.tabel[key];
            numberOfSubjects++;
        }
        return sumOfMarks / numberOfSubjects;
    }
};

const student1 = {
  firstName: 'Алина',
  lastName: 'Коваленко',
  tabel: {
      math: 10,
      history: 11,
      geography: 3
  }
};
const student2 = {
  firstName: 'Мария',
  lastName: 'Чупаенко',
  tabel: {
      math: 12,
      history: 12,
      geography: 12
  }
};
const student3 = {
  firstName: 'Антон',
  lastName: 'Геращенко',
  tabel: {
      math: 4,
      history: 9,
      geography: 6
  },
};

student3.__proto__ = Student

console.log(student3.getAverageScore());
*/

/*
const DanITStudent = {
    checkPass: function () {
        const passDate = new Date(this._datePass);
        const currentDate = new Date();
        return passDate > currentDate;
    },
    changePass: function (date) {
        this._datePass = date;
    }
};

const student1 = {
    firstName: 'Andrew',
    lastName: 'Jenkins',
    _datePass: '2019-02-18'
}

student1.__proto__ = DanITStudent;

const student2 = {
    firstName: 'Alena',
    lastName: 'Indesit',
    _datePass: '2019-10-18'
};

student2.__proto__ = DanITStudent;

console.log(student1.checkPass());
console.log(student2.checkPass());
student1.changePass('2020-03-05');
console.log(student1.checkPass());
*/

const Product = function(id, shortName, fullName, price) {
    this.id = id;
    this.shortName = shortName;
    this.fullName = fullName;
    this.price = price;
    this.calcStockPrice = function (value) {
        return this.price * (1 - value / 100);
    }
};

const lenovo = new Product(129, 'len', 'lenovo', 20000);
console.log(lenovo.calcStockPrice(10));