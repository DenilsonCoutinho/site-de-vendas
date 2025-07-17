// app/components/GoogleReviews.tsx
export default function GoogleReviews() {
  return (
    <section className="py-12 px-6">
      <h3 className="text-xl font-semibold text-center mb-6">O que nossos clientes dizem</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {["João", "Maria"].map((name, i) => (
          <div key={i} className="border p-4 rounded-lg shadow-sm">
            <p className="font-semibold">{name}</p>
            <p className="text-yellow-500">★★★★★</p>
            <p className="text-sm mt-2">"Serviço excelente! Meu site ficou incrível e pronto em poucos dias."</p>
          </div>
        ))}
      </div>
    </section>
  );
}
