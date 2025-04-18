// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukkan tanggal (1-31): ', (inputTanggal) => {
    const tanggal = parseInt(inputTanggal);
    if (isNaN(tanggal) || tanggal < 1 || tanggal > 31) {
        console.log("Tanggal tidak valid. Harus antara 1 - 31.");
        rl.close();
        return;
    }

    rl.question('Masukkan bulan (1-12): ', (inputBulan) => {
        const bulan = parseInt(inputBulan);
        if (isNaN(bulan) || bulan < 1 || bulan > 12) {
            console.log("Bulan tidak valid. Harus antara 1 - 12.");
            rl.close();
            return;
        }

        rl.question('Masukkan tahun (1900-2200): ', (inputTahun) => {
            const tahun = parseInt(inputTahun);
            if (isNaN(tahun) || tahun < 1900 || tahun > 2200) {
                console.log("Tahun tidak valid. Harus antara 1900 - 2200.");
                rl.close();
                return;
            }

            let bulanNama;
            switch (bulan) {
                case 1: bulanNama = "Januari"; break;
                case 2: bulanNama = "Februari"; break;
                case 3: bulanNama = "Maret"; break;
                case 4: bulanNama = "April"; break;
                case 5: bulanNama = "Mei"; break;
                case 6: bulanNama = "Juni"; break;
                case 7: bulanNama = "Juli"; break;
                case 8: bulanNama = "Agustus"; break;
                case 9: bulanNama = "September"; break;
                case 10: bulanNama = "Oktober"; break;
                case 11: bulanNama = "November"; break;
                case 12: bulanNama = "Desember"; break;
            }

            console.log(`${tanggal} ${bulanNama} ${tahun}`);
            rl.close();
        });
    });
});

//code switch case kamu disini
