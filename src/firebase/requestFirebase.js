import { ref, set } from 'firebase/database';
// import { getRoomsFetch } from '../redux/roomsSlise';
import { db } from './firebase';

const sendNewMassege = async (action, user, masseges) => {
  const id = masseges.length ? masseges.length : 0;
  return await set(ref(db, 'masseges/' + id), {
    userName: user.displayName,
    userId: user.uid,
    massege: action.payload,
    userPhoto: user.photoURL,
  });
};

// const getAllRooms = async () => {
//   return await get(roomRef).then((snapshot) => {
//     return snapshot.val();
//   });
// };

// const upgradeCheckOut = async (id, room) => {
//   const upgradeRoom = {
//     ...room,
//     isCheckedIn: false,
//     guest: '',
//     checkInDate: null,
//   };
//   delete upgradeRoom.key;
//   const updates = {};
//   updates['/Rooms/' + id.payload] = upgradeRoom;
//   return await update(ref(db), updates);
// };

// const upgradeCheckIn = async (action, chosenRoom) => {
//   const upgradeRoom = {
//     ...chosenRoom,
//     isCheckedIn: true,
//     guest: action.payload.name,
//     checkInDate: action.payload.newDate,
//   };
//   console.log();
//   delete upgradeRoom.key;
//   const updates = {};
//   updates['/Rooms/' + action.payload.idInFirebase] = upgradeRoom;
//   return await update(ref(db), updates);
// };

export { sendNewMassege };
