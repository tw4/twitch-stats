import '@testing-library/jest-dom/extend-expect';
import { screen, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import StreamPage from './page';

jest.mock('../../../api/index', () => ({
  getUserData: jest.fn(() => {
    return Promise.resolve({
      data: [
        {
          id: '123',
          login: 'test',
          display_name: 'Test',
          type: '',
          broadcaster_type: 'partner',
          description: 'test description',
          profile_image_url: 'www.example.com/profile',
          offline_image_url: 'www.example.com/offline_image_url',
          view_count: 432,
          created_at: new Date(),
        },
      ],
    });
  }),
  getClipsByBroadcasterId: jest.fn(() => {
    return Promise.resolve({
      data: [],
    });
  }),
}));

beforeEach(async () => {
  await act(async () => {
    render(<StreamPage params={{ username: 'test' }} />);
  });
});

test('is stream visible', () => {
  const stream = screen.getByTestId('stream');
  expect(stream).toBeInTheDocument();

  expect(stream).toHaveAttribute(
    'src',
    `https://player.twitch.tv/?channel=test&parent=${process.env.PARENT}`
  );
});

test('is user avatar visible', () => {
  const userAvatar = screen.getByAltText('test');
  expect(userAvatar).toBeInTheDocument();

  expect(userAvatar).toHaveAttribute('src', 'www.example.com/profile');
});

test('is verified icon visible', () => {
  const verifiedIcon = screen.getByTestId('verified');
  expect(verifiedIcon).toBeInTheDocument();
});

test('is aboue streamer text', () => {
  const aboutText = screen.getByText('About Test');
  expect(aboutText).toBeInTheDocument();
});

test('is verified-about icon visible', () => {
  const verifiedIcon = screen.getByTestId('verified-about');
  expect(verifiedIcon).toBeInTheDocument();
});

test('is user description visible', () => {
  const userDescription = screen.getByText('test description');
  expect(userDescription).toBeInTheDocument();
});

test('is other clips text visible', () => {
  const otherClips = screen.getByText('OTHER CLIPS');
  expect(otherClips).toBeInTheDocument();
});
