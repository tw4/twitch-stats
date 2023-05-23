import '@testing-library/jest-dom/extend-expect';
import { screen, render } from '@testing-library/react';
import ClipPage from './page';
import { act } from 'react-dom/test-utils';

jest.mock('../../../api/index', () => ({
  getClipById: jest.fn(() => {
    return Promise.resolve({
      data: [
        {
          id: '0',
          url: 'www.example.com',
          embed_url: 'www.example.com/embed_url',
          broadcaster_id: '123',
          broadcaster_name: 'testUser',
          creator_id: '342313',
          creator_name: 'testName',
          video_id: '4533524',
          game_id: '2342',
          language: 'en',
          title: 'title',
          view_count: 12532,
          created_at: '2023-01-01',
          thumbnail_url: 'www.example.com/thumbnail_url',
          duration: 30,
          vod_offset: 1231,
        },
      ],
    });
  }),
  getClipsByBroadcasterId: jest.fn(() => {
    return Promise.resolve({
      data: [
        {
          id: '123f',
          url: 'www.example.com',
          embed_url: 'www.example.com/embed_url',
          broadcaster_id: '123',
          broadcaster_name: 'testUser',
          creator_id: '342313',
          creator_name: 'testName',
          video_id: '4533524',
          game_id: '2342',
          language: 'en',
          title: 'title2',
          view_count: 125324,
          created_at: new Date(),
          thumbnail_url: 'www.example.com/thumbnail_url',
          duration: 30,
          vod_offset: 1231,
        },
      ],
    });
  }),
}));

beforeEach(async () => {
  await act(async () => {
    render(<ClipPage params={{ id: '0' }} />);
  });
});

test('is clip visible', () => {
  const clip = screen.getByTestId('clip');
  expect(clip).toBeInTheDocument();

  expect(clip).toHaveAttribute(
    'src',
    `www.example.com/embed_url&parent=${process.env.PARENT}`
  );
});

test('is clip create at visible', () => {
  const createdAt = screen.getByText('2023-01-01');
});

test('is clip title visible', () => {
  const title = screen.getByText('title');
  expect(title).toBeInTheDocument();
});

test('is clip view count visible', () => {
  const viewcount = screen.getByText('12532 views');
  expect(viewcount).toBeInTheDocument();
});

test('is other clips title visible', () => {
  const otherClipsTitle = screen.getByText('OTHER CLIPS');
  expect(otherClipsTitle);
});
