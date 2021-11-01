from app.models import db, Martial_Art
from datetime import datetime


def seed_martial_arts():
    ma1 = Martial_Art(
        name="Soo Bahk Doo",
        creation_date=datetime.now(),
        art_type="Self Defense",
        bio='''Soo Bahk Do (수박도) is a martial art founded and taught by Kwan Jang Nim Hwang Kee, his successor Hwang Hyun Chul, known as H.C. Hwang, and instructors who are certified by member organizations of the World Moo Duk Kwan, Inc. This martial art was originally the ancient martial art of Korea. Hwang Kee created Moo Duk Kwan with influence from "Soo Bahk Do."[1]''',
        difficulty_level=4, 
        region="Southern Korea"
    )
    ma2 = Martial_Art(
        name="Tae Kwan Doo",
        creation_date=datetime.now(),
        art_type="Self Defense",
        bio='Taekwondo, Tae Kwon Do or Taekwon-Do (/ˌtaɪkwɒnˈdoʊ, ˌtaɪˈkwɒndoʊ/;[3][4][5] Korean: 태권도/跆拳道 [tʰɛ.k͈wʌn.do] (About this soundlisten)) is a Korean martial art, characterized by punching and kicking techniques, with emphasis on head-height kicks, jumping spinning kicks, and fast kicking techniques. The literal translation for tae kwon do is "kicking," "punching," and "the art or way of."[6] It is a martial art in which one attacks or defends with hands and feet anytime or anywhere, without the use of weapons. The physical training undertaken in Taekwondo is purposeful and fosters strength of mind through mental armament.[7] Taekwondo practitioners wear a uniform, known as a dobok. It is a combat sport and was developed during the 1940s and 1950s by Korean martial artists with experience in martial arts such as karate, Chinese martial arts, and indigenous Korean martial arts traditions such as Taekkyon, Subak, and Gwonbeop.[8][9] The oldest governing body for Taekwondo is the Korea Taekwondo Association (KTA), formed in 1959 through a collaborative effort by representatives from the nine original kwans, or martial arts schools, in Korea. The main international organisational bodies for Taekwondo today are the International Taekwon-Do Federation (ITF), founded by Choi Hong Hi in 1966, and the partnership of the Kukkiwon and World Taekwondo (WT, formerly World Taekwondo Federation or WTF), founded in 1972 and 1973 respectively by the Korea Taekwondo Association.[10] Gyeorugi ([kjʌɾuɡi]), a type of full-contact sparring, has been an Olympic event since 2000. The governing body for Taekwondo in the Olympics and Paralympics is World Taekwondo.',
        difficulty_level=4, 
        region="Southern Korea"
    )
    ma3 = Martial_Art(
        name="Kung Fu",
        creation_date=datetime.now(),
        art_type="Self Defense",
        bio='Wushu (/ˌwuːˈʃuː/) or Kungfu, is a hard and soft and complete martial art, as well as a full-contact sport.[1][2] It has a long history in reference to Chinese martial arts. It was developed in 1949 in an effort to standardize the practice of traditional Chinese martial arts,[3] yet attempts to structure the various decentralized martial arts traditions date back earlier, when the Central Guoshu Institute was established at Nanking in 1928. "Wushu" is the Chinese term for "martial arts" (武 "Wu" = military or martial, 術 "Shu" = art). In contemporary times, Wushu has become an international sport under the International Wushu Federation (IWUF), which holds the World Wushu Championships every two years. Wushu is an official event at the Asian Games, Southeast Asian Games, World Combat Games, and in various other multi-sport events.',
        difficulty_level=5, 
        region="China"
    )
    ma4 = Martial_Art(
        name="Krav Maga",
        creation_date=datetime.now(),
        art_type="Self Defense",
        bio='''Krav Maga (/krɑːv mɑːɡɑː/; Hebrew: קרב מגע‎, [ˈkʁav maˈɡa(ʔ)], lit. "contact combat") is a military self-defence and fighting system developed for the Israel Defense Forces (IDF) and Israeli security forces[1][2] derived from a combination of techniques sourced from Boxing, Wrestling, Judo, Aikido, and Karate.[3][4] Krav Maga is known for its focus on real-world situations and its extreme efficiency.[5] It was derived from the street-fighting experience of Hungarian-Israeli martial artist Imi Lichtenfeld, who made use of his training as a boxer and wrestler, while defending the Jewish quarter against fascist groups in Bratislava, Czechoslovakia, during the mid-to-late 1930s.[6] In the late 1940s, after his emigration to Mandatory Palestine, he began to provide lessons on combat training to what was to become the IDF.[7] From the outset, the original concept of Krav Maga was to take the most effective and practical techniques of other fighting styles (originally European boxing, wrestling, and street fighting) and to make them rapidly teachable to military conscripts.[8] Krav Maga has a philosophy emphasizing aggression,[9] and simultaneous defensive and offensive maneuvers.[10] Krav Maga has been used by the Israel Defense Forces' special forces units, security forces and by regular infantry units.[11] Closely related variations have been developed and adopted by Israeli law enforcement and intelligence organizations. There are several organizations teaching variations of Krav Maga internationally.[12] In addition, there are two types of this martial art; one type is used in the Israeli security forces and one type is in civilian use.[13]''',
        difficulty_level=4, 
        region="Middle East"
    )
    ma5 = Martial_Art(
        name="Karate",
        creation_date=datetime.now(),
        art_type="Self Defense",
        bio='''Karate (空手) (/kəˈrɑːti/; Japanese pronunciation: [kaɾate] (About this soundlisten); Okinawan pronunciation: [kaɽati]) is a martial art developed in the Ryukyu Kingdom. It developed from the indigenous Ryukyuan martial arts (called te (手), "hand"; tii in Okinawan) under the influence of Chinese martial arts, particularly Fujian White Crane.[1][2] Karate is now predominantly a striking art using punching, kicking, knee strikes, elbow strikes and open-hand techniques such as knife-hands, spear-hands and palm-heel strikes. Historically, and in some modern styles, grappling, throws, joint locks, restraints and vital-point strikes are also taught.[3] A karate practitioner is called a karateka (空手家). The Empire of Japan annexed the Ryukyu Kingdom in 1879. Karate came to the Japanese archipelago in the early 20th century during a time of migration as Ryukyuans, especially from Okinawa, looked for work in the main islands of Japan.[4] It was systematically taught in Japan after the Taishō era of 1912–1926.[5] In 1922 the Japanese Ministry of Education invited Gichin Funakoshi to Tokyo to give a karate demonstration. In 1924 Keio University established the first university karate club in mainland Japan, and by 1932 major Japanese universities had karate clubs.[6] In this era of escalating Japanese militarism,[7] the name was changed from 唐手 ("Chinese hand" or "Tang hand")[8] to 空手 ("empty hand") – both of which are pronounced karate in Japanese – to indicate that the Japanese wished to develop the combat form in Japanese style.[9] After World War II, Okinawa became (1945) an important United States military site and karate became popular among servicemen stationed there.[10][11]
                The martial arts movies of the 1960s and 1970s served to greatly increase the popularity of martial arts around the world, and English-speakers began to use the word karate in a generic way to refer to all striking-based Asian martial arts.[12] Karate schools began appearing across the world, catering to those with casual interest as well as those seeking a deeper study of the art.
                Shigeru Egami, Chief Instructor of the Shotokan dōjō, opined that "the majority of followers of karate in overseas countries pursue karate only for its fighting techniques ... Movies and television ... depict karate as a mysterious way of fighting capable of causing death or injury with a single blow ... the mass media present a pseudo art far from the real thing."[13] Shōshin Nagamine said: "Karate may be considered as the conflict within oneself or as a life-long marathon which can be won only through self-discipline, hard training and one's own creative efforts."[14]
                On 28 September 2015 karate featured on a shortlist (along with baseball, softball, skateboarding, surfing, and sport climbing) for consideration for inclusion in the 2020 Summer Olympics. On 1 June 2016 the International Olympic Committee's executive board announced they were supporting the inclusion of all five sports (counting baseball and softball as only one sport) for inclusion in the 2020 Games.
                Web Japan (sponsored by the Japanese Ministry of Foreign Affairs) claims that karate has 50 million practitioners worldwide,[15] while the World Karate Federation claims there are 100 million practitioners around the world.[16]''',
        difficulty_level=4, 
        region="Japan"
    )

    db.session.add(ma1)
    db.session.add(ma2)
    db.session.add(ma3)
    db.session.add(ma4)
    db.session.add(ma5)
    db.session.commit()


def undo_martial_arts():
    db.session.execute('TRUNCATE martail_arts RESTART IDENTITY CASCADE;')
    db.session.commit()
