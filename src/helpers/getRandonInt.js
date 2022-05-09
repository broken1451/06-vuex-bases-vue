const getRandonInt = () => {
  return new Promise((resolve) => {
    const randonInt = Math.floor(Math.random() * 20 + 1);
    setTimeout(() => {
      resolve(randonInt);
    }, 2000);
  });
};

export default getRandonInt;
