var Customer = (function () {
    console.log('abc');
    function Customer() { console.log('This is function customer...'); }
    Customer.prototype.addCustomer = function () {
        console.log('Adding prototype customer...');
        return 0;
    };
    return Customer;
})();
console.log(Customer.addCustomer());
console.log(Customer.__proto__);