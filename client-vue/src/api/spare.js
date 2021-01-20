/**
 * Mocking client-server processing
 */
const _spares = [
  {
    id: 1611124064600,
    date: '2021-01-20',
    airline: 'cx',
    acreg: 'B-LRD',
    fltno: '653',
    part: '2197',
    desc: 'OIL',
    serial: 'NIL',
    grn: '0000000000',
    qty: 1,
    store: 'BKK',
    usedBy: 'Boonyarit'
  }
];

export default {
  getSpares(callback) {
    setTimeout(() => callback(_spares), 100);
  }
};
