import '@testing-library/jest-dom/extend-expect'; // important for expect
import { screen, render } from '@testing-library/react';
import { beforeEach } from '@jest/globals';
import LeftNavigationItem from '@/components/leftNavigation/LeftNavigationItem';
import { Streams } from '@/types';

// mock data for stream
const stream: Streams = {
  id: '123',
  user_id: '123',
  user_login: 'test',
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
};

// this code runs before all test case
beforeEach(() => {
  render(<LeftNavigationItem streams={stream} isNarrow={false} />);
});

test('is thumbnail_url img visible', () => {
  const thumbnailImage = screen.getByAltText(stream.user_login);
  expect(thumbnailImage).toBeInTheDocument();
});

test('is streamer login name visible', () => {
  const userLoginName = screen.getByText(stream.user_name);
  expect(userLoginName).toBeInTheDocument();
});

test('is live icon visible', () => {
  const liveIcon = screen.getByTestId('live-icon');
  expect(liveIcon).toBeInTheDocument();
});

test('is stream viewer count visible', () => {
  const streamCount = screen.getByText(stream.viewer_count);
  expect(streamCount).toBeInTheDocument();
});

test('is go to streamer page link visible', () => {
  const goToStreamerPageLink = screen.getByRole('link');
  expect(goToStreamerPageLink).toBeInTheDocument();
});

test('is go to streamer page link has correct href', () => {
  const goToStreamerPageLink = screen.getByRole('link');
  expect(goToStreamerPageLink).toHaveAttribute(
    'href',
    '/streamer/' + stream.user_login
  );
});
