export const summaryDonations = (danations) => (
  danations.reduce((accumulator, value) => (accumulator + value))
);
