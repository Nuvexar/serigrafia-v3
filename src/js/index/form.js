// ============================
// Módulo: Envío de formulario con reCAPTCHA y Formspree
// Descripción:
// Este script gestiona el envío del formulario de contacto utilizando Google reCAPTCHA v3
// para validar que el usuario no sea un bot. Integra la verificación con Formspree para
// realizar el envío del formulario vía POST. Muestra estados visuales durante el proceso,
// como "Enviando...", éxito o error, y mejora la seguridad del formulario.
// ============================

const FORMSPREE_URL = 'https://formspree.io/f/xeozglpa'; // URL del endpoint de Formspree
const SIMULAR_ENVIO_CORREO = true; // ← Cambiar a false en producción para enviar correos reales
// Clave pública (site key) de Google reCAPTCHA v3 para validar solicitudes del formulario y proteger contra bots
const RECAPTCHA_SITE_KEY = '6LcZL48rAAAAAGO3dejwqJlr_IsiurHaHJHp18sg';

document.getElementById('contactForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const form = event.target;
    const boton = document.getElementById('btn-enviar');

    mostrarEstadoCargando(boton);

    grecaptcha.ready(async () => {
        try {
            const token = await grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'contact_us' });
            console.log('Token reCAPTCHA:', token);
            const data = prepararDatosFormulario(form, token);
            await enviarFormulario(form, data, boton);
        } catch (error) {
            console.error('Error en reCAPTCHA:', error);
            manejarErrorReCaptcha(boton);
        } finally {
            restaurarBoton(boton);
        }
    });
});

function mostrarEstadoCargando(boton) {
    boton.disabled = true;

    const textoBoton = boton.querySelector('#texto-boton');
    const spinner = boton.querySelector('#spinner-enviar');
    
    if (textoBoton) textoBoton.innerText = 'Enviando...';
    if (spinner) spinner.classList.remove('hidden');
}

function prepararDatosFormulario(form, token) {
    const data = new FormData(form);
    data.append('g-recaptcha-response', token);
    return data;
}

// Simulación de envío del formulario
function simularEnvio() {
    const retardo = 3000;            // Tiempo de espera simulado en milisegundos
    const probabilidadExito = 0.5;   // Probabilidad de éxito simulada

    const simularExito = Math.random() < probabilidadExito;

    return new Promise((resolve) => {
        setTimeout(() => {
            if (simularExito) {
                // Simula un objeto de respuesta con .ok = true
                resolve({ ok: true });
            } else {
                // Simula un objeto de respuesta con .ok = false y un método .json()
                resolve({
                    ok: false,
                    json: () => Promise.resolve({ error: 'Error simulado.' })
                });
            }
        }, retardo);
    });
}

async function enviarFormulario(form, data, boton) {
    try {
        const response = SIMULAR_ENVIO_CORREO
            ? await simularEnvio()
            : await fetch(FORMSPREE_URL, {
                method: 'POST',
                body: data,
                headers: { 'Accept': 'application/json' }
            });

        console.log(`Envío de formulario ${SIMULAR_ENVIO_CORREO ? 'SIMULADO' : 'REAL'}`);

        if (response.ok) {
            console.log('Formulario enviado exitosamente.');
            manejarExitoFormulario(form);
        } else {
            const errorData = await response.json();
            const errorMsg = errorData.error || 'Error al enviar el formulario.';
            throw new Error(errorMsg);
        }
    } catch (error) {
        console.error('Error en el envío del formulario: ', error);
        manejarErrorFormulario(error);
    } finally {
        restaurarBoton(boton);
    }
}

function manejarExitoFormulario(form) {
    form.reset();
    mostrarToast('Gracias por tu mensaje. ¡Te responderemos pronto!', 'success')
}

function manejarErrorFormulario(error) {
    mostrarToast('Hubo un problema al enviar tu mensaje. Intenta más tarde.', 'danger');
}

function restaurarBoton(boton) {
    boton.disabled = false;
    
    const textoBoton = boton.querySelector('#texto-boton');
    const spinner = boton.querySelector('#spinner-enviar');
    
    if (textoBoton) textoBoton.innerText = 'Enviar mensaje';
    if (spinner) spinner.classList.add('hidden');
}

function manejarErrorReCaptcha(boton) {
    mostrarToast('Error con reCAPTCHA. Intenta recargar la página.', 'danger');
    restaurarBoton(boton);
}

function mostrarToast(mensaje = "Enviando mensaje...", tipo = "info") {
  const toast = document.getElementById("estado-toast");
  const mensajeElemento = document.getElementById("toast-mensaje");

  // Mapeo único de clases por tipo
  const clasesPorTipo = {
    success: ["bg-green-600", "text-white"],
    danger: ["bg-red-500", "text-white"],
    info: ["bg-blue-500", "text-white"],
    warning: ["bg-yellow-500", "text-black"],
  };

  // Obtener clases del tipo actual (o info por defecto)
  const clasesActuales = clasesPorTipo[tipo] || clasesPorTipo.info;

  // Quitar todas las clases posibles (todas las clases de todos los tipos)
  Object.values(clasesPorTipo).flat().forEach(clase =>
    toast.classList.remove(clase)
  );

  // Agregar las clases nuevas
  toast.classList.add(...clasesActuales);

  // Mostrar mensaje
  mensajeElemento.textContent = mensaje;
  toast.classList.remove("hidden");

  // Auto-ocultar a los 4 segundos
  setTimeout(() => {
    toast.classList.add("hidden");
  }, 4000);
}

// Cierre manual
document.getElementById("toast-cerrar").addEventListener("click", () => {
  const toast = document.getElementById("estado-toast");

  toast.classList.add("hidden");
});
