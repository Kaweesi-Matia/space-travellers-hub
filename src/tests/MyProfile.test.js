import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Profile from '../components/Profile';
import store from '../redux/configureStore';

jest.setTimeout(10000);
describe('My profile', () => {
  it('it has to Render a list', () => {
    const profile = render(
      <>
        <Provider store={store}>
          <Profile />
        </Provider>
      </>,
    );
    expect(profile).toMatchSnapshot();
  });
});
