// eslint-disable-next-line
export default (PostCls) => new PostCls(
      "Sass - Genel Bakış",
      ["css", "frontend", "arayüz", "sass", "tasarım", "css3", "stil"],
      252,
      "./img/css3.svg",
      13,
      `## Sass Nedir? 
        
Tanımlamak için [kendi sitesinden](https://sass-lang.com/documentation) alıntı yaparsak; **Sass**, *CSS*'e dönüştürülen bir stil şeması dilidir. Değişkenlerin, fonksiyonların ve stil yazımını kolaylaştıran daha birçok parçanın kullanımına olanak sağlar. Büyük çaplı internet sitelerinin stil şemalarının tertip ve takibini kolaylaştırır.

## Yükleme ve Başlangıç
Stil kodlarınızın yazımı sırasında **Sass** kullanabilmeniz için başvurabileceğiniz birkaç tane farklı yol olmasına rağmen(çevrimiçi dönüştürücüler, editör eklentileri gibi) ben, [***Node.js***](https://nodejs.org/en/)'in paket yöneticisi olan *npm* vasıtasıyla **Sass**'i bilgisayarınıza indirmenizi öneririm. Eğer daha önce [***Node.js***](https://nodejs.org/en/)'i bilgisayarınıza kurmadıysanız sitesine uğrayarak indirebilirsiniz, tamamen ücretsizdir. Paket yöneticisi için ekstra hiçbir şey yapmanıza gerek yok, **Node.js**'i indirip kurduğunuz vakit *npm* de kullanıma hazır hale gelecektir.
Gerekli kurulumları yaptıysanız şimdi komut ekranınızı açın. Aşağıdaki komutları yazıp <kbd>Enter</kbd>a basın. Tüm işletim sistemlerinde sorunsuz çalışıyor olmaları gerek.

~~~cmd
mkdir sass-test && cd sass-test
~~~

Yukarıdaki komutlar, sırasıyla, bizim *sass-test* adını taşıyan bir klasör oluşturmamızı, daha sonra bu klasörün içine girmemizi sağlıyorlar. *sass-test* ismi benim keyfi olarak oluşturduğum bir isim, siz istediğinizi yazabilirsiniz. Şimdi ise bilgisayarımıza Sass'i indirmenin vakti; komut penceresine şu komutu girin ve <kbd>Enter</kbd>a basın.

~~~cmd
npm install -g sass
~~~

**npm**, bildiğiniz gibi, paket yöneticisinin adı. Hemen ardından gelen \`install\` komutu ise adını vereceğimiz paketin bilgisayarımıza indirilip kurulması gerektiğini belirtiyor. \`-g\` opsiyonu ile paketin bilgisayara **global** olarak, yani bilgisayarın her yerinden ulaşılabilecek şekilde yüklenmesini sağlıyoruz.

Yüklenme tamamlandığında Sass'e ilk adımımızı atmaya başlayabiliriz. Kod editörünüzü *sass-test* klasörü içinde açın ve *testing.scss* adlı bir dosya oluşturun.

## Değişkenler
Programlama dillerine aşinalığınız mevcut ise, değişkenler kavramına yabancılık çekmeyeceksinizdir. Değişkenler, en temel tanımıyla, *değer taşıyıcılardır*. Bir değeri bir değişkene atarsınız ve o değere ulaşmak istediğinizde değişkenleri kullanırsınız.
Sass'te değişkenleri tanımlarken \`$\` işaretini değişken ismimizin başına getiriyoruz. Şimdi *testing.scss* dosyanızın içine şu kodları yazın:

~~~scss
$g-white: ghostwhite;

aside {
    background-color: $g-white;
}
~~~

Burada \`ghostwhite\` rengini \`$g-white\` değişkenine atıyoruz. Bu örnekten sonra, özellikle herhangi bir programlama dili ile yüz göz olmamışsanız, yaptığımız şey size gereksizmiş gibi gelebilir, fakat, projenin bir noktasında bu rengi değiştirmek zorunda kaldığımız durumu zihninizde canlandırırsanız, değişkenlerin neden yararlı olduklarını anlayabilirsiniz. Kodumuzun içinde bu renk değerini arayarak teker teker değiştirmek yerine bir noktaya değişiklik uygulamamız yeterli olacak ve bu da bizim işimizi epeyce kolaylaştıracaktır.

Şimdi komut penceresini bu klasörün içinde açın ve aşağıdaki komutu girerek <kbd>Enter</kbd>a basın.

~~~cmd
sass testing.scss style.css
~~~

Komut sonuçlandığında *testing.scss* dosyası ile aynı klasör içinde *style.css* adlı bir dosya kendiliğinden oluşturulmuş olmalı. O dosyayı açtığınızda \`aside\` elementine uygulanan \`background\` niteliğinin değerini \`ghostwhite\` olarak göreceksiniz, yani normal bir CSS kodu ile karşılaşacaksınız. Ek olarak *.map.css* uzantılı bir dosya daha görmüş olmalısınız, şu an ona odaklanmanıza gerek yok.

Böylece ilk Sass kodunuzu yazıp CSS'e çevirmiş oldunuz. Tabii sürekli komut penceresine gidip, dönüşüm için gerekli kodu yazmak bir noktadan sonra yorucu ve can sıkıcı olmaya başlayabilir. Bunun üstesinden gelmek için komutumuza ekstra bir komut opsiyonu ekleyebiliriz:
~~~cmd
sass --watch testing.scss style.css
~~~
Bu komutu, komut penceresinde çalıştırdığınızda, **Sass** \`watch\` modunda çalışmaya başlayacak, yani *testing.scss* dosyanızda değişiklik yapıp her kaydedişinizde *style.css* dosyasını kendiliğinden(otomatik olarak) güncelleyecek.
Değişkenler konu başlğının bir miktar dışına çıkıyor olsak da büyük olasılıkla işinize yarayabilecek olan birkaç komut örneği göstermek istiyorum. Mesela *'.scss'* uzantılı dosyalarınızı bir klasörde(örneğin *sass-folder* adlı klasör), CSS dosyalarınızı başka bir klasörde tutmak istiyorsunuz(Örneğin *styles* adlı klasör):
~~~cmd
sass --watch sass-folder\\main.scss styles\\style.css
~~~
**Klasör şeması**:

    sass-test
      sass-folder
        main.scss
      styles
        style.css


Bu kodla birlikte Sass'e söylediğimiz şey şu: *sass-folder* dosyasının içindeki *main.scss* dosyasını takibe al ve her değişiklikte styles dosyasının içindeki *style.css* dosyasını güncelle.

Aşağıda, çok kullanılan bazı kombinasyonlara ait örnekler görebilirsiniz:
- Birden fazla *.scss* dosyasını, adlarını koruyarak, birden fazla *.css* dosyasına yazdırmak.

~~~sh
# light.scss light.css'e
# dark.scss dark.css'e
# ':' önemli!!!
sass --watch light.scss:light.css 
~~~

- Bir klasörün içindeki bazı *.scss* dosyalarını, adları koruyarak, başka bir klasörün içinde *.css* dosyalarına çevirmek:
~~~cmd
sass --watch sass-folder:css-folder
~~~

## Kontrol Yapıları
Yine programlama dillerine aşina olanların yabancılık çekmeyeceği bir kavram olan *kontrol yapı*larını Sass yardımıyla stil şemalarımızda da kullanabiliyoruz. Tanımlamak gerekirse; *bir kontrol yapısı, temel olarak, bazı koşullara bağımlı biçimde, bir ifadenin uygulanıp uygulanmayacağına karar veren yapıdır*. Günlük hayat içinden bir örnek verelim; *"Yağmur yağarsa şemsiye alacağım"*. Şemsiye alışımız yağmur koşuluna bağlı...

### if
Değineceğimiz ilk kontrol yapısı \`@if\`. İfadelerin döndürdüğü Boolean değere(\`true\` veya \`false\`) endeksli olarak, seçili stil kurallarının uygulanıp uygulanmayacağına karar verir. Bu kontrol yapısıyla birlikte görebileceğimiz, eklenti niteliğindeki, bir diğer yapı ise \`@else\` yapısıdır. Akış \`@if\` kuralının kapsadığı ifadeye girmezse, \`@else\` bloğunun barındırdığı ifadeyi uygular.

~~~scss
$dark-mode: true;

body {
  @if $dark-mode {
    background-color: black;
    color: white;
  } @else {
    background-color: white;
    color: black;
  }
}

~~~
\`dark-mode\` değişkenine \`true\`(doğru) değerini atadık, böylece \`if\` sorgusunun olduğu bölüme girdik. Bu kod parçacığını CSS'e dönüştürdüğünüzde göreceğiniz kod:
~~~css
body {
  background-color: black;
  color: white;
}
~~~

Sadece iki muhtemel sonucun olmadığı akışlarda \`@else if\` kuralı yardımımıza koşuyor:
~~~scss
$size: big;

p {
  @if $size == small {
    font-size: 0.855rem;
  } @else if $size == medium {
    font-size: 1.3rem;
  } @else if $size == big {
    font-size: 2rem;
  } @else {
    font-size: 1.5rem;
  }
}
~~~
Bu kod parçacığında birden fazla koşulu test ediyoruz, \`$size\` değişkeni ile uyuşan değeri bulduğumuzda o gediğe giriyoruz. Girilecek hiçbir gedik bulamazsak \`@else\` bloğuna giriyoruz. Dönüştürme işlemi gerçekleştiğinde karşımıza çıkan CSS kodu ise şöyle:
~~~css
p {
  font-size: 2rem;
}
~~~

### each
\`@each\` kullanımını daha rahat anlamak için birbirine benzeyen birden fazla stil kuralı yazmanız gereken bir durumu gözünüzün önüne getirin. Bu stil kuralları birbirlerinden küçük farklılıklarla ayrışıyor olsunlar. Kopyala/Yapıştır/Değiştir tekniğini uygulamayı düşünüyor olabilirsiniz. İşte \`@each\` bunu sizin yerinize yapıyor ve sizi bir yükten kurtarıyor. Aşağıdaki kodları editörünüzde deneyin ve CSS sonuçlarını gözlemleyerek ne olduğunu anlamaya çalışın.

~~~scss
// Ürkmeyin! Bu gördüğünüze Sass içinde 'map' adı veriliyor,
// özetle 'anahtar kelime: değer' ikililerinden oluşan bir veri yapısı.

$line-heights: (
  "small": 1.2,
  "medium": 1.4,
  "big": 1.6,
  "huge": 2
)

@each $name, $value in $line-heights {
  .l-height-#{$name}: {
    line-height: $value
  }
}
~~~
\`line-height\` *map*imizin içindeki her ikili üzerinden geçerek, anahtar kelimeyi **interpolation**(ara ekleme - \`#{}\`) yardımıyla sınıf ismine ekliyoruz; değerimizi ise \`line-height\` niteliğine değer olarak atıyoruz.
Bu Sass kodlarının dönüştüğü CSS kodu da aşağıda:
~~~css
.l-height-small {
  line-height: 1.2;
}

.l-height-medium {
  line-height: 1.4;
}

.l-height-big {
  line-height: 1.6;
}
  
.l-height-huge {
  line-height: 2;
}
~~~

### for
Birden fazla birbirine benzeyen stil kuralı yazmamız gerekirse ve bu kurallar arasındaki farklılık düzenli şekilde artan sayılardan oluşuyorsa, en mantıklı seçenek \`@for\` bloğu kullanmaktır.
~~~scss
@for $i from 1 to 5 {
  .m-#{$i} {
    margin: #{$i}em
  }
}
~~~
\`$i\` değişkenini, istediğiniz başka herhangi bir ismi seçebilirsiniz, 1'den başlayarak 5'e kadar(dahil değil) artırıyoruz. Son sayının dahil olmamasının sebebi kullandığımız \`to\` kelimesi. Son sayının da dahil olmasını istiyorsanız \`to\` yerine \`through\` kelimesini kullanmalısınız. 
CSS'e dönüştürülmüş hâli:
~~~css
.m-1 {
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
}
~~~
### while
\`@while\` bloğu, \`@while\` ifadesi \`false\` döndürene dek uygulanmaya devam eder. Birkaç tane özel durum haricinde \`@for\` ve \`@each\` ile aynı işlevi görür, performans açısından \`@for\` ve \`@each\` yapılarının kullanımı tercih edilmelidir.

## Yararlı Diğer Yapılar
Her ne kadar akış kontrol yapıları, stil kuralları yazmamızı temel seviyede kolaylaştırsa da, daha karmaşık kuralları yazmamızı olanaklı hâle getiren yapılara da değinmemizde fayda var.

### mixin
Elimizde belli bir stil şablonu olduğunu varsayalım ve biz bu şablonu, stil dosyamızın birden fazla noktasında kullanmak istiyoruz; \`@mixin\` bu durum için en uygun araçlardan bir tanesi. Üstelik, \`@mixin\`, aldığı argümanlara endeksli olarak farklı çıktılar yaratma yetisine sahip. Bu argümanlar, kullanım sırasında belirlenebileceği gibi, öntanımlı olarak da oluşturulabilir.
\`@mixin\` ile oluşturduğumuz şablonları stil kurallarımız içine yerleştirmek istediğimizde \`@include\` komutundan faydalanmak zorundayız. Daha önce değindiğimiz yapıları da kullanarak yaratacağımız bir örnekle her şeyi daha kolay anlayabiliriz:
~~~scss
@mixin prefixIt($prop, $val, $prefixes) {
  @each $prefix in $prefixes {
    -#{$prefix}-#{$prop}: $val;
  }
  #{$prop}: $val;
}

div {
  @include prefixIt(transform, transitionX(100px), ms moz webkit);
}
~~~
Bu Sass kodlarının CSS'e dönüştürülmüş hâli:
~~~css
div {
  -ms-transform: transitionX(100px);
  -moz-transform: transitionX(100px);
  -webkit-transform: transitionX(100px);
  transform: transitionX(100px);
}
~~~
Zaman zaman \`@mixin\` ifademize birden fazla argüman vermek isteyebiliriz. Bunu \`...\` ile yapabiliyoruz.
~~~scss
@mixin order($height, $selectors...) {

  @for $i from 0 to length($selectors) {
  
    @if $i == 0 {
      #{nth($selectors, 1)} {
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

@include order(140px, '.box-1', '.box-2', '.box-3')
~~~
Adım adım ilerleyerek kodu anlamaya çalışalım:
- *order* adlı \`mixin\`imizi oluştururken en son sıradaki argümanımız olan \`$selectors\`, eleman sayısı belli olmayan bir liste görevi görüyor. Böylece \`@include\` kullanarak *mixin*i çağırdığımız vakit istediğimiz kadar parametre verebiliriz.
- \`@for\` döngüsü yardımı ile, sıfırdan başlayarak \`$selectors\` listesinin eleman sayısının bir eksiğine kadar gideceğiz, çünkü \`to\` kullandık.
- \`@if\`-\`@else\` kontrol yapılarını kullanarak, her döngüde artan \`$i\` sayısını test ediyoruz. Eğer bu sayı sıfırsa \`$margin-top\` niteliğini de sıfır yapıyoruz. Sıfır değilse, \`margin-top\` niteliğinin değerini \`$i * $height\` formülüne eşitliyoruz. Bu sayede elemanlarımız alt alta diziliyorlar.
Kodumuzun CSS hâli:
~~~css
.box-1 {
  position: absolute;
  height: 140px;
  margin-top: 0;
}

.box-2 {
  position: absolute;
  height: 140px;
  margin-top: 140px;
}

.box-3 {
  position: absolute;
  height: 140px;
  margin-top: 280px;
}
~~~

### extend
\`@mixin\` kullanımına benzer bir kullanımı olan ve sıklıkla kafa karıştıran \`@extend\` yapısı, bir stil kuralının içindeyken bir başka stil kuralını kopyalamamızı olanaklı kılıyor.
~~~scss
%btn {
  padding: 0.75em 1.25em;
  border: none;
  border-radius: 8px;
  cursor: pointer; 
  &:focus {
    outline: 1px dashed darkcyan;
    outline-offset: 3px;
  }
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
}
~~~
Bütün butonlarımızda ortak olacağını düşündüğümüz özellikleri \`%btn\` altında topladık. Daha sonra butonumuzun arka plan rengine endeksli olarak selektöre özel stil kuralları yazdık. Bu selektörlerin stil şemalarındaki \`@extend %btn\` satırına dikkat edin. Bu satır sayesinde ortak özellikleri kopyalıyoruz.
*'%'* işareti, yazdığımız stil kuralının yalnızca şablon olma amacıyla orada bulunduğunu belirtiyor. Dikkat ederseniz CSS kodlarımız arasında o kod bloğu bulunmuyor:
~~~css
.btn-info, .btn-danger {
  padding: 0.75em 1.25em;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.btn-info:focus, .btn-danger:focus {
  outline: 1px dashed darkcyan;
  outline-offset: 3px;
}

.btn-danger {
  background-color: crimson;
  color: ghostwhite;
}

.btn-info {
  background-color: deepskyblue;
  color: #000;
}
~~~
### function
Stil şablonlarını belirli yerlerde kullanmak ve argümanlara bağımlı olarak farklı farklı çıktılar elde etmekten daha karmaşık işlemler gerçekleştirmek istediğimizde fonksiyonları kullanıyoruz. *'mixin'*lerle ne farkı var diye soruyor olabilirsiniz: Çoğunlukla ikisi birbirinin yerine kullanılabilir, ancak tavsiye edilen kullanım şekli; fonksiyonların değer hesaplamalarında, *'mixin'*lerin de stil şablonu yerleştirme amacıyla kullanılmasıdır. Fonksiyonlar \`@function\` kelimesi başa getirilerek tanımlanıyorlar.
Daha önce değindiğimiz konuların bazılarını da kullandığımız bir örnek:
~~~scss
$bodyBg: #343434;
$divBg: #cdcdcd;

@function contrastColor($bgcolor) {
  @if(lightness($bgcolor) < 45%) {
    @return #dfdfdf;
  }
    @return #222;
}

body {
  background: $bodyBg;
  color: contrastColor($bodyBg);
}

div {
  background: $divBg;
  color: contrastColor($divBg);
}
~~~
Önce iki değişken oluşturduk, bunlar renklerimizi tutuyorlar, daha sonra koşul bloğumuzu kullanarak bize verilecek olan arka plan rengininin **lightness** oranına göre metin rengimizi döndürdük.
CSS'e dönüştürülmüş hâli:
~~~css
body {
  background: #343434;
  color: #dfdfdf;
}

div {
  background: #cdcdcd;
  color: #222;
}
~~~
Yer yer fonksiyonlarımıza belli olmayan bir sayıda argüman vermemiz gerekebilir. Bu gibi durumlarda **...** kullandığımızı söylemiştik. Böylece fonksiyonumuza bir argüman listesi vermiş oluyoruz.
~~~scss
// ne kadar $num alacağımızı bilmiyoruz
@function sum($nums...) {

  // $sum değişkeni oluşturup sıfıra eşitliyoruz. Verilecek olan
  // argüman listesinde döngü döndükçe bu değişkenin değeri değişecek
  $sum: 0;
  
  
  @each $num in $nums {
    $sum: $sum + $num;
  }
  @return $sum;
}

.box {
  width: sum(100px, 40px, 20px);
}
~~~
CSS'e dönüştürülmüş hâli:
~~~css
.box {
  width: 160px;
}
~~~
## Sonuç Olarak
Bu yazımızda sizi ***Sass*** ile kaynaştırmaya çalıştık; kuruluma ve temel araçlara değindik. *Döngüler*, *kontrol yapıları* ve *fonksiyonlar* gibi kavramları örneklerle anlatarak, Sass dünyasının size mümkün kıldığı şeyleri görmenizi sağladığımızı düşünüyoruz.  
`)