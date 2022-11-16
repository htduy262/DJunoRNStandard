import data from '../../../functions/home';

export const requestHomeData = () => {
  return new Promise(resolve => {
    resolve(data);
  });
};
