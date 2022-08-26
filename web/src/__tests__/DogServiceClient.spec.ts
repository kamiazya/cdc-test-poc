import path from 'node:path';
import { pactWith } from 'jest-pact';
import { HTTPMethods } from '@pact-foundation/pact/src/common/request.js';
import { DogServiceClient } from '../DogServiceClient.js';


pactWith(
  {
    consumer: 'WebApp',
    provider: 'AnimalAPI',
    dir: path.resolve(__dirname, '../../..'),
  },
  (provider) => {

    describe('Dogs API', () => {
      const DOGS_DATA = [
        {
          dog: 1,
        },
      ];

      beforeEach(() => {
        const interaction = {
          state: 'i have a list of dogs',
          uponReceiving: 'a request for dogs',
          withRequest: {
            method: HTTPMethods.GET,
            path: '/dogs',
            headers: {
              Accept: 'application/json',
            },
          },
          willRespondWith: {
            status: 200,
            headers: {
              'Content-Type': 'application/json',
            },
            body: DOGS_DATA,
          },
        };
        return provider.addInteraction(interaction);
      });

      // add expectations
      it('returns a successful body', async () => {
        const client = new DogServiceClient(provider.mockService.baseUrl);

        const dogs = await client.getMeDogs();
        expect(dogs).toEqual(DOGS_DATA);
      });
    });

    describe('Cats API', () => {
      const CATS_DATA = [{ cat: 2 }, { cat: 3 }];

      beforeEach(() => {
        return provider.addInteraction({
          state: 'i have a list of cats',
          uponReceiving: 'a request for cats with given catId',
          withRequest: {
            method: HTTPMethods.GET,
            path: '/cats',
            query: {
              'catId[]': ['2', '3'],
            },
            headers: {
              Accept: 'application/json',
            },
          },
          willRespondWith: {
            status: 200,
            headers: {
              'Content-Type': 'application/json',
            },
            body: CATS_DATA,
          },
        });
      });

      it('returns a successful body', async () => {
        const client = new DogServiceClient(provider.mockService.baseUrl);

        const cats = await client.getMeCats();
        expect(cats).toEqual(CATS_DATA);
      });
    });
  }
);
