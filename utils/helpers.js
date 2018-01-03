export const summaryDonations = (donations) => (
  donations.reduce((accumulator, value) => (accumulator + value))
);

export const  getClosest = (arr, val) => ( 
  arr.reduce((prev, curr) => (
      Math.abs(curr - val) < Math.abs(prev - val) ? curr : prev
  )));

