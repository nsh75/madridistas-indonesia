import { useState, useEffect } from "react";

const Checkout = ({
  checkoutProduct,
  setActivePage,
}) => {
  const [success, setSuccess] =
    useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePayment = () => {
    setSuccess(true);

    setTimeout(() => {
      setActivePage("home");
    }, 3000);
  };

  if (!checkoutProduct) {
    return (
      <section className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center">

          <h1 className="text-3xl font-bold text-slate-900">
            Tidak Ada Produk
          </h1>

          <button
            onClick={() =>
              setActivePage("shop")
            }
            className="mt-6 rounded-xl bg-yellow-400 px-6 py-3 font-bold text-slate-900"
          >
            Kembali Shop
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-100">

      <div className="mx-auto max-w-5xl px-4 py-12">

        {!success ? (
          <>
            <div className="mb-10">
              <h1 className="text-4xl font-bold text-slate-900">
                Checkout
              </h1>

              <p className="mt-3 text-slate-600">
                Konfirmasi pembelian produk.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">

              <div className="rounded-2xl bg-white p-6 shadow-md">

                <img
                  src={checkoutProduct.image}
                  alt={checkoutProduct.title}
                  className="h-80 w-full rounded-2xl object-cover"
                />
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-md">

                <h2 className="text-3xl font-bold text-slate-900">
                  {checkoutProduct.title}
                </h2>

                <p className="mt-4 text-slate-600">
                  {checkoutProduct.description}
                </p>

                <p className="mt-6 text-4xl font-extrabold text-blue-700">
                  ${checkoutProduct.price}
                </p>

                <div className="mt-8 space-y-4">

                  <div>
                    <label className="mb-2 block font-semibold text-slate-700">
                      Nama Pembeli
                    </label>

                    <input
                      type="text"
                      placeholder="Masukkan nama..."
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-700"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block font-semibold text-slate-700">
                      Metode Pembayaran
                    </label>

                    <select className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-700">
                      <option>QRIS</option>
                      <option>Bank Transfer</option>
                      <option>E-Wallet</option>
                      <option>COD</option>
                    </select>
                  </div>

                  <button
                    onClick={handlePayment}
                    className="w-full rounded-xl bg-yellow-400 px-6 py-4 text-lg font-bold text-slate-900 transition hover:scale-105"
                  >
                    Bayar Sekarang
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="rounded-3xl bg-white p-16 text-center shadow-xl">

            <div className="text-7xl">
              ✅
            </div>

            <h1 className="mt-6 text-5xl font-extrabold text-slate-900">
              Payment Success
            </h1>

            <p className="mt-4 text-lg text-slate-600">
              Terima kasih telah berbelanja di
              Madridistas Indonesia 🔥
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Checkout;
