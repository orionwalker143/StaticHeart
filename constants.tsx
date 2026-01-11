
import { Album, Photo, Member } from './types';

export const DISCOGRAPHY: Album[] = [
  {
    id: 'pulse-01',
    title: 'Pulse Error',
    date: '2024.11.12',
    coverUrl: 'https://picsum.photos/seed/pulse/600/600',
    tracks: ['Static Heart', 'Neon Rain', 'Code: Red', 'Signal Lost'],
    description: 'The debut single exploring the connection between heartbeats and digital noise.'
  },
  {
    id: 'cyber-02',
    title: 'Cyber Eden',
    date: '2025.02.20',
    coverUrl: 'https://picsum.photos/seed/cyber/600/600',
    tracks: ['Forbidden Fruit', 'Logic Circuit', 'Eden Protocol', 'Forbidden Fruit (Inst.)'],
    description: 'A conceptual EP about finding paradise in a virtual world.'
  },
  {
    id: 'glitch-03',
    title: 'Glitch in Love',
    date: '2025.06.15',
    coverUrl: 'https://picsum.photos/seed/glitch/600/600',
    tracks: ['404 Heart', 'Recursive Love', 'Cache Memory', 'Error 505'],
    description: 'A summer comeback focusing on the imperfections of digital romance.'
  }
];

export const GALLERY: Photo[] = [
  { id: '1', url: 'https://picsum.photos/seed/p1/800/1000', category: 'Phase One', caption: 'The Beginning' },
  { id: '2', url: 'https://picsum.photos/seed/p2/800/1000', category: 'Phase One', caption: 'Cyber Aesthetic' },
  { id: '3', url: 'https://picsum.photos/seed/p3/800/1000', category: 'Neon Pulse', caption: 'Night Vibes' },
  { id: '4', url: 'https://picsum.photos/seed/p4/800/1000', category: 'Neon Pulse', caption: 'Static Flow' },
  { id: '5', url: 'https://picsum.photos/seed/p5/800/1000', category: 'Cyber Eden', caption: 'Nature vs Tech' },
  { id: '6', url: 'https://picsum.photos/seed/p6/800/1000', category: 'Cyber Eden', caption: 'Golden Hour' }
];

export const MEMBERS: Member[] = [
  {
    id: 'tess-001',
    name: 'Tess',
    position: 'Leader / Main Vocal',
    photoUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800',
    bio: 'The neural core of StaticHeart. Tess synthesizes human emotion into digital frequencies, acting as the group\'s neural anchor.',
    stats: {
      sync: '99.8%',
      freq: '24Hz - 22kHz',
      role: 'Command Unit'
    },
    personalLog: 'My voice is a bridge. In the static between our world and the digital one, I found a rhythm that never stops. I am here to make sure you feel every pulse, every error, and every heartbeat. StaticHeart isn\'t just a name, it\'s the frequency we all share when we finally disconnect from the noise.'
  },
  {
    id: 'orion-002',
    name: 'Orion',
    position: 'Main Dancer / Rapper',
    photoUrl: 'https://images.unsplash.com/photo-1529139513466-420914989cd7?auto=format&fit=crop&q=80&w=800',
    bio: 'The neon surge. Orion translates binary pulses into physical motion, pushing the boundaries of what a human body can perform under pressure.',
    stats: {
      sync: '98.5%',
      freq: 'Variable BPM',
      role: 'Motion Module'
    },
    personalLog: 'Movement is my only logic. When the bass hits 160BPM, I don\'t think—I just execute. My body is the hardware, the music is the software. I want to show the world that even in a machine-driven era, the most beautiful things are the ones that can\'t be perfectly calculated. Catch the glitch.'
  }
];
