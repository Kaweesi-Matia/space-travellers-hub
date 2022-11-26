import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Rockets from '../components/Rockets';
import store from '../redux/configureStore';

jest.setTimeout(10000);
describe('Rockets', () => {
  it('it has to match the snapshot', () => {
    const Rocket = render(
      <>
        <Provider store={store}>
          <Rockets />
        </Provider>
      </>,
    );
    expect(Rocket).toMatchSnapshot();
  });
});
