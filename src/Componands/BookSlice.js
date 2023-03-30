import { createSlice } from "@reduxjs/toolkit"

const initialBooks={
    books: [
        {id:1,title:"Team Argentina", author:"Leo Messi"},
        {id:2,title:"Team Brazil",author:"Naymar"},
        {id:3,title:"Team Jermany",author:"Zarman"}

    ]
}
// create slice have three parts 
export const booksSlice=createSlice({
    name:"books",
    initialState:initialBooks,
    reducers:{
        // action creator
        showBooks:(state)=>state,

        addBook:(state,action)=>{
            state.books.push(action.payload);
            },

        deleteBook:(state,action)=>{
            const id=action.payload;
           state.books=state.books.filter(book=>book.id!==id);

        },
        updateBook:(state,action)=>{
            const{id,title,author}=action.payload;
           const isBookExist=state.books=state.books.filter(book=>book.id===id);

           if(isBookExist){
            isBookExist[0].title=title;
            isBookExist[0].author=author;

           }
        }
    }
})
export const {showBooks,addBook,deleteBook,updateBook}=booksSlice.actions;
export default booksSlice.reducer;