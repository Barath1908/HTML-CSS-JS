function calculateLoan() {
  loanAmount = document.getElementById("loan-amount").value;
  InterestRate = document.getElementById("intrest-rate").value;
  monthsToPay = document.getElementById("months-to-pay").value;
  pay = document.getElementById("payment");

  interest = (loanAmount * (InterestRate * 0.01)) / monthsToPay;
  MonthlyPayment = (loanAmount / monthsToPay + interest).toFixed(2);

  pay.innerHTML = `Monthly Payment: ${MonthlyPayment}`;
}
