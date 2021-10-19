// eslint-disable-next-line
export default (PostCls) =>
  new PostCls(
    "Html5 ve Css3 - Giriş 
export default (PostCls) => new PostCls(
  'Html5 ve Css3 - Giriş',
  ["html", "html5", "css3", "css", "web tasarım", "web kodlama", "mark-up"],
  209,
  './img/html5.svg',
  12,
  `## Html
**HTML**(**H**yperText **M**arkup **L**anguage) bir internet sitesinin içeriklerinin yaratılmasını sağlayan dildir. Örneğin, bu okuduğunuz cümleler **HTML** dili sayesinde ekranınızda bulunuyorlar. Ancak ürkmeyin, kendisi bir **programlama dili değildir**. 
Başka bir yaklaşımla anlatırsak; **HTML**, _"internet sitemizin içeriği **ne** olacak?"_ sorusuna cevap verir. Herhangi bir editörde(Word, Not Defteri) yazdığınız cümlelerden tek farkı, bu cümlelerin **HTML etiketleri** adını verdiğimiz bileşenler arasına konmasıdır. Etiketler çoğunlukla bir açılış etiketi ve bir kapanış etiketi olmak üzere ikili hâlde karşımıza çıkarlar. **Ancak HTML bir programlama dili olmadığından, içinde yapılan bir hata, ekrana **'error'** olarak yansımayacaktır**. Yani, açılan etiketi kapatmayı unutsanız bile içeriğiniz gösterilecektir. Hatta bu etiketleri kullanmadan da bir ***html*** sayfası oluşturabilirsiniz, fakat bunu yapmanın pek bir faydası olmayacaktır.
### HTML Elementleri
Bir HTML elementi; *açılış ve kapanış etiketleri ile bu etiketlerin arasına yerleştirilen içeriklerden oluşur*. 
**Örnek:**
~~~html
<h3>HTML Elementleri</h3>
~~~
- \`<h3>\` açılış etiketi
- *HTML Elementleri*
- \`</h3>\` kapanış etiketi
*"h3 nereden çıktı ya?"* sorusuna fazla fırsat vermeden kendisini zihninizden silin, o daha sonranın konusu. Şimdi sadece sözdizimine göz aşinalığı kazanmaya çalışın. Mesela bir internet sitesine gidin ve <kbd>ctrl</kbd> + <kbd>u</kbd> tuşlarına basın. Aynı işlemi, fare imlecinizi sayfa üzerinde(resimler, ve linkler haricinde) bir noktaya getirip farenizin sağ tuşuna tıkladıktan sonra *sayfa kaynağını görüntüle*yi seçerek de yapabilirsiniz.
Karşınıza korkunç bir manzara çıktıysa, korkmayın! *"Bunu yazan kişi çıldırmış olmalı."* diye de düşünmeyin. Gördüğünüz karmaşa bir insanın eseri değil, insanlar tarafından yazılmış kodların bilgisayarlarca optimize edilmiş hâli. Siz sakinliğinizi koruyun ve örnek olarak verdiğim \`h3\` elementine benzeyen şablonları ayırt etmeye ve incelemeye odaklanın.

Dikkatinizi çekmiş olabilir, bazı elementlerin kapanış etiketine gelmeden bir başka elementin açılış etiketini görüyoruz. Evet, HTML'de elementler genellikle  birbirlerinin ebeveyni/çocuğu olabilirler. Örneğin, kodlayıcılar arasında temel HTML sayfası iskeleti olarak kabul görmüş olan şablona bir göz atalım.
~~~html
<!DOCTYPE html>

<html lang="tr">
 <head>
   <meta charset="UTF-8">
   <title>Merhaba!</title>
   <link rel='stylesheet' href='./styles.css' />
 </head>
 
 <body>
   <h1>Hello World!</h1>
   <p>Oldukça basit bir paragraf.</p>
   <p class='parag'>Sınıf niteliği 'parag' değerine sahip olan bir paragraf.</p>
 </body>
</html>
~~~
Daha önce de tembihlediğim gibi, şu noktada elementlerin isimlerine ve neye yaradıklarına takılmayın, bazı elementlerin diğer elementleri nasıl kapsadıklarına odaklanın. Mesela \`html\` elementi. Gördüğünüz gibi sayfadaki bütün içerikleri kapsıyor. Ayrıca, \`html\` elementinin kapanış etiketinin ardından herhangi bir şey bulunmaması gerektiğini unutmayın. Sonra \`head\` ve \`body\` etiketlerini görüyoruz, tıpkı bir vücut tanımlanıyor gibi. \`head\` elementinde genellikle o sayfaya ait genel bilgiler ve diğer kod kaynaklarına(***script*** ve ***style***) varan linkler bulunur. Bu bölümdeki bilgiler sayfada gözükmez. \`link\` elementine dair ilginç şeyler görüyor musunuz? HTML'de bazı elementler kendinden kapanmalıdır \`body\` elementi ise sayfanın içeriğin konumlandığı yerdir.

### İlk İnternet Sitesi
Şimdi bilgisayarınızda bir klasör oluşturun, istediğiniz adı verebilirsiniz. Bu klasörün içinde de \`index.html\` ve \`styles.css\`adlı iki dosya oluşturun. \`index.html\` dosyasının içine yukarıdaki kodları yapıştırın, değişiklikleri kaydedin ve dosyanın üzerine farenizin sol tuşu ile iki kez tıklayın. HTML dosyasının bilgisayarınızdaki öntanımlı tarayıcı ile açıldığını görecekseniz. 

Tebrikler... İlk internet sayfanızı oluşturdunuz. Ve şimdi sayfaya biraz stil eklemenin vakti geldi.

## CSS
**CSS**, sayfamızdaki içerikleri, bir bakıma canlandırmaya ve şekillendirmeye olanak sağlayan dildir. Yani, *"içeriğimiz **nasıl görünecek**?"* sorusuna cevap verir.

HTML bölümünde oluşturduğumuz klasöre gidin ve \`styles.css\` adlı bir dosya oluşturun. Bu dosyanın içine aşağıdaki kodları yazın ve kaydedin. 
~~~css
body {
  background-color: black;
  color: white;
}

p {
  font-size: 20px;
}

.parag {
  text-align: center;
}
~~~

HTML dosyamızdaki elementleri nasıl kancaladığımıza odaklanın. Element isimlerini kullanabildiğimiz gibi, elementlere ait *class* gibi nitelikleri de kullanabiliyoruz.

Şimdi \`index.html\` dosyasını yeniden açın ve değişikliği görün.

## Sonuç
Giriş seviyesi için bu kadar kodlama gerekli diye düşünüyorum, bu derste size HTML ve CSS aşinalığı kazandırmaya çalıştım, sözkonusu teknolojileri ilerleyen derslerde daha detaylı işleyeceğiz.
`)
