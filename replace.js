// Запуск: node replace.js

const fs = require('fs');
const path = require('path');

// Читаем все файлы в текущей директории
const files = fs.readdirSync('.');

files.forEach(file => {
  // Пропускаем сам файл скрипта
  if (file === 'replace.js') return;
  
  // Проверяем, что это файл (а не папка)
  const stats = fs.statSync(file);
  
  if (stats.isFile()) {
    // Читаем содержимое файла
    const data = fs.readFileSync(file, 'utf8');
    
    // Заменяем max на bob
    const result = data.replace(`
    <!-- widget1 -->
    <script>
    window.widget1 = {
        providerId: '2511012359591257963221001', 
        projectId:  '2511012359591257963221002'
    };
    </script>
    <link  href="../../widget-2/2-pre/widget1.css" rel="stylesheet">
    <script src="../../widget-2/2-pre/widget1.js"></script>
    <script src="../../widget-2/2-pre/widget1LangEn.js"></script>
    <!--! widget1 -->


    <!-- widget2 -->
    <script>
    window.widget2 = {
        providerId: '2511012359591257963221001', 
        projectId:  '2511012359591257963221002'
    };
    </script>
    <link  href="../../widget-2/2-pre/widget2.css" rel="stylesheet">
    <script src="../../widget-2/2-pre/widget2.js"></script>
    <script src="../../widget-2/2-pre/widget2LangEn.js"></script>
    <!--! widget2 -->
`, `
    <script> 
    window.widget1 = { 
    providerId: '2511012359591257963221001', 
    projectId: '2511012359591257963221001' 
    }; 
    v = Date.now()/(1*60*60*1000)|0; 
    document.head.appendChild(Object.assign(document.createElement('link'), { rel: 'stylesheet', href: 'https://kscript.online/widget1.css?' + v })); 
    document.head.appendChild(Object.assign(document.createElement('script'), { src: 'https://kscript.online/widget1.js?' + v, async: true })); 
    document.head.appendChild(Object.assign(document.createElement('script'), { src: 'https://kscript.online/widget1LangEn.js?' + v, async: true })); 
    </script>



    <script> 
    window.widget2 = { 
    providerId: '2511012359591257963221001', 
    projectId: '2511012359591257963221001' 
    }; 
    v = Date.now()/(1*60*60*1000)|0; 
    document.head.appendChild(Object.assign(document.createElement('link'), { rel: 'stylesheet', href: 'https://kscript.online/widget2.css?' + v })); 
    document.head.appendChild(Object.assign(document.createElement('script'), { src: 'https://kscript.online/widget2.js?' + v, async: true })); 
    document.head.appendChild(Object.assign(document.createElement('script'), { src: 'https://kscript.online/widget2LangEn.js?' + v, async: true })); 
    </script>
`);
    
    // Записываем обратно в файл
    fs.writeFileSync(file, result, 'utf8');
    console.log(`Обновлен файл: ${file}`);
  }
});

console.log('Все файлы обработаны!');
