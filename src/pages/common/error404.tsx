import toast from 'react-hot-toast';

const Error404 = () => {
  return (

    <div className="h-screen flex flex-col p-2 items-center justify-center">
      <div>You seem lost, check the address and try again!</div>
      <button onClick={() => toast.success('Successfully toasted!')} className="bg-sky-500 p-2 border-sky-200 rounded-lg mt-2 font-semibold shadow-xl text-white" >Make me a toast</button>

      
    </div>
  )
}

export default Error404