import React from 'react';
import { StyleSheet, View, Image, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

export default function KandaDetails({ route }) {
  const { kanda } = route.params;

  const getContent = () => {
    switch (kanda.name) {
      case 'Bala Kanda':
        return 'The first book of Ramayana, the Bala Kanda depicts the origin of Lord Rama and his siblings, Lakshmana, Bharata, and Shatrughna. Dasharatha, the King of Ayodhya had three wives , Kausalya, Kautilya and Sumitra. Yet, he was childless. He thus performs a fire sacrifice, putrakameshti yagya, which results in him being blessed with four children, of which Rama is born to Kausalya, Bharata to Kaikeyi, while Lakshmana and Shatrughna are born to Sumitra. In Bala Kanda, there are detailed accounts of the childhood days of Rama and his siblings and how they learn about scriptures and the art of combat and warfare. One incident , which is always highlighted even in modern reproductions of Ramayana is the instance when Rama and Lakshmana destroyed the demons that were disturbing Vishwamitra in performing sacrificial rites. Vishvamitra himself  chose Rama to fight  the demons when he came to Dasharatha’s court for help. Lakshmana loyally followed Rama, even in the rest of Ramayana, Lakshmana’s  brotherly devotion to Rama is nonpareil. Rama was only 16 years of age when he vanquished the demons. The Bala Kanda also has details of Sita’s origin and how Rama was married to Sita. Sita, is considered to be a magical gift from God, as she was found in a field by the king, Janaka(the King of Mithila).  Rama is married to Sita after passing Shiva’s test of lifting and wielding a heavy bow. Towards the end of Bala Kanda the brothers Rama, Lakshmana, Bharata and Shatrughna are married to Sita, Urmila , Mandavi and Shrutakirti respectively.';
      case 'Ayodhya Kanda':
        return 'Ayodhya Kanda contains the events that lead to his exile the forests for fourteen years. Having been married for twelve years, Dasharatha decides to pass on the throne to Rama, a decision which is positively affirmed by every member of the Kosala assembly and also the subjects. A day prior to the grand crowning of Rama, Manthara, a cunning maidservant aroused the jealousy of Kaikeyi, due to which Kaikeyi claims two wishes that was granted to her by Dasharatha long ago, her first wish being that Rama should be sent to exile into the forests for fourteen years and the second that the throne should be passed to her son, Bharata. Dasharatha, known as a king who always fulfills his promises, was in the middle of a very precarious situation. Rama lightens his burden by accepting the banishment with absolute calm and self control. He is joined by Sita and Lakshmana. Even though he refuses Sita to join him, the selfless love of Sita could not see her husband going alone in the forests for fourteen years. Bharata, who was away, declines to accept the crown because of his mother’s wicked tactics. He requests Rama to return, but Rama, a loyal and devoted son, chose to carry out his father’s orders , and says that he won’t return till the tenure of the exile is complete. Bharata, then takes Rama’s sandals and places it on the throne, where he rules on Rama’s behalf.';
      case 'Aranya Kanda':
        return 'Aranya Kanda has detailed accounts of the last year of exile of Rama, Sita and Lakshmana, in the forests. The first major incident that takes place is the destruction of Khara,the demon brother of Surpanakha(sister of Ravana), and his demons, by Rama. Khara organizes an attack against Rama and Lakshmana, as Lakshmana has ripped off the nose and ears of Suparnakha, when she attempts to kill Sita after failing to seduce the brothers, Rama and Lakshmana.The next event is the most popular event in the history of Hindu mythology, the capture of Sita by Ravana after she crosses the Lakshmana Rekha, drawn out by Lakshmana for her protection. The rekha ensured that no one could come in , but allowed the exit of people. Ravana had come in the disguise of a man wanting help from Sita. Innocent Sita got trapped in Ravana’s cunning plan, and she leaves the Rekha, after which she is forcibly taken away by Ravana. Ravana had done all this to avenge the attack on his sister and his demon brother.At Lanka she kept in the shield of the rakshasis. Ravana, who was swayed by Sita’s eternal beauty, commands Sita to marry him, but Sita who is ever loyal to Rama, denies. Meanwhile, Rama and Lakshmana, after finding out about Sita’s capture from Jatayu, immediately leave to save her. During their forage for Sita, they encounter demon Kabandha and the ascetic Shabari, one of the greatest devotees of Lord Ram, who lead them to Hanuman and Sugriva.';
      case 'Kishkindha Kanda':
        return 'Kishkindha Kand primarily focuses on the story of vanara King Vali(also known as Bali). It is based in the ape citadel, Kishkindha. Rama and Lakshmana meet Hanuman, the greatest devotee to Lord Rama. In Kishkindha Kanda, Rama helps Sugriva by defeating his elder brother Vali, due to which Sugriva regains the hold of his kingdom of Kishkindha. Rama helps Sugriva so that he in return helps him to find Sita. However soon Sugriva forgets his promises to Rama. The wife of former king Vali, Tara very cleverly reminds Sugriva of them and convinces him to help Rama. She also stops enraged Rama from destroying the citadel. Finally, Sugriva sends search armies of vanars to all the corners of the Earth. The armies from north, west and east return with no answer. The southern army, under the exquisite leadership of Angad and Lord Hanuman discover from a vulture named Sampati that Sita is taken to Lanka.';
      case 'Sundara Kanda':
        return 'The Sundara Kanda consists of detailed and vivid accounts of the adventures of Hanuman. Sundara Kanda also tells about the magnanimous physical strength and power of Lord Hanuman. He turns  to a huge shape to leap across the sea to Lanka. He fights many demons on the way who test his strngths and abilities, but none could stop the mighty Hanuman from reaching Lanka, to find out about Sita. When Hanuman reaches Lanka, all hell breaks loose. He destroys all the trees, the buildings and kills many of Ravana’s warriors. He also gets captured in order to have a dialogue with Ravana and pleads him to leave Sita. However, Ravana doesn’t agree, and instead condemns Hanuman and his tail is set on fire. Hanuman escapes and jumps from one roof to another, spreading fire in Ravana’s citadel. Then Hanuman heads back to to Kishkindha with the euphoric news.';
      case 'Yuddha Kanda':
        return 'The Yuddha Kanda is the greatest of the Kandas, as it contains the accounts of the Great Ramayana War between Rama’sh and Ravana’s army. This Kanda also has the description of the story as to how the great Rama Setu bridge was built across the sea, using stones that floated on water as they had Rama’s name engraved on them. It was through this bridge that Rama and his great army crossed over to Lanka. Rama was even joined by Ravana’s renegade brother, Vibhishana.This Kanda also has the great Hindu Epic story of Hanuman carrying an entire Mount Sumeru to Lanka, as he could not identify which herb would cure Lakshmana, who was seriously injured with a powerful weapon hurled at him by Indrajit, Ravana’s son. Eventually the war ends when Rama kills Ravana, and he crowns Vibhishana on the throne of Lanka.The great Agni Pareeksha, the test performed by Sita to prove her purity, is accounted in this book. Sita plunges into the sacrificial fire, on Rama’s orders. The lord of fire, Agni raised and returns Sita unharmed, thus proving the integrity of her soul and body. At the end of the Yuddha Kanda, Rama’s exile tenure is also complete and he returns to Ayodhya welcomed with lights and celebrations..';
      case 'Uttara Kanda':
        return 'The Uttara Kanda, often considered to be a later addition to the original story, deals with the final years of Rama, Sita and his brothers. Even though Sita passed the test of fire, Rama bends to public opinion and banishes Sita to the forest under the hermitage of the sage, Valmiki. When Rama banished Sita, she was pregnant with twin children. She gives birth to the two kids in the forest, Lava and Kusha, who grow up under the guidance and teachings of Valmiki.Valmiki composed Ramayana , which was sung by Lava and Kusha in the presence of Rama and the large audience. When they recite about Sita, Rama is filled with grief. Valmiki produces Sita and she vanishes into mother Earth, where she came from. Rama, later learns that Lava and Kusha are his children. Years later Rama is informed by a messenger of God, that the objective of his being born on the Earth is fulfilled, and so returns to his heavenly abode.';
      default:
        return '';
    }
  };

  const content = getContent();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.kandaName}>{kanda.name}</Text>
        <Image source={kanda.image} style={styles.kandaImage} />
      </View>
      <Text style={styles.content}>{content}</Text>
    </ScrollView>
  );
}

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const imageWidth = screenWidth * 1; 
const imageHeight = screenHeight * 0.3; 

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  kandaName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  kandaImage: {
    width: imageWidth,
    height: imageHeight,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
  },
});
