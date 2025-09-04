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

  // GitHub - Projeto Central de Reclamações
  const handleOpenGitHubCentral = () => {
    Linking.openURL('https://github.com/JoaoLucasQrz/CENTRAL-DE-RECLAMA-ES');
  };

  // GitHub - Projeto Estacionamento RFID
  const handleOpenGitHubEstacionamento = () => {
    Linking.openURL('https://github.com/JoaoLucasQrz/ESTACIONAMENTO---COM-ENTRADA-RFID');
  };

  return (
    <ScrollView style={styles.container} ref={scrollViewRef}>
      <View>
        {/* Cabeçalho */}
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://via.placeholder.com/300x100' }}
            style={styles.banner}
          />
          <Text style={styles.headerTitle}>Meu Portfólio</Text>
        </View>

        {/* Sobre Mim */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sobre Mim</Text>
          <Text style={styles.sectionText}>
            Sou desenvolvedor com experiência em JavaScript, HTML, CSS e Node.js,
            apaixonado por transformar ideias em soluções práticas e funcionais.
            Gosto de criar interfaces intuitivas e sistemas eficientes, sempre
            buscando escrever um código limpo e de qualidade. Estou em constante
            evolução, aprendendo novas tecnologias e aprimorando minhas
            habilidades.
          </Text>
        </View>

        {/* Projetos */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projetos</Text>

          <View style={styles.projectsGrid}>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Projeto 1</Text>
              <Text style={styles.cardText}>
                Interface para uma Central de Reclamações usando a biblioteca
                Tkinter
              </Text>
              <View style={{ marginTop: 10 }}>
                <Button
                  title="Ver no GitHub"
                  onPress={handleOpenGitHubCentral}
                  color="#C77DFF"
                />
              </View>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>Projeto 2</Text>
              <Text style={styles.cardText}>
                Estacionamento Inteligente com Arduino, Sensores Ultrassônicos,
                Leitores RFID e Motores
              </Text>
              <View style={{ marginTop: 10 }}>
                <Button
                  title="Ver no GitHub"
                  onPress={handleOpenGitHubEstacionamento}
                  color="#C77DFF"
                />
              </View>
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

          <View style={styles.buttonContainer}>
            <Button title="Enviar" onPress={handleEnviar} color="#9D4EDD" />
          </View>

          {feedback ? <Text style={styles.feedback}>{feedback}</Text> : null}
        </View>

        {/* Botão Voltar ao topo */}
        <View style={styles.section}>
          <Button
            title="Voltar ao topo"
            onPress={handleVoltarTopo}
            color="#C77DFF"
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#240046', flex: 1 },
  header: { alignItems: 'center', paddingVertical: 20, backgroundColor: '#5A189A' },
  banner: { width: '100%', height: 100, marginBottom: 10 },
  headerTitle: { color: '#FFFFFF', fontSize: 24, fontWeight: 'bold' },
  section: { padding: 20, backgroundColor: '#3C096C', marginBottom: 10 },
  sectionTitle: {
    fontSize: 20,
    color: '#FFFFFF',
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sectionText: { color: '#FFFFFF', fontSize: 16 },
  projectsGrid: { flexDirection: 'row', justifyContent: 'space-between', gap: 10 },
  card: {
    flex: 1,
    backgroundColor: '#5A189A',
    padding: 16,
    marginBottom: 10,
    borderRadius: 12,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
    borderWidth: 2,
    borderColor: '#C77DFF',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#C77DFF',
    marginBottom: 6,
    textAlign: 'center',
  },
  cardText: {
    color: '#FFFFFF',
    fontSize: 15,
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: 22,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 4,
    color: '#000',
  },
  textarea: { height: 100, textAlignVertical: 'top' },
  buttonContainer: { marginBottom: 10 },
  feedback: {
    color: '#C77DFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  skillsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  skillItem: { alignItems: 'center', margin: 10 },
  skillIcon: { width: 50, height: 50, marginBottom: 6 },
  skillText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
