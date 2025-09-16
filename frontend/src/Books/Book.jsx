import axios from "axios";
import { useEffect, useState } from "react";
import Dashboard from "../Dashboard";
import { Link } from "react-router-dom";

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
    <> 

      <div className="flex">
        {/* Sidebar (Dashboard) */}
        <div className="w-64 min-h-screen">
          <Dashboard />
        </div>
        

        {/* Main Content */}
        <div className="flex-1 p-10 bg-white min-h-screen">
          <div className="ml-[700px]">

          <Link to="/AddBook">
            <button className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-lg text-white font-semibold">
              ➕ Add New Book
            </button>
          </Link>
          </div>

          <h1 className="text-3xl font-bold text-center mb-10">Courses</h1>
 
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {books.map((book) => (
              <div
                key={book._id}
                className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition relative"
              >
                <img
                  src={`http://localhost:6200/allimages/${book.img}`}
                  alt={book.img}
                  className="w-full h-48 object-cover rounded mb-4"
                />

                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">{book.bookName}</h2>
                  <button
                    onClick={() => handleDelete(book._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default DisplayBooks;
