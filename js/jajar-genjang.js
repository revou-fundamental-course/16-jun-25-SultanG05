// Hitung Luas Jajar Genjang
document.getElementById("btn-hitung-luas-jg").addEventListener("click", function () {
  const alas = parseFloat(document.getElementById("alas-jg").value);
  const tinggi = parseFloat(document.getElementById("tinggi-jg").value);

  if (isNaN(alas) || isNaN(tinggi)) {
    document.getElementById("hasil-luas-jg").innerHTML = "<p style='color:red;'>Masukkan angka yang valid!</p>";
    return;
  }

  const luas = alas * tinggi;
  document.getElementById("hasil-luas-jg").innerHTML = `
    <p>L = ${alas} × ${tinggi}</p>
    <p>L = ${luas}</p>
  `;
});

document.getElementById("btn-reset-luas-jg").addEventListener("click", function () {
  document.getElementById("alas-jg").value = "";
  document.getElementById("tinggi-jg").value = "";
  document.getElementById("hasil-luas-jg").innerHTML = "";
});


// Hitung Keliling Jajar Genjang
document.getElementById("btn-hitung-keliling-jg").addEventListener("click", function () {
  const alas = parseFloat(document.getElementById("alas-kll-jg").value);
  const sisi = parseFloat(document.getElementById("sisi-miring-jg").value);

  if (isNaN(alas) || isNaN(sisi)) {
    document.getElementById("hasil-keliling-jg").innerHTML = "<p style='color:red;'>Masukkan angka yang valid!</p>";
    return;
  }

  const keliling = 2 * (alas + sisi);
  document.getElementById("hasil-keliling-jg").innerHTML = `
    <p>K = 2 × (${alas} + ${sisi})</p>
    <p>K = ${keliling}</p>
  `;
});

document.getElementById("btn-reset-keliling-jg").addEventListener("click", function () {
  document.getElementById("alas-kll-jg").value = "";
  document.getElementById("sisi-miring-jg").value = "";
  document.getElementById("hasil-keliling-jg").innerHTML = "";
});
