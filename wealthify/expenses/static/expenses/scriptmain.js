//1
const balance = document.getElementById(
    "balance"
    );
    const money_plus = document.getElementById(
    "money-plus"
    );
    const money_minus = document.getElementById(
    "money-minus"
    );
    const list = document.getElementById("list");
    const form = document.getElementById("form");
    const text = document.getElementById("text");
    const amount = document.getElementById("amount");
    // const dummyTransactions = [
    //   { id: 1, text: "Flower", amount: -20 },
    //   { id: 2, text: "Salary", amount: 300 },
    //   { id: 3, text: "Book", amount: -10 },
    //   { id: 4, text: "Camera", amount: 150 },
    // ];
    
    // let transactions = dummyTransactions;
    
    //last
    const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'));
    
    let transactions = localStorage.getItem('transactions') !== null ? localStorageTransactions : [];
    
    //5
    //Add Transaction
    function addTransaction(e){
    e.preventDefault();
    if(text.value.trim() === '' || amount.value.trim() === ''){
        alert('please add text and amount')
    }else{
        const transaction = {
        id:generateID(),
        text:text.value,
        amount:+amount.value
        }
    
        transactions.push(transaction);
    
        addTransactionDOM(transaction);
        updateValues();
        updateLocalStorage();
        text.value='';
        amount.value='';
    }
    }
    
    
    //5.5
    //Generate Random ID
    function generateID(){
    return Math.floor(Math.random()*1000000000);
    }
    
    //2
    
    //Add Trasactions to DOM list
    function addTransactionDOM(transaction) {
      //GET sign
    const sign = transaction.amount < 0 ? "-" : "+";
    const item = document.createElement("li");
    
      //Add Class Based on Value
    item.classList.add(
        transaction.amount < 0 ? "minus" : "plus"
    );
    
    item.innerHTML = `
        ${transaction.text} <span>${sign}${Math.abs(
        transaction.amount
    )}</span>
        <button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>
        `;
    list.appendChild(item);
    }
    
    //4
    
    //Update the balance income and expence
    function updateValues() {
    const amounts = transactions.map(
        (transaction) => transaction.amount
    );
    const total = amounts
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);
    const income = amounts
        .filter((item) => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);
    const expense =
        (amounts
        .filter((item) => item < 0)
          .reduce((acc, item) => (acc += item), 0) *
        -1).toFixed(2);
    
        balance.innerText=`$${total}`;
        money_plus.innerText = `$${income}`;
        money_minus.innerText = `$${expense}`;
    }
    
    
    //6
    
    //Remove Transaction by ID
    function removeTransaction(id){
    transactions = transactions.filter(transaction => transaction.id !== id);
    updateLocalStorage();
    Init();
    }
    //last
    //update Local Storage Transaction
    function updateLocalStorage(){
    localStorage.setItem('transactions',JSON.stringify(transactions));
    }
    
    //3
    
    //Init App
    function Init() {
    list.innerHTML = "";
    transactions.forEach(addTransactionDOM);
    updateValues();
    }
    
    Init();
    
    form.addEventListener('submit',addTransaction);
    
    
    
    
    
    
    //Chat bot
    
    
    document.addEventListener("DOMContentLoaded", function() {
        var chatDisplay = document.getElementById("chat-display");
        var userInputField = document.getElementById("user-input-field");
        var sendButton = document.getElementById("send-button");
    
        sendButton.addEventListener("click", function() {
            var userMessage = userInputField.value;
            if (userMessage.trim() !== "") {
                appendUserMessage(userMessage);
                processUserMessage(userMessage);
                userInputField.value = "";
            }
        });
    
        function appendBotMessage(message) {
            var botMessageElement = document.createElement("div");
            botMessageElement.classList.add("chat-message", "bot");
            botMessageElement.innerHTML = "<p>" + message + "</p>";
            chatDisplay.appendChild(botMessageElement);
            chatDisplay.scrollTop = chatDisplay.scrollHeight;
        }
    
        function appendUserMessage(message) {
            var userMessageElement = document.createElement("div");
            userMessageElement.classList.add("chat-message", "user");
            userMessageElement.innerHTML = "<p>" + message + "</p>";
            chatDisplay.appendChild(userMessageElement);
            chatDisplay.scrollTop = chatDisplay.scrollHeight;
        }
    
        function processUserMessage(message) {
            // Placeholder logic for processing user's message and generating bot's response
            // You can replace this with your actual implementation to answer finance-related queries
            var response = generateFinanceResponse(message);
            appendBotMessage(response);
        }
    
        function generateFinanceResponse(message) {
            // Placeholder logic to generate finance-related responses
            // You can replace this with your actual implementation using your knowledge base and logic
            var response = "I'm sorry, I cannot answer that question at the moment.";
            // Add your own logic here to generate appropriate responses based on finance-related queries
            // Example:
            if (message.toLowerCase().includes("what is the difference between stocks and bonds")) {
                response = "Stocks represent ownership in a company, while bonds represent debt. When you own stocks, you become a partial owner of the company and have the potential to benefit from its growth. Bonds, on the other hand, are debt instruments issued by companies or governments to raise capital. Bondholders lend money and receive periodic interest payments until the bond matures.";
            }
            else if (message.toLowerCase().includes("what is compound interest")) {
                response = "Compound interest is the interest earned not only on the initial amount of money (principal), but also on any interest that has been previously earned. Over time, this can lead to exponential growth of your savings or investments.";
            }
            else if (message.toLowerCase().includes("what is diversification")) {
                response = "Diversification is a risk management strategy that involves spreading your investments across different assets, such as stocks, bonds, and real estate, as well as different industries and geographic regions. By diversifying, you reduce the impact of any single investment on your overall portfolio and potentially minimize losses.";
            }
            else if (message.toLowerCase().includes("what is a credit score")) {
                response = "A credit score is a numerical representation of an individual's creditworthiness. It is based on credit history, including factors like payment history, outstanding debts, length of credit history, types of credit used, and new credit applications. Lenders and financial institutions use credit scores to assess the likelihood of a borrower repaying their debts.";
            }
            else if (message.toLowerCase().includes("what is the difference between a bull market and a bear market")) {
                response = "A bull market is characterized by rising stock prices and optimism among investors. It generally reflects a strong economy and increasing investor confidence. Conversely, a bear market is marked by falling stock prices and pessimism. It typically indicates a weakening economy and declining investor sentiment.";
            }
            else if (message.toLowerCase().includes("what is the difference between a credit card and a debit card")) {
                response = "A credit card allows you to borrow money from the card issuer up to a certain credit limit. You must repay the borrowed amount along with any accrued interest. A debit card, on the other hand, is linked to your bank account, and the funds used for purchases are deducted directly from your account balance. With a debit card, you are not borrowing money but using your own funds.";
            }
            return response;
        }
    });














// Handle donate link click
const donateLinks = document.querySelectorAll('.donate-link');
donateLinks.forEach((link) => {
link.addEventListener('click', donateToNGO);
});

function donateToNGO(event) {
event.preventDefault();

  // Extract NGO information from the clicked element
const ngoInfo = event.target.parentNode;
const ngoName = ngoInfo.querySelector('h3').textContent;
const goal = ngoInfo.querySelector('p').textContent;

  // Perform further processing (e.g., redirect to a donation page)

  // Example: Open a new tab with a donation page URL
const donationURL = `https://example.com/donate?ngo=${encodeURIComponent(ngoName)}&goal=${encodeURIComponent(goal)}`;
window.open(donationURL, '_blank');
}










// for gl
var clicks = 0;

function generateReferralLink() {
  // Generate a unique referral link (you can replace this logic with your own implementation)
var referralLink = "https://example.com/referral/" + Math.random().toString(36).substr(2, 10);

document.getElementById("referral-link").value = referralLink;
}

function copyReferralLink() {
var referralLink = document.getElementById("referral-link");

  // Select the referral link text
referralLink.select();
referralLink.setSelectionRange(0, 99999);

  // Copy the referral link to the clipboard
document.execCommand("copy");

  // Change the button text to indicate successful copy
document.querySelector("button").innerText = "Copied!";
}

function incrementClickCounter() {
clicks++;
document.getElementById("click-counter").innerText = clicks + (clicks === 1 ? " Click" : " Clicks");
}

// Generate the initial referral link
generateReferralLink();

// Add event listener for click counter
document.getElementById("referral-link").addEventListener("click", incrementClickCounter);
