import { ref, set } from 'firebase/database';
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

export { sendNewMassege };
