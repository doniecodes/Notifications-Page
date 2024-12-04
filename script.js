//  variables
let notificationsMain = document.querySelector('.notifications-main');

// calculate unread messages
let calculateUnreadMsgs = ()=>{
    let unreadMsgsTotal = document.querySelector('.total-unread');
    let unreadMsgs = notificationsMain.querySelectorAll('.unread-notif').length;
    unreadMsgsTotal.innerHTML = unreadMsgs
}
calculateUnreadMsgs();

// mark all as read
let markAllAsRead = ()=>{
    let markAllBtn = document.querySelector('.mark-all');
    let notifications = notificationsMain.querySelectorAll('.notification');
    markAllBtn.addEventListener('click', ()=>{
        notifications.forEach((notif)=>{
            notif.classList.remove('unread-notif');
            let unreadNotifTotal = document.querySelector('.total-unread');
            unreadNotifTotal.style.display = "none"
            calculateUnreadMsgs();
        })
    })
}
markAllAsRead();

// message preview and close preview
let messagePreview = ()=>{
    let msgBox = notificationsMain.querySelector('.msg-box');
    let privateMsg = notificationsMain.querySelector('.private-msg');
    privateMsg.addEventListener('click', ()=>{
            msgBox.classList.toggle('preview-msg');         
    })
}
messagePreview();

/* current date */
let currentDate = ()=>{
    let date = new Date();
   /*  let dateArray = date.split(" "); */
    console.log(date);
    let dateHTML = document.querySelector('.current-date');
    dateHTML.innerHTML = date;
}
currentDate();