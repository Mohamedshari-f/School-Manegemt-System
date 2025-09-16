import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const [bookName, setBookName] = useState("");
  const [img, setImg] = useState(null); // file object
  const navigate = useNavigate();

  const handlePost = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("bookName", bookName);
    formData.append("img", img); // file-ka saxda ah

    axios
      .post("http://localhost:6200/create/book", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(() => {
        alert("Book added successfully");
        navigate("/Courses");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handlePost}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Add New Course</h2>

        <div className="mb-4">
          <label className="block mb-2 font-medium">Course Name</label>
          <input
            type="text"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-medium">Book Image</label>
          <input
            type="file"
            onChange={(e) => setImg(e.target.files[0])} // file object
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Add Course
        </button>
      </form>
    </div>
  );
}

export default AddBook;
