import Pagination from '@mui/material/Pagination';
const Pagebutton = () => {
    return (
        <div className='w-full px-2.5'>
            <Pagination className=" my-12 flex justify-center w-full" count={10} showFirstButton showLastButton />
        </div>
    )
}

export default Pagebutton