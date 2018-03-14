// login/actions/index.test
// @ts-ignore
import configureMockStore, { MockStore } from 'redux-mock-store';
import { Store } from '../../../Store';
import { FacebookLogin } from './';
import * as loginTypes from '../Types';

const storeMock = configureMockStore<Store>();

describe('Facebook actions', () => {
    beforeEach(() => {
        // @ts-ignore
        storeMock.clearActions();
      });
      test('FacebookLogin returns SUCCESS when done', async () => {
        const token = 'fbTokenMock';
        const expectedReply = {
            name: 'MockName',
            picture: {
              data: {
                url: 'http://mockImageUrl/',
              },
            },
          };
          const expectedPayload = {
            name: expectedReply.name,
            picture: expectedReply.picture.data.url,
            accessToken: 'fbTokenMock',
            type: 'Facebook',
          };
          const expectedActions = [
              {
               type: loginTypes.LoginConstants.LOGIN_SUCCESS,
                payload: expectedPayload,
            },
         ];
      });
});