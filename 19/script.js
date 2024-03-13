// Task 1
// function Some(props) {
//     this.props = props;

//     this.nethod = function() {
//         console.log('Hello World!');
//     }
// }
// const example = new Some();
// example.nethod();

// Task 2

// function Shop(title, addres) {
//     this.title = title;
//     this.addres = addres;
// }

// const green = new Shop('Green', 'ул. Петра Мстиславца 11, Минск');
// const proStore = new Shop('ProStore', 'пр-т Дзержинского, 126, Минск');

// let shops = [];
// shops.push(green, proStore)

// const shopAdress = shops.map(shop => shop.addres);


// Task 3
// class Calculato {
//     constructor() {
//         this.a = +prompt('Введите а');
//         this.b = +prompt('Введите b');
//     }

//     sum() {
//         return this.a + this.b;
//     }

//     mul() {
//         return this.a * this.b
//     }
// }

// const calc = new Calculato();

// console.log('Sum:', calc.sum());
// console.log('Mul:', calc.mul());


// Task 4
class Logo {
    constructor(url) {
      this.top = 0;
      this.left = 0;
      this.width = 200;
      this.imgUrl = url;
      this.html = null;
    }
  
    init() {
      this.imgElement = document.createElement('img');
      this.imgElement.src = this.imgUrl;
      this.html = this.imgElement;
      this.render();
      document.body.style.backgroundColor = 'black';
    }
    
    render() {
      document.body.prepend(this.html)
      this.html.style.position = 'fixed'
      this.html.style.top = this.top + 'px';
      this.html.style.left = this.left + 'px';
      this.html.style.width = this.width + 'px';
    }
  
    moveUp() {
      this.top -= 20;
      this.render();
    }
    moveDown() {
      this.top += 20;
      this.render();
    }
    moveLeft() {
      this.left -= 20;
      this.render();
    }
    moveRight() {
      this.left += 20;
      this.render();
    }
  }
  
  const imgUrl = 'https://static.tildacdn.biz/tild6263-6266-4662-b335-363930323834/LOGO.svg';
  const mfLogotip = new Logo(imgUrl);
  console.log(mfLogotip);
  
  mfLogotip.init();
  
  mfLogotip.moveRight();
  mfLogotip.moveRight();
  mfLogotip.moveRight();
  mfLogotip.moveRight();
  mfLogotip.moveDown();
  mfLogotip.moveDown();
  mfLogotip.moveDown();
  mfLogotip.moveDown();

class Circle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  render() {
    this.circleElement = document.createElement('div');
    this.circleElement.style.width = this.width + 'px';
    this.circleElement.style.height = this.height + 'px';
    this.circleElement.style.backgroundColor = this.color
    this.circleElement.style.borderRadius = 100 + '%';
    document.body.prepend(this.circleElement);
  }
}

const circle = new Circle(100, 100, 'yellow');
circle.render();

