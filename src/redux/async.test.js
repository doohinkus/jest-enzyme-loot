// https://api.coindesk.com/v1/bpi/currentprice.json
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import { FETCH_BITCOIN, bitcoinData }from './lootcheck.duck';
import { fetchBitCoinFromApi } from './async'


const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ bitcoin: {} });

const mockResponse = { bpi: { USD: { rate: 0 }} };

fetchMock.get('https://api.coindesk.com/v1/bpi/currentprice.json', mockResponse);

it('creates and async action to fetch the bitcoin value', () => {
  const expectedAction = {
    payload: mockResponse.bpi.USD.rate,
    type: FETCH_BITCOIN
  };
  return store.dispatch(fetchBitCoinFromApi())
    .then(() => {
      expect(store.getActions()).toEqual([expectedAction])
    })
})