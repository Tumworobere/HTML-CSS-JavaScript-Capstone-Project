const speakers = [
  {
    image: './images/speaker_01.png',
    alt: 'Speaker-1',
    name: 'Daudi Jjingo',
    designation: 'SANTHE Senior Researcher,College of Computing & College of Health Sciences, Makerere University, Kampala, Uganda',
    biography: 'Daudi Jjingo is the Programme Director/PI for the Ugandan NIH H3Africa bioinformatics training programme (BRECA).',
  },

  {
    image: './images/speaker_02.png',
    alt: 'Speaker-2',
    name: 'Daudi Twino',
    designation: 'Professor at Stanford University',
    biography: 'Daudi Twino is the Alcatel-Lucent Professor of Computer Science at Stanford.Daudi received his Bachelors degree in Computer Science and Music from Bowling Green State University in 1983 and his Ph.D. from Cornell University in 1988.',
  },

  {
    image: './images/speaker_03.png',
    alt: 'Speaker-3',
    name: 'Annah Tumworobere',
    designation: '2014 Winner of the Grace Hopper Celebration A. Richard Newton Educator ABIE Award',
    biography: 'Dr. Annah is a gifted robotics researcher. Her academic career is highlighted by her focus on robototics and Computer Engineering at the Georgia Institute of Techno logy. ',
  },

  {
    image: './images/speaker_04.png',
    alt: 'Speaker-4',
    name: 'Rachel Namaara ',
    designation: 'Chief Operating Officer & Interim Chief Legal Officer at Zoom',
    biography: 'Rachel brings to Zoom an expertise in building operations and infrastructure for rapidly growing technology companies.',
  },

  {
    image: './images/speaker_05.png',
    alt: 'Speaker-5',
    name: 'Linda Letaru',
    designation: 'Keynote - Writer, Poet, and a New York Times Best-Selling Author',
    biography: 'Linda is a writer, poet, and the New York Times Best-selling author of What The Road Said, Heart Talk: Poetic Wisdom for a Better Life, and Where To Begin: A Small Book about Your Power to Create Big Change.',
  },

  {
    image: './images/speaker_06.png',
    alt: 'Speaker-6',
    name: 'Boniface Odong',
    designation: 'Professor at University of Michigan',
    biography: 'Dr. Boniface "Bonnes" Odong is an African-American computer scientist and academic who currently serves as Clinical Associate Professor of Information at the University of Michigan.',
  },
];

const speakersContainer = document.querySelector('.speakers');

function speaker(s) {
  return `<div class="speaker mb-5 col-12 col-md-5 d-flex">
    <img src="${s.image}" alt="${s.alt}" class="img-fluid">
        <div class="speaker-info font">
        <h3 class="font-bold">${s.name}</h3> 
        <h5 class="color1">${s.designation}</h5>
        <p>${s.biography}</p>
        </div>
    </div>
 `;
}

speakersContainer.innerHTML = speakers.map((s) => speaker(s)).join('');