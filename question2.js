//[객체] car 객체를 생성 (속성은 2가지로 model 과 name 을 임의로 입력, 
//메소드로 getFullName 을 만들며 메소드의 결과는 
//[model : name] 콘솔 로그(console.log())로 출력)

// const car = {
//     model : 'GENESIS',
//     name : 'G90',
//     getFullName : function() {
//         return '${this.model} : ${this.name}'
//     }
// }

function user(modelPut, namePut) {
    this.model = modelPut;
    this.name = namePut;
}

user.prototype.getFullName = function() {
    return this.model + ':' + this.name;
}

const car = new user('GENESIS', 'G90');

console.log(car.getFullName());

// https://toproot.tistory.com/39?category=493674