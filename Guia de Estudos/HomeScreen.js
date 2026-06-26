import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      {/* CABEÇALHO */}
      <View style={styles.header}>
        <Text style={styles.logo}>📘</Text>
        <Text style={styles.titulo}>
          Seja bem-vindo ao seu {"\n"}
          <Text style={styles.tituloDestaque}>guia de estudos</Text>
        </Text>
        <Text style={styles.subtitulo}>Aprenda no seu ritmo.</Text>
      </View>

      {/* CARDS LADO A LADO E MAIS ALTOS */}
      <View style={styles.cardsContainer}>

        {/* CARD: LISTA */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.card, styles.cardLista]}
          onPress={() => navigation.navigate("Lista")}
        >
          <View style={[styles.iconeContainer, { backgroundColor: 'rgba(56, 189, 248, 0.12)' }]}>
            <Text style={styles.icone}>📚</Text>
          </View>
          <Text style={styles.cardTitulo}>Lista</Text>
          <Text style={styles.cardDescricao}>
            Visualize todos os guias
          </Text>
        </TouchableOpacity>

        {/* CARD: PERFIL */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.card, styles.cardPerfil]}
          onPress={() => navigation.navigate("Perfil")}
        >
          <View style={[styles.iconeContainer, { backgroundColor: 'rgba(168, 85, 247, 0.12)' }]}>
            <Text style={styles.icone}>👤</Text>
          </View>
          <Text style={styles.cardTitulo}>Meu Perfil</Text>
          <Text style={styles.cardDescricao}>
            Configurações da conta
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D1117", // Fundo ultra escuro igual ao da imagem
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 48,
  },
  logo: {
    fontSize: 64,
    marginBottom: 16,
  },
  titulo: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 34,
  },
  tituloDestaque: {
    color: "#58A6FF", // Tom de azul destacado
  },
  subtitulo: {
    color: "#8B949E",
    fontSize: 15,
    textAlign: "center",
    marginTop: 10,
  },

  // CONTAINER DOS CARDS (LADO A LADO)
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  
  // ESTRUTURA DOS CARDS "EM PÉ"
  card: {
    width: "48%",
    backgroundColor: "#161B22",
    borderRadius: 20,
    borderWidth: 1.5,
    
    // A mágica para deixar "em pé": aumentar bastante o padding vertical
    paddingVertical: 45, 
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  // ESTILIZAÇÃO E GLOW INDIVIDUAL
  cardLista: {
    borderColor: "rgba(56, 189, 248, 0.25)", // Borda azul sutil
    
    // Sombra/Glow azul (iOS)
    shadowColor: "#38bdf8",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    // Glow no Android
    elevation: 12,
  },
  cardPerfil: {
    borderColor: "rgba(168, 85, 247, 0.25)", // Borda roxa sutil
    
    // Sombra/Glow roxo (iOS)
    shadowColor: "#a855f7",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    // Glow no Android
    elevation: 12,
  },

  iconeContainer: {
    width: 54,
    height: 54,
    borderRadius: 27,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20, // Espaço maior abaixo do ícone
  },
  icone: {
    fontSize: 24,
  },
  cardTitulo: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
  cardDescricao: {
    color: "#8B949E",
    fontSize: 12,
    marginTop: 8,
    textAlign: "center",
    lineHeight: 16,
  },
});
