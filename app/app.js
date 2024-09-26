

document.getElementById('input-submit-button').addEventListener('click',function(){
  let input1 = parseFloat(document.getElementById('input-income').value);
  let input2 = parseFloat(document.getElementById('input-software').value);
  let input3 = parseFloat(document.getElementById('input-courses').value);
  let input4 = parseFloat(document.getElementById('input-internet').value);
  let totalExpenses = input2 + input3 + input4;
  let balance = input1 - totalExpenses;
  document.getElementById('total-expenses').innerText = totalExpenses;
  document.getElementById('balance').innerText = balance;
  
  document.getElementById('result-summary').classList.remove('hidden')

})

// calculate-savings

document.getElementById('calculate-savings').addEventListener('click',function(){
  let savingsInput = parseFloat(document.getElementById('savings-input').value);
  console.log(savingsInput)
  let input1 = parseFloat(document.getElementById('input-income').value);
  let input2 = parseFloat(document.getElementById('input-software').value);
  let input3 = parseFloat(document.getElementById('input-courses').value);
  let input4 = parseFloat(document.getElementById('input-internet').value);
  let totalExpenses = input2 + input3 + input4;
  let balance = input1 - totalExpenses;
  const mySavings = (savingsInput * balance) /100;
  const remaining  = balance - mySavings;
  
  document.getElementById('savings').innerText = mySavings
  document.getElementById('remaining-amount').innerText = remaining
  
})