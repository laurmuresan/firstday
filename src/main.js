const directorys =  [
  {
    type: 'dir',
    name: 'app',
    children: [
      {
        type: 'file',
        name: 'index.html'
      },
      {
        type: 'dir',
        name: 'js',
        children: [
          {
            type: 'file',
            name: 'main.js'
          },
          {
            type: 'file',
            name: 'app.js'
          },
          {
            type: 'file',
            name: 'misc.js'
          },
          {
            type: 'dir',
            name: 'vendor',
            children: [
              {
                type: 'file',
                name: 'jquery.js'
              },
              {
                type: 'file',
                name: 'underscore.js'
              }
            ]
          }
        ]
      },
      {
        type: 'dir',
        name: 'css',
        children: [
          {
            type: 'file',
            name: 'reset.css'
          },
          {
            type: 'file',
            name: 'main.css'
          }
        ]
      }
    ]
  }
]
function ull (directorys){
  //var ul = document.getElementsByClassName('folder-container')[0];
  var ul = document.createElement("ul");
  ul.className='folder-container';
  for (i in directorys) {
    var li = document.createElement('li');
    var li2 = document.createElement('li');
    li2.className='folder-wrapper';

    if(i=='type'){
      console.log("sunt in type");
      console.log(j);
      continue;}
    else if (i=='name'){
      console.log("sunt in name");
      console.log(j);
      continue;}
    if (i != 'children') {
      var text = document.createTextNode(directorys[i].name);
      li.appendChild(text);

      if (directorys[i].type == 'dir') {
        li.className = 'folder-item';

      }
      if (directorys[i].type == 'file') {
        li.className = 'file-item';
      }
      ul.appendChild(li);

    }
    if (directorys[i] instanceof Object) {
      li2.appendChild(ull(directorys[i]));
      //ull(directorys[i]);
    }
    ul.appendChild(li2);
  }
  return ul;
}
//document.getElementById('res').appendChild(ull(directorys));
//var words=[];

var allWords=[];

function filter(directorys) {
  var word = document.getElementById('filter').value;
  //console.log(word);

  for (j in directorys) {
    console.log(j);
    console.log(directorys[j]);

  // if(j=='type'){
  //   continue;}
  // else if (j=='name'){
  //   continue;}
  // if (j != 'children') {
      var str = '';
      str = directorys[j].name;
      if (str.indexOf(word) > -1) {
        if (directorys[j].type == 'dir') {
          //   console.log("sunt in dir");
          allWords.push(directorys[j]);
        }
        else if (directorys[j].type == 'file') {
          //   console.log("sint in file");
          allWords.push(directorys[j]);
        }
        else if (directorys[j] instanceof Object)
        {
          filter(directorys[j]);
        }
      }

      //  else if (j=='children' && directorys[j] instanceof Object) {
      //    filter(directorys[j]);
      //    //console.log("children");
      //  }
    }

  }
  return allWords;
}
function search (){
  filter(directorys);
  var ul= ull(allWords);
  document.getElementById('res').innerHTML='';
  document.getElementById('res').appendChild(ul);
  allWords=[];


  //document.getElementById('res').appendChild(ull(directorys));
}
filter(directorys);
//console.log(allWords);
search();



