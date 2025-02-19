document.getElementById('check-button').addEventListener('click', function() {
    const name = document.getElementById('name-input').value.trim();
    if (name) {
        const responses = [
            "Çiçek gibi adamsın ne kara listesi, hadi git işine gücüne bak kral",
            "Facebook dayıları gibi görünüyorsun ama olsun kara listede olmaktan iyidir.",
            "Hocam seni kim kara listeye alsın?",
            "Yarım saat'e kara listedesin, dikkat et!",
            "Senin gibisi zor bulunur, kara liste kim, sen kim!",
            "Bugün X'te kavga etme, lütfen.",
            "Yeni mi düştün buralara?",
            "Mükemmelsin! Kara liste mi? Güldürme beni.",
            "Setup'a bas sonra next next next.",
            "Backhand'cisin, kara liste seni tanımaz!",
            "Titre ve kendine gel..",
            "Kara liste mi? Senin için imkansız!",
            "Kara sevda kara sevda dedikleri daha ne olabilir ki?",
            "Yıldızlar da kayar..",
            "Kara liste mi? Senin için sadece bir efsane.",
            "Acun musun bilader ne bu kara kara t-shirtler?",
            "Kara Listedesin :(",
            "Karamanın koyunu sonra çıkar oyunu, arada listeyi kontrol et!",
            "Adın hiç güven vermedi ama neyse bu defa listede yoksun.",
            
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        document.getElementById('popup-message').innerText = `${name}\n${randomResponse}`;
        document.getElementById('popup').style.display = 'flex';
    } else {
        alert('Lütfen ad soyad bilgisi girin.');
    }
});

document.querySelector('.close-button').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

document.getElementById('share-button').addEventListener('click', function() {
    const message = document.getElementById('popup-message').innerText;
    const tweetText = `${message} %0A%0A@oguzbor aracılığıyla %0Ahttps://oguzbor.github.io/karaliste`;
    const url = `https://twitter.com/intent/tweet?text=${tweetText}`;
    window.open(url, '_blank');
});