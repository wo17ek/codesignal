/*
	Some phone usage rate may be described as follows:
	first minute of a call costs min1 cents,
	each minute from the 2nd up to 10th (inclusive) costs min2_10 cents
	each minute after 10th costs min11 cents.
	You have s cents on your account before the call. What is the duration of the longest call (in minutes rounded down to the nearest integer) you can have?
*/

class PhoneCall {
    constructor(costOfFirstMinute, costFromSecondToTenMinutes, costAboveTenMinutes, accountCash) {
        this.costOfFirstMinute = costOfFirstMinute;
        this.costFromSecondToTenMinutes = costFromSecondToTenMinutes;
        this.costAboveTenMinutes = costAboveTenMinutes;
        this.accountCash = accountCash;
        this.howManyMinutesToCall = 0;
    }
    
    totalAmountOfMinutes() {
        try {
            this.firstMinutesOfCalling();
            this.fromSecondToTenMinutesOfCalling();
            this.aboveTenMinutesOfCalling();
        } catch (e) {
            ;
        } finally {
            return this.getTotalAmountOfMinutes();
        }
    }
    
    firstMinutesOfCalling() {
        if(this.isEnoughCashOnAccount(this.costOfFirstMinute)) {
            this.decreaseMoneyOnAccountBySpecifiedCost(this.costOfFirstMinute);
            this.increaseTotalNumberOfMinutesToCall();
        }
    }
    
    isEnoughCashOnAccount(costOfCalling) {
        if(this.accountCash >= costOfCalling) {
            return true;
        }
        throw new Error("Brak środków na koncie");
    }
    
    decreaseMoneyOnAccountBySpecifiedCost(costOfThisMinute) {
        this.accountCash -= costOfThisMinute;
    }
    
    increaseTotalNumberOfMinutesToCall() {
        this.howManyMinutesToCall += 1;
    }
    
    fromSecondToTenMinutesOfCalling() {
        for(let i = 2; i <= 10 && this.isEnoughCashOnAccount(this.costFromSecondToTenMinutes); i++) {
            this.decreaseMoneyOnAccountBySpecifiedCost(this.costFromSecondToTenMinutes);
            this.increaseTotalNumberOfMInutesToCall();
        }
    }
    
    aboveTenMinutesOfCalling() {
        while(this.isEnoughCashOnAccount(this.costAboveTenMinutes)) {
            this.decreaseMoneyOnAccountBySpecifiedCost(this.costAboveTenMinutes);
            this.increaseTotalNumberOfMInutesToCall();
        }
    }
    
    getTotalAmountOfMinutes() {
        return this.howManyMinutesToCall;
    }
}

function phoneCall(min1, min2_10, min11, s) {
    const phoneCall = new PhoneCall(min1, min2_10, min11, s);
    return phoneCall.totalAmountOfMinutes();
}