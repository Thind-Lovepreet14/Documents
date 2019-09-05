
# ECommerce Site

## Welcome to my ecommerce site

This SPA is built with ReactJS and deploys to netlify

### Usage

git pull to your dev env
npm install for dependencies
npm start

npm build to create the dist file

create a hook to your github site in netlify for continuous deployment

### Payment gateway

A sample component is included for paypal. In order to activate the component for paypal
* create a developer account 
* locate the rest api docs and create your app
* note your credentials for sandbox testing

The component needs to be configured and currency code needs to declared
https://developer.paypal.com/docs/classic/api/currency_codes/

In order to go to production, your app will need to be submitted to paypal for approval
https://developer.paypal.com/docs/classic/lifecycle/goingLive/


