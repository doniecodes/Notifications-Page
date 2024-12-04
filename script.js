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
    let notifications = notificationsMain.querySelectorAll('.notification');
   /*  notifications.forEach((notif)=>{
        notif.addEventListener('click', (event)=>{
            let clicked = event.target;
            if(clicked.classList.contains('private-msg')){
                console.log(clicked);
            }
        })
    }) */

    let msgBox = notificationsMain.querySelector('.msg-box');
    let privateMsg = notificationsMain.querySelector('.private-msg');
    privateMsg.addEventListener('click', ()=>{
            msgBox.classList.toggle('preview-msg');         
    })
}
messagePreview();