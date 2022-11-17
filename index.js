(async () => {

    const database = require("./src/config/db");
    const Users = require("./src/tables/users");
    const Accounts = require("./src/tables/accounts")
    await database.sync();

    // const newUser = await Users.create({
    //     username: "Maria",
    //     password: 85615674
    // })

    // console.log(newUser)
    
    // const usuariosCadastrados = await Users.findByPk(4)
    // console.log(usuariosCadastrados)

    // await usuariosCadastrados.destroy();

})()