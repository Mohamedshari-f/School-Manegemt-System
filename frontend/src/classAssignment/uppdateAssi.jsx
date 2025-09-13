import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UpdateAssignment() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    date: "",
    AssigmentTitle: "",
    Course: "",
    Class: "",
  });
  const [image, setImage] = useState(null);
  const [existingImage, setExistingImage] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch single assignment
  useEffect(() => {
    if (!id) return;
    axios
      .get(`http://localhost:6200/readSingle/Assignment/${id}`)
      .then((res) => {
        const data = res.data[0] || {};
        setForm({
          name: data.name || "",
          date: data.date ? data.date.split("T")[0] : "",
          AssigmentTitle: data.AssigmentTitle || "",
          Course: data.Course || "",
          Class: data.Class || "",
        });
        setExistingImage(data.prImage || "");
      })
      .catch(console.error);
  }, [id]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle update
  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!id) return;

    const formData = new FormData();
    for (const key in form) {
      formData.append(key, form[key]);
    }
    if (image) formData.append("prImage", image);

    try {
      setLoading(true);
      await axios.put(`http://localhost:6200/update/Assignment/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      Swal.fire("Updated!", "Assignment updated successfully", "success");
      navigate("/Assingment");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update assignment", { position: "top-right" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-xl border-t-8 border-orange-600">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">
          Update Assignment
        </h2>

        <form onSubmit={handleUpdate} className="space-y-4">
          {/* Form fields */}
          {[
            { name: "name", label: "Name", type: "text" },
            { name: "date", label: "Date", type: "date" },
            { name: "AssigmentTitle", label: "Assigment Title", type: "text" },
            { name: "Course", label: "Course", type: "text" },
            { name: "Class", label: "Class", type: "text" },
          ].map(({ name, label, type }) => (
            <div key={name}>
              <label className="block text-gray-700 font-medium mb-1">{label}</label>
              <input
                type={type}
                name={name}
                value={form[name]}
                onChange={handleChange}
                className="w-full border border-orange-600 rounded-lg p-2"
                required
              />
            </div>
          ))}

          {/* Image upload */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full text-gray-700"
            />
            {existingImage && !image && (
              <p className="text-sm text-gray-500 mt-1">Current Image: {existingImage}</p>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 mt-5 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Updating..." : "Update Assignment"}
          </button>
        </form>

        <ToastContainer autoClose={2000} />
      </div>
    </div>
  );
}
