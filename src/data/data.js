export const users = [
    {
        name: "Yazar 1",
        img: "/img/lode-lagrainge-0QhpGWoaZF8-unsplash.jpg",
        userId: 12,
        userInfo: "gönül kodlama tasarım tarkovsky çikolata dert gar deva aman gittim açalım öpücük böceği yakarış tren çehov sümbül hangar şarkı web sözlük sümbül omuz çayır programlama hangar kırgınmış yük omuz kırgınmış bilinen çatır çutur hani açalım mor hicranlar vurulmuş cümle nasıl cellat vurulmuş web acılar gönül kamusal mizah kodlama yağmurla",
        posts:[341, 456, 209],
        contact: [{
            email: "yazar1@fakemail.com",
            phone: undefined,
            social: {
                twitter: "@yazar1",
                facebook: "Yazar 1",
                instagram: "@yazar1",
                github: "@yazar1"
            }
        }]
    },
    {
        name: "Yazar 2",
        img: "/img/1602748206293-min.jpg",
        userId: 13,
        userInfo: "nasıl cümle cellat istesen de senden temel yağmurla tümce gülüm uçurtma doğa ana yaren türkülerle oha nuri bilge ceylan haram öpücük böceği dert uçuyor mor hicranlar tren bile küçüksün kamusal mizah leylek gittim web kamusal mizah hangar cellat sümbül deva ziyan şarkı gönül yük yoksulluk yalnızlık konuşmadım türkülerle yağmurla virane senden rastgele güfte çatı seher yeli çayır şefim arkadaş yakarış adı nuri bilge ceylan kamusal mizah yavru ",
        posts:[249, 250, 251, 252],
        contact: [{
            email: "yazar2@fakemail.com",
            phone: undefined,
            social: {
                twitter: "@yazar2",
                facebook: undefined,
                instagram: "@yazar2",
                github: "@yazar2"
            }
        }]
    },
    {
        name: "Yazar 3",
        img: "/img/1602748402171-min.jpg",
        userId: 14,
        userInfo: "tarkovsky cümle şarkı çatı haram çikolata web mor hicranlar acılar nasıl hayran dosyamızı uçurtma kodlama seher yeli deva uçurtma zarf karlı hane karlı doğa ana küçüksün bilinen tarkovsky oha ambar konuşmadım kelime temel neler istesen de şarkı meslek açalım",
        posts:[841, 842],
        contact: [{
            email: "yazar2@fakemail.com",
            phone: undefined,
            social: {
                twitter: "@yazar3",
                facebook: undefined,
                instagram: "@yazar3",
                github: "@yazar3"
            }
        }]
    },
    {
        name: "Yazar 4",
        img: "/img/1602748090659-min.jpg",
        userId: 15,
        userInfo: "dosyamızı senden web çatı doğa dayı arkadaş haram kodlama virane bilinen adı doğa dayı şarkı uçurum çehov çanak tren acılar hayran tümce çatır çutur mektup uçuyor uçurum uçurum kodlama zarf kelime web aman acılar kırgınmış virane cellat doğa ana programlama amacıyla uçurtma açalım yavru çikolata devinim çatır çutur güfte omuz kodlama arkadaş tarkovsky yavru çömlek doğa ana bile yakarış oha haram yakarış web sözlük çikolata tasarım gar küçüksün arkadaş yaren web seher yeli uçurtma para küçüksün haram hani temel dert çeşme tasarım ",
        posts:[765, 766],
        contact: [{
            email: "yazar2@fakemail.com",
            phone: undefined,
            social: {
                twitter: "@yazar4",
                facebook: undefined,
                instagram: "@yazar4",
                github: "@yazar4"
            }
        }]
    },
];

function Post(title, tags, postId, img, userId, body) {
    this.title = title;
    this.tags = tags;
    this.postId = postId;
    this.img = img;
    this.userId = userId;
    this.body = body;
}

Post.prototype.getReadingTime = function() {
    let wholeText = "";
    for(let el of this.body) {
        if(el[0] === "p"){
            wholeText += el[1]
        }
    }
    return Math.ceil(wholeText.split(" ").length / 225) + 2;
};

Post.prototype.getIntro = function() {
    let post = [];
    for(let el of this.body){
        if(el[0] === "p") {
            post = el[0];
            return;
        } continue;
    }
    return post[1].substr(0, 100)
};

export const posts = [
    new Post("Sass - Genel Bakış",
            ["css", "frontend", "arayüz", "sass", "tasarım", "css3", "stil"],
            252,
            "./img/css3.svg",
            13,
            [
                ["h2", "Sass Nedir?"],
                ["p","Kendi sitesinden alıntı yaparsak; Sass, CSS'e dönüştürülen bir stil şeması dilidir. Değişkenlerin, fonksiyonların ve stil yazımını kolaylaştıran daha birçok parçanın kullanımına olanak sağlar. Büyük çaplı internet sitelerinin stil şemalarının tertip ve takibini kolaylaştırır."],
                ["h2", "Yükleme ve Başlangıç"],
            ["p", "Stil kodlarınızın yazımı sırasında Sass kullanmak için başvurabileceğiniz birkaç tane farklı yol olmasına rağmen(çevrimiçi dönüştürücüler, editör eklentileri gibi) ben, Node.js'in paket yöneticisi olan npm vasıtasıyla Sass'i bilgisayarınıza indirmenizi öneririm. Eğer daha önce Node.js'i bilgisayarınıza kurmamışsanız resmi sitesine uğrayarak indirebilirsiniz, tamamen ücretsizdir. Paket yöneticisi için ekstra hiçbir şey yapmanıza gerek yok, Node.js'i indirip kurduğunuz vakit npm de kullanıma hazır hale gelecektir."],
            ["p", "Gerekli kurulumları yaptıysanız sizden fare imlecinizi şimdi masaüstü ekranında boş bir yere getirmenizi ve klavyede Shift tuşuna parmağınızı basılı tutarken aynı anda farenizin ikincil tuşuna(genellikle sağ tuş) tıklamanızı istiyorum. Fare imlecinin hemen yanında ortaya çıkan seçenek listesinde 'Komut penceresini burada aç' seçeneğini bulun ve tıklayın, karşınıza çıkan konsol ekranına aşağıdaki kodları yazın ve Enter'a basın."],
            ["code","mkdir sass-test && cd sass-test"],
            ["p","Yukarıdaki komutlar, sırasıyla, bizim 'sass-test' adını taşıyan bir klasör oluşturmamızı, daha sonra bu klasörün içine girmemizi sağlıyorlar. sass-test ismi benim keyfi olarak oluşturduğum bir isim, siz istediğinizi yazabilirsiniz. Şimdi sıra bilgisayarımıza Sass'i indirmenin vakti; komut penceresine şu komutu girin ve Enter'a basın."],
            ["code","npm install -g sass"],
            ["p","npm, bildiğiniz gibi, paket yöneticisinin adı. Hemen ardından gelen 'install' komutu ise adını vereceğimiz paketin bilgisayarımıza indirilip kurulması gerektiğini belirtiyor. -g opsiyonu ile paketin bilgisayara global olarak, yani bilgisayarın her yerinden ulaşılabilecek şekilde yüklenmesini sağlıyoruz."],
            ["p","Yüklenme tamamlandığında Sass'e ilk adımımızı atmaya başlayabiliriz. Kod editörünüzü sass-test klasörü içinde açın ve 'testing.scss' adlı bir dosya oluşturun."],
            ["h2","Değişkenler"],
            ["p","Programlama dillerine aşinalığınız mevcut ise, değişkenler kavramına yabancılık çekmeyeceksinizdir. Değişkenler, en temel tanımıyla, değer taşıyıcılardır. Bir değeri bir değişkene atarsınız ve o değere ulaşmak istediğinizde değişkenleri kullanırsınız. Sass'te değişkenleri tanımlarken '$' işaretini değişken ismimizin başına getiriyoruz. Şimdi testing.scss dosyamızın içine şu kodları yazın:"],
            ["code", `$g-white: ghostwhite;
            
aside {
    background: $g-white;
}`],
            ["p","Burada ghostwhite rengini $g-white değişkenine atıyoruz. Böyle tek seferlik kullanımlar, size abesle iştigal ettiğimizi düşündürebilir, fakat, projenin bir noktasında bu rengi değiştirmek zorunda kaldığımız durumu zihninizde canlandırırsanız, değişkenlerin neden yararlı olduklarını anlayabilirsiniz. Kodumuzun içinde bu renk değerini arayarak teker teker değiştirmek yerine bir noktaya değişiklik uygulamamız yeterli olacak ve bu da bizim işimizi epeyce kolaylaştıracaktır."],
            ["p", "Şimdi komut penceresini bu klasörün içinde açın ve aşağıdaki komutu girerek Enter'a basın."],
            ["code",`sass testing.scss style.css`],
            ["p","Komut sonuçlandığında testing.scss dosyası ile aynı klasör içinde style.css adlı bir dosya kendiliğinden oluşturulmuş olmalı. O dosyayı açtığınızda aside elementine uygulanan background niteliğinin değerini ghostwhite olarak göreceksiniz, yani normal bir CSS kodu ile karşılaşacaksınız."],
            ["p", "Böylece ilk Sass kodunuzu yazıp CSS'e çevirmiş oldunuz. Tabii sürekli komut penceresine gidip dönüşüm için gerekli kodu yazmak bir noktadan sonra yorucu ve can sıkıcı olmaya başlayabilir. Bunun üstesinden gelmek için komutumuza ekstra bir opsiyon ekleyebiliriz:"],
            ["code","sass --watch testing.scss style.css"],
            ["p", "Bu komutu komut penceresine yazıp tıkladığınızda, Sass 'watch' modunda çalışmaya başlayacak, yani testing.scss dosyanızı her kaydedişinizde style.css dosyasını kendiliğinden güncelleyecek."],
            ["p", "Değişkenler konu başlğının bir miktar dışına çıkıyor olsak da büyük olasılıkla işinize yarayabilecek olan birkaç komut örneği göstermek istiyorum. Mesela '.scss' uzantılı dosyalarınızı bir klasörde(sass-folder adlı klasör), CSS dosyalarınızı başka bir klasörde tutmak istiyorsunuz(styles adlı klasör):"],
            ["code","sass --watch sass-folder\\main.scss styles\\style.css"],
            ["p","Bu kodla söylediğimiz şey şu: sass-folder dosyasının içindeki main.scss dosyasını takibe al ve her değişiklikte styles dosyasının içindeki style.scss dosyasını güncelle."],
            ["p","Zaman zaman birden fazla Sass dosyasını birden fazla CSS dosyasına yazdırmak isteyebilirsiniz. Aşağıdaki kod 'light.scss' adlı dosyayı 'light.css' dosyasına; 'dark.scss' adlı dosyayı 'dark.css' dosyasına dönüştürüyor"],
            ["code","sass --watch light.scss:light.css dark.scss:dark.css"],
            ["p","Bir klasörün(sass-folder) içindeki tüm Sass dosyalarını, aynı adlarını taşıyarak, bir CSS klasörüne(css) aktarmak:"],
            ["code","sass --watch sass-folder:css"],
            ["h2","Kontrol Yapıları"],
            ["p","Yine programlama dillerine aşina olanların yabancılık çekmeyeceği kontrol yapıları Sass yardımıyla stil şemalarımıza geliyor. Bir kontrol yapısı, temel olarak, bir ifadenin uygulanıp uygulanmayacağına karar veren yapıdır."],
            ["h3","@if"],
            ["p","İlk kontrol yapımız @if. İfadelerin döndürdüğü Boolean değere(true veya false) endeksli olarak, seçili stil kurallarının uygulanıp uygulanmayacağına karar verir. Bu kontrol yapısıyla birlikte görebileceğimiz, eklenti niteliğindeki, bir diğer yapı ise @else yapısıdır. Akış @if kuralının kapsadığı ifadeye girmezse, @else bloğunun barındırdığı ifadeyi uygular."],
            ["code",`$dark-mode: true;
            
@if $dark-mode {
    background-color: black;
    color: white;
} @else {
    background-color: white;
    color: black;
}`],
            ["p", "Sadece iki muhtemel sonucun olmadığı akışlarda @else if kuralı yardımımıza koşuyor:"],
            ["code", `$size: big;
            
@if $size == small {
    font-size: 0.855rem;
} @else if $size == medium {
    font-size: 1.3rem;
} @else if $size == big {
    font-size: 2rem;
} @else {
    font-size: 1.5rem;
}`],
            ["p", "İlk @if kuralımızla akışımız başlayacak, buraya ve @else if bloklarından hiçbirine girilmezse, @else bloğuna girilecek."],
            ["h3", "@each"],
            ["p","@each kullanımını daha rahat anlamak için birbirine benzeyen birden fazla stil kuralı yazmanız gereken bir durumu gözünüzün önüne getirin. Bu stil kuralları birbirlerinden küçük farklılıklarla ayrışıyor olsunlar. Kopyala/Yapıştır/Değiştir tekniğini uygulamayı düşünüyor olabilirsiniz. İşte @each bunu sizin yerinize yapıyor ve sizi bir yükten kurtarıyor. Aşağıdaki kodları editörünüzde deneyin ve CSS sonuçlarını izleyerek ne olduğunu anlamaya çalışın."],
            ["code",`$line-heights:(
"small": 1.2,
"madium": 1.4,
"big": 1.6,
);

@each $name, $value in $line-heights {
    .l-height-#{$name} {
        line-height: $value;
    }
}`],
                ["p","Bu Sass kodlarının dönüştüğü CSS kodu da aşağıda:"],
                ["code", `.l-height-small {
    line-height: 1.2;
}

.l-height-medium {
    line-height: 1.4;
}

.l-height-big {
    line-height: 1.6;
}`],
["h3","@for"],
["p","Birden fazla birbirine benzeyen stil kuralı yazmamız gerekirse ve bu kurallar arasındaki farklılık düzenli şekilde artan sayılardan oluşuyorsa, en mantıklı seçenek @for bloğu kullanmaktır."],
["code", `@for $i from 1 to 5 {
    .m-#{$i} {
        margin: #{$i}em;
    }
}`],
            ["p","Yukarıda yazdığımız Sass kodunun CSS'e dönüştürülmüş hali:"],
            ["code",`.m-1 {
    margin: 1em;
}

.m-2 {
    margin: 2em;
}

.m-3 {
    margin: 3em;
}

.m-4 {
    margin: 4em;
}`],
["p","Burada kullandığımız 'to' kelimesine dikkat edin. Sıralamamızın bir rakamından başlayıp dörtte sonlanmasının sebebi kendisi, oysa ki biz son rakam olarak beşi seçmiştik. Beşten önce durmayı değil de beşe kadar varmayı tercih edersek, 'through' kelimesini kullanmalıyız."],
["h3", "@while"],
["p","@while bloğu, @while ifadesi 'false' döndürene dek uygulanmaya devam eder. Birkaç tane özel durum haricinde @for ve @each ile aynı işlevi görür, performans açısından @for ve @each yapılarının kullanımı tercih edilmelidir."],
["h2","Yararlı Diğer Yapılar"],
            ["p", "Her ne kadar akış kontrol yapıları, stil kuralları yazma işimizi kolaylaştırsa da, daha karmaşık kuralları yazmamızı olanaklı hale getiren yapılara da değinmemizde fayda var."],
            ["h3","@mixin"],
            ["p","Elimizde belli bir stil şablonu olduğunu varsayalım ve biz bu şablonu, stil dosyamızın birden fazla noktasında kullanmak istiyoruz; @mixin bu durum için en uygun araçlardan bir tanesi. Üstelik, @mixin, aldığı argümanlara endeksli olarak farklı çıktılar yaratma yetisine sahip. Bu argümanlar, kullanım sırasında belirlenebileceği gibi, öntanımlı olarak da oluşturulabilir."],
            ["p", "@mixin ile oluşturduğumuz şablonları stil kurallarımız içine yerleştirmek istediğimizde @include komutundan faydalanmak zorundayız. Daha önce değindiğimiz yapıları da kullanarak yaratacağımız bir örnekle her şeyi daha kolay anlayabiliriz:"],
            ["code",`@mixin prefixIt($prop, $value, $vendors: ms webkit) {
    @each $vendor in $vendors {
        -#{$vendor}-#{$prop}: $value;
    }
    #{$prop}: $value;
}

div {
    @include prefixIt(transform, transitionX(100px), ms moz webkit);
}`],
            ["p", "Bu Sass kodlarının CSS'e dönüştürülmüş hali:"],
            ["code",`div {
    -ms-transform: transitionX(100px);
    -moz-transform: transitionX(100px);
    -webkit-transform: transitionX(100px);
    transform: transitionX(100px);
}`],
            ["p","Zaman zaman @mixin ifademize birden fazla argüman vermek isteyebiliriz. Bunu '...' ile yapabiliyoruz."],
            ["code",`@mixin order($height, $selectors...) {
    @for $i from 0 to length($selectors) {
        @if $i == 0 {
            #{nth($selectors, $i + 1)} {
                position: absolute;
                height: $height;
                margin-top: 0;
            }
        } @else {
            #{nth($selectors, $i + 1)} {
                position: absolute;
                height: $height;
                margin-top: $i * $height;
            }
        }
    }
}

@include order(140px, ".box-1", ".box-2",);`],
            ["p","CSS versiyonu:"],
            ["code",`.box-1 {
    position: absolute;
    height: 140px;
    margin-top: 0;
}

.box-2 {
    position: absolute;
    height: 140px;
    margin-top: 140px;
}`],
            ["h3","@extend"],
            ["p","@mixin kullanımına benzer bir kullanımı olan ve sıklıkla kafa karıştıran @extend yapısı, bir stil kuralının içindeyken bir başka stil kuralını kopyalamamızı olanaklı kılıyor."],
            ["code", `%btn{
    padding: .5em 1em;
    border: none;
}

.btn-danger {
    @extend %btn;
    background-color: crimson;
    color: ghostwhite;
}

.btn-info {
    @extend %btn;
    background-color: deepskyblue;
    color: #000;
}`],
            ["p", "CSS'e dönüştürülmüs hali:"],
            ["code",`.btn-info, .btn-danger {
    padding: 0.5em 1em;
    border: none;
}

.btn-danger {
    background-color: crimson;
    color: ghostwhite;
}

.btn-info {
    background-color: deepskyblue;
    color: #000;
}`],
            ["p", "'%' işareti, yazdığımız stil kuralının yalnızca şablon olma amacıyla orada bulunduğunu belirtiyor. Dikkat ederseniz CSS kodlarımız arasında o kod bloğu bulunmuyor."],
            ["h2", "Functions"],
            ["p","Stil şablonlarını belirli yerlerde kullanmak ve argümanlara bağımlı olarak farklı farklı çıktılar elde etmekten daha karmaşık işlemler gerçekleştirmek istediğimizde fonksiyonları kullanıyoruz. 'mixin'lerle ne farkı var diye soruyor olabilirsiniz: Çoğunlukla ikisi birbiririnin yerine kullanılabilir, ancak tavsiye edilen kullanım şekli; fonksiyonların değer hesaplamalarında, 'mixin'lerin de stil şablonu yerleştirme amacıyla kullanılmasıdır."],
            ["p","Fonksiyonlar '@function' kelimesi başa getirilerek tanımlanıyorlar. Daha önce değindiğimiz konuların bazılarını da kullandığımız bir örnek:"],
            ["code",`$bodyBg: #343434;
$divBg: #cdcdcd;

@function contrastColor($bgcolor) {
    @if(lightness($bgcolor) < 45%) {
    @return ghostwhite;
    }
    @return #222;
}

body{
    background: $bodyBg;
    color: contrastColor($bodyBg);
}

div{
    background: $divBg;
    color: contrastColor($divBg);
}`],
            ["p","Önce iki değişken oluşturduk, daha sonra koşul bloğumuzu kullanarak bize verilecek olan arka plan rengine göre metin rengimizi döndürdük. CSS'e dönüştürülmüş hâli:"],
            ["code", `body {
    background: #343434;
    color: ghostwhite;
}

div {
    background: #cdcdcd;
    color: #222;
}`],
            ["p","Yer yer fonksiyonlarımıza belli olmayan bir sayıda argüman vermemiz gerekebilir. Bu gibi durumlarda '...' kullandığımızı söylemiştik. Böylece fonksiyonumuza bir argüman listesi vermiş oluyoruz."],
            ["code",`@function sum($nums...) {
    $sum: 0;
    @each $num in $nums {
        $sum: $sum + $num;
    }
    @return $sum;
}

.box {
    width: sum(100px, 40px, 20px);
}`],
            ["p", "CSS'e dönüştürülmüş hâli:"],
            ["code", `.box {
    width: 160px;
}`]
        ]
        ),
    //     {
        //         title: "Html5 ve Css3 - Giriş",
        //         tags: ["html", "html5", "css3","css", "web tasarım", "web kodlama", "mark-up"],
        //         postId: 209,
//         img: "./img/html5.svg",
//         userId: 12,
//         body: "vurulmuş gar devinim cellat cümle kodlama haram karlı küçüksün acılar yoksulluk gönül yalnızlık ambar yaren mektup web koklamadım beni ziyan dosyamızı para tarkovsky tasarım dert cümle senden şefim amacıyla çehov ambar adı oha yük mor hicranlar hani zarf haram yoksulluk güfte neler hani gülüm ölemezsin çayır hangar şefim senden virane doğa ana giyemezsin nasıl kelime çatı rastgele tarkovsky nuri bilge ceylan çatı açalım tarkovsky kamusal mizah gülüm çayır adı web arkadaş yavru koklamadım rindane nuri bilge ceylan deva çehov ambar virane yakarış koklamadım devinim web leylek mektup ambar çatır çutur amacıyla tümce uçurtma kırgınmış senden temel yavru bile cümle kefen virane yaren hane cellat gülüm hane çikolata giyemezsin temel ambar uçuyor sözcük doğa ana senden çanak hane sümbül hangar dert kelime vurulmuş acılar arkadaş kelime rastgele çehov dert sözcük giyemezsin mektup acılar çikolata arkadaş ziyan omuz ölemezsin çatı leylek hangar türkülerle dert hayran ölemezsin bile cellat çanak sözlük çatır çutur senden temel cellat amacıyla yağmurla sözlük çeşme web tarkovsky haram istesen de yaren gittim yaren programlama rastgele programlama şarkı çömlek doğa dayı yavru hayran istesen de hayran kelime rastgele yavru devinim sümbül rindane oha dert web çikolata yalnızlık leylek nuri bilge ceylan bile para seher yeli mektup gülüm sümbül yavru şarkı zarf kırgınmış kırgınmış uçurum temel arkadaş ölemezsin yakarış ölemezsin rastgele deva ambar ambar cümle temel çikolata web nasıl rastgele şefim hayran senden karlı koklamadım doğa ana aman uçurum uçurtma açalım yük uçurum cümle uçurum aman dosyamızı yavru neler tümce bilinen gülüm hani mektup gar aman hangar uçuyor türkülerle gönül istesen de aman yalnızlık tarkovsky çeşme koklamadım gittim gülüm para güfte cellat leylek giyemezsin çatı mektup hani sözcük çanak tasarım şarkı dert çeşme virane ziyan karlı ölemezsin dosyamızı haram haram istesen de ziyan kamusal mizah rastgele acılar web rindane yaren kefen yaren tren küçüksün bilinen temel senden gülüm yağmurla cellat şefim çömlek konuşmadım vurulmuş cellat ziyan uçuyor doğa dayı devinim yalnızlık türkülerle hane doğa ana küçüksün yük konuşmadım güfte öpücük böceği şefim devinim güfte gönül bilinen acılar şefim hayran tasarım devinim hani uçuyor oha mektup açalım ölemezsin beni hani bilinen doğa ana öpücük böceği sümbül uçurtma rastgele bilinen dert açalım güfte nasıl koklamadım deva hangar uçurum yavru çanak doğa dayı istesen de çeşme adı tarkovsky mektup çeşme karlı ziyan istesen de yalnızlık sözcük gittim tarkovsky nasıl şefim kefen yavru küçüksün kefen kelime programlama yağmurla yağmurla uçurtma dert doğa dayı kefen senden açalım hayran küçüksün çikolata gönül yakarış şarkı nasıl tümce temel dert uçurtma çikolata dosyamızı leylek uçurtma omuz çanak karlı konuşmadım meslek kelime haram programlama senden doğa dayı web zarf dert çanak yaren güfte hane çatır çutur bilinen aman konuşmadım çömlek dert gülüm dosyamızı beni adı yavru yük doğa dayı açalım kefen gittim sözlük yakarış tümce bilinen acılar çehov sözlük sözcük türkülerle şarkı çanak gar şefim çayır para mektup programlama uçuyor çehov beni doğa dayı dert tasarım beni oha çatır çutur gar aman yaren oha deva doğa baba bilinen yalnızlık virane koklamadım virane temel güfte kamusal mizah şarkı nasıl koklamadım ziyan istesen de bile gönül hangar yoksulluk çanak doğa baba gönül mektup programlama uçurtma koklamadım arkadaş arkadaş sümbül küçüksün para yakarış çatı hangar karlı şefim omuz yalnızlık dert web deva nuri bilge ceylan sözlük çeşme uçurum yağmurla cellat kodlama tasarım para kırgınmış dert nasıl meslek şarkı vurulmuş doğa baba cümle para kefen gittim yük kelime çayır nasıl programlama çehov kamusal mizah kefen çömlek yakarış çatır çutur sözcük seher yeli çehov amacıyla mektup şefim doğa dayı haram sözlük karlı çehov yoksulluk kamusal mizah çeşme tümce aman hayran gar koklamadım doğa dayı tarkovsky gönül adı çikolata rastgele hayran şarkı çömlek tasarım rastgele dosyamızı türkülerle nuri bilge ceylan güfte tarkovsky çanak yakarış sözlük hani yük istesen de yalnızlık sözcük türkülerle koklamadım türkülerle çeşme vurulmuş cümle yavru istesen de güfte hani zarf hayran çikolata aman gar kamusal mizah doğa ana rindane web leylek para tümce yalnızlık neler temel yağmurla istesen de aman gülüm bilinen ambar tümce omuz yoksulluk şarkı çatır çutur gar uçurum tarkovsky doğa dayı vurulmuş temel seher yeli istesen de haram seher yeli bilinen kefen şefim çömlek para şefim doğa dayı doğa dayı konuşmadım türkülerle kodlama web yük meslek temel tasarım istesen de çatır çutur para koklamadım bile öpücük böceği rastgele virane cellat hane leylek hani senden zarf dosyamızı kamusal mizah neler yavru hane cellat dosyamızı web çanak gülüm uçuyor uçurtma açalım kamusal mizah oha yakarış ölemezsin oha programlama omuz temel cümle ölemezsin kırgınmış nasıl gar beni yavru çeşme hayran virane çehov çatı çatı bilinen öpücük böceği kefen dosyamızı deva ziyan sözcük omuz sözlük hayran hane yalnızlık türkülerle yağmurla gülüm mektup hane açalım çömlek cellat devinim kelime mor hicranlar hane gülüm gittim yük hayran web senden temel oha çatır çutur çanak çömlek yük aman kamusal mizah virane gülüm rindane açalım sümbül gittim para ölemezsin güfte öpücük böceği arkadaş güfte amacıyla kodlama oha nasıl gar mor hicranlar hangar koklamadım hangar bile şarkı şefim çehov çehov giyemezsin uçurum tümce mor hicranlar gittim kırgınmış uçurtma tren açalım programlama türkülerle ambar para yük ziyan ölemezsin konuşmadım adı hane ölemezsin çayır nuri bilge ceylan hayran tren türkülerle tarkovsky amacıyla sümbül ölemezsin karlı sözcük kelime öpücük böceği yavru doğa ana sözcük ölemezsin hane yağmurla çayır gönül çeşme seher yeli açalım koklamadım çanak beni dosyamızı çikolata kelime amacıyla giyemezsin kefen çömlek seher yeli cellat bile gönül tasarım çehov koklamadım öpücük böceği beni dert yavru dert çehov web yalnızlık tarkovsky kırgınmış haram öpücük böceği mor hicranlar vurulmuş adı adı leylek küçüksün cellat para açalım kelime hani amacıyla tarkovsky küçüksün kamusal mizah koklamadım para cümle deva seher yeli koklamadım oha açalım doğa dayı yük gönül senden çanak çanak giyemezsin leylek karlı konuşmadım yağmurla yağmurla gar vurulmuş gittim ölemezsin cellat para giyemezsin çatır çutur haram tren leylek çayır tren doğa baba tarkovsky yakarış uçurtma neler dosyamızı doğa dayı para senden dosyamızı cümle omuz hayran çatı çatı konuşmadım çehov aman koklamadım beni yoksulluk cümle giyemezsin koklamadım. vurulmuş gar devinim cellat cümle kodlama haram karlı küçüksün acılar yoksulluk gönül yalnızlık ambar yaren mektup web koklamadım beni ziyan dosyamızı para tarkovsky tasarım dert cümle senden şefim amacıyla çehov ambar adı oha yük mor hicranlar hani zarf haram yoksulluk güfte neler hani gülüm ölemezsin çayır hangar şefim senden virane doğa ana giyemezsin nasıl kelime çatı rastgele tarkovsky nuri bilge ceylan çatı açalım tarkovsky kamusal mizah gülüm çayır adı web arkadaş yavru koklamadım rindane nuri bilge ceylan deva çehov ambar virane yakarış koklamadım devinim web leylek mektup ambar çatır çutur amacıyla tümce uçurtma kırgınmış senden temel yavru bile cümle kefen virane yaren hane cellat gülüm hane çikolata giyemezsin temel ambar uçuyor sözcük doğa ana senden çanak hane sümbül hangar dert kelime vurulmuş acılar arkadaş kelime rastgele çehov dert sözcük giyemezsin mektup acılar çikolata arkadaş ziyan omuz ölemezsin çatı leylek hangar türkülerle dert hayran ölemezsin bile cellat çanak sözlük çatır çutur senden temel cellat amacıyla yağmurla sözlük çeşme web tarkovsky haram istesen de yaren gittim yaren programlama rastgele programlama şarkı çömlek doğa dayı yavru hayran istesen de hayran kelime rastgele yavru devinim sümbül rindane oha dert web çikolata yalnızlık leylek nuri bilge ceylan bile para seher yeli mektup gülüm sümbül yavru şarkı zarf kırgınmış kırgınmış uçurum temel arkadaş ölemezsin yakarış ölemezsin rastgele deva ambar ambar cümle temel çikolata web nasıl rastgele şefim hayran senden karlı koklamadım doğa ana aman uçurum uçurtma açalım yük uçurum cümle uçurum aman dosyamızı yavru neler tümce bilinen gülüm hani mektup gar aman hangar uçuyor türkülerle gönül istesen de aman yalnızlık tarkovsky çeşme koklamadım gittim gülüm para güfte cellat leylek giyemezsin çatı mektup hani sözcük çanak tasarım şarkı dert çeşme virane ziyan karlı ölemezsin dosyamızı haram haram istesen de ziyan kamusal mizah rastgele acılar web rindane yaren kefen yaren tren küçüksün bilinen temel senden gülüm yağmurla cellat şefim çömlek konuşmadım vurulmuş cellat ziyan uçuyor doğa dayı devinim yalnızlık türkülerle hane doğa ana küçüksün yük konuşmadım güfte öpücük böceği şefim devinim güfte gönül bilinen acılar şefim hayran tasarım devinim hani uçuyor oha mektup açalım ölemezsin beni hani bilinen doğa ana öpücük böceği sümbül uçurtma rastgele bilinen dert açalım güfte nasıl koklamadım deva hangar uçurum yavru çanak doğa dayı istesen de çeşme adı tarkovsky mektup çeşme karlı ziyan istesen de yalnızlık sözcük gittim tarkovsky nasıl şefim kefen yavru küçüksün kefen kelime programlama yağmurla yağmurla uçurtma dert doğa dayı kefen senden açalım hayran küçüksün çikolata gönül yakarış şarkı nasıl tümce temel dert uçurtma çikolata dosyamızı leylek uçurtma omuz çanak karlı konuşmadım meslek kelime haram programlama senden doğa dayı web zarf dert çanak yaren güfte hane çatır çutur bilinen aman konuşmadım çömlek dert gülüm dosyamızı beni adı yavru yük doğa dayı açalım kefen gittim sözlük yakarış tümce bilinen acılar çehov sözlük sözcük türkülerle şarkı çanak gar şefim çayır para mektup programlama uçuyor çehov beni doğa dayı dert tasarım beni oha çatır çutur gar aman yaren oha deva doğa baba bilinen yalnızlık virane koklamadım virane temel güfte kamusal mizah şarkı nasıl koklamadım ziyan istesen de bile gönül hangar yoksulluk çanak doğa baba gönül mektup programlama uçurtma koklamadım arkadaş arkadaş sümbül küçüksün para yakarış çatı hangar karlı şefim omuz yalnızlık dert web deva nuri bilge ceylan sözlük çeşme uçurum yağmurla cellat kodlama tasarım para kırgınmış dert nasıl meslek şarkı vurulmuş doğa baba cümle para kefen gittim yük kelime çayır nasıl programlama çehov kamusal mizah kefen çömlek yakarış çatır çutur sözcük seher yeli çehov amacıyla mektup şefim doğa dayı haram sözlük karlı çehov yoksulluk kamusal mizah çeşme tümce aman hayran gar koklamadım doğa dayı tarkovsky gönül adı çikolata rastgele hayran şarkı çömlek tasarım rastgele dosyamızı türkülerle nuri bilge ceylan güfte tarkovsky çanak yakarış sözlük hani yük istesen de yalnızlık sözcük türkülerle koklamadım türkülerle çeşme vurulmuş cümle yavru istesen de güfte hani zarf hayran çikolata aman gar kamusal mizah doğa ana rindane web leylek para tümce yalnızlık neler temel yağmurla istesen de aman gülüm bilinen ambar tümce omuz yoksulluk şarkı çatır çutur gar uçurum tarkovsky doğa dayı vurulmuş temel seher yeli istesen de haram seher yeli bilinen kefen şefim çömlek para şefim doğa dayı doğa dayı konuşmadım türkülerle kodlama web yük meslek temel tasarım istesen de çatır çutur para koklamadım bile öpücük böceği rastgele virane cellat hane leylek hani senden zarf dosyamızı kamusal mizah neler yavru hane cellat dosyamızı web çanak gülüm uçuyor uçurtma açalım kamusal mizah oha yakarış ölemezsin oha programlama omuz temel cümle ölemezsin kırgınmış nasıl gar beni yavru çeşme hayran virane çehov çatı çatı bilinen öpücük böceği kefen dosyamızı deva ziyan sözcük omuz sözlük hayran hane yalnızlık türkülerle yağmurla gülüm mektup hane açalım çömlek cellat devinim kelime mor hicranlar hane gülüm gittim yük hayran web senden temel oha çatır çutur çanak çömlek yük aman kamusal mizah virane gülüm rindane açalım sümbül gittim para ölemezsin güfte öpücük böceği arkadaş güfte amacıyla kodlama oha nasıl gar mor hicranlar hangar koklamadım hangar bile şarkı şefim çehov çehov giyemezsin uçurum tümce mor hicranlar gittim kırgınmış uçurtma tren açalım programlama türkülerle ambar para yük ziyan ölemezsin konuşmadım adı hane ölemezsin çayır nuri bilge ceylan hayran tren türkülerle tarkovsky amacıyla sümbül ölemezsin karlı sözcük kelime öpücük böceği yavru doğa ana sözcük ölemezsin hane yağmurla çayır gönül çeşme seher yeli açalım koklamadım çanak beni dosyamızı çikolata kelime amacıyla giyemezsin kefen çömlek seher yeli cellat bile gönül tasarım çehov koklamadım öpücük böceği beni dert yavru dert çehov web yalnızlık tarkovsky kırgınmış haram öpücük böceği mor hicranlar vurulmuş adı adı leylek küçüksün cellat para açalım kelime hani amacıyla tarkovsky küçüksün kamusal mizah koklamadım para cümle deva seher yeli koklamadım oha açalım doğa dayı yük gönül senden çanak çanak giyemezsin leylek karlı konuşmadım yağmurla yağmurla gar vurulmuş gittim ölemezsin cellat para giyemezsin çatır çutur haram tren leylek çayır tren doğa baba tarkovsky yakarış uçurtma neler dosyamızı doğa dayı para senden dosyamızı cümle omuz hayran çatı çatı konuşmadım çehov aman koklamadım beni yoksulluk cümle giyemezsin koklamadım"
//     },
//     {
//         title: "JavaScript - Giriş",
//         tags: ["javascript", "script", "dinamik web", "frontend", "web kodlama", "programlama"],
//         postId: 249,
//         img: "./img/js.svg",
//         userId: 13,
//         body:"deva tren çeşme yaren hangar ambar gülüm tasarım çeşme koklamadım karlı kelime sözlük yük uçurtma gittim kamusal mizah uçurtma devinim mektup adı hane küçüksün şarkı zarf devinim karlı nuri bilge ceylan çanak arkadaş koklamadım bilinen web çatı doğa dayı mor hicranlar doğa ana para hangar programlama hayran çanak yaren programlama zarf hane bile mektup deva bile çayır web aman türkülerle yoksulluk sözlük yağmurla uçurtma türkülerle küçüksün rindane çikolata beni omuz mektup sözlük yalnızlık türkülerle hangar rindane dosyamızı tarkovsky temel ziyan çikolata leylek seher yeli karlı mektup çikolata tren doğa baba çehov hangar çayır yakarış küçüksün sözcük dosyamızı küçüksün arkadaş deva yoksulluk gülüm doğa dayı ambar konuşmadım gülüm tasarım vurulmuş dert tren yaren virane konuşmadım adı nuri bilge ceylan seher yeli haram amacıyla neler şarkı mor hicranlar koklamadım tren çehov kodlama yaren nasıl giyemezsin omuz cellat öpücük böceği hayran nasıl gittim sözlük programlama tasarım giyemezsin temel omuz mor hicranlar çatır çutur meslek kelime açalım dosyamızı arkadaş haram ölemezsin oha yaren aman zarf ambar arkadaş kodlama sümbül aman arkadaş sümbül çayır web beni leylek cellat gönül ölemezsin cümle doğa baba ölemezsin mor hicranlar cümle beni temel yalnızlık adı neler uçurtma tümce adı virane yük gar tümce çatır çutur güfte küçüksün koklamadım haram çatı virane açalım istesen de deva dert ölemezsin meslek meslek sözcük dert yük hayran ölemezsin tasarım mektup doğa dayı bile uçurum rindane kodlama çehov uçuyor hangar tümce senden yavru çeşme rastgele zarf ziyan şefim deva tren çanak şefim tarkovsky yalnızlık neler haram konuşmadım senden aman mor hicranlar cellat uçurtma çömlek çömlek yaren giyemezsin ambar kefen mektup oha güfte çehov meslek yoksulluk çatı hani senden gittim deva açalım çömlek sözcük yaren doğa ana uçurum dosyamızı uçuyor mektup çatı çatır çutur rindane çikolata türkülerle yavru neler mektup nuri bilge ceylan para şarkı rindane rindane çömlek güfte küçüksün giyemezsin tasarım ziyan yavru zarf tarkovsky açalım yaren bile kelime deva öpücük böceği kelime uçurum yakarış giyemezsin çeşme aman çehov kamusal mizah istesen de meslek hangar kodlama kırgınmış açalım türkülerle yük öpücük böceği güfte hani uçurtma şefim uçurtma açalım şefim hane nuri bilge ceylan deva gittim doğa baba ölemezsin uçurum şarkı giyemezsin gittim çatır çutur dosyamızı para gittim doğa dayı çanak rastgele öpücük böceği cümle programlama ambar haram uçurum çömlek ziyan acılar bilinen dert omuz güfte doğa ana acılar aman rindane ambar deva yoksulluk ziyan dosyamızı dert gönül hane hane kamusal mizah cellat gönül para amacıyla tümce istesen de mektup para uçurtma öpücük böceği adı açalım doğa ana leylek tümce zarf çehov aman gittim bile çayır yoksulluk yük gittim yoksulluk deva yaren tarkovsky gülüm türkülerle çikolata senden sözcük kelime şarkı dosyamızı yalnızlık şefim gar gülüm meslek yakarış konuşmadım giyemezsin dert adı omuz tasarım gittim beni mektup sözlük giyemezsin yük ölemezsin nasıl hani para adı uçuyor acılar tasarım cellat giyemezsin ambar güfte para konuşmadım deva beni tren vurulmuş küçüksün devinim hane bilinen çikolata dert kırgınmış hayran neler leylek yalnızlık kefen yaren neler mor hicranlar meslek yağmurla zarf açalım leylek rindane tümce leylek web seher yeli doğa ana adı uçuyor yoksulluk rastgele uçurtma cellat ölemezsin karlı neler vurulmuş uçuyor hangar cümle yoksulluk hayran çeşme acılar para yakarış ziyan tümce yakarış dosyamızı ambar çatır çutur tasarım rindane acılar tren uçurtma istesen de rindane rindane çatı giyemezsin cellat yük rastgele ziyan mor hicranlar omuz cellat meslek leylek dosyamızı doğa baba güfte kırgınmış çanak uçurtma koklamadım gittim virane programlama güfte sözlük sözcük koklamadım aman seher yeli arkadaş gülüm dosyamızı temel yük hangar tümce yoksulluk oha cümle hangar kamusal mizah amacıyla kelime istesen de omuz omuz tarkovsky küçüksün istesen de meslek çehov türkülerle neler çayır zarf küçüksün kelime uçuyor kefen dert cümle vurulmuş istesen de giyemezsin leylek nasıl çömlek programlama mektup dosyamızı giyemezsin zarf bile çikolata konuşmadım hayran aman web gönül giyemezsin mor hicranlar dosyamızı devinim rastgele kamusal mizah rindane devinim dert şefim bilinen yalnızlık bilinen cellat hayran tarkovsky yoksulluk küçüksün çeşme arkadaş çayır uçurum doğa baba şarkı yaren yalnızlık doğa ana yavru web nuri bilge ceylan uçurtma çömlek seher yeli kefen haram tasarım yük uçuyor kelime tümce beni programlama uçurum ambar uçuyor doğa ana cellat omuz hani yaren çeşme sözcük hani leylek tarkovsky koklamadım nasıl kodlama doğa dayı çeşme tarkovsky devinim konuşmadım tasarım gittim rastgele tümce tümce karlı yük seher yeli yaren hane çikolata şarkı neler uçurum doğa dayı leylek bilinen kefen rastgele vurulmuş tren uçurtma omuz programlama mektup beni çikolata tarkovsky tarkovsky çeşme rastgele kırgınmış acılar küçüksün uçurtma devinim programlama arkadaş amacıyla uçuyor beni yağmurla nuri bilge ceylan nuri bilge ceylan neler gittim para türkülerle şarkı yakarış ambar doğa baba seher yeli tümce ziyan seher yeli yük türkülerle beni hangar karlı çanak bile hane çatı rindane küçüksün çatır çutur hayran kefen dert oha şarkı nuri bilge ceylan seher yeli doğa baba kelime tümce doğa baba öpücük böceği çatır çutur acılar yağmurla rindane çeşme acılar amacıyla hane yalnızlık web meslek deva öpücük böceği giyemezsin açalım virane kelime öpücük böceği doğa ana bile uçurtma yağmurla cümle cümle arkadaş sözlük ambar omuz nasıl acılar kırgınmış çehov hani yakarış kamusal mizah deva acılar küçüksün web doğa ana uçurtma küçüksün tasarım tasarım çömlek türkülerle hani mor hicranlar doğa ana gülüm web konuşmadım deva nuri bilge ceylan şarkı virane öpücük böceği doğa ana yaren şefim seher yeli ölemezsin beni ziyan sözcük zarf çayır leylek şarkı gar programlama hane yağmurla kamusal mizah rastgele dert meslek yaren bile kodlama adı uçuyor doğa baba deva dosyamızı doğa baba tasarım çatır çutur nuri bilge ceylan mektup senden zarf nuri bilge ceylan istesen de uçurtma yağmurla tasarım senden gittim meslek ambar yalnızlık gar vurulmuş konuşmadım oha leylek mektup oha ziyan doğa ana kamusal mizah rastgele çömlek kelime amacıyla istesen de para bilinen devinim hani temel kodlama yaren hangar web rindane güfte türkülerle dosyamızı senden uçurum neler hangar hangar oha beni amacıyla mektup kırgınmış yakarış gittim neler bile dert adı karlı mor hicranlar aman uçuyor koklamadım yavru hayran karlı aman koklamadım rindane dert ziyan seher yeli temel istesen de şarkı dert cellat amacıyla tümce tasarım şefim çikolata haram seher yeli mektup seher yeli kırgınmış uçurum uçurtma aman giyemezsin oha tümce acılar konuşmadım uçuyor uçuyor gar para doğa baba yoksulluk yoksulluk doğa dayı mor hicranlar para yoksulluk çömlek kelime mektup doğa baba mektup rastgele koklamadım güfte çeşme çanak cümle çayır kefen öpücük böceği doğa ana şefim hane çehov deva çehov yavru türkülerle para dert hani çatı hani dert doğa baba virane kefen dosyamızı doğa dayı devinim cellat leylek yağmurla gönül kelime aman çayır gülüm çatı karlı kamusal mizah kelime karlı arkadaş tarkovsky gönül tasarım kelime dosyamızı çayır kamusal mizah doğa baba rastgele gülüm doğa baba çatır çutur çömlek doğa baba yalnızlık rindane yoksulluk dert programlama leylek uçuyor aman çeşme dosyamızı gar devinim nasıl rastgele bile şarkı yük doğa ana ölemezsin. deva tren çeşme yaren hangar ambar gülüm tasarım çeşme koklamadım karlı kelime sözlük yük uçurtma gittim kamusal mizah uçurtma devinim mektup adı hane küçüksün şarkı zarf devinim karlı nuri bilge ceylan çanak arkadaş koklamadım bilinen web çatı doğa dayı mor hicranlar doğa ana para hangar programlama hayran çanak yaren programlama zarf hane bile mektup deva bile çayır web aman türkülerle yoksulluk sözlük yağmurla uçurtma türkülerle küçüksün rindane çikolata beni omuz mektup sözlük yalnızlık türkülerle hangar rindane dosyamızı tarkovsky temel ziyan çikolata leylek seher yeli karlı mektup çikolata tren doğa baba çehov hangar çayır yakarış küçüksün sözcük dosyamızı küçüksün arkadaş deva yoksulluk gülüm doğa dayı ambar konuşmadım gülüm tasarım vurulmuş dert tren yaren virane konuşmadım adı nuri bilge ceylan seher yeli haram amacıyla neler şarkı mor hicranlar koklamadım tren çehov kodlama yaren nasıl giyemezsin omuz cellat öpücük böceği hayran nasıl gittim sözlük programlama tasarım giyemezsin temel omuz mor hicranlar çatır çutur meslek kelime açalım dosyamızı arkadaş haram ölemezsin oha yaren aman zarf ambar arkadaş kodlama sümbül aman arkadaş sümbül çayır web beni leylek cellat gönül ölemezsin cümle doğa baba ölemezsin mor hicranlar cümle beni temel yalnızlık adı neler uçurtma tümce adı virane yük gar tümce çatır çutur güfte küçüksün koklamadım haram çatı virane açalım istesen de deva dert ölemezsin meslek meslek sözcük dert yük hayran ölemezsin tasarım mektup doğa dayı bile uçurum rindane kodlama çehov uçuyor hangar tümce senden yavru çeşme rastgele zarf ziyan şefim deva tren çanak şefim tarkovsky yalnızlık neler haram konuşmadım senden aman mor hicranlar cellat uçurtma çömlek çömlek yaren giyemezsin ambar kefen mektup oha güfte çehov meslek yoksulluk çatı hani senden gittim deva açalım çömlek sözcük yaren doğa ana uçurum dosyamızı uçuyor mektup çatı çatır çutur rindane çikolata türkülerle yavru neler mektup nuri bilge ceylan para şarkı rindane rindane çömlek güfte küçüksün giyemezsin tasarım ziyan yavru zarf tarkovsky açalım yaren bile kelime deva öpücük böceği kelime uçurum yakarış giyemezsin çeşme aman çehov kamusal mizah istesen de meslek hangar kodlama kırgınmış açalım türkülerle yük öpücük böceği güfte hani uçurtma şefim uçurtma açalım şefim hane nuri bilge ceylan deva gittim doğa baba ölemezsin uçurum şarkı giyemezsin gittim çatır çutur dosyamızı para gittim doğa dayı çanak rastgele öpücük böceği cümle programlama ambar haram uçurum çömlek ziyan acılar bilinen dert omuz güfte doğa ana acılar aman rindane ambar deva yoksulluk ziyan dosyamızı dert gönül hane hane kamusal mizah cellat gönül para amacıyla tümce istesen de mektup para uçurtma öpücük böceği adı açalım doğa ana leylek tümce zarf çehov aman gittim bile çayır yoksulluk yük gittim yoksulluk deva yaren tarkovsky gülüm türkülerle çikolata senden sözcük kelime şarkı dosyamızı yalnızlık şefim gar gülüm meslek yakarış konuşmadım giyemezsin dert adı omuz tasarım gittim beni mektup sözlük giyemezsin yük ölemezsin nasıl hani para adı uçuyor acılar tasarım cellat giyemezsin ambar güfte para konuşmadım deva beni tren vurulmuş küçüksün devinim hane bilinen çikolata dert kırgınmış hayran neler leylek yalnızlık kefen yaren neler mor hicranlar meslek yağmurla zarf açalım leylek rindane tümce leylek web seher yeli doğa ana adı uçuyor yoksulluk rastgele uçurtma cellat ölemezsin karlı neler vurulmuş uçuyor hangar cümle yoksulluk hayran çeşme acılar para yakarış ziyan tümce yakarış dosyamızı ambar çatır çutur tasarım rindane acılar tren uçurtma istesen de rindane rindane çatı giyemezsin cellat yük rastgele ziyan mor hicranlar omuz cellat meslek leylek dosyamızı doğa baba güfte kırgınmış çanak uçurtma koklamadım gittim virane programlama güfte sözlük sözcük koklamadım aman seher yeli arkadaş gülüm dosyamızı temel yük hangar tümce yoksulluk oha cümle hangar kamusal mizah amacıyla kelime istesen de omuz omuz tarkovsky küçüksün istesen de meslek çehov türkülerle neler çayır zarf küçüksün kelime uçuyor kefen dert cümle vurulmuş istesen de giyemezsin leylek nasıl çömlek programlama mektup dosyamızı giyemezsin zarf bile çikolata konuşmadım hayran aman web gönül giyemezsin mor hicranlar dosyamızı devinim rastgele kamusal mizah rindane devinim dert şefim bilinen yalnızlık bilinen cellat hayran tarkovsky yoksulluk küçüksün çeşme arkadaş çayır uçurum doğa baba şarkı yaren yalnızlık doğa ana yavru web nuri bilge ceylan uçurtma çömlek seher yeli kefen haram tasarım yük uçuyor kelime tümce beni programlama uçurum ambar uçuyor doğa ana cellat omuz hani yaren çeşme sözcük hani leylek tarkovsky koklamadım nasıl kodlama doğa dayı çeşme tarkovsky devinim konuşmadım tasarım gittim rastgele tümce tümce karlı yük seher yeli yaren hane çikolata şarkı neler uçurum doğa dayı leylek bilinen kefen rastgele vurulmuş tren uçurtma omuz programlama mektup beni çikolata tarkovsky tarkovsky çeşme rastgele kırgınmış acılar küçüksün uçurtma devinim programlama arkadaş amacıyla uçuyor beni yağmurla nuri bilge ceylan nuri bilge ceylan neler gittim para türkülerle şarkı yakarış ambar doğa baba seher yeli tümce ziyan seher yeli yük türkülerle beni hangar karlı çanak bile hane çatı rindane küçüksün çatır çutur hayran kefen dert oha şarkı nuri bilge ceylan seher yeli doğa baba kelime tümce doğa baba öpücük böceği çatır çutur acılar yağmurla rindane çeşme acılar amacıyla hane yalnızlık web meslek deva öpücük böceği giyemezsin açalım virane kelime öpücük böceği doğa ana bile uçurtma yağmurla cümle cümle arkadaş sözlük ambar omuz nasıl acılar kırgınmış çehov hani yakarış kamusal mizah deva acılar küçüksün web doğa ana uçurtma küçüksün tasarım tasarım çömlek türkülerle hani mor hicranlar doğa ana gülüm web konuşmadım deva nuri bilge ceylan şarkı virane öpücük böceği doğa ana yaren şefim seher yeli ölemezsin beni ziyan sözcük zarf çayır leylek şarkı gar programlama hane yağmurla kamusal mizah rastgele dert meslek yaren bile kodlama adı uçuyor doğa baba deva dosyamızı doğa baba tasarım çatır çutur nuri bilge ceylan mektup senden zarf nuri bilge ceylan istesen de uçurtma yağmurla tasarım senden gittim meslek ambar yalnızlık gar vurulmuş konuşmadım oha leylek mektup oha ziyan doğa ana kamusal mizah rastgele çömlek kelime amacıyla istesen de para bilinen devinim hani temel kodlama yaren hangar web rindane güfte türkülerle dosyamızı senden uçurum neler hangar hangar oha beni amacıyla mektup kırgınmış yakarış gittim neler bile dert adı karlı mor hicranlar aman uçuyor koklamadım yavru hayran karlı aman koklamadım rindane dert ziyan seher yeli temel istesen de şarkı dert cellat amacıyla tümce tasarım şefim çikolata haram seher yeli mektup seher yeli kırgınmış uçurum uçurtma aman giyemezsin oha tümce acılar konuşmadım uçuyor uçuyor gar para doğa baba yoksulluk yoksulluk doğa dayı mor hicranlar para yoksulluk çömlek kelime mektup doğa baba mektup rastgele koklamadım güfte çeşme çanak cümle çayır kefen öpücük böceği doğa ana şefim hane çehov deva çehov yavru türkülerle para dert hani çatı hani dert doğa baba virane kefen dosyamızı doğa dayı devinim cellat leylek yağmurla gönül kelime aman çayır gülüm çatı karlı kamusal mizah kelime karlı arkadaş tarkovsky gönül tasarım kelime dosyamızı çayır kamusal mizah doğa baba rastgele gülüm doğa baba çatır çutur çömlek doğa baba yalnızlık rindane yoksulluk dert programlama leylek uçuyor aman çeşme dosyamızı gar devinim nasıl rastgele bile şarkı yük doğa ana ölemezsin."
//     },
//     {
//         title: "Asenkron Bilgi Çekme",
//         tags: ["javascript", "async", "await", "veri tabanı", "web programlama", "fetch"],
//         postId: 341,
//         img: "./img/js.svg",
//         userId: 12,
//         body:"rindane kefen çikolata oha gar web sözlük karlı meslek ambar küçüksün haram tümce şefim çatı temel oha açalım çanak konuşmadım dosyamızı hangar omuz para uçurum zarf meslek omuz neler adı doğa baba tümce tasarım nasıl web çömlek gittim meslek karlı acılar açalım hani istesen de zarf çeşme sözlük yağmurla tren programlama çatır çutur adı leylek hayran gittim çeşme doğa ana öpücük böceği hangar sözcük koklamadım kefen yağmurla acılar tümce vurulmuş ambar dert gülüm oha çanak çatır çutur tümce ziyan hane mektup mor hicranlar senden küçüksün gittim küçüksün kamusal mizah çeşme cellat tren yağmurla sümbül gülüm omuz arkadaş konuşmadım ölemezsin mor hicranlar gülüm yük doğa ana gittim cümle temel çömlek şarkı mor hicranlar şefim aman yalnızlık hane gülüm devinim çömlek yakarış tren deva uçurum gar ölemezsin temel para web seher yeli dosyamızı meslek yoksulluk ambar uçurum vurulmuş doğa baba sümbül mor hicranlar yağmurla kamusal mizah türkülerle yaren nasıl dert yoksulluk senden yağmurla arkadaş çömlek hane sözlük omuz aman açalım dosyamızı cellat hani virane senden çatı konuşmadım kelime arkadaş uçurum leylek ambar yalnızlık karlı sümbül gittim gönül web leylek web neler giyemezsin gar çanak amacıyla hane amacıyla acılar dert tarkovsky tarkovsky nasıl haram çikolata doğa baba hane haram çatı gülüm sümbül kelime tümce tren hani tren adı web dert bilinen uçurtma dosyamızı acılar çayır oha yavru zarf açalım devinim yakarış senden nasıl doğa baba bilinen açalım çömlek tümce zarf hane tümce kırgınmış kodlama hayran tren devinim aman şefim hangar gar uçurtma zarf doğa dayı cellat kefen rastgele kodlama yakarış gönül bile rastgele yoksulluk adı yoksulluk doğa baba doğa ana istesen de virane hayran hayran yalnızlık oha adı hane konuşmadım ziyan uçuyor ölemezsin açalım mektup uçurtma web acılar yakarış meslek kodlama konuşmadım senden yakarış vurulmuş çayır aman uçurum şefim kırgınmış çanak hani programlama konuşmadım aman çanak rastgele öpücük böceği devinim rindane karlı istesen de çehov bilinen çehov yoksulluk meslek ölemezsin vurulmuş amacıyla öpücük böceği gülüm adı senden vurulmuş amacıyla çatır çutur mor hicranlar yük virane acılar kodlama cümle vurulmuş deva tümce uçurtma devinim tarkovsky vurulmuş seher yeli dert bile sümbül temel para hani türkülerle şefim ambar öpücük böceği giyemezsin çömlek çikolata uçurum seher yeli para tasarım meslek yoksulluk gönül çehov beni kamusal mizah kamusal mizah nuri bilge ceylan karlı seher yeli vurulmuş senden rindane karlı temel öpücük böceği kodlama cellat leylek küçüksün ambar kelime bilinen türkülerle vurulmuş dert küçüksün seher yeli konuşmadım gönül nasıl oha temel deva yavru acılar neler programlama doğa ana bile deva doğa dayı sözlük amacıyla virane para tümce ölemezsin yaren şefim rastgele çatır çutur uçurtma öpücük böceği leylek uçuyor yük istesen de senden yakarış istesen de çehov temel mektup öpücük böceği karlı çeşme türkülerle virane aman gittim aman sümbül cellat uçurum bilinen giyemezsin hane beni istesen de tasarım acılar kodlama web temel sözlük mektup gittim tren açalım meslek çikolata deva şarkı çanak doğa ana "
//     },
        new Post("Tasarım Planlaması",
                 ["photoshop", "tasarım", "UI", "veri tabanı", "web tasarım"],
                 841,
                 "./img/adobe.svg",
                 14,
                 [["p", "rindane gar kelime leylek dert koklamadım şefim bile uçurtma programlama zarf mektup leylek hayran dosyamızı mektup rastgele seher yeli koklamadım meslek kırgınmış yalnızlık nasıl cellat web istesen de meslek kodlama çanak şefim aman tasarım web beni mektup tasarım hangar deva dosyamızı şefim deva vurulmuş şefim hane çanak zarf konuşmadım sözcük çeşme yavru rastgele kelime uçurtma kırgınmış çeşme dosyamızı beni tarkovsky bile kamusal mizah dosyamızı zarf sözcük bilinen çikolata uçurtma programlama hangar gar hangar bile kefen adı rastgele vurulmuş leylek bile hani programlama haram seher yeli uçurum yakarış hayran çömlek uçuyor mektup hayran gittim hani doğa ana gittim doğa dayı hayran şefim uçurtma senden hane kefen beni doğa ana rastgele hane gülüm senden konuşmadım uçurtma neler vurulmuş gittim tasarım uçuyor sözcük vurulmuş doğa dayı hani gönül yakarış sözlük uçuyor kelime programlama hani haram çanak rastgele mektup yoksulluk seher yeli konuşmadım amacıyla web mor hicranlar sözlük leylek çömlek meslek çehov amacıyla çanak virane doğa dayı seher yeli doğa dayı koklamadım beni meslek haram ambar cümle para rastgele cellat cellat açalım doğa dayı sözlük sümbül omuz gülüm neler çatı çömlek yük seher yeli cellat türkülerle temel yavru omuz senden istesen de yoksulluk tasarım tarkovsky yoksulluk meslek amacıyla vurulmuş çömlek sözcük bilinen omuz beni arkadaş dosyamızı doğa dayı seher yeli kamusal mizah yağmurla ziyan seher yeli sözlük istesen de çanak şarkı çayır bile açalım yaren gar temel adı doğa baba mor hicranlar cellat tümce yavru kodlama senden yağmurla çanak koklamadım amacıyla seher yeli çatır çutur cümle yavru gar sözlük uçurum senden neler çatır çutur dosyamızı omuz sümbül devinim virane doğa ana tasarım açalım adı hayran tümce kefen kelime bilinen karlı nuri bilge ceylan tümce yük koklamadım adı hane yakarış şarkı virane ambar leylek ölemezsin çikolata güfte programlama tasarım omuz küçüksün kırgınmış hane beni karlı haram adı karlı güfte programlama bile haram ambar hani gönül ambar para konuşmadım sözlük mektup ölemezsin hani para..."]]),
//     {
//         title: "SEO nedir ve Neden Önemlidir",
//         tags: ["seo","html5", "optimizasyon", "arama motorları", "google"],
//         postId: 456,
//         img:"./img/html5.svg",
//         userId: 12,  
//         body:"haram doğa baba tren temel deva istesen de rastgele bile oha amacıyla uçurum cümle cellat yavru adı deva yalnızlık yavru dosyamızı vurulmuş yoksulluk nuri bilge ceylan devinim yoksulluk çanak çatı doğa ana gönül temel çeşme gülüm kelime dert deva kelime dosyamızı güfte çanak şarkı leylek doğa dayı dosyamızı omuz mektup rindane çatı karlı uçurum kodlama ambar aman rastgele karlı nasıl tümce yaren doğa baba çömlek aman doğa ana kefen yakarış arkadaş gülüm kırgınmış dosyamızı arkadaş mektup gar istesen de gönül arkadaş cellat kefen çatı ambar adı küçüksün koklamadım leylek tren gülüm uçurtma beni omuz para sözcük neler para uçurtma yük tarkovsky şarkı bile çikolata hani tarkovsky giyemezsin kelime vurulmuş zarf çatır çutur haram ölemezsin sümbül uçuyor çatır çutur bile gittim çehov meslek açalım açalım uçurtma rastgele vurulmuş çatı sözcük çatı yavru uçuyor karlı bilinen kırgınmış programlama mor hicranlar küçüksün ambar gittim gittim cümle rastgele tarkovsky ambar bile açalım hangar aman cellat yakarış arkadaş istesen de sözlük tasarım oha cellat uçuyor dert koklamadım sözcük omuz cümle kırgınmış hangar bile beni hani çatır çutur uçurtma mor hicranlar çatır çutur küçüksün devinim zarf kodlama doğa ana kamusal mizah uçuyor istesen de tarkovsky yavru dosyamızı mor hicranlar leylek vurulmuş deva öpücük böceği hangar arkadaş virane cellat gittim tren hani ziyan öpücük böceği sözcük uçurtma ziyan sümbül istesen de ziyan güfte temel ölemezsin gar leylek bile sümbül adı acılar karlı beni şefim cellat senden küçüksün çehov meslek acılar rindane ambar kamusal mizah cellat öpücük böceği koklamadım giyemezsin cümle hangar beni şarkı beni kırgınmış aman türkülerle meslek yağmurla cümle gülüm uçurum senden sözlük sümbül tarkovsky istesen de dert devinim çikolata amacıyla nuri bilge ceylan giyemezsin yağmurla bilinen oha cümle mor hicranlar virane ölemezsin meslek tren istesen de tasarım haram yalnızlık sözcük oha yoksulluk adı web doğa ana küçüksün tasarım sümbül para meslek çatı kırgınmış yaren çikolata yalnızlık neler omuz cümle tren kodlama tümce yaren gönül rindane çatır çutur bile çikolata güfte bile temel neler yakarış giyemezsin haram mor hicranlar dosyamızı yavru mektup tren uçurtma çanak meslek tasarım uçurum dert doğa baba meslek gülüm devinim çeşme kamusal mizah yakarış yük ziyan güfte uçurtma çömlek hangar programlama çatı yağmurla oha aman leylek arkadaş yağmurla doğa baba uçurtma dert kefen giyemezsin meslek rastgele para nasıl güfte güfte istesen de tarkovsky amacıyla gönül gar açalım mor hicranlar leylek virane çikolata kodlama neler yalnızlık tren adı istesen de şarkı ambar sözcük aman ziyan giyemezsin gittim rastgele vurulmuş yalnızlık devinim devinim ölemezsin açalım gülüm hangar uçuyor doğa ana ziyan dosyamızı uçuyor çatı çehov çikolata uçuyor bile bile karlı dert amacıyla gar öpücük böceği tarkovsky aman çatı virane kelime gar nasıl sümbül hayran tarkovsky meslek mektup yaren deva yaren hane çömlek giyemezsin yük ziyan kırgınmış meslek giyemezsin tarkovsky nasıl gar cümle öpücük böceği vurulmuş mor hicranlar kamusal mizah türkülerle istesen de şarkı neler açalım konuşmadım programlama gar acılar çatı senden meslek şarkı sözlük yoksulluk hani acılar arkadaş ölemezsin beni haram zarf bile zarf doğa ana hani yaren gittim rindane yük ambar doğa dayı uçuyor ziyan çanak web kamusal mizah küçüksün mor hicranlar zarf bile çatı gönül istesen de web rindane giyemezsin kelime konuşmadım konuşmadım neler yoksulluk rindane web uçurum hane çatır çutur zarf programlama dert vurulmuş uçuyor nasıl vurulmuş neler konuşmadım hane leylek karlı gittim karlı web aman çanak mor hicranlar sümbül ölemezsin tasarım rindane tarkovsky kırgınmış hane oha şefim acılar hayran istesen de para bile gittim tren ölemezsin koklamadım gülüm hayran haram meslek ölemezsin doğa ana zarf sözcük çehov amacıyla leylek konuşmadım çayır programlama şarkı istesen de çömlek gar şarkı çanak yağmurla doğa baba cümle bile rindane gönül virane ölemezsin kelime çanak devinim adı devinim meslek küçüksün çehov tümce tren kamusal mizah nasıl gülüm tasarım kefen oha uçurtma yakarış hane uçuyor doğa baba neler kırgınmış aman doğa baba leylek hayran şefim sümbül çehov hani hane yaren dosyamızı şarkı yük devinim sözcük çatı ziyan dosyamızı virane çömlek öpücük böceği oha gülüm gülüm web "
//     },
        new Post("Adobe Photoshop - Giriş",
                ["photoshop", "tasarım", "UI", "adobe", "web tasarım"],
                842,
                "./img/adobe.svg",
                14,
                [["p","leylek hangar ambar çayır hangar seher yeli mor hicranlar kodlama yakarış tarkovsky çehov uçuyor çatı çömlek bile sözcük dert çatı doğa baba çehov vurulmuş hayran doğa ana yakarış deva gar omuz çatı tasarım gar çatır çutur kodlama doğa dayı hane çömlek adı hani ambar devinim virane kefen neler yalnızlık giyemezsin nuri bilge ceylan yoksulluk nuri bilge ceylan yavru nasıl seher yeli çömlek çikolata ölemezsin ziyan çeşme beni leylek mor hicranlar doğa dayı meslek çehov sümbül şefim yoksulluk programlama konuşmadım doğa dayı türkülerle yalnızlık para gülüm şarkı vurulmuş beni kefen meslek haram web adı şarkı çehov gittim cümle rindane açalım açalım mor hicranlar küçüksün leylek yaren tümce konuşmadım dosyamızı acılar çehov doğa ana açalım zarf senden yük bilinen omuz rastgele yağmurla yağmurla doğa baba temel devinim sözlük güfte hangar bilinen vurulmuş yağmurla meslek temel cümle yük hane nasıl rindane nasıl gar arkadaş çömlek adı sözlük sümbül web meslek virane devinim nuri bilge ceylan karlı dosyamızı gittim dert yağmurla nuri bilge ceylan kamusal mizah gittim uçurum hane çatı web şarkı kelime şarkı doğa ana tarkovsky sözlük tarkovsky doğa dayı haram yoksulluk kamusal mizah yalnızlık uçuyor koklamadım kamusal mizah hayran leylek aman uçurtma seher yeli kodlama mektup acılar yaren çatı yağmurla haram yavru rindane güfte şefim cümle kelime bilinen gittim omuz yağmurla nasıl uçurum tümce arkadaş sözcük yoksulluk ziyan karlı meslek deva giyemezsin temel tarkovsky yalnızlık doğa ana doğa baba dert gülüm cellat programlama dert senden konuşmadım bile sümbül tümce dert tümce çatır çutur sözcük türkülerle hane haram yoksulluk kelime çeşme acılar ölemezsin aman rastgele çikolata beni leylek arkadaş kefen türkülerle acılar gönül dosyamızı deva gar açalım çayır para çatır çutur mor hicranlar kefen yalnızlık haram amacıyla omuz çayır öpücük böceği temel omuz gar çeşme çehov gar mor hicranlar güfte istesen de tren bile dosyamızı çayır gittim konuşmadım giyemezsin çanak uçurtma omuz tümce bile rastgele karlı ölemezsin meslek yalnızlık neler koklamadım çömlek nuri bilge ceylan ölemezsin tarkovsky çatı gar amacıyla mektup öpücük böceği türkülerle türkülerle uçurtma web kelime uçurtma yoksulluk küçüksün rindane doğa baba kelime karlı hane yoksulluk nuri bilge ceylan leylek meslek konuşmadım kamusal mizah meslek karlı nuri bilge ceylan hangar dert çanak çikolata açalım haram şefim güfte arkadaş senden meslek uçurtma vurulmuş sözcük çanak mektup programlama nuri bilge ceylan çömlek doğa dayı çanak nasıl konuşmadım seher yeli türkülerle doğa dayı nuri bilge ceylan şefim nuri bilge ceylan ambar çanak senden leylek tasarım neler para mor hicranlar uçurtma acılar yağmurla çatır çutur doğa dayı uçuyor leylek uçurum koklamadım çatı bilinen gar açalım çatır çutur giyemezsin deva şarkı rindane para deva giyemezsin şarkı ambar cümle kamusal mizah kırgınmış senden bilinen çeşme programlama karlı mektup konuşmadım temel sümbül nasıl yoksulluk programlama virane"]]
        )  
    // },
//     {
//         title: "Responsive Tasarım - CSS",
//         tags: ["responsive", "mobil", "css3", "media", "duyarlı", "web tasarım"],
//         postId: 250,
//         img:"./img/css3.svg",
//         userId: 13,  
//         body:"tümce adı cellat güfte hangar karlı sümbül sözcük gülüm omuz çatı giyemezsin karlı tarkovsky şarkı şefim tümce konuşmadım yalnızlık bile çanak kamusal mizah zarf kamusal mizah küçüksün adı acılar tasarım arkadaş doğa dayı senden mektup aman acılar mektup tarkovsky giyemezsin şefim gülüm rindane vurulmuş dert yağmurla yakarış temel yağmurla kamusal mizah kamusal mizah adı yakarış şarkı çömlek hayran kelime oha vurulmuş cümle adı ölemezsin nuri bilge ceylan web açalım istesen de yağmurla açalım devinim hani doğa ana omuz kefen kelime haram kelime cellat açalım hayran cümle gönül beni tarkovsky çatır çutur devinim kefen doğa dayı hani güfte hangar acılar öpücük böceği kelime öpücük böceği yoksulluk koklamadım tasarım bile seher yeli oha zarf adı yük meslek ziyan doğa ana şarkı haram temel türkülerle seher yeli uçurtma hangar programlama senden mor hicranlar kefen neler yakarış omuz gar neler yağmurla tren çanak rastgele mor hicranlar beni güfte gittim yaren tren adı zarf dert oha güfte çatı haram uçuyor giyemezsin çeşme devinim çömlek gönül kodlama hani kamusal mizah bile amacıyla yük sözcük leylek hangar kefen leylek tarkovsky beni doğa dayı ziyan seher yeli adı beni karlı omuz haram yalnızlık bilinen bile kelime cümle doğa baba giyemezsin bilinen çatır çutur ambar kodlama dosyamızı sözcük mor hicranlar aman amacıyla kamusal mizah devinim tümce şefim gülüm çikolata hane doğa baba bile gittim adı devinim uçurtma gittim nasıl çatır çutur şarkı çanak devinim gar çayır çömlek ziyan karlı kırgınmış amacıyla güfte virane dosyamızı ziyan hane rindane tümce kelime omuz hayran çatı çanak güfte hayran virane uçurtma yük yavru gittim leylek hayran yük uçuyor temel hayran doğa baba seher yeli devinim giyemezsin vurulmuş temel kamusal mizah mektup çehov rastgele çikolata yoksulluk oha leylek yoksulluk öpücük böceği cellat mor hicranlar ziyan leylek uçuyor şarkı yakarış web çatı arkadaş sözlük vurulmuş para oha şefim çehov karlı gülüm karlı oha vurulmuş mektup çanak çeşme meslek sümbül kırgınmış yalnızlık devinim çehov yağmurla sözlük şefim yağmurla yağmurla konuşmadım çayır beni tümce çömlek açalım beni rastgele yük haram hani mektup karlı uçurum ölemezsin bilinen istesen de çömlek koklamadım cümle doğa ana yoksulluk türkülerle konuşmadım virane çatır çutur bilinen doğa dayı zarf şefim kamusal mizah konuşmadım gar mor hicranlar sözcük neler ziyan çatı çatı cellat çanak çeşme giyemezsin çeşme hane tümce seher yeli yağmurla oha şarkı mor hicranlar konuşmadım doğa ana şefim çehov nasıl neler rastgele seher yeli tümce ziyan kodlama konuşmadım programlama ölemezsin oha koklamadım sümbül çikolata hayran uçurum gülüm neler sözlük çanak gar sümbül yavru cümle kamusal mizah ziyan konuşmadım temel uçurtma yaren gülüm küçüksün nuri bilge ceylan çehov yalnızlık mektup programlama yalnızlık kırgınmış dert şarkı virane ambar beni virane arkadaş çömlek uçurum tren gittim sözlük doğa baba gülüm konuşmadım küçüksün rindane dosyamızı giyemezsin koklamadım çehov yakarış yağmurla çikolata şefim beni doğa baba öpücük böceği hangar uçurtma çikolata doğa ana gar öpücük böceği omuz çeşme acılar sözcük kamusal mizah dert ölemezsin çehov dert gittim konuşmadım neler yavru açalım çömlek amacıyla sümbül hayran kelime çatır çutur çehov nuri bilge ceylan neler öpücük böceği omuz deva çikolata yoksulluk karlı öpücük böceği rindane güfte uçurum çeşme senden kamusal mizah rastgele çanak devinim karlı ambar cümle çikolata oha programlama beni doğa dayı hani yoksulluk gittim meslek koklamadım cümle doğa ana kamusal mizah neler şarkı virane yakarış kelime tasarım cellat yük istesen de devinim kodlama koklamadım türkülerle yaren bilinen konuşmadım "
//     },
//     {
//         title: "React Hooks Giriş",
//         tags: ["react", "react hooks", "useState", "useEffect", "render"],
//         postId: 765,
//         img:"./img/react.svg",
//         userId: 15,
//         body:"mektup çehov çayır konuşmadım amacıyla aman sözlük uçurum kelime yük amacıyla rastgele sözlük doğa ana yoksulluk güfte rastgele tarkovsky yaren kelime hane virane zarf yakarış istesen de cümle çehov tümce uçurtma programlama omuz istesen de kodlama adı meslek arkadaş tasarım tasarım omuz neler çanak seher yeli giyemezsin kamusal mizah programlama ambar nuri bilge ceylan cellat rindane leylek nasıl sözlük acılar cellat yoksulluk kırgınmış mor hicranlar yaren şarkı uçuyor adı omuz uçurtma neler nuri bilge ceylan doğa dayı programlama nasıl türkülerle hayran haram devinim yakarış uçurtma koklamadım kodlama rindane rastgele dosyamızı uçuyor devinim çömlek beni web arkadaş hani adı kamusal mizah dosyamızı yük doğa ana deva mektup yoksulluk haram kefen seher yeli web bile doğa baba aman leylek aman aman temel senden türkülerle zarf kefen cellat arkadaş dert güfte sözlük gönül beni ölemezsin dosyamızı hangar çayır doğa dayı yalnızlık ambar ölemezsin bile para acılar senden sözcük aman çatır çutur şarkı omuz kefen yük koklamadım doğa ana gönül şefim dert konuşmadım leylek mor hicranlar acılar doğa baba mor hicranlar bilinen kamusal mizah haram gar çömlek tümce programlama tarkovsky kelime beni aman rindane istesen de hani uçurum tümce dosyamızı seher yeli acılar yavru senden mektup hayran adı dert gittim rindane hani omuz beni vurulmuş haram gülüm şarkı cümle sözlük hane kırgınmış temel para gittim güfte arkadaş çanak kelime rastgele web acılar yük şefim arkadaş sözcük yağmurla konuşmadım yakarış kırgınmış istesen de haram yoksulluk kırgınmış haram para yakarış devinim devinim temel nuri bilge ceylan çanak ambar tarkovsky programlama aman rastgele haram leylek istesen de kelime hane çanak çatır çutur programlama çehov yağmurla mor hicranlar kırgınmış programlama yakarış koklamadım seher yeli doğa ana doğa dayı gülüm türkülerle kelime konuşmadım türkülerle tarkovsky nuri bilge ceylan çömlek tümce öpücük böceği gar şarkı çayır çayır yağmurla deva doğa baba nuri bilge ceylan cümle seher yeli karlı rindane leylek açalım nasıl sözcük aman çeşme temel ziyan çikolata uçurum doğa baba çatır çutur gönül türkülerle haram uçuyor meslek oha virane hane rindane istesen de gittim deva tümce hane sözlük istesen de kefen deva kefen cellat nuri bilge ceylan mor hicranlar amacıyla gönül para arkadaş vurulmuş yaren cümle vurulmuş sözcük yaren çatı virane programlama şefim gittim devinim küçüksün çömlek yavru sözlük çanak şarkı şarkı doğa baba ambar rastgele cümle neler seher yeli çikolata kefen hani neler çayır karlı ziyan hani kamusal mizah doğa ana tümce kefen ziyan gülüm deva türkülerle nasıl acılar hani nasıl kefen gar koklamadım cellat tümce çikolata yalnızlık aman kırgınmış güfte amacıyla çeşme çömlek türkülerle uçuyor omuz yaren konuşmadım yağmurla cümle beni ziyan nasıl mektup kodlama leylek beni yoksulluk koklamadım ölemezsin yük nuri bilge ceylan tasarım şarkı haram tasarım acılar açalım uçuyor seher yeli sözcük çehov hangar devinim aman arkadaş kırgınmış çatı dosyamızı tarkovsky amacıyla yakarış açalım dosyamızı ölemezsin beni seher yeli çeşme hayran hayran güfte cümle programlama senden tarkovsky tren açalım oha mor hicranlar doğa baba arkadaş oha doğa baba uçurtma sözlük hayran beni para küçüksün temel uçurum yalnızlık doğa baba omuz yavru şarkı yaren güfte konuşmadım koklamadım mektup yoksulluk doğa ana çatı devinim güfte doğa baba çanak çayır cellat hangar yoksulluk karlı seher yeli uçuyor kodlama neler arkadaş tümce yalnızlık konuşmadım yakarış para mor hicranlar öpücük böceği tarkovsky uçurtma gönül sözcük arkadaş gar gönül açalım aman doğa baba oha yük çanak tümce tümce çatı açalım gittim doğa ana gülüm yağmurla tren haram gönül gülüm çatır çutur yakarış gönül giyemezsin cellat yaren çömlek ölemezsin çatır çutur tasarım sözlük giyemezsin çayır uçurum haram hangar kodlama haram sümbül koklamadım rastgele devinim şarkı zarf zarf aman kodlama ambar kırgınmış gülüm hayran acılar tasarım neler tarkovsky nasıl kodlama sözlük istesen de yoksulluk rindane uçurtma deva uçurum çömlek kelime uçurum kırgınmış güfte gittim hani yük konuşmadım hayran çatı devinim haram senden açalım gar programlama şarkı uçurtma yakarış çömlek bile yoksulluk uçurtma uçurum şefim uçurtma nuri bilge ceylan arkadaş uçurum hayran çehov seher yeli ziyan programlama kırgınmış arkadaş yağmurla sözlük yalnızlık arkadaş çikolata dosyamızı seher yeli rastgele küçüksün mor hicranlar uçuyor uçurum aman karlı koklamadım çatır çutur sözlük web tümce mektup bilinen hane ziyan ölemezsin rindane dosyamızı web rastgele tarkovsky senden vurulmuş adı arkadaş güfte çikolata para temel vurulmuş kelime arkadaş leylek karlı şarkı dosyamızı nuri bilge ceylan yavru yaren uçuyor dert senden sözcük sümbül tren tasarım açalım adı giyemezsin meslek acılar amacıyla haram tasarım hani şefim çanak hangar haram virane rastgele ambar tasarım gar senden doğa ana doğa ana çikolata yakarış yağmurla meslek adı bile doğa baba rindane senden çikolata senden çanak dert açalım açalım uçuyor koklamadım çanak nasıl tasarım zarf gittim şefim gittim türkülerle omuz neler rindane kırgınmış arkadaş çatır çutur sümbül kefen güfte neler yakarış giyemezsin çayır nuri bilge ceylan hani küçüksün çikolata"  
//     },
//     {
//         title: "Intersection Observer Örnek Proje",
//         tags: ["javascript", "intersection observer", "web programlama",],
//         postId: 251,
//         img:"./img/js.svg",
//         userId: 13,  
//         body:"giyemezsin sözlük kamusal mizah türkülerle küçüksün çatı şefim kodlama açalım çatır çutur öpücük böceği şarkı gönül acılar sümbül amacıyla çikolata cellat tasarım çeşme meslek para hane yakarış yağmurla türkülerle kodlama web doğa dayı sümbül yaren şefim tasarım kefen konuşmadım senden hayran mektup doğa ana ambar yağmurla güfte kamusal mizah rindane aman para oha yakarış çatır çutur kodlama kefen uçuyor haram yük bile amacıyla çayır hangar bilinen doğa ana tasarım seher yeli hayran hayran sümbül leylek öpücük böceği amacıyla deva gittim kodlama açalım kamusal mizah rindane leylek öpücük böceği hayran leylek yoksulluk sözlük gittim gittim haram gülüm adı uçurum uçurtma şarkı beni zarf yağmurla doğa ana neler hayran deva mor hicranlar rindane çehov çikolata vurulmuş para ziyan rastgele haram güfte konuşmadım çehov açalım sözlük rastgele konuşmadım çatı koklamadım doğa dayı şarkı adı doğa dayı güfte giyemezsin çikolata cellat seher yeli açalım sözlük uçurtma dert kırgınmış kelime doğa ana programlama gittim kelime çikolata yağmurla tren programlama nasıl doğa baba meslek virane kefen programlama bile karlı istesen de çehov bile senden gönül dosyamızı dert yağmurla sözcük yakarış küçüksün yalnızlık web çömlek hayran uçurum uçurum ölemezsin öpücük böceği kefen uçurum koklamadım cellat web dert giyemezsin doğa dayı uçuyor konuşmadım doğa dayı kodlama senden leylek yakarış bilinen gar şefim uçuyor temel omuz istesen de hani temel cellat kodlama kamusal mizah çanak ölemezsin uçuyor devinim çayır nasıl güfte acılar çatır çutur kelime çatı ambar vurulmuş şarkı omuz açalım seher yeli tümce kefen sözlük çatı nasıl virane şarkı çayır neler dert para mor hicranlar kelime tümce çatır çutur haram giyemezsin cellat kırgınmış rastgele cellat kefen oha gönül acılar bile mektup mor hicranlar gar adı omuz kamusal mizah hani hayran hayran haram ambar ambar güfte koklamadım arkadaş doğa ana hangar dosyamızı aman ambar beni"
//     },
//     {
//         title: "React Optimizasyon",
//         tags: ["react", "useCallback", "useMemo", "memo", "render"],
//         postId: 766,
//         img:"./img/react.svg",
//         userId: 15,  
//         body: "deva ölemezsin yavru uçuyor koklamadım dosyamızı yaren koklamadım konuşmadım çeşme istesen de gittim çehov çikolata öpücük böceği türkülerle deva hayran oha virane zarf hani sözlük sözcük bilinen çehov haram doğa ana küçüksün meslek temel nuri bilge ceylan yoksulluk hani yavru giyemezsin gülüm hayran yağmurla temel gönül yağmurla yalnızlık türkülerle karlı kırgınmış çanak leylek para gülüm tasarım giyemezsin şefim aman güfte cümle şefim çatı acılar doğa dayı cellat oha tasarım hangar kefen bilinen bile acılar kamusal mizah web yavru çatır çutur küçüksün seher yeli doğa ana gittim çanak giyemezsin istesen de gönül hangar bile para karlı temel rindane yalnızlık senden beni öpücük böceği karlı web giyemezsin dosyamızı rindane öpücük böceği temel şefim kodlama gar temel oha çanak gittim mektup kamusal mizah nasıl hani cümle yavru yakarış yakarış gittim yalnızlık yük hayran küçüksün karlı kefen devinim omuz kefen amacıyla meslek oha bilinen uçurtma hangar nasıl nuri bilge ceylan omuz gülüm çeşme tren doğa dayı hani devinim çanak virane seher yeli şarkı hayran tasarım şefim mektup beni tasarım mor hicranlar şefim yaren uçuyor ambar hayran haram programlama haram şefim doğa baba kamusal mizah tren kamusal mizah gittim aman uçuyor doğa ana amacıyla zarf hangar omuz amacıyla oha programlama doğa ana tren virane adı bilinen leylek çehov adı küçüksün açalım doğa dayı çikolata meslek yağmurla gülüm yağmurla çayır kodlama gönül doğa ana yaren nuri bilge ceylan senden oha çömlek doğa ana gülüm öpücük böceği yavru kırgınmış sümbül çanak hane giyemezsin karlı gittim senden dosyamızı çatır çutur kefen kırgınmış ziyan doğa dayı hani beni yavru yağmurla rastgele türkülerle çikolata bilinen kırgınmış rindane acılar uçuyor vurulmuş rastgele dert çeşme vurulmuş yaren doğa baba neler meslek şarkı çatır çutur omuz yük omuz konuşmadım web beni ziyan bile karlı çömlek adı öpücük böceği leylek bilinen rindane yük kefen uçurtma gönül leylek uçurtma hangar zarf dert gittim web beni yaren istesen de küçüksün para mor hicranlar deva türkülerle yalnızlık neler kamusal mizah para hayran deva devinim neler vurulmuş hane tarkovsky türkülerle yaren konuşmadım neler gönül tümce gönül yağmurla kamusal mizah leylek doğa dayı arkadaş açalım çatı ambar sözlük neler kelime zarf çatı yalnızlık para hangar türkülerle dert gar çayır hani zarf cellat bile koklamadım yaren karlı nuri bilge ceylan yoksulluk web çatı yavru oha yakarış güfte çanak senden çatır çutur bilinen tümce mektup rindane dert web sözlük ölemezsin çanak seher yeli mektup cellat devinim gittim çömlek güfte karlı çehov leylek devinim neler neler mor hicranlar doğa baba yük beni bile küçüksün yük adı virane çehov sözlük vurulmuş sümbül bile deva doğa dayı çikolata kırgınmış seher yeli şarkı doğa ana karlı kodlama leylek yalnızlık cellat uçuyor uçurtma sümbül çehov hane kodlama kelime nasıl hayran hane nasıl programlama istesen de yoksulluk adı neler mektup tarkovsky mektup sözcük vurulmuş karlı doğa ana yalnızlık yoksulluk çikolata ziyan mektup aman yavru çömlek mor hicranlar uçurtma doğa baba sözlük gar yük beni mor hicranlar amacıyla açalım kefen deva açalım adı gar hayran türkülerle konuşmadım bile neler ölemezsin vurulmuş koklamadım beni acılar nuri bilge ceylan vurulmuş konuşmadım yalnızlık hane çeşme doğa baba istesen de konuşmadım deva tarkovsky yük çikolata senden rindane aman sözcük temel beni çömlek seher yeli gittim tren bilinen karlı haram ölemezsin nuri bilge ceylan bilinen gittim neler yoksulluk koklamadım devinim yük tümce programlama küçüksün beni giyemezsin karlı giyemezsin açalım para çikolata temel kodlama arkadaş şarkı kamusal mizah tren web gittim tarkovsky beni tümce kelime koklamadım hangar çehov sözcük tren çikolata kelime neler cellat çatı yavru rastgele koklamadım yük programlama hani hane para senden hani neler mektup küçüksün ziyan bile giyemezsin çayır sümbül çanak uçurtma seher yeli yaren mor hicranlar konuşmadım beni istesen de doğa baba para aman istesen de gar gar vurulmuş kefen uçurtma programlama gülüm karlı kelime giyemezsin kırgınmış çatı giyemezsin uçurum programlama dert ölemezsin ölemezsin şarkı cellat bile koklamadım omuz şefim devinim bilinen dosyamızı nasıl konuşmadım yaren yağmurla rastgele kelime senden doğa dayı çömlek para acılar uçurtma kodlama istesen de hangar istesen de gittim ziyan hani neler bile çömlek bilinen rindane haram web çeşme senden yağmurla kodlama çatır çutur gittim gittim çatı çayır istesen de koklamadım hani dosyamızı koklamadım sözcük nuri bilge ceylan gar vurulmuş kodlama rindane tren uçurtma oha acılar yük öpücük böceği nuri bilge ceylan nuri bilge ceylan uçurum çanak küçüksün yavru kelime karlı tasarım hani öpücük böceği küçüksün gülüm dosyamızı kefen yakarış tren rindane gar sümbül koklamadım rastgele çayır kırgınmış uçuyor meslek bilinen koklamadım yoksulluk amacıyla çeşme adı oha giyemezsin haram nasıl cellat tren çatır çutur çanak güfte konuşmadım bile senden gülüm nuri bilge ceylan hani arkadaş şarkı sümbül tasarım istesen de koklamadım kodlama yağmurla hani çanak tümce istesen de sözlük kefen açalım kamusal mizah rindane mor hicranlar dosyamızı küçüksün dosyamızı tarkovsky seher yeli oha senden deva virane hayran çeşme kefen öpücük böceği tren ambar yük türkülerle deva dert sözlük öpücük böceği karlı cümle uçurtma şarkı tren bilinen tren çeşme kelime kırgınmış web hayran adı rastgele ziyan doğa dayı çikolata hani sümbül konuşmadım yoksulluk meslek tümce deva hayran çatı ölemezsin ölemezsin nasıl doğa baba adı cümle uçurtma konuşmadım tren dert şefim programlama sözcük tarkovsky hangar mor hicranlar dert çömlek doğa baba ölemezsin amacıyla mektup yoksulluk leylek senden zarf yakarış leylek nuri bilge ceylan sözlük açalım küçüksün haram haram"
//     }
];