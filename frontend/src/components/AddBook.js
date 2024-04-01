import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    published_year: '',
    quantity_available: '',
    author_id: '',
    genre_id: '',
  });

  const token = localStorage.getItem('accessToken');
 
  // const history = useHistory();

  // Function to handle form field changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {

      //const response = await axios.post('http:localhost:5000/addBook', formData);

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
        
      axios.post({
        url: 'http://localhost:5000/addBook',config,
        data: {
          ...formData
        },


        
        // validateStatus: (status) => {
        //   return true; 
        // },

        
      }).catch(error => {
          console.log("SDSNMSNDASDSODKSKA",error);
      }).then(response => {
          console.log("SDSNMSNDASDSODKSKA",response);
      });
      //console.log(response.data); // Handle response from backend
      // history.push('/allBooks');
    } catch (error) {
      console.error('Error registering book:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center"> {/* Center the form */}
        <div className="col-md-6"> {/* Limit the width */}
          <h2>Register Book</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input type="text" className="form-control" id="title" name="title" value={formData.title} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea className="form-control" id="description" name="description" value={formData.description} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="publishedYear" className="form-label">Published Year</label>
              <input type="text" className="form-control" id="publishedYear" name="published_year" value={formData.publishedYear} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="quantityAvailable" className="form-label">Quantity Available</label>
              <input type="number" className="form-control" id="quantityAvailable" name="quantity_available" value={formData.quantityAvailable} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="authorId" className="form-label">Author ID</label>
              <input type="text" className="form-control" id="authorId" name="author_id" value={formData.authorId} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="genreId" className="form-label">Genre ID</label>
              <input type="text" className="form-control" id="genreId" name="genre_id" value={formData.genreId} onChange={handleInputChange} />
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
          </form>
        </div>
      </div>
    </div>
  );  
};

export default AddBook;
