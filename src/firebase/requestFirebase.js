import { ref, set, update } from 'firebase/database';
import { db } from './firebase';

const sendNewMassege = async (action, user, masseges) => {
  const id = masseges ? masseges.length : 0;
  return await set(ref(db, 'masseges/' + id), {
    userName: user.displayName,
    userId: user.uid,
    massege: action.payload,
    userPhoto: user.photoURL,
  });
};

const sendActiveUser = async (user) => {
  return await set(ref(db, 'users/' + user.uid), {
    userName: user.displayName,
    userId: user.uid,
    userReadiness: true,
    userPhoto: user.photoURL,
  });
};

const sendUserUnready = async (user) => {
  return await update(ref(db, 'users/' + user.uid), {
    userReadiness: false,
  });
};

const sendUsersAnswers = async (answers, activeUserId) => {
  return await update(ref(db, 'users/' + activeUserId), { answers });
};

export { sendNewMassege, sendActiveUser, sendUserUnready, sendUsersAnswers };
