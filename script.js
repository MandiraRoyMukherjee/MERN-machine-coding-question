// var content = ''
// var error = ''
// var opDiv = document.querySelector('#output')
// var opErrDiv = document.querySelector('#opError')

// // actual javascript code
// try {
//    const person = {
//       name: 'Alice',
//       age: 25,
//       state: null,
//       currentState() {
//          content += "The current state: " + JSON.stringify(this.state) + '<br>'
//       },
//       eatFood() {
//          this.state = 'Eating food.'
//          this.curentState()
//          return this
//       },
//       playCricket() {
//          this.state = 'Playing Cricket'
//          this.currentState()
//          return this
//       },
//       sleep() {
//          this.state = 'Now Sleeping.'
//          this.currentState()
//          return this
//       },
//       jump() {
//          this.state = 'Jumping High.'
//          this.currentState()
//          return this
//       },
//       walk() {
//          this.state = 'Morning Walking.'
//          this.currentState()
//          return this
//       },
//       doWork() {
//          this.state = 'Doing my work.'
//          this.currentState()
//          return this
//       }
//    }
//    person
//    .sleep()
//    .walk()
//    .jump()
//    .eatFood()
//    .doWork()
//    .sleep()
// }
// catch (err) {
//    error += err
// }
// finally {

//    // display on output console
//    opDiv.innerHTML = content
//    opErrDiv.innerHTML = error
// }