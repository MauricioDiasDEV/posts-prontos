"use client";
import { useState } from "react";

const niches = [
  { value: "manicure", label: "Manicure / Unhas" },
  { value: "barbearia", label: "Barbearia" },
  { value: "outro", label: "Outro" },
];

export default function LeadForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    niche: "manicure",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("fail");
      setStatus("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        niche: "manicure",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-10">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">
          Dados recebidos!
        </h3>
        <p className="text-slate-600 mb-6">
          Entro em contato no seu WhatsApp em breve.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-rose-600 font-bold hover:underline"
        >
          Enviar outro
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <input
          required
          value={form.name}
          onChange={update("name")}
          placeholder="Seu nome"
          className="w-full rounded-xl border-2 border-slate-200 bg-white px-5 py-4 text-slate-900 outline-none transition-colors focus:border-rose-500"
        />
      </div>
      <div>
        <input
          required
          type="email"
          value={form.email}
          onChange={update("email")}
          placeholder="Seu melhor e-mail"
          className="w-full rounded-xl border-2 border-slate-200 bg-white px-5 py-4 text-slate-900 outline-none transition-colors focus:border-rose-500"
        />
      </div>
      <div>
        <input
          required
          value={form.phone}
          onChange={update("phone")}
          placeholder="WhatsApp (com DDD)"
          className="w-full rounded-xl border-2 border-slate-200 bg-white px-5 py-4 text-slate-900 outline-none transition-colors focus:border-rose-500"
        />
      </div>
      <div>
        <select
          value={form.niche}
          onChange={update("niche")}
          className="w-full rounded-xl border-2 border-slate-200 bg-white px-5 py-4 text-slate-900 outline-none transition-colors focus:border-rose-500 appearance-none"
        >
          {niches.map((n) => (
            <option key={n.value} value={n.value}>
              {n.label}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-xl bg-rose-600 px-6 py-4 text-lg font-bold text-white shadow-lg shadow-rose-600/30 hover:bg-rose-700 hover:scale-[1.02] transition-all disabled:opacity-70 disabled:hover:scale-100"
      >
        {status === "loading" ? "Enviando…" : "Quero saber mais"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-600 font-medium text-center">
          Ocorreu um erro. Tente novamente.
        </p>
      )}
    </form>
  );
}
