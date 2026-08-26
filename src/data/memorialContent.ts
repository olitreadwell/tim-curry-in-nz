/**
 * Curated content for the Tim Curry Aotearoa memorial.
 *
 * Every fact here is sourced. Nothing is invented: figures come from
 * Wikipedia's Tim Curry and Rocky Horror Show records, AudioCulture's New
 * Zealand history of the show, the 2025 Guardian interview, and the
 * obituaries written the day he died. Tim Curry never performed in New
 * Zealand, so the New Zealand story here is the role's: the touring
 * productions that reached Aotearoa in 1978, 1986 and 2010 without him.
 */

export interface TimelineEntry {
  year: string;
  title: string;
  body: string;
}

export interface TributeCard {
  outlet: string;
  headline: string;
  quote: string | null;
  url: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  credit: string;
  license: string;
  sourceUrl: string;
}

export type PressKind = 'article' | 'audio' | 'photo' | 'video';

export interface PressArticle {
  outlet: string;
  date: string;
  kind: PressKind;
  headline: string;
  quote: string;
  url: string;
}

export interface VisitSource {
  label: string;
  url: string;
}

export interface VisitImage {
  src: string;
  alt: string;
  credit: string;
  license: string;
  sourceUrl: string;
}

export interface Visit {
  year: string;
  title: string;
  date: string;
  venue: string;
  line: string;
  body: string[];
  sourceLabel: string;
  sourceUrl: string;
  extraSources?: readonly VisitSource[];
  image?: VisitImage;
}

export interface QuoteItem {
  quote: string;
  context: string;
  sourceLabel?: string;
  sourceUrl?: string;
}

export interface RecordItem {
  fact: string;
  detail: string;
  sourceLabel?: string;
  sourceUrl?: string;
}

export interface LessonItem {
  title: string;
  body: string;
  quote?: string;
  quoteSource?: string;
  sourceUrl?: string;
}

export interface OutfitLook {
  src: string;
  alt: string;
  era: string;
  caption: string;
  credit: string;
  license: string;
  sourceUrl: string;
}

export interface OutsideLink {
  label: string;
  url: string;
  blurb: string;
}

/**
 * Absolute public URL for a memorial image. Vercel serves the export at the
 * root, so images live at /images.
 *
 * @param fileName - Image file name inside public/images
 * @returns The public image URL
 */
export function getMemorialImageUrl(fileName: string): string {
  return `/images/${fileName}`;
}

export const heroCopy = {
  eyebrow: 'A memorial for Aotearoa',
  titlePre: 'Tim Curry',
  titleEm: 'in New Zealand.',
  subtitle: 'He never toured here. The role did: 1978, 1986, 2010.',
  cta: 'Read his story',
  ctaHref: '#story',
} as const;

export const firstShowCopy = {
  eyebrow: 'Aotearoa, 28 July 1978',
  title: 'The role arrived. He didn\u2019t.',
  body: [
    'New Zealand met The Rocky Horror Show for the first time in July 1978, when Stewart Macpherson\u2019s Stetson Productions toured the country with Gary Glitter as Dr Frank-N-Furter \u2014 the role Tim Curry had made five years earlier in London.',
    'It opened at Wellington\u2019s State Opera House on 28 July, played His Majesty\u2019s Theatre in Auckland for two weeks in August, and the cast recorded a new album at EMI\u2019s Lower Hutt studios, releasing "Sweet Transvestite" as a single.',
    'Tim Curry himself never performed in New Zealand. The show came three times without him \u2014 1978, 1986 and 2010 \u2014 and Aotearoa loved the role anyway.',
  ],
  sources: [
    {
      label: 'AudioCulture: Sweet Transvestite \u2014 the show in New Zealand',
      url: 'https://audioculture.co.nz/articles/sweet-transvestite-richard-o-brien-and-the-rocky-horror-show-in-new-zealand',
    },
    {
      label: 'The 1978 New Zealand cast album on Discogs',
      url: 'https://www.discogs.com/release/18836026-The-Rocky-Horror-Show-New-Zealand-Cast-Featuring-Gary-Glitter-The-Rocky-Horror-Show',
    },
  ],
  cta: 'Hear the 1978 NZ cast album',
  ctaHref:
    'https://www.discogs.com/release/18836026-The-Rocky-Horror-Show-New-Zealand-Cast-Featuring-Gary-Glitter-The-Rocky-Horror-Show',
  cardYear: '1978',
  cardPlace: 'State Opera House, Wellington \u00B7 28 July',
  cardText:
    'The first New Zealand production of the show he made famous \u2014 with a different Frank in the corset.',
} as const;

export const marqueeSongs = [
  'Sweet Transvestite',
  'The Time Warp',
  'Science Fiction Double Feature',
  'Over at the Frankenstein Place',
  'Touch-a, Touch-a, Touch-a, Touch Me',
  'Hot Patootie',
  'I\u2019m Going Home',
  'Superheroes',
] as const;

export const timelineEntries: readonly TimelineEntry[] = [
  {
    year: '1946',
    title: 'Born in Grappenhall',
    body: 'Born on 19 April 1946 in Grappenhall, Cheshire, near Warrington. Methodism, he later said, taught him to \u201Clive life simply and see it simply\u201D.',
  },
  {
    year: '1968',
    title: 'Hair, in the West End',
    body: 'His first acting job after Cambridge: the original London production of Hair, where he met Richard O\u2019Brien in the cast.',
  },
  {
    year: '1973',
    title: 'Frank-N-Furter',
    body: 'O\u2019Brien handed him the script for a new musical and told him to talk to director Jim Sharman. Curry recalled thinking: \u201CBoy, if this works, it\u2019s going to be a smash.\u201D It opened at the Royal Court Theatre Upstairs on 19 June 1973.',
  },
  {
    year: '1975',
    title: 'The Rocky Horror Picture Show',
    body: 'He reprised the role for the film, which has been in continuous release ever since \u2014 the longest-running theatrical release in film history.',
  },
  {
    year: '1978',
    title: 'The role comes to Aotearoa',
    body: 'A New Zealand tour opened at Wellington\u2019s State Opera House on 28 July with Gary Glitter as Frank-N-Furter. Curry stayed home; the show did the travelling.',
  },
  {
    year: '1981',
    title: 'Amadeus on Broadway',
    body: 'His first Tony nomination, for Best Actor in a Play, playing Mozart. Two more nominations followed: My Favorite Year in 1992 and Spamalot in 2005.',
  },
  {
    year: '1982',
    title: 'Rooster Hannigan',
    body: 'In Annie, the villain New Zealand would know from countless VHS sleepovers.',
  },
  {
    year: '1985',
    title: 'Darkness and Wadsworth',
    body: 'A double year: the Lord of Darkness in Legend, and Wadsworth the butler in Clue.',
  },
  {
    year: '1986',
    title: 'Muldoon and Crowe',
    body: 'The show\u2019s 1986 revival began in New Zealand with Daniel Abineri as Frank, a young Russell Crowe as Eddie and Dr Scott, and former prime minister Sir Robert Muldoon briefly narrating at His Majesty\u2019s Theatre, Auckland.',
  },
  {
    year: '1990',
    title: 'Pennywise',
    body: 'His terrifying clown in the TV adaptation of Stephen King\u2019s It defined a generation of nightmares \u2014 and he won a Daytime Emmy the same era as Captain Hook in Peter Pan & the Pirates.',
  },
  {
    year: '1992',
    title: 'Mr Hector',
    body: 'Home Alone 2\u2019s concierge, and Hexxus in FernGully, in the same year.',
  },
  {
    year: '1996',
    title: 'Long John Silver',
    body: 'Muppet Treasure Island, where he ad-libbed his way into Miss Piggy\u2019s heart and the film\u2019s best line.',
  },
  {
    year: '2002',
    title: 'The Bad Beginning',
    body: 'His reading of A Series of Unfortunate Events: The Bad Beginning earned a Grammy nomination for Best Spoken Word Album. His voice was the part of him that never stopped working.',
  },
  {
    year: '2007',
    title: 'King Arthur',
    body: 'Spamalot in the West End: another Olivier nomination, and one of his most loved late-career roles.',
  },
  {
    year: '2010',
    title: 'Richard O\u2019Brien tours Aotearoa',
    body: 'The show returned to New Zealand in November 2010 for five weeks, with its creator \u2014 born in Hamilton \u2014 as the Narrator in Auckland, Wellington and Christchurch.',
  },
  {
    year: '2012',
    title: 'A stroke, and a second career',
    body: 'A severe stroke in July 2012 ended the stage career and changed everything. He kept working \u2014 voice roles, appearances, a memoir \u2014 right to the end.',
  },
  {
    year: '2025',
    title: 'Vagabond',
    body: 'His memoir arrived in October 2025, with The Guardian\u2019s interview titled \u201CRisky is the best way to be.\u201D He said: \u201CI would choose risky over anything.\u201D',
  },
  {
    year: '2026',
    title: 'Toluca Lake, 25 August',
    body: 'He died peacefully at his home in Los Angeles on 25 August 2026, aged 80, with the obituaries leading on the sweet transvestite who changed film history.',
  },
];

export const aotearoaCopy = {
  eyebrow: 'Tim Curry in Aotearoa',
  title: 'The show came. He didn\u2019t.',
  body: [
    'Auckland, Wellington and Christchurch have seen The Rocky Horror Show four times now \u2014 1978, 1986, 2010 and the 2026 tour \u2014 and Tim Curry never played a New Zealand stage. Aotearoa met the role through other Franks instead.',
    'Gary Glitter wore the corset in 1978, Daniel Abineri in 1986 \u2014 in a cast that included a young Russell Crowe and, briefly, former prime minister Sir Robert Muldoon as the Narrator.',
    'The show\u2019s creator Richard O\u2019Brien grew up in Hamilton and finally brought the Time Warp home as Narrator of the 2010 tour, fifteen years before the next one followed.',
  ],
  quote: 'He never came. The role did \u2014 three times.',
  quoteSub: 'Aotearoa, land of the long white cloud',
} as const;

export const tributeCards: readonly TributeCard[] = [
  {
    outlet: 'BBC News',
    headline: 'The sweet transvestite who changed film history',
    quote: 'Curry\u2019s performance as Frank-N-Furter has gone down in film history.',
    url: 'https://www.bbc.com/news/articles/c5yd92gkk7vo',
  },
  {
    outlet: 'Variety',
    headline: 'Tim Curry, \u2018Rocky Horror Picture Show\u2019 star, dies at 80',
    quote:
      'Curry\u2019s career was defined by his wicked Dr. Frank N. Furter, the \u2018sweet transvestite\u2019.',
    url: 'https://variety.com/2026/film/obituaries-people-news/tim-curry-dead-rocky-horror-picture-show-1236843955/',
  },
  {
    outlet: 'The Independent',
    headline: 'Tim Curry, star of The Rocky Horror Picture Show, dies aged 80',
    quote:
      'Prolific actor across stage and screen, also known for Clue, Muppet Treasure Island and the Stephen King adaptation It.',
    url: 'https://www.the-independent.com/arts-entertainment/films/news/tim-curry-death-age-b2481612.html',
  },
  {
    outlet: 'The Hollywood Reporter',
    headline: 'Tim Curry, outlandish star of The Rocky Horror Picture Show, dies at 80',
    quote:
      'The three-time Tony nominee terrified audiences in Stephen King\u2019s It and was a prolific voice actor as well.',
    url: 'https://www.hollywoodreporter.com/movies/movie-news/tim-curry-dead-rocky-horror-picture-show-1236682015/',
  },
  {
    outlet: 'The Guardian',
    headline: 'Risky is the best way to be: Tim Curry on 50 years of stardom',
    quote: 'I would choose risky over anything. That\u2019s the best way to be.',
    url: 'https://www.theguardian.com/lifeandstyle/ng-interactive/2025/oct/14/risky-is-the-best-way-to-be-tim-curry-sexuality-surviving-stroke-50-years-stardom',
  },
  {
    outlet: '1News',
    headline: 'The show he made famous returns to Aotearoa',
    quote:
      'Rocky has an important place in entertaining us and keeping us together, in a way, which was never intended.',
    url: 'https://www.1news.co.nz/2025/08/11/rocky-horror-show-returns-to-nz-for-first-time-in-15-years/',
  },
];

export const pressArticles: readonly PressArticle[] = [
  {
    outlet: 'Eventfinda',
    date: '1 Nov 2010',
    kind: 'article',
    headline: 'The Rocky Horror Show, New Zealand tour 2010',
    quote:
      'The show\u2019s creator Richard O\u2019Brien will play The Narrator... it\u2019s time to celebrate this infamous adventure like never before.',
    url: 'https://www.eventfinda.co.nz/tours-festivals/2010/the-rocky-horror-show',
  },
  {
    outlet: 'AudioCulture',
    date: '24 Nov 2015',
    kind: 'article',
    headline:
      'Sweet Transvestite \u2014 Richard O\u2019Brien and The Rocky Horror Show in New Zealand',
    quote:
      'New Zealand got to see Rocky Horror Show up close for the first time in July 1978 when Stewart Macpherson\u2019s Stetson Productions put together a touring show with Gary Glitter in the central role.',
    url: 'https://audioculture.co.nz/articles/sweet-transvestite-richard-o-brien-and-the-rocky-horror-show-in-new-zealand',
  },
  {
    outlet: '1News',
    date: '11 Aug 2025',
    kind: 'article',
    headline: 'Rocky Horror Show returns to NZ for first time in 15 years',
    quote:
      'Rocky has an important place in entertaining us and keeping us together, in a way, which was never intended.',
    url: 'https://www.1news.co.nz/2025/08/11/rocky-horror-show-returns-to-nz-for-first-time-in-15-years/',
  },
  {
    outlet: 'BBC News',
    date: '26 Aug 2026',
    kind: 'article',
    headline: 'Rocky Horror star Tim Curry dies at 80',
    quote:
      'Curry first put his stamp on the character of the riotous scientist on stage in the upstairs theatre at London\u2019s Royal Court in 1973.',
    url: 'https://www.bbc.com/news/articles/c5yd92gkk7vo',
  },
];

export const booksCopy = {
  title: 'A voice that read us stories.',
  body: [
    'Tim Curry narrated dozens of audiobooks, and his reading of A Series of Unfortunate Events: The Bad Beginning earned a Grammy nomination. Generations fell asleep to that voice.',
    'His memoir Vagabond came out in October 2025, the story told the only way he ever told stories: in his own voice.',
  ],
  cta: 'Read about Vagabond',
  ctaHref: 'https://www.timcurry.co.uk/vagabond',
} as const;

export interface MusicSong {
  title: string;
  artist: string;
  audioUrl: string;
  sourceUrl: string;
}

export const musicSongs: readonly MusicSong[] = [
  {
    title: 'Sweet Transvestite',
    artist: 'Tim Curry',
    audioUrl: 'https://archive.org/download/SweetTransvestite/TimCurry-SweetTransvestite.mp3',
    sourceUrl: 'https://archive.org/details/SweetTransvestite',
  },
  {
    title: 'The Time Warp',
    artist: 'Tim Curry & the original cast',
    audioUrl: 'https://archive.org/download/rocky-horror-picture-show-soundtrack/Time%20Warp.mp3',
    sourceUrl: 'https://archive.org/details/rocky-horror-picture-show-soundtrack',
  },
  {
    title: 'Science Fiction Double Feature',
    artist: 'Tim Curry & the original cast',
    audioUrl:
      'https://archive.org/download/rocky-horror-picture-show-soundtrack/Science%20Fiction-Double%20Feature.mp3',
    sourceUrl: 'https://archive.org/details/rocky-horror-picture-show-soundtrack',
  },
  {
    title: 'Hot Patootie (Bless My Soul)',
    artist: 'Meat Loaf & the original cast',
    audioUrl:
      'https://archive.org/download/rocky-horror-picture-show-soundtrack/Hot%20Patootie%20(Bless%20My%20Soul).mp3',
    sourceUrl: 'https://archive.org/details/rocky-horror-picture-show-soundtrack',
  },
  {
    title: 'I\u2019m Going Home',
    artist: 'Tim Curry',
    audioUrl:
      'https://archive.org/download/rocky-horror-picture-show-soundtrack/I%27m%20Going%20Home.mp3',
    sourceUrl: 'https://archive.org/details/rocky-horror-picture-show-soundtrack',
  },
  {
    title: 'Touch-a, Touch-a, Touch-a, Touch Me',
    artist: 'Susan Sarandon & the original cast',
    audioUrl:
      'https://archive.org/download/rocky-horror-picture-show-soundtrack/Touch-A-Touch-A-Touch-A-Touch%20Me.mp3',
    sourceUrl: 'https://archive.org/details/rocky-horror-picture-show-soundtrack',
  },
  {
    title: 'Time Warp',
    artist: 'Glee cast (cover)',
    audioUrl: 'https://archive.org/download/tvtunes_19123/Glee%20-%20Time%20Warp.mp3',
    sourceUrl: 'https://archive.org/details/tvtunes_19123',
  },
  {
    title: 'Over at the Frankenstein Place',
    artist: 'Glee cast (cover)',
    audioUrl:
      'https://archive.org/download/tvtunes_22074/Glee%20-%20Theres%20A%20Light%20-%20Over%20At%20The%20Frankenstein%20Place.mp3',
    sourceUrl: 'https://archive.org/details/tvtunes_22074',
  },
];

export const galleryImages: readonly GalleryImage[] = [
  {
    src: getMemorialImageUrl('tim-curry-1978.jpg'),
    alt: 'Tim Curry in the Read My Lips publicity photo, 1978',
    caption: 'Read My Lips promo, 1978',
    credit: 'A&M Records',
    license: 'Public domain',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Tim_Curry_(1978_A%26M_Records_publicity_photo).jpg',
  },
  {
    src: getMemorialImageUrl('tim-curry-1979.jpg'),
    alt: 'Tim Curry in the Fearless publicity photo, 1979',
    caption: 'Fearless promo, 1979',
    credit: 'Larry Williams / A&M Records',
    license: 'Public domain',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Tim_Curry_(1979_A%26M_Records_publicity_photo).jpg',
  },
  {
    src: getMemorialImageUrl('tim-curry-1994-emmys.jpg'),
    alt: 'Tim Curry at the Emmy Awards in 1994',
    caption: 'Emmy Awards, 1994',
    credit: 'Alan Light',
    license: 'CC BY 2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Tim_Curry_(2076405967).jpg',
  },
  {
    src: getMemorialImageUrl('tim-curry-1994-emmys-bw.jpg'),
    alt: 'Tim Curry photographed at the 1994 Emmys, black and white',
    caption: 'Emmy Awards, 1994 (black and white)',
    credit: 'Alan Light',
    license: 'CC BY 2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Tim_Curry_at_the_1994_Emmys.jpg',
  },
  {
    src: getMemorialImageUrl('tim-curry-1994-governors.jpg'),
    alt: 'Tim Curry at the Governor\u2019s Ball in 1994, photographed by Alan Light',
    caption: 'Governor\u2019s Ball, 1994',
    credit: 'Alan Light',
    license: 'CC BY 2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Tim_Curry_(251555271).jpg',
  },
  {
    src: getMemorialImageUrl('tim-curry-alan-light-1994.jpg'),
    alt: 'Tim Curry with photographer Alan Light in 1994',
    caption: 'With Alan Light, 1994',
    credit: 'Alan Light',
    license: 'CC BY 2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Tim_Curry_and_Alan_Light_(2076405847).jpg',
  },
  {
    src: getMemorialImageUrl('tim-curry-01.jpg'),
    alt: 'A publicity portrait of Tim Curry',
    caption: 'Publicity portrait',
    credit: 'Publicity photo',
    license: 'Public domain',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Tim_Curry_01.jpg',
  },
  {
    src: getMemorialImageUrl('tim-curry-3x4.jpg'),
    alt: 'A three-by-four cropped portrait of Tim Curry',
    caption: 'Portrait crop',
    credit: 'Alan Light',
    license: 'CC BY 2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Tim_Curry_3x4_(cropped).jpg',
  },
  {
    src: getMemorialImageUrl('tim-curry-cropped.jpg'),
    alt: 'A cropped portrait of Tim Curry from the 1994 Emmys',
    caption: 'Portrait crop',
    credit: 'Alan Light',
    license: 'CC BY 2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Tim_Curry_cropped.jpg',
  },
  {
    src: getMemorialImageUrl('tim-curry-cropped-v2.jpg'),
    alt: 'A close crop portrait of Tim Curry',
    caption: 'Portrait crop, close',
    credit: 'Alan Light',
    license: 'CC BY 2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Tim_Curry_cropped_(cropped).jpg',
  },
  {
    src: getMemorialImageUrl('tim-curry-portrait.png'),
    alt: 'A studio portrait of Tim Curry released under CC0',
    caption: 'Studio portrait',
    credit: 'Unknown (CC0 release)',
    license: 'CC0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Tim_Curry.png',
  },
  {
    src: getMemorialImageUrl('tim-curry-portrait-cropped.png'),
    alt: 'A cropped studio portrait of Tim Curry',
    caption: 'Studio portrait, cropped',
    credit: 'Unknown (CC0 release)',
    license: 'CC0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Tim_Curry_(cropped).png',
  },
  {
    src: getMemorialImageUrl('tim-curry-spamalot.jpg'),
    alt: 'Tim Curry as King Arthur in Spamalot in London',
    caption: 'King Arthur in Spamalot, London',
    credit: 'Photo of the London production',
    license: 'CC BY 2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Spamalotlondon.jpg',
  },
  {
    src: getMemorialImageUrl('tim-curry-rocky-50th.jpg'),
    alt: 'Tim Curry at the Rocky Horror 50th Q&A in Los Angeles, 2025',
    caption: 'Rocky Horror 50th Q&A, Los Angeles, 2025',
    credit: 'Kevin Paul',
    license: 'CC BY 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Tim_Curry_-_Rocky_Horror_50th.jpg',
  },
  {
    src: getMemorialImageUrl('tim-curry-rocky-stage.jpg'),
    alt: 'Dr Frank-N-Furter on stage in a production of The Rocky Horror Show',
    caption: 'The role he created, on stage',
    credit: 'Stage production photo',
    license: 'CC BY-SA 3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Rocky_Horror_Show_02.jpg',
  },
  {
    src: getMemorialImageUrl('tim-curry-rocky-stage-2.jpg'),
    alt: 'A stage production photo of The Rocky Horror Show',
    caption: 'The Rocky Horror Show on stage',
    credit: 'Stage production photo',
    license: 'CC BY-SA 3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Rocky_Horror_Show_03.jpg',
  },
  {
    src: getMemorialImageUrl('tim-curry-strand-theatre.jpg'),
    alt: 'The Strand Theatre marquee advertising The Rocky Horror Picture Show',
    caption: 'The Strand Theatre, the film\u2019s midnight home',
    credit: 'Photo of the Strand Theatre',
    license: 'CC BY-SA 3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Strand_Theater_Rocky_Horror.jpg',
  },
  {
    src: getMemorialImageUrl('tim-curry-ua-cinema.jpg'),
    alt: 'A 1978 cinema marquee advertising The Rocky Horror Picture Show',
    caption: 'A 1978 marquee for the film',
    credit: 'Photo of the cinema marquee',
    license: 'CC BY-SA 3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:UA_Cinema_Rocky_Horror_1978.jpg',
  },
  {
    src: getMemorialImageUrl('tim-curry-dori-sal.jpg'),
    alt: 'Dori Hartley and Sal Piro at the Waverly Theater during a Rocky Horror screening',
    caption: 'Dori Hartley and Sal Piro at the Waverly Theater',
    credit: 'Photo of Rocky Horror fans',
    license: 'CC BY-SA 3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Dori_and_Sal.jpg',
  },
  {
    src: getMemorialImageUrl('tim-curry-columbia-tux.jpg'),
    alt: 'A fan recreation of the Frank-N-Furter top hat and tuxedo',
    caption: 'A fan\u2019s Frank-N-Furter top hat and tux',
    credit: 'Photo of a fan costume',
    license: 'CC BY-SA 3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Columbia_top_hat_and_tux.jpg',
  },
];

export const storyCopy = {
  eyebrow: 'Three visits in 32 years',
  title: 'First, again, and last.',
  intro: [
    'The show came to Aotearoa three times while he lived \u2014 1978, 1986 and 2010 \u2014 and Tim Curry never stepped on a New Zealand stage. The role did the travelling; the man stayed in the story.',
    'It was winter when Aotearoa first met Frank-N-Furter: 28 July 1978, Wellington\u2019s State Opera House, with Gary Glitter in the corset and the cast recording an album at EMI\u2019s Lower Hutt studios between shows.',
    'Eight years later the show came back with a future movie star in the cast \u2014 Russell Crowe as Eddie and Dr Scott \u2014 and a former prime minister, Sir Robert Muldoon, reading the Narrator\u2019s lines at His Majesty\u2019s Theatre in Auckland.',
  ],
} as const;

export const visits: readonly Visit[] = [
  {
    year: '1978',
    title: 'First: Wellington',
    date: '28 July 1978',
    venue: 'State Opera House, Wellington',
    line: 'The role\u2019s first night in Aotearoa, with Gary Glitter as Frank.',
    body: [
      'Stewart Macpherson\u2019s Stetson Productions toured The Rocky Horror Show around New Zealand with Gary Glitter in the role Tim Curry had created. It opened in Wellington, played His Majesty\u2019s Theatre in Auckland from 12 to 26 August, then Dunedin and Christchurch, with a midnight show in Wellington on 7 October.',
      'The cast recorded a new album at EMI\u2019s Lower Hutt studios between 31 July and 2 August, and "Sweet Transvestite" b/w "I\u2019m Going Home" was released as a single.',
    ],
    sourceLabel: 'AudioCulture: the show in New Zealand',
    sourceUrl:
      'https://audioculture.co.nz/articles/sweet-transvestite-richard-o-brien-and-the-rocky-horror-show-in-new-zealand',
    extraSources: [
      {
        label: 'The 1978 New Zealand cast album on Discogs',
        url: 'https://www.discogs.com/release/18836026-The-Rocky-Horror-Show-New-Zealand-Cast-Featuring-Gary-Glitter-The-Rocky-Horror-Show',
      },
    ],
    image: {
      src: getMemorialImageUrl('tim-curry-1978.jpg'),
      alt: 'Tim Curry in a publicity photo from 1978, the year the role first reached New Zealand',
      credit: 'A&M Records',
      license: 'Public domain',
      sourceUrl:
        'https://commons.wikimedia.org/wiki/File:Tim_Curry_(1978_A%26M_Records_publicity_photo).jpg',
    },
  },
  {
    year: '1986',
    title: 'Again: Muldoon and Crowe',
    date: 'June 1986',
    venue: 'His Majesty\u2019s Theatre, Auckland',
    line: 'A young Russell Crowe, and a former PM on the narrator\u2019s stool.',
    body: [
      'The Morley production was revived in 1986 beginning in New Zealand, with Daniel Abineri again as Frank-N-Furter. The cast included a 17-year-old Russell Crowe as Eddie and Dr Scott, and for a brief stint former prime minister Sir Robert Muldoon appeared as the Narrator.',
      'The same production later toured Australia and New Zealand until December 1988, with Billy T. James among the New Zealanders who took the Narrator\u2019s chair.',
    ],
    sourceLabel: 'Wikipedia: The Rocky Horror Show, Australia and New Zealand',
    sourceUrl: 'https://en.wikipedia.org/wiki/The_Rocky_Horror_Show',
    extraSources: [
      {
        label: 'AudioCulture: Muldoon and Crowe in 1986',
        url: 'https://audioculture.co.nz/articles/sweet-transvestite-richard-o-brien-and-the-rocky-horror-show-in-new-zealand',
      },
    ],
    image: {
      src: getMemorialImageUrl('tim-curry-rocky-stage.jpg'),
      alt: 'Dr Frank-N-Furter on stage in The Rocky Horror Show',
      credit: 'Stage production photo',
      license: 'CC BY-SA 3.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Rocky_Horror_Show_02.jpg',
    },
  },
  {
    year: '2010',
    title: 'Last: the creator comes home',
    date: 'November\u2013December 2010',
    venue: 'Auckland, Wellington and Christchurch',
    line: 'Five weeks of the Time Warp, with Richard O\u2019Brien narrating.',
    body: [
      'The 2009\u201310 UK touring production came to New Zealand for five weeks in November and December 2010, following a run in Seoul. Richard O\u2019Brien \u2014 born in Hamilton, living back in the Bay of Plenty \u2014 played the Narrator in Auckland, Wellington and Christchurch.',
      'Eventfinda promised audiences would be \u201Cthrust into a time warp\u201D: the show opened at Auckland\u2019s Civic on 5 November, Guy Fawkes night.',
    ],
    sourceLabel: 'Wikipedia: The Rocky Horror Show, Korea and New Zealand, 2010',
    sourceUrl: 'https://en.wikipedia.org/wiki/The_Rocky_Horror_Show',
    extraSources: [
      {
        label: 'Eventfinda: the 2010 New Zealand tour',
        url: 'https://www.eventfinda.co.nz/tours-festivals/2010/the-rocky-horror-show',
      },
    ],
    image: {
      src: getMemorialImageUrl('tim-curry-rocky-stage-2.jpg'),
      alt: 'A production photo of The Rocky Horror Show from the touring era',
      credit: 'Stage production photo',
      license: 'CC BY-SA 3.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Rocky_Horror_Show_03.jpg',
    },
  },
];

export const funnyQuotes: readonly QuoteItem[] = [
  {
    quote: 'I would choose risky over anything. That\u2019s the best way to be.',
    context: 'On a life lived one risk at a time, to The Guardian in 2025.',
    sourceLabel: 'The Guardian, October 2025',
    sourceUrl:
      'https://www.theguardian.com/lifeandstyle/ng-interactive/2025/oct/14/risky-is-the-best-way-to-be-tim-curry-sexuality-surviving-stroke-50-years-stardom',
  },
  {
    quote: 'Once you\u2019ve had pork, you never go back!',
    context: 'An ad-libbed line to Miss Piggy on the set of Muppet Treasure Island.',
    sourceLabel: 'The Guardian, October 2025',
    sourceUrl:
      'https://www.theguardian.com/lifeandstyle/ng-interactive/2025/oct/14/risky-is-the-best-way-to-be-tim-curry-sexuality-surviving-stroke-50-years-stardom',
  },
  {
    quote: 'The Methodist hymn book has got some cracking tunes.',
    context: 'On where the showmanship started, to The Guardian.',
    sourceLabel: 'The Guardian, October 2025',
    sourceUrl:
      'https://www.theguardian.com/lifeandstyle/ng-interactive/2025/oct/14/risky-is-the-best-way-to-be-tim-curry-sexuality-surviving-stroke-50-years-stardom',
  },
  {
    quote:
      'I\u2019m astonished actually at how ambitious I\u2019ve been. I didn\u2019t think of myself as ambitious at all.',
    context: 'Reading his own life back, in the interviews around Vagabond.',
    sourceLabel: 'The Guardian, October 2025',
    sourceUrl:
      'https://www.theguardian.com/lifeandstyle/ng-interactive/2025/oct/14/risky-is-the-best-way-to-be-tim-curry-sexuality-surviving-stroke-50-years-stardom',
  },
  {
    quote:
      'They\u2019re drawn to extreme behaviour \u2026 people secretly long to be a bit more explosive.',
    context: 'On why the villains he played, from Pennywise to Frank-N-Furter, fascinate people.',
    sourceLabel: 'The Guardian, October 2025',
    sourceUrl:
      'https://www.theguardian.com/lifeandstyle/ng-interactive/2025/oct/14/risky-is-the-best-way-to-be-tim-curry-sexuality-surviving-stroke-50-years-stardom',
  },
  {
    quote: 'I had a smart mouth, and I used to have to pay for it quite often.',
    context: 'On growing up in a house that demanded you fight for air.',
    sourceLabel: 'The Guardian, October 2025',
    sourceUrl:
      'https://www.theguardian.com/lifeandstyle/ng-interactive/2025/oct/14/risky-is-the-best-way-to-be-tim-curry-sexuality-surviving-stroke-50-years-stardom',
  },
];

export const recordItems: readonly RecordItem[] = [
  {
    fact: 'Three Tony nominations',
    detail:
      'Amadeus (1981) for Best Actor in a Play, then My Favorite Year (1992) and Spamalot (2005) for Best Actor in a Musical.',
    sourceLabel: 'Wikipedia, Tim Curry',
    sourceUrl: 'https://en.wikipedia.org/wiki/Tim_Curry',
  },
  {
    fact: 'Two Olivier nominations',
    detail:
      'The Pirates of Penzance (1982) and Spamalot (2006\u201307), for Best Actor in a Musical in the West End.',
    sourceLabel: 'Wikipedia, Tim Curry',
    sourceUrl: 'https://en.wikipedia.org/wiki/Tim_Curry',
  },
  {
    fact: 'A Daytime Emmy for Captain Hook',
    detail:
      'He won Best Performer in an Animated Program for Peter Pan & the Pirates (1990\u201391).',
    sourceLabel: 'Wikipedia, Tim Curry',
    sourceUrl: 'https://en.wikipedia.org/wiki/Tim_Curry',
  },
  {
    fact: 'A Grammy nomination, for reading aloud',
    detail:
      'His reading of A Series of Unfortunate Events: The Bad Beginning was nominated for Best Spoken Word Album in 2002.',
    sourceLabel: 'Wikipedia, Tim Curry',
    sourceUrl: 'https://en.wikipedia.org/wiki/Tim_Curry',
  },
  {
    fact: 'The longest-running theatrical release',
    detail:
      'The Rocky Horror Picture Show has been in continuous release since 1975 \u2014 a Guinness World Record for the film that starred him.',
    sourceLabel: 'Wikipedia, The Rocky Horror Show',
    sourceUrl: 'https://en.wikipedia.org/wiki/The_Rocky_Horror_Show',
  },
  {
    fact: 'Three rock albums in four years',
    detail:
      'Read My Lips (1978), Fearless (1979) and Simplicity (1981) \u2014 he wanted to be a singer as much as an actor.',
    sourceLabel: 'Wikipedia, Tim Curry',
    sourceUrl: 'https://en.wikipedia.org/wiki/Tim_Curry',
  },
];

export const triviaItems: readonly RecordItem[] = [
  {
    fact: 'The role was written for his voice',
    detail:
      'Richard O\u2019Brien handed him the script in London and told him to see director Jim Sharman. Curry\u2019s first thought: \u201CBoy, if this works, it\u2019s going to be a smash.\u201D',
    sourceLabel: 'Wikipedia, The Rocky Horror Show',
    sourceUrl: 'https://en.wikipedia.org/wiki/The_Rocky_Horror_Show',
  },
  {
    fact: 'Hamilton made the show possible',
    detail:
      'O\u2019Brien grew up in Hamilton, and the late-night double features at the Embassy Theatre shaped the show Curry made famous. A Weta Workshop Riff Raff statue was unveiled there in 2004.',
    sourceLabel: 'AudioCulture',
    sourceUrl:
      'https://audioculture.co.nz/articles/sweet-transvestite-richard-o-brien-and-the-rocky-horror-show-in-new-zealand',
  },
  {
    fact: 'A New Zealand PM read the Narrator\u2019s lines',
    detail:
      'Sir Robert Muldoon briefly played the Narrator in the 1986 New Zealand revival; Billy T. James took the role on the later tour.',
    sourceLabel: 'Wikipedia, The Rocky Horror Show',
    sourceUrl: 'https://en.wikipedia.org/wiki/The_Rocky_Horror_Show',
  },
  {
    fact: 'Pennywise came from a clown called Bob',
    detail:
      'His terrifying It clown was named for Robert \u201CBob\u201D Gray, the Pennywise alias in Stephen King\u2019s novel.',
    sourceLabel: 'Wikipedia, It (miniseries)',
    sourceUrl: 'https://en.wikipedia.org/wiki/It_(miniseries)',
  },
  {
    fact: 'He voiced the future Emperor',
    detail:
      'Chancellor Palpatine and Darth Sidious in Star Wars: The Clone Wars (2012\u201314), after the stroke that changed his career.',
    sourceLabel: 'Wikipedia, Tim Curry',
    sourceUrl: 'https://en.wikipedia.org/wiki/Tim_Curry',
  },
  {
    fact: 'The stroke changed everything but the voice',
    detail:
      'After a severe stroke in July 2012 he could no longer do stage work, so he kept working with the part of him that never faltered: the voice.',
    sourceLabel: 'The Guardian, October 2025',
    sourceUrl:
      'https://www.theguardian.com/lifeandstyle/ng-interactive/2025/oct/14/risky-is-the-best-way-to-be-tim-curry-sexuality-surviving-stroke-50-years-stardom',
  },
];

export const lessonItems: readonly LessonItem[] = [
  {
    title: 'Choose risky',
    body: 'He took the strangest part in a 63-seat theatre, wore the corset, spoke in the Queen\u2019s accent, and changed film history.',
    quote: 'I would choose risky over anything.',
    quoteSource: 'The Guardian, 2025',
    sourceUrl:
      'https://www.theguardian.com/lifeandstyle/ng-interactive/2025/oct/14/risky-is-the-best-way-to-be-tim-curry-sexuality-surviving-stroke-50-years-stardom',
  },
  {
    title: 'The cult is the career',
    body: 'Rocky Horror\u2019s midnight screenings kept the film alive for fifty years. He embraced the fans and the weirdness instead of running from it.',
    quote: 'It was pretty alternative. And I got to work with some very clever people.',
    quoteSource: 'The Guardian, 2025',
    sourceUrl:
      'https://www.theguardian.com/lifeandstyle/ng-interactive/2025/oct/14/risky-is-the-best-way-to-be-tim-curry-sexuality-surviving-stroke-50-years-stardom',
  },
  {
    title: 'Keep showing up',
    body: 'After a stroke ended his stage career, he kept working: voice roles, conventions, a memoir, a 50th-anniversary Q&A.',
    quote: 'I think that\u2019s what you have to do. You have to keep showing up.',
    quoteSource: 'The Guardian, 2025',
    sourceUrl:
      'https://www.theguardian.com/lifeandstyle/ng-interactive/2025/oct/14/risky-is-the-best-way-to-be-tim-curry-sexuality-surviving-stroke-50-years-stardom',
  },
  {
    title: 'A career is a mosaic',
    body: 'Stage, film, rock albums, cartoons, audiobooks. He never let one label contain him, and it doubled the size of the life.',
    quote: 'Just get me in the room and I\u2019ll take care of it.',
    quoteSource: 'The Guardian, 2025',
    sourceUrl:
      'https://www.theguardian.com/lifeandstyle/ng-interactive/2025/oct/14/risky-is-the-best-way-to-be-tim-curry-sexuality-surviving-stroke-50-years-stardom',
  },
  {
    title: 'Never stop learning',
    body: 'Cambridge, then Hair, then a 63-seat theatre with a script about a transvestite scientist. He said yes to the parts that taught him something.',
    quote:
      'I didn\u2019t know how to behave really, because I knew it was going to be incredibly formative.',
    quoteSource: 'The Guardian, 2025',
    sourceUrl:
      'https://www.theguardian.com/lifeandstyle/ng-interactive/2025/oct/14/risky-is-the-best-way-to-be-tim-curry-sexuality-surviving-stroke-50-years-stardom',
  },
  {
    title: 'Live life simply',
    body: 'Methodist values, he said, encouraged him to live simply and see it simply \u2014 the discipline behind six decades of work.',
    quote: 'I\u2019ve pretty much kept to that.',
    quoteSource: 'The Guardian, 2025',
    sourceUrl:
      'https://www.theguardian.com/lifeandstyle/ng-interactive/2025/oct/14/risky-is-the-best-way-to-be-tim-curry-sexuality-surviving-stroke-50-years-stardom',
  },
];

export const outfitLooks: readonly OutfitLook[] = [
  {
    src: getMemorialImageUrl('tim-curry-1978.jpg'),
    alt: 'Tim Curry in the 1978 Read My Lips publicity photo',
    era: '1978',
    caption: 'Read My Lips promo, 1978',
    credit: 'A&M Records',
    license: 'Public domain',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Tim_Curry_(1978_A%26M_Records_publicity_photo).jpg',
  },
  {
    src: getMemorialImageUrl('tim-curry-1979.jpg'),
    alt: 'Tim Curry in the 1979 Fearless publicity photo',
    era: '1979',
    caption: 'Fearless promo, 1979',
    credit: 'Larry Williams / A&M Records',
    license: 'Public domain',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Tim_Curry_(1979_A%26M_Records_publicity_photo).jpg',
  },
  {
    src: getMemorialImageUrl('tim-curry-1994-emmys.jpg'),
    alt: 'Tim Curry in a tuxedo at the Emmy Awards in 1994',
    era: '1994',
    caption: 'Emmy Awards, 1994',
    credit: 'Alan Light',
    license: 'CC BY 2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Tim_Curry_(2076405967).jpg',
  },
  {
    src: getMemorialImageUrl('tim-curry-1994-emmys-bw.jpg'),
    alt: 'Tim Curry at the 1994 Emmys in black and white',
    era: '1994',
    caption: 'Emmy Awards, 1994 (black and white)',
    credit: 'Alan Light',
    license: 'CC BY 2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Tim_Curry_at_the_1994_Emmys.jpg',
  },
  {
    src: getMemorialImageUrl('tim-curry-1994-governors.jpg'),
    alt: 'Tim Curry at the Governor\u2019s Ball in 1994',
    era: '1994',
    caption: 'Governor\u2019s Ball, 1994',
    credit: 'Alan Light',
    license: 'CC BY 2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Tim_Curry_(251555271).jpg',
  },
  {
    src: getMemorialImageUrl('tim-curry-spamalot.jpg'),
    alt: 'Tim Curry in full King Arthur costume in Spamalot',
    era: '2007',
    caption: 'King Arthur in Spamalot, London',
    credit: 'Photo of the London production',
    license: 'CC BY 2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Spamalotlondon.jpg',
  },
  {
    src: getMemorialImageUrl('tim-curry-portrait-cropped.png'),
    alt: 'A studio portrait of Tim Curry',
    era: '2010s',
    caption: 'Studio portrait',
    credit: 'Unknown (CC0 release)',
    license: 'CC0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Tim_Curry_(cropped).png',
  },
  {
    src: getMemorialImageUrl('tim-curry-rocky-50th.jpg'),
    alt: 'Tim Curry at the Rocky Horror 50th anniversary Q&A in 2025',
    era: '2025',
    caption: 'Rocky Horror 50th Q&A, Los Angeles, 2025',
    credit: 'Kevin Paul',
    license: 'CC BY 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Tim_Curry_-_Rocky_Horror_50th.jpg',
  },
];

export const outsideLinks: readonly OutsideLink[] = [
  {
    label: 'Tim Curry',
    url: 'https://www.timcurry.co.uk/',
    blurb: 'The official site: the roles, the music and his own telling of the story.',
  },
  {
    label: 'Vagabond, his memoir',
    url: 'https://www.timcurry.co.uk/vagabond',
    blurb: 'His 2025 memoir, told in the voice that narrated a generation to sleep.',
  },
  {
    label: 'IMDb',
    url: 'https://www.imdb.com/name/nm0000347/',
    blurb: 'Every film, show, album and voice role, catalogued.',
  },
  {
    label: 'Broadway Cares',
    url: 'https://www.broadwaycares.org/',
    blurb: 'The theatre community\u2019s charity, in the industry he came from.',
  },
  {
    label: 'The Painted Turtle',
    url: 'https://www.thepaintedturtle.org/',
    blurb: 'The camp charity whose 2010 Rocky Horror concert he joined for the Time Warp encore.',
  },
];

export const sourceLinks = [
  {
    label: 'Wikipedia: Tim Curry',
    url: 'https://en.wikipedia.org/wiki/Tim_Curry',
  },
  {
    label: 'Wikipedia: The Rocky Horror Show',
    url: 'https://en.wikipedia.org/wiki/The_Rocky_Horror_Show',
  },
  {
    label: 'Wikipedia: It (miniseries)',
    url: 'https://en.wikipedia.org/wiki/It_(miniseries)',
  },
  {
    label: 'AudioCulture: Sweet Transvestite \u2014 the show in New Zealand',
    url: 'https://audioculture.co.nz/articles/sweet-transvestite-richard-o-brien-and-the-rocky-horror-show-in-new-zealand',
  },
  {
    label: 'Eventfinda: The Rocky Horror Show, New Zealand tour 2010',
    url: 'https://www.eventfinda.co.nz/tours-festivals/2010/the-rocky-horror-show',
  },
  {
    label: '1News: Rocky Horror Show returns to NZ for first time in 15 years (2025)',
    url: 'https://www.1news.co.nz/2025/08/11/rocky-horror-show-returns-to-nz-for-first-time-in-15-years/',
  },
  {
    label: 'Discogs: The Rocky Horror Show, New Zealand cast featuring Gary Glitter',
    url: 'https://www.discogs.com/release/18836026-The-Rocky-Horror-Show-New-Zealand-Cast-Featuring-Gary-Glitter-The-Rocky-Horror-Show',
  },
  {
    label: 'The Guardian: Risky is the best way to be (2025)',
    url: 'https://www.theguardian.com/lifeandstyle/ng-interactive/2025/oct/14/risky-is-the-best-way-to-be-tim-curry-sexuality-surviving-stroke-50-years-stardom',
  },
  {
    label: 'BBC News: Rocky Horror star Tim Curry dies at 80 (2026)',
    url: 'https://www.bbc.com/news/articles/c5yd92gkk7vo',
  },
  {
    label: 'Variety: Tim Curry, Rocky Horror Picture Show star, dies at 80 (2026)',
    url: 'https://variety.com/2026/film/obituaries-people-news/tim-curry-dead-rocky-horror-picture-show-1236843955/',
  },
  {
    label: 'The Hollywood Reporter: Tim Curry dies at 80 (2026)',
    url: 'https://www.hollywoodreporter.com/movies/movie-news/tim-curry-dead-rocky-horror-picture-show-1236682015/',
  },
  {
    label: 'The Independent: Tim Curry dies aged 80 (2026)',
    url: 'https://www.the-independent.com/arts-entertainment/films/news/tim-curry-death-age-b2481612.html',
  },
  {
    label: 'NYT: Tim Curry obituary (2026)',
    url: 'https://www.nytimes.com/2026/08/26/movies/tim-curry-dead.html',
  },
  {
    label: 'The Guardian archive: Rocky Horror Show opens in London, 1973',
    url: 'https://www.theguardian.com/culture/2020/jun/23/rocky-horror-show-opens-in-london-archive-1973',
  },
  {
    label: 'Tim Curry: official site',
    url: 'https://www.timcurry.co.uk/',
  },
  {
    label: 'Vagabond, the memoir',
    url: 'https://www.timcurry.co.uk/vagabond',
  },
  {
    label: 'IMDb: Tim Curry',
    url: 'https://www.imdb.com/name/nm0000347/',
  },
  {
    label: 'Broadway Cares / Equity Fights AIDS',
    url: 'https://www.broadwaycares.org/',
  },
  {
    label: 'The Painted Turtle',
    url: 'https://www.thepaintedturtle.org/',
  },
  {
    label: 'Internet Archive: Sweet Transvestite (original recording)',
    url: 'https://archive.org/details/SweetTransvestite',
  },
  {
    label: 'Internet Archive: The Rocky Horror Picture Show soundtrack',
    url: 'https://archive.org/details/rocky-horror-picture-show-soundtrack',
  },
  {
    label: 'Internet Archive: Glee \u2014 Time Warp',
    url: 'https://archive.org/details/tvtunes_19123',
  },
  {
    label: 'Internet Archive: Glee \u2014 Over at the Frankenstein Place',
    url: 'https://archive.org/details/tvtunes_22074',
  },
  {
    label: 'Wikimedia Commons: Category Tim Curry',
    url: 'https://commons.wikimedia.org/wiki/Category:Tim_Curry',
  },
] as const;
