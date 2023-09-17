
export default async function page() {
    await new Promise((resolve,reject)=>{
        setTimeout(()=>{
           resolve(2);
        },1000)
    })
    throw Error('Error arrived')
  return (
    <div>
      About page 
    </div>
  )
}
