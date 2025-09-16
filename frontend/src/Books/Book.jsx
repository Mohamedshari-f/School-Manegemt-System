import axios from "axios";
import { useEffect, useState } from "react";

function DisplayBooks() {
  const [books, setBooks] = useState([]);

  // Fetch books
  const fetchBooks = async () => {
    try {
      const res = await axios.get("http://localhost:6200/read/books");
      setBooks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // Delete book
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:6200/book/delete/${id}`);
      fetchBooks();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-10"> Courses </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition relative">

            <img src={`http://localhost:6200/allimages/${book.img}`} alt={book.img} className="w-full h-48 object-cover rounded mb-4"/>

            
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">{book.bookName}</h2>
              <button onClick={() => handleDelete(book._id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"> Delete </button>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayBooks;
