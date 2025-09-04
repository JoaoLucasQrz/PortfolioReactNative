import React, { useState, useRef } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  Linking,
} from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [feedback, setFeedback] = useState('');
  const scrollViewRef = useRef<ScrollView>(null);

  const handleEnviar = () => {
    if (nome.trim() === '' || mensagem.trim() === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    } else {
      setFeedback('Mensagem enviada com sucesso!');
      setNome('');
      setMensagem('');
    }
  };

  const handleVoltarTopo = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: 0, animated: true });
    }
  };

  const handleOpenGitHubCentral = () => {
    Linking.openURL('https://github.com/JoaoLucasQrz/CENTRAL-DE-RECLAMA-ES');
  };

  const handleOpenGitHubEstacionamento = () => {
    Linking.openURL('https://github.com/JoaoLucasQrz/ESTACIONAMENTO---COM-ENTRADA-RFID');
  };

  return (
    <ScrollView style={styles.container} ref={scrollViewRef}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://via.placeholder.com/300x100' }}
          style={styles.banner}
        />
        <Text style={styles.headerTitle}>Portfólio de João Lucas</Text>
      </View>

      {/* Sobre Mim */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sobre Mim</Text>
        <Text style={styles.sectionText}>
          Olá! Meu nome é <Text style={styles.highlight}>João Lucas</Text>. 
          Sou desenvolvedor apaixonado por tecnologia, com experiência em 
          <Text style={styles.highlight}> JavaScript, HTML, CSS e Node.js</Text>.  
          Adoro transformar ideias em soluções reais e funcionais, criando 
          interfaces intuitivas e sistemas eficientes.  

          Estou em constante aprendizado, buscando aprimorar minhas habilidades 
          e explorar novas tecnologias para entregar sempre projetos de qualidade.
        </Text>
      </View>

      {/* Projetos */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Projetos</Text>

        <View style={styles.projectsGrid}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Projeto 1</Text>
            <Text style={styles.cardText}>
              Interface para uma Central de Reclamações usando a biblioteca Tkinter
            </Text>
            <Button
              title="Ver no GitHub"
              onPress={handleOpenGitHubCentral}
              color="#C77DFF"
            />
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Projeto 2</Text>
            <Text style={styles.cardText}>
              Estacionamento Inteligente com Arduino, Sensores Ultrassônicos,
              Leitores RFID e Motores
            </Text>
            <Button
              title="Ver no GitHub"
              onPress={handleOpenGitHubEstacionamento}
              color="#C77DFF"
            />
          </View>
        </View>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.skillsContainer}>
          <View style={styles.skillItem}>
            <Image
              source={{ uri: 'https://img.icons8.com/color/512/html-5.png' }}
              style={styles.skillIcon}
            />
            <Text style={styles.skillText}>HTML</Text>
          </View>
          <View style={styles.skillItem}>
            <Image
              source={{ uri: 'https://img.icons8.com/color/512/javascript.png' }}
              style={styles.skillIcon}
            />
            <Text style={styles.skillText}>JavaScript</Text>
          </View>
          <View style={styles.skillItem}>
            <Image
              source={{ uri: 'https://img.icons8.com/fluency/512/node-js.png' }}
              style={styles.skillIcon}
            />
            <Text style={styles.skillText}>Node.js</Text>
          </View>
        </View>
      </View>

      {/* Contato */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contato</Text>

        <TextInput
          placeholder="Seu nome"
          value={nome}
          onChangeText={setNome}
          style={styles.input}
          placeholderTextColor="#aaa"
        />

        <TextInput
          placeholder="Sua mensagem"
          value={mensagem}
          onChangeText={setMensagem}
          style={[styles.input, styles.textarea]}
          placeholderTextColor="#aaa"
          multiline
        />

        <Button title="Enviar" onPress={handleEnviar} color="#9D4EDD" />
        {feedback ? <Text style={styles.feedback}>{feedback}</Text> : null}
      </View>

      {/* Botão Voltar ao Topo */}
      <View style={styles.section}>
        <Button title="Voltar ao topo" onPress={handleVoltarTopo} color="#C77DFF" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  /* Container */
  container: {
    flex: 1,
    backgroundColor: '#240046',
  },

  /* Header */
  header: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#5A189A',
  },
  banner: { width: '100%', height: 100, marginBottom: 10 },
  headerTitle: { color: '#FFFFFF', fontSize: 24, fontWeight: 'bold' },

  /* Seções */
  section: {
    padding: 20,
    backgroundColor: '#3C096C',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  sectionText: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 24,
  },
  highlight: {
    color: '#C77DFF',
    fontWeight: 'bold',
  },

  /* Projetos */
  projectsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  card: {
    flex: 1,
    backgroundColor: '#5A189A',
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 5,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
    borderWidth: 2,
    borderColor: '#C77DFF',
  },
  cardTitle: { fontSize: 20, fontWeight: 'bold', color: '#C77DFF', marginBottom: 6, textAlign: 'center' },
  cardText: { fontSize: 15, color: '#FFFFFF', textAlign: 'center', fontStyle: 'italic', lineHeight: 22 },

  /* Inputs */
  input: { backgroundColor: '#fff', padding: 10, marginBottom: 10, borderRadius: 6, color: '#000' },
  textarea: { height: 100, textAlignVertical: 'top' },
  feedback: { color: '#C77DFF', fontWeight: 'bold', fontSize: 16, textAlign: 'center', marginTop: 8 },

  /* Skills */
  skillsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  skillItem: { alignItems: 'center', margin: 10 },
  skillIcon: { width: 50, height: 50, marginBottom: 6 },
  skillText: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 14, textAlign: 'center' },
});

