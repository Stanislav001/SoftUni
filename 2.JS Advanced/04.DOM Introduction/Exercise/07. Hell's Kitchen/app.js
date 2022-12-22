function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let userInput = document.getElementsByTagName('textarea')[0].value;

      const parseInput = JSON.parse(userInput);
      
      console.log(parseInput);
   }
}


/*
PizzaHut - Peter 500, George 300, Mark 800",
"TheLake - Bob 1300, Joe 780, Jane 660

*/