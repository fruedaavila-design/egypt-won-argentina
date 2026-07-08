"use client";

import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function SignatureForm() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    country: ""
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase
      .from("signatures")
      .insert([form]);

    if (error) {
      setMessage("Something went wrong. Please try again.");
    } else {
      setMessage("Your signature has been officially recorded.");
      setForm({
        first_name: "",
        last_name: "",
        email: "",
        country: ""
      });
    }

    setLoading(false);
  }

  return (
    <form className="signatureForm" onSubmit={handleSubmit}>
      <input
        name="first_name"
        placeholder="First name"
        value={form.first_name}
        onChange={handleChange}
        required
      />

      <input
        name="last_name"
        placeholder="Last name"
        value={form.last_name}
        onChange={handleChange}
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <input
        name="country"
        placeholder="Country"
        value={form.country}
        onChange={handleChange}
        required
      />

      <button type="submit" disabled={loading}>
        {loading ? "Recording..." : "Submit Signature"}
      </button>

      {message && <p className="formMessage">{message}</p>}
    </form>
  );
}
