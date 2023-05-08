    // TODO Add the following to the Employee class.
    // getPayslip(month, year, hoursWorked) {
    //     let grossPay = this.getAmountOwed(hoursWorked);
    //     let standardPay = grossPay.standardOwed;
    //     let overtimePay = grossPay.overtimeOwed;
    //     let standardTax = standardPay * Employee.TAX_RATE;
    //     let overtimeTax = overtimePay * Employee.TAX_RATE;
    //     let standardNet = standardPay - standardTax;
    //     let overtimeNet = overtimePay - overtimeTax;
    //     let grossTotal = standardPay + overtimePay;
    //     let totalTax = standardTax + overtimeTax;
    //     let netTotal = standardNet + overtimeNet;
        
    //     return {
    //         name: this.#name,
    //         surname: this.#surname,
    //         hoursWorked: hoursWorked,
    //         month: month,
    //         year: year,
    //         rate: this.#standardRate,
    //         standardPay: standardPay,
    //         standardTax: standardTax,
    //         standardNet: standardNet,
    //         overtimePay: overtimePay,
    //         overtimeTax: overtimeTax,
    //         overtimeNet: overtimeNet,
    //         grossTotal: grossTotal,
    //         totalTax: totalTax,
    //         netTotal: netTotal
    //     };
    // }

    // get name() {
    //     return this.#name;
    // }

    // set name(name) {
    //     this.#name = name;
    // }

    // get surname() {
    //     return this.#surname;
    // }

    // set surname(surname) {
    //     this.#surname = surname;
    // }

    // get standardRate() {
    //     return this.#standardRate;
    // }

    // set standardRate(standardRate) {
    //     this.#standardRate = this.#standardRate;
    // }

    // get overtimeRate() {
    //     return this.#overtimeRate;
    // }

    // set overtimeRate(overtimeRate) {
    //     this.#overtimeRate = overtimeRate;
    // }

    // get monthlyHours() {
    //     return this.#monthlyHours;
    // }

    // set monthlyHours(monthlyHours) {
    //     this.#monthlyHours = monthlyHours;
    // }

    
    // TODO Add the following to the Executive class
    // getPayslip(month, year, hoursWorked) {
    //     let payslip = super.getPayslip(month, year, hoursWorked);
    //     payslip.bonusPay = payslip.standardPay * this.#bonusPercentage;
    //     payslip.bonusTax = payslip.bonusPay * Employee.TAX_RATE;
    //     payslip.bonusNet = payslip.bonusPay - payslip.bonusTax;
    //     payslip.grossTotal = payslip.grossTotal + payslip.bonusPay;
    //     payslip.totalTax = payslip.totalTax + payslip.bonusTax;
    //     payslip.netTotal = payslip.netTotal + payslip.bonusNet;
    //     return payslip;
    // }

    // get bonusPercentage() {
    //     return this.#bonusPercentage;
    // }

    // set bonusPercentage(bonusPercentage) {
    //     this.#bonusPercentage = bonusPercentage;
    // }