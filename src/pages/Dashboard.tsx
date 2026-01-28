import Card from "../components/common/Card";

const Dashboard = () => {
  return (
    <div>
      <div className="ml-80 p-6">
        <h1 className="text-2xl font-bold mb-4">
          SISTEM PAKAR MENENTUKAN KUALITAS KOPI<br></br> JENIS ARABIKA PADA SETIAP PASCA PANEN
        </h1>
      </div>
      <Card title="Sejarah dan Tantangan Kopi Arabika" imageSrc="../src/assets/images/kopi.png">
        <p className="text-justify">
          Di antara berbagai jenis kopi, Arabika menorehkan sejarah sebagai kopi pertama yang menjejakkan kakinya di tanah air. Biji kopi ini berkembang pesat di ketinggian ideal antara 1.000 hingga 1.200 meter di atas permukaan laut.
          Semakin tinggi lokasi penanaman, semakin istimewa pula rasa yang dihasilkan dari biji kopi ini. Namun, di balik keunggulannya, kopi Arabika menyimpan kekeramahan. Biji kopi ini mudah terserang penyakit karat daun yang disebabkan
          oleh jamur Hemileia vastatrix; terutama pada ketinggian di bawah 600 hingga 700 meter di atas permukaan laut. Penyakit ini dapat berakibat fatal, menurunkan hasil panen dan kualitas biji kopi.
        </p>
        <p className="mt-2 font-semibold text-justify">
          Sistem pakar adalah suatu sistem yang berupaya mentransfer pengertian manusia ke komputer sehingga komputer tersebut dapat mencerminkan masalh dengan cara yang biasa dilakukan para pakar.
        </p>
        <button className="px-4 py-2 text-sm bg-black text-white rounded-md mt-4">Mulai</button>
      </Card>
      <div className="text-center my-4 ">
        <span>Copyright &copy; 2025 FeeL</span>
      </div>
    </div>
  );
};

export default Dashboard;
