document.querySelector('button').addEventListener('click', getJoeName)


async function getJoeName(){
    try{
    const res= await fetch('http://localhost:8000/api/joe')
    const data = await res.json()

    console.log(data)

} catch(err){
    console.log(err);

}
}
