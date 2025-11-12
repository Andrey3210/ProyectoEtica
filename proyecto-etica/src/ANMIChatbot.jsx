import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, AlertCircle, Info } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { buscarRespuesta } from './MotorConocimiento';

const MensajeChat = ({ mensaje, esBot }) => (
  <div className={`d-flex mb-3 ${esBot ? 'justify-content-start' : 'justify-content-end'}`}>
    {esBot && (
      <div className="bg-success rounded-circle d-flex align-items-center justify-content-center me-2" 
           style={{ width: '36px', height: '36px', flexShrink: 0 }}>
        <Bot className="text-white" size={18} />
      </div>
    )}
    <div className={`px-3 py-2 rounded-3 ${
      esBot 
        ? 'bg-light text-dark' 
        : 'bg-success text-white'
    }`} style={{ maxWidth: '80%' }}>
      <p className="mb-0" style={{ whiteSpace: 'pre-line', fontSize: '0.9rem' }}>{mensaje}</p>
    </div>
    {!esBot && (
      <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center ms-2" 
           style={{ width: '36px', height: '36px', flexShrink: 0 }}>
        <User className="text-white" size={18} />
      </div>
    )}
  </div>
);

const AvisoResponsabilidad = ({ alAceptar }) => (
  <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" 
       style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050 }}>
    <div className="bg-white rounded-3 p-4 shadow-lg" style={{ maxWidth: '500px', width: '90%' }}>
      <div className="d-flex align-items-start mb-3">
        <AlertCircle className="text-warning me-3 flex-shrink-0" size={28} style={{ marginTop: '4px' }} />
        <div>
          <h2 className="h4 mb-3">Aviso Importante</h2>
          <div className="text-secondary" style={{ fontSize: '0.95rem' }}>
            <p>
              <strong>ANMI es una herramienta educativa</strong> que proporciona información general sobre nutrición infantil.
            </p>
            <p>
              <strong>No soy un profesional de la salud</strong> y no puedo:
            </p>
            <ul className="mb-3">
              <li>Diagnosticar enfermedades</li>
              <li>Recetar medicamentos o suplementos</li>
              <li>Proporcionar dietas personalizadas</li>
              <li>Reemplazar la consulta médica</li>
            </ul>
            <p className="fw-bold text-dark">
              Siempre consulta con tu pediatra o nutricionista para el cuidado específico de tu bebé.
            </p>
          </div>
        </div>
      </div>
      <button
        onClick={alAceptar}
        className="btn btn-success w-100 fw-bold py-2"
      >
        Entiendo y Acepto
      </button>
    </div>
  </div>
);

const PanelInformacion = () => (
  <div className="alert alert-info d-flex align-items-start mb-3">
    <Info className="text-info me-2 flex-shrink-0" size={20} style={{ marginTop: '2px' }} />
    <div style={{ fontSize: '0.9rem' }}>
      <p className="fw-bold mb-2">Puedo ayudarte con:</p>
      <ul className="mb-0">
        <li>Información sobre anemia infantil</li>
        <li>Alimentos ricos en hierro para bebés</li>
        <li>Preparación segura de alimentos</li>
        <li>Nutrición de 6 a 12 meses</li>
      </ul>
    </div>
  </div>
);

export default function ChatbotANMI() {
  const [mensajes, setMensajes] = useState([]);
  const [valorEntrada, setValorEntrada] = useState('');
  const [mostrarAviso, setMostrarAviso] = useState(true);
  const [estaEscribiendo, setEstaEscribiendo] = useState(false);
  const finMensajesRef = useRef(null);

  const desplazarAlFinal = () => {
    finMensajesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    desplazarAlFinal();
  }, [mensajes, estaEscribiendo]);

  useEffect(() => {
    if (!mostrarAviso && mensajes.length === 0) {
      // Mensaje de bienvenida
      setMensajes([{
        texto: `¡Hola! Soy ANMI, tu Asistente Nutricional Materno Infantil 👶
                Estoy aquí para ayudarte con información educativa sobre nutrición y prevención de anemia en bebés de 6 a 12 meses.
                ¿En qué puedo ayudarte hoy?`,
        esBot: true
      }]);
    }
  }, [mostrarAviso]);

  const manejarEnvio = () => {
    if (!valorEntrada.trim()) return;

    const mensajeUsuario = valorEntrada.trim();
    setMensajes(anterior => [...anterior, { texto: mensajeUsuario, esBot: false }]);
    setValorEntrada('');
    setEstaEscribiendo(true);

    // Simular tiempo de "procesamiento"
    setTimeout(() => {
      const respuesta = buscarRespuesta(mensajeUsuario);
      setEstaEscribiendo(false);
      setMensajes(anterior => [...anterior, { texto: respuesta.texto, esBot: true }]);
    }, 800);
  };

  const manejarTeclaPresionada = (evento) => {
    if (evento.key === 'Enter' && !evento.shiftKey) {
      evento.preventDefault();
      manejarEnvio();
    }
  };

  const manejarInstalacion = () => {
    // Aquí irá tu lógica de instalación PWA
    console.log('Instalar PWA');
  };

  if (mostrarAviso) {
    return <AvisoResponsabilidad alAceptar={() => setMostrarAviso(false)} />;
  }

  return (
    <div className="d-flex flex-column vh-100" style={{ background: 'linear-gradient(to bottom, #d1f2eb, #ffffff)' }}>
      {/* Encabezado */}
      <div className="bg-success text-white p-3 shadow">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h1 className="h4 mb-1 d-flex align-items-center">
                <Bot className="me-2" size={26} />
                ANMI
              </h1>
              <p className="mb-0" style={{ fontSize: '0.85rem', opacity: 0.9 }}>
                Asistente Nutricional Materno Infantil
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Área de Chat */}
      <div className="flex-grow-1 overflow-auto p-2" style={{ overflowY: 'auto' }}>
        <div className="container px-2">
          <PanelInformacion />
          
          {mensajes.map((msj, indice) => (
            <MensajeChat key={indice} mensaje={msj.texto} esBot={msj.esBot} />
          ))}
          
          {estaEscribiendo && (
            <div className="d-flex align-items-center mb-3">
              <div className="bg-success rounded-circle d-flex align-items-center justify-content-center me-2" 
                   style={{ width: '36px', height: '36px' }}>
                <Bot className="text-white" size={18} />
              </div>
              <div className="bg-light px-3 py-2 rounded-3">
                <div className="d-flex gap-1">
                  <div className="spinner-grow spinner-grow-sm text-secondary" role="status" style={{ width: '8px', height: '8px' }}>
                    <span className="visually-hidden">Escribiendo...</span>
                  </div>
                  <div className="spinner-grow spinner-grow-sm text-secondary" role="status" style={{ width: '8px', height: '8px', animationDelay: '0.2s' }}>
                    <span className="visually-hidden">Escribiendo...</span>
                  </div>
                  <div className="spinner-grow spinner-grow-sm text-secondary" role="status" style={{ width: '8px', height: '8px', animationDelay: '0.4s' }}>
                    <span className="visually-hidden">Escribiendo...</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={finMensajesRef} />
        </div>
      </div>

      {/* Área de Entrada */}
      <div className="border-top bg-white p-2 shadow">
        <div className="container px-2">
          <div className="d-flex gap-2">
            <input
              type="text"
              value={valorEntrada}
              onChange={(evento) => setValorEntrada(evento.target.value)}
              onKeyPress={manejarTeclaPresionada}
              placeholder="Escribe tu pregunta..."
              className="form-control"
              style={{ fontSize: '0.95rem' }}
            />
            <button
              onClick={manejarEnvio}
              disabled={!valorEntrada.trim()}
              className="btn btn-success px-3"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}