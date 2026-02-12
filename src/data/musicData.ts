export interface MusicItem {
  id: string;
  type: "single" | "playlist";
  title: string;
  image: string;
  soundcloudUrl: string;
  streamUrl?: string;
}

export const musicData: MusicItem[] = [
  // First few in specific order
  {
    id: "awakening-ep",
    type: "playlist",
    title: "Awakening EP",
    image: "/awakening.jpg",
    soundcloudUrl:
      "https://soundcloud.com/wakaan/sets/dark-matter-awakening-ep",
    streamUrl: "https://hypeddit.com/darkmatter/awakeningep",
  },
  {
    id: "brainwash-ep",
    type: "playlist",
    title: "Brainwash EP",
    image: "/brainwash.jpg",
    soundcloudUrl:
      "https://soundcloud.com/dirtysnatcharecords/sets/darkmatter-brainwashep",
    streamUrl: "https://hypeddit.com/brainwashep",
  },
  {
    id: "supersonic",
    type: "single",
    title: "Supersonic",
    image: "/supersonic.jpg",
    soundcloudUrl: "https://soundcloud.com/dirtysnatcharecords/supersonic",
    streamUrl: "https://hypeddit.com/darkmatter/dirtysnatchacarbinsupersonicdarkmatterremix",
  },
  {
    id: "in-the-shadows",
    type: "single",
    title: "In The Shadows v3",
    image: "/shadows.jpg",
    soundcloudUrl: "https://soundcloud.com/earth-hz/in-the-shadows-v3",
    streamUrl: "https://hypeddit.com/darkmatter/intheshadows",
  },
  // All other songs with Bang at the top
  {
    id: "bang",
    type: "single",
    title: "Bang",
    image: "/bang.jpg",
    soundcloudUrl: "https://soundcloud.com/noetika/bang",
    streamUrl: "https://hypeddit.com/noetikadarkmatter/bangg",
  },
  {
    id: "dsr-brainwash-mini-mix",
    type: "single",
    title: "DSR Brainwash Mini Mix",
    image: "/brainwash_mix.jpg",
    soundcloudUrl:
      "https://soundcloud.com/dirtysnatcharecords/dirtysnatcha-records-brainwawsh-minimix",
  },
  {
    id: "darkness",
    type: "single",
    title: "DARK MATTER - Darkness",
    image: "/darkness.jpg",
    soundcloudUrl: "https://soundcloud.com/darkmatterbassmusic/darkness",
    streamUrl: "https://hypeddit.com/darkmatter/darkness-1",
  },
  {
    id: "venom-flip",
    type: "single",
    title: "GHOSTEMANE - VENOM (DARK MATTER FLIP)",
    image: "/venom.jpg",
    soundcloudUrl:
      "https://soundcloud.com/darkmatterbassmusic/ghostmane-venom-dark-matter",
  },
  {
    id: "brain-tickler",
    type: "single",
    title: "AHEE - Brain Tickler (DARK MATTER Remix)",
    image: "/brain_tickler.jpg",
    soundcloudUrl:
      "https://soundcloud.com/darkmatterbassmusic/ahee-brain-tickler-dark-matter-remix",
  },
  {
    id: "where-you-at",
    type: "single",
    title: "Flux Pavilion X Conrank - Where You At (DARK MATTER Remix)",
    image: "/wya.jpg",
    soundcloudUrl:
      "https://soundcloud.com/darkmatterbassmusic/flux-pavilion-x-conrank-where-you-at-dark-matter-remix",
    streamUrl:
      "https://hypeddit.com/fluxpavilionconrankdarkmatter/whereyouatdarkmatterremix",
  },
  {
    id: "snakes-bootleg",
    type: "single",
    title: "DISTINCT MOTIVE - SNAKES (DARK MATTER BOOTLEG)",
    image: "/snakes.jpg",
    soundcloudUrl:
      "https://soundcloud.com/darkmatterbassmusic/distinct-motive-snakes-dark-matter-bootleg",
  },
  {
    id: "spaghetti-remix",
    type: "single",
    title: "Noetika - Spaghetti (DARK MATTER Remix)",
    image: "/noetspag.jpg",
    soundcloudUrl: "https://soundcloud.com/noetika/spaghetti-dark-matter-remix",
    streamUrl:
      "https://hypeddit.com/noetikadarkmatter/spaghettidarkmatterremix",
  },
  {
    id: "spaghettified",
    type: "single",
    title: "DARK MATTER - Spaghettified",
    image: "/spag.jpg",
    soundcloudUrl: "https://soundcloud.com/darkmatterbassmusic/spaghettified",
    streamUrl: "https://hypeddit.com/darkmatter/spaghettified-1",
  },
  {
    id: "evil",
    type: "single",
    title: "DARK MATTER - Evil",
    image: "/evil.jpg",
    soundcloudUrl: "https://soundcloud.com/makewavs/dark-matter-evil",
    streamUrl: "https://hypeddit.com/darkmatter/evil-1",
  },
];
