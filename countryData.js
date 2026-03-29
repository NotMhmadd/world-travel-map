const COUNTRY_DATA = {
"Japan":{flag:"🇯🇵",capital:"Tokyo",continent:"Asia",population:"125M",facts:[
{e:"💡",t:"Japan has more than 5.5 million vending machines — roughly one for every 23 people — selling everything from hot soup to umbrellas."},
{e:"🎭",t:"There's a festival called 'Hadaka Matsuri' where thousands of men wearing only loincloths compete to grab sacred sticks thrown by a priest."},
{e:"🍽️",t:"Kit Kat has released over 300 unique flavors in Japan, including wasabi, sake, sweet potato, and matcha."},
{e:"🏛️",t:"The world's oldest company, Kongō Gumi, operated in Japan for 1,400 years (578–2006) building Buddhist temples."},
{e:"🌿",t:"The island of Ōkunoshima is overrun by hundreds of friendly wild rabbits, earning it the nickname 'Rabbit Island.'"},
{e:"🎵",t:"Karaoke was invented in Kobe in 1971 by Daisuke Inoue, who never patented his invention and earned nothing from it."},
{e:"��",t:"Japanese trains are so punctual that if a train is even 1 minute late, passengers receive a formal delay certificate for their employers."},
{e:"🗣️",t:"Japanese has three writing systems used simultaneously: hiragana, katakana, and kanji — one of the world's most complex literacy requirements."},
{e:"⚽",t:"Japan's 'Bo-Taoshi' is a wild sport where 150 players attack and defend a single pole — described as a mix of rugby, capture the flag, and chaos."},
{e:"🍽️",t:"Slurping noodles loudly in Japan is considered polite — it signals that you're enjoying the meal and enhances the flavor."}
]},
"Brazil":{flag:"🇧🇷",capital:"Brasília",continent:"South America",population:"214M",facts:[
{e:"🌿",t:"The Amazon Rainforest produces about 20% of the world's oxygen but consumes nearly all of it — the ocean is Earth's real lung."},
{e:"🎭",t:"Brazil's Carnival in Salvador de Bahia, not Rio, is actually the largest street party in the world with 2 million people daily."},
{e:"🍽️",t:"Brazilians put condensed milk (leite condensado) on practically everything — pizza, fruit, cake, and even plain bread."},
{e:"💡",t:"The city of Curitiba pioneered exchanging bags of recyclables for bus tokens in the 1990s, inspiring global recycling programs."},
{e:"🏛️",t:"Brasília, the capital, was built from scratch in just 41 months (1956–1960) and is shaped like an airplane when viewed from above."},
{e:"🎵",t:"Bossa nova was born in a tiny apartment in Rio's Copacabana in 1958 when João Gilberto reinvented samba with jazz harmonies."},
{e:"🌿",t:"Brazil has the highest biodiversity of any country: over 56,000 plant species, 1,700 bird species, and 700 mammal species."},
{e:"⚽",t:"Pelé's hometown of Três Corações has a heart-shaped lake that formed naturally — 'três corações' means 'three hearts.'"},
{e:"🗣️",t:"Brazil is the only Portuguese-speaking country in the Americas, surrounded entirely by Spanish-speaking neighbors."},
{e:"💡",t:"The Brazilian butt lift is actually named after the country because Brazilian surgeons pioneered the technique in the 1960s."}
]},
"Iceland":{flag:"🇮🇸",capital:"Reykjavík",continent:"Europe",population:"370K",facts:[
{e:"💡",t:"Iceland has no standing army, navy, or air force — and has been that way since the country was founded in 930 AD."},
{e:"🎭",t:"Icelanders still believe in elves ('Huldufólk'). Road construction has been rerouted to avoid disturbing rocks where elves supposedly live."},
{e:"🍽️",t:"Hákarl is fermented shark buried underground for months. Even Andrew Zimmern called it the worst thing he's ever eaten."},
{e:"🌿",t:"Iceland grows bananas in greenhouses heated by geothermal energy — it's actually Europe's largest banana producer."},
{e:"🏛️",t:"The Althing, Iceland's parliament founded in 930 AD, is the oldest surviving parliament in the world still in operation."},
{e:"🎵",t:"Iceland has more musicians per capita than any other country — Björk, Sigur Rós, and Of Monsters and Men all come from this tiny nation."},
{e:"💡",t:"There's an Icelandic Naming Committee that must approve all baby names to ensure they're compatible with Icelandic grammar."},
{e:"🗣️",t:"Modern Icelanders can still read 800-year-old Viking sagas in their original language — Icelandic has barely changed."},
{e:"🌿",t:"Iceland has no mosquitoes. Scientists believe the unique climate cycle prevents their larvae from completing development."},
{e:"⚽",t:"Iceland became the smallest country to ever qualify for the FIFA World Cup in 2018, with a population of just 335,000."}
]},
"Egypt":{flag:"🇪🇬",capital:"Cairo",continent:"Africa",population:"104M",facts:[
{e:"🏛️",t:"The Great Pyramid was the tallest man-made structure for 3,800 years — until Lincoln Cathedral's spire surpassed it in 1311."},
{e:"💡",t:"Ancient Egyptians invented toothpaste, using a mixture of crushed rock salt, mint, dried iris flowers, and pepper."},
{e:"🎭",t:"Egyptian taxi drivers are famous for removing their rearview mirrors — they say 'what's behind doesn't matter.'"},
{e:"🍽️",t:"Koshari, Egypt's national dish, is a carb-loaded mix of rice, lentils, pasta, and chickpeas — originally a peasant's meal."},
{e:"🌿",t:"95% of Egypt's population lives along the Nile River, occupying just 5% of the country's total land area."},
{e:"🎵",t:"Umm Kulthum's funeral in 1975 drew 4 million mourners — more than any head of state in history. She's called 'Star of the East.'"},
{e:"💡",t:"Cleopatra lived closer in time to the Moon landing (1969) than to the construction of the Great Pyramid (~2560 BC)."},
{e:"🗣️",t:"Egyptian Arabic is the most widely understood Arabic dialect thanks to Egypt's massive film and music industry."},
{e:"⚽",t:"Egypt's Al Ahly football club has won the African Champions League more times than any other club: over 10 titles."},
{e:"🏛️",t:"Ancient Egyptians loved cats so much that killing one, even accidentally, was punishable by death."}
]},
"India":{flag:"🇮🇳",capital:"New Delhi",continent:"Asia",population:"1.4B",facts:[
{e:"💡",t:"India's Kumbh Mela gathering is so massive (75 million people in 2019) it's visible from space."},
{e:"🎭",t:"The Living Root Bridges of Meghalaya are made by training tree roots across rivers — some are over 500 years old and still growing stronger."},
{e:"🍽️",t:"India has the world's largest vegetarian population. Around 400 million Indians don't eat meat — more than the entire US population."},
{e:"🏛️",t:"The city of Varanasi is one of the oldest continuously inhabited cities in the world, with settlements dating back to 11,000 BCE."},
{e:"🌿",t:"India's Western Ghats contain over 325 globally threatened species, making them one of the world's eight 'hottest hotspots' of biological diversity."},
{e:"🎵",t:"The Indian raga system has specific melodies prescribed for different times of day and seasons — playing the wrong one is considered a serious mistake."},
{e:"💡",t:"The Indian Space Research Organisation (ISRO) sent a spacecraft to Mars for $74 million — less than the budget of the movie 'Gravity.'"},
{e:"��️",t:"India has 22 official languages and over 19,500 dialects. The country's currency notes print the denomination in 15 different scripts."},
{e:"⚽",t:"Kabaddi, India's ancient sport of tag-wrestling, requires players to hold their breath while raiding — they must chant 'kabaddi' to prove it."},
{e:"🏛️",t:"The Mughal Emperor Shah Jahan commissioned the Taj Mahal in 1632 — it took 22 years and 20,000 workers to complete."}
]},
"Mexico":{flag:"🇲🇽",capital:"Mexico City",continent:"North America",population:"130M",facts:[
{e:"🎭",t:"Día de los Muertos isn't sad — families build altars, cook feasts, and spend the night in cemeteries celebrating their deceased loved ones."},
{e:"🍽️",t:"Chapulines (fried grasshoppers with chili and lime) have been a protein-rich snack in Oaxaca for thousands of years."},
{e:"🏛️",t:"The Aztec capital Tenochtitlan was built on a lake and had causeways, aqueducts, and floating gardens — it amazed Spanish conquistadors."},
{e:"🌿",t:"Mexico's Cave of Crystals contains selenite crystals up to 12 meters long — the largest natural crystals ever found on Earth."},
{e:"💡",t:"Mexico introduced chocolate, vanilla, corn, tomatoes, avocados, and chili peppers to the rest of the world."},
{e:"🎵",t:"Mariachi music was added to UNESCO's Intangible Cultural Heritage list. A full mariachi ensemble requires at least 8 musicians."},
{e:"💡",t:"Mexico City is sinking at a rate of ~50cm per year because it was built on a drained lake bed and groundwater is being depleted."},
{e:"🗣️",t:"Mexico has 68 recognized indigenous languages. Nahuatl, the Aztec language, gave English words like 'chocolate,' 'tomato,' and 'avocado.'"},
{e:"⚽",t:"Mexico's Lucha Libre wrestlers are cultural icons — their masks are so sacred that losing one in a match is considered the ultimate humiliation."},
{e:"🌿",t:"The monarch butterfly migration covers 4,800 km from Canada to a tiny forest in Michoacán — one of nature's greatest spectacles."}
]},
"Australia":{flag:"🇦🇺",capital:"Canberra",continent:"Oceania",population:"26M",facts:[
{e:"🌿",t:"Australia has more camels than any Arab country — roughly 1 million feral camels roam the outback after being imported in the 1800s."},
{e:"💡",t:"Australia lost a war against emus in 1932. The military deployed soldiers with machine guns against the birds — and the emus won."},
{e:"🍽️",t:"Vegemite is made from spent brewer's yeast. Australians consume 22 million jars a year, though most foreigners find it revolting."},
{e:"🎭",t:"Aboriginal Australians have the oldest continuous culture on Earth — over 65,000 years, with oral histories dating back to the last Ice Age."},
{e:"🏛️",t:"Melbourne was almost named 'Batmania' after the explorer John Batman. The name was used briefly before being changed."},
{e:"🎵",t:"The didgeridoo is one of the oldest wind instruments, played by Aboriginal Australians for at least 1,500 years."},
{e:"🌿",t:"The Great Barrier Reef is the largest living structure on Earth — it's even visible from space and spans 2,300 km."},
{e:"💡",t:"Australia is wider than the moon. The continent spans 4,000 km while the moon's diameter is only 3,400 km."},
{e:"⚽",t:"Australian Rules Football was codified in 1859 — predating most major sports codes including American football and basketball."},
{e:"🗣️",t:"Australia has no official language. English is the de facto language, but over 250 Aboriginal languages were spoken before colonization."}
]},
"Morocco":{flag:"🇲🇦",capital:"Rabat",continent:"Africa",population:"37M",facts:[
{e:"🏛️",t:"The University of al-Qarawiyyin in Fez, founded in 859 AD by a woman named Fatima al-Fihri, is the world's oldest existing university."},
{e:"🎭",t:"The Jemaa el-Fnaa square in Marrakech transforms nightly into an open-air circus of storytellers, snake charmers, and musicians."},
{e:"🍽️",t:"Moroccan tagine is cooked in a cone-shaped clay pot that returns condensation to the dish — it's a self-basting system invented centuries ago."},
{e:"🌿",t:"Morocco's Argan trees are famously climbed by goats who eat the fruit. The trees are endemic to Morocco and nowhere else on Earth."},
{e:"💡",t:"Morocco has the world's largest solar farm, Noor-Ouarzazate, which covers an area the size of 3,500 football fields."},
{e:"🎵",t:"Gnawa music, rooted in sub-Saharan spiritual traditions, uses hypnotic bass rhythms played on a three-stringed bass lute called a guembri."},
{e:"💡",t:"Moroccan riads (traditional houses) are built with no external windows — all rooms face a central courtyard for privacy and cooling."},
{e:"🗣️",t:"Moroccans typically speak 3–4 languages: Darija (Moroccan Arabic), French, possibly Amazigh, and increasingly English."},
{e:"⚽",t:"Morocco became the first African and Arab nation to reach a FIFA World Cup semifinal in 2022, captivating the entire world."},
{e:"🌿",t:"The Sahara Desert advances into Morocco each year, and the country has planted millions of trees in a 'Green Wall' effort to stop it."}
]},
"Italy":{flag:"🇮🇹",capital:"Rome",continent:"Europe",population:"59M",facts:[
{e:"🏛️",t:"Italy has the most UNESCO World Heritage Sites of any country in the world (58+), including Pompeii, Venice, and the Amalfi Coast."},
{e:"🍽️",t:"Italians consume 23 kg of pasta per person per year. Putting cream in carbonara or breaking spaghetti will genuinely upset an Italian."},
{e:"🎭",t:"The Palio di Siena horse race has run twice yearly since 1644. Jockeys ride bareback and the horse can win even without its rider."},
{e:"💡",t:"Italy has a free wine fountain. In Ortona, a 24/7 public fountain dispenses free red wine for pilgrims on the Cammino di San Tommaso."},
{e:"🌿",t:"Italy's Blue Grotto on Capri creates an ethereal blue glow when sunlight passes through an underwater cave opening."},
{e:"🎵",t:"Opera was invented in Florence around 1597. Italy gave the world not just the art form but all its terminology: soprano, forte, piano."},
{e:"💡",t:"There's a town called 'Colobraro' considered so unlucky that Italians won't even say its name aloud — they call it 'that village.'"},
{e:"🗣️",t:"Standard Italian didn't exist until unification in 1861. Each region still has its own dialect, many mutually unintelligible."},
{e:"⚽",t:"Italian football fans are called 'tifosi' — literally 'typhus carriers' — because their passion was compared to a fever."},
{e:"🏛️",t:"The Roman Empire's roads were so well-built that many are still used today, 2,000 years later."}
]},
"South Korea":{flag:"🇰🇷",capital:"Seoul",continent:"Asia",population:"52M",facts:[
{e:"💡",t:"South Korea has the fastest internet speed in the world. The average connection is 10x faster than the global average."},
{e:"🎭",t:"Koreans celebrate 'Black Day' on April 14th — single people who didn't receive gifts on Valentine's Day eat black noodles (jajangmyeon) together."},
{e:"🍽️",t:"There are more fried chicken restaurants in South Korea than McDonald's locations worldwide — over 36,000."},
{e:"🏛️",t:"Changdeokgung Palace's 'Secret Garden' was reserved for royalty for 500 years and contains 26,000 specimen trees."},
{e:"🌿",t:"Jeju Island has 'Haenyeo' — female free-divers, mostly grandmothers in their 70s-80s, who dive without oxygen tanks to harvest seafood."},
{e:"🎵",t:"K-pop trainees practice 14+ hours daily for years with no guarantee of debuting. The dropout rate exceeds 95%."},
{e:"💡",t:"South Korea's 'PC bangs' (gaming cafes) are open 24/7, and competitive gaming (esports) is broadcast on national television."},
{e:"🗣️",t:"King Sejong invented the Korean alphabet (Hangul) in 1443 specifically so commoners could read — scholars opposed it, calling it 'too easy.'"},
{e:"⚽",t:"South Korea co-hosted the 2002 World Cup and reached the semifinals, causing celebrations with 7 million people in the streets of Seoul."},
{e:"💡",t:"Plastic surgery is so normalized in South Korea that it's common to receive it as a graduation gift from parents."}
]},
"Peru":{flag:"🇵🇪",capital:"Lima",continent:"South America",population:"33M",facts:[
{e:"🏛️",t:"Machu Picchu's stones fit so precisely without mortar that you can't slide a knife blade between them — even after 500 years and earthquakes."},
{e:"🍽️",t:"Peru has over 4,000 varieties of native potatoes. The Incas invented freeze-drying by leaving potatoes at high altitude overnight."},
{e:"🎭",t:"The Q'eswachaka rope bridge is rebuilt entirely by hand every June using Incan techniques — a tradition spanning 600 years."},
{e:"🌿",t:"The Nazca Lines include 70+ giant geoglyphs visible only from the air, created between 500 BCE and 500 CE. Their purpose remains debated."},
{e:"💡",t:"Peru's Lake Titicaca has floating islands made of totora reeds by the Uros people — they literally live on handmade ground."},
{e:"🎵",t:"The Peruvian cajón (wooden box drum) was invented by enslaved Africans after colonizers banned their drums."},
{e:"🌿",t:"Peru's Colca Canyon is twice as deep as the Grand Canyon and home to the Andean condor, which has a 3-meter wingspan."},
{e:"🗣️",t:"Quechua, the Incan language, is still spoken by 8 million people across South America and is an official language of Peru."},
{e:"⚽",t:"Peruvian ceviche must use local limes — the acidity 'cooks' the fish. Peruvians and Ecuadorians fiercely debate who invented it."},
{e:"💡",t:"The ancient city of Caral is 5,000 years old — as old as the Egyptian pyramids — making it the oldest known city in the Americas."}
]},
"Norway":{flag:"🇳🇴",capital:"Oslo",continent:"Europe",population:"5.4M",facts:[
{e:"💡",t:"Norway has a 'silly walk' crossing signal in the town of Ørje, inspired by Monty Python's Ministry of Silly Walks sketch."},
{e:"🎭",t:"Norwegians have 'friluftsliv' — the philosophy of open-air living — and are legally guaranteed access to roam any uncultivated land."},
{e:"🍽️",t:"Brunost (brown cheese) is so beloved that a truckload catching fire in a tunnel in 2013 made international news."},
{e:"🏛️",t:"Norway's Svalbard Global Seed Vault stores 1.1 million seed samples from around the world as backup against global catastrophe."},
{e:"🌿",t:"Norway's coastline, with all its fjords, would stretch 100,000 km if straightened — more than twice around the Earth."},
{e:"🎵",t:"Norwegian black metal bands in the 1990s burned medieval churches. The scene became one of music's most notorious subcultures."},
{e:"💡",t:"Norway knighted a penguin. Sir Nils Olav III at Edinburgh Zoo holds the rank of Brigadier in the Norwegian King's Guard."},
{e:"🗣️",t:"Norway has two official written languages — Bokmål and Nynorsk — and every student must learn both."},
{e:"⚽",t:"Cross-country skiing is virtually a national religion. Babies learn to ski before they can walk, and ski waxing is a serious obsession."},
{e:"🌿",t:"The Northern Lights are visible across Norway for months. Tromsø, inside the Arctic Circle, has 2 months of total darkness in winter."}
]},
"Thailand":{flag:"🇹🇭",capital:"Bangkok",continent:"Asia",population:"72M",facts:[
{e:"💡",t:"Bangkok's full ceremonial name is 168 characters long, making it the world's longest city name. Locals just call it 'Krung Thep.'"},
{e:"🎭",t:"The Thai Monkey Buffet Festival in Lopburi serves a lavish feast to 3,000 wild monkeys annually as thanks for attracting tourists."},
{e:"🍽️",t:"Thai iced tea gets its orange color from food coloring and condensed milk — it was originally designed to be extra sweet for laborers."},
{e:"🏛️",t:"Thailand is the only Southeast Asian country never colonized by a European power — 'Thai' literally means 'free.'"},
{e:"🌿",t:"Tham Luang cave, where 12 boys were famously rescued in 2018, is actually one of the longest caves in Thailand at 10 km."},
{e:"🎵",t:"Traditional Thai music uses a pentatonic scale with no semitones, making it sound distinctively different from Western music."},
{e:"💡",t:"The Thai king's birthday determines the color people wear that day. Yellow represents Monday (the king's birth day)."},
{e:"🗣️",t:"Thai is a tonal language with 5 tones — the same syllable can mean 'new,' 'burn,' 'news,' 'silk,' or 'not' depending on pitch."},
{e:"⚽",t:"Muay Thai fighters perform a 'Wai Kru' dance before every fight — a ritualized prayer that can take several minutes."},
{e:"🌿",t:"Thailand's Erawan waterfall has 7 tiers, each named after a head of the mythological three-headed elephant Erawan."}
]},
"Turkey":{flag:"🇹🇷",capital:"Ankara",continent:"Asia/Europe",population:"85M",facts:[
{e:"🏛️",t:"Istanbul is the only city in the world that spans two continents — Europe and Asia — connected by the Bosphorus strait."},
{e:"🍽️",t:"Turkish breakfast can last hours and includes 20+ dishes: cheeses, olives, eggs, honey, jams, pastries, and unlimited tea."},
{e:"🎭",t:"Oil wrestling (Yağlı Güreş) is Turkey's national sport — competitors douse themselves in olive oil and grapple. It dates back 660 years."},
{e:"💡",t:"Turkey gave the world tulips, not the Netherlands. The Dutch imported them from the Ottoman Empire in the 1500s."},
{e:"🌿",t:"Cappadocia's fairy chimneys are volcanic rock formations that ancient people carved into homes, churches, and entire underground cities."},
{e:"🎵",t:"Turkish 'makam' music uses microtones (intervals smaller than semitones) that don't exist in Western music, creating hauntingly unique melodies."},
{e:"💡",t:"Santa Claus was born in Turkey. Saint Nicholas was a 4th-century bishop from Myra in modern-day Antalya province."},
{e:"🗣️",t:"Turkey's 1928 alphabet revolution switched from Arabic script to Latin letters overnight — the entire population had to re-learn reading."},
{e:"⚽",t:"Galatasaray football fans created a 'Welcome to Hell' banner in the 1990s that became one of the most iconic moments in European football."},
{e:"🏛️",t:"Göbekli Tepe, a 12,000-year-old temple in southeastern Turkey, predates Stonehenge by 6,000 years and rewrote human history."}
]},
"New Zealand":{flag:"🇳🇿",capital:"Wellington",continent:"Oceania",population:"5.1M",facts:[
{e:"🌿",t:"New Zealand was the last major landmass settled by humans — Polynesians arrived only around 1250 CE."},
{e:"💡",t:"New Zealand has more sheep than people — roughly 26 million sheep to 5 million humans."},
{e:"🎭",t:"The Māori haka isn't just a war dance — it's performed at weddings, funerals, and even in parliament to show respect."},
{e:"🍽️",t:"The Kiwi burger at McDonald's NZ includes a fried egg and beetroot — both considered essential burger toppings by New Zealanders."},
{e:"🏛️",t:"New Zealand was the first country to give women the right to vote in 1893 — 27 years before the United States."},
{e:"🎵",t:"The Māori taonga pūoro (traditional instruments) include a 'purerehua' — a bullroarer that produces eerie wind sounds."},
{e:"🌿",t:"The Whanganui River was granted legal personhood in 2017 — it has the same rights as a human being under New Zealand law."},
{e:"💡",t:"New Zealand's Fiordland gets up to 8 meters of rain per year, making it one of the wettest inhabited places on Earth."},
{e:"⚽",t:"Rugby is practically a religion. The All Blacks have a winning percentage above 77% — the most dominant team in any sport's history."},
{e:"🗣️",t:"Te Reo Māori experienced a dramatic revival — from near extinction in the 1970s to now being taught in over 1,000 schools."}
]},
"Colombia":{flag:"🇨🇴",capital:"Bogotá",continent:"South America",population:"52M",facts:[
{e:"🌿",t:"Colombia has more bird species than any other country — over 1,900 — nearly 20% of all bird species on Earth."},
{e:"🎭",t:"Barranquilla's Carnival is the second-largest in the world after Rio, featuring cumbia dancers and elaborate animal costumes."},
{e:"🍽️",t:"Colombians put cheese in their hot chocolate, dunking salty white cheese until it melts into a gooey, sweet-salty combo."},
{e:"💡",t:"Colombia's Caño Cristales river turns five colors (red, yellow, green, blue, black) due to aquatic plants — it's called 'the River of Five Colors.'"},
{e:"🏛️",t:"The Lost City (Ciudad Perdida) was built 650 years before Machu Picchu and requires a 4-day jungle trek to reach."},
{e:"🎵",t:"Cumbia originated from enslaved Africans, indigenous, and Spanish cultures blending — it's now the rhythmic backbone of Latin American music."},
{e:"💡",t:"The town of Guatapé is painted in bright, elaborate zócalos (bas-reliefs) on every building, making it one of the most colorful places on Earth."},
{e:"🗣️",t:"Colombian Spanish is often considered the 'clearest' Spanish dialect. Bogotá was once called the 'Athens of South America.'"},
{e:"⚽",t:"Colombia's footballer Higuita invented the 'scorpion kick' save in 1995 at Wembley — one of football's most iconic moments."},
{e:"🌿",t:"Colombia produces 90% of the world's emeralds, and Muzo, the main mining town, has been fought over for 500 years."}
]},
"Greece":{flag:"🇬🇷",capital:"Athens",continent:"Europe",population:"10.4M",facts:[
{e:"🏛️",t:"Ancient Athens' democracy had a process called 'ostracism' — citizens voted to exile someone for 10 years by writing names on pottery shards."},
{e:"🍽️",t:"Greeks consume more olive oil per capita than any country — about 20 liters per person per year."},
{e:"🎭",t:"The Greek evil eye (mati) is taken seriously — blue glass charms hang in nearly every home, car, and business for protection."},
{e:"��",t:"Greece has more archaeological museums than any other country in the world, reflecting its unparalleled ancient heritage."},
{e:"🌿",t:"Santorini's caldera was formed by one of the largest volcanic eruptions in recorded history, which may have destroyed the Minoan civilization."},
{e:"🎵",t:"Rebetiko, Greece's 'urban blues,' was created by refugees and outcasts in port cities. It was banned by the government in the 1930s."},
{e:"💡",t:"Greece has between 1,200 and 6,000 islands depending on what you count — only 227 are inhabited."},
{e:"🗣️",t:"Greek has been spoken continuously for 3,400 years, making it the oldest recorded living language in Europe."},
{e:"⚽",t:"Greece's shock victory at Euro 2004 is considered the biggest upset in football tournament history — they were 150-1 outsiders."},
{e:"🏛️",t:"The ancient Greeks invented the alarm clock — Plato used a water clock that whistled at dawn to wake his students."}
]},
"Kenya":{flag:"🇰🇪",capital:"Nairobi",continent:"Africa",population:"54M",facts:[
{e:"💡",t:"Kenya's M-Pesa mobile money system, launched in 2007, lets people bank via basic phones — it transformed finance across Africa."},
{e:"🌿",t:"The Great Rift Valley running through Kenya is slowly splitting Africa in two — in 50 million years, East Africa will be a separate continent."},
{e:"🎭",t:"The Maasai's jumping dance (adumu) is a competitive display where warriors leap vertically from standing — the highest jumper wins the most respect."},
{e:"🍽️",t:"Nyama Choma (roasted meat) is Kenya's social food — business deals, friendships, and celebrations all happen around a charcoal grill."},
{e:"🏛️",t:"Fort Jesus in Mombasa changed hands nine times between the Portuguese and Omanis, making it one of the most fought-over forts in history."},
{e:"🎵",t:"Benga music, born in Kenya in the 1940s, fused traditional Luo rhythms with electric guitar — it influenced music across East Africa."},
{e:"💡",t:"Kenya produces some of the world's finest black tea — it's the third-largest tea producer globally, after China and India."},
{e:"⚽",t:"Kenyan marathon runners dominate because many grow up running to school at altitude — Iten, the 'Home of Champions,' sits at 2,400m elevation."},
{e:"🗣️",t:"Swahili, Kenya's national language, is a Bantu language with heavy Arabic influence — 'safari' is the Swahili word for 'journey.'"},
{e:"🌿",t:"Lake Nakuru can turn pink with millions of flamingos — up to 2 million have been recorded at once."}
]},
"Canada":{flag:"🇨🇦",capital:"Ottawa",continent:"North America",population:"39M",facts:[
{e:"💡",t:"Canada has more lakes than the rest of the world combined — over 2 million lakes, containing 20% of the world's fresh water."},
{e:"🎭",t:"The town of Churchill, Manitoba is the 'Polar Bear Capital of the World' — bears walk through town and people leave cars unlocked as escape shelters."},
{e:"🍽️",t:"Poutine (fries, gravy, cheese curds) was considered low-class food until the 2000s. Now gourmet poutineries charge $20+ per plate."},
{e:"🏛️",t:"Canada's border with the US is the longest international border in the world — 8,891 km, most of it completely unguarded wilderness."},
{e:"🌿",t:"Canada has a forest called the Great Bear Rainforest that's larger than Ireland and home to the all-white 'Spirit Bear' (Kermode bear)."},
{e:"🎵",t:"Canadian content laws ('CanCon') require radio stations to play at least 35% Canadian music — it helped launch Drake, Celine Dion, and The Weeknd."},
{e:"💡",t:"Alert, Nunavut is the northernmost permanently inhabited place on Earth — it's closer to Moscow than to Toronto."},
{e:"🗣️",t:"Canada has two official languages. New Brunswick is the only officially bilingual province — all services are in English and French."},
{e:"⚽",t:"Canada's national sport isn't hockey — it's lacrosse (summer) and hockey (winter). Lacrosse was played by Indigenous peoples for centuries."},
{e:"🌿",t:"The Bay of Fundy has the highest tides in the world — up to 16 meters, enough to submerge a four-story building."}
]},
"Vietnam":{flag:"🇻🇳",capital:"Hanoi",continent:"Asia",population:"99M",facts:[
{e:"💡",t:"Vietnam is the world's second-largest coffee producer after Brazil — and Vietnamese iced coffee with condensed milk (cà phê sữa đá) is legendary."},
{e:"🎭",t:"Water puppetry, unique to Vietnam, originated in rice paddies where farmers performed puppet shows in flooded fields."},
{e:"🍽️",t:"Phở was only invented in the early 1900s in northern Vietnam, making it surprisingly young for such an iconic dish."},
{e:"🏛️",t:"The Củ Chi tunnels stretch over 250 km — an entire underground city with hospitals, kitchens, and living quarters used during the Vietnam War."},
{e:"🌿",t:"Hang Sơn Đoòng is the world's largest cave — so enormous that it has its own weather system, jungle, and river inside."},
{e:"🎵",t:"Vietnamese đàn bầu is a one-string instrument that produces an impossibly wide range of notes through harmonics — it sounds otherworldly."},
{e:"💡",t:"Motorbikes outnumber cars 20 to 1 in Vietnam. Ho Chi Minh City has 9 million motorbikes — crossing the street is a choreographed act of faith."},
{e:"🗣️",t:"Vietnamese uses 6 tones. The word 'ma' alone can mean ghost, mother, but, horse, tomb, or rice seedling depending on tone."},
{e:"⚽",t:"Vietnam's traditional martial art Vovinam includes aerial scissors kicks where fighters leap and grip their opponent's neck with their legs."},
{e:"��",t:"Ha Long Bay has 1,600 limestone islands and islets, many containing hidden caves and lakes — its name means 'Descending Dragon.'"}
]},
"Argentina":{flag:"🇦🇷",capital:"Buenos Aires",continent:"South America",population:"46M",facts:[
{e:"🎭",t:"Tango was born in the slums of Buenos Aires among immigrants — it was considered scandalous and only became respectable after Paris embraced it."},
{e:"🍽️",t:"Argentinians consume the most beef per capita in the world — the weekly 'asado' (barbecue) is a sacred family ritual lasting 4+ hours."},
{e:"💡",t:"Argentina has the widest avenue in the world — Avenida 9 de Julio in Buenos Aires has 16 lanes and takes 3 light cycles to cross on foot."},
{e:"🏛️",t:"Ushuaia in Patagonia is the southernmost city in the world — it's closer to Antarctica than to Buenos Aires."},
{e:"🌿",t:"Perito Moreno Glacier is one of the few glaciers in the world that's still growing. It periodically calves massive chunks with thunderous crashes."},
{e:"🎵",t:"Argentina's greatest tango singer, Carlos Gardel, has a statue in Buenos Aires where fans still place lit cigarettes in his hand."},
{e:"💡",t:"Every Argentine province has its own mate ritual. Sharing mate (herbal tea) is a social bond — refusing a shared mate is considered rude."},
{e:"🗣️",t:"Argentine Spanish uses 'vos' instead of 'tú' and has a distinctive Italian-inflected accent because 60% of Argentines have Italian ancestry."},
{e:"⚽",t:"Diego Maradona's 'Hand of God' goal and 'Goal of the Century' happened in the same 1986 match — within 4 minutes of each other."},
{e:"🌿",t:"Iguazú Falls consists of 275 individual waterfalls spanning 2.7 km. Eleanor Roosevelt reportedly exclaimed 'Poor Niagara!' upon seeing them."}
]},
"Germany":{flag:"🇩🇪",capital:"Berlin",continent:"Europe",population:"84M",facts:[
{e:"💡",t:"There are over 1,500 different beers brewed in Germany — and the Reinheitsgebot (beer purity law) from 1516 is still in effect."},
{e:"🎭",t:"Germany has a 'quiet hours' law (Ruhezeit). Mowing your lawn on Sundays, drilling, or even playing loud music can result in fines."},
{e:"🍽️",t:"Germany has over 1,500 varieties of sausage (Wurst). The currywurst was invented in Berlin in 1949 and 800 million are eaten yearly."},
{e:"🏛️",t:"The Berlin Wall fell because of a bureaucratic blunder — a confused spokesman accidentally announced border openings 'immediately' on live TV."},
{e:"🌿",t:"The Black Forest got its name because the dense canopy of evergreen trees blocks so much sunlight that the forest floor is perpetually dark."},
{e:"🎵",t:"Germany's Berghain nightclub in Berlin has the world's toughest door policy — the bouncer Sven Marquardt is more famous than most DJs."},
{e:"💡",t:"Germany has a word for everything: 'Kummerspeck' means weight gained from emotional overeating — literally 'grief bacon.'"},
{e:"🗣️",t:"German compound words can be infinitely long. 'Rindfleischetikettierungsüberwachungsaufgabenübertragungsgesetz' was an actual law name (63 letters)."},
{e:"⚽",t:"Germany's 7-1 victory over Brazil in the 2014 World Cup semifinal happened in Brazil — 5 goals were scored in 18 minutes."},
{e:"🏛️",t:"Neuschwanstein Castle inspired Disney's Sleeping Beauty Castle. It was built by 'Mad' King Ludwig II, who spent only 11 nights there."}
]},
"South Africa":{flag:"🇿🇦",capital:"Pretoria",continent:"Africa",population:"60M",facts:[
{e:"💡",t:"South Africa has three capital cities: Pretoria (executive), Cape Town (legislative), and Bloemfontein (judicial)."},
{e:"🎭",t:"The Ubuntu philosophy — 'I am because we are' — is a core South African value. Desmond Tutu called it the essence of being human."},
{e:"🍽️",t:"Biltong (dried cured meat) is South Africa's national snack. Unlike jerky, it's air-dried, not smoked, giving it a unique tender texture."},
{e:"🏛️",t:"Robben Island, where Mandela was imprisoned for 18 years, now has tours led by former political prisoners."},
{e:"🌿",t:"The Cape Floral Kingdom is the smallest of the world's 6 plant kingdoms but has the highest concentration of plant species: 9,000+ species."},
{e:"🎵",t:"South African house music ('Amapiano') exploded globally in the 2020s, characterized by log drums, jazz harmonies, and bouncing basslines."},
{e:"💡",t:"South Africa performed the world's first human heart transplant in 1967 at Groote Schuur Hospital in Cape Town."},
{e:"🗣️",t:"South Africa has 11 official languages — the most of any country. The national anthem includes lyrics in 5 different languages."},
{e:"⚽",t:"The 1995 Rugby World Cup final, where Mandela wore a Springbok jersey, is considered one of sport's greatest moments of reconciliation."},
{e:"🌿",t:"The Drakensberg Mountains contain the highest concentration of San rock art in the world — some paintings are over 3,000 years old."}
]},
"United States":{flag:"🇺🇸",capital:"Washington D.C.",continent:"North America",population:"331M",facts:[
{e:"💡",t:"The US Interstate Highway System requires one mile in every five to be straight — originally so planes could land on them in emergencies (though debated)."},
{e:"🎭",t:"Groundhog Day in Punxsutawney, PA draws 40,000 people to watch a rodent 'predict' the weather. Phil has been 'right' about 39% of the time."},
{e:"🍽️",t:"Americans eat roughly 100 acres of pizza per day — about 3 billion pizzas per year."},
{e:"🏛️",t:"The Library of Congress has over 170 million items, including a rough draft of the Declaration of Independence with edits by Benjamin Franklin."},
{e:"🌿",t:"Yellowstone sits atop a supervolcano. Its magma chamber could fill the Grand Canyon more than 11 times over."},
{e:"🎵",t:"The blues, jazz, rock 'n' roll, hip hop, and country music all originated in the US — arguably the most musically influential country in history."},
{e:"💡",t:"Alaska is simultaneously the most northern, western, AND eastern state in the US — its Aleutian Islands cross the 180° meridian."},
{e:"🗣️",t:"The US has no official language at the federal level. Over 350 languages are spoken, including Navajo, which was used as an unbreakable code in WWII."},
{e:"⚽",t:"The Super Bowl is so massive that it's effectively an unofficial national holiday — avocado sales spike 80% in the week before."},
{e:"🌿",t:"Hawaii's Mauna Kea, measured from its base on the ocean floor, is over 10,000m tall — taller than Everest."}
]},
"United Kingdom":{flag:"🇬🇧",capital:"London",continent:"Europe",population:"67M",facts:[
{e:"💡",t:"The London Underground's 'Mind the Gap' recording was kept for years at one station after the voice actor's widow asked — it was her late husband."},
{e:"🎭",t:"The Brits queue so seriously that forming an orderly line is considered a near-sacred cultural practice. Queue-jumping can provoke genuine outrage."},
{e:"🍽️",t:"The British drink about 100 million cups of tea per day — roughly 36 billion cups per year."},
{e:"🏛️",t:"The Tower of London has had ravens for centuries. Legend says if they ever leave, the kingdom will fall — so their wings are clipped."},
{e:"🌿",t:"The UK's coastline is 19,491 miles long. Due to fractals, the more precisely you measure it, the longer it gets — the 'coastline paradox.'"},
{e:"🎵",t:"The Beatles, Rolling Stones, Led Zeppelin, Pink Floyd, Queen, Radiohead, Adele, and Amy Winehouse are all British — a staggering musical output."},
{e:"💡",t:"The British invented the postage stamp, TV, WWW, telephone, jet engine, and discovered penicillin — all from a country smaller than Oregon."},
{e:"🗣️",t:"English has the largest vocabulary of any language — over 170,000 words in current use, plus 47,000 obsolete words."},
{e:"⚽",t:"England invented modern football in 1863 but didn't win a World Cup until 1966 — and hasn't won one since."},
{e:"🏛️",t:"Big Ben is actually the name of the bell inside the tower, not the tower itself. The tower's official name is Elizabeth Tower."}
]},
"France":{flag:"🇫🇷",capital:"Paris",continent:"Europe",population:"68M",facts:[
{e:"💡",t:"France is the most visited country on Earth with ~90 million tourists per year — more than its own population."},
{e:"🎭",t:"The French have a legal 'right to disconnect' — employers cannot email workers after hours. Work-life balance is literally the law."},
{e:"🍽️",t:"A French meal is an art form. UNESCO added 'the gastronomic meal of the French' to its Intangible Cultural Heritage list in 2010."},
{e:"🏛️",t:"The Eiffel Tower was supposed to be temporary — built for the 1889 World's Fair and scheduled for demolition after 20 years."},
{e:"🌿",t:"France spans 12 time zones (thanks to overseas territories), more than any other country including Russia."},
{e:"🎵",t:"Edith Piaf's 'La Vie en Rose' is one of the most covered songs in history. She was only 4'8\" tall but had a voice that filled stadiums."},
{e:"💡",t:"France has a timezone on every continent: Europe, South America (French Guiana), Africa (Réunion), Oceania (New Caledonia), and Antarctica."},
{e:"🗣️",t:"French was the language of international diplomacy for centuries. 29 countries have French as an official language."},
{e:"⚽",t:"France's national football team is nicknamed 'Les Bleus.' Their 2018 World Cup squad had players with roots in 17 different countries."},
{e:"🌿",t:"Mont Blanc in the French Alps is the highest peak in Western Europe at 4,808m, and it's still growing a few millimeters per year."}
]},
"Spain":{flag:"🇪🇸",capital:"Madrid",continent:"Europe",population:"47M",facts:[
{e:"🎭",t:"La Tomatina festival in Buñol involves 20,000 people throwing 150,000 tomatoes at each other for one hour every August."},
{e:"🍽️",t:"Spaniards eat dinner at 9-10 PM — the latest in Europe. The country is in the wrong timezone (should be GMT like UK) due to Franco aligning with Hitler."},
{e:"🏛️",t:"The Sagrada Familia in Barcelona has been under construction since 1882 — longer than the Egyptian pyramids took to build."},
{e:"💡",t:"Spain has more bars per capita than any other EU country — roughly 1 bar for every 132 people."},
{e:"🌿",t:"Spain's Canary Islands are named after dogs ('Canis' in Latin), not canaries. The birds were named after the islands."},
{e:"🎵",t:"Flamenco wasn't originally Spanish — it was developed by the Romani people (gitanos) of Andalusia, blending Indian, Arab, and Jewish influences."},
{e:"💡",t:"The Spanish siesta is declining — only 18% of Spaniards still nap regularly, despite the cultural stereotype."},
{e:"🗣️",t:"Spanish is the second most spoken native language worldwide (after Mandarin), with 475 million native speakers."},
{e:"⚽",t:"FC Barcelona's Camp Nou holds 99,354 people. On match days, it becomes the third largest 'city' in Catalonia by population."},
{e:"🌿",t:"Tenerife's Teide volcano is the third tallest volcanic structure in the world and Spain's highest peak."}
]},
"China":{flag:"🇨🇳",capital:"Beijing",continent:"Asia",population:"1.4B",facts:[
{e:"💡",t:"China uses about 80 billion pairs of disposable chopsticks per year — equivalent to 20 million trees."},
{e:"🎭",t:"Chinese New Year is the world's largest annual human migration — about 3 billion trips are made during the 40-day travel season."},
{e:"🍽️",t:"Chinese cuisine has 8 recognized regional traditions, each as different from one another as French food is from Mexican."},
{e:"🏛️",t:"The Great Wall is not visible from space with the naked eye — but China's air pollution sometimes is."},
{e:"🌿",t:"China planted so many trees between 1990 and 2015 that its forest coverage increased by an area the size of France."},
{e:"🎵",t:"The Chinese guqin, a 3,000-year-old stringed instrument, was so revered that Confucius himself was said to play it daily."},
{e:"💡",t:"China built a 57-story skyscraper in 19 working days using prefabricated modules — it would take years in most countries."},
{e:"🗣️",t:"Mandarin Chinese has 4 tones. The syllable 'ma' can mean mother, hemp, horse, or scold depending on tone."},
{e:"⚽",t:"Table tennis is China's national sport. The country has won 28 of 37 total Olympic gold medals ever awarded in the sport."},
{e:"🏛️",t:"The Terracotta Army contains 8,000 unique soldiers — no two faces are alike. It was discovered accidentally by farmers digging a well in 1974."}
]},
"Russia":{flag:"🇷🇺",capital:"Moscow",continent:"Europe/Asia",population:"144M",facts:[
{e:"💡",t:"Russia spans 11 time zones. When it's midnight in Kaliningrad, it's already 10 AM in Kamchatka."},
{e:"🎭",t:"Russians have a superstition about shaking hands over a threshold — it's considered extremely bad luck."},
{e:"🍽️",t:"Borscht (beet soup) is such a cultural staple that Ukraine and Russia have a heated debate over which country 'invented' it."},
{e:"🏛️",t:"The Moscow Metro is essentially an underground palace — stations feature chandeliers, marble walls, mosaics, and bronze sculptures."},
{e:"🌿",t:"Lake Baikal in Siberia holds 20% of the world's unfrozen fresh water — more than all the Great Lakes combined."},
{e:"🎵",t:"Tchaikovsky, Rachmaninoff, Stravinsky, and Shostakovich made Russia one of the most influential countries in classical music history."},
{e:"💡",t:"Russia is so vast that it contains a full one-eighth of the Earth's total land area — larger than Pluto's surface."},
{e:"🗣️",t:"Russian uses the Cyrillic alphabet, which was created by two Greek monks (Cyril and Methodius) in the 9th century."},
{e:"⚽",t:"Chess is practically a national pastime. Russia has produced more world chess champions than any other country."},
{e:"🌿",t:"The Siberian taiga is the largest forest on Earth, producing more oxygen than the Amazon and absorbing massive amounts of CO₂."}
]},
"Indonesia":{flag:"🇮🇩",capital:"Jakarta",continent:"Asia",population:"275M",facts:[
{e:"💡",t:"Indonesia has 17,508 islands — only about 6,000 are inhabited. No one has visited them all."},
{e:"🎭",t:"Bali's 'Nyepi' (Day of Silence) shuts down the entire island: no flights, no internet, no lights, no travel for 24 hours."},
{e:"🍽️",t:"Nasi Goreng (fried rice) is the national dish and is eaten for breakfast, lunch, and dinner — each vendor has a unique recipe."},
{e:"🏛️",t:"Borobudur is the world's largest Buddhist temple, built in the 9th century with 2,672 panels and 504 Buddha statues."},
{e:"🌿",t:"Indonesia's Komodo dragons are the largest living lizards, reaching 3 meters. Their saliva contains 50+ bacterial strains."},
{e:"🎵",t:"Gamelan music uses tuned bronze instruments in orchestras of up to 40 players — the sound is hypnotic and nothing else resembles it."},
{e:"💡",t:"Indonesia's capital is moving from Jakarta to Nusantara on Borneo — Jakarta is literally sinking into the sea."},
{e:"🗣️",t:"Indonesia has 700+ languages but united them with 'Bahasa Indonesia' — a standardized form of Malay — as one national language."},
{e:"⚽",t:"Badminton is Indonesia's passion — the country has won more Olympic gold medals in badminton than in all other sports combined."},
{e:"🌿",t:"Sumatra's rainforests are one of only two places on Earth where orangutans, tigers, elephants, and rhinos coexist in the wild."}
]},
"Nigeria":{flag:"🇳🇬",capital:"Abuja",continent:"Africa",population:"220M",facts:[
{e:"💡",t:"Nigeria's film industry 'Nollywood' produces about 2,500 films per year — more than Hollywood, second only to India's Bollywood."},
{e:"🎭",t:"Nigeria has over 250 ethnic groups. The three largest — Hausa, Yoruba, and Igbo — each have populations larger than many countries."},
{e:"🍽️",t:"Jollof rice is Nigeria's proudest dish. The 'Jollof wars' with Ghana over who makes it better is one of West Africa's fiercest debates."},
{e:"🏛️",t:"The Benin Bronzes (from present-day Nigeria) are among the finest metal sculptures ever created — made by the Edo people from the 13th century."},
{e:"🌿",t:"Nigeria has the largest mangrove forest in Africa, stretching across the Niger Delta — it's one of the most biodiverse wetlands on Earth."},
{e:"🎵",t:"Afrobeats, pioneered by Fela Kuti, has become one of the most dominant music genres globally — Burna Boy and Wizkid carry the torch."},
{e:"💡",t:"Lagos is projected to become the world's largest city by 2100, potentially surpassing 100 million residents."},
{e:"🗣️",t:"English is Nigeria's official language, but Nigerian Pidgin English is the true lingua franca, spoken by over 75 million people."},
{e:"⚽",t:"Nigeria's Super Eagles are one of Africa's most successful football teams — their 1996 Olympic gold medal shocked the world."},
{e:"🏛️",t:"The Nok civilization, one of Africa's oldest, produced stunning terracotta sculptures over 2,500 years ago in central Nigeria."}
]},
"Ethiopia":{flag:"🇪🇹",capital:"Addis Ababa",continent:"Africa",population:"120M",facts:[
{e:"💡",t:"Ethiopia is 7-8 years behind the rest of the world — it uses its own calendar with 13 months, 12 of 30 days and one of 5 or 6."},
{e:"🎭",t:"Ethiopia is the only African country never colonized by a European power. Italians tried twice and failed spectacularly."},
{e:"🍽️",t:"Injera, Ethiopia's spongy flatbread, doubles as plate AND utensil. You tear pieces off to scoop up stews — no forks needed."},
{e:"🏛️",t:"The rock-hewn churches of Lalibela were carved directly out of solid rock in the 12th century — they're often called the 'Eighth Wonder of the World.'"},
{e:"🌿",t:"Ethiopia is the birthplace of coffee. Legend says a goatherd named Kaldi noticed his goats dancing after eating coffee berries."},
{e:"🎵",t:"Ethiopian jazz ('Ethio-jazz') fuses traditional pentatonic scales with funk and jazz — it sounds like nothing else on Earth."},
{e:"💡",t:"Lucy, the 3.2 million-year-old hominid fossil, was discovered in Ethiopia in 1974 and named after the Beatles song 'Lucy in the Sky with Diamonds.'"},
{e:"🗣️",t:"Amharic, Ethiopia's official language, uses Ge'ez script — one of the oldest alphabets in continuous use, with 238 characters."},
{e:"⚽",t:"Ethiopian runners have dominated long-distance running for decades. Abebe Bikila won the 1960 Olympic marathon running barefoot."},
{e:"🌿",t:"The Simien Mountains are called 'the roof of Africa' — home to gelada baboons, Ethiopian wolves, and Walia ibex found nowhere else."}
]},
"Cuba":{flag:"🇨🇺",capital:"Havana",continent:"North America",population:"11M",facts:[
{e:"💡",t:"Cuba has two currencies. Until 2021, tourists used CUC while locals used CUP — one of the world's strangest monetary systems."},
{e:"🎭",t:"Havana's crumbling architecture is frozen in time — 50s-era buildings, vintage American cars, and hand-painted signs create a living time capsule."},
{e:"🍽️",t:"Cuban sandwiches were actually invented by Cuban immigrants in Florida — in Cuba, they eat 'pan con lechón' instead."},
{e:"🏛️",t:"Old Havana is a UNESCO World Heritage Site with over 900 historical monuments crammed into a few square kilometers."},
{e:"🌿",t:"Cuba has the world's smallest frog (Monte Iberia eleuth, under 10mm) and the world's smallest bird (the Bee Hummingbird, 5cm)."},
{e:"🎵",t:"The Buena Vista Social Club album (1997) brought Cuban son music to the world — recorded with musicians in their 70s-90s."},
{e:"💡",t:"Cuba has a higher literacy rate (99.8%) than the United States, despite being a developing nation."},
{e:"🗣️",t:"Cuban Spanish drops 's' sounds and swallows consonants so heavily that other Spanish speakers sometimes struggle to understand it."},
{e:"⚽",t:"Baseball, not football, is Cuba's national sport. The country has won 25 Baseball World Cup titles."},
{e:"🌿",t:"Cuba's Viñales Valley has dramatic limestone mogotes (flat-topped hills) that look like they belong in a fantasy novel."}
]},
"Jordan":{flag:"🇯🇴",capital:"Amman",continent:"Asia",population:"11M",facts:[
{e:"🏛️",t:"Petra's Treasury was carved directly into a sandstone cliff face by the Nabataeans over 2,000 years ago — it's 40 meters tall."},
{e:"💡",t:"The Dead Sea, bordering Jordan, is the lowest point on Earth's surface (430m below sea level) and so salty you float effortlessly."},
{e:"🎭",t:"Jordanian hospitality is legendary — refusing a cup of tea or coffee can be seen as deeply disrespectful."},
{e:"🍽️",t:"Mansaf, Jordan's national dish, is lamb cooked in dried yogurt served over rice — it's eaten communally with the right hand."},
{e:"🌿",t:"Wadi Rum's Martian-like red desert has been used as a stand-in for Mars in movies like 'The Martian' and 'Dune.'"},
{e:"🎵",t:"Bedouin music uses the rababa (one-stringed fiddle) to accompany poetry recitations that can last hours."},
{e:"💡",t:"Jordan is one of the most water-scarce countries on Earth — yet Amman has been continuously inhabited for over 11,000 years."},
{e:"🗣️",t:"Jordanian Arabic uses unique words from ancient Arabic extinct elsewhere — linguists study it to understand how Arabic evolved."},
{e:"⚽",t:"Jordan's national football team nearly qualified for the 2014 World Cup — they lost in a playoff to Uruguay in a heartbreaking match."},
{e:"🏛️",t:"The Citadel in Amman contains ruins from the Bronze Age, Roman, Byzantine, and Umayyad periods — layer upon layer of history."}
]},
"Chile":{flag:"🇨🇱",capital:"Santiago",continent:"South America",population:"19M",facts:[
{e:"💡",t:"Chile is the longest north-south country in the world — stretching 4,300 km, equivalent to Norway to Nigeria."},
{e:"🎭",t:"Easter Island (Rapa Nui) belongs to Chile and sits 3,700 km offshore — one of the most remote inhabited places on Earth."},
{e:"🍽️",t:"Chileans consume the most bread per capita in South America and 2nd most in the world — 'marraqueta' rolls are sacred."},
{e:"🏛️",t:"Chile's Atacama Desert has been used by NASA to test Mars rovers because its soil is nearly identical to the Martian surface."},
{e:"🌿",t:"Torres del Paine in Patagonia is considered one of the most beautiful national parks on Earth, with glaciers, lakes, and granite towers."},
{e:"🎵",t:"Víctor Jara was a folk singer killed during Pinochet's coup in 1973. His songs became anthems of resistance across Latin America."},
{e:"💡",t:"The Atacama Desert is the driest non-polar desert on Earth. Some weather stations there have NEVER recorded rain."},
{e:"🗣️",t:"Chilean Spanish is notoriously fast and full of slang — other Spanish speakers joke that Chileans invented their own language."},
{e:"⚽",t:"Chile won back-to-back Copa América titles in 2015 and 2016 despite never having won the tournament before."},
{e:"🌿",t:"Chile's Lake General Carrera has 'Marble Caves' — surreal blue caverns carved by water into solid marble over 6,000 years."}
]},
"Nepal":{flag:"🇳🇵",capital:"Kathmandu",continent:"Asia",population:"30M",facts:[
{e:"💡",t:"Nepal's flag is the only national flag that isn't rectangular — it's two stacked triangles, and there's a precise mathematical formula to draw it."},
{e:"🎭",t:"The Kumari is a living goddess — a young girl selected through rigorous tests who is worshipped until she reaches puberty."},
{e:"🍽️",t:"Dal Bhat (lentil soup with rice) is eaten twice daily by most Nepalis. The saying goes: 'Dal Bhat power, 24 hour.'"},
{e:"🏛️",t:"Lumbini, the birthplace of the Buddha, is in Nepal — not India. This is a common misconception that Nepalis will correct firmly."},
{e:"🌿",t:"Eight of the world's fourteen 8,000-meter peaks are in Nepal, including Everest (8,849m), the highest point on Earth."},
{e:"🎵",t:"The sarangi (a small Nepali fiddle) is played by wandering Gandharva musicians who travel village to village singing news and stories."},
{e:"💡",t:"Nepal's calendar is 56 years ahead of the Western calendar. The year 2024 AD is 2081 BS (Bikram Sambat) in Nepal."},
{e:"🗣️",t:"Nepal has 123 languages spoken by less than 30 million people — one of the highest linguistic densities on Earth."},
{e:"⚽",t:"Cricket is hugely popular in Nepal despite it not being a traditional cricket nation — the Nepal cricket team has a passionate fanbase."},
{e:"🌿",t:"The Annapurna Circuit trek passes through every climate zone from tropical to arctic within just 200 km."}
]},
"Philippines":{flag:"🇵🇭",capital:"Manila",continent:"Asia",population:"114M",facts:[
{e:"💡",t:"Text messaging was invented as a culture in the Philippines — Filipinos sent the world's first SMS-based political movement (EDSA II in 2001)."},
{e:"🎭",t:"Filipino 'Bayanihan' means neighbors literally carrying your house to a new location — the entire community lifts the structure and walks."},
{e:"🍽️",t:"Adobo (meat braised in vinegar, soy sauce, and garlic) is the unofficial national dish — every family has a closely guarded recipe."},
{e:"🏛️",t:"The Philippines was named after King Philip II of Spain in 1542 — it's the only Asian country named after a European monarch."},
{e:"🌿",t:"The Chocolate Hills of Bohol are 1,268 perfectly cone-shaped hills that turn brown in summer — nobody fully understands how they formed."},
{e:"🎵",t:"Filipinos are legendary karaoke singers. The karaoke machine was actually invented by a Filipino named Roberto del Rosario."},
{e:"💡",t:"The Philippines has the most social media users per capita in the world — averaging 10+ hours online per day."},
{e:"🗣️",t:"Filipino (Tagalog-based) borrowed heavily from Spanish — 'kumusta' (how are you) comes from '¿cómo está?'"},
{e:"⚽",t:"Basketball, not football, is the Philippines' most popular sport — despite having no NBA-sized players. Street courts are everywhere."},
{e:"🌿",t:"The Philippine Eagle is the world's largest eagle by wing surface area and is critically endangered with fewer than 400 left."}
]},
"Portugal":{flag:"🇵🇹",capital:"Lisbon",continent:"Europe",population:"10M",facts:[
{e:"💡",t:"Portugal decriminalized ALL drugs in 2001. HIV infections dropped 95% and drug-related deaths fell dramatically."},
{e:"🎭",t:"Fado music expresses 'saudade' — a deep longing for something absent. UNESCO added it to its Intangible Heritage list."},
{e:"🍽️",t:"Portugal has 365 recipes for cod (bacalhau) — one for each day of the year. The fish is actually imported from Norway."},
{e:"🏛️",t:"Livraria Lello in Porto, built in 1906, inspired J.K. Rowling's vision of Hogwarts — she lived in Porto while writing Harry Potter."},
{e:"🌿",t:"The Azores archipelago sits on the Mid-Atlantic Ridge — literally on the seam between tectonic plates, 1,500 km from mainland Portugal."},
{e:"🎵",t:"Portuguese-speaking countries span four continents. Lusophone culture connects Brazil, Angola, Mozambique, Cape Verde, and more."},
{e:"💡",t:"The Vasco da Gama Bridge in Lisbon is the longest in Europe at 12.3 km — so long that its curvature accounts for the Earth's roundness."},
{e:"🗣️",t:"Portuguese is spoken by 260 million people worldwide — it's the most spoken language in South America (because of Brazil)."},
{e:"⚽",t:"Cristiano Ronaldo, from Madeira, is the all-time top scorer in international football with 130+ goals."},
{e:"🌿",t:"Portugal's Algarve coast has some of Europe's most stunning sea caves, carved by Atlantic waves into golden limestone cliffs."}
]},
"Croatia":{flag:"🇭🇷",capital:"Zagreb",continent:"Europe",population:"3.9M",facts:[
{e:"💡",t:"The necktie was invented in Croatia. Croatian mercenaries wore knotted scarves in the 17th century — the French called them 'cravates.'"},
{e:"🎭",t:"Dubrovnik's old city was the primary filming location for King's Landing in Game of Thrones."},
{e:"🍽️",t:"Croatian truffle hunters use specially trained dogs to find truffles in Istria — one of the largest white truffles ever (1.31 kg) was found here."},
{e:"🏛️",t:"Diocletian's Palace in Split isn't a ruin — 3,000 people still live inside the 1,700-year-old Roman emperor's retirement home."},
{e:"🌿",t:"Plitvice Lakes has 16 terraced lakes connected by waterfalls. The travertine barriers that separate them grow about 1cm per year."},
{e:"🎵",t:"Klapa singing (a cappella harmonies from Dalmatia) is a UNESCO Intangible Cultural Heritage — fishermen sing it in port town squares."},
{e:"💡",t:"Nikola Tesla was born in Smiljan, Croatia (then Austria-Hungary). Both Croatia and Serbia claim him as their own."},
{e:"🗣️",t:"Croatian, Serbian, Bosnian, and Montenegrin are essentially the same language with different names — a politically charged linguistic situation."},
{e:"⚽",t:"Croatia (pop. 3.9M) reached the 2018 World Cup Final — making them the smallest country to do so since Uruguay in 1950."},
{e:"🌿",t:"Croatia has over 1,200 islands along its coast, but only about 50 are permanently inhabited."}
]},
"Sweden":{flag:"🇸🇪",capital:"Stockholm",continent:"Europe",population:"10.4M",facts:[
{e:"💡",t:"Sweden has a 6-hour workday movement. Several companies tested it and found that employees became more productive, not less."},
{e:"🎭",t:"Swedes have 'fika' — a sacred daily coffee break with pastries. Skipping fika is practically a social offense."},
{e:"🍽️",t:"Swedish 'surströmming' (fermented herring) smells so bad that it's been banned on several airlines. Swedes eat it outdoors."},
{e:"🏛️",t:"The Vasa warship sank 20 minutes into its maiden voyage in 1628. It was salvaged 333 years later and is now Stockholm's most popular museum."},
{e:"🌿",t:"'Allemansrätten' (Right to Roam) lets anyone walk, camp, or forage on any land in Sweden — it's written into the constitution."},
{e:"🎵",t:"Sweden is the world's third-largest music exporter after the US and UK — ABBA, Avicii, Robyn, and Max Martin all came from this country of 10 million."},
{e:"💡",t:"Sweden recycles so efficiently that it imports garbage from other countries to fuel its waste-to-energy power plants."},
{e:"🗣️",t:"Swedish has a unique word 'lagom' meaning 'just the right amount' — it's an entire philosophy of balance embedded in the language."},
{e:"⚽",t:"Ice hockey rivals football for Sweden's most popular sport. The Sweden-Finland rivalry games draw over 1 million TV viewers."},
{e:"🌿",t:"Northern Sweden has the Icehotel in Jukkasjärvi — rebuilt every winter from ice blocks cut from the Torne River."}
]},
"Poland":{flag:"🇵🇱",capital:"Warsaw",continent:"Europe",population:"38M",facts:[
{e:"💡",t:"Poland's Wieliczka Salt Mine has an entire underground cathedral — complete with chandeliers, altars, and sculptures — all carved from salt."},
{e:"🎭",t:"Poland celebrates 'Fat Thursday' (Tłusty Czwartek) by collectively eating 100 million doughnuts (pączki) in a single day."},
{e:"🍽️",t:"Pierogi (filled dumplings) come in dozens of varieties. The debate over sweet vs. savory fillings can get heated at Polish family gatherings."},
{e:"🏛️",t:"Warsaw was 85% destroyed in WWII but was meticulously rebuilt — its Old Town reconstruction is so faithful it earned UNESCO status."},
{e:"🌿",t:"Białowieża Forest, straddling Poland and Belarus, is the last primeval forest in lowland Europe — home to wild European bison."},
{e:"🎵",t:"Chopin was Polish, and his heart is literally embedded in a pillar of the Holy Cross Church in Warsaw — smuggled there after his death in Paris."},
{e:"💡",t:"Marie Curie was born in Warsaw. She remains the only person to win Nobel Prizes in two different sciences (Physics and Chemistry)."},
{e:"🗣️",t:"Polish is considered one of the hardest languages to learn — it has 7 grammatical cases and consonant clusters like 'szcz' and 'prz.'"},
{e:"⚽",t:"Robert Lewandowski scored 5 goals in 9 minutes for Bayern Munich in 2015 — one of the most remarkable individual performances in football history."},
{e:"🌿",t:"The Masurian Lake District has over 2,000 lakes connected by rivers and canals — it's called 'The Land of a Thousand Lakes.'"}
]},
"Iran":{flag:"🇮🇷",capital:"Tehran",continent:"Asia",population:"87M",facts:[
{e:"🏛️",t:"Persepolis, the ceremonial capital of the Achaemenid Empire (550 BC), was so vast that Alexander the Great needed 3,000 camels to carry away its treasures."},
{e:"🎭",t:"Nowruz (Persian New Year) is celebrated by 300+ million people worldwide. It begins on the spring equinox and lasts 13 days."},
{e:"🍽️",t:"Iranian saffron is the world's finest — Iran produces 90% of the global supply. A single kilogram costs more than gold."},
{e:"💡",t:"Iran has one of the world's highest rates of nose jobs. Rhinoplasty is so common and celebrated that some people wear post-surgery bandages as a status symbol."},
{e:"🌿",t:"The Dash-e Lut desert holds the record for the highest surface temperature ever recorded on Earth: 70.7°C (159°F)."},
{e:"🎵",t:"Persian classical music uses intervals that don't exist in Western music — its 'radif' system contains over 250 melodic fragments."},
{e:"💡",t:"Iran's 'yakhchāl' (ice pits) were ancient refrigerators — Persians made ice in the desert 2,400 years ago using evaporative cooling."},
{e:"🗣️",t:"Farsi (Persian) is written in Arabic script but is an Indo-European language — it's closer to English and French than to Arabic."},
{e:"⚽",t:"Football is Iran's most popular sport. The Iran-USA World Cup match in 1998 was called 'the most politically charged game in history.'"},
{e:"🏛️",t:"The Nasir al-Mulk Mosque in Shiraz is called the 'Pink Mosque' — its stained glass windows create a kaleidoscope of color at sunrise."}
]},
"Lebanon":{flag:"🇱🇧",capital:"Beirut",continent:"Asia",population:"5.5M",facts:[
{e:"🏛️",t:"Byblos is one of the oldest continuously inhabited cities — about 7,000 years old. The word 'Bible' derives from its Greek name, Byblos."},
{e:"🍽️",t:"Lebanese cuisine is considered one of the world's finest. A traditional 'mezze' spread can have 30+ small dishes before the main course even arrives."},
{e:"🎭",t:"Lebanon is smaller than Connecticut but has 18 recognized religious communities — more diversity per square km than almost anywhere."},
{e:"💡",t:"You can ski in the mountains and swim in the Mediterranean on the same day in Lebanon — the country is only 55 km wide."},
{e:"🌿",t:"The Cedars of God grove contains trees over 1,000 years old. The cedar is Lebanon's national symbol, featured on its flag."},
{e:"🎵",t:"Fairuz is perhaps the Arab world's most beloved singer. During Lebanon's civil war, her music was the only thing both sides agreed on."},
{e:"💡",t:"Beirut has been destroyed and rebuilt 7 times throughout history — earning it the nickname 'the city that refuses to die.'"},
{e:"🗣️",t:"Lebanese switch between Arabic, French, and English mid-sentence — often within a single phrase. This trilingual mixing is called 'code-switching.'"},
{e:"⚽",t:"Basketball is more popular than football in Lebanon — the national league draws packed arenas and intense city rivalries."},
{e:"🌿",t:"The Jeita Grotto contains the world's longest known stalactite at 8.2 meters, inside a limestone cave system 9 km long."}
]},
"Madagascar":{flag:"🇲🇬",capital:"Antananarivo",continent:"Africa",population:"29M",facts:[
{e:"🌿",t:"90% of Madagascar's wildlife is found nowhere else on Earth — including 100+ species of lemurs, the island's most famous residents."},
{e:"🎭",t:"The Malagasy practice 'famadihana' — a ceremony where they exhume their dead, rewrap them in fresh cloth, and dance with the bodies."},
{e:"🍽️",t:"Rice is so central to Malagasy life that the word for 'to eat' literally means 'to eat rice.' A meal without rice isn't a meal."},
{e:"🏛️",t:"Madagascar split from India about 88 million years ago and has been evolving in isolation ever since — it's a natural laboratory of evolution."},
{e:"🌿",t:"The Avenue of the Baobabs features 800-year-old trees up to 30 meters tall — they look like they've been planted upside-down."},
{e:"🎵",t:"Malagasy music blends Southeast Asian, African, and Arabic influences — the valiha (bamboo tube zither) is the national instrument."},
{e:"💡",t:"Madagascar produces 80% of the world's natural vanilla. Real vanilla is the second most expensive spice after saffron."},
{e:"🗣️",t:"Malagasy is an Austronesian language — more closely related to languages in Borneo than to any African language, despite Madagascar's location."},
{e:"⚽",t:"Madagascar's national football team qualified for the Africa Cup of Nations for the first time in 2019 and won their first two matches."},
{e:"💡",t:"The island has 'tsingy' formations — razor-sharp limestone needles so dense that satellite imagery can't see the ground beneath them."}
]},
"Finland":{flag:"🇫🇮",capital:"Helsinki",continent:"Europe",population:"5.5M",facts:[
{e:"💡",t:"Finland has been ranked the happiest country in the world for 7 consecutive years by the World Happiness Report."},
{e:"🎭",t:"Finland hosts the World Wife Carrying Championship. The winner receives the wife's weight in beer."},
{e:"🍽️",t:"Finns consume more coffee per capita than any other country — about 12 kg per person per year (roughly 4 cups daily)."},
{e:"🏛️",t:"Finland's education system has no standardized tests, no homework until age 16, shorter school days — and consistently ranks among the world's best."},
{e:"🌿",t:"Finland has 188,000 lakes (more than any country except Canada) and 179,000 islands — it's more water than land in some regions."},
{e:"🎵",t:"Finland has more heavy metal bands per capita than any other country. There are 53.5 metal bands per 100,000 people."},
{e:"💡",t:"There are 3.3 million saunas in Finland for 5.5 million people — roughly one sauna for every 1.6 Finns."},
{e:"🗣️",t:"Finnish is not related to any nearby language. It's in the Uralic family, most closely related to Estonian and distantly to Hungarian."},
{e:"⚽",t:"Finland's national sport is pesäpallo — a uniquely Finnish version of baseball that looks similar but plays completely differently."},
{e:"🌿",t:"Lapland in northern Finland has the 'kaamos' — a period of polar night where the sun doesn't rise for up to 50 days."}
]},
"Romania":{flag:"🇷🇴",capital:"Bucharest",continent:"Europe",population:"19M",facts:[
{e:"🏛️",t:"Romania's Palace of the Parliament is the world's heaviest building and second-largest administrative building after the Pentagon."},
{e:"🎭",t:"Transylvania is a real place. Bran Castle, marketed as 'Dracula's Castle,' draws millions of visitors — though Vlad the Impaler barely spent time there."},
{e:"🍽️",t:"Mici (pronounced 'meech') — small grilled sausages without casing — are Romania's beloved street food, always served with mustard and bread."},
{e:"💡",t:"Romania's internet speed is consistently among the fastest in the world — faster than the US, UK, and most of Western Europe."},
{e:"🌿",t:"Romania has Europe's last remaining virgin forests, with trees over 400 years old — but illegal logging threatens them."},
{e:"🎵",t:"George Enescu is Romania's greatest composer. The Bucharest Athenaeum, where his music is performed, has stunning fresco-covered walls."},
{e:"💡",t:"The Merry Cemetery of Săpânța has brightly painted crosses with humorous poems about the deceased — death is celebrated, not mourned."},
{e:"🗣️",t:"Romanian is the closest living language to Latin. Romanians can partially understand Italian, Spanish, and Portuguese without studying them."},
{e:"⚽",t:"Gheorghe Hagi, 'The Maradona of the Carpathians,' led Romania to the 1994 World Cup quarterfinals — the country's golden football era."},
{e:"🌿",t:"The Danube Delta is Europe's best-preserved river delta — home to over 300 bird species and where the Danube meets the Black Sea."}
]},
"Algeria":{flag:"🇩🇿",capital:"Algiers",continent:"Africa",population:"45M",facts:[
{e:"💡",t:"Algeria is the largest country in Africa by land area, covering 2.38 million square kilometers."},
{e:"🎭",t:"The ancient Berber (Amazigh) culture predates Arab influence by thousands of years and is still celebrated today."},
{e:"🍽️",t:"Couscous, considered Algeria's national dish, is traditionally steamed three times and served with a rich vegetable and meat stew."},
{e:"🏛️",t:"The Roman ruins of Timgad, built in 100 AD, are among the best-preserved in the world and are a UNESCO World Heritage Site."},
{e:"🌿",t:"About 90% of Algeria is covered by the Sahara Desert, yet the northern coastal strip is lush and fertile."},
{e:"🎵",t:"Raï music, born in Oran in the 1930s, blended Bedouin folk with Spanish and French influences and became a global genre."},
{e:"💡",t:"Algeria was a French colony for 132 years and gained independence in 1962 after a brutal eight-year war."},
{e:"🗣️",t:"Algeria has three official languages: Arabic, Tamazight (Berber), and French is widely used in business and education."},
{e:"⚽",t:"Algeria won the Africa Cup of Nations in 1990 and again in 2019, defeating Senegal in the final."},
{e:"🍽️",t:"Mint tea poured from a great height is a symbol of hospitality in Algeria, and refusing it is considered impolite."}
]},
"Angola":{flag:"🇦🇴",capital:"Luanda",continent:"Africa",population:"35M",facts:[
{e:"💡",t:"Angola has one of the world's fastest-growing economies, driven by its vast oil reserves which account for 90% of exports."},
{e:"🎭",t:"The Chokwe people of eastern Angola are renowned for their intricate masks and sculptures used in initiation ceremonies."},
{e:"🍽️",t:"Muamba de galinha, a spicy chicken stew cooked with palm oil, garlic, and okra, is considered Angola's national dish."},
{e:"🏛️",t:"The Portuguese fort São Miguel in Luanda, built in 1576, is one of the oldest surviving colonial structures in sub-Saharan Africa."},
{e:"🌿",t:"The Okavango River originates in Angola's highlands and flows through Namibia into Botswana, never reaching the sea."},
{e:"🎵",t:"Semba music from Angola predates and directly influenced Brazilian samba, brought over by enslaved Angolans in the 16th century."},
{e:"💡",t:"Angola endured one of Africa's longest civil wars, lasting 27 years from 1975 to 2002, leaving millions displaced."},
{e:"🗣️",t:"Although Portuguese is the official language, over 40 Bantu languages are spoken, with Umbundu being the most widely used native tongue."},
{e:"⚽",t:"Angola qualified for its first and only FIFA World Cup in 2006, drawing against Iran in its debut match."},
{e:"🍽️",t:"Ginguba, a traditional peanut sauce, is a staple condiment in Angolan cooking used across soups, stews, and grilled meats."}
]},
"Botswana":{flag:"🇧🇼",capital:"Gaborone",continent:"Africa",population:"2.6M",facts:[
{e:"💡",t:"Botswana transformed from one of the world's poorest nations at independence in 1966 to an upper-middle-income country within decades."},
{e:"🎭",t:"The San (Bushmen) people of Botswana have one of the oldest cultures on Earth, with rock art dating back over 70,000 years."},
{e:"🍽️",t:"Seswaa, a slow-cooked shredded beef or goat dish pounded with a wooden spoon, is Botswana's national dish served at every celebration."},
{e:"🏛️",t:"The ruins of Khami, a 15th-century stone-walled city near the Zimbabwe border, are a UNESCO World Heritage Site."},
{e:"🌿",t:"The Okavango Delta, the world's largest inland delta, floods each year creating a temporary oasis that attracts massive wildlife migrations."},
{e:"🎵",t:"Kwasa Kwasa, an upbeat dance music style originally from DR Congo, became wildly popular in Botswana in the 1990s."},
{e:"💡",t:"Botswana produces about 20% of the world's diamonds and has used diamond revenues to fund free education and healthcare."},
{e:"🗣️",t:"Setswana is spoken by about 80% of the population, making Botswana one of Africa's most linguistically unified nations."},
{e:"⚽",t:"Botswana's national football team is nicknamed 'The Zebras' — a nod to the country's iconic black-and-white national animal."},
{e:"🍽️",t:"Morogo, a dish of wild leafy greens similar to spinach, is a traditional side dish eaten daily in most Botswana households."}
]},
"Burundi":{flag:"🇧🇮",capital:"Gitega",continent:"Africa",population:"12M",facts:[
{e:"💡",t:"Burundi is one of the world's five poorest countries by GDP per capita despite having fertile land and a hardworking population."},
{e:"🎭",t:"The Royal Drummers of Burundi, known as Karyenda, have performed sacred drumming for over 400 years and are a UNESCO cultural heritage."},
{e:"🍽️",t:"Ugali, a thick porridge made from cassava or maize flour, is the staple food eaten with beans, peas, or leafy vegetables."},
{e:"🏛️",t:"Gitega, not the coastal city of Bujumbura, became Burundi's official capital in 2018 in a government decentralization effort."},
{e:"🌿",t:"Burundi is one of Africa's most densely populated countries and lies in the Albertine Rift, part of the Great Rift Valley system."},
{e:"🎵",t:"Burundian drumming ensembles consist of up to 12 drummers performing in tight rhythmic unison — a tradition tied to royalty and ritual."},
{e:"💡",t:"Lake Tanganyika, bordering Burundi, is the world's second-deepest lake at 1,470 meters and holds 16% of Earth's fresh lake water."},
{e:"🗣️",t:"Kirundi is spoken by virtually the entire population, making it one of Africa's most uniform linguistic nations alongside Rwanda."},
{e:"⚽",t:"Football is the most popular sport in Burundi, and the national team qualified for the Africa Cup of Nations for the first time in 2019."},
{e:"🍽️",t:"Brochettes, skewered grilled goat or beef seasoned with local spices, are the most popular street food across Burundian towns."}
]},
"Cameroon":{flag:"🇨🇲",capital:"Yaoundé",continent:"Africa",population:"28M",facts:[
{e:"💡",t:"Cameroon is often called 'Africa in miniature' because it contains nearly every climate zone and ecosystem found across the continent."},
{e:"🎭",t:"The Bamileke people of western Cameroon practice elaborate masked festivals with colorful elephant masks representing royal power."},
{e:"🍽️",t:"Ndolé, a bitter-leaf stew cooked with peanuts and either fish or meat, is Cameroon's national dish and beloved across the country."},
{e:"🏛️",t:"The Bafut Palace in the Northwest Region has been the seat of the Bafut Kingdom since the 14th century and remains active today."},
{e:"🌿",t:"Mount Cameroon, at 4,095 meters, is the highest peak in West and Central Africa and an active stratovolcano that last erupted in 2012."},
{e:"🎵",t:"Makossa, invented by Cameroonian artist Manu Dibango, became a global hit in 1972 and influenced Michael Jackson's 'Wanna Be Startin' Somethin'."},
{e:"💡",t:"Cameroon is the only country in Africa that plays under two official languages, French and English, in separate administrative regions."},
{e:"🗣️",t:"Over 280 distinct languages are spoken in Cameroon, making it one of the most linguistically diverse countries in the world."},
{e:"⚽",t:"Cameroon's Indomitable Lions won the Africa Cup of Nations five times and famously reached the 1990 World Cup quarter-finals."},
{e:"🍽️",t:"Suya, thinly sliced beef marinated in spiced peanut powder and grilled over open flame, is a widely eaten street food originally from the north."}
]},
"Central African Republic":{flag:"🇨🇫",capital:"Bangui",continent:"Africa",population:"5.5M",facts:[
{e:"💡",t:"The Central African Republic is one of the world's least visited countries, yet contains extraordinary biodiversity and diamond deposits."},
{e:"🎭",t:"The Aka Pygmy people of CAR are renowned worldwide for their complex polyphonic vocal music, which UNESCO has recognized as intangible heritage."},
{e:"🍽️",t:"Gozo, a thick paste made from cassava leaves cooked with palm oil and dried fish or meat, is a daily staple across the country."},
{e:"🏛️",t:"The city of Bangui was founded by French colonial forces in 1889 on the Ubangi River, and its name means 'the rapids' in Sango."},
{e:"🌿",t:"Dzanga-Sangha National Park in the southwest is one of Africa's finest rainforests and home to forest elephants, western lowland gorillas, and bongo antelopes."},
{e:"🎵",t:"Sango music, blending Central African rhythms with guitar and brass, forms the core of the national popular music tradition."},
{e:"💡",t:"Despite having significant gold, diamond, and uranium reserves, CAR consistently ranks near the bottom of the UN Human Development Index."},
{e:"🗣️",t:"Sango is the national language spoken across all ethnic groups and serves as the true lingua franca, while French is the official language."},
{e:"⚽",t:"Basketball has been growing rapidly in CAR, and the country produced NBA player Serge Ibaka who was born in Brazzaville to a Congolese-CAR family."},
{e:"🍽️",t:"Kanda, a dish of ground meat or fish mixed with cassava paste and wrapped in banana leaves before steaming, is a traditional festive food."}
]},
"Chad":{flag:"🇹🇩",capital:"N'Djamena",continent:"Africa",population:"17M",facts:[
{e:"💡",t:"Chad is a landlocked country and one of the world's largest by area, stretching from the Sahara Desert in the north to tropical savanna in the south."},
{e:"🎭",t:"The annual Gerewol festival of the Wodaabe nomads features men wearing elaborate makeup and jewelry to compete for women's attention in a beauty contest."},
{e:"🍽️",t:"Daraba, a thick stew made from okra and peanuts with dried fish or meat, is a traditional dish eaten across Chad's diverse ethnic groups."},
{e:"🏛️",t:"Lake Chad, which borders four countries, was once one of Africa's largest lakes but has shrunk by 90% since the 1960s due to climate change and irrigation."},
{e:"🌿",t:"The Ennedi Plateau in northeastern Chad contains stunning sandstone arches, rock art over 7,000 years old, and is a UNESCO World Heritage Site."},
{e:"🎵",t:"Griot musicians in Chad carry centuries of oral history and genealogy through song, serving as living libraries for their communities."},
{e:"💡",t:"Chad began exporting oil in 2003 via a pipeline to Cameroon, but revenues have done little to reduce the country's extreme poverty levels."},
{e:"🗣️",t:"Over 120 languages are spoken in Chad, but Arabic and French are the two official languages used in government and education."},
{e:"⚽",t:"Wrestling is Chad's most popular traditional sport, with community wrestling tournaments drawing massive crowds in villages across the country."},
{e:"🍽️",t:"Boule, a stiff porridge made from millet or sorghum, is the foundational meal eaten twice daily in most Chadian households."}
]},
"Congo":{flag:"🇨🇬",capital:"Brazzaville",continent:"Africa",population:"5.8M",facts:[
{e:"💡",t:"Brazzaville and Kinshasa (DR Congo) are the world's closest capital cities at only 4 kilometers apart, separated by the Congo River."},
{e:"🎭",t:"The Sapeurs of Brazzaville are a subculture of working-class men who invest everything in designer suits to perform elegance as a philosophy of dignity."},
{e:"🍽️",t:"Saka Saka, a stew of pounded cassava leaves cooked with palm oil, garlic, and smoked fish, is a beloved national dish in the Republic of Congo."},
{e:"🏛️",t:"The Basilica of Sainte-Anne in Brazzaville, completed in 1949, is one of the most architecturally stunning colonial-era churches in all of Africa."},
{e:"🌿",t:"The Republic of Congo contains vast stretches of the Congo Basin rainforest, the world's second-largest tropical forest after the Amazon."},
{e:"🎵",t:"Congolese rumba, which evolved into soukous, was one of the most influential music genres in 20th-century Africa, spreading across the continent."},
{e:"💡",t:"The Republic of Congo is one of sub-Saharan Africa's largest oil producers, though most of its population remains in poverty."},
{e:"🗣️",t:"Lingala and Kituba are the two national lingua francas, while French remains the sole official language used in government."},
{e:"⚽",t:"The Congo national team won back-to-back Africa Cup of Nations titles in 1972 and 1974, a golden era never since repeated."},
{e:"🍽️",t:"Grilled catfish wrapped in banana leaves and cooked over charcoal is among the most popular street foods along the Congo River banks."}
]},
"DR Congo":{flag:"🇨🇩",capital:"Kinshasa",continent:"Africa",population:"99M",facts:[
{e:"💡",t:"DR Congo holds an estimated $24 trillion in untapped mineral wealth, including the world's largest deposits of coltan used in smartphones."},
{e:"🎭",t:"The Kongo Kingdom, one of Africa's most sophisticated pre-colonial states, maintained diplomatic relations with Portugal as early as the 15th century."},
{e:"🍽️",t:"Pondu, a stew made from fermented cassava leaves cooked slowly with palm oil and fish, is the most widely eaten dish in DR Congo."},
{e:"🏛️",t:"The Congo River is the world's deepest river at over 220 meters and generates enough hydroelectric potential to power the entire African continent."},
{e:"🌿",t:"DR Congo contains 60% of Africa's rainforest and is home to species found nowhere else, including the bonobo, okapi, and Congo peacock."},
{e:"🎵",t:"Congolese rumba from Kinshasa, featuring melodic guitar lines and layered vocals, became one of Africa's defining 20th-century musical exports."},
{e:"💡",t:"With nearly 100 million people, DR Congo is the most populous Francophone country in the world and the fourth most populous in Africa."},
{e:"🗣️",t:"Over 200 languages are spoken, but four languages — Lingala, Swahili, Tshiluba, and Kikongo — serve as regional lingua francas."},
{e:"⚽",t:"DR Congo (then Zaire) was the first sub-Saharan African country to appear in a FIFA World Cup, competing in the 1974 tournament in West Germany."},
{e:"🍽️",t:"Liboke, fish or meat marinated in spices and sealed inside banana leaves before grilling over charcoal, is a celebrated Congolese cooking technique."}
]},
"Djibouti":{flag:"🇩🇯",capital:"Djibouti",continent:"Africa",population:"1.1M",facts:[
{e:"💡",t:"Djibouti hosts more foreign military bases than any other country in Africa, including US, French, Chinese, Japanese, and Italian installations."},
{e:"🎭",t:"The Afar and Somali peoples of Djibouti have maintained nomadic traditions for millennia, with elaborate oral poetry central to their culture."},
{e:"🍽️",t:"Skoudehkaris, a rice and lamb dish spiced with cumin, cardamom, and cinnamon, is Djibouti's signature festive meal for celebrations."},
{e:"🏛️",t:"The port of Djibouti handles 95% of Ethiopia's imports and exports, making it one of the most strategically vital ports in the world."},
{e:"🌿",t:"Lake Assal in Djibouti sits 155 meters below sea level — the lowest point in Africa — and is ten times saltier than the ocean."},
{e:"🎵",t:"Balwo, a short, intense Afar love poem sung to the beat of a single drum, is the most distinctive musical tradition of Djibouti."},
{e:"💡",t:"Djibouti is one of only a handful of countries where qat, a mildly stimulant leaf, is legally chewed daily by a majority of adult men."},
{e:"🗣️",t:"Somali and Afar are the two national languages, while French and Arabic are the official languages used in government and law."},
{e:"⚽",t:"Despite its tiny size, Djibouti regularly participates in AFCON qualifiers, though it has never progressed past the group stage."},
{e:"🍽️",t:"Lahoh, a soft spongy flatbread similar to Ethiopian injera, is eaten daily in Djibouti with honey, ghee, or bean soup for breakfast."}
]},
"Equatorial Guinea":{flag:"🇬🇶",capital:"Malabo",continent:"Africa",population:"1.5M",facts:[
{e:"💡",t:"Equatorial Guinea is the only country in Africa where Spanish is an official language, a legacy of Spanish colonial rule until 1968."},
{e:"🎭",t:"The Bubi people of Bioko Island have a rich tradition of mask dances performed during harvest festivals and rites of passage."},
{e:"🍽️",t:"Succotash stew made with sweet corn, lima beans, and smoked fish reflects the blending of indigenous and colonial culinary influences."},
{e:"🏛️",t:"Malabo, the capital, sits on the island of Bioko — an unusual arrangement, as the mainland territory is a separate landmass called Río Muni."},
{e:"🌿",t:"Bioko Island is a biodiversity hotspot containing eight species of primates found nowhere else, including the endemic Bioko drill monkey."},
{e:"🎵",t:"Ibanga music, a traditional Bubi percussion and vocal style, is performed at community gatherings and has survived despite heavy missionary influence."},
{e:"💡",t:"Oil discovered in the 1990s transformed Equatorial Guinea into sub-Saharan Africa's third-largest oil producer, though wealth remains concentrated."},
{e:"🗣️",t:"Equatorial Guinea is one of only three countries in the world with three official languages: Spanish, French, and Portuguese."},
{e:"⚽",t:"Equatorial Guinea famously hosted the Africa Cup of Nations in 2012 and 2015, and co-hosted in 2012 — remarkable for such a small nation."},
{e:"🍽️",t:"Pepper soup made with fresh chili, palm oil, and river fish is a popular everyday dish eaten across the mainland Río Muni region."}
]},
"Eritrea":{flag:"🇪🇷",capital:"Asmara",continent:"Africa",population:"3.5M",facts:[
{e:"💡",t:"Eritrea only gained independence from Ethiopia in 1993 after a 30-year liberation war — one of the longest independence struggles in history."},
{e:"🎭",t:"Asmara is nicknamed 'La Piccola Roma' (Little Rome) for its extraordinarily well-preserved Italian Modernist and Art Deco architecture."},
{e:"🍽️",t:"Injera, a spongy sourdough flatbread made from teff, is the daily staple served with spiced lentil and meat stews called zigni."},
{e:"🏛️",t:"Asmara's entire city center was declared a UNESCO World Heritage Site in 2017 for its remarkable collection of 1930s Italian Futurist architecture."},
{e:"🌿",t:"Eritrea has a stunning 1,200-kilometer Red Sea coastline with some of the least disturbed coral reef ecosystems in the world."},
{e:"🎵",t:"The Eritrean tigrinya musical tradition features the krar, a six-string bowl lyre, as its defining instrument alongside the masenqo fiddle."},
{e:"💡",t:"Eritrea operates one of the most closed economies on Earth, with no private press and obligatory indefinite national military service."},
{e:"🗣️",t:"Nine languages are recognized in Eritrea, with Tigrinya, Arabic, and Tigre being the most widely spoken among its diverse population."},
{e:"⚽",t:"Cycling is enormously popular in Eritrea, which has produced multiple African championship cyclists and is famous for its mountain stage racers."},
{e:"🍽️",t:"Ful medames, slow-cooked fava beans drizzled with olive oil and lemon, is a cornerstone breakfast dish eaten across Eritrea's Muslim communities."}
]},
"Gabon":{flag:"🇬🇦",capital:"Libreville",continent:"Africa",population:"2.3M",facts:[
{e:"💡",t:"Gabon has protected over 11% of its territory as national parks, one of the highest conservation ratios in the world."},
{e:"🎭",t:"The Bwiti spiritual tradition of the Fang and Mitsogo peoples, centered on the psychedelic iboga plant, is a UNESCO-recognized cultural heritage."},
{e:"🍽️",t:"Nyembwe chicken, cooked in a sauce made from palm nuts, is considered Gabon's national dish and served at every important gathering."},
{e:"🏛️",t:"Libreville, meaning 'Free Town' in French, was founded in 1849 as a settlement for freed slaves, similar to Freetown in Sierra Leone."},
{e:"🌿",t:"Gabon's forests shelter the world's largest population of forest elephants and one of the last major strongholds of western lowland gorillas."},
{e:"🎵",t:"Bikutsi, originally a Beti rhythm from Cameroon, blended with Gabonese styles in the 1980s and became a staple of urban Gabonese nightlife."},
{e:"💡",t:"Gabon is one of Africa's wealthiest nations per capita due to oil and manganese exports, and has a relatively small, urbanized population."},
{e:"🗣️",t:"French is the official language, but over 40 Bantu languages are spoken, including Fang, Myene, Nzebi, and Teke."},
{e:"⚽",t:"Pierre-Emerick Aubameyang, one of Africa's greatest footballers, was born in Laval, France but represented Gabon internationally throughout his career."},
{e:"🍽️",t:"Smoked fish prepared over slow hardwood fires and sold wrapped in newspaper is among the most ubiquitous snacks along Libreville's waterfront."}
]},
"Gambia":{flag:"🇬🇲",capital:"Banjul",continent:"Africa",population:"2.6M",facts:[
{e:"💡",t:"Gambia is the smallest country on mainland Africa, a thin strip of land averaging only 48 kilometers wide, surrounded on three sides by Senegal."},
{e:"🎭",t:"Gambian griots, known locally as jalis, are hereditary musicians and oral historians who serve as the living memory of their communities."},
{e:"🍽️",t:"Benachin (Jollof rice), a one-pot dish of rice cooked in tomato sauce with fish or meat and vegetables, is Gambia's most beloved national meal."},
{e:"🏛️",t:"James Island (Kunta Kinteh Island), a former slave-trading fort in the Gambia River, is a UNESCO World Heritage Site tied to the Roots history."},
{e:"🌿",t:"The Gambia River runs the entire length of the country and supports dense bird populations — over 580 species, making it a birdwatcher's paradise."},
{e:"🎵",t:"The kora, a 21-string bridge harp unique to West Africa, was elevated to global fame largely through Gambian masters like Toumani Diabaté."},
{e:"💡",t:"Alex Haley's 1976 novel 'Roots' traces his ancestry to Kunta Kinte from the Gambian village of Juffureh, sparking global interest in the country."},
{e:"🗣️",t:"English is the official language, but Mandinka, Wolof, Fula, and Jola are among the most widely spoken indigenous languages."},
{e:"⚽",t:"Gambia's national team, the Scorpions, shocked the continent by reaching the Africa Cup of Nations quarter-finals for the first time in 2022."},
{e:"🍽️",t:"Domoda, a thick groundnut stew cooked with tomatoes and either fish, chicken, or beef, is a daily comfort food found in every Gambian home."}
]},
"Ghana":{flag:"🇬🇭",capital:"Accra",continent:"Africa",population:"33M",facts:[
{e:"💡",t:"Ghana became the first sub-Saharan African country to gain independence from colonial rule in 1957, under the leadership of Kwame Nkrumah."},
{e:"🎭",t:"Kente cloth, woven in bright interlocking geometric strips by the Ashanti people, is one of Africa's most iconic and symbolic textiles."},
{e:"🍽️",t:"Jollof rice is a source of intense national pride, and the ongoing 'Jollof Wars' debate between Ghana, Nigeria, and Senegal is a beloved cultural rivalry."},
{e:"🏛️",t:"Cape Coast Castle, built by the Swedes in 1653 and later used by the British, was one of the largest slave-holding sites in West Africa."},
{e:"🌿",t:"Lake Volta, created by the Akosombo Dam in 1965, is the world's largest artificial lake by surface area at 8,502 square kilometers."},
{e:"🎵",t:"Highlife music, born in Ghana in the early 1900s, blended traditional rhythms with jazz and brass-band music and spread across West Africa."},
{e:"💡",t:"Ghana is the world's second-largest cocoa producer and also a major exporter of gold — the name 'Gold Coast' dates back to European traders."},
{e:"🗣️",t:"English is the official language, while Twi (Akan), Ewe, Ga, and Dagbani are among the most widely spoken of Ghana's over 80 languages."},
{e:"⚽",t:"Ghana's Black Stars reached the FIFA World Cup quarter-finals in 2010 and came within a penalty kick of becoming the first African semifinalist."},
{e:"🍽️",t:"Fufu, pounded cassava and plantain eaten by hand with the fingers and dipped into soup, is Ghana's most traditional and ceremonial food."}
]},
"Guinea":{flag:"🇬🇳",capital:"Conakry",continent:"Africa",population:"13M",facts:[
{e:"💡",t:"Guinea holds over 25% of the world's known bauxite reserves (used to make aluminum) yet remains one of West Africa's poorest nations."},
{e:"🎭",t:"The Mandinka, Fula, and Susu peoples of Guinea each maintain rich traditions of mask ceremonies, storytelling, and elaborate wrestling festivals."},
{e:"🍽️",t:"Sauce feuille, a thick spinach-like leaf stew cooked with palm oil and smoked fish over a slow fire, is one of Guinea's most comforting dishes."},
{e:"🏛️",t:"Conakry, built on a small island connected by a causeway, is one of the most densely packed capital cities in West Africa."},
{e:"🌿",t:"Guinea's Fouta Djallon highlands are known as the 'Water Tower of West Africa,' being the source of the Niger, Senegal, and Gambia rivers."},
{e:"🎵",t:"Guinea produced some of Africa's greatest musicians, including Miriam Makeba's collaborator Fodé Kouyaté and the legendary guitarist Sekouba Bambino."},
{e:"💡",t:"Guinea was the only French West African territory to vote 'No' to the French Community in 1958, immediately gaining independence under Sékou Touré."},
{e:"🗣️",t:"French is the official language, but Pular (Fula), Mandinka, and Susu are the three dominant national languages spoken across most of Guinea."},
{e:"⚽",t:"Guinea's Syli Nationale reached the Africa Cup of Nations semi-finals in 1976 and has qualified for the tournament many times since."},
{e:"🍽️",t:"Tô, a thick millet or corn porridge served in a ball and eaten with a sauce made from okra or baobab leaves, is a staple in northern Guinea."}
]},
"Lesotho":{flag:"🇱🇸",capital:"Maseru",continent:"Africa",population:"2.2M",facts:[
{e:"💡",t:"Lesotho is one of only three countries in the world completely surrounded by another country — entirely enclosed within South Africa."},
{e:"🎭",t:"The mokorotlo, a woven straw hat with a distinctive pointed top, is Lesotho's national symbol and appears on the country's flag."},
{e:"🍽️",t:"Papa, a stiff porridge made from maize meal, is the daily staple food eaten with moroho (wild spinach) or 'mopho (bean stew)."},
{e:"🏛️",t:"The Thaba Bosiu plateau was the impenetrable mountain fortress where King Moshoeshoe I united the Basotho people and resisted Zulu and Boer attacks."},
{e:"🌿",t:"Lesotho's entire territory lies above 1,400 meters — it is the only country in the world with all territory above that altitude, earning it the nickname 'Kingdom in the Sky.'"},
{e:"🎵",t:"Famo music, a fast-paced accordion-and-drum genre born among Lesotho migrant mineworkers in South Africa, became the country's defining modern sound."},
{e:"💡",t:"The Lesotho Highlands Water Project is one of the world's largest water transfer schemes, piping water to water-scarce South Africa in exchange for royalties."},
{e:"🗣️",t:"Sesotho and English are the two official languages, and Lesotho has one of the highest literacy rates in Africa at over 85%."},
{e:"⚽",t:"Lesotho is unique in that it trains and fields fully blind football teams, with the national blind football association competing internationally."},
{e:"🍽️",t:"Joala, a traditional sorghum beer brewed by women in clay pots, is the ceremonial drink of choice at weddings, funerals, and community gatherings."}
]},
"Liberia":{flag:"🇱🇷",capital:"Monrovia",continent:"Africa",population:"5.3M",facts:[
{e:"💡",t:"Liberia, founded in 1847 by freed American slaves, is one of Africa's oldest republics and its capital Monrovia is named after US President James Monroe."},
{e:"🎭",t:"The Poro society for men and Sande society for women are powerful secret initiation institutions that still govern social life in much of Liberia."},
{e:"🍽️",t:"Palava sauce, a rich stew of bitter greens cooked with palm oil, smoked fish, and fermented seeds, is Liberia's most iconic traditional dish."},
{e:"🏛️",t:"The Executive Mansion in Monrovia, built in 1964, was heavily damaged during two devastating civil wars between 1989 and 2003."},
{e:"🌿",t:"The Sapo National Park in southeastern Liberia protects one of the largest remaining tracts of Upper Guinean rainforest, a globally critical ecosystem."},
{e:"🎵",t:"Liberian music blends indigenous Krahn and Kpelle rhythms with Caribbean and American gospel influences brought back by Americo-Liberian settlers."},
{e:"💡",t:"Ellen Johnson Sirleaf became Africa's first elected female head of state when she won Liberia's presidency in 2005 and later won the Nobel Peace Prize."},
{e:"🗣️",t:"Liberian English, called Liberian Kreyol or Kolokwa, is a creole spoken as a daily lingua franca by most of the population."},
{e:"⚽",t:"George Weah, who played for AC Milan and PSG, won the Ballon d'Or in 1995 — the only African player ever to win football's highest individual award — before becoming Liberia's president."},
{e:"🍽️",t:"Rice is so central to Liberian culture that saying 'Have you eaten rice today?' is the equivalent of asking someone how they are doing."}
]},
"Libya":{flag:"🇱🇾",capital:"Tripoli",continent:"Africa",population:"7M",facts:[
{e:"💡",t:"Libya holds Africa's largest proven oil reserves and was one of the continent's wealthiest nations per capita under Gaddafi's government."},
{e:"🎭",t:"The Tuareg people of southern Libya maintain ancient trans-Saharan caravan traditions and are renowned for their indigo-dyed clothing and silverwork."},
{e:"🍽️",t:"Bazeen, a dense unleavened bread made from barley flour cooked in boiling water and shaped by hand, is Libya's most traditional national dish."},
{e:"🏛️",t:"The Roman ruins of Leptis Magna, birthplace of Emperor Septimius Severus, are among the best-preserved Roman cities in the entire Mediterranean world."},
{e:"🌿",t:"Libya is 90% desert, and the Saharan Fezzan region in the south contains the Ubari Sand Sea, a surreal landscape of dunes surrounding crater lakes."},
{e:"🎵",t:"Libyan Amazigh (Berber) music featuring the zokra bagpipe and ghayta reed flute represents one of North Africa's most ancient surviving musical traditions."},
{e:"💡",t:"Muammar Gaddafi ruled Libya for 42 years (1969–2011) and published the Green Book, his philosophical alternative to capitalism and communism."},
{e:"🗣️",t:"Libyan Arabic dialects are heavily influenced by Berber, Turkish, and Italian, reflecting centuries of Mediterranean trade, migration, and colonization."},
{e:"⚽",t:"Libya hosted the Africa Cup of Nations in 1982 and has qualified for the tournament multiple times despite political instability."},
{e:"🍽️",t:"Asida, a sweet pudding made from flour, butter, and honey served warm, is a traditional Libyan dessert eaten at festivals and after prayers."}
]},
"Malawi":{flag:"🇲🇼",capital:"Lilongwe",continent:"Africa",population:"20M",facts:[
{e:"💡",t:"Malawi is nicknamed 'The Warm Heart of Africa' for the legendary friendliness of its people and the welcoming nature of its communities."},
{e:"🎭",t:"The Gule Wamkulu, a secret masked dance of the Chewa people performed at funerals and initiations, is a UNESCO Intangible Cultural Heritage."},
{e:"🍽️",t:"Nsima, a thick maize porridge eaten by hand, is Malawi's national staple and consumed at almost every meal accompanied by relish of vegetables or fish."},
{e:"🏛️",t:"Livingstonia, a colonial-era mission town perched on the Rift Valley escarpment, was founded in 1894 and named after explorer David Livingstone."},
{e:"🌿",t:"Lake Malawi contains more species of fish than any other lake in the world, with over 1,000 species — mostly endemic cichlids found nowhere else."},
{e:"🎵",t:"Malawian gospel music, blending Chewa and Tumbuka rhythms with Christian hymns, is the most commercially dominant genre in the country."},
{e:"💡",t:"William Kamkwamba built a working windmill from scrap parts at age 14 after reading a library book, bringing electricity to his village and inspiring a global story."},
{e:"🗣️",t:"Chichewa (Chewa) is the most widely spoken national language, while English is the official language used in government and formal education."},
{e:"⚽",t:"The Flames, Malawi's national football team, qualified for the Africa Cup of Nations for the first time in 2021, beating Uganda in a historic qualifier."},
{e:"🍽️",t:"Chambo, a tilapia species unique to Lake Malawi, is the most prized freshwater fish in the country and eaten grilled, fried, or dried and salted."}
]},
"Mali":{flag:"🇲🇱",capital:"Bamako",continent:"Africa",population:"22M",facts:[
{e:"💡",t:"The Mali Empire (1235–1600) was one of the wealthiest in world history — ruler Mansa Musa's 1324 pilgrimage to Mecca distributed so much gold it caused inflation across the Mediterranean."},
{e:"🎭",t:"Timbuktu was the intellectual capital of medieval Africa, home to the Sankore University and over 700,000 ancient manuscripts now stored in private family libraries."},
{e:"🍽️",t:"Tô, a thick sorghum or millet porridge shaped into balls and eaten with leaf sauces, is the daily staple food across most of Mali."},
{e:"🏛️",t:"The Great Mosque of Djenné, built in 1907 on 13th-century foundations, is the world's largest mud-brick structure and a UNESCO World Heritage Site."},
{e:"🌿",t:"The Niger River makes a dramatic 'Niger Inland Delta' bend through Mali, creating a vast wetland that supports millions of migratory birds and fish."},
{e:"🎵",t:"The Wassoulou music of Mali, led by artists like Oumou Sangaré, uses the distinctive kamelengoni water harp and champions women's rights through its lyrics."},
{e:"💡",t:"Mali is one of the world's largest gold producers, with gold accounting for about 75% of its export revenue despite the country being landlocked."},
{e:"🗣️",t:"Bambara is spoken by over 80% of the population as a first or second language, making it the true national lingua franca alongside official French."},
{e:"⚽",t:"Mali's youth national teams have consistently reached the finals of FIFA U-17 and U-20 World Cups, revealing an extraordinary pipeline of footballing talent."},
{e:"🍽️",t:"Maafe, a rich groundnut stew slow-cooked with lamb or beef and root vegetables in a thick peanut and tomato sauce, is one of West Africa's great dishes."}
]},
"Mauritania":{flag:"🇲🇷",capital:"Nouakchott",continent:"Africa",population:"4.5M",facts:[
{e:"💡",t:"Mauritania was the last country in the world to officially abolish slavery, doing so in 1981, and only criminalized the practice in 2007."},
{e:"🎭",t:"Mauritanian griot tradition (iggawin) features poets and musicians who preserve aristocratic genealogies and serve as royal advisors and memory keepers."},
{e:"🍽️",t:"Thiéboudienne, a one-pot rice and fish dish with vegetables cooked in tomato sauce, is shared across Mauritania and Senegal and considered a regional icon."},
{e:"🏛️",t:"The ancient caravan city of Chinguetti was once the seventh holiest city in Islam and an assembly point for West African pilgrims journeying to Mecca."},
{e:"🌿",t:"The Banc d'Arguin National Park, where the Sahara meets the Atlantic, is one of the world's most important bird sanctuaries and a UNESCO World Heritage Site."},
{e:"🎵",t:"Moorish classical music, known as El Malhoun, features haunting pentatonic melodies played on the tidinit lute and ardin harp — instruments unique to Mauritania."},
{e:"💡",t:"Nouakchott, Mauritania's capital, did not exist until 1960 — it was built from scratch in the desert as an entirely planned post-independence capital city."},
{e:"🗣️",t:"Hassaniya Arabic is the dominant language, but Pulaar, Soninke, and Wolof are also official national languages representing the Sahel African population."},
{e:"⚽",t:"Mauritania qualified for the Africa Cup of Nations for the first time ever in 2019, a historic breakthrough for a nation more associated with traditional wrestling."},
{e:"🍽️",t:"Camel milk, drunk fresh or fermented into a slightly sour yogurt-like drink called zrig, is a prized dietary staple and symbol of Mauritanian nomadic life."}
]},
"Mozambique":{flag:"🇲🇿",capital:"Maputo",continent:"Africa",population:"32M",facts:[
{e:"💡",t:"Mozambique has one of the world's longest coastlines at 2,470 kilometers and contains some of the Indian Ocean's most pristine coral reefs."},
{e:"🎭",t:"The Makonde people of northern Mozambique carve intricate ujamaa family tree sculptures — towering interlocked figures representing community and ancestry."},
{e:"🍽️",t:"Piri piri prawns, large flame-grilled shrimp marinated in fiery chili sauce, are Mozambique's most famous dish and beloved across southern Africa."},
{e:"🏛️",t:"The Island of Mozambique, a tiny coral island that served as the Portuguese East Africa capital for 400 years, is a UNESCO World Heritage Site."},
{e:"🌿",t:"The Quirimbas Archipelago in northern Mozambique is an 11-island chain containing one of the world's last great unfished coral reef ecosystems."},
{e:"🎵",t:"Marrabenta, a lively guitar-and-percussion genre born in Maputo's shanty towns in the 1940s, is Mozambique's defining national popular music style."},
{e:"💡",t:"Mozambique only gained independence from Portugal in 1975 after a ten-year liberation war, then immediately descended into a brutal 15-year civil war."},
{e:"🗣️",t:"Portuguese is the official language, but Emakhuwa, Xichangana, and Elomwe are among the most widely spoken of Mozambique's 43 Bantu languages."},
{e:"⚽",t:"Eusébio, one of football's all-time greats and top scorer at the 1966 World Cup, was born in Lourenço Marques (now Maputo), Mozambique."},
{e:"🍽️",t:"Matapa, a stew of cassava leaves cooked in coconut milk with garlic and either crab, shrimp, or peanuts, is a beloved dish from the northern coast."}
]},
"Namibia":{flag:"🇳🇦",capital:"Windhoek",continent:"Africa",population:"2.6M",facts:[
{e:"💡",t:"Namibia was the first country in the world to incorporate environmental protection into its constitution, in 1990."},
{e:"🎭",t:"The Himba people of northwestern Namibia cover their skin and hair in otjize, a mixture of red ochre and butterfat, as a beauty and protection ritual."},
{e:"🍽️",t:"Kapana, strips of beef grilled on an open fire and sprinkled with chili and tomato sauce, is the most popular street food in Windhoek's Katutura district."},
{e:"🏛️",t:"Kolmanskop, an abandoned diamond-mining ghost town in the Namib Desert, is now slowly being swallowed by sand dunes and is a major tourist attraction."},
{e:"🌿",t:"The Namib Desert is the oldest desert in the world at 55 million years old and home to species adapted to fog, including the fog-basking beetle."},
{e:"🎵",t:"Namibian traditional music features the //guashi thumb piano of the San people, one of the oldest known musical instruments on Earth."},
{e:"💡",t:"Namibia has one of the world's lowest population densities at just 3 people per square kilometer, with vast stretches of land virtually uninhabited."},
{e:"🗣️",t:"English is the official language, but Afrikaans and German are widely spoken — a legacy of German colonial rule from 1884 to 1915."},
{e:"⚽",t:"Namibia qualified for the Africa Cup of Nations for the first time in 2019 and has been building its football infrastructure steadily since independence."},
{e:"🍽️",t:"Biltong, dried and cured meat (usually game or beef) seasoned with coriander and vinegar, is a Namibian and South African snack eaten as a daily staple."}
]},
"Niger":{flag:"🇳🇪",capital:"Niamey",continent:"Africa",population:"25M",facts:[
{e:"💡",t:"Niger is the world's largest landlocked country outside of Asia and one of the hottest nations on Earth, with temperatures regularly exceeding 45°C."},
{e:"🎭",t:"The Cure Salée festival in the Aïr region brings Tuareg and Wodaabe nomads together each year for a celebration of the end of the rainy season."},
{e:"🍽️",t:"Dambou, a couscous made from millet served with a sauce of baobab leaves, dried fish, and groundnuts, is a staple meal across Niger."},
{e:"🏛️",t:"The Sultans Palace in Agadez, built around 1515, is the seat of the ancient Agadez Sultanate and part of a UNESCO World Heritage Site."},
{e:"🌿",t:"The Aïr Mountains in the Sahara contain ancient rock engravings of crocodiles, elephants, and giraffes from when the Sahara was a green savanna."},
{e:"🎵",t:"Tuareg desert blues, popularized globally by the band Tinariwen (from Mali) and Nigerien artist Bombino, blends traditional guitar with electric rock."},
{e:"💡",t:"Niger was the world's fourth-largest uranium producer, and the Arlit mines supplied French nuclear reactors for decades during and after the Cold War."},
{e:"🗣️",t:"French is the official language, but Hausa is the most widely spoken language with over 50% of the population speaking it as a first or second tongue."},
{e:"⚽",t:"Niger's Mena national football team qualified for the Africa Cup of Nations for the first time in 2012, a milestone celebrated across the country."},
{e:"🍽️",t:"Kilishi, a thin sheet of dried spiced beef coated in a paste of groundnuts and chili, is Niger's most famous preserved food and a prized trade item."}
]},
"Rwanda":{flag:"🇷🇼",capital:"Kigali",continent:"Africa",population:"14M",facts:[
{e:"💡",t:"Rwanda is one of the world's fastest reforming economies and has been ranked among Africa's least corrupt and most business-friendly nations."},
{e:"🎭",t:"Umuganda, a mandatory monthly community work day where all citizens clean streets, build schools, and maintain public spaces, is enshrined in Rwandan law."},
{e:"🍽️",t:"Isombe, a dish of mashed cassava leaves cooked with palm oil, garlic, and smoked fish, is a beloved traditional meal eaten across Rwanda."},
{e:"🏛️",t:"The Kigali Genocide Memorial holds the remains of over 250,000 victims of the 1994 genocide and serves as both a burial site and educational museum."},
{e:"🌿",t:"Rwanda's Volcanoes National Park is home to over half of the world's remaining mountain gorillas — about 500 individuals — living in dense bamboo forest."},
{e:"🎵",t:"Intore dance, a traditional warrior performance featuring feathered headdresses and precise footwork, is performed at national ceremonies and for state visitors."},
{e:"💡",t:"Rwanda was the first country in the world to elect a parliament with a female majority — women hold over 60% of seats in the Chamber of Deputies."},
{e:"🗣️",t:"Rwanda has four official languages: Kinyarwanda, French, English, and Swahili — though English replaced French as the dominant language of instruction in 2008."},
{e:"⚽",t:"The Amavubi (Wasps) national football team has steadily improved, and Rwanda's football league is increasingly attracting investment and international attention."},
{e:"🍽️",t:"Brochettes de viande, skewered grilled goat meat served with fried plantain and fresh chili, are eaten at virtually every social gathering in Rwanda."}
]},
"Senegal":{flag:"🇸🇳",capital:"Dakar",continent:"Africa",population:"17M",facts:[
{e:"💡",t:"Senegal has never experienced a military coup and has peacefully transferred power multiple times, making it one of West Africa's most stable democracies."},
{e:"🎭",t:"Sabar drumming, a thunderous performance tradition of the Wolof people, is the centerpiece of every Senegalese celebration, from weddings to political rallies."},
{e:"🍽️",t:"Thiéboudienne, a dish of rice cooked in a rich tomato and fish broth stuffed with herbs, is Senegal's national dish and considered the origin of all West African rice dishes."},
{e:"🏛️",t:"Gorée Island, just off Dakar's coast, was a major slave-trading port and is now a UNESCO World Heritage Site visited by world leaders as a memorial."},
{e:"🌿",t:"The Sine-Saloum Delta in Senegal is a UNESCO Biosphere Reserve where mangrove channels, baobab forests, and sacred shell mounds coexist."},
{e:"🎵",t:"Youssou N'Dour's mbalax music fused Wolof sabar rhythms with jazz, soul, and Cuban music to become a globally celebrated Senegalese sound."},
{e:"💡",t:"Dakar hosted the end of the famous Paris-Dakar Rally for decades and is the westernmost capital city on the African continent."},
{e:"🗣️",t:"While French is the official language, Wolof is spoken by over 80% of the population and serves as the true national language of daily life."},
{e:"⚽",t:"Senegal reached the FIFA World Cup final in 2002, its debut appearance, and won its first Africa Cup of Nations title in 2022 under Aliou Cissé."},
{e:"🍽️",t:"Yassa poulet, grilled chicken marinated in a tangy caramelized onion and lemon sauce, is one of Senegal's most exported dishes found across the Diaspora."}
]},
"Sierra Leone":{flag:"🇸🇱",capital:"Freetown",continent:"Africa",population:"8.1M",facts:[
{e:"💡",t:"Freetown was founded in 1792 as a home for freed slaves from Britain and Nova Scotia and is one of Africa's oldest planned cities."},
{e:"🎭",t:"The Bundu (Sande) Society of the Mende and Temne is one of the only female-controlled secret society traditions in the world with its own iconic black helmet mask."},
{e:"🍽️",t:"Cassava leaf stew, slow-cooked pounded cassava greens with palm oil, dried fish, and groundnut paste, is Sierra Leone's most cherished comfort food."},
{e:"🏛️",t:"Cotton Tree, an enormous 500-year-old cotton tree in central Freetown, stands as a national symbol — freed slaves are said to have gathered beneath it upon arrival."},
{e:"🌿",t:"Tiwai Island Wildlife Sanctuary in southeastern Sierra Leone has the highest primate density in West Africa, including rare pygmy hippos."},
{e:"🎵",t:"Afrobeats and palm wine music traditions merged in Sierra Leone to create a vibrant urban sound centered on Freetown's lively bar and club scene."},
{e:"💡",t:"Sierra Leone suffered a devastating civil war from 1991 to 2002 that killed over 50,000 people and displaced millions more across the region."},
{e:"🗣️",t:"Krio, an English-based creole language spoken by descendants of freed slaves, serves as the national lingua franca understood by over 95% of the population."},
{e:"⚽",t:"Sierra Leone's national team, the Leone Stars, qualified for the Africa Cup of Nations in 2022 after a 25-year absence, announcing the country's football revival."},
{e:"🍽️",t:"Groundnut soup, a thick peanut-based stew served over rice with smoked fish or meat, is eaten across Sierra Leone at every gathering large or small."}
]},
"Somalia":{flag:"🇸🇴",capital:"Mogadishu",continent:"Africa",population:"17M",facts:[
{e:"💡",t:"Somalia has the longest coastline of any mainland African country at 3,333 kilometers, stretching along the Indian Ocean and Gulf of Aden."},
{e:"🎭",t:"Somali poetry (gabay) is held in the highest cultural esteem — a skilled poet commands more social respect than a warrior and poets have historically ended wars."},
{e:"🍽️",t:"Bariis iskukaris, spiced rice cooked with cumin, cardamom, cinnamon, and raisins served with goat meat, is Somalia's most celebrated festive dish."},
{e:"🏛️",t:"Mogadishu, one of Africa's oldest cities, was a thriving trading metropolis in the 10th century and was described by Ibn Battuta as an enormous and prosperous town."},
{e:"🌿",t:"The Jubba and Shabelle rivers flow through Somalia from Ethiopian highlands, creating the only agricultural heartland in an otherwise arid country."},
{e:"🎵",t:"Somali folk music features the oud as a central instrument, and the qasida poetic song tradition bridges Arabic classical music with indigenous Cushitic oral arts."},
{e:"💡",t:"Somalia has been without a functioning central government for much of the time since 1991, making it one of the world's longest-running state collapse situations."},
{e:"🗣️",t:"Somali is the official language and is spoken by virtually the entire population — one of the highest rates of linguistic uniformity of any African nation."},
{e:"⚽",t:"Despite decades of instability, Somali football has been quietly rebuilding, with the national team competing in AFCON qualifiers and a domestic league operating in Mogadishu."},
{e:"🍽️",t:"Anjero, a spongy sourdough flatbread similar to Ethiopian injera but smaller and slightly sweeter, is the breakfast staple eaten with honey and tea across Somalia."}
]},
"Somaliland":{flag:"🇸🇴",capital:"Hargeisa",continent:"Africa",population:"5.7M",facts:[
{e:"💡",t:"Somaliland declared independence from Somalia in 1991 and has maintained its own government, currency, and military for over 30 years without international recognition."},
{e:"🎭",t:"Somaliland has held multiple peaceful democratic elections with smooth transfers of power — a remarkable record in a region otherwise marked by instability."},
{e:"🍽️",t:"Cambuulo, a dish of slow-cooked kidney beans mixed with sugar and butter, is a traditional Somaliland comfort food served as an evening meal."},
{e:"🏛️",t:"The Laas Geel cave complex near Hargeisa contains some of Africa's best-preserved prehistoric rock art, painted approximately 9,000–3,000 years ago."},
{e:"🌿",t:"Somaliland's Gulf of Aden coastline features some of the least explored and most pristine marine environments in the Horn of Africa region."},
{e:"🎵",t:"Heello, a Somaliland song tradition featuring lyrical love poetry set to acoustic oud, is distinct from southern Somali music styles and deeply local."},
{e:"💡",t:"The Somaliland shilling is a fully functioning local currency not recognized internationally, yet it has remained relatively stable for over two decades."},
{e:"🗣️",t:"The Somali language spoken in Somaliland has its own distinct northern dialects, notably the Isaaq dialect, differing from the southern Mogadishu varieties."},
{e:"⚽",t:"Somaliland has its own football association and domestic league, though it cannot participate in FIFA or CAF competitions due to its unrecognized status."},
{e:"🍽️",t:"Baasto iyo hilib, pasta cooked with a rich tomato and spiced beef sauce, reflects Italian colonial influence on Somali cuisine and is widely loved in Hargeisa."}
]},
"South Sudan":{flag:"🇸🇸",capital:"Juba",continent:"Africa",population:"11M",facts:[
{e:"💡",t:"South Sudan became the world's newest country on July 9, 2011, after seceding from Sudan following a 2011 independence referendum."},
{e:"🎭",t:"The Dinka people, South Sudan's largest ethnic group, practice cattle-based pastoralism and regard their longhorn cattle as sacred symbols of wealth and identity."},
{e:"🍽️",t:"Asida, a thick sorghum porridge served with a meat or groundnut stew, is the foundational daily meal eaten across most of South Sudan."},
{e:"🏛️",t:"The town of Juba on the White Nile has transformed rapidly from a small colonial outpost to a bustling capital city since independence in 2011."},
{e:"🌿",t:"The Sudd wetland in South Sudan is one of the world's largest freshwater ecosystems, covering up to 130,000 square kilometers during flood season."},
{e:"🎵",t:"South Sudanese music blends Dinka and Nuer percussion traditions with East African influences, often featuring lyres, drums, and group vocal chanting."},
{e:"💡",t:"South Sudan holds the largest oil reserves in sub-Saharan Africa but has been devastated by civil war since 2013, with millions displaced."},
{e:"🗣️",t:"English is the official language, while Juba Arabic, a local creole, is the most widely spoken vernacular across the capital and trading centers."},
{e:"⚽",t:"South Sudan joined FIFA in 2012 and competed in its first-ever World Cup qualifier in 2015, just four years after becoming an independent nation."},
{e:"🍽️",t:"Ful medames, slow-cooked fava beans eaten with bread or sorghum flatbread and drizzled with olive oil and chili, is a popular breakfast across South Sudan."}
]},
"Sudan":{flag:"🇸🇩",capital:"Khartoum",continent:"Africa",population:"46M",facts:[
{e:"💡",t:"Sudan has more ancient pyramids than Egypt — over 200 Nubian pyramids built by the Kushite kingdoms between 700 BC and 350 AD still stand in the desert."},
{e:"🎭",t:"The Sufi whirling dervish ceremony held every Friday evening at Omdurman's Hamed el-Nil tomb is one of Africa's most extraordinary living spiritual spectacles."},
{e:"🍽️",t:"Ful medames, slow-cooked fava beans served with bread and eggs, is the national breakfast eaten by virtually every Sudanese family every morning."},
{e:"🏛️",t:"Meroe, the capital of the ancient Kingdom of Kush, is a UNESCO World Heritage Site containing over 200 pyramids and extensive royal cemeteries."},
{e:"🌿",t:"The confluence of the Blue and White Nile Rivers in Khartoum is one of Africa's most significant geographical landmarks, visible from satellite."},
{e:"🎵",t:"Sudanese music blends Arabic maqam scales with Nubian pentatonic melodies and sub-Saharan percussion, creating one of Africa's most distinctive sounds."},
{e:"💡",t:"Sudan was the largest country in Africa by area until South Sudan's secession in 2011, after which Algeria took that distinction."},
{e:"🗣️",t:"Arabic is the official language and spoken by most of the population, but over 70 indigenous languages are spoken across Sudan's diverse regions."},
{e:"⚽",t:"Sudan was the first sub-Saharan African country to participate in a FIFA World Cup, competing in the 1970 tournament in Mexico."},
{e:"🍽️",t:"Kisra, a thin fermented flatbread made from sorghum, is baked on a hot iron plate and used as the daily bread of choice across central and northern Sudan."}
]},
"Eswatini":{flag:"🇸🇿",capital:"Mbabane",continent:"Africa",population:"1.2M",facts:[
{e:"💡",t:"Eswatini, formerly known as Swaziland, renamed itself in 2018 — the king's decree on the 50th independence anniversary was to use the country's true Swati name."},
{e:"🎭",t:"The annual Incwala ceremony, the most sacred event in the Swazi calendar, is a multi-day royal ritual of kingship, renewal, and first fruits performed in late December."},
{e:"🍽️",t:"Emasi emahewu, a combination of fermented sour milk and fermented maize porridge, is a traditional Swazi food eaten for breakfast and believed to promote health."},
{e:"🏛️",t:"Lobamba is Eswatini's royal and legislative capital, separate from the administrative capital Mbabane — one of very few countries with two functioning capitals."},
{e:"🌿",t:"Eswatini lies between South Africa and Mozambique and contains three distinct ecological zones: Highveld, Middleveld, and Lowveld, each with unique vegetation."},
{e:"🎵",t:"The Reed Dance (Umhlanga), where tens of thousands of young Swazi women march before the queen mother carrying reeds, is one of Africa's largest royal ceremonies."},
{e:"💡",t:"Eswatini is one of the last absolute monarchies in Africa, where the king holds supreme executive, legislative, and judicial power."},
{e:"🗣️",t:"SiSwati and English are both official languages, and virtually the entire population speaks SiSwati as their first language."},
{e:"⚽",t:"Eswatini's national team, the Sihlangu Semnikati, has yet to qualify for the Africa Cup of Nations but competes actively in COSAFA regional tournaments."},
{e:"🍽️",t:"Sishwala, a very stiff maize porridge served with a relish of meat, beans, or leafy vegetables, is the foundational everyday meal in Eswatini."}
]},
"Tanzania":{flag:"🇹🇿",capital:"Dodoma",continent:"Africa",population:"64M",facts:[
{e:"💡",t:"Tanzania contains Africa's highest point (Mount Kilimanjaro at 5,895 m), deepest lake (Tanganyika at 1,470 m), and largest lake (Victoria) all within its borders."},
{e:"🎭",t:"The Maasai people of northern Tanzania maintain their ancient pastoral culture, distinctive red shukas, and elaborate beadwork jewelry traditions."},
{e:"🍽️",t:"Ugali na samaki, stiff maize porridge served with coastal-spiced fish in coconut milk broth, is Tanzania's quintessential everyday meal in both inland and coastal regions."},
{e:"🏛️",t:"The old Stone Town of Zanzibar, a UNESCO World Heritage Site, is a labyrinth of narrow streets, ornate carved Arab doors, and 19th-century merchant palaces."},
{e:"🌿",t:"The Serengeti hosts the largest mammal migration on Earth — over 2 million wildebeest, zebra, and gazelle cycle across 30,000 square kilometers annually."},
{e:"🎵",t:"Bongo Flava, Tanzania's genre blending hip-hop, R&B, and taarab, has become East Africa's dominant popular music genre since the late 1990s."},
{e:"💡",t:"Swahili, which originated on Tanzania's Zanzibar coast from Arabic and Bantu trading interactions, is spoken by over 200 million people across East Africa."},
{e:"🗣️",t:"Tanzania is one of Africa's most linguistically united nations — Swahili is spoken by virtually everyone as a first or second language alongside 130 tribal languages."},
{e:"⚽",t:"Taifa Stars, Tanzania's national football team, has struggled to replicate the country's 1980 Africa Cup participation, but Tanzanian players excel in regional leagues."},
{e:"🍽️",t:"Zanzibar's spice trade history produced a distinct cuisine — pilau rice cooked with cloves, cardamom, cinnamon, and cumin reflects the island's 1,000-year Arab heritage."}
]},
"Togo":{flag:"🇹🇬",capital:"Lomé",continent:"Africa",population:"8.7M",facts:[
{e:"💡",t:"Togo is one of Africa's narrowest countries at just 115 kilometers wide at its broadest point, yet stretches 550 kilometers from north to south."},
{e:"🎭",t:"Akodessewa Fetish Market in Lomé is the world's largest voodoo market, selling thousands of animal parts, skulls, and talismans used in traditional spiritual practice."},
{e:"🍽️",t:"Akumé, a maize porridge served with a rich sauce of tomatoes, onions, and smoked fish or crab, is Togo's most widely eaten traditional meal."},
{e:"🏛️",t:"Lomé's Grand Marché is one of West Africa's largest markets and is famously run almost entirely by women traders known as the Nana Benz."},
{e:"🌿",t:"The Koutammakou landscape of northern Togo, where the Batammariba people build mud tower houses called takienta, is a UNESCO World Heritage Site."},
{e:"🎵",t:"Agbadza, a communal drumming and dance tradition of the Ewe people, is performed at funerals, festivals, and community gatherings across southern Togo."},
{e:"💡",t:"Togo was a German colony from 1884 to 1914, after which it was split between Britain and France — a partition that divided the Ewe people across multiple borders."},
{e:"🗣️",t:"French is the official language, but Ewe and Kabiye are recognized national languages, and over 40 indigenous languages are spoken across the country."},
{e:"⚽",t:"Emmanuel Adebayor, one of Africa's most prolific strikers who played for Arsenal and Manchester City, was born and raised in Lomé, Togo."},
{e:"🍽️",t:"Gboma dessi, a spinach-like leaf cooked in palm oil with smoked shrimp and fermented locust beans (dadawa), is a beloved coastal Togolese stew."}
]},
"Tunisia":{flag:"🇹🇳",capital:"Tunis",continent:"Africa",population:"12M",facts:[
{e:"💡",t:"Tunisia is the only country that emerged from the Arab Spring with a functioning democracy, though it has since experienced significant political backsliding."},
{e:"🎭",t:"The ancient city of Carthage, founded by Phoenician queen Dido around 814 BC, was once Rome's greatest rival and the capital of a Mediterranean empire."},
{e:"🍽️",t:"Brik, a thin pastry filled with an egg, tuna, and capers and deep-fried until crispy, is Tunisia's most beloved snack eaten at every café and street stall."},
{e:"🏛️",t:"The Bardo National Museum in Tunis holds the world's largest collection of Roman mosaics, salvaged from the villas of ancient North Africa."},
{e:"🌿",t:"Tunisia's Chott el-Djerid salt lake was used as the filming location for the desert planet Tatooine in the original Star Wars trilogy."},
{e:"🎵",t:"Malouf, a classical Andalusian music tradition brought to Tunisia by Muslims expelled from Spain in 1492, is preserved in conservatories to this day."},
{e:"💡",t:"Hannibal Barca, the Carthaginian general who famously crossed the Alps with war elephants to attack Rome, was born near modern-day Tunis around 247 BC."},
{e:"🗣️",t:"Tunisian Arabic (Darija) is the everyday spoken language and is heavily influenced by Berber, French, Italian, and Spanish due to Tunisia's layered history."},
{e:"⚽",t:"Tunisia was the first African nation to win a World Cup match, defeating Mexico 3-1 in 1978 — and qualified for every World Cup from 1978 through 2022."},
{e:"🍽️",t:"Harissa, a fiery chili paste made with dried peppers, garlic, coriander, and caraway, originated in Tunisia and is now used across North African and global cooking."}
]},
"Uganda":{flag:"🇺🇬",capital:"Kampala",continent:"Africa",population:"48M",facts:[
{e:"💡",t:"Uganda is nicknamed 'The Pearl of Africa' — a description first used by Winston Churchill in 1908, captivated by the country's extraordinary beauty and biodiversity."},
{e:"🎭",t:"The Buganda Kingdom, one of Africa's most sophisticated pre-colonial states, has maintained its monarchy and cultural institutions continuously since the 14th century."},
{e:"🍽️",t:"Matoke, steamed and mashed green bananas wrapped in banana leaves and cooked in a stew sauce, is Uganda's national dish and eaten daily by most Ugandans."},
{e:"🏛️",t:"The Kasubi Tombs, burial site of Buganda's kings, is a UNESCO World Heritage Site and one of Africa's most significant living cultural monuments."},
{e:"🌿",t:"Bwindi Impenetrable Forest in southwestern Uganda shelters nearly half of all mountain gorillas alive today in dense ancient rainforest."},
{e:"🎵",t:"Afrobeats mixed with traditional Buganda rhythms gave birth to Ugandan Afrobeat and Afropop, with artists like Eddy Kenzo winning BET Awards."},
{e:"💡",t:"The Nile River, the world's longest river, begins at Jinja in Uganda where it flows out of Lake Victoria and starts its 6,650-kilometer journey to the Mediterranean."},
{e:"🗣️",t:"English and Swahili are both official languages, while Luganda, spoken by the Baganda people, is the most widely understood vernacular language."},
{e:"⚽",t:"Uganda's Cranes qualified for the Africa Cup of Nations in 2017 after a 38-year absence, sparking national celebrations and a football renaissance."},
{e:"🍽️",t:"Rolex (not the watch) is Uganda's most famous street food — a chapati flatbread rolled around a fried egg omelette with vegetables, sold everywhere in Kampala."}
]},
"Zambia":{flag:"🇿🇲",capital:"Lusaka",continent:"Africa",population:"20M",facts:[
{e:"💡",t:"Zambia is one of the world's largest copper producers and the Copperbelt region fueled the country's economy for much of the 20th century."},
{e:"🎭",t:"The Kuomboka ceremony of the Lozi people, where the king's barge is paddled from flooded plains to higher ground with 100 royal drummers, is one of Africa's grandest traditions."},
{e:"🍽️",t:"Nshima, a thick maize porridge rolled into balls by hand and dipped into relishes of dried fish, beans, or vegetables, is Zambia's staple and cultural cornerstone."},
{e:"🏛️",t:"Victoria Falls, which Zambia shares with Zimbabwe, was named by David Livingstone in 1855 — though local Tonga people have called it Mosi-oa-Tunya ('The Smoke That Thunders') for centuries."},
{e:"🌿",t:"The Kafue National Park is one of Africa's largest parks at 22,400 square kilometers and contains a stunning array of predators, antelopes, and waterbirds."},
{e:"🎵",t:"Zambian Kalindula music, featuring the kalindula bass guitar played with one finger, developed in the Copperbelt in the 1970s and became a uniquely Zambian sound."},
{e:"💡",t:"Zambia was the first African country to send an athlete to compete in the Winter Olympics, when Samuel Matete competed in Albertville in 1992."},
{e:"🗣️",t:"English is the official language, but Bemba, Nyanja, Tonga, and Lozi are among the most widely spoken of Zambia's over 70 indigenous languages."},
{e:"⚽",t:"In 2012, Zambia won the Africa Cup of Nations against Ivory Coast on penalties — playing the final in Libreville, near where the 1993 team died in a plane crash."},
{e:"🍽️",t:"Chikanda, sometimes called 'African polony,' is a vegetarian cake made from wild orchid tubers and groundnuts — a delicacy unique to Zambia and neighboring countries."}
]},
"Zimbabwe":{flag:"🇿🇼",capital:"Harare",continent:"Africa",population:"16M",facts:[
{e:"💡",t:"Zimbabwe once had one of Africa's most educated populations, with literacy rates above 90%, a legacy it maintains despite severe economic hardship."},
{e:"🎭",t:"The Zimbabwe bird, a carved soapstone eagle found at the Great Zimbabwe ruins, appears on the national flag and has been a symbol of the nation for centuries."},
{e:"🍽️",t:"Sadza, a thick maize porridge eaten by hand and paired with stewed vegetables, beans, or beef, is Zimbabwe's national dish eaten twice daily by most households."},
{e:"🏛️",t:"Great Zimbabwe, built between the 11th and 15th centuries without mortar, is sub-Saharan Africa's largest ancient stone structure and gave the country its name."},
{e:"🌿",t:"Victoria Falls on the Zambezi River is the world's largest waterfall by combined width and height — at peak flow, over 500 million liters per minute cascade over the edge."},
{e:"🎵",t:"Chimurenga music, pioneered by Thomas Mapfumo and blending traditional mbira thumb piano with electric guitar, became the soundtrack of Zimbabwe's liberation struggle."},
{e:"💡",t:"Zimbabwe's hyperinflation crisis of 2008 produced the world's largest banknote denomination: the 100 trillion dollar bill, now a collectors' item worldwide."},
{e:"🗣️",t:"Zimbabwe has 16 official languages, the most of any African country, with Shona and Ndebele being the two most widely spoken."},
{e:"⚽",t:"The Warriors national team qualified for the Africa Cup of Nations in 2004, 2006, 2019, and 2021, consistently punching above their weight in African football."},
{e:"🍽️",t:"Mopane worms, the caterpillars of the Emperor moth dried or fried and eaten as a high-protein snack, are a traditional delicacy sold in markets across Zimbabwe."}
]},
"Afghanistan":{flag:"🇦🇫",capital:"Kabul",continent:"Asia",population:"43M",facts:[
{e:"💡",t:"Afghanistan has been continuously inhabited for over 50,000 years, making it one of the oldest continuously inhabited regions on Earth."},
{e:"🏛️",t:"The ancient city of Balkh, once called the 'Mother of Cities', was a major center of Zoroastrianism and one of the earliest cities in the world."},
{e:"🍽️",t:"Mantu — steamed dumplings filled with spiced lamb and onions, topped with yogurt and tomato sauce — is considered Afghanistan's national dish."},
{e:"🎭",t:"Buzkashi, a sport where horse-mounted players compete to drag a goat carcass across a goal line, is the national sport and dates back to the era of Genghis Khan."},
{e:"🌿",t:"Afghanistan produces over 90% of the world's lapis lazuli, the vivid blue gemstone prized since antiquity and used in Tutankhamun's death mask."},
{e:"🎵",t:"The rubab, a short-necked lute originating in eastern Afghanistan, is known as the 'lion of instruments' and is the forefather of the Indian sarod."},
{e:"💡",t:"The Minaret of Jam, built around 1190 AD in a remote valley, stands 65 metres tall and is one of the finest surviving examples of Islamic architecture."},
{e:"🗣️",t:"Afghanistan has two official languages — Dari and Pashto — but over 30 languages are spoken across the country, including Uzbek, Turkmen, and Balochi."},
{e:"⚽",t:"Afghanistan's national football team qualified for the South Asian Football Federation Championship multiple times, achieving regional prominence despite decades of conflict."},
{e:"🍽️",t:"Ashak, leek-filled dumplings served with meat sauce and strained yogurt, is a beloved dish that showcases the Persian culinary influence on Afghan cuisine."}
]},
"Iraq":{flag:"🇮🇶",capital:"Baghdad",continent:"Asia",population:"42M",facts:[
{e:"💡",t:"Iraq is home to Mesopotamia, the 'Cradle of Civilization', where writing, the wheel, and the concept of time (60-minute hours) were invented over 5,000 years ago."},
{e:"🏛️",t:"The ancient city of Babylon, near modern Hillah, was once the largest city in the world and home to one of the Seven Wonders — the Hanging Gardens."},
{e:"🍽️",t:"Masgouf — a slow-grilled carp split open and cooked over an open fire — is Iraq's national dish and has been eaten along the Tigris River for thousands of years."},
{e:"🎭",t:"The Iraqi maqam, a complex classical vocal and instrumental tradition, was inscribed on UNESCO's Intangible Cultural Heritage list in 2003."},
{e:"🌿",t:"Iraq sits atop some of the world's largest oil reserves, but it is also home to the Mesopotamian Marshes — one of the world's largest wetland ecosystems and a biodiversity hotspot."},
{e:"🎵",t:"Naseem al-Ruh ('Breeze of the Soul') is a beloved Iraqi patriotic song from the 1920s that remains deeply embedded in national identity a century later."},
{e:"💡",t:"The Code of Hammurabi, one of the earliest and most complete written legal codes in history, was created in ancient Babylon around 1754 BC."},
{e:"🗣️",t:"Mesopotamian Arabic spoken in Iraq retains vocabulary and grammatical features from ancient Akkadian and Aramaic, languages spoken 3,000 years ago."},
{e:"⚽",t:"Iraq won the AFC Asian Cup in 2007, beating Saudi Arabia in the final — a victory that briefly united a nation in the midst of civil conflict."},
{e:"🍽️",t:"Kleicha, date-filled pastry cookies flavored with cardamom and rosewater, are Iraq's national cookie and are traditionally baked for Eid celebrations."}
]},
"Israel":{flag:"🇮🇱",capital:"Jerusalem",continent:"Asia",population:"9.7M",facts:[
{e:"💡",t:"Israel has the highest number of museums per capita of any country in the world, with over 200 museums for its relatively small population."},
{e:"🏛️",t:"The Dead Sea Scrolls, discovered near Qumran between 1947 and 1956, are the oldest known manuscripts of the Hebrew Bible, dating back over 2,000 years."},
{e:"🍽️",t:"Hummus is so central to Israeli cuisine that the country holds the world record for the largest plate of hummus ever made — 4,000 kg prepared in 2010."},
{e:"🎭",t:"Purim is celebrated with elaborate costumes, theatrical performances, and the reading of the Book of Esther — a tradition maintained for over 2,400 years."},
{e:"🌿",t:"The Sea of Galilee (Lake Kinneret) is Israel's only freshwater lake and its primary water reservoir, sitting 209 metres below sea level — the lowest freshwater lake on Earth."},
{e:"🎵",t:"Israeli folk dance (Rikud Amami), particularly the Hora circle dance brought by Eastern European immigrants, became a symbol of collective identity in early statehood."},
{e:"💡",t:"Israel is a world leader in drip irrigation technology, developed in the 1960s, which has transformed agriculture in arid regions across the globe."},
{e:"🗣️",t:"Hebrew is the only language in history to have been successfully revived as a native spoken language after centuries of use only in religious texts."},
{e:"⚽",t:"Despite its small size, Israel has won the Eurovision Song Contest four times — in 1978, 1979, 1998, and 2018 — with its 1979 victory being the first consecutive win in contest history."},
{e:"🍽️",t:"Shakshuka — eggs poached in a spiced tomato and pepper sauce — originated in North African Jewish communities and is now an iconic Israeli breakfast dish."}
]},
"Kuwait":{flag:"🇰🇼",capital:"Kuwait City",continent:"Asia",population:"4.9M",facts:[
{e:"💡",t:"Kuwait sits on roughly 6% of the world's proven oil reserves, giving it one of the highest GDP per capita figures globally despite having no income tax."},
{e:"🏛️",t:"The Kuwait Towers, completed in 1979, are iconic modernist structures that serve as water storage towers and an observation deck — a symbol of Kuwait's post-oil prosperity."},
{e:"🍽️",t:"Machboos, a spiced rice dish slow-cooked with lamb or chicken and dried limes (loomi), is Kuwait's national dish and is deeply rooted in Bedouin tradition."},
{e:"🎭",t:"Kuwait had one of the most vibrant theater and arts scenes in the Arab world during the 1960s–70s, earning the nickname 'the Hollywood of the Gulf'."},
{e:"🌿",t:"Kuwait has no permanent rivers or lakes and receives an average of just 117 mm of rainfall per year, making it one of the most arid countries on Earth."},
{e:"🎵",t:"The sawt music tradition — blending African, Indian, and Arabian melodic elements — developed among Kuwait's pearl-diving communities and is now on UNESCO's heritage list."},
{e:"💡",t:"Kuwait was the first Gulf state to establish a parliament and constitution in 1962, giving it the longest constitutional history of any Gulf nation."},
{e:"🗣️",t:"Kuwaiti Arabic contains many loanwords from Persian, Urdu, Swahili, and Hindi, reflecting centuries of maritime trade connections across the Indian Ocean."},
{e:"⚽",t:"Kuwait won the Gulf Cup of Nations a record four times and reached the FIFA World Cup in 1982 — the only Gulf state to have done so at that time."},
{e:"🍽️",t:"Harees, a dish of slow-cooked wheat and meat pounded to a smooth porridge, has been eaten in Kuwait for centuries and is especially prized during Ramadan."}
]},
"Oman":{flag:"🇴🇲",capital:"Muscat",continent:"Asia",population:"4.9M",facts:[
{e:"💡",t:"Oman is the oldest independent state in the Arab world, with a continuous history of sovereignty traceable to the Ibadi Imamate established in the 7th century."},
{e:"🏛️",t:"The ancient aflaj irrigation system, some channels over 3,000 years old, still supplies water to farms and villages in Oman and is a UNESCO World Heritage Site."},
{e:"🍽️",t:"Shuwa is Oman's most celebrated dish — marinated whole lamb slow-cooked underground in a sealed clay pot for up to 48 hours, traditionally made for Eid feasts."},
{e:"🎭",t:"Omani silver jewelry and khanjar daggers are considered high art; the khanjar appears on the national emblem and every Omani man traditionally wears one on formal occasions."},
{e:"🌿",t:"Oman's Dhofar region is the only place in Arabia where the summer monsoon (khareef) brings lush greenery to an otherwise arid landscape, attracting tourists from across the Gulf."},
{e:"🎵",t:"The leiwah, a traditional Omani music and dance form with East African roots, is performed with large drums and wind instruments and remains an active community tradition."},
{e:"💡",t:"Oman is the world's largest producer of frankincense, a resin from Boswellia trees that has been traded from the Dhofar region for over 5,000 years."},
{e:"🗣️",t:"Several endangered Semitic languages unique to Oman — including Mehri, Jibbali, and Hobyot — are spoken only in the Dhofar mountains and have no written form."},
{e:"⚽",t:"Oman's national football team qualified for the final round of AFC World Cup qualification for 2022, the furthest the team had ever progressed in qualifying."},
{e:"🍽️",t:"Omani halwa, a dense sweet made from sugar, rose water, saffron, and ghee cooked for hours in copper pots, is offered to every guest as a symbol of hospitality."}
]},
"Pakistan":{flag:"🇵🇰",capital:"Islamabad",continent:"Asia",population:"240M",facts:[
{e:"💡",t:"Pakistan is home to K2, the world's second-highest mountain at 8,611 metres, considered far more technically challenging to climb than Everest."},
{e:"🏛️",t:"Mohenjo-daro, built around 2500 BC in what is now Pakistan, was one of the world's first planned cities — complete with a grid street layout, sewage system, and public baths."},
{e:"🍽️",t:"Nihari, a slow-cooked stew of beef shank simmered overnight with bone marrow and spices, originated in Mughal-era Delhi but is now considered Pakistan's unofficial national dish."},
{e:"🎭",t:"Truck art in Pakistan is a celebrated folk art tradition where trucks are lavishly decorated with intricate paintings, poetry, and mirrored embellishments unique to each region."},
{e:"🌿",t:"Pakistan contains three of the world's fourteen 8,000-metre peaks — K2, Nanga Parbat, and Gasherbrum I — concentrated in the Karakoram range in its north."},
{e:"🎵",t:"Qawwali, the ecstatic Sufi devotional music made globally famous by Nusrat Fateh Ali Khan, originates from the shrines of Punjab and Sindh and is over 700 years old."},
{e:"💡",t:"Pakistan has the world's second-largest salt mine at Khewra, which has been mined since the 13th century and produces distinctive pink Himalayan salt exported worldwide."},
{e:"🗣️",t:"Pakistan has one of the world's greatest concentrations of linguistic diversity, with over 70 languages spoken — including Urdu, Punjabi, Sindhi, Pashto, and Balochi."},
{e:"⚽",t:"Pakistan is the world's largest manufacturer of hand-stitched footballs, with the city of Sialkot producing an estimated 40–60% of all footballs used globally."},
{e:"🍽️",t:"Chapli kebab from Peshawar — a flat, wide patty of minced beef spiced with coriander, pomegranate seeds, and dried tomatoes — is considered one of the world's great kebabs."}
]},
"Palestine":{flag:"🇵🇸",capital:"Ramallah",continent:"Asia",population:"5.4M",facts:[
{e:"💡",t:"Jericho, in the Palestinian West Bank, is one of the oldest continuously inhabited cities on Earth, with evidence of human settlement dating back over 10,000 years."},
{e:"🏛️",t:"The Church of the Nativity in Bethlehem, built over the site believed to be Jesus's birthplace, is one of the oldest continuously operating churches in the world, built in 339 AD."},
{e:"🍽️",t:"Musakhan — roasted chicken layered on taboon bread with slow-caramelized onions and sumac — is considered the national dish of Palestine and a symbol of agricultural heritage."},
{e:"🎭",t:"Tatreez, the traditional Palestinian cross-stitch embroidery, is unique to each village — with distinct motifs and colors encoding information about a woman's hometown and status."},
{e:"🌿",t:"Palestine's Battir terraces, ancient agricultural terraces and an Iron Age irrigation system on the outskirts of Bethlehem, are a UNESCO World Heritage Site."},
{e:"🎵",t:"Dabke, a Levantine line and circle dance performed at weddings and celebrations, is a central expression of Palestinian cultural identity and collective memory."},
{e:"💡",t:"Olive cultivation in Palestine dates back over 5,000 years; some olive trees in the Galilee and West Bank are believed to be over 2,000 years old and still bear fruit."},
{e:"🗣️",t:"Palestinian Arabic preserves many ancient Aramaic and Canaanite words not found in other Arabic dialects, a linguistic relic of the region's pre-Islamic past."},
{e:"⚽",t:"Despite having no state and no home stadium, the Palestine national football team has competed in FIFA World Cup qualifying since 1934 and was recognized by FIFA in 1998."},
{e:"🍽️",t:"Knafeh from Nablus — shredded wheat dough filled with soft white cheese, soaked in orange blossom syrup — is considered the definitive version of this iconic Levantine dessert."}
]},
"Qatar":{flag:"🇶🇦",capital:"Doha",continent:"Asia",population:"2.9M",facts:[
{e:"💡",t:"Qatar has the highest GDP per capita in the world by some measures, driven by its massive natural gas reserves — the third largest in the world."},
{e:"🏛️",t:"The Museum of Islamic Art in Doha, designed by I.M. Pei and opened in 2008, houses one of the world's most comprehensive collections of Islamic art spanning 1,400 years."},
{e:"🍽️",t:"Machboos laham, spiced slow-cooked lamb over fragrant rice with dried limes and saffron, is Qatar's national dish and the cornerstone of Qatari home cooking."},
{e:"🎭",t:"Qatar hosted the 2022 FIFA World Cup — the first held in the Middle East and the first in a country where alcohol was effectively banned at most venues."},
{e:"🌿",t:"Qatar is one of the flattest countries on Earth, with a maximum elevation of just 103 metres above sea level — a limestone plateau edged by tidal flats and salt pans."},
{e:"🎵",t:"Al-Ayyala, a traditional Qatari performance involving rows of men swaying with canes to drumming and poetry, is performed at major celebrations and listed by UNESCO."},
{e:"💡",t:"Qatar was once the world's leading supplier of natural pearls, before Japanese cultured pearls collapsed the market in the 1930s — pearl diving shaped Qatari identity for centuries."},
{e:"🗣️",t:"Qatari Arabic is strongly influenced by Bedouin dialects of the Najd region and contains loanwords from Persian and Swahili reflecting the country's maritime trading past."},
{e:"⚽",t:"Qatar's national football team won the AFC Asian Cup in 2019 — their first-ever continental title — defeating Japan 3–1 in the final."},
{e:"🍽️",t:"Balaleet, a sweet-savory vermicelli dish cooked with saffron, rose water, and cardamom then topped with a folded egg omelette, is a beloved Qatari breakfast staple."}
]},
"Saudi Arabia":{flag:"🇸🇦",capital:"Riyadh",continent:"Asia",population:"37M",facts:[
{e:"💡",t:"Saudi Arabia contains the Rub' al Khali (Empty Quarter) — the world's largest continuous sand desert, covering 650,000 square kilometres across four countries."},
{e:"🏛️",t:"Hegra (Al-Hijr) in northwest Saudi Arabia contains over 100 Nabataean tombs carved directly into sandstone outcrops — the largest preserved site of the Nabataean civilization outside Petra."},
{e:"🍽️",t:"Kabsa — fragrant basmati rice cooked with meat, dried fruits, nuts, and a blend of spices including black lime — is Saudi Arabia's national dish and a centerpiece of hospitality."},
{e:"🎭",t:"Saudi Arabia lifted its ban on women driving in June 2018 and opened its first public cinema in 35 years in the same year — marking a dramatic cultural shift in the kingdom."},
{e:"🌿",t:"Saudi Arabia is the birthplace and custodian of Islam's two holiest cities: Mecca, where the Prophet Muhammad was born, and Medina, where he is buried."},
{e:"🎵",t:"The ardha is Saudi Arabia's national dance — a sword dance performed by two rows of men with a poet chanting in the center — traditionally performed before battle."},
{e:"💡",t:"Saudi Aramco, the Saudi state oil company, made the world's largest IPO in history in 2019, raising $25.6 billion and briefly valuing the company at over $2 trillion."},
{e:"🗣️",t:"Hijazi Arabic, spoken in the western Hejaz region around Mecca and Medina, has historically been the most influential Arabic dialect due to its role in Islamic scholarship and trade."},
{e:"⚽",t:"Saudi Arabia's national football team famously beat Argentina 2–1 at the 2022 FIFA World Cup — widely considered one of the biggest upsets in World Cup history."},
{e:"🍽️",t:"Saleeg, a creamy white rice dish cooked in broth and milk then topped with tender slow-cooked chicken, is a beloved comfort food of the Hejaz region served at celebrations."}
]},
"Syria":{flag:"🇸🇾",capital:"Damascus",continent:"Asia",population:"22M",facts:[
{e:"💡",t:"Damascus is one of the oldest continuously inhabited cities on Earth, with evidence of human settlement dating back to the 10th millennium BC — over 12,000 years ago."},
{e:"🏛️",t:"The Umayyad Mosque in Damascus, completed in 715 AD, is one of the largest and oldest mosques in the world and is built on a site that was previously a Roman temple and Byzantine church."},
{e:"🍽️",t:"Syria is credited as the birthplace of kibbeh — ground lamb mixed with bulgur wheat and spices, shaped into ovals and fried — considered the national dish of Greater Syria."},
{e:"🎭",t:"Syria's soap opera industry was the most influential in the Arab world throughout the 1990s and 2000s, with Syrian musalsalat (dramas) watched across the entire Middle East."},
{e:"🌿",t:"The Ancient City of Aleppo is home to one of the world's oldest and largest covered markets (souks), the Al-Madina Bazaar, which spans over 13 kilometres of vaulted passageways."},
{e:"🎵",t:"Aleppo, Syria's second city, gave its name to a distinct maqam tradition — the Aleppan muwashshah — a poetic-musical form dating to Andalusian refugees who settled there in 1492."},
{e:"💡",t:"Syria was one of the world's earliest centers of glass production; ancient Syrian glassblowing techniques, developed around 100 BC, transformed decorative arts across the Roman world."},
{e:"🗣️",t:"Syriac, a dialect of Aramaic — the language spoken by Jesus — is still spoken by Christian communities in northeastern Syria, making it one of the oldest living languages in the world."},
{e:"⚽",t:"Despite decades of conflict, Syria's national football team reached the final round of 2018 FIFA World Cup Asian qualification for the first time in history."},
{e:"🍽️",t:"Muhammara, a rich dip of roasted red peppers, walnuts, pomegranate molasses, and Aleppo pepper, originates from Aleppo and is one of the great condiments of Levantine cuisine."}
]},
"United Arab Emirates":{flag:"🇦🇪",capital:"Abu Dhabi",continent:"Asia",population:"9.9M",facts:[
{e:"💡",t:"The UAE is home to the world's tallest building — the Burj Khalifa at 828 metres — as well as the world's largest shopping mall, the Dubai Mall, which receives 80 million visitors annually."},
{e:"🏛️",t:"The Sheikh Zayed Grand Mosque in Abu Dhabi is one of the world's largest mosques and features the world's largest hand-knotted carpet, woven by 1,200 Iranian artisans over two years."},
{e:"🍽️",t:"Harees, a porridge of slow-cooked wheat and meat, is the UAE's national dish and has been eaten in the Arabian Peninsula for centuries — Emirati families still prepare it for Ramadan."},
{e:"🎭",t:"Falconry in the UAE is a 4,000-year-old tradition inscribed on UNESCO's Intangible Cultural Heritage list — Emirati falconers can spend over $100,000 on a single bird."},
{e:"🌿",t:"Abu Dhabi's Liwa Oasis sits at the edge of the Rub' al Khali desert and is home to some of the tallest sand dunes on Earth, reaching over 300 metres in height."},
{e:"🎵",t:"Al-Ayyala, a traditional Emirati performance art involving rhythmic movement, drums, and poetry recitation, is performed at weddings and national celebrations and is UNESCO-listed."},
{e:"💡",t:"The UAE was the first Arab country to send a mission to Mars — the Hope Probe launched in July 2020 and successfully entered Martian orbit in February 2021."},
{e:"🗣️",t:"Only about 11% of the UAE's population are Emirati citizens; the country's unique demographics mean that over 200 nationalities coexist, making it one of the world's most cosmopolitan nations."},
{e:"⚽",t:"The UAE hosted the 2019 AFC Asian Cup, the largest edition of the tournament in history, with 24 national teams competing across four Emirati cities."},
{e:"🍽️",t:"Luqaimat, small deep-fried dough balls drizzled with date syrup and sesame seeds, are a beloved Emirati street food traditionally distributed free to passersby during Ramadan."}
]},
"Yemen":{flag:"🇾🇪",capital:"Sanaa",continent:"Asia",population:"35M",facts:[
{e:"💡",t:"Yemen is home to Socotra Island, dubbed the 'Galapagos of the Indian Ocean', where one-third of plant species are found nowhere else on Earth — including the alien-looking dragon blood tree."},
{e:"🏛️",t:"The Old City of Sanaa, inhabited for over 2,500 years, features distinctive tower houses built from rammed earth and decorated with white geometric plasterwork — a UNESCO World Heritage Site."},
{e:"🍽️",t:"Saltah, a thick lamb stew topped with fenugreek froth (holba) and simmered in a stone pot, is Yemen's national dish and is traditionally eaten communally from a single bowl."},
{e:"🎭",t:"Yemen was historically known as 'Arabia Felix' (Happy Arabia) by the Romans, who prized it as the source of frankincense, myrrh, and spices at the heart of ancient trade routes."},
{e:"🌿",t:"Yemen's ancient city of Shibam, built in the 16th century, is called the 'Manhattan of the Desert' — its mud-brick tower houses reaching up to 30 metres tall are among the world's first skyscrapers."},
{e:"🎵",t:"The oud music tradition of Hadramout in eastern Yemen is considered one of the most sophisticated in the Arab world and heavily influenced classical music across the Arabian Peninsula and East Africa."},
{e:"💡",t:"Coffee cultivation was pioneered in Yemen — the port of Mocha gave its name to the mocha coffee variety and was the world's dominant coffee export hub from the 15th to 18th centuries."},
{e:"🗣️",t:"Yemen is home to the last speakers of several ancient South Arabian languages — including Mehri, Soqotri, and Bathari — direct descendants of languages spoken before Arabic spread into the region."},
{e:"⚽",t:"Yemen's national football team has consistently participated in AFC qualification rounds, and the country maintains an active football league despite severe conflict affecting matches and infrastructure."},
{e:"🍽️",t:"Bint al-sahn, a multilayered honey cake made with paper-thin pastry sheets baked with ghee and served warm with extra honey and black seed, is Yemen's most iconic celebratory dessert."}
]},
"Bangladesh":{flag:"🇧🇩",capital:"Dhaka",continent:"Asia",population:"173M",facts:[
{e:"💡",t:"Bangladesh is home to the Sundarbans, the world's largest mangrove forest, shared with India."},
{e:"🎭",t:"The Pohela Boishakh (Bengali New Year) festival features massive street processions with colorful masks and music."},
{e:"🍽️",t:"Hilsa fish (ilish) is the national fish and a cultural obsession — over 65% of global hilsa catch comes from Bangladesh."},
{e:"🏛️",t:"The National Parliament House in Dhaka, designed by Louis Kahn, is considered one of the greatest architectural works of the 20th century."},
{e:"🌿",t:"Bangladesh has over 700 rivers, making it one of the most river-dense countries on Earth."},
{e:"🎵",t:"Baul music, a mystical folk tradition, is recognized by UNESCO as an Intangible Cultural Heritage of Humanity."},
{e:"💡",t:"Bangladesh became the first country in the world to ban thin plastic bags, back in 2002."},
{e:"🗣️",t:"Bengali (Bangla) is one of the most spoken languages in the world, with over 230 million speakers globally."},
{e:"⚽",t:"Cricket is the national sport and a near-religious obsession, with Bangladesh's team nicknamed the Tigers."},
{e:"🍽️",t:"Panta bhat — fermented rice soaked overnight in water — is a beloved traditional dish eaten especially on Bengali New Year."}
]},
"Bhutan":{flag:"🇧🇹",capital:"Thimphu",continent:"Asia",population:"800K",facts:[
{e:"💡",t:"Bhutan measures national success by Gross National Happiness (GNH) rather than GDP, a policy enshrined in its constitution."},
{e:"🎭",t:"The Tsechu festival features masked dances (cham) performed by monks, believed to bring blessings to spectators."},
{e:"🍽️",t:"Ema datshi — chili peppers cooked with cheese — is the national dish, and Bhutanese people consume some of the highest per-capita chili in the world."},
{e:"🏛️",t:"Paro Taktsang (Tiger's Nest Monastery) clings to a cliffside 900 meters above the valley floor and dates back to 1692."},
{e:"🌿",t:"Bhutan is the world's only carbon-negative country — its forests absorb three times more carbon than it produces."},
{e:"🎵",t:"Rigsar is a modern Bhutanese pop music genre that blends traditional instruments with contemporary electronic sounds."},
{e:"💡",t:"Bhutan was the last country in the world to introduce television and the internet, doing so only in 1999."},
{e:"🗣️",t:"Dzongkha is the national language, but over 20 languages and dialects are spoken across Bhutan's valleys."},
{e:"⚽",t:"Archery is the national sport, and Bhutanese archers use traditional bamboo bows while competitors sing and dance to distract opponents."},
{e:"🍽️",t:"Red rice, grown in the Paro valley at high altitude, is a Bhutanese staple and has a distinctive nutty flavor not found in lowland varieties."}
]},
"Brunei":{flag:"🇧🇳",capital:"Bandar Seri Begawan",continent:"Asia",population:"450K",facts:[
{e:"💡",t:"Brunei's Sultan Hassanal Bolkiah is one of the world's wealthiest monarchs and has reigned since 1967, making him one of the longest-serving rulers."},
{e:"🎭",t:"Adai-adai is a traditional Bruneian performance combining rhythmic chanting, clapping, and dance during harvest celebrations."},
{e:"🍽️",t:"Ambuyat — a sticky, starchy dish made from the sago palm trunk — is Brunei's national dish, eaten by dipping into sour fruit sauces."},
{e:"🏛️",t:"The Sultan Omar Ali Saifuddien Mosque, completed in 1958, features a pure gold dome and sits on an artificial lagoon in the capital."},
{e:"🌿",t:"Over 70% of Brunei is covered in ancient rainforest, including some of the oldest and most biodiverse forest in Southeast Asia."},
{e:"🎵",t:"Ghazal Melayu Brunei is a classical musical tradition blending Middle Eastern and Malay influences, performed at royal ceremonies."},
{e:"💡",t:"Brunei has no income tax, and citizens receive heavily subsidized fuel, healthcare, and education funded by oil revenues."},
{e:"🗣️",t:"Malay is the official language, but a unique local dialect called Brunei Malay differs notably from standard Malaysian or Indonesian Malay."},
{e:"⚽",t:"Sepak takraw — a sport combining elements of volleyball and football played with a rattan ball using only feet, knees, and head — is widely popular."},
{e:"🍽️",t:"Nasi katok, a simple dish of rice, fried chicken, and sambal sold for just a few cents, is Brunei's beloved comfort food available around the clock."}
]},
"Cambodia":{flag:"🇰🇭",capital:"Phnom Penh",continent:"Asia",population:"17M",facts:[
{e:"💡",t:"Angkor Wat is the largest religious monument in the world, covering over 400 acres, and appears on Cambodia's national flag."},
{e:"🎭",t:"Royal Ballet of Cambodia (Khmer classical dance) is UNESCO-listed and nearly went extinct during the Khmer Rouge era when 90% of artists were killed."},
{e:"🍽️",t:"Fish amok — fish mousse steamed in banana leaves with coconut milk and kroeung spice paste — is considered Cambodia's national dish."},
{e:"🏛️",t:"The Khmer Empire, which built Angkor Wat in the 12th century, was one of the most powerful empires in Southeast Asian history."},
{e:"🌿",t:"Tonle Sap Lake is the largest freshwater lake in Southeast Asia and uniquely reverses its flow direction twice a year with the Mekong."},
{e:"🎵",t:"Cambodian psych rock from the 1960s–70s is now celebrated worldwide, though most of its artists were killed by the Khmer Rouge."},
{e:"💡",t:"Cambodia drives on the right side of the road, but millions of right-hand-drive cars imported from neighboring Thailand are still used."},
{e:"🗣️",t:"Khmer is one of the world's oldest living written languages, with inscriptions dating back to the 7th century CE."},
{e:"⚽",t:"Bokator is one of the world's oldest martial arts, depicted in bas-reliefs at Angkor Wat dating back over 1,700 years."},
{e:"🍽️",t:"Cambodians eat roasted tarantulas (a-ping) as a popular street snack, a practice that reportedly began during the Khmer Rouge famine years."}
]},
"Kazakhstan":{flag:"🇰🇿",capital:"Astana",continent:"Asia",population:"19M",facts:[
{e:"💡",t:"Kazakhstan is the world's largest landlocked country, covering an area larger than Western Europe."},
{e:"🎭",t:"Nauryz Meiramy, the spring equinox festival, is the most important Kazakh holiday and involves elaborate yurt feasts, traditional games, and music."},
{e:"🍽️",t:"Beshbarmak — boiled meat (usually horse or mutton) served over flat noodles and eaten with the hands — is the national dish; the name means 'five fingers.'"},
{e:"🏛️",t:"Baikonur Cosmodrome in Kazakhstan was where Yuri Gagarin launched in 1961, and it remains the world's oldest and largest active space launch facility."},
{e:"🌿",t:"The Aral Sea, once the world's fourth-largest lake, nearly disappeared due to Soviet irrigation projects, leaving ship graveyards in the desert."},
{e:"🎵",t:"The dombra, a two-stringed lute, is Kazakhstan's national instrument and at the heart of an oral epic tradition called zhyrau poetry."},
{e:"💡",t:"Domestic cats and horses were both first domesticated in Kazakhstan — horses on the steppe over 5,500 years ago."},
{e:"🗣️",t:"Kazakhstan switched its alphabet from Cyrillic to a Latin-based script in 2017, following a similar switch from Arabic script under Soviet rule."},
{e:"⚽",t:"Kokpar (buzkashi) — a horseback sport where riders compete to carry a goat carcass into a goal — is a traditional Kazakh sport still practiced widely."},
{e:"🍽️",t:"Kumiss (fermented mare's milk) has been consumed on the Kazakh steppe for over 5,000 years and is believed to have medicinal properties."}
]},
"Kyrgyzstan":{flag:"🇰🇬",capital:"Bishkek",continent:"Asia",population:"7M",facts:[
{e:"💡",t:"Kyrgyzstan's epic poem Manas is one of the longest epic poems in the world, over 20 times longer than Homer's Odyssey."},
{e:"🎭",t:"Nomadic yurt culture is still alive in Kyrgyzstan, and traditional felt-making (shyrdak rugs) is an UNESCO-recognized craft."},
{e:"🍽️",t:"Beshbarmak is the national dish, but Kyrgyz versions traditionally use horse meat, reflecting the nomadic horse-riding culture of the steppe."},
{e:"🏛️",t:"The ancient Silk Road passed through Kyrgyzstan, and the Burana Tower — a remnant of the city of Balasagun — dates back to the 9th century."},
{e:"🌿",t:"Issyk-Kul Lake is one of the world's largest alpine lakes and never freezes despite being surrounded by snow-capped mountains."},
{e:"🎵",t:"The komuz, a fretless three-stringed lute, is Kyrgyzstan's national instrument and can be played behind the player's back or upside down."},
{e:"💡",t:"Kyrgyzstan is one of the few countries where eagle hunting (berkutchi) is still practiced as a living tradition by trained hunters."},
{e:"🗣️",t:"Kyrgyz is a Turkic language that historically had no writing system — it was passed down entirely through oral tradition for centuries."},
{e:"⚽",t:"Kok-boru (a form of buzkashi using a headless goat carcass) is the national sport of Kyrgyzstan and is played at the World Nomad Games."},
{e:"🍽️",t:"Boorsok — small fried dough pieces — are a staple at every Kyrgyz celebration and symbolize prosperity when piled high on a tablecloth."}
]},
"Laos":{flag:"🇱🇦",capital:"Vientiane",continent:"Asia",population:"7.5M",facts:[
{e:"💡",t:"Laos is the most bombed country per capita in history — the US dropped over 2 million tons of bombs during the Vietnam War era, and 30% remain unexploded."},
{e:"🎭",t:"Baci ceremony, where white strings are tied around a guest's wrists to bind good spirits to their soul, is performed at every major life event."},
{e:"🍽️",t:"Sticky rice (khao niao) is the staple food of Laos — Lao people eat more sticky rice per capita than any other nation on Earth."},
{e:"🏛️",t:"Luang Prabang, a UNESCO World Heritage city, has over 30 Buddhist temples and monks perform a daily alms-giving ceremony at dawn."},
{e:"🌿",t:"The Mekong River forms most of Laos's western border, and the country is one of the few remaining habitats of the critically endangered Irrawaddy dolphin."},
{e:"🎵",t:"The khene, a bamboo mouth organ with up to 16 pipes, is UNESCO-listed and is considered the soul of Lao music."},
{e:"💡",t:"Vientiane is one of the smallest and least-visited capital cities in Southeast Asia, giving it a uniquely sleepy, village-like atmosphere."},
{e:"🗣️",t:"Lao script is closely related to Thai script, and the two spoken languages are mutually intelligible to a significant degree."},
{e:"⚽",t:"Petanque (boules), introduced by French colonists, became so popular in Laos that it is now considered a national pastime rivaling football."},
{e:"🍽️",t:"Laap — a minced meat salad with toasted ground rice, herbs, lime juice, and fish sauce — is considered the national dish of Laos."}
]},
"Malaysia":{flag:"🇲🇾",capital:"Kuala Lumpur",continent:"Asia",population:"33M",facts:[
{e:"💡",t:"The Petronas Twin Towers were the world's tallest buildings from 1998 to 2004 and remain the world's tallest twin towers."},
{e:"🎭",t:"Wayang kulit (shadow puppetry) is a 2,000-year-old Malaysian art form where elaborately carved leather puppets perform epic Hindu tales."},
{e:"🍽️",t:"Nasi lemak — coconut milk rice with sambal, anchovies, peanuts, and cucumber — is the national dish and eaten at any hour of the day."},
{e:"🏛️",t:"The Batu Caves near Kuala Lumpur contain a Hindu temple complex inside a 400-million-year-old limestone hill, accessed by 272 colorful steps."},
{e:"🌿",t:"Borneo (shared by Malaysia, Indonesia, and Brunei) is home to the world's oldest rainforest at 130 million years old."},
{e:"🎵",t:"Dikir barat is a traditional group performance from Kelantan where singers compete in rhythmic call-and-response while clapping — now popular on television."},
{e:"💡",t:"Malaysia is one of only three countries that straddle both mainland and maritime Southeast Asia, with territories separated by the South China Sea."},
{e:"🗣️",t:"Malaysia recognizes 137 living languages, making it one of the most linguistically diverse countries in Asia."},
{e:"⚽",t:"Sepak takraw — acrobatic rattan ball sport — originated in the Malay world, and Malaysia has been one of its strongest international competitors."},
{e:"🍽️",t:"Teh tarik ('pulled tea') is made by repeatedly pouring hot milk tea between containers to create a frothy top, and is considered Malaysia's unofficial national drink."}
]},
"Mongolia":{flag:"🇲🇳",capital:"Ulaanbaatar",continent:"Asia",population:"3.4M",facts:[
{e:"💡",t:"Mongolia has the lowest population density of any sovereign nation — roughly 2 people per square kilometer."},
{e:"🎭",t:"Naadam Festival, held every July, features the 'Three Games of Men': horse racing, wrestling, and archery — and dates back to Genghis Khan's era."},
{e:"🍽️",t:"Khorkhog — a dish of mutton slow-cooked with hot stones inside a sealed metal container — is Mongolia's unique traditional feast food."},
{e:"🏛️",t:"Genghis Khan built the largest contiguous land empire in history, stretching from the Pacific Ocean to Eastern Europe by the 13th century."},
{e:"🌿",t:"The Gobi Desert spans southern Mongolia and is one of the world's richest sources of dinosaur fossils, including first-discovered dinosaur eggs."},
{e:"🎵",t:"Mongolian throat singing (khoomei) allows performers to produce multiple pitches simultaneously and is UNESCO-listed as Intangible Cultural Heritage."},
{e:"💡",t:"Over 30% of Mongolians still live as nomads, making it one of the highest proportions of nomadic people in the world."},
{e:"🗣️",t:"Classical Mongolian script, written vertically from top to bottom, is one of the few vertical scripts still in official use today."},
{e:"⚽",t:"Mongolian wrestling (böh) has no weight classes or time limits — a wrestler loses only when any body part above the knee touches the ground."},
{e:"🍽️",t:"Airag (fermented mare's milk) is the national drink of Mongolia, slightly alcoholic and traditionally served at every ger (yurt) as a gesture of hospitality."}
]},
"Myanmar":{flag:"🇲🇲",capital:"Naypyidaw",continent:"Asia",population:"54M",facts:[
{e:"💡",t:"Bagan contains over 3,500 Buddhist temples and pagodas built between the 9th and 13th centuries, spread across a 40-square-mile plain."},
{e:"🎭",t:"Thingyan (Water Festival) marks the Burmese New Year in April and involves days of large-scale water throwing to wash away the previous year's sins."},
{e:"🍽️",t:"Mohinga — fish broth noodle soup eaten for breakfast — is considered Myanmar's national dish and sold by street vendors before dawn across the country."},
{e:"🏛️",t:"The Shwedagon Pagoda in Yangon, plated in real gold and topped with a diamond-encrusted orb, is believed to be over 2,600 years old."},
{e:"🌿",t:"Myanmar has the longest stretch of unspoiled Andaman Sea coastline in Southeast Asia and is home to over 800 bird species."},
{e:"🎵",t:"The saung gauk, a harp with up to 16 strings and a boat-shaped resonator, is Myanmar's national instrument and one of the world's oldest harps."},
{e:"💡",t:"Myanmar built an entirely new capital city, Naypyidaw, in secret and relocated the government there overnight in November 2005."},
{e:"🗣️",t:"Myanmar recognizes 135 distinct ethnic groups, each with its own language or dialect, making it one of Asia's most ethnically diverse countries."},
{e:"⚽",t:"Chinlone — a non-competitive sport where players pass a rattan ball using only their feet and head in graceful choreography — is Myanmar's traditional sport."},
{e:"🍽️",t:"Laphet thoke (pickled tea leaf salad) is a uniquely Burmese dish — fermented tea leaves tossed with fried garlic, peanuts, tomatoes, and lime."}
]},
"North Korea":{flag:"🇰🇵",capital:"Pyongyang",continent:"Asia",population:"26M",facts:[
{e:"💡",t:"North Korea uses its own calendar system (Juche calendar) where year 1 corresponds to 1912, the birth year of founder Kim Il-sung."},
{e:"🎭",t:"The Arirang Mass Games are the world's largest choreographed performance, involving up to 100,000 synchronized performers in a stadium."},
{e:"🍽️",t:"Naengmyeon — cold buckwheat noodles in an icy broth — originated in Pyongyang and is considered a North Korean national delicacy."},
{e:"🏛️",t:"Pyongyang's Ryugyong Hotel, a 105-story pyramid-shaped skyscraper, has been under construction since 1987 and remains unfinished and unopened."},
{e:"🌿",t:"Mount Paektu (Baekdu), a volcanic crater lake on the Chinese border, is considered the sacred spiritual birthplace of the Korean people."},
{e:"🎵",t:"The Pochonbo Electronic Ensemble blends Korean folk melodies with synthesizers and is one of North Korea's most famous state-approved bands."},
{e:"💡",t:"North Korea is one of only two countries in the world (along with Cuba) where Coca-Cola is not officially sold or produced."},
{e:"🗣️",t:"North Korean Korean has diverged significantly from South Korean over 70+ years of separation, with distinct vocabulary, pronunciation, and even script style."},
{e:"⚽",t:"North Korea's women's football team has been one of Asia's strongest historically, winning the AFC Women's Championship multiple times."},
{e:"🍽️",t:"Kimchi is made in North Korea too, but the northern style tends to be less spicy and more heavily fermented than its southern counterpart."}
]},
"Singapore":{flag:"🇸🇬",capital:"Singapore",continent:"Asia",population:"5.9M",facts:[
{e:"💡",t:"Singapore is the only country in the world that gained independence against its will — it was expelled from Malaysia in 1965."},
{e:"🎭",t:"Chingay Parade is Singapore's largest street performance and float parade, blending Chinese, Malay, Indian, and Western cultural traditions."},
{e:"🍽️",t:"Singapore's hawker center culture is UNESCO-listed, and two hawker stalls (Hill Street Tai Hwa and Hawker Chan) have been awarded Michelin stars."},
{e:"🏛️",t:"The Merlion — half lion, half fish — is Singapore's national symbol, representing the city's original name Singapura ('lion city') and its fishing village origins."},
{e:"🌿",t:"Singapore is the world's only city-state with significant primary rainforest within its borders, preserved in Bukit Timah Nature Reserve."},
{e:"🎵",t:"Xinyao is a Singapore-born Mandarin folk-pop movement from the 1980s that became a defining sound of Singaporean Chinese identity."},
{e:"💡",t:"Singapore has one of the world's highest concentrations of millionaires per capita, with roughly 1 in 6 households having over US$1 million in assets."},
{e:"🗣️",t:"Singlish, Singapore's unique English-based creole mixing Malay, Hokkien, Cantonese, and Tamil, is a source of national pride despite official discouragement."},
{e:"⚽",t:"Singapore hosted the inaugural Youth Olympic Games in 2010, becoming the first Southeast Asian city to host an Olympic event."},
{e:"🍽️",t:"Hainanese chicken rice — poached chicken over fragrant rice cooked in chicken broth with ginger and garlic sauce — is Singapore's unofficial national dish."}
]},
"Sri Lanka":{flag:"🇱🇰",capital:"Sri Jayawardenepura Kotte",continent:"Asia",population:"22M",facts:[
{e:"💡",t:"Sri Lanka has the world's oldest written constitution still in continuous effect — the Kandyan Convention of 1815, though since superseded, reflected early constitutional governance."},
{e:"🎭",t:"Kandy Esala Perahera is one of Asia's grandest festivals, featuring over 100 decorated elephants, fire dancers, and drummers parading through the city."},
{e:"🍽️",t:"Sri Lanka produces some of the world's finest cinnamon (Ceylon cinnamon) — the 'true cinnamon' is distinct from the cassia variety sold in most countries."},
{e:"🏛️",t:"Sigiriya, a 5th-century rock fortress rising 200 meters above the jungle, is an ancient engineering marvel with frescoes and a mirror wall still bearing 8th-century graffiti."},
{e:"🌿",t:"Sri Lanka has the highest biodiversity density in Asia — it packs more species per square kilometer than almost any other country on the continent."},
{e:"🎵",t:"Baila music, a fusion of African rhythms brought by Portuguese-era African slaves, is Sri Lanka's most popular dance music genre."},
{e:"💡",t:"Sri Lanka was the first country in the world to elect a female head of government — Sirimavo Bandaranaike became Prime Minister in 1960."},
{e:"🗣️",t:"Sinhala and Tamil are both official languages; Sinhala's script is considered one of the world's most rounded alphabets, with very few straight lines."},
{e:"⚽",t:"Sri Lanka is a cricketing powerhouse — it won the 1996 Cricket World Cup as a relatively small nation, inspiring generations across South Asia."},
{e:"🍽️",t:"Hoppers (appa) — bowl-shaped fermented rice flour and coconut milk crepes — are a Sri Lankan breakfast staple, often served with an egg cracked inside."}
]},
"Tajikistan":{flag:"🇹🇯",capital:"Dushanbe",continent:"Asia",population:"10M",facts:[
{e:"💡",t:"Over 93% of Tajikistan is covered by mountains, making it the most mountainous country in Central Asia."},
{e:"🎭",t:"Navruz (Persian New Year) is Tajikistan's most important holiday, celebrated with the cooking of sumalak — a wheat-germ pudding stirred overnight communally."},
{e:"🍽️",t:"Qurutob — a dish of dried yogurt balls soaked in broth and layered with flatbread, onions, and herbs — is considered Tajikistan's national dish."},
{e:"🏛️",t:"Tajikistan contains parts of the ancient Bactrian civilization, and the city of Panjikent was once a major Silk Road city destroyed by Arab conquest in the 8th century."},
{e:"🌿",t:"The Pamir Mountains in Tajikistan include Ismoil Somoni Peak (7,495m), the highest point in the former Soviet Union, once called Communism Peak."},
{e:"🎵",t:"Shashmaqam is a 900-year-old classical music tradition of Central Asia originating in Bukhara and Samarkand, now UNESCO-listed."},
{e:"💡",t:"Tajikistan is the poorest country in the former Soviet Union by GDP per capita, yet it exports significant hydroelectric power to neighboring countries."},
{e:"🗣️",t:"Tajik is essentially a dialect of Persian (Farsi/Dari), making Tajikistan culturally and linguistically closer to Iran than to its Turkic Central Asian neighbors."},
{e:"⚽",t:"Gushtigiri (traditional Tajik wrestling) is performed at every major festival and follows ancient rules where wrestlers wear special trousers held by the opponent."},
{e:"🍽️",t:"Shir chai (salt tea with milk) is the traditional Pamiri morning drink in Tajikistan's highland regions, a custom shared with communities in Afghanistan and Pakistan."}
]},
"Timor-Leste":{flag:"🇹🇱",capital:"Dili",continent:"Asia",population:"1.3M",facts:[
{e:"💡",t:"Timor-Leste (East Timor) is one of the world's youngest countries, gaining independence from Indonesia only in 2002 after a brutal 24-year occupation."},
{e:"🎭",t:"Tais weaving — intricate hand-woven cloth with symbolic patterns — is central to Timorese identity and used in ceremonies, gifts, and traditional dress."},
{e:"🍽️",t:"Batar daan — a stew of corn, pumpkin, and black-eyed peas — is a staple dish reflecting the country's reliance on subsistence agriculture."},
{e:"🏛️",t:"The Cristo Rei of Dili, a 27-meter statue of Jesus on a globe, was built by Indonesia in 1996 and now stands as a major landmark and pilgrimage site."},
{e:"🌿",t:"Timor-Leste's waters contain some of the most biodiverse coral reefs in the Coral Triangle, considered the global center of marine biodiversity."},
{e:"🎵",t:"Likurai is a traditional war dance performed by women who beat small drums (likurai) while men perform martial movements, originally celebrating warriors' returns."},
{e:"💡",t:"Timor-Leste is one of only two predominantly Catholic countries in Asia (the other being the Philippines), a legacy of over 400 years of Portuguese colonization."},
{e:"🗣️",t:"Tetum and Portuguese are the official languages, but over 30 indigenous languages are spoken across this tiny nation of 1.3 million people."},
{e:"⚽",t:"Football (soccer) is the most popular sport, and the national team's qualification for the 2023 AFC Asian Cup was celebrated as a historic national milestone."},
{e:"🍽️",t:"Ai-farina (cassava) is a dietary staple in rural Timor-Leste and often boiled, fried, or ground into flour for traditional flatbreads."}
]},
"Turkmenistan":{flag:"🇹🇲",capital:"Ashgabat",continent:"Asia",population:"6.1M",facts:[
{e:"💡",t:"The Darvaza gas crater ('Door to Hell') in Turkmenistan has been burning continuously since Soviet engineers set it alight in 1971 to burn off gas."},
{e:"🎭",t:"The Turkmen carpet is a national symbol — Turkmenistan has the world's largest hand-woven carpet and features carpet motifs on its national flag."},
{e:"🍽️",t:"Plov (pilaf) — rice cooked with lamb, carrots, and onions in rendered fat — is Turkmenistan's most important ceremonial dish, cooked in massive quantities for celebrations."},
{e:"🏛️",t:"Ancient Merv, located in Turkmenistan, was one of the greatest cities of the medieval Islamic world and a major Silk Road hub before being destroyed by the Mongols."},
{e:"🌿",t:"The Karakum Desert covers about 70% of Turkmenistan and is one of the world's largest sand deserts, home to the iconic Darvaza crater."},
{e:"🎵",t:"The dutar, a two-stringed long-necked lute, is Turkmenistan's national instrument, and dutar masters (bagshi) are highly respected figures in society."},
{e:"💡",t:"Turkmenistan is one of the world's most isolated and authoritarian states — until 2019, citizens received free gas, electricity, water, and salt from the government."},
{e:"🗣️",t:"Turkmen is a Turkic language closely related to Turkish, and after independence in 1991 the country switched its script from Cyrillic to a Latin alphabet."},
{e:"⚽",t:"Turkmen horse racing, specifically involving the Akhal-Teke breed — famous for its metallic golden coat and extreme endurance — is a deeply honored national tradition."},
{e:"🍽️",t:"Çal (churned sour camel milk) is a traditional Turkmen beverage considered both refreshing and medicinal, particularly prized in desert-dwelling communities."}
]},
"Uzbekistan":{flag:"🇺🇿",capital:"Tashkent",continent:"Asia",population:"36M",facts:[
{e:"💡",t:"Samarkand's Registan Square, flanked by three monumental madrassas, is considered one of the most breathtaking architectural ensembles in the world."},
{e:"🎭",t:"Lapar is a traditional Uzbek comedic performance tradition where two poets engage in improvised witty verbal duels in front of an audience."},
{e:"🍽️",t:"Uzbek plov (osh) is a UNESCO-listed cultural heritage — a celebration rice dish cooked in a massive kazan (cauldron) and eaten communally from a shared plate."},
{e:"🏛️",t:"Timur (Tamerlane), who built a vast empire from Samarkand in the 14th century, commissioned some of the most extraordinary Islamic architecture ever constructed."},
{e:"🌿",t:"The Aral Sea disaster — caused by Soviet irrigation of the Amu Darya and Syr Darya rivers — is considered one of the world's worst man-made environmental catastrophes."},
{e:"🎵",t:"Shashmaqam, a classical musical suite tradition originating in Bukhara, is shared between Uzbekistan and Tajikistan and is UNESCO Intangible Heritage."},
{e:"💡",t:"Uzbekistan is a double-landlocked country — every country it borders is also landlocked, a geographic distinction shared only with Liechtenstein."},
{e:"🗣️",t:"Uzbek switched from Arabic to Latin script in the 1920s, then to Cyrillic in the 1940s, and back to Latin again in 1993 after independence."},
{e:"⚽",t:"Kurash — a traditional Uzbek upright wrestling style — has been practiced for over 3,500 years and is now organized internationally with world championships."},
{e:"🍽️",t:"Non (Uzbek flatbread) is baked in a tandoor oven and stamped with ornate patterns using a special tool (non-kopkuch) — breaking bread is a sacred ritual in Uzbek culture."}
]},
"Albania":{flag:"🇦🇱",capital:"Tirana",continent:"Europe",population:"2.8M",facts:[
{e:"💡",t:"Albania was one of the most isolated countries in the world under communist dictator Enver Hoxha, who ruled from 1944 to 1985 and banned religion entirely."},
{e:"🎭",t:"The Kanun, a 15th-century code of customary law, still influences social behaviour in northern Albania, governing everything from hospitality to blood feuds."},
{e:"🍽️",t:"Byrek, a flaky filo pastry filled with spinach, cheese, or meat, is Albania's most beloved everyday street food."},
{e:"🏛️",t:"Albania contains the ancient city of Butrint, a UNESCO World Heritage Site with ruins spanning Greek, Roman, Byzantine, and Venetian eras."},
{e:"🌿",t:"Over 70% of Albania's electricity comes from hydropower, making it one of the most hydro-dependent nations in Europe."},
{e:"🎵",t:"Albanian iso-polyphony, a unique form of traditional folk singing performed in multiple interlocking vocal parts, is recognised by UNESCO as intangible cultural heritage."},
{e:"💡",t:"Albania built over 170,000 concrete bunkers during the communist era — roughly one for every 10 citizens — to defend against a foreign invasion that never came."},
{e:"🗣️",t:"Albanian is a language isolate within the Indo-European family, with no other living language closely related to it, and has two main dialects: Gheg and Tosk."},
{e:"⚽",t:"Albania qualified for their first-ever UEFA European Championship in 2016, marking a historic milestone for the national team."},
{e:"🍽️",t:"Tavë kosi, a baked dish of lamb and rice in a yoghurt and egg sauce, is considered Albania's national dish and dates back centuries."}
]},
"Belarus":{flag:"🇧🇾",capital:"Minsk",continent:"Europe",population:"9.4M",facts:[
{e:"💡",t:"Belarus is the only country in Europe that still uses the KGB as the official name of its state security service, a direct continuation from Soviet times."},
{e:"🎭",t:"The Kupalle festival, celebrated on midsummer's night, involves jumping over bonfires, floating flower wreaths on rivers, and searching for the mythical fern flower."},
{e:"🍽️",t:"Draniki, thick potato pancakes often served with sour cream, are Belarus's most iconic national dish and reflect the country's deep culinary love of potatoes."},
{e:"🏛️",t:"The Mir Castle Complex and Nesvizh Castle are both UNESCO World Heritage Sites and stand as grand reminders of the Grand Duchy of Lithuania's cultural legacy."},
{e:"🌿",t:"Białowieża Forest, straddling the Belarus–Poland border, is the last primeval lowland forest in Europe and home to the world's largest population of wild European bison."},
{e:"🎵",t:"Belarus has a rich tradition of folk music featuring the lira (hurdy-gurdy) and duda (bagpipe), with regional styles varying significantly across the country."},
{e:"💡",t:"Minsk was almost entirely destroyed during World War II and rebuilt from scratch in a grand Stalinist architectural style, giving it one of the most uniform Soviet-era streetscapes in the world."},
{e:"🗣️",t:"Belarus has two official languages — Belarusian and Russian — but Russian dominates daily life in cities, while Belarusian is more commonly spoken in rural areas."},
{e:"⚽",t:"The Belarusian Premier League became internationally notable in 2020 as one of the only European football leagues to continue playing during the early COVID-19 pandemic."},
{e:"🍽️",t:"Machanka is a hearty Belarusian gravy made from pork ribs and sausage, traditionally served with thick pancakes called bliny for dipping."}
]},
"Bosnia and Herzegovina":{flag:"🇧🇦",capital:"Sarajevo",continent:"Europe",population:"3.2M",facts:[
{e:"💡",t:"Sarajevo was the site of the assassination of Archduke Franz Ferdinand in 1914, the event widely considered the spark that ignited World War I."},
{e:"🎭",t:"Bosnia and Herzegovina has three constituent peoples — Bosniaks, Serbs, and Croats — each with their own cultural traditions, yet sharing the same geographic homeland."},
{e:"🍽️",t:"Ćevapi, small grilled minced-meat sausages served in flatbread with raw onion and kajmak cream, are the country's most beloved street food and a point of national pride."},
{e:"🏛️",t:"The Old Bridge (Stari Most) in Mostar, originally built by the Ottomans in 1566 and rebuilt after its destruction in 1993, is a UNESCO World Heritage Site and symbol of reconciliation."},
{e:"🌿",t:"The Sutjeska National Park in eastern Bosnia contains Perućica, one of the last two remaining primeval forests in Europe, with trees over 300 years old."},
{e:"🎵",t:"Sevdalinka is a traditional Bosnian musical genre of deeply emotional love songs, often described as the Bosnian equivalent of the blues due to its melancholic, soulful quality."},
{e:"💡",t:"Sarajevo hosted the 1984 Winter Olympics, and several of the venues, including the bobsled track, still exist — albeit abandoned and covered in street art."},
{e:"🗣️",t:"Bosnian, Croatian, and Serbian are mutually intelligible and linguistically nearly identical, yet officially treated as three separate languages in Bosnia and Herzegovina."},
{e:"⚽",t:"Bosnia and Herzegovina qualified for their first FIFA World Cup in 2014 in Brazil, with striker Edin Džeko becoming one of the country's greatest footballing icons."},
{e:"🍽️",t:"Burek, a spiral-coiled filo pastry filled with meat, is so central to Bosnian culture that locals insist only the meat-filled version can truly be called burek — cheese or spinach versions have their own names."}
]},
"Bulgaria":{flag:"🇧🇬",capital:"Sofia",continent:"Europe",population:"6.5M",facts:[
{e:"💡",t:"Bulgaria is the oldest country in Europe to have kept its original name unchanged since its founding in 681 AD."},
{e:"🎭",t:"The Kukeri tradition involves elaborately costumed dancers wearing giant bells and fearsome masks parading through villages in winter to scare away evil spirits."},
{e:"🍽️",t:"Banitsa, a flaky pastry made with filo dough and white cheese, is a staple of Bulgarian breakfast and is traditionally eaten with yoghurt or honey."},
{e:"🏛️",t:"The Rila Monastery, founded in the 10th century and a UNESCO World Heritage Site, is Bulgaria's most revered cultural and spiritual monument, with stunning frescoes covering its cloistered walls."},
{e:"🌿",t:"Bulgaria is the world's largest producer of rose oil, with the Rose Valley near Kazanlak supplying over 70% of the global supply used in perfumery."},
{e:"🎵",t:"Bulgarian traditional music is famous for its complex asymmetric rhythms in odd time signatures such as 7/8 and 11/16, which Western musicians find notoriously difficult to perform."},
{e:"💡",t:"John Atanasoff, widely credited as a co-inventor of the electronic digital computer, had Bulgarian heritage — his father emigrated from Bulgaria to the United States."},
{e:"🗣️",t:"Bulgarian uses the Cyrillic alphabet, which was actually created in the First Bulgarian Empire in the 9th century by Saints Cyril and Methodius and their disciples."},
{e:"⚽",t:"Bulgaria's golden generation reached the semi-finals of the 1994 FIFA World Cup, with striker Hristo Stoichkov — that year's Ballon d'Or winner — leading the team."},
{e:"🍽️",t:"Shopska salad, made from tomatoes, cucumbers, peppers, onion, and grated white cheese, is Bulgaria's most famous dish and is served at virtually every meal."}
]},
"Cyprus":{flag:"🇨🇾",capital:"Nicosia",continent:"Europe",population:"1.2M",facts:[
{e:"💡",t:"Nicosia is the last divided capital city in the world, split since 1974 between the Republic of Cyprus in the south and the Turkish-controlled north."},
{e:"🎭",t:"Cyprus is considered the legendary birthplace of Aphrodite, the Greek goddess of love, and the rock formation Petra tou Romiou along the coast is said to be where she emerged from the sea."},
{e:"🍽️",t:"A Cypriot meze is not a single dish but a grand feast of 20 to 30 small dishes served over several hours, encompassing dips, grilled meats, seafood, salads, and pastries."},
{e:"🏛️",t:"The Tombs of the Kings in Paphos, a UNESCO World Heritage Site, are impressive underground rock-cut tombs dating to the 4th century BC, despite their name — no kings were actually buried there."},
{e:"🌿",t:"Cyprus has the highest percentage of forested land among Mediterranean islands, with the Troodos mountain range covered in dense pine and cedar forests."},
{e:"🎵",t:"The Cypriot folk tradition of tsiattista is a form of improvised sung poetry where two performers engage in a rapid-fire poetic duel, trying to outdo each other with wit and rhyme."},
{e:"💡",t:"Cyprus gives its name to copper — the Latin word cuprum derives from Kypros — because the island was the ancient world's primary source of the metal."},
{e:"🗣️",t:"Cypriots speak a distinctive dialect of Greek, Cypriot Greek, which preserves many ancient Greek words and features that have long disappeared from standard Modern Greek."},
{e:"⚽",t:"APOEL FC of Nicosia became the first Cypriot club to reach the quarter-finals of the UEFA Champions League, achieving this remarkable feat in the 2011–12 season."},
{e:"🍽️",t:"Halloumi, the squeaky semi-hard cheese that holds its shape when grilled or fried, originates from Cyprus and has been granted Protected Designation of Origin status by the EU."}
]},
"Northern Cyprus":{flag:"🇹🇷",capital:"North Nicosia",continent:"Europe",population:"330K",facts:[
{e:"💡",t:"Northern Cyprus declared independence in 1983 as the Turkish Republic of Northern Cyprus but is recognised as a sovereign state only by Turkey."},
{e:"🎭",t:"The city of Famagusta contains the old walled city with dozens of churches built during the Lusignan and Venetian periods, many later converted into mosques after the Ottoman conquest."},
{e:"🍽️",t:"Northern Cypriot cuisine blends Turkish and Cypriot traditions, with dishes like molehiya (a stew made from jute leaves) and çoban kavurma (shepherd's fried lamb) being local specialities."},
{e:"🏛️",t:"The Bellapais Abbey, built by Augustinian monks in the 13th century near Kyrenia, is one of the finest examples of Gothic architecture in the eastern Mediterranean."},
{e:"🌿",t:"The Karpaz Peninsula, a long narrow finger of land in northern Cyprus, is home to a wild donkey population descended from domesticated animals abandoned after 1974."},
{e:"🎵",t:"Northern Cyprus maintains a vibrant tradition of Turkish Cypriot folk music featuring the davul drum and zurna oboe, with distinct local repertoires that differ from mainland Turkish folk styles."},
{e:"💡",t:"The ancient city of Salamis near Famagusta was one of the most important cities in the ancient eastern Mediterranean and features extensive Roman ruins including a gymnasium and amphitheatre."},
{e:"🗣️",t:"Turkish Cypriot dialect preserves archaic Ottoman Turkish words and expressions no longer used in modern Turkey, making it of considerable interest to linguists."},
{e:"⚽",t:"Northern Cypriot football clubs cannot compete in UEFA competitions due to the territory's unrecognised status, but a Northern Cyprus national team competes in CONIFA, the federation for non-FIFA nations."},
{e:"🍽️",t:"Helim, the Turkish Cypriot name for halloumi, is produced in villages across northern Cyprus using traditional methods and remains a cornerstone of the local diet."}
]},
"Czechia":{flag:"🇨🇿",capital:"Prague",continent:"Europe",population:"10.9M",facts:[
{e:"💡",t:"Czechia has the highest beer consumption per capita in the world, with Czech citizens drinking an average of around 180 litres of beer per person per year."},
{e:"🎭",t:"The Czech tradition of Masopust, a pre-Lenten carnival, involves colourful processions of masked figures parading through villages, slaughtering a symbolic pig, and feasting before the fast."},
{e:"🍽️",t:"Svíčková na smetaně, braised beef sirloin served in a creamy root vegetable sauce and topped with whipped cream and cranberry jam, is one of Czechia's most cherished national dishes."},
{e:"🏛️",t:"Prague's historic centre, including Prague Castle — the largest ancient castle complex in the world by area — is a UNESCO World Heritage Site drawing millions of visitors annually."},
{e:"🌿",t:"Czechia is a landlocked country surrounded entirely by other landlocked countries — Germany, Austria, Slovakia, and Poland — making it one of a small number of doubly landlocked nations' neighbours."},
{e:"🎵",t:"Antonín Dvořák and Bedřich Smetana, two of the most celebrated Romantic composers in history, were both Czech, and Smetana's Vltava remains an enduring musical portrait of the nation."},
{e:"💡",t:"The word 'robot' was coined by Czech playwright Karel Čapek in his 1920 play R.U.R., derived from the Czech word robota meaning forced labour or drudgery."},
{e:"🗣️",t:"Czech is known for its formidable consonant clusters and is famously cited as one of the most difficult languages for English speakers to learn."},
{e:"⚽",t:"The Czech national football team, competing as Czechoslovakia, reached the FIFA World Cup final in 1934 and again in 1962, and the country produced legends such as Pavel Nedvěd."},
{e:"🍽️",t:"Trdelník, a spiral pastry cooked over an open flame and rolled in sugar and cinnamon, is sold throughout Czech towns and has become one of the most recognisable Central European street foods."}
]},
"Estonia":{flag:"🇪🇪",capital:"Tallinn",continent:"Europe",population:"1.4M",facts:[
{e:"💡",t:"Estonia is considered the world's most digitally advanced society, having pioneered e-governance, digital voting, e-residency, and a fully digital public services infrastructure."},
{e:"🎭",t:"The Estonian Song Festival, held every five years since 1869, can gather choirs of up to 30,000 singers performing together — and it played a direct role in the country's peaceful independence movement."},
{e:"🍽️",t:"Verivorst, black pudding made from blood, barley, and pork, is Estonia's beloved Christmas tradition, typically served with lingonberry jam and sauerkraut."},
{e:"🏛️",t:"Tallinn's medieval old town is one of the best-preserved in Northern Europe and a UNESCO World Heritage Site, with its 13th and 14th-century limestone walls, towers, and merchant houses still largely intact."},
{e:"🌿",t:"Estonia is one of the most forested countries in Europe, with over 50% of its territory covered by woodland, and it has more bogs per capita than almost any other nation."},
{e:"🎵",t:"Estonia punches far above its weight in classical music, producing world-renowned minimalist composer Arvo Pärt, whose tintinnabuli style has made him one of the most performed living composers globally."},
{e:"💡",t:"Skype was invented by Estonian engineers and launched in 2003 from Tallinn, making Estonia one of the earliest and most celebrated birthplaces of a global tech phenomenon."},
{e:"🗣️",t:"Estonian belongs to the Finno-Ugric language family alongside Finnish and Hungarian, meaning it is entirely unrelated to the Indo-European languages spoken by most of its neighbours."},
{e:"⚽",t:"Estonia's most popular sport is actually basketball rather than football, with the national basketball league and clubs drawing passionate followings."},
{e:"🍽️",t:"Kohuke, a small glazed curd cheese snack coated in chocolate or fruit glaze, is Estonia's most iconic everyday treat — consumed so universally that it is considered part of the national identity."}
]},
"Georgia":{flag:"🇬🇪",capital:"Tbilisi",continent:"Europe",population:"3.7M",facts:[
{e:"💡",t:"Georgia is home to some of the world's oldest winemaking traditions, with evidence of grape cultivation and wine production dating back 8,000 years in the South Caucasus region."},
{e:"🎭",t:"Georgian polyphonic singing, a multi-voice choral tradition that varies by region, is recognised by UNESCO as an intangible cultural heritage and is considered unique in world music."},
{e:"🍽️",t:"Khachapuri, bread filled or topped with melted cheese and a runny egg, is Georgia's most iconic dish and comes in dramatically different regional variations, most famously the boat-shaped Adjarian version."},
{e:"🏛️",t:"The ancient cave city of Uplistsikhe, carved directly into a rocky cliff face overlooking the Mtkvari River, dates back to the early Iron Age and was once a thriving city of 20,000 people."},
{e:"🌿",t:"Georgia sits at the junction of Europe and Asia and contains an extraordinary range of landscapes within a small area, from Black Sea subtropical coastline to Caucasus peaks over 5,000 metres tall."},
{e:"🎵",t:"Georgian traditional music includes the panduri and chonguri string instruments, and the country has a strong contemporary music scene blending ancient folk traditions with modern genres."},
{e:"💡",t:"Georgia has its own completely unique alphabet, Mkhedruli, which has been in continuous use since at least the 5th century AD and is considered one of the world's most beautiful writing systems."},
{e:"🗣️",t:"Georgian belongs to the Kartvelian language family, which has no relationship to any other language family in the world, making it a true linguistic isolate at the family level."},
{e:"⚽",t:"Georgia caused one of Euro 2024's greatest shocks by defeating Portugal 2–0 in the group stage, marking the national team's debut at a major international tournament in stunning fashion."},
{e:"🍽️",t:"Churchkhela, a candle-shaped snack made by dipping strings of walnuts repeatedly into concentrated grape juice until a firm coating forms, has been eaten in Georgia for centuries and is nicknamed the Georgian Snickers."}
]},
"Hungary":{flag:"🇭🇺",capital:"Budapest",continent:"Europe",population:"9.7M",facts:[
{e:"💡",t:"Hungary has produced an extraordinary number of Nobel Prize laureates relative to its population size, with winners including Albert Szent-Györgyi, who discovered vitamin C."},
{e:"🎭",t:"The Hungarian custom of not clinking beer glasses, said to date from 1849 when Austrian generals celebrated the execution of Hungarian revolutionaries with beer, is still widely observed today."},
{e:"🍽️",t:"Gulyás (goulash), a rich stew of beef, onions, paprika, and vegetables, originated as a Hungarian herdsmen's dish and became so famous it is now considered a symbol of the entire nation."},
{e:"🏛️",t:"The Hungarian Parliament Building in Budapest, completed in 1904, is the largest parliament building in Europe by volume and one of the most ornate, featuring 691 rooms and 20 kilometres of stairways."},
{e:"🌿",t:"Lake Balaton in western Hungary is the largest lake in Central Europe and functions as a beloved summer resort, nicknamed the 'Hungarian Sea' by locals who flock to its shores each summer."},
{e:"🎵",t:"Béla Bartók and Zoltán Kodály conducted groundbreaking ethnomusicological fieldwork in the early 20th century, travelling across Hungary and beyond to collect and preserve thousands of folk melodies."},
{e:"💡",t:"Hungarian inventors gave the world the Rubik's Cube (Ernő Rubik), the ballpoint pen (László Bíró), the hologram (Dennis Gabor), and the krypton electric bulb (Imre Bródy)."},
{e:"🗣️",t:"Hungarian is a Finno-Ugric language considered one of the most difficult to learn for European speakers, with 18 grammatical cases and vowel harmony governing its complex word structure."},
{e:"⚽",t:"The Hungarian Mighty Magyars team of the early 1950s, featuring Ferenc Puskás, went 32 games unbeaten and were considered the best team in the world — yet famously lost the 1954 World Cup final to West Germany."},
{e:"🍽️",t:"Hungarian cuisine uses paprika so extensively that the country grows its own varieties in Kalocsa and Szeged, and paprika is listed on Hungarian tables alongside salt and pepper as a basic condiment."}
]},
"Kosovo":{flag:"🇽🇰",capital:"Pristina",continent:"Europe",population:"1.8M",facts:[
{e:"💡",t:"Kosovo declared independence from Serbia in 2008 and is recognised by over 100 countries, including the United States and most EU members, though Serbia, Russia, and China do not recognise it."},
{e:"🎭",t:"Despite being a predominantly Muslim country, Kosovo has strong secular traditions, and its people celebrate a diversity of cultural influences blending Ottoman, Yugoslav, and Western European elements."},
{e:"🍽️",t:"Flija is Kosovo's most ceremonial dish — a layered crepe-like pastry cooked slowly under a sač (a domed iron lid covered in coals), traditionally prepared for weddings, religious celebrations, and family gatherings."},
{e:"🏛️",t:"The medieval Serbian Orthodox monasteries of Dečani and the Patriarchate of Peć, both UNESCO World Heritage Sites, are among the finest examples of Byzantine-Romanesque architecture in the Balkans."},
{e:"🌿",t:"Kosovo is one of the youngest countries in the world by median age, with a population where over 50% are under 30 years old, making it one of the most demographically youthful nations in Europe."},
{e:"🎵",t:"Kosovo has a vibrant contemporary music scene, particularly in hip-hop and electronic music, and the country punches above its weight in producing artists popular across the wider Albanian-speaking world."},
{e:"💡",t:"Kosovo has the largest proven reserves of lignite coal in Europe and among the top five in the world, a resource that both powers its electricity grid and presents significant environmental challenges."},
{e:"🗣️",t:"Albanian and Serbian are both official languages of Kosovo, and the Albanian spoken there belongs to the Gheg dialect group, the dominant variety in northern Albania and North Macedonia as well."},
{e:"⚽",t:"Kosovo's national football team was admitted to FIFA and UEFA in 2016 and has already produced remarkable results, including draws and wins against higher-ranked nations in World Cup and Euro qualifying."},
{e:"🍽️",t:"Tavë e Prizrenit is a baked casserole of meat and vegetables traditional to the city of Prizren, Kosovo's cultural capital, reflecting the city's rich Ottoman culinary heritage."}
]},
"Latvia":{flag:"🇱🇻",capital:"Riga",continent:"Europe",population:"1.8M",facts:[
{e:"💡",t:"Riga contains the largest collection of Art Nouveau architecture in the world, with over 800 buildings in the style, earning the city's historic centre UNESCO World Heritage status."},
{e:"🎭",t:"The Latvian Song and Dance Festival, held since 1873, brings together thousands of choirs and folk dance ensembles in a mass celebration that was central to Latvia's national awakening and independence movements."},
{e:"🍽️",t:"Rupjmaize, a dense, dark sourdough rye bread with a slightly sweet flavour, is the cornerstone of Latvian cuisine and holds such cultural significance that it was granted EU Protected Geographical Indication status."},
{e:"🏛️",t:"Riga's Freedom Monument, unveiled in 1935, depicts a woman holding three golden stars representing Latvia's three historical regions and served as a secret gathering point for independence protesters during Soviet rule."},
{e:"🌿",t:"Latvia is one of the greenest countries in Europe, with around 54% of its territory forested, and it has over 12,000 rivers and more than 2,000 lakes dotting its landscape."},
{e:"🎵",t:"Latvia has an extraordinarily strong choral tradition, and Latvian choirs regularly win top prizes at international competitions — singing is considered a core part of national identity from childhood."},
{e:"💡",t:"Latvia was the first country in the world to have a female head of government when Vaira Vīķe-Freiberga served as president from 1999 to 2007."},
{e:"🗣️",t:"Latvian is one of only two surviving Baltic languages (alongside Lithuanian) and is considered one of the most archaic living Indo-European languages."},
{e:"⚽",t:"Ice hockey is Latvia's most passion-driven sport, and the national team has produced NHL stars including Artūrs Irbe and Zemgus Girgensons."},
{e:"🍽️",t:"Skābeņu zupa, a sour sorrel soup made with cream and hard-boiled eggs, is one of Latvia's most distinctive traditional dishes, beloved for its sharp tangy flavour during spring and summer."}
]},
"Lithuania":{flag:"🇱🇹",capital:"Vilnius",continent:"Europe",population:"2.8M",facts:[
{e:"💡",t:"Lithuania was the last country in Europe to officially adopt Christianity, converting in 1387, and before that maintained an indigenous Baltic pagan religion for longer than any other European nation."},
{e:"🎭",t:"The Hill of Crosses near Šiauliai, where over 100,000 crosses have been planted by pilgrims over centuries, became a powerful symbol of resistance during Soviet occupation."},
{e:"🍽️",t:"Cepelinai, enormous potato dumplings shaped like zeppelins and stuffed with meat or curd cheese, are Lithuania's national dish and a testament to the country's deep culinary devotion to the potato."},
{e:"🏛️",t:"The Old Town of Vilnius is one of the largest surviving medieval old towns in Northern Europe, a UNESCO World Heritage Site spanning 360 hectares with over 1,500 historic buildings."},
{e:"🌿",t:"Lithuania is home to the geographical centre of Europe — a point near Purnuškės village was calculated by the French National Geographic Institute as the continent's midpoint."},
{e:"🎵",t:"Lithuanian sutartinės, ancient polyphonic folk songs performed in interlocking canonic voices, are one of the rarest musical forms in the world and are listed on UNESCO's intangible heritage list."},
{e:"💡",t:"The Grand Duchy of Lithuania was once the largest country in Europe, stretching from the Baltic Sea to the Black Sea in the 15th century."},
{e:"🗣️",t:"Lithuanian is considered by linguists to be the most archaic living Indo-European language, preserving grammatical features and vocabulary lost in all other members of the language family."},
{e:"⚽",t:"Basketball is Lithuania's national sporting obsession, and the country has produced some of the greatest players in European history, including Arvydas Sabonis."},
{e:"🍽️",t:"Šaltibarščiai, a cold bright-pink soup made from kefir and beetroot and served with boiled potato, is Lithuania's beloved summer dish."}
]},
"Montenegro":{flag:"🇲🇪",capital:"Podgorica",continent:"Europe",population:"620K",facts:[
{e:"💡",t:"Montenegro, meaning 'Black Mountain' in Venetian, takes its name from Mount Lovćen, whose dark forests give the mountain a black appearance from the sea."},
{e:"🎭",t:"The Montenegrin tradition of guslars — epic singers who accompany themselves on the single-stringed gusle fiddle while reciting oral heroic poetry — has roots stretching back to medieval times."},
{e:"🍽️",t:"Njeguški pršut, a dry-cured smoked ham produced in the village of Njeguši high in the mountains, is Montenegro's most prized culinary product."},
{e:"🏛️",t:"The walled old town of Kotor, dramatically situated at the foot of steep limestone cliffs at the end of a deep bay, is a UNESCO World Heritage Site."},
{e:"🌿",t:"Tara River Canyon is the deepest canyon in Europe and the second deepest in the world after the Grand Canyon, carved through the Durmitor massif to a depth of 1,300 metres."},
{e:"🎵",t:"Montenegro has a tradition of klapa singing, a form of unaccompanied Adriatic harmonic vocal music shared with Croatia, typically performed by male voices about love and the sea."},
{e:"💡",t:"Montenegro was one of the first countries in the world to unilaterally adopt the euro as its official currency in 2002, despite not being a member of the European Union."},
{e:"🗣️",t:"Montenegrin was officially declared a separate language from Serbian in 2007 and added two new letters to the Serbian Cyrillic and Latin alphabets."},
{e:"⚽",t:"Montenegro's women's handball team achieved remarkable success, winning the World Championship in 2012."},
{e:"🍽️",t:"Kačamak, a thick porridge made from maize or buckwheat flour mixed with potatoes and cheese, is a traditional Montenegrin mountain dish."}
]},
"Serbia":{flag:"🇷🇸",capital:"Belgrade",continent:"Europe",population:"6.8M",facts:[
{e:"💡",t:"Nikola Tesla, one of the greatest inventors in history, was born in the Serbian village of Smiljan in 1856 and is celebrated as a national hero in Serbia."},
{e:"🎭",t:"The Guča Trumpet Festival, held in the small Serbian town of Guča each August, is one of the world's most exuberant music festivals, drawing hundreds of thousands of visitors."},
{e:"🍽️",t:"Pljeskavica, a large spiced grilled meat patty made from a blend of beef, pork, and lamb and served in flatbread, is Serbia's national fast food."},
{e:"🏛️",t:"The Roman Emperor Constantine the Great, who legalised Christianity, was born in Naissus — modern-day Niš, Serbia's third-largest city."},
{e:"🌿",t:"Serbia is home to the Uvac Special Nature Reserve, a canyon where the Uvac River forms extraordinary meanders and which serves as one of Europe's most important refuges for the griffon vulture."},
{e:"🎵",t:"Turbo-folk, a genre blending traditional Serbian folk music with electronic dance beats, emerged in Serbia during the 1990s and became both wildly popular and a subject of intense cultural debate."},
{e:"💡",t:"Belgrade is one of Europe's oldest continuously inhabited cities, with evidence of settlement dating back over 7,000 years, and has been destroyed and rebuilt over 40 times."},
{e:"🗣️",t:"Serbian is unique among European languages in that its educated speakers are equally proficient in two scripts — Cyrillic and Latin — and both are used officially in everyday life."},
{e:"⚽",t:"Novak Djokovic, widely considered one of the greatest tennis players of all time, was born in Belgrade and is Serbia's most celebrated living sportsperson."},
{e:"🍽️",t:"Ajvar, a roasted red pepper and eggplant relish prepared in enormous batches each autumn, is so culturally embedded that making it is a family and community ritual."}
]},
"Slovakia":{flag:"🇸🇰",capital:"Bratislava",continent:"Europe",population:"5.5M",facts:[
{e:"💡",t:"Bratislava is the only national capital in the world that borders two different countries — Austria and Hungary."},
{e:"🎭",t:"The Východná Folklore Festival, held annually since 1953, is Slovakia's oldest and most prestigious folk festival, showcasing the extraordinary diversity of regional costumes, dances, and music."},
{e:"🍽️",t:"Bryndzové halušky, soft potato dumplings smothered in bryndza (a sharp creamy sheep's cheese) and topped with crispy bacon fat, is Slovakia's national dish."},
{e:"🏛️",t:"Slovakia contains nine UNESCO World Heritage Sites including Spiš Castle, one of the largest castle complexes in Central Europe."},
{e:"🌿",t:"The Slovak Karst is a vast limestone plateau riddled with caves, including Domica Cave, which connects underground to a cave system in Hungary."},
{e:"🎵",t:"Slovak folk music from the Horehronie region features a unique fujara, a three-metre-long bass flute played vertically, which UNESCO has recognised as intangible cultural heritage."},
{e:"💡",t:"Slovakia was part of Czechoslovakia until the Velvet Divorce on 1 January 1993, when the country peacefully split into two states without a single shot fired."},
{e:"🗣️",t:"Slovak and Czech are so mutually intelligible that speakers of both languages can generally understand each other without translation."},
{e:"⚽",t:"Slovakia's ice hockey team won the IIHF World Championship in 2002, with Slovaks producing numerous NHL stars including Peter Šťastný and Marián Hossa."},
{e:"🍽️",t:"Kapustnica, a hearty sauerkraut soup loaded with smoked sausage, mushrooms, and cream, is the traditional Christmas Eve soup in Slovakia."}
]},
"Slovenia":{flag:"🇸🇮",capital:"Ljubljana",continent:"Europe",population:"2.1M",facts:[
{e:"💡",t:"Slovenia is the only country in the world whose name contains the word 'love', and its capital Ljubljana literally means 'beloved' in the local language."},
{e:"🎭",t:"The Kurentovanje carnival in Ptuj features the iconic Kurent costume — a shaggy fur suit with cowbells and a feathered headdress — worn to chase away winter spirits."},
{e:"🍽️",t:"Potica, a rolled sweet bread filled with walnut paste, honey, and spices, is Slovenia's most cherished festive food, traditionally made for Easter, Christmas, and family celebrations."},
{e:"🏛️",t:"Predjama Castle, built directly into the mouth of a cave 123 metres up a cliff face, is considered the world's largest cave castle."},
{e:"🌿",t:"Over 60% of Slovenia is covered by forest, making it the third most forested country in Europe, and it was the first country to declare itself a 'green country' through national legislation."},
{e:"🎵",t:"Laibach, the avant-garde industrial band formed in Slovenia in 1980, became internationally notorious and in 2015 became the first Western band to perform in North Korea."},
{e:"💡",t:"Slovenia punches far above its weight in beekeeping, with one of the highest densities of beehives per capita in the world, and the Carniolan honeybee is one of the most widely bred bee subspecies globally."},
{e:"🗣️",t:"Slovenian has an extremely rare grammatical feature called the dual number — a form distinct from both singular and plural used specifically when referring to exactly two people or things."},
{e:"⚽",t:"Slovenia produced NBA star Luka Dončić, widely considered one of the greatest basketball players of his generation, and the national basketball team won EuroBasket in 2017."},
{e:"🍽️",t:"Štruklji, rolled dumplings made from thin dough with sweet or savoury fillings including tarragon, cottage cheese, or walnut, are one of Slovenia's most versatile and ancient dishes."}
]},
"Ukraine":{flag:"🇺🇦",capital:"Kyiv",continent:"Europe",population:"43.5M",facts:[
{e:"💡",t:"Ukraine is the largest country entirely within Europe by land area, covering over 600,000 square kilometres — larger than any other fully European nation including France."},
{e:"🎭",t:"Pysanka, the Ukrainian tradition of decorating eggs with intricate wax-resist designs using geometric and symbolic patterns, is one of the world's oldest and most complex folk art traditions."},
{e:"🍽️",t:"Borscht, the deep crimson beetroot soup that is one of the world's most recognised dishes, originates from Ukraine, and UNESCO added Ukrainian borscht-making to its intangible cultural heritage list in 2022."},
{e:"🏛️",t:"The Saint Sophia Cathedral in Kyiv, built in the 11th century, contains the largest surviving collection of original Byzantine mosaics in the world."},
{e:"🌿",t:"Ukraine possesses some of the world's most fertile agricultural soil — the famous chernozem or 'black earth' — making it one of the world's leading exporters of wheat, sunflower oil, and corn."},
{e:"🎵",t:"The bandura, a large Ukrainian folk instrument combining the features of a lute and a psaltery with up to 65 strings, is Ukraine's national instrument."},
{e:"💡",t:"Kyiv is one of Europe's oldest capital cities, founded according to legend in the 5th century, and the Kyivan Rus state is considered the cultural ancestor of modern Ukraine, Russia, and Belarus."},
{e:"🗣️",t:"Ukrainian uses the Cyrillic alphabet but has sounds and letters distinct from Russian, including the letter 'ї' (yi) unique to Ukrainian."},
{e:"⚽",t:"Andriy Shevchenko, who won the Ballon d'Or in 2004 while at AC Milan, is Ukraine's greatest footballer and later managed the national team."},
{e:"🍽️",t:"Varenyky, stuffed dumplings filled with potato, cheese, sauerkraut, cherries, or meat and served with sour cream, are Ukraine's most beloved comfort food."}
]},
"Austria":{flag:"🇦🇹",capital:"Vienna",continent:"Europe",population:"9M",facts:[
{e:"💡",t:"Austria gave the world the croissant — Viennese bakers invented it in 1683 to celebrate defeating the Ottoman siege."},
{e:"🎭",t:"The Vienna State Opera performs nearly 300 shows per year and is considered one of the world's leading opera houses."},
{e:"🍽️",t:"Wiener Schnitzel must legally be made from veal — versions using pork must be labeled 'Schnitzel Wiener Art'."},
{e:"🏛️",t:"The Habsburg dynasty ruled Austria for over 600 years, making it one of history's longest-reigning royal families."},
{e:"🌿",t:"Two-thirds of Austria is covered by the Alps, and the country has over 3,000 glaciers."},
{e:"🎵",t:"Mozart, Haydn, Schubert, and Brahms all lived and worked in Vienna, earning it the title 'City of Music'."},
{e:"💡",t:"Austria was the birthplace of psychoanalysis — Sigmund Freud developed the field in Vienna in the late 19th century."},
{e:"🗣️",t:"Austrian German contains hundreds of unique words not used in Germany, and some Austrian terms differ so much they have official EU recognition."},
{e:"⚽",t:"Austria hosted the 1954 FIFA World Cup third-place match, and their 1954 squad is considered the greatest in Austrian football history."},
{e:"🍽️",t:"Sachertorte, a dense chocolate cake with apricot jam, was invented in Vienna in 1832 and sparked a decade-long legal battle over its recipe."}
]},
"Belgium":{flag:"🇧🇪",capital:"Brussels",continent:"Europe",population:"11.6M",facts:[
{e:"💡",t:"Belgium has more castles per square kilometer than any other country in the world — over 3,000 in total."},
{e:"🎭",t:"The Belgian comic strip tradition produced Tintin, The Smurfs, and Lucky Luke, earning Belgium the title 'Ninth Art' capital of Europe."},
{e:"🍽️",t:"Belgium produces over 220,000 tonnes of chocolate per year and has around 2,000 chocolatiers — Brussels airport is the world's largest chocolate-selling point."},
{e:"🏛️",t:"The Atomium in Brussels was built for the 1958 World's Fair and represents an iron crystal magnified 165 billion times."},
{e:"🌿",t:"The Ardennes forest covers the southeastern quarter of Belgium and was the site of the Battle of the Bulge in World War II."},
{e:"🎵",t:"The saxophone was invented by Belgian instrument maker Adolphe Sax in 1840 in Paris, after he grew up in Dinant, Belgium."},
{e:"💡",t:"Belgium has been without a fully functioning government for record periods — in 2010–2011 it went 589 days without a federal government."},
{e:"🗣️",t:"Belgium has three official languages — Dutch, French, and German — and its linguistic divide has shaped its entire political structure."},
{e:"⚽",t:"The Belgian national football team, known as the Red Devils, reached number one in the FIFA world rankings in 2015."},
{e:"🍽️",t:"French fries were actually invented in Belgium, not France — Belgians were frying potatoes in the Meuse valley as early as the 1680s."}
]},
"Denmark":{flag:"🇩🇰",capital:"Copenhagen",continent:"Europe",population:"5.9M",facts:[
{e:"💡",t:"Denmark's flag, the Dannebrog, is the world's oldest continuously used national flag, dating back to 1370."},
{e:"🎭",t:"The concept of 'hygge' — a Danish word for cozy contentment and conviviality — has no direct English equivalent and is central to Danish culture."},
{e:"🍽️",t:"Denmark's Noma restaurant in Copenhagen was ranked the world's best restaurant four times between 2010 and 2021, pioneering the New Nordic cuisine movement."},
{e:"🏛️",t:"The Viking ship museum in Roskilde houses five original Viking ships raised from Roskilde Fjord, dating to around 1000 AD."},
{e:"🌿",t:"Denmark is almost entirely flat, with its highest natural point, Møllehøj, standing just 170.86 metres above sea level."},
{e:"🎵",t:"Denmark has the world's oldest amusement park still in operation — Dyrehavsbakken, opened in 1583, predating the famous Tivoli Gardens by 260 years."},
{e:"💡",t:"LEGO was invented in Denmark by Ole Kirk Christiansen in 1932 — the name comes from the Danish words 'leg godt' meaning 'play well'."},
{e:"🗣️",t:"Danish has a unique phenomenon called 'stødt', a creaky voice quality used on certain vowels that has no equivalent in neighbouring Scandinavian languages."},
{e:"⚽",t:"Denmark famously won UEFA Euro 1992 despite not qualifying — they were called up as replacements for Yugoslavia just ten days before the tournament."},
{e:"🍽️",t:"Smørrebrød, the open-faced rye bread sandwich, is a Danish staple with hundreds of traditional toppings governed by strict rules about correct assembly order."}
]},
"Ireland":{flag:"🇮🇪",capital:"Dublin",continent:"Europe",population:"5.1M",facts:[
{e:"💡",t:"Ireland is the only country in the world with a musical instrument — the harp — as its national symbol."},
{e:"🎭",t:"Ireland has produced four Nobel Prize winners in Literature: W.B. Yeats, George Bernard Shaw, Samuel Beckett, and Seamus Heaney."},
{e:"🍽️",t:"Irish butter is globally renowned for its rich flavour — Irish cows graze on lush grass year-round, producing milk with unusually high butterfat content."},
{e:"🏛️",t:"Newgrange in County Meath is a prehistoric monument older than Stonehenge and the Egyptian pyramids, built around 3200 BC."},
{e:"🌿",t:"Ireland is known as the Emerald Isle for its intense green landscape, which results from over 150 rain days per year and mild Atlantic temperatures."},
{e:"🎵",t:"Ireland has the highest per capita pub density in the world, and traditional Irish session music is a UNESCO-recognised cultural heritage."},
{e:"💡",t:"The Irish diaspora is one of the largest in the world — an estimated 80 million people worldwide claim Irish descent, compared to just 5 million living in Ireland."},
{e:"🗣️",t:"Irish (Gaeilge) is the first official language of Ireland and the oldest written vernacular language in Western Europe, with manuscripts dating to the 6th century."},
{e:"⚽",t:"Gaelic football and hurling, played under Gaelic Athletic Association rules, are the most watched sports in Ireland and are entirely amateur with no professional leagues."},
{e:"🍽️",t:"Guinness stout, brewed at St. James's Gate in Dublin since 1759, accounts for over 40% of all beer sold in Ireland and is exported to 150 countries."}
]},
"Luxembourg":{flag:"🇱🇺",capital:"Luxembourg City",continent:"Europe",population:"672K",facts:[
{e:"💡",t:"Luxembourg is the world's only remaining Grand Duchy, currently ruled by Grand Duke Henri since 2000."},
{e:"🎭",t:"Luxembourg City's historic old town and fortifications are a UNESCO World Heritage Site, earning it the nickname 'The Gibraltar of the North'."},
{e:"🍽️",t:"Judd mat Gaardebounen — smoked collar of pork with broad beans — is Luxembourg's national dish and is eaten especially during spring festivals."},
{e:"🏛️",t:"Luxembourg was one of the six founding members of what became the European Union in 1957, and hosts major EU institutions including the Court of Justice."},
{e:"🌿",t:"The Müllerthal region, known as 'Little Switzerland', features dramatic sandstone rock formations and dense forest carved by glaciers over millennia."},
{e:"🎵",t:"Luxembourg won the Eurovision Song Contest five times between 1961 and 1983, a remarkable feat for such a small nation."},
{e:"💡",t:"Luxembourg has the highest GDP per capita in the world, driven by its financial sector which manages over €5 trillion in investment funds."},
{e:"🗣️",t:"Luxembourg has three official languages — Luxembourgish, French, and German — and most citizens speak all three fluently along with English."},
{e:"⚽",t:"Despite its small size, Luxembourg has a football league with 14 clubs, and its national team frequently produces surprise results against larger nations."},
{e:"🍽️",t:"Riesling wine from the Moselle valley in Luxembourg has been produced since Roman times and is considered among Europe's finest, though rarely exported."}
]},
"Netherlands":{flag:"🇳🇱",capital:"Amsterdam",continent:"Europe",population:"17.9M",facts:[
{e:"💡",t:"About one-third of the Netherlands lies below sea level, and without its 3,700 km of dikes and flood barriers much of the country would be regularly submerged."},
{e:"🎭",t:"The Dutch Golden Age of the 17th century produced Rembrandt, Vermeer, and Frans Hals — the Netherlands has more paintings per capita than any other country."},
{e:"🍽️",t:"The Netherlands is the world's second largest exporter of food and agriculture by value, behind only the United States, despite being one of the smallest countries in Europe."},
{e:"🏛️",t:"Amsterdam has more canals than Venice — over 100 km of waterways lined with 1,550 bridges and nearly 2,500 historic canal houses dating to the 17th century."},
{e:"🌿",t:"The Netherlands produces over 4 billion tulip bulbs per year — about half the world's total — and the Keukenhof gardens display 7 million flowers every spring."},
{e:"🎵",t:"DJs Tiësto, Armin van Buuren, Martin Garrix, and Hardwell are all Dutch — the Netherlands is considered the birthplace of modern trance and progressive house music."},
{e:"💡",t:"The Netherlands has over 23 million bicycles for 17.9 million people — it is the only country in the world with more bikes than people."},
{e:"🗣️",t:"Afrikaans, spoken by millions in South Africa, evolved directly from 17th-century Dutch and is considered one of the youngest natural languages in the world."},
{e:"⚽",t:"Dutch 'Total Football', developed by Ajax and the national team in the 1970s under Rinus Michels and Johan Cruyff, revolutionised football tactics worldwide."},
{e:"🍽️",t:"Gouda and Edam cheeses both come from Dutch cities of the same name, and the Netherlands exports over 650,000 tonnes of cheese annually — more than any other country."}
]},
"Switzerland":{flag:"🇨🇭",capital:"Bern",continent:"Europe",population:"8.7M",facts:[
{e:"💡",t:"Switzerland has not been at war with another country since 1815, making it the world's longest-standing neutral nation — a status enshrined in international law."},
{e:"🎭",t:"Switzerland has four official languages — German, French, Italian, and Romansh — and its culture, cuisine, and architecture shift dramatically with each linguistic region."},
{e:"🍽️",t:"Switzerland produces over 170,000 tonnes of chocolate per year, and Swiss people consume an average of 10 kg of chocolate per person annually — the highest in the world."},
{e:"🏛️",t:"The Swiss Confederation was founded in 1291, making Switzerland one of the world's oldest democracies."},
{e:"🌿",t:"Switzerland contains 1,484 lakes — including four of Europe's largest — and its Alps hold 1,800 glaciers, though these are retreating rapidly due to climate change."},
{e:"🎵",t:"The alphorn, a wooden wind instrument several metres long, was used by Alpine herders to communicate across valleys and remains a symbol of Swiss folk culture."},
{e:"💡",t:"Switzerland invented the World Wide Web — Tim Berners-Lee created it at CERN in Geneva in 1989, and the first website in history went live there in 1991."},
{e:"🗣️",t:"Swiss German (Schweizerdeutsch) dialects are so distinct from standard German that German speakers from Germany often cannot understand them."},
{e:"⚽",t:"Switzerland has hosted the FIFA headquarters in Zurich since 1932 and is home to more international sports federations than any other country in the world."},
{e:"🍽️",t:"Fondue, raclette, and rösti all originate from different Swiss regions and were historically peasant foods — fondue from the Alps, raclette from Valais, and rösti from Bern."}
]},
"Bolivia":{flag:"🇧🇴",capital:"Sucre",continent:"South America",population:"12M",facts:[
{e:"💡",t:"Bolivia has two capital cities — Sucre is the constitutional capital while La Paz is the seat of government, making it one of the few countries with split capitals."},
{e:"🌿",t:"Bolivia is home to Salar de Uyuni, the world's largest salt flat at over 10,000 square kilometers, which forms a perfect mirror when covered with a thin layer of water."},
{e:"🍽️",t:"Salteñas, a baked pastry filled with spiced meat and vegetables in a sweet gelatin-based broth, are so popular they are eaten as a mid-morning snack rather than a meal."},
{e:"🏛️",t:"Tiwanaku, near Lake Titicaca, was the capital of a pre-Columbian empire that flourished between 500 and 900 AD and is considered the spiritual and political center of Andean civilization."},
{e:"💡",t:"Bolivia is the world's highest country by average elevation, with most of its population living on the Altiplano plateau at over 3,600 meters above sea level."},
{e:"🎭",t:"The Oruro Carnival, recognized by UNESCO as an Intangible Cultural Heritage, features the Diablada dance in which performers wear elaborate devil masks weighing up to 20 kilograms."},
{e:"🎵",t:"The charango, a small Andean string instrument traditionally made from the shell of an armadillo, originated in Bolivia and remains central to Andean folk music."},
{e:"🗣️",t:"Bolivia recognizes 37 official languages, including Spanish, Quechua, and Aymara, giving it one of the highest numbers of official languages of any country on Earth."},
{e:"⚽",t:"Bolivia's Estadio Hernando Siles in La Paz sits at 3,637 meters altitude, making it so difficult for visiting teams that FIFA has at times banned international matches there."},
{e:"🍽️",t:"Chuño, a freeze-dried potato developed by Andean civilizations thousands of years ago, is still widely used in Bolivian cooking and can be stored for up to a decade without refrigeration."}
]},
"Costa Rica":{flag:"🇨🇷",capital:"San José",continent:"North America",population:"5M",facts:[
{e:"💡",t:"Costa Rica abolished its military in 1948, making it one of the few countries in the world with no standing army, and redirected military spending to education and healthcare."},
{e:"🌿",t:"Despite covering just 0.03% of the Earth's surface, Costa Rica contains nearly 5% of the world's total biodiversity, including over 900 species of birds."},
{e:"🍽️",t:"Gallo pinto, a mixture of rice and black beans fried together with onion and cilantro, is the national dish eaten at breakfast, lunch, and dinner across the country."},
{e:"🏛️",t:"The Teatro Nacional de Costa Rica, completed in 1897, was funded by a tax on coffee exports and is considered the most important building in the country's history."},
{e:"💡",t:"Costa Rica generates over 99% of its electricity from renewable sources including hydropower, wind, and geothermal energy."},
{e:"🎭",t:"The Boyero Festival in Escazú celebrates the traditional oxcart drivers whose hand-painted carts were declared a UNESCO Intangible Cultural Heritage in 2005."},
{e:"🎵",t:"Punto Guanacasteco, a lively dance and musical genre from the Guanacaste region, is the national music of Costa Rica and features guitar, marimba, and castanets."},
{e:"🗣️",t:"Costa Ricans call themselves Ticos, derived from the habit of adding the diminutive suffix -tico to words, a linguistic trait unique to Costa Rican Spanish."},
{e:"⚽",t:"Costa Rica famously reached the quarterfinals of the 2014 FIFA World Cup, defeating Uruguay, Italy, and Greece."},
{e:"🍽️",t:"Peach palm fruit, known locally as pejibaye, is boiled and sold by street vendors throughout Costa Rica and is so nutritious it was a staple food of indigenous peoples for millennia."}
]},
"Dominican Republic":{flag:"🇩🇴",capital:"Santo Domingo",continent:"North America",population:"11M",facts:[
{e:"🏛️",t:"Santo Domingo, founded in 1498, is the oldest continuously inhabited European settlement in the Americas and contains the oldest cathedral, hospital, and university in the Western Hemisphere."},
{e:"🌿",t:"The Dominican Republic shares the island of Hispaniola with Haiti, making it one of only two Caribbean islands divided between two sovereign nations."},
{e:"🍽️",t:"La Bandera, meaning 'the flag,' is the national dish consisting of white rice, stewed red beans, and braised meat — its colors mirroring the Dominican flag."},
{e:"💡",t:"The Dominican Republic is the most visited country in the Caribbean, receiving over 7 million tourists per year."},
{e:"🎵",t:"Merengue, the infectious two-step dance music born in the Dominican Republic, was declared a UNESCO Intangible Cultural Heritage in 2016."},
{e:"🎭",t:"The Carnival of La Vega is one of the oldest and most vibrant carnivals in the Americas, featuring elaborate devil costumes called diablos cojuelos."},
{e:"🗣️",t:"Dominican Spanish is known for dropping the 's' at the end of syllables, making it one of the most distinctive dialects of the Spanish-speaking world."},
{e:"⚽",t:"Baseball is far more popular than football in the Dominican Republic, which has produced more Major League Baseball players per capita than any other nation."},
{e:"💡",t:"The Dominican Republic is the largest producer of organic cacao in the world and its fine-flavor Hispaniola cacao is prized by premium chocolate makers globally."},
{e:"🍽️",t:"Mangú, mashed green plantains topped with sautéed onions, is a beloved Dominican breakfast staple often served alongside fried cheese, salami, and eggs."}
]},
"Ecuador":{flag:"🇪🇨",capital:"Quito",continent:"South America",population:"18M",facts:[
{e:"💡",t:"Ecuador is the only country in the world named after a geographical feature — the equator — which runs directly through its territory."},
{e:"🌿",t:"Mount Chimborazo in Ecuador is the point on Earth farthest from the planet's center due to the equatorial bulge, making it technically the closest point to outer space."},
{e:"🍽️",t:"Ceviche in Ecuador is distinctively served with a tomato-based sauce rather than the lime-only preparation of Peru, and is commonly eaten for breakfast along the coast."},
{e:"🏛️",t:"Quito was the first city to be declared a UNESCO World Heritage Site in 1978 and preserves the largest, best-preserved historic center in Latin America."},
{e:"💡",t:"The Galápagos Islands, part of Ecuador, inspired Charles Darwin's theory of natural evolution after his 1835 visit, and remain one of the most biologically unique places on Earth."},
{e:"🎭",t:"Inti Raymi, the Festival of the Sun celebrated by indigenous Kichwa communities, is one of the most important ceremonies in Ecuador's Andean cultural calendar."},
{e:"🎵",t:"Pasillo is Ecuador's national music genre, a melancholic and lyrical style derived from the Colombian waltz."},
{e:"🗣️",t:"Ecuador is one of the world's biggest exporters of roses, which grow year-round in the highland valleys due to the consistent 12-hour days near the equator."},
{e:"⚽",t:"Ecuador became the first South American country to beat Brazil in a World Cup qualifier on Brazilian soil when they won 1–0 in Manaus."},
{e:"🍽️",t:"Guinea pig, known as cuy, is a traditional delicacy in the Andean highlands of Ecuador and has been farmed and eaten by indigenous communities for over 5,000 years."}
]},
"El Salvador":{flag:"🇸🇻",capital:"San Salvador",continent:"North America",population:"6.5M",facts:[
{e:"💡",t:"El Salvador is the smallest and most densely populated country in Central America, and the only one without a Caribbean coastline."},
{e:"🌿",t:"El Salvador sits on the Ring of Fire and has over 20 volcanoes, two of which — Santa Ana and Izalco — remain active."},
{e:"🍽️",t:"Pupusas, thick handmade corn tortillas stuffed with cheese, beans, or chicharrón, are the national dish and so important that November 13 is officially National Pupusa Day."},
{e:"🏛️",t:"Joya de Cerén, a pre-Columbian farming village preserved under volcanic ash since 590 AD, is called the 'Pompeii of the Americas' and is a UNESCO World Heritage Site."},
{e:"💡",t:"In 2021 El Salvador became the first country in the world to adopt Bitcoin as legal tender alongside the US dollar."},
{e:"🎭",t:"The Festival of El Salvador del Mundo in August is the country's most important religious celebration, honoring Jesus as Savior of the World."},
{e:"🎵",t:"Cumbia Salvadoreña and local salsa styles dominate popular music, but the country also has a thriving underground cumbia rebajada scene."},
{e:"🗣️",t:"Salvadoran Spanish retains the use of 'vos' instead of 'tú' for second-person singular, a colonial-era pronoun that has disappeared from most other Spanish-speaking countries."},
{e:"⚽",t:"The 1969 'Football War' between El Salvador and Honduras was triggered partly by tensions surrounding a World Cup qualifying match."},
{e:"🍽️",t:"Atol de elote, a warm sweet drink made from fresh corn blended with cinnamon and sugar, is a beloved street food in El Salvador."}
]},
"Guatemala":{flag:"🇬🇹",capital:"Guatemala City",continent:"North America",population:"18M",facts:[
{e:"🏛️",t:"Tikal, a UNESCO World Heritage Site, was one of the most powerful cities of the ancient Maya empire and its Temple IV is the tallest pre-Columbian structure in the Americas."},
{e:"🌿",t:"Guatemala has 37 volcanoes, including Volcán Santiaguito which has been continuously erupting since 1922."},
{e:"🍽️",t:"Pepián, a rich stew made with ground pumpkin seeds, sesame, dried chiles, and tomatoes, is considered Guatemala's oldest national dish with Mayan roots."},
{e:"💡",t:"Guatemala is the birthplace of Mayan civilization and today has the highest proportion of indigenous Maya people of any country in Central America."},
{e:"🎭",t:"The Dance of the Conquest, performed during religious festivals, reenacts the Spanish defeat of the indigenous Quiché Maya."},
{e:"🎵",t:"The marimba, a wooden xylophone played with mallets, is the national instrument of Guatemala."},
{e:"🗣️",t:"Guatemala recognizes 25 Mayan languages as co-official alongside Spanish, with Kʼicheʼ being the most widely spoken indigenous language."},
{e:"⚽",t:"Guatemala's football team has never qualified for a FIFA World Cup but dominates CONCACAF sub-regional competitions."},
{e:"💡",t:"Lake Atitlán, formed in a volcanic caldera surrounded by three volcanoes, was described by Aldous Huxley as 'the most beautiful lake in the world'."},
{e:"🍽️",t:"Chuchitos, small steamed corn dough dumplings filled with meat and tomato sauce wrapped in corn husks, are a beloved Guatemalan street food."}
]},
"Guyana":{flag:"🇬🇾",capital:"Georgetown",continent:"South America",population:"800K",facts:[
{e:"💡",t:"Guyana is the only English-speaking country in South America, a legacy of British colonial rule."},
{e:"🌿",t:"Kaieteur Falls in Guyana is the world's largest single-drop waterfall by volume of water, dropping 226 meters."},
{e:"🍽️",t:"Pepperpot, a dark and intensely spiced meat stew slow-cooked with cassareep — a sauce made from cassava root — is Guyana's national dish."},
{e:"🏛️",t:"Georgetown's St. George's Cathedral, built entirely of wood in the 1890s, stands 43 meters tall and is the tallest wooden church in the world."},
{e:"💡",t:"Guyana began major offshore oil production in 2019 following one of the largest oil discoveries of the 21st century."},
{e:"🎭",t:"Mashramani, celebrated on Republic Day in February, is Guyana's biggest festival featuring steel pan music and masquerade costumes."},
{e:"🎵",t:"Chutney-soca, a fusion of Indo-Caribbean chutney music with Trinidadian soca, is enormously popular in Guyana."},
{e:"🗣️",t:"Guyanese Creole, an English-based creole language, is the native tongue of most Guyanese and blends English with West African, Amerindian, and East Indian elements."},
{e:"⚽",t:"Cricket, not football, is the most popular sport in Guyana, which is one of the nine territories that make up the West Indies cricket team."},
{e:"🍽️",t:"Cook-up rice, a one-pot dish of rice, black-eyed peas, coconut milk, and various meats, is a Saturday staple in Guyanese households."}
]},
"Haiti":{flag:"🇭🇹",capital:"Port-au-Prince",continent:"North America",population:"12M",facts:[
{e:"🏛️",t:"Haiti became the first Black republic in the world and the first country in the Western Hemisphere to abolish slavery when it declared independence from France on January 1, 1804."},
{e:"💡",t:"The Haitian Revolution of 1791–1804 is the only successful slave revolt in history that resulted in the founding of a nation."},
{e:"🍽️",t:"Griot, deep-fried marinated pork shoulder served with pikliz — a fiery pickled cabbage and Scotch bonnet condiment — is considered the unofficial national dish."},
{e:"🌿",t:"Haiti shares the island of Hispaniola with the Dominican Republic and was once the richest colony in the Caribbean, producing 40% of Europe's sugar."},
{e:"🎭",t:"Vodou, a religious tradition blending West African Fon and Ewe beliefs with Haitian Taino and Catholic elements, played a crucial role in organizing the revolution."},
{e:"🎵",t:"Kompa, a smooth and rhythmic music genre created by Nemours Jean-Baptiste in 1955, is Haiti's most beloved popular music."},
{e:"🗣️",t:"Haiti has two official languages — French and Haitian Creole — but over 95% of the population speaks Haitian Creole as their primary language."},
{e:"⚽",t:"Haiti was the first Caribbean nation to qualify for the FIFA World Cup, appearing in the 1974 tournament in West Germany."},
{e:"💡",t:"The Citadelle Laferrière, a massive mountaintop fortress built after independence, is one of the largest fortresses in the Americas and a UNESCO World Heritage Site."},
{e:"🍽️",t:"Soup joumou, a hearty pumpkin soup eaten every January 1st on Independence Day, commemorates the freedom of enslaved people who were once forbidden from eating the dish."}
]},
"Honduras":{flag:"🇭🇳",capital:"Tegucigalpa",continent:"North America",population:"10M",facts:[
{e:"🏛️",t:"Copán, a UNESCO World Heritage Site, is one of the most important Maya archaeological sites and is renowned for its intricately carved stelae and hieroglyphic stairway."},
{e:"🌿",t:"Honduras contains the largest tropical rainforest in Central America, the Mosquitia, which shelters uncontacted indigenous communities and extraordinary biodiversity."},
{e:"🍽️",t:"Baleadas, flour tortillas folded over refried beans, cream, and cheese, are the quintessential Honduran street food eaten at any time of day."},
{e:"💡",t:"Honduras is the world's largest exporter of palm oil and one of the top coffee producers in Central America."},
{e:"🎭",t:"The Garifuna people of Honduras's Caribbean coast maintain a unique Afro-indigenous culture recognized by UNESCO."},
{e:"🎵",t:"Punta rock, born in Honduras in the 1970s by Pen Cayetano, electrified the traditional Garifuna punta rhythm."},
{e:"🗣️",t:"The Bay Islands of Honduras are home to a community of descendants of English-speaking settlers who still speak an archaic form of English."},
{e:"⚽",t:"Football is a national obsession in Honduras, and the country was directly involved in the 1969 Football War with El Salvador."},
{e:"💡",t:"Tegucigalpa is one of the few world capitals not served by a highway, and its airport is considered one of the most dangerous due to its mountainous approach."},
{e:"🍽️",t:"Tapado, a coastal seafood soup made with coconut milk, green bananas, and mixed shellfish, reflects Honduras's Caribbean heritage."}
]},
"Jamaica":{flag:"🇯🇲",capital:"Kingston",continent:"North America",population:"3M",facts:[
{e:"🎵",t:"Jamaica gave the world reggae music, ska, and dancehall, and Bob Marley remains one of the best-selling music artists in history."},
{e:"💡",t:"Jamaica was the first country in the Western Hemisphere to build a railway, completing its first line in 1845."},
{e:"🍽️",t:"Jerk seasoning originated with the Maroons, escaped enslaved Africans who developed the technique to preserve and flavor wild boar in the mountains."},
{e:"🌿",t:"Jamaica's Blue Mountains are home to one of the rarest and most expensive coffees in the world, Blue Mountain Coffee."},
{e:"🏛️",t:"Port Royal, Jamaica was once known as the 'wickedest city on Earth,' serving as a major pirate haven before sinking into the sea during the 1692 earthquake."},
{e:"🎭",t:"Nine Night is a Jamaican funeral tradition in which family and friends gather for nine consecutive nights after a death to celebrate the deceased's life."},
{e:"🗣️",t:"Jamaican Patois, also called Jamaican Creole, is an English-based creole with strong West African grammatical influences."},
{e:"⚽",t:"Jamaica produced sprinting legends including Usain Bolt, who holds world records in the 100m and 200m."},
{e:"💡",t:"The Rastafari movement, which venerates the late Ethiopian Emperor Haile Selassie as a messiah, was born in Jamaica in the 1930s."},
{e:"🍽️",t:"Ackee, Jamaica's national fruit, is poisonous unless fully ripe — it is paired with saltfish to make the national dish, ackee and saltfish."}
]},
"Nicaragua":{flag:"🇳🇮",capital:"Managua",continent:"North America",population:"7M",facts:[
{e:"💡",t:"Nicaragua is the largest country in Central America by land area and is sometimes called the 'Land of Lakes and Volcanoes'."},
{e:"🌿",t:"Lake Nicaragua is the only freshwater lake in the world to contain oceanic animals including sharks and sawfish."},
{e:"🍽️",t:"Gallo pinto in Nicaragua is made with small red beans rather than the black beans used in Costa Rica."},
{e:"🏛️",t:"León Cathedral, completed in 1860 after 113 years of construction, is the largest cathedral in Central America and a UNESCO World Heritage Site."},
{e:"💡",t:"Ometepe Island in Lake Nicaragua was formed by two volcanoes rising from freshwater, creating a figure-8 shaped island inhabited for over 3,500 years."},
{e:"🎭",t:"El Güegüense, a satirical theatrical play blending Spanish and Nahuatl, is considered the first literary work of post-Columbian America and a UNESCO Intangible Cultural Heritage."},
{e:"🎵",t:"Marimba bands, guitar-driven folk music, and the palo de mayo Afro-Caribbean dance tradition all coexist in Nicaragua's diverse musical landscape."},
{e:"🗣️",t:"Nicaraguans use 'vos' rather than 'tú,' and their dialect features a distinctive cadence with indigenous Nahuatl loanwords."},
{e:"⚽",t:"Baseball is more popular than football along Nicaragua's Pacific coast, a legacy of early 20th-century American military and commercial presence."},
{e:"🍽️",t:"Vigorón, a street food dish of yuca topped with chicharrón and curtido, is served on a banana leaf and is the signature snack of Granada."}
]},
"Panama":{flag:"🇵🇦",capital:"Panama City",continent:"North America",population:"4.5M",facts:[
{e:"🏛️",t:"The Panama Canal, opened in 1914, cuts 80 kilometers across the isthmus and saves ships approximately 12,000 kilometers compared to rounding Cape Horn."},
{e:"💡",t:"Panama is the only place in the world where you can watch the sun rise over the Pacific Ocean and set over the Atlantic."},
{e:"🍽️",t:"Sancocho de gallina, a slow-simmered chicken soup with yuca, corn, plantain, and culantro herb, is the national dish of Panama."},
{e:"🌿",t:"Panama's Darién Gap, a 160-kilometer stretch of roadless jungle, is the only break in the 48,000-kilometer Pan-American Highway."},
{e:"🎭",t:"The pollera, an elaborate embroidered dress worn during festivals, can take up to a year to handcraft and is considered the most beautiful national costume in the Americas."},
{e:"🎵",t:"Reggaeton was born and developed in Panama City in the 1980s and 90s before being popularized in Puerto Rico."},
{e:"🗣️",t:"Panama City is home to one of the most diverse populations in Latin America, with significant Afro-Panamanian, Chinese, Indian, and indigenous communities."},
{e:"⚽",t:"Panama qualified for its first FIFA World Cup in 2018 and celebrated so wildly that the president declared a national holiday."},
{e:"💡",t:"The Guna Yala archipelago off Panama's Caribbean coast consists of around 365 coral islands governed autonomously by the Guna people."},
{e:"🍽️",t:"Ceviche panameño uses corvina fish marinated in lime juice with onion, cilantro, and ají chombo pepper, commonly sold from roadside carts."}
]},
"Paraguay":{flag:"🇵🇾",capital:"Asunción",continent:"South America",population:"7.5M",facts:[
{e:"💡",t:"Paraguay is one of only two landlocked countries in South America, the other being Bolivia."},
{e:"🗣️",t:"Paraguay is the only country in the Americas where a majority of the population speaks an indigenous language — Guaraní — as a first language alongside Spanish."},
{e:"🍽️",t:"Sopa paraguaya, despite being named 'Paraguayan soup,' is actually a dense cornbread made with corn flour, cheese, and onions."},
{e:"🏛️",t:"During the War of the Triple Alliance (1864–1870), Paraguay lost approximately 60–70% of its total population, one of the most devastating wars in South American history."},
{e:"🌿",t:"The Itaipu Dam on the Paraná River, jointly operated by Paraguay and Brazil, was the world's largest hydroelectric dam by power output from 1984 until 2012."},
{e:"🎭",t:"Paraguayan ñandutí lace, intricate spider-web-like lacework traditionally made by women in Itauguá, is a recognized form of folk art unique to Paraguay."},
{e:"🎵",t:"The Paraguayan harp, with 36 to 38 strings and a distinctively bright tone, is the national instrument and is played at a speed that astonishes classical musicians worldwide."},
{e:"⚽",t:"Paraguay reached the quarterfinals of the 2010 FIFA World Cup, making it the country's best-ever World Cup performance."},
{e:"💡",t:"Paraguay is the world's fourth-largest exporter of soybeans and one of the top exporters of beef."},
{e:"🍽️",t:"Tereré, cold yerba mate brewed with iced water or citrus juice and drunk through a metal straw called a bombilla, is the national drink of Paraguay."}
]},
"Puerto Rico":{flag:"🇵🇷",capital:"San Juan",continent:"North America",population:"3.2M",facts:[
{e:"🏛️",t:"Old San Juan is home to Castillo San Felipe del Morro, a 16th-century Spanish citadel perched on a 45-meter cliff overlooking the Atlantic."},
{e:"💡",t:"Puerto Rico is a US territory whose residents are American citizens by birth but cannot vote in US presidential elections unless they relocate to a US state."},
{e:"🍽️",t:"Mofongo, fried green plantains mashed with garlic and pork crackling, is Puerto Rico's most iconic dish."},
{e:"🌿",t:"El Yunque in Puerto Rico is the only tropical rainforest in the US National Forest System, receiving over 3,500 millimeters of rainfall per year."},
{e:"🎵",t:"Salsa music was born from the Puerto Rican diaspora in New York City in the 1960s and 70s, blending Cuban son and mambo with jazz."},
{e:"🎭",t:"Las Fiestas de la Calle San Sebastián in Old San Juan, held every January, is one of the largest street festivals in the Caribbean."},
{e:"🗣️",t:"Puerto Rico has two official languages — Spanish and English — but Spanish is the dominant everyday language."},
{e:"⚽",t:"Puerto Rico competes internationally as its own entity in the Olympics despite being a US territory, and has won Olympic medals in boxing and judo."},
{e:"💡",t:"The Arecibo Observatory, built in 1963, was the world's largest single-aperture radio telescope for 53 years."},
{e:"🍽️",t:"Lechón asado, a whole pig slow-roasted over wood coals for up to 12 hours, is the centerpiece of Puerto Rican celebrations."}
]},
"Suriname":{flag:"🇸🇷",capital:"Paramaribo",continent:"South America",population:"620K",facts:[
{e:"💡",t:"Suriname is the smallest country in South America and the only one where Dutch is the official language."},
{e:"🌿",t:"Approximately 90% of Suriname's territory is covered by Amazon rainforest."},
{e:"🍽️",t:"Pom, a casserole made from pomtajer root grated and baked with chicken and citrus juice, is Suriname's most beloved dish."},
{e:"🏛️",t:"The historic inner city of Paramaribo is a UNESCO World Heritage Site and one of the best-preserved colonial town centers in South America."},
{e:"💡",t:"Suriname has one of the most ethnically diverse populations on Earth, with Hindustani, Creole, Javanese, Maroon, Amerindian, Chinese, and European communities."},
{e:"🎭",t:"The Maroon communities of Suriname's interior developed one of the most elaborate wood-carving and textile art traditions in the Americas."},
{e:"🎵",t:"Kaseko, a uniquely Surinamese music genre blending African rhythms, Creole traditions, and brass band influences, is the dominant popular music."},
{e:"🗣️",t:"Sranan Tongo, an English-based creole language, serves as Suriname's lingua franca and is the native tongue of most urban Surinamese."},
{e:"⚽",t:"Suriname has produced numerous Dutch football internationals including Clarence Seedorf, Patrick Kluivert, and Virgil van Dijk."},
{e:"🍽️",t:"Roti Surinaams, a soft flatbread served with curried potato, chicken, and long beans, reflects the Hindustani heritage and is eaten across all communities."}
]},
"Trinidad and Tobago":{flag:"🇹🇹",capital:"Port of Spain",continent:"North America",population:"1.4M",facts:[
{e:"🎵",t:"Trinidad and Tobago invented the steel pan, the only acoustic musical instrument developed in the 20th century, created from discarded oil drums."},
{e:"💡",t:"Trinidad and Tobago has the highest per capita income in the Caribbean, largely driven by oil and gas wealth."},
{e:"🍽️",t:"Doubles, two small bara flatbreads filled with curried chickpeas, tamarind, and pepper sauce, are Trinidad's most iconic street food."},
{e:"🌿",t:"The Pitch Lake in Trinidad is the largest natural deposit of asphalt in the world at roughly 40 hectares."},
{e:"🎭",t:"Trinidad Carnival, held annually before Lent, is considered the greatest street party on Earth."},
{e:"💡",t:"The limbo dance originated in Trinidad, where it was traditionally performed at wakes as a symbol of passing under the bar of death."},
{e:"🗣️",t:"Trinidad and Tobago has one of the most distinctive English dialects in the world, infused with French Creole, Spanish, Hindi, and West African vocabulary."},
{e:"⚽",t:"Trinidad and Tobago famously qualified for the 2006 FIFA World Cup, becoming the smallest nation ever to qualify at that time."},
{e:"🍽️",t:"Callaloo, a slow-simmered stew of dasheen leaves, okra, coconut milk, and crab, is the national dish."},
{e:"🌿",t:"Tobago's Main Ridge Forest Reserve, established in 1776, is the oldest protected rainforest in the Western Hemisphere."}
]},
"Uruguay":{flag:"🇺🇾",capital:"Montevideo",continent:"South America",population:"3.5M",facts:[
{e:"💡",t:"Uruguay was the first country in the world to legalize the production, sale, and consumption of recreational cannabis through a state-controlled market in 2013."},
{e:"🌿",t:"Uruguay has no volcanoes, no earthquakes, no tropical storms, and no extreme weather events, making it one of the most geologically stable countries in the world."},
{e:"🍽️",t:"Asado, the ritual of slow-grilling beef over open wood embers, is more than a meal in Uruguay — it is a sacred social institution."},
{e:"🏛️",t:"Uruguay hosted and won the first FIFA World Cup in 1930, defeating Argentina 4–2 in the final in Montevideo."},
{e:"💡",t:"Uruguay was the first country in Latin America to legalize same-sex marriage in 2013."},
{e:"🎭",t:"Candombe, an Afro-Uruguayan drum tradition brought by enslaved Africans from the Congo, is UNESCO-recognized and performed every weekend in Montevideo."},
{e:"🎵",t:"Tango was born simultaneously in Uruguay and Argentina along the Río de la Plata estuary."},
{e:"🗣️",t:"Rioplatense Spanish spoken in Uruguay features lunfardo, a slang dialect that originated in Buenos Aires prisons in the 19th century."},
{e:"⚽",t:"Uruguay has won the Copa América a record 15 times and is the only country to have won the World Cup twice with only 3.5 million people."},
{e:"🍽️",t:"Chivito, a towering sandwich of thin beef steak layered with ham, bacon, mozzarella, egg, olives, and mayonnaise, is Uruguay's national sandwich."}
]},
"Venezuela":{flag:"🇻🇪",capital:"Caracas",continent:"South America",population:"29M",facts:[
{e:"🌿",t:"Angel Falls in Venezuela is the world's highest uninterrupted waterfall, plunging 979 meters from the Auyán-tepui table mountain."},
{e:"💡",t:"Venezuela holds the largest proven oil reserves of any country on Earth, surpassing Saudi Arabia."},
{e:"🍽️",t:"Arepas, grilled or fried cornmeal cakes split open and stuffed with cheese, meat, beans, or avocado, are eaten at every meal in Venezuela."},
{e:"🏛️",t:"Canaima National Park, a UNESCO World Heritage Site larger than Greece, contains spectacular tepuis — ancient flat-topped mountains up to 3 billion years old."},
{e:"🎭",t:"Venezuela has won more Miss Universe and Miss World titles than any other nation, and beauty pageants are treated as a serious sport."},
{e:"🎵",t:"The joropo, a fast and energetic folk music and dance from Venezuela's llanos plains, is the national music featuring the arpa llanera harp, cuatro guitar, and maracas."},
{e:"🗣️",t:"Venezuelan Spanish is known for its clear pronunciation and musicality and is considered by many linguists the closest to classical Castilian Spanish."},
{e:"⚽",t:"Baseball, not football, is Venezuela's most popular sport, and the country has produced hundreds of Major League Baseball players including Miguel Cabrera."},
{e:"💡",t:"Lake Maracaibo in Venezuela produces a near-continuous lightning storm known as Catatumbo Lightning for up to 260 nights per year."},
{e:"🍽️",t:"Pabellón criollo, Venezuela's national dish, combines shredded beef, black beans, white rice, and fried sweet plantains on one plate."}
]},
"Fiji":{flag:"🇫🇯",capital:"Suva",continent:"Oceania",population:"930K",facts:[
{e:"💡",t:"Fiji is made up of 333 islands, of which only about 110 are permanently inhabited."},
{e:"🎭",t:"The traditional Fijian welcome ceremony called 'sevusevu' involves presenting a gift of kava root to the host."},
{e:"🍽️",t:"Kokoda is Fiji's national dish — raw fish marinated in citrus juice and coconut cream, similar to ceviche."},
{e:"🏛️",t:"The Fiji Museum in Thurston Gardens houses a canoe from the Bounty mutiny and artefacts over 3,700 years old."},
{e:"🌿",t:"Fiji sits on the 'Coral Triangle' edge and has some of the most biodiverse coral reef systems on Earth."},
{e:"🎵",t:"Traditional Fijian music features the lali drum, a large hollowed log used for ceremonial communication across villages."},
{e:"💡",t:"Fiji was the first country in the Southern Hemisphere to see the New Year each day due to the International Date Line."},
{e:"🗣️",t:"Fiji has three official languages: English, Fijian (iTaukei), and Fiji Hindi, reflecting its colonial and indentured labour history."},
{e:"⚽",t:"Fiji is a rugby powerhouse — the national 7s team won Fiji's first-ever Olympic gold medal at the 2016 Rio Games."},
{e:"🍽️",t:"Lovo is a traditional feast cooked underground in an earth oven, used for weddings, funerals, and major celebrations."}
]},
"New Caledonia":{flag:"🇳🇨",capital:"Nouméa",continent:"Oceania",population:"271K",facts:[
{e:"💡",t:"New Caledonia holds about 25% of the world's known nickel reserves, making it one of the most mineral-rich territories on Earth."},
{e:"🎭",t:"The indigenous Kanak people have inhabited New Caledonia for over 3,000 years and make up about 40% of the population today."},
{e:"🍽️",t:"Bougna is the traditional Kanak dish — yam, taro, banana, and chicken or seafood wrapped in banana leaves and slow-cooked on hot stones."},
{e:"🏛️",t:"The Tjibaou Cultural Centre in Nouméa, designed by Renzo Piano, is a stunning architectural tribute to Kanak culture opened in 1998."},
{e:"🌿",t:"New Caledonia's lagoon is the largest in the world and was designated a UNESCO World Heritage Site in 2008."},
{e:"🎵",t:"Kaneka is New Caledonia's own musical genre, blending traditional Kanak rhythms with reggae and Caribbean influences, born in the 1980s."},
{e:"💡",t:"New Caledonia is one of only 17 'biodiversity hotspots' on Earth — over 75% of its plant species are found nowhere else."},
{e:"🗣️",t:"Around 30 distinct Kanak languages are spoken across the islands, alongside French as the official administrative language."},
{e:"⚽",t:"New Caledonia competes in international football under FIFA as a separate territory and has qualified for the OFC Nations Cup finals."},
{e:"🍽️",t:"French culinary influence is strong — Nouméa's restaurants rival those in Paris, earning the city the nickname 'the Paris of the Pacific'."}
]},
"Papua New Guinea":{flag:"🇵🇬",capital:"Port Moresby",continent:"Oceania",population:"10M",facts:[
{e:"💡",t:"Papua New Guinea is one of the world's most culturally diverse nations, with over 800 distinct languages — roughly 12% of all languages on Earth."},
{e:"🎭",t:"The Mount Hagen Cultural Show is one of the largest sing-sing festivals, where hundreds of tribal groups gather in full ceremonial dress each August."},
{e:"🍽️",t:"Mumu is the traditional cooking method — a pit oven of hot stones used to slow-cook pork, sweet potato, and greens for feasts."},
{e:"🏛️",t:"The Kokoda Track is a 96 km jungle trail that was the site of a pivotal World War II campaign between Australian and Japanese forces in 1942."},
{e:"🌿",t:"PNG contains the third-largest tropical rainforest on Earth and is home to over 700 bird species, including 38 species of birds of paradise."},
{e:"🎵",t:"The garamut, a large slit drum carved from a single log, was historically used to send coded messages between villages across great distances."},
{e:"💡",t:"PNG was one of the last places on Earth where first contact with previously unknown tribal groups occurred — as recently as the 1930s."},
{e:"🗣️",t:"Tok Pisin, an English-based creole, serves as the lingua franca across PNG's extraordinarily fragmented linguistic landscape."},
{e:"⚽",t:"Rugby league is the national sport and religion — the PNG Hunters compete in Australia's Queensland Cup to immense national pride."},
{e:"🍽️",t:"Betel nut (buai) chewing is a ubiquitous social ritual across PNG, with markets dedicated entirely to the mildly stimulant nut and its lime powder."}
]},
"Falkland Islands":{flag:"🇫🇰",capital:"Stanley",continent:"South America",population:"3.4K",facts:[
{e:"💡",t:"The Falkland Islands have more penguins than people — around 500,000 penguins of five species outnumber the human population by over 140 to 1."},
{e:"🎭",t:"Despite being in the South Atlantic, Falklands culture is deeply British — residents drink tea, drive on the left, and celebrate traditional British holidays."},
{e:"🍽️",t:"Mutton is the cornerstone of Falklands cuisine, reflecting the islands' long history as a sheep-farming economy since the 19th century."},
{e:"🏛️",t:"The rusting hulks of 19th-century sailing ships in Stanley Harbour remain as they were beached, creating one of the world's most unusual maritime graveyards."},
{e:"🌿",t:"The Falklands are home to the largest black-browed albatross colony on Earth, with over 400,000 breeding pairs on the island of Steeple Jason."},
{e:"🎵",t:"The Falkland Islands Broadcasting Station, established in 1929, is one of the oldest continuously operating radio stations in the Southern Hemisphere."},
{e:"💡",t:"The 1982 Falklands War between Britain and Argentina lasted 74 days and resulted in 907 total deaths before Argentina's surrender on 14 June."},
{e:"🗣️",t:"Residents are called 'Kelpers', a nickname derived from the vast beds of kelp seaweed that surround the islands' coastlines."},
{e:"⚽",t:"The Falkland Islands Football Association runs a local league and the islands field a team in CONIFA, the federation for non-FIFA nations."},
{e:"🍽️",t:"Diddle-dee berry crumble is a beloved local dessert, made from a native shrub berry that grows wild across the islands' windswept peat bogs."}
]},
"French Southern Territories":{flag:"🇹🇫",capital:"Port-aux-Français",continent:"Oceania",population:"140",facts:[
{e:"💡",t:"The French Southern Territories have no permanent civilian population — the only residents are rotating scientists and military personnel at research stations."},
{e:"🎭",t:"France administers the territory primarily to maintain its exclusive economic zone, one of the largest in the world, covering over 2.7 million km² of ocean."},
{e:"🍽️",t:"Researchers stationed at Kerguelen Islands must have all food shipped in from Réunion, with supply vessels arriving only a few times per year."},
{e:"🏛️",t:"The Kerguelen Islands were discovered in 1772 by French explorer Yves-Joseph de Kerguelen-Trémarec, who initially mistook them for a southern continent."},
{e:"🌿",t:"The territories are home to enormous colonies of king penguins, southern elephant seals, and wandering albatrosses with wingspans exceeding 3 metres."},
{e:"🎵",t:"Because of near-constant gale-force winds on Kerguelen, the islands are nicknamed 'les îles de la Désolation' — the Islands of Desolation."},
{e:"💡",t:"The Kerguelen cabbage (Pringlea antiscorbutica) is one of the few native flowering plants, historically eaten by sailors to prevent scurvy."},
{e:"🗣️",t:"French is the only language used in the territory, spoken exclusively by the small rotating teams of scientists and support staff."},
{e:"⚽",t:"With a population rarely exceeding 200, organised sport is limited to informal games among researchers — making it one of the smallest 'sports communities' on Earth."},
{e:"🍽️",t:"Southern bluefin tuna and Patagonian toothfish (marketed as Chilean sea bass) are commercially fished in the territory's waters under strict quotas."}
]},
};

// ISO 3166-1 alpha-2 code mapping
const COUNTRY_ISO = {
"Afghanistan":"AF","Albania":"AL","Algeria":"DZ","Angola":"AO","Argentina":"AR","Armenia":"AM",
"Australia":"AU","Austria":"AT","Azerbaijan":"AZ","Bangladesh":"BD","Belarus":"BY","Belgium":"BE",
"Bhutan":"BT","Bolivia":"BO","Bosnia and Herzegovina":"BA","Botswana":"BW","Brazil":"BR",
"Brunei":"BN","Bulgaria":"BG","Burundi":"BI","Cambodia":"KH","Cameroon":"CM","Canada":"CA",
"Central African Republic":"CF","Chad":"TD","Chile":"CL","China":"CN","Colombia":"CO",
"Congo":"CG","Costa Rica":"CR","Croatia":"HR","Cuba":"CU","Cyprus":"CY","Czechia":"CZ",
"DR Congo":"CD","Denmark":"DK","Djibouti":"DJ","Dominican Republic":"DO","Ecuador":"EC",
"Egypt":"EG","El Salvador":"SV","Equatorial Guinea":"GQ","Eritrea":"ER","Estonia":"EE",
"Eswatini":"SZ","Ethiopia":"ET","Falkland Islands":"FK","Fiji":"FJ","Finland":"FI","France":"FR",
"Gabon":"GA","Gambia":"GM","Georgia":"GE","Germany":"DE","Ghana":"GH","Greece":"GR",
"Guatemala":"GT","Guinea":"GN","Guyana":"GY","Haiti":"HT","Honduras":"HN","Hungary":"HU",
"Iceland":"IS","India":"IN","Indonesia":"ID","Iran":"IR","Iraq":"IQ","Ireland":"IE","Israel":"IL",
"Italy":"IT","Jamaica":"JM","Japan":"JP","Jordan":"JO","Kazakhstan":"KZ","Kenya":"KE",
"Kosovo":"XK","Kuwait":"KW","Kyrgyzstan":"KG","Laos":"LA","Latvia":"LV","Lebanon":"LB",
"Lesotho":"LS","Liberia":"LR","Libya":"LY","Lithuania":"LT","Luxembourg":"LU","Madagascar":"MG",
"Malawi":"MW","Malaysia":"MY","Mali":"ML","Mauritania":"MR","Mexico":"MX","Mongolia":"MN",
"Montenegro":"ME","Morocco":"MA","Mozambique":"MZ","Myanmar":"MM","Namibia":"NA","Nepal":"NP",
"Netherlands":"NL","New Caledonia":"NC","New Zealand":"NZ","Nicaragua":"NI","Niger":"NE",
"Nigeria":"NG","North Korea":"KP","Northern Cyprus":"CY","Norway":"NO","Oman":"OM",
"Pakistan":"PK","Palestine":"PS","Panama":"PA","Papua New Guinea":"PG","Paraguay":"PY",
"Peru":"PE","Philippines":"PH","Poland":"PL","Portugal":"PT","Puerto Rico":"PR","Qatar":"QA",
"Romania":"RO","Russia":"RU","Rwanda":"RW","Saudi Arabia":"SA","Senegal":"SN","Serbia":"RS",
"Sierra Leone":"SL","Singapore":"SG","Slovakia":"SK","Slovenia":"SI","Somalia":"SO",
"Somaliland":"SO","South Africa":"ZA","South Korea":"KR","South Sudan":"SS","Spain":"ES",
"Sri Lanka":"LK","Sudan":"SD","Suriname":"SR","Sweden":"SE","Switzerland":"CH","Syria":"SY",
"Tajikistan":"TJ","Tanzania":"TZ","Thailand":"TH","Timor-Leste":"TL","Togo":"TG",
"Trinidad and Tobago":"TT","Tunisia":"TN","Turkey":"TR","Turkmenistan":"TM","Uganda":"UG",
"Ukraine":"UA","United Arab Emirates":"AE","United Kingdom":"GB","United States":"US",
"Uruguay":"UY","Uzbekistan":"UZ","Venezuela":"VE","Vietnam":"VN","Yemen":"YE","Zambia":"ZM",
"Zimbabwe":"ZW"
};
const ISO_TO_NAME = Object.fromEntries(Object.entries(COUNTRY_ISO).map(([k,v]) => [v,k]));

// Budget data: realistic per-day costs in USD
// backpacker/midrange/luxury = [low, high] per day
// breakdown = % of daily spend by category
// costIndex = relative cost index (100 = world average, NYC ~120)
// bestMonths = cheapest / shoulder-season months
// dualRate = true if unofficial exchange rates exist
const BUDGET_DATA = {
"Japan": {
  backpacker: [35, 55], midrange: [100, 180], luxury: [300, 600],
  breakdown: { accommodation: 35, food: 30, transport: 20, activities: 15 },
  costIndex: 83, bestMonths: "Mar–May, Sep–Nov", dualRate: false
},
"Brazil": {
  backpacker: [20, 35], midrange: [50, 100], luxury: [150, 350],
  breakdown: { accommodation: 30, food: 30, transport: 20, activities: 20 },
  costIndex: 42, bestMonths: "Apr–Jun, Aug–Oct", dualRate: false
},
"Iceland": {
  backpacker: [70, 110], midrange: [180, 280], luxury: [400, 700],
  breakdown: { accommodation: 40, food: 25, transport: 20, activities: 15 },
  costIndex: 130, bestMonths: "Sep–Oct", dualRate: false
},
"Egypt": {
  backpacker: [15, 25], midrange: [40, 80], luxury: [120, 300],
  breakdown: { accommodation: 30, food: 25, transport: 20, activities: 25 },
  costIndex: 28, bestMonths: "Oct–Apr", dualRate: true
},
"India": {
  backpacker: [10, 20], midrange: [30, 60], luxury: [100, 300],
  breakdown: { accommodation: 30, food: 25, transport: 25, activities: 20 },
  costIndex: 24, bestMonths: "Oct–Mar", dualRate: false
},
"Mexico": {
  backpacker: [20, 35], midrange: [50, 100], luxury: [150, 400],
  breakdown: { accommodation: 30, food: 30, transport: 20, activities: 20 },
  costIndex: 40, bestMonths: "Apr–Jun, Sep–Nov", dualRate: false
},
"Australia": {
  backpacker: [50, 80], midrange: [130, 220], luxury: [350, 600],
  breakdown: { accommodation: 35, food: 25, transport: 25, activities: 15 },
  costIndex: 105, bestMonths: "May–Sep", dualRate: false
},
"Morocco": {
  backpacker: [15, 30], midrange: [40, 80], luxury: [120, 300],
  breakdown: { accommodation: 30, food: 30, transport: 20, activities: 20 },
  costIndex: 32, bestMonths: "Mar–May, Sep–Nov", dualRate: false
},
"Italy": {
  backpacker: [40, 65], midrange: [100, 180], luxury: [300, 600],
  breakdown: { accommodation: 35, food: 30, transport: 20, activities: 15 },
  costIndex: 85, bestMonths: "Apr–Jun, Sep–Oct", dualRate: false
},
"South Korea": {
  backpacker: [30, 50], midrange: [80, 150], luxury: [250, 500],
  breakdown: { accommodation: 35, food: 30, transport: 20, activities: 15 },
  costIndex: 78, bestMonths: "Apr–Jun, Sep–Nov", dualRate: false
},
"Peru": {
  backpacker: [15, 30], midrange: [40, 80], luxury: [120, 300],
  breakdown: { accommodation: 30, food: 25, transport: 25, activities: 20 },
  costIndex: 35, bestMonths: "Apr–Oct", dualRate: false
},
"Norway": {
  backpacker: [60, 100], midrange: [160, 260], luxury: [400, 700],
  breakdown: { accommodation: 40, food: 25, transport: 20, activities: 15 },
  costIndex: 125, bestMonths: "Jun–Aug", dualRate: false
},
"Thailand": {
  backpacker: [15, 30], midrange: [40, 80], luxury: [150, 350],
  breakdown: { accommodation: 30, food: 30, transport: 20, activities: 20 },
  costIndex: 38, bestMonths: "Nov–Feb", dualRate: false
},
"Turkey": {
  backpacker: [20, 35], midrange: [50, 100], luxury: [150, 350],
  breakdown: { accommodation: 30, food: 30, transport: 20, activities: 20 },
  costIndex: 35, bestMonths: "Apr–Jun, Sep–Nov", dualRate: false
},
"New Zealand": {
  backpacker: [45, 70], midrange: [120, 200], luxury: [300, 550],
  breakdown: { accommodation: 35, food: 25, transport: 25, activities: 15 },
  costIndex: 98, bestMonths: "May–Sep", dualRate: false
},
"Colombia": {
  backpacker: [15, 30], midrange: [40, 80], luxury: [120, 300],
  breakdown: { accommodation: 30, food: 30, transport: 20, activities: 20 },
  costIndex: 32, bestMonths: "Dec–Mar, Jul–Aug", dualRate: false
},
"Greece": {
  backpacker: [35, 55], midrange: [80, 150], luxury: [250, 500],
  breakdown: { accommodation: 35, food: 30, transport: 15, activities: 20 },
  costIndex: 72, bestMonths: "Apr–Jun, Sep–Oct", dualRate: false
},
"Kenya": {
  backpacker: [20, 35], midrange: [60, 120], luxury: [200, 500],
  breakdown: { accommodation: 30, food: 25, transport: 20, activities: 25 },
  costIndex: 38, bestMonths: "Jan–Mar, Jun–Oct", dualRate: false
},
"Canada": {
  backpacker: [45, 70], midrange: [120, 200], luxury: [300, 600],
  breakdown: { accommodation: 35, food: 25, transport: 25, activities: 15 },
  costIndex: 100, bestMonths: "Sep–Nov, Apr–May", dualRate: false
},
"Vietnam": {
  backpacker: [12, 22], midrange: [35, 65], luxury: [100, 250],
  breakdown: { accommodation: 25, food: 35, transport: 20, activities: 20 },
  costIndex: 28, bestMonths: "Feb–Apr, Sep–Nov", dualRate: false
},
"Argentina": {
  backpacker: [15, 30], midrange: [40, 80], luxury: [120, 300],
  breakdown: { accommodation: 30, food: 30, transport: 20, activities: 20 },
  costIndex: 30, bestMonths: "Mar–May, Sep–Nov", dualRate: true
},
"Germany": {
  backpacker: [40, 65], midrange: [100, 180], luxury: [300, 550],
  breakdown: { accommodation: 35, food: 25, transport: 25, activities: 15 },
  costIndex: 88, bestMonths: "Apr–Jun, Sep–Oct", dualRate: false
},
"South Africa": {
  backpacker: [20, 35], midrange: [50, 100], luxury: [150, 400],
  breakdown: { accommodation: 30, food: 25, transport: 25, activities: 20 },
  costIndex: 38, bestMonths: "May–Sep", dualRate: false
},
"United States": {
  backpacker: [50, 80], midrange: [120, 200], luxury: [350, 700],
  breakdown: { accommodation: 40, food: 25, transport: 20, activities: 15 },
  costIndex: 110, bestMonths: "Sep–Nov, Mar–May", dualRate: false
},
"United Kingdom": {
  backpacker: [50, 80], midrange: [130, 220], luxury: [400, 700],
  breakdown: { accommodation: 40, food: 25, transport: 20, activities: 15 },
  costIndex: 108, bestMonths: "Sep–Nov, Mar–May", dualRate: false
},
"France": {
  backpacker: [40, 65], midrange: [100, 180], luxury: [300, 600],
  breakdown: { accommodation: 35, food: 30, transport: 20, activities: 15 },
  costIndex: 92, bestMonths: "Apr–Jun, Sep–Oct", dualRate: false
},
"Spain": {
  backpacker: [35, 55], midrange: [80, 150], luxury: [250, 500],
  breakdown: { accommodation: 35, food: 30, transport: 20, activities: 15 },
  costIndex: 75, bestMonths: "Mar–May, Sep–Nov", dualRate: false
},
"China": {
  backpacker: [20, 35], midrange: [50, 100], luxury: [150, 400],
  breakdown: { accommodation: 30, food: 30, transport: 25, activities: 15 },
  costIndex: 45, bestMonths: "Mar–May, Sep–Nov", dualRate: false
},
"Russia": {
  backpacker: [25, 40], midrange: [60, 120], luxury: [200, 450],
  breakdown: { accommodation: 35, food: 25, transport: 25, activities: 15 },
  costIndex: 48, bestMonths: "May–Sep", dualRate: false
},
"Indonesia": {
  backpacker: [12, 25], midrange: [35, 70], luxury: [100, 300],
  breakdown: { accommodation: 30, food: 30, transport: 20, activities: 20 },
  costIndex: 30, bestMonths: "Apr–Jun, Sep–Oct", dualRate: false
},
"Nigeria": {
  backpacker: [20, 35], midrange: [50, 100], luxury: [150, 350],
  breakdown: { accommodation: 35, food: 25, transport: 25, activities: 15 },
  costIndex: 38, bestMonths: "Nov–Feb", dualRate: true
},
"Ethiopia": {
  backpacker: [12, 22], midrange: [30, 60], luxury: [80, 200],
  breakdown: { accommodation: 30, food: 30, transport: 25, activities: 15 },
  costIndex: 26, bestMonths: "Oct–Mar", dualRate: true
},
"Cuba": {
  backpacker: [25, 40], midrange: [60, 120], luxury: [150, 350],
  breakdown: { accommodation: 35, food: 25, transport: 20, activities: 20 },
  costIndex: 48, bestMonths: "Nov–Apr", dualRate: true
},
"Jordan": {
  backpacker: [25, 40], midrange: [60, 120], luxury: [180, 400],
  breakdown: { accommodation: 30, food: 25, transport: 20, activities: 25 },
  costIndex: 52, bestMonths: "Mar–May, Sep–Nov", dualRate: false
},
"Chile": {
  backpacker: [25, 40], midrange: [60, 120], luxury: [180, 400],
  breakdown: { accommodation: 30, food: 25, transport: 25, activities: 20 },
  costIndex: 50, bestMonths: "Mar–May, Sep–Nov", dualRate: false
},
"Nepal": {
  backpacker: [10, 20], midrange: [25, 50], luxury: [80, 200],
  breakdown: { accommodation: 25, food: 30, transport: 25, activities: 20 },
  costIndex: 22, bestMonths: "Oct–Nov, Mar–Apr", dualRate: false
},
"Philippines": {
  backpacker: [15, 25], midrange: [35, 70], luxury: [100, 280],
  breakdown: { accommodation: 30, food: 30, transport: 20, activities: 20 },
  costIndex: 32, bestMonths: "Dec–Feb", dualRate: false
},
"Portugal": {
  backpacker: [30, 50], midrange: [70, 140], luxury: [220, 450],
  breakdown: { accommodation: 35, food: 30, transport: 20, activities: 15 },
  costIndex: 68, bestMonths: "Mar–May, Sep–Nov", dualRate: false
},
"Croatia": {
  backpacker: [30, 50], midrange: [70, 140], luxury: [200, 450],
  breakdown: { accommodation: 35, food: 30, transport: 15, activities: 20 },
  costIndex: 62, bestMonths: "May–Jun, Sep–Oct", dualRate: false
},
"Sweden": {
  backpacker: [50, 80], midrange: [130, 220], luxury: [350, 600],
  breakdown: { accommodation: 40, food: 25, transport: 20, activities: 15 },
  costIndex: 110, bestMonths: "May–Jun, Sep", dualRate: false
},
"Poland": {
  backpacker: [20, 35], midrange: [50, 100], luxury: [150, 350],
  breakdown: { accommodation: 30, food: 30, transport: 25, activities: 15 },
  costIndex: 45, bestMonths: "Apr–Jun, Sep–Oct", dualRate: false
},
"Iran": {
  backpacker: [10, 20], midrange: [25, 50], luxury: [80, 200],
  breakdown: { accommodation: 30, food: 30, transport: 25, activities: 15 },
  costIndex: 22, bestMonths: "Mar–May, Sep–Nov", dualRate: true
},
"Lebanon": {
  backpacker: [25, 40], midrange: [60, 120], luxury: [180, 400],
  breakdown: { accommodation: 35, food: 30, transport: 15, activities: 20 },
  costIndex: 45, bestMonths: "Apr–Jun, Sep–Nov", dualRate: true
},
"Madagascar": {
  backpacker: [12, 22], midrange: [30, 60], luxury: [80, 200],
  breakdown: { accommodation: 30, food: 25, transport: 25, activities: 20 },
  costIndex: 25, bestMonths: "Apr–Oct", dualRate: false
},
"Finland": {
  backpacker: [50, 80], midrange: [130, 220], luxury: [350, 600],
  breakdown: { accommodation: 40, food: 25, transport: 20, activities: 15 },
  costIndex: 108, bestMonths: "May–Jun, Sep", dualRate: false
},
"Romania": {
  backpacker: [20, 35], midrange: [45, 90], luxury: [120, 300],
  breakdown: { accommodation: 30, food: 30, transport: 25, activities: 15 },
  costIndex: 40, bestMonths: "May–Jun, Sep–Oct", dualRate: false
},
"Algeria": {
  backpacker: [20, 30], midrange: [45, 80], luxury: [100, 250],
  breakdown: { accommodation: 30, food: 30, transport: 25, activities: 15 },
  costIndex: 35, bestMonths: "Mar–May, Sep–Nov", dualRate: false
},
"Angola": {
  backpacker: [35, 55], midrange: [80, 150], luxury: [200, 450],
  breakdown: { accommodation: 40, food: 25, transport: 20, activities: 15 },
  costIndex: 65, bestMonths: "Jun–Sep", dualRate: false
},
"Botswana": {
  backpacker: [25, 40], midrange: [80, 160], luxury: [300, 700],
  breakdown: { accommodation: 30, food: 20, transport: 20, activities: 30 },
  costIndex: 55, bestMonths: "May–Oct", dualRate: false
},
"Burundi": {
  backpacker: [15, 25], midrange: [35, 60], luxury: [80, 180],
  breakdown: { accommodation: 30, food: 30, transport: 25, activities: 15 },
  costIndex: 28, bestMonths: "Jun–Sep", dualRate: false
},
"Cameroon": {
  backpacker: [15, 25], midrange: [35, 70], luxury: [90, 220],
  breakdown: { accommodation: 30, food: 30, transport: 25, activities: 15 },
  costIndex: 32, bestMonths: "Nov–Feb", dualRate: false
},
"Central African Republic": {
  backpacker: [20, 35], midrange: [45, 80], luxury: [100, 250],
  breakdown: { accommodation: 35, food: 25, transport: 25, activities: 15 },
  costIndex: 38, bestMonths: "Dec–Mar", dualRate: false
},
"Chad": {
  backpacker: [20, 35], midrange: [45, 80], luxury: [100, 250],
  breakdown: { accommodation: 35, food: 25, transport: 25, activities: 15 },
  costIndex: 38, bestMonths: "Nov–Feb", dualRate: false
},
"Congo": {
  backpacker: [20, 35], midrange: [50, 90], luxury: [120, 280],
  breakdown: { accommodation: 35, food: 25, transport: 25, activities: 15 },
  costIndex: 42, bestMonths: "Jun–Sep", dualRate: false
},
"DR Congo": {
  backpacker: [20, 35], midrange: [50, 90], luxury: [120, 300],
  breakdown: { accommodation: 35, food: 25, transport: 25, activities: 15 },
  costIndex: 40, bestMonths: "Jun–Sep", dualRate: false
},
"Djibouti": {
  backpacker: [25, 40], midrange: [60, 110], luxury: [150, 350],
  breakdown: { accommodation: 35, food: 25, transport: 20, activities: 20 },
  costIndex: 50, bestMonths: "Nov–Mar", dualRate: false
},
"Equatorial Guinea": {
  backpacker: [30, 50], midrange: [70, 130], luxury: [180, 400],
  breakdown: { accommodation: 40, food: 25, transport: 20, activities: 15 },
  costIndex: 58, bestMonths: "Jun–Sep", dualRate: false
},
"Eritrea": {
  backpacker: [15, 25], midrange: [35, 60], luxury: [80, 180],
  breakdown: { accommodation: 30, food: 30, transport: 25, activities: 15 },
  costIndex: 28, bestMonths: "Oct–Mar", dualRate: false
},
"Gabon": {
  backpacker: [30, 50], midrange: [70, 130], luxury: [180, 400],
  breakdown: { accommodation: 40, food: 25, transport: 20, activities: 15 },
  costIndex: 58, bestMonths: "Jun–Sep", dualRate: false
},
"Gambia": {
  backpacker: [12, 22], midrange: [30, 55], luxury: [70, 180],
  breakdown: { accommodation: 30, food: 30, transport: 20, activities: 20 },
  costIndex: 25, bestMonths: "Nov–Apr", dualRate: false
},
"Ghana": {
  backpacker: [15, 28], midrange: [40, 75], luxury: [100, 250],
  breakdown: { accommodation: 30, food: 30, transport: 20, activities: 20 },
  costIndex: 35, bestMonths: "Nov–Mar", dualRate: false
},
"Guinea": {
  backpacker: [15, 25], midrange: [35, 65], luxury: [80, 200],
  breakdown: { accommodation: 30, food: 30, transport: 25, activities: 15 },
  costIndex: 30, bestMonths: "Nov–Apr", dualRate: false
},
"Lesotho": {
  backpacker: [15, 25], midrange: [35, 60], luxury: [80, 180],
  breakdown: { accommodation: 30, food: 25, transport: 25, activities: 20 },
  costIndex: 28, bestMonths: "Apr–Sep", dualRate: false
},
"Liberia": {
  backpacker: [20, 30], midrange: [40, 75], luxury: [90, 220],
  breakdown: { accommodation: 35, food: 25, transport: 25, activities: 15 },
  costIndex: 35, bestMonths: "Nov–Apr", dualRate: false
},
"Libya": {
  backpacker: [25, 40], midrange: [55, 100], luxury: [130, 300],
  breakdown: { accommodation: 35, food: 25, transport: 25, activities: 15 },
  costIndex: 42, bestMonths: "Oct–Apr", dualRate: false
},
"Malawi": {
  backpacker: [12, 22], midrange: [30, 55], luxury: [70, 180],
  breakdown: { accommodation: 30, food: 25, transport: 25, activities: 20 },
  costIndex: 25, bestMonths: "May–Oct", dualRate: false
},
"Mali": {
  backpacker: [15, 25], midrange: [35, 65], luxury: [80, 200],
  breakdown: { accommodation: 30, food: 30, transport: 25, activities: 15 },
  costIndex: 30, bestMonths: "Nov–Feb", dualRate: false
},
"Mauritania": {
  backpacker: [20, 30], midrange: [40, 75], luxury: [90, 220],
  breakdown: { accommodation: 35, food: 25, transport: 25, activities: 15 },
  costIndex: 35, bestMonths: "Nov–Mar", dualRate: false
},
"Mozambique": {
  backpacker: [15, 28], midrange: [35, 70], luxury: [90, 250],
  breakdown: { accommodation: 30, food: 25, transport: 25, activities: 20 },
  costIndex: 32, bestMonths: "May–Nov", dualRate: false
},
"Namibia": {
  backpacker: [20, 35], midrange: [60, 120], luxury: [180, 450],
  breakdown: { accommodation: 30, food: 20, transport: 25, activities: 25 },
  costIndex: 45, bestMonths: "May–Oct", dualRate: false
},
"Niger": {
  backpacker: [15, 25], midrange: [35, 60], luxury: [80, 180],
  breakdown: { accommodation: 30, food: 30, transport: 25, activities: 15 },
  costIndex: 28, bestMonths: "Nov–Feb", dualRate: false
},
"Rwanda": {
  backpacker: [18, 30], midrange: [50, 100], luxury: [150, 400],
  breakdown: { accommodation: 30, food: 25, transport: 20, activities: 25 },
  costIndex: 38, bestMonths: "Jun–Sep, Dec–Feb", dualRate: false
},
"Senegal": {
  backpacker: [15, 28], midrange: [40, 75], luxury: [100, 250],
  breakdown: { accommodation: 30, food: 30, transport: 20, activities: 20 },
  costIndex: 35, bestMonths: "Nov–May", dualRate: false
},
"Sierra Leone": {
  backpacker: [18, 30], midrange: [40, 75], luxury: [90, 220],
  breakdown: { accommodation: 35, food: 25, transport: 25, activities: 15 },
  costIndex: 32, bestMonths: "Nov–Apr", dualRate: false
},
"Somalia": {
  backpacker: [20, 35], midrange: [45, 80], luxury: [100, 250],
  breakdown: { accommodation: 35, food: 25, transport: 25, activities: 15 },
  costIndex: 35, bestMonths: "Dec–Mar", dualRate: false
},
"Somaliland": {
  backpacker: [18, 30], midrange: [40, 70], luxury: [90, 200],
  breakdown: { accommodation: 35, food: 25, transport: 25, activities: 15 },
  costIndex: 32, bestMonths: "Oct–Mar", dualRate: false
},
"South Sudan": {
  backpacker: [25, 40], midrange: [55, 100], luxury: [130, 300],
  breakdown: { accommodation: 40, food: 25, transport: 20, activities: 15 },
  costIndex: 45, bestMonths: "Dec–Mar", dualRate: false
},
"Sudan": {
  backpacker: [15, 25], midrange: [35, 65], luxury: [80, 200],
  breakdown: { accommodation: 30, food: 30, transport: 25, activities: 15 },
  costIndex: 28, bestMonths: "Nov–Mar", dualRate: true
},
"Eswatini": {
  backpacker: [15, 25], midrange: [35, 65], luxury: [80, 200],
  breakdown: { accommodation: 30, food: 25, transport: 25, activities: 20 },
  costIndex: 28, bestMonths: "May–Sep", dualRate: false
},
"Tanzania": {
  backpacker: [18, 30], midrange: [60, 120], luxury: [200, 500],
  breakdown: { accommodation: 30, food: 20, transport: 20, activities: 30 },
  costIndex: 40, bestMonths: "Jun–Oct, Jan–Feb", dualRate: false
},
"Togo": {
  backpacker: [12, 22], midrange: [30, 55], luxury: [70, 180],
  breakdown: { accommodation: 30, food: 30, transport: 25, activities: 15 },
  costIndex: 28, bestMonths: "Nov–Mar", dualRate: false
},
"Tunisia": {
  backpacker: [15, 28], midrange: [35, 70], luxury: [90, 220],
  breakdown: { accommodation: 30, food: 30, transport: 20, activities: 20 },
  costIndex: 32, bestMonths: "Apr–Jun, Sep–Nov", dualRate: false
},
"Uganda": {
  backpacker: [15, 28], midrange: [40, 80], luxury: [120, 350],
  breakdown: { accommodation: 30, food: 25, transport: 20, activities: 25 },
  costIndex: 32, bestMonths: "Jun–Sep, Dec–Feb", dualRate: false
},
"Zambia": {
  backpacker: [18, 30], midrange: [50, 100], luxury: [150, 400],
  breakdown: { accommodation: 30, food: 20, transport: 25, activities: 25 },
  costIndex: 38, bestMonths: "May–Oct", dualRate: false
},
"Zimbabwe": {
  backpacker: [20, 35], midrange: [50, 100], luxury: [150, 400],
  breakdown: { accommodation: 30, food: 20, transport: 25, activities: 25 },
  costIndex: 38, bestMonths: "May–Oct", dualRate: false
},
"Afghanistan": {
  backpacker: [10, 18], midrange: [25, 45], luxury: [60, 150],
  breakdown: { accommodation: 30, food: 30, transport: 25, activities: 15 },
  costIndex: 20, bestMonths: "Apr–Jun, Sep–Oct", dualRate: false
},
"Iraq": {
  backpacker: [20, 35], midrange: [50, 90], luxury: [120, 280],
  breakdown: { accommodation: 35, food: 25, transport: 25, activities: 15 },
  costIndex: 38, bestMonths: "Oct–Apr", dualRate: false
},
"Israel": {
  backpacker: [45, 70], midrange: [120, 200], luxury: [300, 600],
  breakdown: { accommodation: 40, food: 25, transport: 20, activities: 15 },
  costIndex: 105, bestMonths: "Mar–May, Sep–Nov", dualRate: false
},
"Kuwait": {
  backpacker: [40, 60], midrange: [100, 170], luxury: [250, 500],
  breakdown: { accommodation: 40, food: 25, transport: 20, activities: 15 },
  costIndex: 80, bestMonths: "Nov–Mar", dualRate: false
},
"Oman": {
  backpacker: [30, 50], midrange: [80, 150], luxury: [200, 450],
  breakdown: { accommodation: 35, food: 25, transport: 25, activities: 15 },
  costIndex: 65, bestMonths: "Oct–Apr", dualRate: false
},
"Pakistan": {
  backpacker: [10, 18], midrange: [25, 50], luxury: [70, 180],
  breakdown: { accommodation: 30, food: 30, transport: 25, activities: 15 },
  costIndex: 22, bestMonths: "Oct–Mar", dualRate: false
},
"Palestine": {
  backpacker: [25, 40], midrange: [55, 100], luxury: [130, 300],
  breakdown: { accommodation: 35, food: 25, transport: 20, activities: 20 },
  costIndex: 50, bestMonths: "Mar–May, Sep–Nov", dualRate: false
},
"Qatar": {
  backpacker: [40, 65], midrange: [120, 200], luxury: [300, 600],
  breakdown: { accommodation: 40, food: 25, transport: 20, activities: 15 },
  costIndex: 95, bestMonths: "Nov–Mar", dualRate: false
},
"Saudi Arabia": {
  backpacker: [35, 55], midrange: [90, 160], luxury: [250, 500],
  breakdown: { accommodation: 35, food: 25, transport: 25, activities: 15 },
  costIndex: 72, bestMonths: "Nov–Mar", dualRate: false
},
"Syria": {
  backpacker: [12, 22], midrange: [30, 55], luxury: [70, 180],
  breakdown: { accommodation: 35, food: 25, transport: 25, activities: 15 },
  costIndex: 25, bestMonths: "Mar–May, Sep–Nov", dualRate: true
},
"United Arab Emirates": {
  backpacker: [40, 65], midrange: [120, 220], luxury: [350, 700],
  breakdown: { accommodation: 40, food: 25, transport: 20, activities: 15 },
  costIndex: 98, bestMonths: "Nov–Mar", dualRate: false
},
"Yemen": {
  backpacker: [12, 20], midrange: [30, 55], luxury: [70, 180],
  breakdown: { accommodation: 30, food: 30, transport: 25, activities: 15 },
  costIndex: 22, bestMonths: "Oct–Mar", dualRate: false
},
"Bangladesh": {
  backpacker: [8, 15], midrange: [20, 40], luxury: [60, 150],
  breakdown: { accommodation: 25, food: 35, transport: 25, activities: 15 },
  costIndex: 20, bestMonths: "Nov–Mar", dualRate: false
},
"Bhutan": {
  backpacker: [50, 50], midrange: [200, 250], luxury: [350, 600],
  breakdown: { accommodation: 30, food: 20, transport: 20, activities: 30 },
  costIndex: 75, bestMonths: "Mar–May, Sep–Nov", dualRate: false
},
"Brunei": {
  backpacker: [25, 40], midrange: [60, 110], luxury: [150, 350],
  breakdown: { accommodation: 35, food: 25, transport: 25, activities: 15 },
  costIndex: 55, bestMonths: "Feb–Apr", dualRate: false
},
"Cambodia": {
  backpacker: [10, 20], midrange: [30, 60], luxury: [80, 220],
  breakdown: { accommodation: 25, food: 35, transport: 20, activities: 20 },
  costIndex: 26, bestMonths: "Nov–Mar", dualRate: false
},
"Kazakhstan": {
  backpacker: [18, 30], midrange: [45, 85], luxury: [120, 280],
  breakdown: { accommodation: 30, food: 25, transport: 30, activities: 15 },
  costIndex: 35, bestMonths: "May–Jun, Sep–Oct", dualRate: false
},
"Kyrgyzstan": {
  backpacker: [10, 20], midrange: [25, 50], luxury: [70, 180],
  breakdown: { accommodation: 25, food: 30, transport: 25, activities: 20 },
  costIndex: 22, bestMonths: "Jun–Sep", dualRate: false
},
"Laos": {
  backpacker: [10, 20], midrange: [30, 55], luxury: [80, 200],
  breakdown: { accommodation: 25, food: 35, transport: 20, activities: 20 },
  costIndex: 25, bestMonths: "Nov–Feb", dualRate: true
},
"Malaysia": {
  backpacker: [15, 28], midrange: [40, 80], luxury: [120, 300],
  breakdown: { accommodation: 30, food: 30, transport: 20, activities: 20 },
  costIndex: 38, bestMonths: "Mar–May, Sep–Nov", dualRate: false
},
"Mongolia": {
  backpacker: [15, 28], midrange: [40, 75], luxury: [100, 250],
  breakdown: { accommodation: 30, food: 25, transport: 30, activities: 15 },
  costIndex: 32, bestMonths: "Jun–Sep", dualRate: false
},
"Myanmar": {
  backpacker: [15, 25], midrange: [35, 70], luxury: [90, 250],
  breakdown: { accommodation: 30, food: 30, transport: 20, activities: 20 },
  costIndex: 28, bestMonths: "Nov–Feb", dualRate: true
},
"North Korea": {
  backpacker: [50, 50], midrange: [100, 150], luxury: [200, 350],
  breakdown: { accommodation: 30, food: 25, transport: 20, activities: 25 },
  costIndex: 60, bestMonths: "Apr–Jun, Sep–Oct", dualRate: false
},
"Singapore": {
  backpacker: [35, 55], midrange: [100, 180], luxury: [300, 600],
  breakdown: { accommodation: 40, food: 25, transport: 20, activities: 15 },
  costIndex: 95, bestMonths: "Feb–Apr", dualRate: false
},
"Sri Lanka": {
  backpacker: [12, 22], midrange: [35, 65], luxury: [90, 250],
  breakdown: { accommodation: 30, food: 30, transport: 20, activities: 20 },
  costIndex: 28, bestMonths: "Dec–Mar", dualRate: false
},
"Tajikistan": {
  backpacker: [10, 18], midrange: [25, 45], luxury: [60, 150],
  breakdown: { accommodation: 25, food: 30, transport: 30, activities: 15 },
  costIndex: 22, bestMonths: "Jun–Sep", dualRate: false
},
"Timor-Leste": {
  backpacker: [18, 30], midrange: [40, 75], luxury: [90, 220],
  breakdown: { accommodation: 35, food: 25, transport: 25, activities: 15 },
  costIndex: 35, bestMonths: "May–Nov", dualRate: false
},
"Turkmenistan": {
  backpacker: [25, 40], midrange: [55, 100], luxury: [130, 300],
  breakdown: { accommodation: 35, food: 25, transport: 25, activities: 15 },
  costIndex: 40, bestMonths: "Apr–Jun, Sep–Oct", dualRate: false
},
"Uzbekistan": {
  backpacker: [12, 22], midrange: [30, 55], luxury: [70, 200],
  breakdown: { accommodation: 25, food: 30, transport: 25, activities: 20 },
  costIndex: 25, bestMonths: "Apr–Jun, Sep–Oct", dualRate: false
},
"Albania": {
  backpacker: [18, 30], midrange: [40, 80], luxury: [100, 250],
  breakdown: { accommodation: 30, food: 30, transport: 20, activities: 20 },
  costIndex: 35, bestMonths: "May–Jun, Sep–Oct", dualRate: false
},
"Belarus": {
  backpacker: [18, 30], midrange: [40, 80], luxury: [100, 250],
  breakdown: { accommodation: 35, food: 25, transport: 25, activities: 15 },
  costIndex: 35, bestMonths: "May–Sep", dualRate: false
},
"Bosnia and Herzegovina": {
  backpacker: [18, 30], midrange: [40, 80], luxury: [100, 250],
  breakdown: { accommodation: 30, food: 30, transport: 20, activities: 20 },
  costIndex: 35, bestMonths: "May–Jun, Sep–Oct", dualRate: false
},
"Bulgaria": {
  backpacker: [18, 30], midrange: [40, 80], luxury: [100, 250],
  breakdown: { accommodation: 30, food: 30, transport: 25, activities: 15 },
  costIndex: 38, bestMonths: "May–Jun, Sep–Oct", dualRate: false
},
"Cyprus": {
  backpacker: [30, 50], midrange: [70, 130], luxury: [180, 400],
  breakdown: { accommodation: 35, food: 25, transport: 20, activities: 20 },
  costIndex: 62, bestMonths: "Apr–Jun, Sep–Nov", dualRate: false
},
"Northern Cyprus": {
  backpacker: [20, 35], midrange: [45, 85], luxury: [120, 280],
  breakdown: { accommodation: 35, food: 25, transport: 20, activities: 20 },
  costIndex: 42, bestMonths: "Apr–Jun, Sep–Nov", dualRate: false
},
"Czechia": {
  backpacker: [25, 40], midrange: [60, 120], luxury: [180, 400],
  breakdown: { accommodation: 35, food: 25, transport: 25, activities: 15 },
  costIndex: 55, bestMonths: "Apr–Jun, Sep–Oct", dualRate: false
},
"Estonia": {
  backpacker: [25, 40], midrange: [55, 100], luxury: [150, 350],
  breakdown: { accommodation: 35, food: 25, transport: 25, activities: 15 },
  costIndex: 55, bestMonths: "May–Jun, Sep", dualRate: false
},
"Georgia": {
  backpacker: [15, 25], midrange: [35, 65], luxury: [80, 200],
  breakdown: { accommodation: 25, food: 35, transport: 20, activities: 20 },
  costIndex: 30, bestMonths: "May–Jun, Sep–Oct", dualRate: false
},
"Hungary": {
  backpacker: [22, 38], midrange: [55, 110], luxury: [150, 350],
  breakdown: { accommodation: 30, food: 30, transport: 25, activities: 15 },
  costIndex: 48, bestMonths: "Apr–Jun, Sep–Oct", dualRate: false
},
"Kosovo": {
  backpacker: [15, 25], midrange: [30, 55], luxury: [70, 180],
  breakdown: { accommodation: 30, food: 30, transport: 25, activities: 15 },
  costIndex: 28, bestMonths: "May–Jun, Sep–Oct", dualRate: false
},
"Latvia": {
  backpacker: [22, 35], midrange: [50, 95], luxury: [140, 320],
  breakdown: { accommodation: 35, food: 25, transport: 25, activities: 15 },
  costIndex: 50, bestMonths: "May–Jun, Sep", dualRate: false
},
"Lithuania": {
  backpacker: [22, 35], midrange: [50, 95], luxury: [140, 320],
  breakdown: { accommodation: 35, food: 25, transport: 25, activities: 15 },
  costIndex: 48, bestMonths: "May–Jun, Sep", dualRate: false
},
"Montenegro": {
  backpacker: [22, 38], midrange: [50, 100], luxury: [140, 320],
  breakdown: { accommodation: 35, food: 25, transport: 20, activities: 20 },
  costIndex: 45, bestMonths: "May–Jun, Sep–Oct", dualRate: false
},
"Serbia": {
  backpacker: [18, 30], midrange: [40, 75], luxury: [100, 250],
  breakdown: { accommodation: 30, food: 30, transport: 25, activities: 15 },
  costIndex: 38, bestMonths: "May–Jun, Sep–Oct", dualRate: false
},
"Slovakia": {
  backpacker: [22, 38], midrange: [55, 100], luxury: [150, 350],
  breakdown: { accommodation: 30, food: 30, transport: 25, activities: 15 },
  costIndex: 50, bestMonths: "May–Jun, Sep–Oct", dualRate: false
},
"Slovenia": {
  backpacker: [28, 45], midrange: [65, 120], luxury: [180, 400],
  breakdown: { accommodation: 35, food: 25, transport: 20, activities: 20 },
  costIndex: 60, bestMonths: "May–Jun, Sep–Oct", dualRate: false
},
"Ukraine": {
  backpacker: [15, 25], midrange: [30, 60], luxury: [80, 200],
  breakdown: { accommodation: 30, food: 30, transport: 25, activities: 15 },
  costIndex: 28, bestMonths: "May–Jun, Sep–Oct", dualRate: false
},
"Austria": {
  backpacker: [45, 70], midrange: [110, 190], luxury: [300, 550],
  breakdown: { accommodation: 35, food: 25, transport: 25, activities: 15 },
  costIndex: 95, bestMonths: "Apr–Jun, Sep–Oct", dualRate: false
},
"Belgium": {
  backpacker: [40, 65], midrange: [100, 170], luxury: [280, 500],
  breakdown: { accommodation: 35, food: 25, transport: 25, activities: 15 },
  costIndex: 88, bestMonths: "Apr–Jun, Sep–Oct", dualRate: false
},
"Denmark": {
  backpacker: [55, 85], midrange: [140, 230], luxury: [350, 600],
  breakdown: { accommodation: 40, food: 25, transport: 20, activities: 15 },
  costIndex: 118, bestMonths: "May–Jun, Sep", dualRate: false
},
"Ireland": {
  backpacker: [40, 65], midrange: [100, 180], luxury: [300, 550],
  breakdown: { accommodation: 40, food: 25, transport: 20, activities: 15 },
  costIndex: 95, bestMonths: "Apr–Jun, Sep–Oct", dualRate: false
},
"Luxembourg": {
  backpacker: [45, 70], midrange: [110, 190], luxury: [300, 550],
  breakdown: { accommodation: 40, food: 25, transport: 20, activities: 15 },
  costIndex: 100, bestMonths: "May–Jun, Sep", dualRate: false
},
"Netherlands": {
  backpacker: [40, 65], midrange: [100, 180], luxury: [300, 550],
  breakdown: { accommodation: 40, food: 25, transport: 20, activities: 15 },
  costIndex: 95, bestMonths: "Apr–Jun, Sep–Oct", dualRate: false
},
"Switzerland": {
  backpacker: [80, 120], midrange: [200, 300], luxury: [500, 900],
  breakdown: { accommodation: 40, food: 25, transport: 20, activities: 15 },
  costIndex: 140, bestMonths: "Apr–Jun, Sep–Oct", dualRate: false
},
"Bolivia": {
  backpacker: [12, 22], midrange: [30, 55], luxury: [70, 180],
  breakdown: { accommodation: 25, food: 30, transport: 25, activities: 20 },
  costIndex: 25, bestMonths: "May–Oct", dualRate: false
},
"Costa Rica": {
  backpacker: [25, 40], midrange: [60, 120], luxury: [180, 400],
  breakdown: { accommodation: 30, food: 25, transport: 25, activities: 20 },
  costIndex: 55, bestMonths: "Dec–Apr", dualRate: false
},
"Dominican Republic": {
  backpacker: [20, 35], midrange: [50, 100], luxury: [150, 350],
  breakdown: { accommodation: 35, food: 25, transport: 20, activities: 20 },
  costIndex: 42, bestMonths: "Dec–Apr", dualRate: false
},
"Ecuador": {
  backpacker: [15, 28], midrange: [35, 70], luxury: [100, 280],
  breakdown: { accommodation: 30, food: 25, transport: 25, activities: 20 },
  costIndex: 35, bestMonths: "Jun–Sep", dualRate: false
},
"El Salvador": {
  backpacker: [18, 30], midrange: [40, 75], luxury: [100, 250],
  breakdown: { accommodation: 30, food: 30, transport: 20, activities: 20 },
  costIndex: 35, bestMonths: "Nov–Apr", dualRate: false
},
"Guatemala": {
  backpacker: [15, 28], midrange: [35, 70], luxury: [90, 250],
  breakdown: { accommodation: 30, food: 30, transport: 20, activities: 20 },
  costIndex: 32, bestMonths: "Nov–Apr", dualRate: false
},
"Guyana": {
  backpacker: [25, 40], midrange: [55, 100], luxury: [130, 300],
  breakdown: { accommodation: 35, food: 25, transport: 25, activities: 15 },
  costIndex: 45, bestMonths: "Sep–Dec", dualRate: false
},
"Haiti": {
  backpacker: [20, 35], midrange: [45, 85], luxury: [100, 250],
  breakdown: { accommodation: 35, food: 25, transport: 25, activities: 15 },
  costIndex: 38, bestMonths: "Nov–Mar", dualRate: false
},
"Honduras": {
  backpacker: [15, 28], midrange: [35, 70], luxury: [90, 250],
  breakdown: { accommodation: 30, food: 30, transport: 20, activities: 20 },
  costIndex: 32, bestMonths: "Dec–Apr", dualRate: false
},
"Jamaica": {
  backpacker: [25, 40], midrange: [60, 120], luxury: [180, 400],
  breakdown: { accommodation: 35, food: 25, transport: 20, activities: 20 },
  costIndex: 52, bestMonths: "Nov–Dec, Apr–May", dualRate: false
},
"Nicaragua": {
  backpacker: [15, 25], midrange: [35, 65], luxury: [80, 200],
  breakdown: { accommodation: 30, food: 30, transport: 20, activities: 20 },
  costIndex: 28, bestMonths: "Nov–Apr", dualRate: false
},
"Panama": {
  backpacker: [22, 38], midrange: [55, 110], luxury: [150, 350],
  breakdown: { accommodation: 35, food: 25, transport: 20, activities: 20 },
  costIndex: 50, bestMonths: "Dec–Apr", dualRate: false
},
"Paraguay": {
  backpacker: [12, 22], midrange: [30, 55], luxury: [70, 180],
  breakdown: { accommodation: 30, food: 30, transport: 25, activities: 15 },
  costIndex: 28, bestMonths: "Apr–Sep", dualRate: false
},
"Puerto Rico": {
  backpacker: [35, 55], midrange: [80, 150], luxury: [250, 500],
  breakdown: { accommodation: 40, food: 25, transport: 20, activities: 15 },
  costIndex: 80, bestMonths: "Apr–Jun, Nov–Dec", dualRate: false
},
"Suriname": {
  backpacker: [22, 38], midrange: [50, 95], luxury: [120, 280],
  breakdown: { accommodation: 35, food: 25, transport: 25, activities: 15 },
  costIndex: 45, bestMonths: "Aug–Nov", dualRate: false
},
"Trinidad and Tobago": {
  backpacker: [25, 40], midrange: [60, 120], luxury: [170, 380],
  breakdown: { accommodation: 35, food: 25, transport: 20, activities: 20 },
  costIndex: 52, bestMonths: "Jan–May", dualRate: false
},
"Uruguay": {
  backpacker: [22, 38], midrange: [55, 110], luxury: [150, 380],
  breakdown: { accommodation: 35, food: 25, transport: 20, activities: 20 },
  costIndex: 55, bestMonths: "Mar–May, Sep–Nov", dualRate: false
},
"Venezuela": {
  backpacker: [15, 25], midrange: [30, 60], luxury: [80, 200],
  breakdown: { accommodation: 30, food: 30, transport: 25, activities: 15 },
  costIndex: 22, bestMonths: "Dec–Apr", dualRate: true
},
"Fiji": {
  backpacker: [25, 40], midrange: [60, 120], luxury: [180, 450],
  breakdown: { accommodation: 35, food: 25, transport: 20, activities: 20 },
  costIndex: 55, bestMonths: "May–Oct", dualRate: false
},
"New Caledonia": {
  backpacker: [45, 70], midrange: [110, 190], luxury: [300, 550],
  breakdown: { accommodation: 40, food: 25, transport: 20, activities: 15 },
  costIndex: 100, bestMonths: "May–Nov", dualRate: false
},
"Papua New Guinea": {
  backpacker: [25, 40], midrange: [60, 110], luxury: [150, 350],
  breakdown: { accommodation: 35, food: 25, transport: 25, activities: 15 },
  costIndex: 50, bestMonths: "May–Oct", dualRate: false
},
"Falkland Islands": {
  backpacker: [50, 75], midrange: [120, 200], luxury: [250, 450],
  breakdown: { accommodation: 40, food: 25, transport: 20, activities: 15 },
  costIndex: 90, bestMonths: "Oct–Mar", dualRate: false
},
"French Southern Territories": {
  backpacker: [0, 0], midrange: [0, 0], luxury: [0, 0],
  breakdown: { accommodation: 25, food: 25, transport: 25, activities: 25 },
  costIndex: 0, bestMonths: "N/A", dualRate: false
}
};

const SOUNDTRACK_DATA = {
  "Japan": { trackId: "3n3Ppam7vgaVa1iaRUc9Lp", artist: "Joe Hisaishi", title: "One Summer's Day" },
  "Brazil": { trackId: "4gNMEWk5CEJMkJnMfikhpD", artist: "Jo\u00e3o Gilberto", title: "The Girl from Ipanema" },
  "Iceland": { trackId: "2cGxRwrMyEAp8dEbuZaVv6", artist: "Sigur R\u00f3s", title: "Hopp\u00edp\u00f3lla" },
  "Egypt": { trackId: "1dNIEtp7AY3oDAKCGg2XkN", artist: "Umm Kulthum", title: "Enta Omri" },
  "India": { trackId: "1mCsF9Tw4AkIZOjvZbZZdT", artist: "A.R. Rahman", title: "Jai Ho" },
  "France": { trackId: "3bi7MRg5wMmMWsmhBiigs7", artist: "Edith Piaf", title: "La Vie en Rose" },
  "Mexico": { trackId: "4UaBSrp1GR0BPHKZ19RthW", artist: "Luis Miguel", title: "La Bikina" },
  "Turkey": { trackId: "3T4tUhGYeRNVUGevb0wThu", artist: "Bar\u0131\u015f Man\u00e7o", title: "Da\u011flar Da\u011flar" },
  "Australia": { trackId: "2grjqo0Frpf2okIBiifQKs", artist: "Men at Work", title: "Down Under" },
  "Morocco": { trackId: "5GsI5jFCWjnGlSNv7SNXIJ", artist: "Nass El Ghiwane", title: "Ghir Khoudouni" },
  "Italy": { trackId: "3uPuGGMYSuvMPgS0gIyLlB", artist: "Luciano Pavarotti", title: "Nessun Dorma" },
  "South Korea": { trackId: "5HCyWlXZPP0y6Gqq8TgA20", artist: "BTS", title: "Dynamite" },
  "Norway": { trackId: "0Fy23NKWtwlXA0zlprPVCQ", artist: "a-ha", title: "Take On Me" },
  "Colombia": { trackId: "6tBjhFAqpJ0sGnePsBnvLv", artist: "Carlos Vives", title: "La Bicicleta" },
  "Greece": { trackId: "4f6Lg2OZ5ywfhNMfWx3xaF", artist: "Mikis Theodorakis", title: "Zorba the Greek" },
  "Kenya": { trackId: "2KH16WveTQWT6KOG9Rg6e2", artist: "Sauti Sol", title: "Sura Yako" },
  "Canada": { trackId: "32OlwWuMpZ6b0aN2RZOeMS", artist: "Leonard Cohen", title: "Hallelujah" },
  "Vietnam": { trackId: "3K4HG9evC7dg3N0R9cYArm", artist: "Kh\u00e1nh Ly", title: "Di\u1ec5m X\u01b0a" },
  "Argentina": { trackId: "67IwHUbmmJI1HXdFRscFa3", artist: "Carlos Gardel", title: "Por Una Cabeza" },
  "Germany": { trackId: "6L9rE9sSNV2CgFgBfJ8GhD", artist: "Nena", title: "99 Luftballons" },
  "South Africa": { trackId: "3a4yGBPH2n3CDCfUfFE3sL", artist: "Miriam Makeba", title: "Pata Pata" },
  "United States": { trackId: "3MODES4TNtygekLl146Dxd", artist: "Louis Armstrong", title: "What a Wonderful World" },
  "United Kingdom": { trackId: "3Am0IbOxmvlz1gi1EQ3D4l", artist: "The Beatles", title: "Here Comes the Sun" },
  "Spain": { trackId: "4BCEtq1LjPLa4svX1J20LF", artist: "Paco de Luc\u00eda", title: "Entre Dos Aguas" },
  "China": { trackId: "5F9ECiGo9bW0nz7BM9E5NN", artist: "Teresa Teng", title: "The Moon Represents My Heart" },
  "Russia": { trackId: "3bQbfYp2dTcCwUWiRflKFE", artist: "Tchaikovsky", title: "Swan Lake" },
  "Indonesia": { trackId: "2RttW7RAu5nOAfq6YFvApB", artist: "Koes Plus", title: "Kolam Susu" },
  "Nigeria": { trackId: "6mFkJmJqdDVQ1REhVfGgd1", artist: "Fela Kuti", title: "Zombie" },
  "Thailand": { trackId: "2BHnFzNgmSaYBfGqpiGmRA", artist: "Bird Thongchai", title: "Sabai Sabai" },
  "Peru": { trackId: "1a2GTWGtFfWpfn50Brxv36", artist: "Simon & Garfunkel", title: "El C\u00f3ndor Pasa" },
  "New Zealand": { trackId: "7t0FiB5S52nnjhmVlDMNcU", artist: "Crowded House", title: "Weather with You" },
  "Cuba": { trackId: "3RXqCNEqV2zyxdnpCiaN1J", artist: "Buena Vista Social Club", title: "Chan Chan" },
  "Jamaica": { trackId: "6tDpiEkKBEEasBGlpHfNLP", artist: "Bob Marley", title: "Three Little Birds" },
  "Ireland": { trackId: "0cRSrzBrGORTia4GF4RHCr", artist: "The Cranberries", title: "Dreams" },
  "Portugal": { trackId: "3vkQ5DAB1qQMYO4Mr9zJN6", artist: "Am\u00e1lia Rodrigues", title: "Uma Casa Portuguesa" },
  "Sweden": { trackId: "4uLU6hMCjMI75M1A2tKUQC", artist: "ABBA", title: "Dancing Queen" },
  "Switzerland": { trackId: "5K4W6rqBFWDnAN6FQUkS6x", artist: "DJ BoBo", title: "Chihuahua" },
  "Poland": { trackId: "4AKp1gBiSFRnUbKQD3cnDE", artist: "Chopin", title: "Nocturne Op.9 No.2" },
  "Austria": { trackId: "55nDFzHmgjRBuIwClFZU3H", artist: "Johann Strauss II", title: "The Blue Danube" },
  "Netherlands": { trackId: "1rIKgCH4H52lrvDcQMBOwr", artist: "Tiësto", title: "Adagio for Strings" },
  "Belgium": { trackId: "3nAq2hCr1oWsIU4EW8DPEw", artist: "Stromae", title: "Alors on Danse" },
  "Denmark": { trackId: "2kB5JDJy4LMpeIXamqPCCH", artist: "Lukas Graham", title: "7 Years" },
  "Finland": { trackId: "3Fcfwhm8oRrBvBZ8KOL6Hp", artist: "Nightwish", title: "Nemo" },
  "Hungary": { trackId: "5lWMnmMRHTJHbNEGOLJUKb", artist: "Franz Liszt", title: "Hungarian Rhapsody No. 2" },
  "Czechia": { trackId: "7dS5EaCoMnN7DzlpT6KRF3", artist: "Dvo\u0159\u00e1k", title: "New World Symphony" },
  "Romania": { trackId: "3y1sBB9DSYEhvmBm0bToCm", artist: "O-Zone", title: "Dragostea Din Tei" },
  "Croatia": { trackId: "7nFnMBRJHm8gGMkESpyx3a", artist: "Oliver Dragojevi\u0107", title: "Cesarica" },
  "Serbia": { trackId: "5uMDSTaH9Gj7pCbWA8FNfp", artist: "Zdravko \u010coli\u0107", title: "Ti Me Nisi Volela" },
  "Bulgaria": { trackId: "7MjlVL0XaT7GShDPH7JMa0", artist: "Le Myst\u00e8re des Voix Bulgares", title: "Ergen Deda" },
  "Ukraine": { trackId: "0DNGaSqBjMfEg0y4OGFnSW", artist: "Okean Elzy", title: "Obijmy" },
  "Georgia": { trackId: "0MHydHFg5gVMiA03RTcLID", artist: "Georgian Polyphony", title: "Chakrulo" },
  "Israel": { trackId: "5HNCy40Ni5BZJFw1TKzRsC", artist: "Ofra Haza", title: "Im Nin'Alu" },
  "Lebanon": { trackId: "3qiyyBlpkUIOoJzWfCmeeW", artist: "Fairuz", title: "Li Beirut" },
  "Jordan": { trackId: "0l2gYthSjJGJCnQBCnWDvo", artist: "Omar Al Abdallat", title: "Hashimi Hashimi" },
  "Iran": { trackId: "7xoUFyptz5MJjb6ksoT1S3", artist: "Googoosh", title: "Man Amadeam" },
  "Saudi Arabia": { trackId: "42gBv12lb9DVzBFBNJXFyN", artist: "Mohammed Abdu", title: "Abadi" },
  "United Arab Emirates": { trackId: "1lCRw5FEZ1gISKkqiJPhgL", artist: "Hussain Al Jassmi", title: "Boshret Kheir" },
  "Pakistan": { trackId: "6jmmjuLWaHKfHD5TZ5p4PB", artist: "Nusrat Fateh Ali Khan", title: "Mustt Mustt" },
  "Bangladesh": { trackId: "3iKO3e8rJqDCR4nJfBPkCN", artist: "Rabindranath Tagore", title: "Amar Shonar Bangla" },
  "Nepal": { trackId: "37Bn0pNIsYdmFQh0FflMch", artist: "Narayan Gopal", title: "Euta Sathi" },
  "Sri Lanka": { trackId: "4DsxUJVEFhLbMkvjyN3sMX", artist: "Clarence Wijewardena", title: "Mal Pokunen" },
  "Philippines": { trackId: "7tFiyTwD0nx5a1eklYtX2J", artist: "Freddie Aguilar", title: "Anak" },
  "Malaysia": { trackId: "4kPcP0X8rTBgRn8b0hDYrn", artist: "P. Ramlee", title: "Getaran Jiwa" },
  "Singapore": { trackId: "2LYU3E5DpHajJPPfTzKray", artist: "Dick Lee", title: "Home" },
  "Cambodia": { trackId: "5nTQxEv8vJT5R6S5THaQ3c", artist: "Sinn Sisamouth", title: "Champa Battambang" },
  "Mongolia": { trackId: "5YU5067QHcN4cDBGIBXMiR", artist: "The HU", title: "Wolf Totem" },
  "Kazakhstan": { trackId: "7EWbCpMvxkXZLMpBCulp8G", artist: "Dimash Kudaibergen", title: "SOS d'un Terrien" },
  "Uzbekistan": { trackId: "0BRDkifPxBIWP6kvWn5Ude", artist: "Yulduz Usmanova", title: "Birinchi Muhabbat" },
  "Ethiopia": { trackId: "5HVwR2lSMBtp4ANQxEkfGK", artist: "Mulatu Astatke", title: "Yekermo Sew" },
  "Tanzania": { trackId: "4XsYEcjQ4bD7BFOE1hm2tM", artist: "Diamond Platnumz", title: "Yope Remix" },
  "Ghana": { trackId: "3MnQRSbCt8rWCaEk1SqhIJ", artist: "Sarkodie", title: "Adonai" },
  "Senegal": { trackId: "7nJW7yPBpqJ6RVz3ZS7JvP", artist: "Youssou N'Dour", title: "7 Seconds" },
  "Mali": { trackId: "4u7EnebtmKWzUH433cf5Qv", artist: "Salif Keita", title: "Tomorrow" },
  "Madagascar": { trackId: "3lEm2zNXmeQmQdDG6EsrZS", artist: "Mahaleo", title: "Ry Tanindrazanay Malala" },
  "Rwanda": { trackId: "72BrDELM06z0JVnNlyh6K3", artist: "Meddy", title: "Adi" },
  "Uganda": { trackId: "0xNySQVKQ6JJY41IH6mVPx", artist: "Eddy Kenzo", title: "Sitya Loss" },
  "Mozambique": { trackId: "0GCgXIHnhbbBJjuhvCzSn7", artist: "Marrabenta Star", title: "Yelele" },
  "Zimbabwe": { trackId: "0OlNrF2z9L6vNJPJ4x2s7K", artist: "Oliver Mtukudzi", title: "Neria" },
  "Namibia": { trackId: "3GX8CPE2p5b3fBVVHknCNE", artist: "Elemotho", title: "Namibia" },
  "Botswana": { trackId: "0JVPQaH2gEiHhHuS7bZLPm", artist: "Vee Mampeezy", title: "I Do" },
  "Zambia": { trackId: "2hMnTCPK8Pb6T3DwVxcP6K", artist: "Macky 2", title: "Olijaba" },
  "Costa Rica": { trackId: "1bDbXMyjaUIooNwFE9wn0N", artist: "Debi Nova", title: "Un D\u00eda de Sol" },
  "Panama": { trackId: "7y97mc3bZRFXzT2szjeSga", artist: "Rub\u00e9n Blades", title: "Pedro Navaja" },
  "Dominican Republic": { trackId: "3G28immFJVKHgWWkhPNqab", artist: "Juan Luis Guerra", title: "La Bilirrubina" },
  "Ecuador": { trackId: "2D3E41fTMg60WLJPMBrGCL", artist: "Julio Jaramillo", title: "Nuestro Juramento" },
  "Chile": { trackId: "0LKFT6pl8rAOj8UgVS4Op0", artist: "V\u00edctor Jara", title: "Te Recuerdo Amanda" },
  "Venezuela": { trackId: "2TpxZ7JUBn3uw46aR7qd6V", artist: "Sim\u00f3n D\u00edaz", title: "Caballo Viejo" },
  "Bolivia": { trackId: "6FBx7JNMidKTRCBpzCEcxS", artist: "Los Kjarkas", title: "Llorando Se Fue" },
  "Uruguay": { trackId: "6rPO02ozF3bM7NnOV4h6s2", artist: "Jorge Drexler", title: "Al Otro Lado del R\u00edo" },
  "Paraguay": { trackId: "6WHLYvmXIG8sGcrwkMy1GD", artist: "Luis Alberto del Paran\u00e1", title: "Recuerdos de Ypacarai" },
  "Trinidad and Tobago": { trackId: "4Tfe8Uu9Falj3rCFEHAGce", artist: "Mighty Sparrow", title: "Jean and Dinah" },
  "Honduras": { trackId: "50N46EC84LFJfRqIAF7c0d", artist: "Guillermo Anderson", title: "En Mi Pa\u00eds" },
  "Guatemala": { trackId: "1WdgN7yHClqMnRnpPefYXi", artist: "Ricardo Arjona", title: "Jes\u00fas es Verbo" },
  "El Salvador": { trackId: "1dSIRNm4JWRCiY07EXgjBP", artist: "\u00c1lvaro Torres", title: "Nada Se Compara Contigo" },
  "Nicaragua": { trackId: "0oVyh3a4Cj4m7cflRNpCXG", artist: "Carlos Mej\u00eda Godoy", title: "Nicaragua Nicarag\u00fcita" },
  "Tunisia": { trackId: "79SHMWpAc9cXHJJGyEBrPP", artist: "Emel Mathlouthi", title: "Kelmti Horra" },
  "Qatar": { trackId: "4vP77yN1WMKmHiYblQNqEY", artist: "Fahad Al Kubaisi", title: "Tsaddig" },
  "Kuwait": { trackId: "5TnQLm8cC3P9yCTNZPVHzT", artist: "Abdallah Al Rowaished", title: "Yal Ghali" },
  "Oman": { trackId: "5w5B9Vr5OjDO0JFkgtWbM7", artist: "Majid Al Muhandis", title: "Ahebak" },
  "Laos": { trackId: "2XPe9XjnDfMVGqgMKRKhBF", artist: "Alexandra Bounxouei", title: "Champa Muang Lao" },
  "Myanmar": { trackId: "7XxMhbK7bDCHV5PnVAYpfF", artist: "Htoo Eain Thin", title: "Myanmar Love Song" },
  "Luxembourg": { trackId: "0WqIKmW4BTrj3eJFmnCKMv", artist: "Serge Tonnar", title: "L\u00ebtzebuerger" }
};
