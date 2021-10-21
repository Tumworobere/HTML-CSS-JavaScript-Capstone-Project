const speakers = [
  {
    image: './images/speaker_01.png',
    alt: 'Speaker-1',
    name: 'Daudi Jjingo',
    designation: 'SANTHE Senior Researcher,College of Computing & College of Health Sciences, Makerere University, Kampala, Uganda',
    biography: 'Daudi Jjingo is the Programme Director/PI for the Ugandan NIH H3Africa bioinformatics training programme (BRECA). Together with the NIH and Uganda’s Infectious Diseases Institute (IDI). Jjingo earned his PhD in bioinformatics as a Fulbright Scholar in the US, having completed an MSc in bioinformatics at the University of Leeds in the UK and a BSc in biochemistry at Makerere University in Uganda. He later worked as a senior bioinformatics consultant at the CDC headquarters in Atlanta before returning to Ugand',
  },

  {
    image: './images/speaker_02.png',
    alt: 'Speaker-2',
    name: 'Daudi Twino',
    designation: 'Professor at Stanford University',
    biography: 'Daudi Twino is the Alcatel-Lucent Professor of Computer Science at Stanford.Daudi received his Bachelors degree in Computer Science and Music from Bowling Green State University in 1983 and his Ph.D. from Cornell University in 1988. Daudi was a Research Staff Member at the IBM Almaden Research Center (1988-1993) and a Professor in the EECS department at UC Berkeley (1993-2003) before joining the Stanford faculty in 2003. His research interest is in areas related to programming languages',
  },

  {
    image: './images/speaker_03.png',
    alt: 'Speaker-3',
    name: 'Annah Tumworobere',
    designation: '2014 Winner of the Grace Hopper Celebration A. Richard Newton Educator ABIE Award',
    biography: 'Dr. Annah is a gifted robotics researcher. Her academic career is highlighted by her focus on robototics and Computer Engineering at the Georgia Institute of Techno logy. She also serves as the Associate Director of Research for the Georgia Tech Institute for Robotic. Dr.Annah is also a robotics researcher at NASA’s Jet Propulsion Laboratory',
  },

  {
    image: './images/speaker_04.png',
    alt: 'Speaker-4',
    name: 'Rachel Namaara ',
    designation: 'Chief Operating Officer & Interim Chief Legal Officer at Zoom',
    biography: 'Rachel brings to Zoom an expertise in building operations and infrastructure for rapidly growing technology companies. She serves as our Chief Operating Officer.Prior to this, she was our Chief Legal Officer. Most recently before Zoom, she was SVP, General Counsel for Magento Commerce, which was acquired by Adobe in 2018.',
  },

  {
    image: './images/speaker_05.png',
    alt: 'Speaker-5',
    name: 'Linda Letaru',
    designation: 'Keynote - Writer, Poet, and a New York Times Best-Selling Author',
    biography: 'Linda is a writer, poet, and the New York Times Best-selling author of What The Road Said, Heart Talk: Poetic Wisdom for a Better Life, and Where To Begin: A Small Book about Your Power to Create Big Change. Her work is dedicated to exploring love, freedom, self-care and the power of community.She has been called the poet of her generation by Time Magazine.',
  },

  {
    image: './images/speaker_06.png',
    alt: 'Speaker-6',
    name: 'Boniface Odong',
    designation: 'Professor at University of Michigan',
    biography: 'Dr. Boniface "Bonnes" Odong is an African-American computer scientist and academic who currently serves as Clinical Associate Professor of Information at the University of Michigan, he runs https://www.wa4e.com/. And also https://freecodecamp.org',
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