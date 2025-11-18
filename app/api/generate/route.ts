import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { niche } = await request.json();

    // Generate viral video ideas based on niche
    const ideas = await generateViralIdeas(niche);

    return NextResponse.json({ ideas });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to generate ideas' },
      { status: 500 }
    );
  }
}

async function generateViralIdeas(niche: string) {
  // Viral video templates based on proven formulas
  const templates = {
    'Mystery & True Crime': [
      {
        title: 'The Unsolved Mystery That Still Haunts Investigators Today',
        hook: 'In 1987, something happened that police still can\'t explain...',
        script: `[INTRO - 0:00]\nIn 1987, something happened that police still can't explain. This is the story of a mystery that has baffled investigators for decades.\n\n[SETUP - 0:30]\nIt started as an ordinary day in a small town. Nobody could have predicted what was about to unfold. The events that followed would change everything.\n\n[RISING ACTION - 2:00]\nWitnesses reported seeing something unusual. The police were called immediately. But when they arrived, what they found defied all logic.\n\n[CLIMAX - 4:00]\nForensic experts were brought in. They analyzed every piece of evidence. Their findings only deepened the mystery.\n\n[RESOLUTION - 6:00]\nTo this day, no one has been able to explain what really happened. Some believe it was supernatural. Others think there's a logical explanation we haven't discovered yet.\n\n[OUTRO - 7:30]\nWhat do you think happened? Leave your theories in the comments below.`,
        thumbnailIdea: 'Dark, mysterious image with silhouette of figure. Bold yellow text: "POLICE CAN\'T EXPLAIN THIS". Red arrow pointing to mysterious element.',
        tags: ['mystery', 'unsolved', 'true crime', 'investigation', 'paranormal'],
        estimatedViews: '500K-2M'
      },
      {
        title: '5 Disturbing Cases That Were Solved Years Later',
        hook: 'These cold cases were thought to be unsolvable... until now.',
        script: `[INTRO - 0:00]\nThese cold cases were thought to be unsolvable... until now. Today we're counting down 5 disturbing cases that were finally solved years later.\n\n[CASE 5 - 0:45]\nIn 2003, a small town was shocked by a disappearance. For 15 years, no one knew what happened. Then in 2018, a breakthrough came from the most unexpected source.\n\n[CASE 4 - 2:30]\nThis 1995 case stumped detectives. The evidence didn't add up. But new DNA technology revealed a shocking truth.\n\n[CASE 3 - 4:15]\nFor decades, this mystery haunted a community. Multiple suspects. No arrests. Until a confession letter arrived 20 years later.\n\n[CASE 2 - 6:00]\nAdvanced forensics finally caught up with this criminal. What seemed like a perfect crime was actually full of evidence they couldn't detect in the 90s.\n\n[CASE 1 - 7:45]\nThe most shocking case on this list. A twist no one saw coming. Justice was finally served after 25 years.\n\n[OUTRO - 9:30]\nWhich case shocked you the most? Let me know in the comments.`,
        thumbnailIdea: 'Split screen showing "COLD CASE" file folder on left, "SOLVED!" stamp on right. Dramatic red and black color scheme.',
        tags: ['true crime', 'cold case', 'solved mysteries', 'detective', 'forensics'],
        estimatedViews: '800K-3M'
      }
    ],
    'Top 10 Lists': [
      {
        title: 'Top 10 Things That Were BANNED for Shocking Reasons',
        hook: 'Number 3 was banned because someone actually died using it...',
        script: `[INTRO - 0:00]\nNumber 3 was banned because someone actually died using it. Today we're counting down the top 10 things that were banned for shocking reasons.\n\n[#10 - 0:30]\nThis everyday item seems harmless. But in 2015, it was banned in 12 countries. The reason? It caused an international incident.\n\n[#9 - 1:45]\nYou won't believe this was ever legal. When authorities discovered what people were doing with it, they banned it immediately.\n\n[#8 - 3:00]\nThis invention seemed revolutionary. Until the side effects started appearing. Now it's completely illegal worldwide.\n\n[#7 - 4:15]\nA seemingly innocent product that sparked massive controversy. The ban came after public outcry.\n\n[#6 - 5:30]\nThis was a cultural phenomenon. Millions of people used it. Then scientists made a terrifying discovery.\n\n[#5 - 6:45]\nThe company fought the ban for years. But the evidence was overwhelming. It's now forbidden in over 50 countries.\n\n[#4 - 8:00]\nThis caused an environmental disaster. The ban came too late to prevent permanent damage.\n\n[#3 - 9:15]\nAs I mentioned at the start, someone died. The incident was so horrific, governments worldwide took immediate action.\n\n[#2 - 10:30]\nThis shocked the world when it was banned. Even today, people debate whether the ban was necessary.\n\n[#1 - 11:45]\nThe most controversial ban in history. You probably still see people breaking this law today.\n\n[OUTRO - 13:00]\nWhich one shocked you most? Comment below!`,
        thumbnailIdea: 'Bright red background with large yellow text "BANNED!" Multiple small images of items arranged around text. Shocked face emoji.',
        tags: ['top 10', 'banned', 'illegal', 'shocking', 'countdown'],
        estimatedViews: '1M-5M'
      },
      {
        title: 'Top 10 Places You\'re NOT ALLOWED to Visit',
        hook: 'If you try to visit #1, you could face 10 years in prison...',
        script: `[INTRO - 0:00]\nIf you try to visit number 1, you could face 10 years in prison. These are the top 10 places you're NOT allowed to visit.\n\n[#10 - 0:40]\nThis island looks like paradise. But there's a reason no one goes there. The government has it under total lockdown.\n\n[#9 - 2:00]\nLocated in the middle of a major city, yet completely off-limits. Armed guards protect this location 24/7.\n\n[#8 - 3:20]\nScientists work here on classified projects. Trespassers are detected immediately and removed by force.\n\n[#7 - 4:40]\nThis natural wonder is too dangerous for humans. Dozens have tried to visit. Many never returned.\n\n[#6 - 6:00]\nA entire town that's forbidden. If you get too close, you'll be escorted away by military personnel.\n\n[#5 - 7:20]\nThis location contains secrets that governments don't want you to know about. Access is strictly forbidden.\n\n[#4 - 8:40]\nEven with permission, visiting here could kill you. The environment is that hostile.\n\n[#3 - 10:00]\nSatellite imagery of this place is censored. That's how secretive it is.\n\n[#2 - 11:20]\nTourists try to sneak in every year. All are caught and face serious consequences.\n\n[#1 - 12:40]\nThe most restricted place on Earth. 10 years in prison for trespassing. Military will use force if necessary.\n\n[OUTRO - 14:00]\nWould you risk visiting any of these? Let me know below!`,
        thumbnailIdea: 'Ominous restricted area with "NO ENTRY" sign. Military fence in foreground. Bold text: "10 YEARS IN PRISON!" Red warning symbols.',
        tags: ['top 10', 'forbidden places', 'restricted areas', 'secret locations', 'travel'],
        estimatedViews: '2M-8M'
      }
    ],
    'Horror Stories': [
      {
        title: 'I Found Something Terrifying in My New House',
        hook: 'I thought it was a dream. Then I found the scratches on my door...',
        script: `[INTRO - 0:00]\nI thought it was a dream. Then I found the scratches on my door. This is my story.\n\n[NIGHT 1 - 1:00]\nThe first night in my new house was quiet. Too quiet. Around 3 AM, I heard something in the walls. Scratching sounds.\n\n[DISCOVERY - 2:30]\nI tried to ignore it. But the sounds got louder. I grabbed my phone and turned on the flashlight. That's when I saw them - scratches on my bedroom door. From the inside.\n\n[INVESTIGATION - 4:00]\nThe next day, I checked the house. Every room. Nothing seemed wrong. But that night, the scratching returned. Louder this time.\n\n[THE FIND - 5:30]\nI couldn't sleep. I followed the sound to the basement. Behind an old shelf, I found a door. A door that wasn't on the house plans.\n\n[CLIMAX - 7:00]\nI opened it. The smell hit me first. Then I saw what was inside. I immediately called the police.\n\n[RESOLUTION - 8:30]\nWhat the police found explained everything. And made everything worse. I moved out the next day.\n\n[OUTRO - 10:00]\nI'll never forget what I saw in that room. Some houses hold dark secrets.`,
        thumbnailIdea: 'Dark hallway with partially open door. Eerie light from inside. Large text: "WHAT I FOUND..." Face with shocked expression in corner.',
        tags: ['horror', 'scary story', 'true horror', 'creepy', 'nightmare'],
        estimatedViews: '600K-2.5M'
      }
    ],
    'Facts & Knowledge': [
      {
        title: '50 Mind-Blowing Facts That Sound Fake But Are 100% True',
        hook: 'Fact #27 completely changed how I see the world...',
        script: `[INTRO - 0:00]\nFact number 27 completely changed how I see the world. Here are 50 mind-blowing facts that sound fake but are 100% true.\n\n[FACTS 1-10 - 0:30]\nDid you know that honey never expires? Archaeologists have found 3000-year-old honey that's still edible.\n\nBananas are berries, but strawberries aren't.\n\nYou could fit all the planets in our solar system between Earth and the Moon.\n\nOctopuses have three hearts.\n\nThe human brain uses 20% of your body's energy but only makes up 2% of your weight.\n\n[Continue with rapid-fire facts...]\n\n[FACT #27 - 6:30]\nAnd here's number 27 - the one that blew my mind. There are more possible games of chess than there are atoms in the observable universe. Think about that.\n\n[MORE FACTS - 7:00]\n[Continue with remaining facts...]\n\n[OUTRO - 12:00]\nWhich fact surprised you most? Comment the number below!`,
        thumbnailIdea: 'Brain exploding emoji or image. Text: "50 FACTS THAT SEEM IMPOSSIBLE" in bold, colorful letters. Question marks scattered around.',
        tags: ['facts', 'educational', 'mind blowing', 'science', 'knowledge'],
        estimatedViews: '3M-10M'
      }
    ],
    'Motivation & Self-Improvement': [
      {
        title: 'Why You\'re Not Successful Yet (The Brutal Truth)',
        hook: 'Most people will never hear this. But you need to...',
        script: `[INTRO - 0:00]\nMost people will never hear this. But you need to. This is why you're not successful yet - the brutal truth.\n\n[REASON 1 - 0:45]\nYou're waiting for the perfect moment. Here's the truth: it doesn't exist. Every successful person started before they were ready.\n\n[REASON 2 - 2:00]\nYou're consuming, not creating. You watch videos about success instead of building your own. Knowledge without action is worthless.\n\n[REASON 3 - 3:15]\nYou care too much what others think. While you're worried about judgment, successful people are failing forward.\n\n[REASON 4 - 4:30]\nYou don't have a system. Motivation fades. Systems last forever. Successful people build systems.\n\n[REASON 5 - 5:45]\nYou quit right before the breakthrough. Most people give up 6 months before success would have come.\n\n[THE SOLUTION - 7:00]\nHere's what you need to do starting today. Step 1: Pick ONE goal. Step 2: Work on it daily. Step 3: Don't stop for 90 days.\n\n[OUTRO - 9:00]\nSuccess isn't complicated. It's simple. But simple isn't easy. The question is: are you willing to do what's simple?`,
        thumbnailIdea: 'Split image: left side showing unmotivated person, right side showing successful person. Large text: "THE BRUTAL TRUTH" in aggressive font.',
        tags: ['motivation', 'self improvement', 'success', 'mindset', 'productivity'],
        estimatedViews: '800K-3M'
      }
    ],
    'History & Documentary': [
      {
        title: 'The Forgotten Civilization That Was More Advanced Than We Are',
        hook: 'They had technology we still can\'t replicate today...',
        script: `[INTRO - 0:00]\nThey had technology we still can't replicate today. This is the story of a forgotten civilization that was more advanced than we are.\n\n[DISCOVERY - 1:00]\nIn the 1900s, archaeologists discovered something that shouldn't exist. Ancient ruins with technology that defies explanation.\n\n[THE EVIDENCE - 2:30]\nThey had advanced mathematics. Astronomical knowledge that seems impossible without telescopes. Engineering that modern architects struggle to understand.\n\n[THE MYSTERY - 4:00]\nHow did they do it? Some structures are built with such precision that we couldn't recreate them today without computer-aided design.\n\n[THEORIES - 6:00]\nScientists have multiple theories. But none fully explain the evidence. Some suggest knowledge lost to time. Others propose even more radical ideas.\n\n[THE DISAPPEARANCE - 8:00]\nThen suddenly, they vanished. An entire advanced civilization - gone. What happened to them?\n\n[OUTRO - 10:00]\nCould this happen to us? Are we at risk of losing our technology like they did? Let me know your thoughts below.`,
        thumbnailIdea: 'Ancient ruins with futuristic overlay or hologram. Text: "MORE ADVANCED THAN US?" Archaeological imagery with mysterious symbols.',
        tags: ['history', 'ancient civilizations', 'documentary', 'mystery', 'archaeology'],
        estimatedViews: '1M-4M'
      }
    ],
    'Technology & AI': [
      {
        title: 'AI Just Did Something That Scientists Said Was Impossible',
        hook: 'This changes everything we thought we knew about artificial intelligence...',
        script: `[INTRO - 0:00]\nThis changes everything we thought we knew about artificial intelligence. AI just did something that scientists said was impossible.\n\n[THE BREAKTHROUGH - 0:45]\nLast week, researchers published findings that shocked the scientific community. An AI system accomplished something that was theoretically impossible.\n\n[WHAT IT MEANS - 2:00]\nThis isn't just about better chatbots or image generators. This breakthrough suggests AI might be developing capabilities we never programmed.\n\n[THE IMPLICATIONS - 3:30]\nExperts are divided. Some see unlimited potential. Others are sounding alarms. Both agree: this changes everything.\n\n[THE FUTURE - 5:00]\nWithin the next 5 years, this technology could revolutionize medicine, science, and daily life. Or it could pose risks we're not prepared for.\n\n[WHAT YOU NEED TO KNOW - 7:00]\nHere's how this will affect your life. Jobs will change. Education will transform. The way we solve problems will never be the same.\n\n[OUTRO - 9:00]\nAre you excited or concerned? The future is coming faster than we thought.`,
        thumbnailIdea: 'Glowing AI brain or circuit pattern. Large text: "SCIENTISTS: IMPOSSIBLE!" with shocked face emoji. Futuristic blue and purple colors.',
        tags: ['AI', 'technology', 'artificial intelligence', 'future', 'science'],
        estimatedViews: '1.5M-6M'
      }
    ],
    'Finance & Money': [
      {
        title: '7 Ways Rich People Make Money While They Sleep',
        hook: 'Method #4 is how millionaires make $10K per month on autopilot...',
        script: `[INTRO - 0:00]\nMethod number 4 is how millionaires make $10,000 per month on autopilot. These are 7 ways rich people make money while they sleep.\n\n[METHOD 1 - 0:45]\nDividend investing. Rich people buy stocks that pay them quarterly. Reinvest dividends. Watch it compound. The wealthy have been doing this for centuries.\n\n[METHOD 2 - 2:00]\nReal estate rental income. Buy property. Rent it out. Hire property management. Collect checks monthly. Scale to multiple properties.\n\n[METHOD 3 - 3:15]\nDigital products. Create once. Sell forever. E-books, courses, templates. No inventory. No shipping. Pure profit.\n\n[METHOD 4 - 4:30]\nHere's the big one. High-yield savings and bonds. Millionaires keep millions in high-interest accounts. 5% of $2 million is $100K annually. That's $8,300 per month doing nothing.\n\n[METHOD 5 - 6:00]\nIndex funds. Set it and forget it. Average 10% annually over time. Rich people invest consistently and ignore market noise.\n\n[METHOD 6 - 7:15]\nBusiness systems. Build businesses that run without you. Hire management. Create processes. Own the system, not the job.\n\n[METHOD 7 - 8:30]\nRoyalties. Write a book. Create music. Invent something. Patent it. Get paid forever.\n\n[OUTRO - 10:00]\nWhich method will you start with? Comment below!`,
        thumbnailIdea: 'Person sleeping peacefully with money raining down. Text: "MAKE MONEY WHILE SLEEPING" with dollar signs. Green and gold color scheme.',
        tags: ['passive income', 'money', 'finance', 'wealth', 'investing'],
        estimatedViews: '2M-7M'
      }
    ],
    'Psychology & Mind': [
      {
        title: '10 Psychological Tricks to Read Anyone Instantly',
        hook: 'Trick #7 is used by FBI agents in every interrogation...',
        script: `[INTRO - 0:00]\nTrick number 7 is used by FBI agents in every interrogation. Here are 10 psychological tricks to read anyone instantly.\n\n[TRICK 1 - 0:45]\nWatch their feet. When someone's feet point away from you during conversation, they want to leave. Their body reveals what their words hide.\n\n[TRICK 2 - 1:30]\nThe eye direction test. When someone looks up-right, they're constructing. Up-left means recalling. Learn this pattern.\n\n[TRICK 3 - 2:15]\nMirror their body language. People trust those who are similar to them. Subtle mirroring builds instant rapport.\n\n[TRICK 4 - 3:00]\nThe pause technique. After they finish speaking, wait 3 seconds. They'll usually reveal more. Silence makes people uncomfortable.\n\n[TRICK 5 - 3:45]\nWatch for micro-expressions. Emotions flash across faces for 1/25th of a second. Train yourself to catch them.\n\n[TRICK 6 - 4:30]\nThe assumption close. Instead of asking yes/no questions, assume agreement. "When should we start?" not "Do you want to start?"\n\n[TRICK 7 - 5:15]\nHere's the FBI technique. Ask unexpected questions. Watch their baseline behavior. Then ask the real question. Compare the reactions.\n\n[TRICK 8 - 6:00]\nNotice what's NOT said. What topics do they avoid? What details do they skip? The gaps tell the story.\n\n[TRICK 9 - 6:45]\nThe fake smile test. Real smiles create wrinkles around eyes. Fake smiles only move the mouth.\n\n[TRICK 10 - 7:30]\nAsking "why" makes people defensive. Ask "what" or "how" instead. You'll get better information.\n\n[OUTRO - 8:30]\nWhich trick will you try first? Practice these and you'll read people like a book.`,
        thumbnailIdea: 'Side-by-side faces showing different expressions. Text: "READ ANYONE INSTANTLY" with brain icon. Psychology-themed blue and purple colors.',
        tags: ['psychology', 'body language', 'social skills', 'communication', 'mind tricks'],
        estimatedViews: '3M-12M'
      }
    ],
    'Space & Universe': [
      {
        title: 'What NASA Discovered at the Edge of the Universe Will Terrify You',
        hook: 'Scientists are calling this the most disturbing discovery in human history...',
        script: `[INTRO - 0:00]\nScientists are calling this the most disturbing discovery in human history. This is what NASA discovered at the edge of the universe.\n\n[THE DISCOVERY - 1:00]\nIn 2023, the James Webb Space Telescope detected something impossible. An anomaly that shouldn't exist according to all known physics.\n\n[WHAT THEY FOUND - 2:30]\nGalaxies that are too old. Structures too large. Patterns too organized. Everything we thought we knew about the universe might be wrong.\n\n[THE IMPLICATIONS - 4:00]\nIf these findings are correct, it means the Big Bang might not be the beginning. Time might work differently than we thought.\n\n[THE TERRIFYING PART - 5:30]\nBut here's what terrifies scientists most. The patterns suggest our universe might be inside something else. Something unimaginably larger.\n\n[WHAT IT MEANS FOR US - 7:00]\nAre we living in a simulation? Is our universe just one of infinite bubbles in a cosmic foam? These questions aren't science fiction anymore.\n\n[CURRENT RESEARCH - 8:30]\nScientists are racing to understand this. Every new image from Webb deepens the mystery. We might be on the edge of humanity's greatest discovery.\n\n[OUTRO - 10:00]\nWhat do you think is at the edge of the universe? Share your theories below.`,
        thumbnailIdea: 'Deep space image with mysterious anomaly highlighted. Text: "NASA TERRIFIED BY THIS" with shocked face. Cosmic purple and black background.',
        tags: ['space', 'NASA', 'universe', 'astronomy', 'cosmos'],
        estimatedViews: '2M-8M'
      }
    ]
  };

  const nicheTemplates = templates[niche as keyof typeof templates] || templates['Facts & Knowledge'];

  // Return multiple variations
  return nicheTemplates;
}
