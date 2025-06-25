// Hitung Luas Segitiga
document.getElementById("btn-hitung-luas").addEventListener("click", function () {
  const alas = parseFloat(document.getElementById("alas").value);
  const tinggi = parseFloat(document.getElementById("tinggi").value);

  if (isNaN(alas) || isNaN(tinggi)) {
    document.getElementById("hasil-luas").innerHTML = "<p style='color:red;'>Masukkan nilai alas dan tinggi yang valid!</p>";
    return;
  }

  const luas = 0.5 * alas * tinggi;
  document.getElementById("hasil-luas").innerHTML = `
    <p>L = 1/2 × ${alas} × ${tinggi}</p>
    <p>L = ${luas}</p>
  `;
});

document.getElementById("btn-reset-luas").addEventListener("click", function () {
  document.getElementById("alas").value = "";
  document.getElementById("tinggi").value = "";
  document.getElementById("hasil-luas").innerHTML = "";
});

// Hitung Keliling Segitiga
document.getElementById("btn-hitung-keliling").addEventListener("click", function () {
  const a = parseFloat(document.getElementById("sisi-a").value);
  const b = parseFloat(document.getElementById("sisi-b").value);
  const c = parseFloat(document.getElementById("sisi-c").value);

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    document.getElementById("hasil-keliling").innerHTML = "<p style='color:red;'>Masukkan semua sisi dengan benar!</p>";
    return;
  }

  const keliling = a + b + c;
  document.getElementById("hasil-keliling").innerHTML = `
    <p>K = ${a} + ${b} + ${c}</p>
    <p>K = ${keliling}</p>
  `;
});

document.getElementById("btn-reset-keliling").addEventListener("click", function () {
  document.getElementById("sisi-a").value = "";
  document.getElementById("sisi-b").value = "";
  document.getElementById("sisi-c").value = "";
  document.getElementById("hasil-keliling").innerHTML = "";
});
