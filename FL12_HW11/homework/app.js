let structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

let rootNode = document.getElementById('root');

(function createTree(ourStructure, node) {
  let ul = document.createElement('ul');

  for (let item of ourStructure) {
      let li = document.createElement('li');
      let text = document.createElement('div');
      let icon = document.createElement('i');
      let span = document.createElement('span');

      icon.classList.add('material-icons');
      text.appendChild(icon);
      text.appendChild(span);
      span.innerHTML = item.title;

      li.appendChild(text);
      ul.appendChild(li);

      if (item.folder) {
          text.classList.toggle('folder');
          icon.innerText = 'folder';

          text.addEventListener('click', () => {
            if(icon.innerText === 'folder'){
                icon.innerText = 'folder_open'
            } else {
                icon.innerText = 'folder'
            }
          });
          if (item.children) {
            createTree(item.children, li);
          } else {
              let empty = document.createElement('div');
              empty.classList.add('empty', 'closed');
              empty.innerText = 'Folder is empty';
              li.appendChild(empty);
          }
      } else {
          text.classList.toggle('file');
          icon.innerText = 'insert_drive_file';
          icon.classList.add('file_icon');
      }
  }
  node.appendChild(ul);
  if (ul.parentNode !== rootNode) {
      ul.classList.toggle('open');
  }
})(structure, rootNode)// DOM D: