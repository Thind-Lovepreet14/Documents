import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

// Note: see readme for instructions on creating a paypal sandbox id and prod
// this component is logically structured but only consoles the results

export default class MyApp extends React.Component {
    render() {
        const onSuccess = (payment) => {            
            console.log("Payment approved!", payment);
            this.props.clearCart();
            this.props.history.push('/');             
        }

        const onCancel = (data) => {
            // paypal cancelled!
            console.log('The payment was cancelled!', data);            
        }

        const onError = (err) => {           
            console.log("Error!", err);
            // note guidance on async loading "https://www.paypalobjects.com/api/checkout.js"
           
        }
        // configs
        let env = 'sandbox'; 
        let currency = 'USD'; 
        const client = {
            sandbox:    'YOUR-SANDBOX-APP-ID',
            production: 'YOUR-PRODUCTION-APP-ID',
        }       
        
        return (
            <PaypalExpressBtn env={env} client={client} currency={currency} total={this.props.total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
        );
    }
}
