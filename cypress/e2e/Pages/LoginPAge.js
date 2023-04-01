class login{

    logInprocess(){
        const data = require('../Pages/LoginPageLocatorAndDataset.json')
        const method = require('../Utilities/commonMethods')
        method.titleverify('OrangeHRM')
        method.dataSend(data.username,data.user_value)
        method.dataSend(data.password,data.user_password)
        method.time()  
        method.click(data.login);
        
    }
    
} export default login