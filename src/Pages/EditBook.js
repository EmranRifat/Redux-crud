import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateBook } from '../Componands/BookSlice';

const EditBook = () => {
    const location=useLocation();
    const {id,title,author}=location.state;
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(updateBook({id,title,author}));
        navigate("/showBook",{replace:true})

}


    return (
        <div className='text-center'>
            <h2 className='bg-primary text-xl mb-2 '>Edit books</h2>

 <form onSubmit={handleSubmit} className="text-center">
      <div>
        <input
          type="text"
          name="title"
          value={title}
          className="input input-bordered w-full max-w-xs"
          required
        />
        <br />
        <input
          type="text"
          name="author"
          value={author}
          placeholder="Author:"
          className="input input-bordered w-full max-w-xs mt-2"
          required
        />
      </div>
      <button className="btn btn-accent mt-2">Update Data</button>
    </form>
        </div>
    );
};

export default EditBook;