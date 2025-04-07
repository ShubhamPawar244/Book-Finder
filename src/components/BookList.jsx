
import React from "react";
import BookItem from "../components/BookItem";

const BookList = ({ books }) => {
    return (
        <div className="row">
            {books.length === 0 && <p>No books found.</p>}
            {books.map((book) => (
                <div key={book.id} className="col-md-4 col-sm-6 mb-4">
                    <BookItem book={book} />
                </div>
            ))}
        </div>
    );
};

export default BookList;
