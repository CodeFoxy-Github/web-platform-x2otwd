var o = document.createElement('script');
(o.src =
  'https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.3.0/socket.io.slim.js'),
  (o.onload = () => {
    let n = io('https://cloudvarapi.kihtrak.com/'),
      o = 'playground',
      i =
        (window.location.hostname &&
          (o = encodeURIComponent(
            window.location.protocol + '//' + window.location.hostname
          ).replace(/\./g, '%2E')),
        n.on('init-' + o, (o) => {
          for (var n in o)
            (i[n] = JSON.parse(JSON.stringify(o[n]))),
              null == window[n] && (window[n] = o[n]);
        }),
        n.on('newVal-' + o, (o) => {
          var n = Object.keys(o)[0];
          (window[n] = o[n]), (i[n] = JSON.parse(JSON.stringify(o[n])));
        }),
        {}),
      t = (o) =>
        'number' == typeof o || 'string' == typeof o
          ? o
          : 'object' == typeof o
          ? JSON.stringify(o)
          : 'function' == typeof o
          ? o.toString()
          : o;
    setInterval(() => {
      for (var o in window)
        0 == o.indexOf('cloud_') &&
          t(i[o]) !== t(window[o]) &&
          ((i[o] =
            'object' == typeof window[o]
              ? JSON.parse(JSON.stringify(window[o]))
              : window[o]),
          n.emit('varChanged', {
            [o]:
              'function' == typeof window[o] ? window[o].toString() : window[o],
          }));
    }, 0);
  }),
  document.head.appendChild(o);
let username = '';
let lastSyncTime = 0;

document.head.appendChild(
  (($, s) => {
    $.src = s;
    return $;
  })(document.createElement('script'), 'cloud.js')
);
var test = cloud_chatMessages;
var cloud_chatMessages = [];

function addMessage(message) {
  document.getElementById('input_btr').value = '';
  cloud_chatMessages.push(`${username} : ${message}`);
  updateMessages();
}
setInterval(updateMessages, 0); // update every 5 seconds

function updateMessages() {
  let messages = cloud_chatMessages;
  let messagesElement = document.getElementById('messages');
  messagesElement.innerHTML = '';
  for (const message of messages) {
    messagesElement.innerHTML += `<h3>${message}</h3>`;
  }
  lastSyncTime = Date.now();
}
function setUsername(newUsername) {
  username = newUsername;
  fmbnsr.hidden = false;
  $('#formb3').remove();
  updateMessages();
}
const fm1bnsr = document.getElementById('formb3');
const fmbnsr = document.getElementById('formb2');
fmbnsr.hidden = true;
