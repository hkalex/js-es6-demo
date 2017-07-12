import Customer from './Customer/Customer';

http.content.customer.update = function(context) {
  Customer.update(context.request);
}
