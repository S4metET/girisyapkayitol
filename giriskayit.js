let kullanicilar = [
    {kullaniciAdi: "sameterenterzi", sifre: "123456"}
];

let islem = prompt("Bir işlem seç: `girisyap`,`kayitol`,`cikisyap`").toLocaleLowerCase();

if(islem === "girisyap"){
    let kullaniciAdi = prompt("Kullanıcı Adı Gir:");
    let sifre = prompt("Şifre Gir:");
    let kullanici = kullanicilar.find(u => u.kullaniciAdi === kullaniciAdi && u.sifre === sifre);

    if(kullanici){
        alert("Giriş Yapıldı. Hoşgeldin " + kullaniciAdi);
    }
    else{
        alert("Kullanıcı Adı yada Şifre Hatalı!!!");
    }
}
    else if(islem === "kayitol"){
    let yeniKullaniciAdi = prompt("Yeni Kullanıcı Adı Gir:");
        let cikisKullanici = kullanicilar.find(u => u.kullaniciAdi === yeniKullaniciAdi);

        if(cikisKullanici){
            alert("Kullanıcı adı sistemde kayıtlı.");
        }
        else{
            let yeniSifre = prompt("Şifre Gir:");
            kullanicilar.push({kullaniciAdi: yeniKullaniciAdi, sifre: yeniSifre});
            alert("Kayıt tamamlandı. Giriş Yapabilirsin.");
        }
    }
    else if(islem === "cikisyap"){
        alert("Çıkış Yapıldı.")
    }
    else{
        alert("Geçersiz işlem! Sadece girisyap, kayitol yada cikisyap seçeneklerini kullanabilirsin.");
    }