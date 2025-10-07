import { useState } from "react";

function FormSubmit() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    subscribe: false,
    gender: "",
    birthdate: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  function handleChange(e) {
    const { name, type, value, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmittedData(formData);
  }

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
     
      <form onSubmit={handleSubmit} className="border p-4 rounded  shadow-sm ">
         
        <div className="mb-3">
          <label className="form-label   ">
            Enter your name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
          />
        </div>

        <div className="mb-3">
          <label className="form-label  ">
            Enter your email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="example@example.com"
          />
        </div>

        <div className="mb-3">
          <label className="form-label  ">
            Enter your phone:
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="+12345 67890"
          />
        </div>

        <div className="mb-3">
          <label  className="form-label  ">
            Enter your address:
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            placeholder="123 Main St, City, Country"
          />
        </div>

        <div className="mb-3">
          <label className="form-label  ">
            Select your birthdate:
          </label>
          <input
            type="date"
            className="form-control"
            id="birthdate"
            name="birthdate"
            value={formData.birthdate}
            onChange={handleChange}
            required
          />
        </div>
       

        <fieldset className="mb-3">
          <legend className="col-form-label pt-0  ">Gender:</legend>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="male"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
              required
            />
            <label className="form-check-label" >
              Male
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="female"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
            />
            <label className="form-check-label" >
              Female
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="other"
              value="Other"
              checked={formData.gender === "Other"}
              onChange={handleChange}
            />
            <label className="form-check-label" >
              Other
            </label>
          </div>
        </fieldset>

     <div className="form-check mb-3 ">
          <input
            className="form-check-input"
            type="checkbox"
            name="data"
            checked={formData.data}
            onChange={handleChange}
            id="data"
          />
          <label className="form-check-label">
          I Agree To From Submit
          </label>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>

      {submittedData && (
        <div className="mt-4 p-3 border rounded bg-white shadow-sm ">
          <h5>Submitted Data:</h5>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Phone:</strong> {submittedData.phone}</p>
          <p><strong>Address:</strong> {submittedData.address}</p>
          <p><strong>Birthdate:</strong> {submittedData.birthdate}</p>
          <p><strong>From:</strong> {submittedData.data ? "Yes" : "No"}</p>
          <p><strong>Gender:</strong> {submittedData.gender}</p>
        </div>
      )}
    </div>
  );
}

export default FormSubmit;
