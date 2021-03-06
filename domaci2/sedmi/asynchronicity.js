/* CHALLENGE 1 */

function sayHowdy() {
    console.log('Howdy');
  }
  
  function testMe() {
    setTimeout(sayHowdy, 0);
    console.log('Partnah');
  }
  // After thinking it through, uncomment the following line to check your guess!
  testMe(); // what order should these log out? Howdy or Partnah first?
  
  
  /* CHALLENGE 2 */
  
  function delayedGreet() {
    setTimeout(() => console.log("Welcome"), 3000);
  }
  // Uncomment the following line to check your work!
   delayedGreet(); // should log (after 3 seconds): welcome
  
  
  /* CHALLENGE 3 */
  
  function helloGoodbye() {
    console.log("Hello");
    setTimeout(() => console.log("good bye"), 2000);
  }
  // Uncomment the following line to check your work!
   helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye
  
  
  /* CHALLENGE 4 */
  
  function brokenRecord() {
    function hiAgain() {
      console.log("Hi again");
    }
    setInterval(hiAgain, 2000);// ADD CODE HERE
  }
  // Uncomment the following line to check your work!
   brokenRecord(); // should log (every second): hi again
  
  
  /* CHALLENGE 5 */
  
  function limitedRepeat() {
    function hiAgain() {
      console.log("Hi for now");
    }
    function clearInter() {
      clearInterval(id);
    }
    printHi();
    let id = setInterval(hiAgain, 1000);
    setTimeout(clearInter, 5000);// ADD CODE HERE
  }
  // Uncomment the following line to check your work!
   // limitedRepeat(); // should log (every second, for 5 seconds): hi for now
  
  
  /* CHALLENGE 6 */
  
  function everyXsecsForYsecs(func,interval, duration) {
    let id = setInterval(func, interval * 1000);
    function clearInter() {
      clearInterval(id);
    }
    setTimeout(clearInter, duration * 5000);
  }
  // Uncomment the following lines to check your work!
  // function theEnd() {
     console.log('This is the end!');
  // }
  // everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!
  
  
  /* CHALLENGE 7 */
  
  function delayCounter(target, wait) {
    function func() {
      let num = 1;
      let e = setInterval(() => {
        e++;
        if (e > target){
          clearInterval(e);
        }
      }, wait);
    }
    return func;
  }
  
  // UNCOMMENT THESE TO TEST YOUR WORK!
  // const countLogger = delayCounter(3, 1000)
  // countLogger();
  // After 1 second, log 1
  // After 2 seconds, log 2
  // After 3 seconds, log 3
  
  /* CHALLENGE 8 */
  
  function promised (val) {
     return new Promise((resolve) => {
      setTimeout(() => resolve(val), 2000);
    });
  }
  
  // UNCOMMENT THESE TO TEST YOUR WORK!
  // const createPromise = promised('wait for it...');
  // createPromise.then((val) => console.log(val)); 
  // will log "wait for it..." to the console after 2 seconds
  
  /* CHALLENGE 9 */
  
  class SecondClock {
    constructor(cb) {
      // ADD CODE HERE
    }
    // ADD METHODS HERE
  }
  
  // UNCOMMENT THESE TO TEST YOUR WORK!
  // const clock = new SecondClock((val) => { console.log(val) });
  // console.log("Started Clock.");
  // clock.start();
  // setTimeout(() => {
  //     clock.reset();
  //     console.log("Stopped Clock after 6 seconds.");
  // }, 6000);
  
  /* CHALLENGE 10 */
  
  function debounce(callback, interval) {
    let number = 0;
    let ran = false;
    let e = undefined;
    function func() {
      if(!ran) {
        e = setInterval(() => number++,1);
        ran = true;
        return callback();
      }else{
        if (number < interval) {
          number = 0;
          clearInterval(e);
          e = setInterval(() => number++,1);
          return callback();
        }
      }
    }
    return func();
  }
  
  // UNCOMMENT THESE TO TEST YOUR WORK!
  // function giveHi() { return 'hi'; }
  // const giveHiSometimes = debounce(giveHi, 3000);
  // console.log(giveHiSometimes()); // -> 'hi'
  // setTimeout(function() { console.log(giveHiSometimes()); }, 2000); // -> undefined
  // setTimeout(function() { console.log(giveHiSometimes()); }, 4000); // -> undefined
  // setTimeout(function() { console.log(giveHiSometimes()); }, 8000); // -> 'hi'
  
  