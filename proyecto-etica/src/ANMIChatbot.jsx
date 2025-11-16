import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, AlertCircle, Info, Menu, X, Plus, Edit2, Trash2, Check } from 'lucide-react';
import { buscarRespuesta } from './MotorConocimiento';

const MensajeChat = ({ mensaje, esBot }) => (
  <div 
    className={`d-flex mb-3 animate-fade-in ${esBot ? 'justify-content-start' : 'justify-content-end'}`}
  >
    {esBot && (
      <div className="bg-success rounded-circle d-flex align-items-center justify-content-center me-2 shadow-sm animate-bounce-once" 
           style={{ width: '40px', height: '40px', flexShrink: 0 }}>
        <Bot className="text-white" size={20} />
      </div>
    )}
    <div 
      className={`px-3 py-3 rounded-4 shadow-sm animate-slide-up ${
        esBot 
          ? 'bg-white text-dark border' 
          : 'bg-success text-white'
      }`} 
      style={{ maxWidth: '80%' }}
    >
      <p className="mb-0" style={{ whiteSpace: 'pre-line', fontSize: '0.9rem', lineHeight: '1.6' }}>{mensaje}</p>
    </div>
    {!esBot && (
      <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center ms-2 shadow-sm" 
           style={{ width: '40px', height: '40px', flexShrink: 0 }}>
        <User className="text-white" size={20} />
      </div>
    )}
  </div>
);

const AvisoResponsabilidad = ({ alAceptar }) => (
  <div 
    className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center animate-fade-in"
    style={{ backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 1050 }}
  >
    <div 
      className="bg-white rounded-4 p-4 shadow-lg animate-scale-in" 
      style={{ maxWidth: '550px', width: '90%' }}
    >
      {/* Logo y Header */}
      <div className="text-center mb-4">
        <img 
          src="sanMarcos.png" 
          alt="UNMSM" 
          className="mb-3 animate-bounce-once"
          style={{ width: '80px', height: '80px', objectFit: 'contain' }}
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <h2 className="h3 fw-bold text-success mb-2">ANMI</h2>
        <p className="text-muted small mb-0">Asistente Nutricional Materno Infantil</p>
      </div>

      <div className="alert alert-warning d-flex align-items-start mb-3 rounded-3" role="alert">
        <AlertCircle className="text-warning me-2 flex-shrink-0" size={24} style={{ marginTop: '2px' }} />
        <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
          <h5 className="alert-heading fw-bold mb-2">⚠️ Aviso Importante</h5>
          <p className="mb-2">
            <strong>ANMI es una herramienta educativa</strong> que proporciona información general sobre nutrición infantil.
          </p>
          <p className="mb-2">
            <strong>No soy un profesional de la salud</strong> y no puedo:
          </p>
          <ul className="mb-2 ps-3" style={{ fontSize: '0.85rem' }}>
            <li>Diagnosticar enfermedades</li>
            <li>Recetar medicamentos o suplementos</li>
            <li>Proporcionar dietas personalizadas</li>
            <li>Reemplazar la consulta médica</li>
          </ul>
          <p className="fw-bold text-dark mb-0">
            Siempre consulta con tu pediatra o nutricionista para el cuidado específico de tu bebé.
          </p>
        </div>
      </div>

      {/* Footer con info de UNMSM */}
      <div className="text-center mb-3">
        <p className="text-muted small mb-1">
          <strong>Desarrollado por estudiantes de la</strong>
        </p>
        <p className="text-success fw-bold mb-0">
          Universidad Nacional Mayor de San Marcos
        </p>
      </div>

      <button
        onClick={alAceptar}
        className="btn btn-success w-100 fw-bold py-3 rounded-3 btn-hover"
      >
        Entiendo y Acepto
      </button>
    </div>
  </div>
);

const PanelInformacion = () => (
  <div className="alert alert-info d-flex align-items-start mb-3 rounded-4 shadow-sm border-0 animate-slide-down" style={{ backgroundColor: '#e7f3ff' }}>
    <Info className="text-info me-3 flex-shrink-0" size={22} style={{ marginTop: '2px' }} />
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

const ItemChat = ({ chat, seleccionado, alSeleccionar, alRenombrar, alEliminar }) => {
  const [editando, setEditando] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState(chat.nombre);

  const guardarNombre = () => {
    if (nuevoNombre.trim()) {
      alRenombrar(chat.id, nuevoNombre.trim());
      setEditando(false);
    }
  };

  return (
    <div
      className={`p-3 rounded-3 mb-2 cursor-pointer transition-all ${
        seleccionado 
          ? 'bg-success bg-opacity-10 border border-success shadow-sm' 
          : 'bg-white border hover-shadow'
      }`}
      onClick={() => !editando && alSeleccionar(chat.id)}
      style={{ cursor: 'pointer' }}
    >
      {editando ? (
        <div className="d-flex align-items-center gap-2" onClick={(e) => e.stopPropagation()}>
          <input
            type="text"
            value={nuevoNombre}
            onChange={(e) => setNuevoNombre(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && guardarNombre()}
            className="form-control form-control-sm"
            autoFocus
          />
          <button
            onClick={guardarNombre}
            className="btn btn-success btn-sm"
          >
            <Check size={16} />
          </button>
        </div>
      ) : (
        <div className="d-flex align-items-center justify-content-between">
          <span className="fw-semibold text-dark flex-grow-1 text-truncate" style={{ fontSize: '0.9rem' }}>{chat.nombre}</span>
          <div className="d-flex gap-1 ms-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setEditando(true);
              }}
              className="btn btn-sm btn-link text-secondary p-1 hover-primary"
              style={{ lineHeight: 1 }}
            >
              <Edit2 size={14} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                alEliminar(chat.id);
              }}
              className="btn btn-sm btn-link text-secondary p-1 hover-danger"
              style={{ lineHeight: 1 }}
            >
              <Trash2 size={14} />
            </button>
          </div>
        </div>
      )}
      <p className="text-muted small mb-0 mt-1">{chat.fecha}</p>
    </div>
  );
};

const Sidebar = ({ abierta, alCerrar, chats, chatActual, alSeleccionarChat, alNuevoChat, alRenombrarChat, alEliminarChat }) => (
  <>
    {/* Overlay */}
    {abierta && (
      <div 
        className="position-fixed top-0 start-0 w-100 h-100 bg-dark animate-fade-in"
        style={{ zIndex: 1040, opacity: 0.5 }}
        onClick={alCerrar}
      />
    )}
    
    {/* Sidebar */}
    <div
      className={`position-fixed top-0 start-0 h-100 bg-white shadow-lg animate-slide-in-left ${
        abierta ? '' : 'd-none'
      }`}
      style={{ width: '300px', zIndex: 1050 }}
    >
      <div className="d-flex flex-column h-100">
        {/* Header */}
        <div className="p-3 border-bottom bg-light">
          <div className="d-flex align-items-center justify-content-between">
            <h2 className="h5 mb-0 fw-bold">Mis Chats</h2>
            <button
              onClick={alCerrar}
              className="btn btn-link text-secondary p-1"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Nuevo Chat Button */}
        <div className="p-3">
          <button
            onClick={() => {
              alNuevoChat();
              alCerrar();
            }}
            className="btn btn-success w-100 d-flex align-items-center justify-content-center gap-2 fw-semibold py-2 rounded-3 btn-hover"
          >
            <Plus size={20} />
            Nuevo Chat
          </button>
        </div>

        {/* Lista de Chats */}
        <div className="flex-grow-1 overflow-auto px-3 pb-3" style={{ maxHeight: 'calc(100vh - 140px)' }}>
          {chats.length === 0 ? (
            <p className="text-muted text-center mt-5 small">No hay chats guardados</p>
          ) : (
            chats.map(chat => (
              <ItemChat
                key={chat.id}
                chat={chat}
                seleccionado={chat.id === chatActual}
                alSeleccionar={alSeleccionarChat}
                alRenombrar={alRenombrarChat}
                alEliminar={alEliminarChat}
              />
            ))
          )}
        </div>
      </div>
    </div>
  </>
);

export default function ChatbotANMI() {
  const [mensajes, setMensajes] = useState([]);
  const [valorEntrada, setValorEntrada] = useState('');
  const [mostrarAviso, setMostrarAviso] = useState(true);
  const [estaEscribiendo, setEstaEscribiendo] = useState(false);
  const [sidebarAbierta, setSidebarAbierta] = useState(false);
  const [chats, setChats] = useState([]);
  const [chatActualId, setChatActualId] = useState(null);
  const finMensajesRef = useRef(null);

  // Cargar chats del localStorage al inicio
  useEffect(() => {
    const chatsGuardados = localStorage.getItem('anmi_chats');
    if (chatsGuardados) {
      const chatsParseados = JSON.parse(chatsGuardados);
      setChats(chatsParseados);
      if (chatsParseados.length > 0) {
        setChatActualId(chatsParseados[0].id);
        setMensajes(chatsParseados[0].mensajes);
      }
    }
  }, []);

  // Guardar chats en localStorage cuando cambien
  useEffect(() => {
    if (chats.length > 0) {
      localStorage.setItem('anmi_chats', JSON.stringify(chats));
    }
  }, [chats]);

  // Actualizar mensajes del chat actual cuando cambien
  useEffect(() => {
    if (chatActualId && mensajes.length > 0) {
      setChats(prev => prev.map(chat => 
        chat.id === chatActualId 
          ? { ...chat, mensajes, ultimaActualizacion: new Date().toISOString() }
          : chat
      ));
    }
  }, [mensajes, chatActualId]);

  const desplazarAlFinal = () => {
    finMensajesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    desplazarAlFinal();
  }, [mensajes, estaEscribiendo]);

  useEffect(() => {
    if (!mostrarAviso && mensajes.length === 0 && chatActualId) {
      setMensajes([{
        texto: `¡Hola! Soy ANMI, tu Asistente Nutricional Materno Infantil 👶

Estoy aquí para ayudarte con información educativa sobre nutrición y prevención de anemia en bebés de 6 a 12 meses.

¿En qué puedo ayudarte hoy?`,
        esBot: true
      }]);
    }
  }, [mostrarAviso, chatActualId]);

  const crearNuevoChat = () => {
    const nuevoChat = {
      id: Date.now().toString(),
      nombre: `Chat ${chats.length + 1}`,
      fecha: new Date().toLocaleDateString(),
      mensajes: [],
      ultimaActualizacion: new Date().toISOString()
    };
    setChats(prev => [nuevoChat, ...prev]);
    setChatActualId(nuevoChat.id);
    setMensajes([]);
  };

  const seleccionarChat = (chatId) => {
    const chat = chats.find(c => c.id === chatId);
    if (chat) {
      setChatActualId(chatId);
      setMensajes(chat.mensajes);
    }
  };

  const renombrarChat = (chatId, nuevoNombre) => {
    setChats(prev => prev.map(chat =>
      chat.id === chatId ? { ...chat, nombre: nuevoNombre } : chat
    ));
  };

  const eliminarChat = (chatId) => {
    const nuevosChats = chats.filter(c => c.id !== chatId);
    setChats(nuevosChats);
    
    if (chatId === chatActualId) {
      if (nuevosChats.length > 0) {
        setChatActualId(nuevosChats[0].id);
        setMensajes(nuevosChats[0].mensajes);
      } else {
        setChatActualId(null);
        setMensajes([]);
      }
    }
  };

  const manejarEnvio = () => {
    if (!valorEntrada.trim()) return;

    // Si no hay chat actual, crear uno nuevo
    if (!chatActualId) {
      crearNuevoChat();
    }

    const mensajeUsuario = valorEntrada.trim();
    setMensajes(anterior => [...anterior, { texto: mensajeUsuario, esBot: false }]);
    setValorEntrada('');
    setEstaEscribiendo(true);

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

  if (mostrarAviso) {
    return <AvisoResponsabilidad alAceptar={() => setMostrarAviso(false)} />;
  }

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(10px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
        @keyframes bounceOnce {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.05) rotate(-5deg); }
          50% { transform: scale(1.1) rotate(5deg); }
          75% { transform: scale(1.05) rotate(-3deg); }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-in;
        }
        .animate-slide-up {
          animation: slideUp 0.3s ease-out;
        }
        .animate-slide-down {
          animation: slideDown 0.4s ease-out;
        }
        .animate-scale-in {
          animation: scaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .animate-bounce-once {
          animation: bounceOnce 0.8s ease-in-out;
        }
        .animate-slide-in-left {
          animation: slideInLeft 0.3s ease-out;
        }
        .btn-hover {
          transition: all 0.2s ease;
        }
        .btn-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        .btn-hover:active {
          transform: translateY(0);
        }
        .hover-shadow {
          transition: all 0.2s ease;
        }
        .hover-shadow:hover {
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          transform: translateX(2px);
        }
        .hover-primary:hover {
          color: #0d6efd !important;
        }
        .hover-danger:hover {
          color: #dc3545 !important;
        }
        .cursor-pointer {
          cursor: pointer;
        }
      `}</style>

      <Sidebar
        abierta={sidebarAbierta}
        alCerrar={() => setSidebarAbierta(false)}
        chats={chats}
        chatActual={chatActualId}
        alSeleccionarChat={seleccionarChat}
        alNuevoChat={crearNuevoChat}
        alRenombrarChat={renombrarChat}
        alEliminarChat={eliminarChat}
      />

      <div className="d-flex flex-column vh-100" style={{ background: 'linear-gradient(to bottom, #d1f2eb, #ffffff)' }}>
        {/* Encabezado */}
        <div className="bg-success text-white p-3 shadow-sm" style={{ background: 'linear-gradient(135deg, #198754 0%, #157347 100%)' }}>
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-3">
                <button
                  onClick={() => setSidebarAbierta(true)}
                  className="btn btn-success border-0 d-flex align-items-center justify-content-center"
                  style={{ width: '40px', height: '40px' }}
                >
                  <Menu size={24} />
                </button>
                <img 
                  src="sanMarcos.png" 
                  alt="UNMSM" 
                  className="bg-white rounded-circle p-1 shadow-sm"
                  style={{ width: '50px', height: '50px', objectFit: 'contain' }}
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div>
                  <h1 className="h4 mb-0 d-flex align-items-center fw-bold">
                    <Bot className="me-2" size={28} />
                    ANMI
                  </h1>
                  <p className="mb-0" style={{ fontSize: '0.85rem', opacity: 0.9 }}>
                    Asistente Nutricional Materno Infantil
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Área de Chat */}
        <div className="flex-grow-1 overflow-auto p-3" style={{ overflowY: 'auto' }}>
          <div className="container" style={{ maxWidth: '900px' }}>
            <PanelInformacion />
            
            {mensajes.map((msj, indice) => (
              <MensajeChat key={indice} mensaje={msj.texto} esBot={msj.esBot} />
            ))}
            
            {estaEscribiendo && (
              <div className="d-flex align-items-center mb-3 animate-fade-in">
                <div className="bg-success rounded-circle d-flex align-items-center justify-content-center me-2 shadow-sm" 
                     style={{ width: '40px', height: '40px' }}>
                  <Bot className="text-white" size={20} />
                </div>
                <div className="bg-white px-3 py-3 rounded-4 shadow-sm border">
                  <div className="d-flex gap-1">
                    <div className="spinner-grow spinner-grow-sm text-secondary" role="status" style={{ width: '8px', height: '8px' }}>
                      <span className="visually-hidden">Escribiendo...</span>
                    </div>
                    <div className="spinner-grow spinner-grow-sm text-secondary" role="status" style={{ width: '8px', height: '8px', animationDelay: '0.15s' }}>
                      <span className="visually-hidden">Escribiendo...</span>
                    </div>
                    <div className="spinner-grow spinner-grow-sm text-secondary" role="status" style={{ width: '8px', height: '8px', animationDelay: '0.3s' }}>
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
        <div className="border-top bg-white p-3 shadow">
          <div className="container" style={{ maxWidth: '900px' }}>
            <div className="d-flex gap-2">
              <input
                type="text"
                value={valorEntrada}
                onChange={(evento) => setValorEntrada(evento.target.value)}
                onKeyPress={manejarTeclaPresionada}
                placeholder="Escribe tu pregunta..."
                className="form-control rounded-3 border-2"
                style={{ fontSize: '0.95rem' }}
              />
              <button
                onClick={manejarEnvio}
                disabled={!valorEntrada.trim()}
                className="btn btn-success px-4 rounded-3 btn-hover"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}