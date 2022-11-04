for (let i = 1; i <= 100; i++) {
  let result = '';
  // Se o número for multiplo de 3 e 5
  if (i % 3 === 0 && i % 5 === 0) result = 'FizzBuzz';
  // Se o número for multiplo de 3
  else if (i % 3 === 0) result = 'Fizz';
  // Se o número for multiplo de 5
  else if (i % 5 === 0) result = 'Buzz';
  // Se o número não for multiplo de 3 ou de 5 mostre só o número
  else result = i;
  
  console.log(result);
}
