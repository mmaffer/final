import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email) return alert("Completa los campos requeridos");

    setSuccess(true);
  };

  return (
    <div className="col-md-6 mx-auto">
      <h2>Contacto</h2>

      <form onSubmit={handleSubmit}>
        <label className="form-label">Nombre*</label>
        <input
          className="form-control"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label className="form-label mt-3">Email*</label>
        <input
          className="form-control"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label className="form-label mt-3">Mensaje</label>
        <textarea
          className="form-control"
          name="message"
          rows="4"
          value={form.message}
          onChange={handleChange}
        ></textarea>

        <button className="btn btn-primary mt-3 w-100">Enviar</button>
      </form>

      {success && (
        <div className="alert alert-success mt-3">
          Mensaje enviado correctamente 🎉
        </div>
      )}
    </div>
  );
}