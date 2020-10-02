const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operator');
const clearBtns = document.querySelectorAll('.clear-btn');
const decimalBut = document.getElementById('decimal');
const prcent = document.getElementById('percent');
const square = document.getElementById('sqrt');
const negativeBtn = document.getElementById('negative');
const result = document.getElementById('result');
const display = document.getElementById('display');
let MemoryCurrentNumber = 0;
let MemoryNewNumber = false;
let MemoryPendingOperation = '';
    // numbers
numbers.forEach((item, i) => {
  item.addEventListener('click', function (e) {
    numberPress(e.target.textContent);
  })
});
   // operations
operations.forEach((item, i) => {
  item.addEventListener('click', (e) => {
    operationBtn(e.target.textContent)
  })
});
   // clear
clearBtns.forEach((item, i) => {
  item.addEventListener('click', (e) => {
    clear(e.target.textContent)
  })
});

decimalBut.addEventListener('click', decimal);
square.addEventListener('click', sqrt);
prcent.addEventListener('click', percent);
negativeBtn.addEventListener('click', negative)
    // --------------- functions ------------------ //
function numberPress(number) {
  if(MemoryNewNumber) {
    display.value = number;
    MemoryNewNumber = false;
  }else {
  if(display.value === '0') {
    display.value = number
  }else {
  display.value += number;
}
}
};
function operationBtn(op) {
let memoryLocalOperation = display.value;
  if(MemoryNewNumber && MemoryPendingOperation != '=') {
    display.value = MemoryCurrentNumber
  }else {
    MemoryNewNumber = true;
    if(MemoryPendingOperation === '+') {
      MemoryCurrentNumber += parseFloat(memoryLocalOperation); // +
    }else if(MemoryPendingOperation === '-') {
      MemoryCurrentNumber -= parseFloat(memoryLocalOperation); // -
    }
  else if(MemoryPendingOperation === '*') {
    MemoryCurrentNumber *= parseFloat(memoryLocalOperation); // *
  }else if(MemoryPendingOperation === '/') {
    MemoryCurrentNumber /= parseFloat(memoryLocalOperation); // (/)
  }
  else {
    MemoryCurrentNumber = parseFloat(memoryLocalOperation); // result
  }
  display.value = MemoryCurrentNumber;
  MemoryPendingOperation = op;
};
};

function clear(id) {
  if(id === 'ce') {
    display.value = '0';
    MemoryNewNumber = true;
  }else if (id === 'c') {
    display.value = '0';
    MemoryNewNumber = true;
    MemoryCurrentNumber = 0;
    MemoryPendingOperation = ''
  }
};

function decimal(argument) {
   let localDecimalMemory = display.value;

   if(MemoryNewNumber) {
     localDecimalMemory = '0.';
     MemoryNewNumber = false;
   } else {
     if(localDecimalMemory.indexOf('.') === -1) {
     localDecimalMemory += '.';
   };
 };
   display.value = localDecimalMemory;
   console.log(' click decimal ')
};


function percent() {
   let localPercentMemory = display.value;
   localPercentMemory =parseFloat(MemoryCurrentNumber) * parseFloat(localPercentMemory) / 100;
   display.value = localPercentMemory
   console.log('click pecent')
}

 function sqrt() {
   let localSqrtMemory = display.value;
   localSqrtMemory = Math.sqrt(localSqrtMemory);
   display.value = localSqrtMemory;
 }
 function negative() {
   let localNegativeMemory = display.value;
   localNegativeMemory = 0 - parseFloat(localNegativeMemory);
   display.value = localNegativeMemory;
 }
