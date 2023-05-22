import '@testing-library/jest-dom/extend-expect';
import { screen, render } from '@testing-library/react';
import { Clip } from '@/types';
import { beforeEach } from '@jest/globals';
import ClipCard from '@/components/clipCard/ClipCard';
import exp from 'constants';

const mockClip: Clip = {
  id: 'AwkwardTenuousPoxPeteZarollTie',
  title: 'League of Legends',
  creator_name: 'Riot',
  thumbnail_url:
    'https://clips-media-assets2.twitch.tv/AT-cm%7C100009%7CAwkwardTenuousPoxPeteZarollTie.mp4',
  view_count: 100,
  duration: 20,
  broadcaster_name: 'Riot Games',
  game_id: '21779',
  language: 'en',
  url: 'https://clips.twitch.tv/AwkwardTenuousPoxPeteZarollTie',
  embed_url:
    'https://clips.twitch.tv/embed?clip=AwkwardTenuousPoxPeteZarollTie&parent=clipr.xyz',
  video_id: '1',
  creator_id: '1',
  vod_offset: 255,
  broadcaster_id: '1',
  created_at: new Date(),
};

beforeEach(() => {
  render(<ClipCard clip={mockClip} />);
});

test('is clip link element visible', () => {
  const LinkElement = screen.getByRole('link', { name: 'clip-card-link' });
  expect(LinkElement).toBeInTheDocument();
});

test('is clip image visible', () => {
  const clipImage = screen.getByAltText(mockClip.broadcaster_name);
  expect(clipImage).toBeInTheDocument();
});

test('is clip duration text visible', () => {
  const durationText = screen.getByText(`${mockClip.duration}s`);
  expect(durationText).toBeInTheDocument();
});

test('is clip view count visible', () => {
  const viewCount = screen.getByText(`${mockClip.view_count} view count`);
  expect(viewCount).toBeInTheDocument();
});

test('is clip created at visible', () => {
  const createdAt = screen.getByText(
    `${mockClip.created_at.toString().slice(0, 10)}`
  );
  expect(createdAt).toBeInTheDocument();
});

test('is clip title visible', () => {
  const clipTitle = screen.getByText(mockClip.title);
  expect(clipTitle).toBeInTheDocument();
});

test('is broadcaster name link', () => {
  const broadcasterNameLink = screen.getByRole('link', {
    name: 'clip-card-broadcaster-name',
  });
});

test('is broadcaster name visible', () => {
  const broadcasterName = screen.getByText(mockClip.broadcaster_name);
  expect(broadcasterName).toBeInTheDocument();
});

test('is creator Name link', () => {
  const broadcasterNameLink = screen.getByRole('link', {
    name: 'clip-card-creator-name',
  });
});

test('is creator Name visible', () => {
  const creatorName = screen.getByText(mockClip.creator_name);
  expect(creatorName).toBeInTheDocument();
});

test('go to clip detail link control', () => {
  const link = screen.getByRole('link', { name: 'clip-card-link' });
  expect(link).toHaveAttribute('href', `/clip/${mockClip.id}`);
});

test('go to broadcaster page link', () => {
  const link = screen.getByRole('link', { name: 'clip-card-broadcaster-name' });
  expect(link).toHaveAttribute(
    'href',
    `/streamer/${mockClip.broadcaster_name}`
  );
});

test('go to creator page link', () => {
  const link = screen.getByRole('link', { name: 'clip-card-creator-name' });
  expect(link).toHaveAttribute('href', `/streamer/${mockClip.creator_name}`);
});
