export interface RadioInfo {
  status: string;
  musica_atual: string;
}

const API_URL = "";

// https://radiovox.conectastm.com/api-json/Vkc1d1FrNUZNVUpRVkRBOStS

export async function getRadioInfo(): Promise<RadioInfo | null> {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Erro ao buscar dados da rádio");

    const data = await response.json();

    const musica_atual =
      typeof data.musica_atual === "string" && data.musica_atual.trim() !== ""
        ? data.musica_atual.trim()
        : "-";

    return {
      status: data.status || "desconhecido",
      musica_atual,
    };
  } catch (error) {
    console.error("Erro na API da rádio:", error);
    return null;
  }
}

class RadioService {
  private listeners: ((playing: boolean) => void)[] = [];
  private isPlaying = false;
  private audio: HTMLAudioElement | null = null;
  private audioUrl = "https://stm6.srvstm.com:7006/stream"; //STREAM DE UBERABA QUE RETRANSMITE MARAVILHA BH

  private getAudio(): HTMLAudioElement {
    if (!this.audio) {
      this.audio = new Audio(this.audioUrl);
      this.audio.crossOrigin = "anonymous";
    }
    return this.audio;
  }

  getPlayingState() {
    return this.isPlaying;
  }

  subscribe(callback: (playing: boolean) => void) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter((fn) => fn !== callback);
    };
  }
//botão de play
  play() {
    this.getAudio().play();
    this.isPlaying = true;
    this.emit();
  }
//botao pause
  pause() {
    this.getAudio().pause();
    this.isPlaying = false;
    this.emit();
  }
//evento clique

  toggle() {
    this.isPlaying ? this.pause() : this.play();
  }
//setando volume
  setVolume(vol: number) {
    this.getAudio().volume = vol;
  }
//Emitindo cada ouvinte
  private emit() {
    this.listeners.forEach((cb) => cb(this.isPlaying));
  }
}
const radioService = new RadioService();
export default radioService;
