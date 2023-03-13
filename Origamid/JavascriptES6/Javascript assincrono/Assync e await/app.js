async function pullData(){

    const promiseData =  fetch("./dados.json")
    const responseClients =  fetch("./clientes.json")

    const jsonData = await (await promiseData)


}
pullData()