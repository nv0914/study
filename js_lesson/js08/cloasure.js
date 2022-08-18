const userCard = (x) => {
    let card = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        key: x
    }
    const logRecord = (msg) => {
        card.historyLogs.push({
            operationType: msg,
            credits: card.balance,
            operationTime: new Date().toLocaleString()
        })
    }
    return {
        getUserCardOptions() {
            return card
        },
        putCredits(num) {
            card.balance += num
            logRecord('Received credits')
        },
        takeCredits(num) {
            if (card.balance - num > 0 && card.transactionLimit > 0) {
                card.balance -= num
                card.transactionLimit -= 1
                logRecord('Withdrawal of credits')
            } else {
                console.error('Error')
            }
        },
        transferCredits(num, recieverCard) {
            if (card.balance - +(num * 1.005).toFixed(2) > 0 && card.transactionLimit > 0) {
                card.balance -= +(num * 1.005).toFixed(2)
                card.transactionLimit -= 1
                recieverCard.putCredits(+(num * 0.995).toFixed(2))
                logRecord('Withdrawal of credits')
            } else {
                console.error('Error')
            }
        },
        setTransactionLimit(num) {
            if (num >= 0) {
                card.transactionLimit = num
                logRecord('Transaction limit change')
            }
        }
    }
}
class UserAccount {
    constructor(name) {
        this.name = name
    }
    cards = []
    addCard(){
        if(this.cards.length <= 3) {
            this.cards.push(userCard(this.cards.length + 1))
        }else{
            console.error('U have too many cards')
        }
}
    getCardByKey(n) {
        if(this.cards[n-1]) {
            return this.cards[n - 1]
        }else{
            console.error('Oops, wrong card')
        }
        }
}
let user = new UserAccount('Bob');
user.addCard()
user.addCard()
let card1 = user.getCardByKey(1);
let card2 = user.getCardByKey(2);
card1.putCredits(500)
card1.setTransactionLimit(800)
card1.transferCredits(300,card2)
card2.takeCredits(50)
console.log(card1.getUserCardOptions());
console.log(card2.getUserCardOptions());











