let userArr=[];
let customerArr=[];
class User{
    constructor(fullName,email,password) {
          this.fullName = fullName;
          this.email = email;
          this.password = password;
    }
}

class Customer{
    constructor(name,address,salary,nic) {
        this.name = name;
        this.address = address;
        this.salary = salary;
        this.nic = nic;

    }
}

/*===User management*/
const createUser=()=>{

    const fullName = $('#full-Name').val();
    const email = $('#register-email').val();
    const password = $('#register-password').val();

    //const hash = brcypt.hashSync(password,bcrypt.genSaltSync(10));
    //console.log(hash);


    let createdUser = new User('','','');
    let existUserData = userArr.find((e)=>e.email===email);
    if(existUserData){
        alert('user already exists!');
    }
    userArr.push(createdUser);
    console.log(userArr);

}

//login
const login = ()=>{
    const email = $('#email').val();
    const password = $('#password').val();

    let existUserData = userArr.find(e=>e.email===email);

    if (existUserData){
        if(existUserData.password===password){
            //login to the dashboard
        }else{
            alert('password is wrong!');
        }
    }else {
        alert('not found!');
    }
}
/*customer crud*/
const createCustomer=()=>{
   const customer = new customer(
       $('#name').val(),
       $('#address').val(),
       parseFloat($('#salary').val()),
       $('#nic').val()
   );
   customerArr.find(el=>el.nic===customer.nic);
   if(existData){
       alert('customer Nic already exists!')
   }


   customerArr.push(customer);
}
const findCustomer=(id)=>{
    //want use to promise (going little bit time to data come from db
  let selectedCustomer =
      customerArr.find(el=>el.nic===customer.nic);
    if(selectedCustomer){
        return selectedCustomer;
    }
   return null;

    customerArr.push(customer);
}
const updateCustomer=(id)=>{
    findCustomer=(id)=>{
        let customer = findCustomer(id);
        if(customer){
            $('#name').val(customer.name);
                $('#address').val(customer.address);
                parseFloat($('#salary').val(customer.salary));
                $('#nic').val(customer.nic);
        }else{
          alert('customer not found!');
        }
    }
}
const deleteCustomer=()=>{
    for(let i = 0; i<customerArr.length; i++){
        if(customerArr[i].nic===id){
            customerArr.splice(i,1);
            alert('deleted');
            return;
        }
    }

}
const getAllCustomer=()=> {
    let tbody = $('#t-body')
    {
        $.each(customerArr, function (i, item) {
            let row = $('<tr>');
            let colName = $('<tr>').text(item, name);
            let colAddress = $('<tr>').text(item, address);
            let colSalary = $('<tr>').text(item, salary);
            let colNic = $('<tr>').text(item, nic);

            row.append(colName, colAddress, colSalary, colNic);
            tBody.append(row);
        })
    }
}



const clearAndLoad=(element)=>{


}