const useMoneyFormat = (n: number, currency = '₱'): string => {
  n = Number(n);

  const constantFormat = `${currency} ${n.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;

  return constantFormat;
};

export default useMoneyFormat;
