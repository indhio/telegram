// import * as global from 'global.json';

const global = require("./global.json");

console.log('Telegram init');

const chatId = undefined;
// const chatId = '-1443105438';

const chats = global['chats']['byId'];
const users = global['users']['byId'];

const array = [];
const arrayPhones = [];

if (chatId) {

    const chat = chats[chatId];
    const members = chat['fullInfo']['members'];

    console.log('chat');
    console.log(chat);

    console.log('members');
    console.log(chat['fullInfo']['members']);


    members.forEach((member) => {
        const userId = member.userId;
        const fullUser = users[userId];
        array.push({
            isContact: fullUser.isContact,
            firstName: fullUser.firstName,
            lastName: fullUser.lastName,
            phoneNumber: fullUser.phoneNumber
        });
        if (fullUser.phoneNumber) {
            arrayPhones.push(fullUser.phoneNumber);
        }
    });

} else {

    const members = [];

    const ids = Reflect.ownKeys(chats);

    console.log('ids')
    console.log(ids)

    ids.forEach((chatId) => {
        const chat = chats[chatId];
        // console.log(chatId)
        console.log(chat.title)
        if (chat['fullInfo']) {
            const chatMembers = chat['fullInfo']['members'];
            console.log(chatMembers)
            members.push(...chatMembers);
        }
    });

    console.log('members')
    console.log(members)

    members.forEach((member) => {
        const userId = member.userId;
        const fullUser = users[userId];
        array.push({
            isContact: fullUser.isContact,
            firstName: fullUser.firstName,
            lastName: fullUser.lastName,
            phoneNumber: fullUser.phoneNumber
        });
        if (fullUser.phoneNumber) {
            arrayPhones.push(fullUser.phoneNumber);
        }
    });

}

console.log('array');
console.log(array);

console.log('arrayPhones');
console.log(arrayPhones);


console.log('Telegram ended');

