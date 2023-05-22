import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ClipList from './ClipList';
import { Clip } from '@/types';

const mockList: Clip[] = [
  {
    broadcaster_id: '123',
    broadcaster_name: 'test',
    created_at: new Date(),
    creator_id: '312',
    creator_name: 'testUser',
    duration: 39,
    embed_url: 'www.example.com',
    game_id: '5124',
    id: '143532',
    language: 'en',
    thumbnail_url: 'www.example.com/image',
    title: 'test stream',
    url: 'www.twitch.tv/test',
    video_id: '4542534522',
    view_count: 1000,
    vod_offset: 20,
  },
];

beforeAll(() => {
  render(<ClipList clipList={mockList} />);
});

test('is clip list visible', () => {
  const clipListContainer = screen.getByTestId('clip-list-container');
  expect(clipListContainer).toBeInTheDocument();
});
