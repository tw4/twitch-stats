import '@testing-library/jest-dom/extend-expect';
import { screen, render, act, fireEvent } from '@testing-library/react';
import { beforeEach } from '@jest/globals';
import LeftNavigation from '@/components/leftNavigation/LeftNavigation';
import { getTopStreamersList } from '../../api/index';

// mock data for streamList
jest.mock('../../api/index', () => ({
  getTopStreamersList: jest.fn(() => {
    return Promise.resolve({
      data: [
        {
          id: '123',
          user_id: '123',
          user_login: 'testUser',
          user_name: 'test',
          game_id: '123',
          game_name: 'test',
          type: 'live',
          title: 'test',
          viewer_count: 123,
          started_at: new Date(),
          language: 'test',
          thumbnail_url: 'test',
          tag_ids: ['123'],
          is_mature: false,
          tags: ['test'],
        },
      ],
    });
  }),
}));

// this code runs before all test case
beforeEach(async () => {
  await act(async () => render(<LeftNavigation />));
});

test('is most viewed stream text visible', () => {
  const mostViewedStreamText = screen.getByText('Most Viewed Stream');
  expect(mostViewedStreamText).toBeInTheDocument();
});

test('is narrow button visible', () => {
  const narrowButton = screen.getByTestId('narrow-button');
  expect(narrowButton).toBeInTheDocument();
});

test('narrow and expend button click control', () => {
  const narrowButton = screen.getByTestId('narrow-button');
  fireEvent.click(narrowButton);
  const expendButton = screen.getByTestId('expend-button');
  expect(expendButton).toBeInTheDocument();
});

test('is stream list visible', () => {
  const streamerLoginName = screen.getByText('testUser');
  expect(streamerLoginName).toBeInTheDocument();
});
