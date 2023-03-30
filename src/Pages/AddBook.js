import { queryAllByAttribute } from "@testing-library/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { addBook } from "../Componands/BookSlice";

const AddBook = () => {

    const numberofBooks=useSelector((state)=>state.booksReducer.books.length);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const author = event.target.author.value;
   
    const book ={id:numberofBooks+1, title, author };
    dispatch(addBook(book));
    navigate("/Showbook",{replace:true})
    // alert("success..!")
    // console.log(book);
  };
  return (
    <form onSubmit={handleSubmit} className="text-center">
      <div>
        <h2>Add books</h2>
        <input
          type="text"
          name="title"
          placeholder="Tilte:"
          className="input input-bordered w-full max-w-xs"
          required
        />
        <br />
        <input
          type="text"
          name="author"
          placeholder="Author:"
          className="input input-bordered w-full max-w-xs mt-2"
          required
        />
      </div>
      <button className="btn btn-accent mt-2">Button</button>
    </form>
  );
};

export default AddBook;
