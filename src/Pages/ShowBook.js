import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBook } from "../Componands/BookSlice";

const showBooks = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const books = useSelector((state) => state.booksReducer.books);
 // eslint-disable-next-line react-hooks/rules-of-hooks
 const dispatch=useDispatch();

  const handleDelete=(id)=>{
dispatch(deleteBook(id));
  }
  return (
    <div className="text-center">
      <h2>List of Books </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Author</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {books &&
              books.map((book) => {
                const { id, title, author } = book;
                return (
                  <tr>
                    <th>{id}</th>
                    <td>{title}</td>
                    <td>{author}</td>
                    <td className="space-x-2">
                     <Link to="/EditBook" state={{id,title,author}}> <button className="btn  btn-outline  btn-primary btn-sm">
                        Edit
                      </button></Link>
                      <button onClick={()=>{handleDelete(id)}} className="btn  btn-outline  btn-accent btn-sm">
                        Delete
                      </button>
                      <button className="btn  btn-outline  btn-sm">
                        Small
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default showBooks;
