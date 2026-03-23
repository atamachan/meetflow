import { Event } from './types';

export const mockEvents: Event[] = [
  {
    id: 'evt-001',
    title: '渋谷ランチ集合',
    date: '2026-04-02',
    time: '12:00',
    location: '渋谷駅ハチ公前',
    attendees: ['あかり', 'しん', 'まな'],
    note: '遅れる場合はチャットで連絡してください。'
  },
  {
    id: 'evt-002',
    title: '横浜夜景さんぽ',
    date: '2026-04-05',
    time: '18:30',
    location: 'みなとみらい駅 改札前',
    attendees: ['ゆうた', 'えり'],
    note: '歩きやすい靴がおすすめです。'
  }
];

export const getEventById = (eventId: string) =>
  mockEvents.find((event) => event.id === eventId);
