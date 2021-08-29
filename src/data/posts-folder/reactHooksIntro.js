export default (PostCls) => new PostCls(
  "React Hooks Giriş",
  ["react", "react hooks", "useState", "useEffect", "render"],
  765,
  "./img/react.svg",
  15,
  `## ***Hooks*** ve ***Classes***
mektup çehov çayır konuşmadım amacıyla aman sözlük uçurum kelime yük amacıyla rastgele sözlük doğa ana yoksulluk güfte rastgele tarkovsky yaren kelime hane virane zarf yakarış istesen de cümle çehov tümce uçurtma programlama omuz istesen de kodlama adı meslek arkadaş tasarım tasarım omuz neler çanak seher yeli giyemezsin kamusal mizah programlama ambar nuri bilge ceylan cellat rindane leylek nasıl sözlük acılar cellat yoksulluk kırgınmış mor hicranlar yaren şarkı uçuyor adı omuz uçurtma neler nuri bilge ceylan doğa dayı programlama nasıl türkülerle hayran haram devinim yakarış uçurtma koklamadım kodlama rindane rastgele dosyamızı uçuyor devinim çömlek beni web arkadaş hani adı kamusal mizah dosyamızı yük doğa ana deva mektup yoksulluk haram kefen seher yeli web bile doğa baba aman leylek aman aman temel senden türkülerle zarf kefen cellat arkadaş dert güfte sözlük gönül beni ölemezsin dosyamızı hangar çayır doğa dayı yalnızlık ambar ölemezsin bile para acılar senden sözcük aman çatır çutur şarkı omuz kefen yük koklamadım doğa ana gönül şefim dert konuşmadım leylek mor hicranlar acılar doğa baba.
### \`useState\`
mor hicranlar bilinen kamusal mizah haram gar çömlek tümce programlama tarkovsky kelime beni aman rindane istesen de hani uçurum tümce dosyamızı seher yeli acılar yavru senden mektup hayran adı dert gittim rindane hani omuz beni vurulmuş haram gülüm şarkı cümle sözlük hane kırgınmış temel para gittim güfte arkadaş çanak kelime rastgele web acılar yük şefim arkadaş sözcük:
~~~jsx
import { useState } from 'react';

// local state
const BGModeBtn = () => {
  const [isNight, setIsNight] = useState(false);
  
  return (
    <button
      onClick={() => setMode(!isNight)}
    >
      {
        isNight ? 'Light' : 'Night'
      } Mode
    </button>
  )
}

export default BGModeBtn;
~~~
### \`useEffect\`
yağmurla konuşmadım yakarış kırgınmış istesen de haram yoksulluk kırgınmış haram para yakarış devinim devinim temel nuri bilge ceylan çanak ambar tarkovsky programlama aman rastgele haram leylek istesen de kelime hane çanak çatır çutur programlama çehov yağmurla mor hicranlar kırgınmış programlama yakarış koklamadım seher yeli doğa ana doğa:
~~~jsx
import { useEffect } from 'react';

const alertIt = () => alert('WARNING');

const Main = () => {
  useEffect(() => {
    window.addEventListener('click', alertIt);
    
    return () => window.removeEventListener('click', alertIt)
  }, [])
  
  return (
    ...
  )
}
~~~
dayı gülüm türkülerle kelime konuşmadım türkülerle tarkovsky nuri bilge ceylan çömlek tümce öpücük böceği gar şarkı çayır çayır yağmurla deva doğa baba nuri bilge ceylan cümle seher yeli karlı rindane leylek açalım nasıl sözcük aman çeşme temel ziyan çikolata uçurum doğa baba çatır çutur gönül türkülerle haram uçuyor meslek oha virane hane rindane istesen de gittim:
~~~jsx
import { useState, useEffect } from 'react';

const Main = () => {
  const [id, setId] = useState(0);
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
    
      try {
        const res = await fetch(\`someapi/user/{id}\`);
        
        if(res.ok) {
          setUser(res.data.user);
        }
      } catch(err) {
        console.log(err);
      }
      
    }
    
    fetchData();
  }, [id]);
  
  if(!user) return <p>Henüz Kullanıcı Yok...</p>
  
  return (
    <>
      <h2>{ user.name }</h2>
      <p>{ user.age }</p>
      <p>{ user.email }</p>
    </>
  )
}
~~~
### Bu kadar mı?
**React** kullandığımızda en çok işimize yarayacak olan *hook*lar \`useState\` ve \`useEffect\` ikilisi. Ancak, birkaç tane daha *hook* var ki; kullanıldıkları vakit bize bazı faydalar(optimizasyon) sağlayabilirler.

Görevlerini anlamamız kolay olsun diye bir ***To-do*** uygulaması geliştirelim. Komut satırınızı açın ve aşağıdaki komutu yazıp <kbd>Enter</kbd>a basın.
> **Bilgisayarınızda Node.js kurulu olmalı!**
~~~sh
npx create-react-app todo-app
~~~
- \`npx\` komutu Node.js kurulumu ile birlikte geliyor.
- \`create-react-app\` komutu bir React uygulaması oluşturmak için kullandığımız komut.
- \`todo-app\` ise projemizin adı.
Projenin yaratılması internet hızınıza göre farklılık göstermekle beraber, 4-5 dk. civarı sürüyor. 
Oluşturulan *todo-app* klasörünü herhangi bir metin editörü(Örn: VS Code, Sublime Text) veya bir IDE ile açın ve *App.js* adlı dosyanın içeriğini tamamen silin. Sildiğimiz satırların yerine aşağıdaki kodları koyacağız.
~~~jsx/3,4
import {
  useState,
  useEffect,
  useMemo,
  useCallback
} from 'react';

import List, { Todo } from './List';

const initTodos = [
  {
    id: 1,
    task: 'Uykuya yat'
  },
  {
    id: 2,
    task: 'Uyanma'
  }
];

const App = () => {
  const [todoList, setTodoList] = useState(initTodos);
  const [task, setTask] = useState('');
  
  useEffect(() => {
    console.log('App bileşeni render ediliyor')
  });
  
  const handleCreate = () => {
    const newTodo = {
      id: initTodos.length + 1,
      task
    }
    
    // yeni todoyu listeye ekle
    setTodoList([...todoList, newTodo]) 
    
    // girdi kısmını temizle
    setTask('')
  }
  
  return (
    <>
      <input 
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      
      <button onClick={handleCreate}>Ekle</button>
      
      <List todoList={todoList} />
    </>
    )
}

export default App;
~~~
Gördüğünüz gibi bir de *List.js* adlı dosyamız var; hemen oluşturalım.

***List.js***:
~~~jsx
import { useEffect } from 'react';

import Task from './task'

const List = ({ todoList }) => {
  useEffect(() => {
    console.log('List bileşeni render ediliyor.');
  });
  
  return(
    <ul>
      {
        todoList.map(todo => (
          <Task
            key={todo.id}
            id={todo.id}
            task={todo.task}
          />
        ))
      }
    </ul>
  )
}

export default List;
~~~
Son olarak *Task.js* adlı dosyayı oluşturuyoruz.

***Task.js***:
~~~jsx
import { useEffect } from 'react';

const Task = ({ task }) => {
  useEffect(() => {
    console.log('Task bileşeni render ediliyor... ', task);
  });
  
  return <li>{ task }</li>
}

export default Task;
~~~
Şimdi komut pencerenizi bu klasör içinde açın ve \`npm start\` komutunu çalıştırın. 
Bu komut, bilgisayarınızdaki bir tarayıcıyı(Chrome, Firefox, Safari...) harekete geçirecek ve uygulamamızı çalıştıracak.
Açılan tarayıcı penceresinde, hangi bileşenlerin *render* edildiğini gösteren cümleleri görmek için konsolu açın. Konsolda şu cümleleri göreceksiniz:
- Task bileşeni render ediliyor... Uykuya yat
- Task bileşeni render ediliyor... Uyanma
- List bileşeni render ediliyor.
- App bileşeni render ediliyor

Yani, Task bileşeni iki kez; App ve List bileşenleri ise birer kez render ediliyor.
Şimdi \`input\` kısmına yeni bir task yazmayı deneyin ve bunu yaparken konsolu inceleyin. Yazdığımız her bir harf için aynı render işlemlerinin gerçekleştiğini göreceksiniz. Böylesine küçük çaplı bir uygulamada bir sorun oluşturmuyor olsa da, bu durum biz geliştiriciler için hiç de ideal değil. \`memo\`, \`useMemo\` ve \`useCallback\` kullanarak sorunu çözüme kavuşturabiliriz.
#### *Memoizing* işlemi
\`memo\`, bir bileşeni bir kez *render* edip hafızaya almamıza ve \`prop\`lar değişmedikçe bileşeni *render* sürecine sokmamamıza yardımcı olur. Task ve List bileşenlerimizin \`import\` ve \`export\` satırlarında yapacağımız değişiklikler şu şekilde:
**List.js**:
~~~jsx
import { useEffect, memo } from 'react';
...
export default memo(List);
~~~
**Task.js**:
~~~jsx
import { useEffect, memo } from 'react';
...
export default memo(Task)
~~~
Konsol üzerinde yaptığımız *render* sayısı testini şimdi uygularsak, her bir harf yazışımızda sadece App bileşeninin tekrar tekrar *render* edildiğini göreceksiniz. 
#### \`useMemo\` ile bir değeri hafızaya almak
Uygulamamıza arama özelliği eklemek istiyoruz, bu amaçla aranacak kelimeleri tutacak yeni bir *state* ekliyoruz. 
**App.js**:
~~~jsx
import {
  useState,
  useEffect,
  useMemo,
  useCallback
} from 'react';

import List, { Todo } from './List';

const initTodos = [
  {
    id: 1,
    task: 'Uykuya yat'
  },
  {
    id: 2,
    task: 'Uyanma'
  }
];

const App = () => {
  const [todoList, setTodoList] = useState(initTodos);
  const [task, setTask] = useState('');
  // yeni state
  const [term, setTerm] = useState('');
  
  useEffect(() => {
    console.log('App bileşeni render ediliyor')
  });
  
  // yeni fonksiyon
  const handleSearch = () => {
    setTerm(task)
  }
  
  const handleCreate = () => {
    const newTodo = {
      id: initTodos.length + 1,
      task
    }
    
    // yeni todoyu listeye ekle
    setTodoList([...todoList, newTodo]) 
    
    // girdi kısmını temizle
    setTask('')
  }
  
  const rgx = new RegExp(term, 'ig')
  // yeni fonksiyon. term'e endeksli olarak listeyi filtrelemek için
  const filteredTodoList = todoList.filter(todo => {
    console.log('Elekten geçiyor...')
    return todo.task.indexOf(rgx) > -1;
  });
  
  return (
    <>
      <input 
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      
      <button onClick={handleCreate}>Ekle</button>
      <button onClick={handleSearch}>Ara</button>
      
      <List todoList={todoList} />
    </>
    )
}

export default App;
~~~
App bileşenine odaklanabilmemiz için List ve Task bileşenlerindeki \`console.log\` satırlarını silmenizi öneriyorum. Şimdi \`input\` kısmına yeni bir *task* yazdığınızda konsolda hangi cümlelerin gözüktüğüne bakın. Basılan her bir harften sonra iki kez *Elekten geçiriliyor...* ve bir kez *App bileşeni render ediliyor* yazısını görüyoruz. Elbette böyle bir manzara bizi rahatsız ediyor. \`import\` satırını ve \`filteredTodoList\` fonksiyonunu şu şekilde güncelleyin:
~~~jsx
import {
  ...
  useMemo
} from 'react';

...

const filteredTodoList = useMemo(() => todoList.filter(todo => {
  console.log('Elekten geçiyor...')
  return todo.task.indexOf(rgx) > -1;
}), [term, todoList])
~~~
#### \`useCallback\`
deva tümce hane sözlük istesen de kefen deva kefen cellat nuri bilge ceylan mor hicranlar amacıyla gönül para arkadaş vurulmuş yaren cümle vurulmuş sözcük yaren çatı virane programlama şefim gittim devinim küçüksün çömlek yavru sözlük çanak şarkı şarkı doğa baba ambar rastgele cümle neler seher yeli çikolata kefen hani neler çayır karlı ziyan hani kamusal mizah doğa ana tümce kefen ziyan gülüm deva türkülerle nasıl acılar hani nasıl kefen gar koklamadım cellat tümce çikolata yalnızlık aman kırgınmış güfte amacıyla çeşme çömlek türkülerle uçuyor omuz yaren konuşmadım yağmurla cümle beni ziyan nasıl mektup kodlama leylek beni yoksulluk koklamadım ölemezsin yük nuri bilge ceylan tasarım şarkı haram tasarım acılar açalım uçuyor seher yeli sözcük çehov hangar devinim aman arkadaş kırgınmış çatı dosyamızı tarkovsky amacıyla yakarış açalım dosyamızı ölemezsin beni seher yeli çeşme hayran hayran güfte cümle programlama senden tarkovsky tren açalım oha mor hicranlar doğa baba arkadaş oha doğa baba uçurtma sözlük hayran beni para küçüksün temel uçurum yalnızlık doğa baba omuz yavru şarkı yaren güfte konuşmadım koklamadım mektup yoksulluk doğa ana çatı devinim güfte doğa baba çanak çayır cellat hangar yoksulluk karlı seher yeli uçuyor kodlama neler arkadaş tümce yalnızlık konuşmadım yakarış para mor hicranlar öpücük böceği tarkovsky uçurtma gönül sözcük arkadaş gar gönül açalım aman doğa baba oha yük çanak tümce tümce çatı açalım gittim doğa ana gülüm yağmurla tren haram gönül gülüm çatır çutur yakarış gönül giyemezsin cellat yaren çömlek ölemezsin çatır çutur tasarım sözlük giyemezsin çayır uçurum haram hangar kodlama haram sümbül koklamadım rastgele devinim şarkı zarf zarf aman kodlama ambar kırgınmış gülüm hayran acılar tasarım neler tarkovsky nasıl kodlama sözlük istesen de yoksulluk rindane uçurtma deva uçurum çömlek kelime uçurum kırgınmış güfte gittim hani yük konuşmadım hayran çatı devinim haram senden açalım gar programlama şarkı uçurtma yakarış çömlek bile yoksulluk uçurtma uçurum şefim uçurtma nuri bilge ceylan arkadaş uçurum hayran çehov seher yeli ziyan programlama kırgınmış arkadaş yağmurla sözlük yalnızlık arkadaş çikolata dosyamızı seher yeli rastgele küçüksün mor hicranlar uçuyor uçurum aman karlı koklamadım çatır çutur sözlük web tümce mektup bilinen hane ziyan ölemezsin rindane dosyamızı web rastgele tarkovsky senden vurulmuş adı arkadaş güfte çikolata para temel vurulmuş kelime arkadaş leylek karlı şarkı dosyamızı nuri bilge ceylan yavru yaren uçuyor dert senden sözcük sümbül tren tasarım açalım adı giyemezsin meslek acılar amacıyla haram tasarım hani şefim.
### Özetle
çanak hangar haram virane rastgele ambar tasarım gar senden doğa ana doğa ana çikolata yakarış yağmurla meslek adı bile doğa baba rindane senden çikolata senden çanak dert açalım açalım uçuyor koklamadım çanak nasıl tasarım zarf gittim şefim gittim türkülerle omuz neler rindane kırgınmış arkadaş çatır çutur sümbül kefen güfte neler yakarış giyemezsin çayır nuri bilge ceylan hani küçüksün çikolata...`
);