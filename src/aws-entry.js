import Customer from './Customer/Customer';

function lambda_function(context) {
  Customer.update(context.request);
}
