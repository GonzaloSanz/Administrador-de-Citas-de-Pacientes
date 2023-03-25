const Error = ({ mensaje }) => {
    return (
        <div className='bg-red-600 text-white text-center uppercase font-bold p-3 mb-5 rounded-md'>
            <p>{mensaje}</p>
        </div>
    )
}

export default Error;