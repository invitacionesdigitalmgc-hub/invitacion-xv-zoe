/**
 * =========================================================
 * FUNCIONALIDAD PRINCIPAL · XV ZOE ISHEL
 * =========================================================
 */

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  /**
   * =======================================================
   * CONFIGURACIÓN
   * =======================================================
   */

  const AUDIO_URL =
    "https://static.wixstatic.com/mp3/053330_213a352ebd5245a2b647686638bfda10.mp3";

  const EVENT_DATE =
    new Date("2026-12-19T16:30:00-06:00");


  /**
   * =======================================================
   * ELEMENTOS GENERALES
   * =======================================================
   */

  const openButton =
    document.getElementById("openInvitation");

  const invitationCard =
    document.getElementById("invitationCard");

  const openedScreen =
    document.getElementById("openedScreen");

  const openingLight =
    document.getElementById("openingLight");

  const nextContent =
    document.getElementById("nextContent");

  const scrollIndicator =
    document.getElementById("scrollIndicator");


  /**
   * =======================================================
   * SECCIONES
   * =======================================================
   */

  const presentationSection =
    document.getElementById("presentacion");

  const section2Continue =
    document.getElementById("section2Continue");

  const familySection =
    document.getElementById("familia");

  const messageContinue =
    document.getElementById("messageContinue");

  const dateSection =
    document.getElementById("fechaEvento");


  /**
   * =======================================================
   * CUENTA REGRESIVA
   * =======================================================
   */

  const countdownDays =
    document.getElementById("countdownDays");

  const countdownHours =
    document.getElementById("countdownHours");

  const countdownMinutes =
    document.getElementById("countdownMinutes");

  const countdownSeconds =
    document.getElementById("countdownSeconds");

  const countdownFinished =
    document.getElementById("countdownFinished");


  /**
   * =======================================================
   * VARIABLES
   * =======================================================
   */

  let music = null;

  let invitationOpened = false;

  let countdownInterval = null;


  /**
   * =======================================================
   * FUNCIÓN GENERAL DE SCROLL
   * =======================================================
   */

  function goToSection(section) {
    if (!section) {
      return;
    }

    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }


  /**
   * =======================================================
   * MÚSICA
   * =======================================================
   */

  function startMusic() {
    if (!AUDIO_URL.trim()) {
      return;
    }

    if (music) {
      music.play().catch(function () {
        console.log(
          "No fue posible reanudar el audio."
        );
      });

      return;
    }

    music = new Audio(AUDIO_URL);

    music.loop = true;

    music.volume = 0.55;

    music.play().catch(function () {
      console.log(
        "No fue posible iniciar el audio."
      );
    });
  }


  /**
   * =======================================================
   * ABRIR INVITACIÓN
   * =======================================================
   */

  function openInvitation() {
    if (invitationOpened) {
      return;
    }

    invitationOpened = true;

    if (openButton) {
      openButton.disabled = true;
    }

    if (invitationCard) {
      invitationCard.classList.add("exit");
    }

    if (openingLight) {
      openingLight.classList.remove("active");

      /*
       * Fuerza un nuevo ciclo de animación
       * si la clase ya había sido utilizada.
       */
      void openingLight.offsetWidth;

      openingLight.classList.add("active");
    }

    startMusic();


    /**
     * -----------------------------------------------------
     * MOSTRAR PANTALLA "DESLIZA"
     * -----------------------------------------------------
     */

    window.setTimeout(function () {
      if (!openedScreen) {
        return;
      }

      openedScreen.classList.add("active");

      openedScreen.setAttribute(
        "aria-hidden",
        "false"
      );
    }, 500);


    /**
     * -----------------------------------------------------
     * HABILITAR EL RESTO DE LA INVITACIÓN
     * -----------------------------------------------------
     */

    window.setTimeout(function () {
      if (nextContent) {
        nextContent.classList.add("visible");
      }

      document.documentElement.classList.add(
        "invitation-open"
      );

      document.body.classList.add(
        "invitation-open"
      );
    }, 1700);
  }


  /**
   * =======================================================
   * BOTÓN ABRIR INVITACIÓN
   * =======================================================
   */

  if (openButton) {
    openButton.addEventListener(
      "click",
      function (event) {
        event.preventDefault();

        openInvitation();
      }
    );
  } else {
    console.warn(
      'No se encontró el elemento #openInvitation.'
    );
  }


  /**
   * =======================================================
   * PORTADA ABIERTA → SECCIÓN 02
   * =======================================================
   */

  function goToPresentation() {
    if (
      !nextContent ||
      !nextContent.classList.contains("visible")
    ) {
      return;
    }

    goToSection(presentationSection);
  }


  if (scrollIndicator) {
    scrollIndicator.addEventListener(
      "click",
      goToPresentation
    );

    scrollIndicator.addEventListener(
      "keydown",
      function (event) {
        if (
          event.key === "Enter" ||
          event.key === " "
        ) {
          event.preventDefault();

          goToPresentation();
        }
      }
    );
  }


  /**
   * =======================================================
   * SECCIÓN 02 → SECCIÓN 03
   * =======================================================
   */

  function goToFamily() {
    goToSection(familySection);
  }


  if (section2Continue) {
    section2Continue.addEventListener(
      "click",
      goToFamily
    );

    section2Continue.addEventListener(
      "keydown",
      function (event) {
        if (
          event.key === "Enter" ||
          event.key === " "
        ) {
          event.preventDefault();

          goToFamily();
        }
      }
    );
  }


  /**
   * =======================================================
   * SECCIÓN 04 → SECCIÓN 05
   * =======================================================
   */

  function goToDateSection() {
    goToSection(dateSection);
  }


  if (messageContinue) {
    messageContinue.addEventListener(
      "click",
      goToDateSection
    );

    messageContinue.addEventListener(
      "keydown",
      function (event) {
        if (
          event.key === "Enter" ||
          event.key === " "
        ) {
          event.preventDefault();

          goToDateSection();
        }
      }
    );
  }


  /**
   * =======================================================
   * FORMATEAR NÚMERO DEL COUNTDOWN
   * =======================================================
   */

  function formatCountdownNumber(number) {
    return String(number).padStart(
      2,
      "0"
    );
  }


  /**
   * =======================================================
   * COLOCAR CUENTA REGRESIVA EN 00
   * =======================================================
   */

  function resetCountdown() {
    if (countdownDays) {
      countdownDays.textContent = "00";
    }

    if (countdownHours) {
      countdownHours.textContent = "00";
    }

    if (countdownMinutes) {
      countdownMinutes.textContent = "00";
    }

    if (countdownSeconds) {
      countdownSeconds.textContent = "00";
    }
  }


  /**
   * =======================================================
   * ACTUALIZAR CUENTA REGRESIVA
   * =======================================================
   */

  function updateCountdown() {
    const now = new Date();

    const distance =
      EVENT_DATE.getTime() -
      now.getTime();


    /**
     * -----------------------------------------------------
     * EL EVENTO YA LLEGÓ
     * -----------------------------------------------------
     */

    if (distance <= 0) {
      resetCountdown();

      if (countdownFinished) {
        countdownFinished.textContent =
          "¡Hoy es el gran día!";
      }

      if (countdownInterval) {
        window.clearInterval(
          countdownInterval
        );

        countdownInterval = null;
      }

      return;
    }


    /**
     * -----------------------------------------------------
     * CÁLCULOS
     * -----------------------------------------------------
     */

    const days =
      Math.floor(
        distance /
        (
          1000 *
          60 *
          60 *
          24
        )
      );


    const hours =
      Math.floor(
        (
          distance %
          (
            1000 *
            60 *
            60 *
            24
          )
        ) /
        (
          1000 *
          60 *
          60
        )
      );


    const minutes =
      Math.floor(
        (
          distance %
          (
            1000 *
            60 *
            60
          )
        ) /
        (
          1000 *
          60
        )
      );


    const seconds =
      Math.floor(
        (
          distance %
          (
            1000 *
            60
          )
        ) /
        1000
      );


    /**
     * -----------------------------------------------------
     * MOSTRAR RESULTADOS
     * -----------------------------------------------------
     */

    if (countdownDays) {
      countdownDays.textContent =
        String(days);
    }


    if (countdownHours) {
      countdownHours.textContent =
        formatCountdownNumber(hours);
    }


    if (countdownMinutes) {
      countdownMinutes.textContent =
        formatCountdownNumber(minutes);
    }


    if (countdownSeconds) {
      countdownSeconds.textContent =
        formatCountdownNumber(seconds);
    }


    if (countdownFinished) {
      countdownFinished.textContent = "";
    }
  }


  /**
   * =======================================================
   * INICIAR COUNTDOWN
   * =======================================================
   */

  const countdownExists =
    countdownDays ||
    countdownHours ||
    countdownMinutes ||
    countdownSeconds;


  if (countdownExists) {
    /*
     * Mostrar datos inmediatamente.
     */
    updateCountdown();

    /*
     * Actualizar cada segundo.
     */
    countdownInterval =
      window.setInterval(
        updateCountdown,
        1000
      );
  }


  /**
   * =======================================================
   * MENSAJE DE CONTROL
   * =======================================================
   */

  console.log(
    "XV Zoe Ishel · script.js cargado correctamente."
  );
});

/**
 * =========================================================
 * SECCIÓN 05 → SECCIÓN 06
 * =========================================================
 */

const dateContinue =
  document.getElementById(
    "dateContinue"
  );


const locationSection =
  document.getElementById(
    "ubicacionEvento"
  );


if (
  dateContinue
) {

  dateContinue.addEventListener(

    "click",

    function () {

      goToSection(
        locationSection
      );

    }

  );


  dateContinue.addEventListener(

    "keydown",

    function (
      event
    ) {

      if (
        event.key === "Enter" ||
        event.key === " "
      ) {

        event.preventDefault();


        goToSection(
          locationSection
        );

      }

    }

  );

}

/* =========================================================
   SECCIÓN 06 → SECCIÓN 07
   ========================================================= */

const locationContinue =
  document.getElementById(
    "locationContinue"
  );


const timelineSection =
  document.getElementById(
    "itinerarioEvento"
  );


if (
  locationContinue
) {

  locationContinue.addEventListener(

    "click",

    function () {

      goToSection(
        timelineSection
      );

    }

  );


  locationContinue.addEventListener(

    "keydown",

    function (event) {

      if (
        event.key === "Enter" ||
        event.key === " "
      ) {

        event.preventDefault();

        goToSection(
          timelineSection
        );

      }

    }

  );

}

/* =========================================================
   SECCIÓN 07 · ANIMACIÓN DEL ITINERARIO
   ========================================================= */

const timeline07Section =
  document.getElementById(
    "itinerarioEvento"
  );


const timeline07Path =
  document.getElementById(
    "timeline07Path"
  );


const timeline07Progress =
  document.getElementById(
    "timeline07Progress"
  );


const timeline07Events =
  document.querySelectorAll(
    ".timeline07-event"
  );



/* =========================================================
   ACTIVAR CADA MOMENTO AL LLEGAR CON EL SCROLL
   ========================================================= */

if (
  timeline07Events.length > 0
) {

  const timeline07Observer =
    new IntersectionObserver(

      function (
        entries
      ) {

        entries.forEach(

          function (
            entry
          ) {

            if (
              entry.isIntersecting
            ) {

              entry.target
                .classList
                .add(
                  "is-active"
                );

            }

          }

        );

      },

      {
        threshold:
          0.45,

        rootMargin:
          "0px 0px -8% 0px"
      }

    );


  timeline07Events.forEach(

    function (
      event
    ) {

      timeline07Observer.observe(
        event
      );

    }

  );

}



/* =========================================================
   PROGRESO DE LA LÍNEA
   ========================================================= */

function updateTimeline07Progress() {

  if (
    !timeline07Section ||
    !timeline07Path ||
    !timeline07Progress
  ) {

    return;

  }


  const pathRect =
    timeline07Path
      .getBoundingClientRect();


  const windowHeight =
    window.innerHeight;


  /*
     Punto de activación:
     aproximadamente mitad de pantalla.
  */

  const activationPoint =
    windowHeight * 0.52;


  const travelled =
    activationPoint -
    pathRect.top;


  const total =
    pathRect.height;


  let progress =
    travelled /
    total;


  progress =
    Math.max(
      0,
      Math.min(
        1,
        progress
      )
    );


  timeline07Progress
    .style
    .height =
    `${progress * 100}%`;

}



window.addEventListener(
  "scroll",
  updateTimeline07Progress,
  {
    passive: true
  }
);


window.addEventListener(
  "resize",
  updateTimeline07Progress,
  {
    passive: true
  }
);


updateTimeline07Progress();

/* =========================================================
   SECCIÓN 07 → SECCIÓN 08
   ========================================================= */

const timelineContinue =
  document.getElementById(
    "timelineContinue"
  );


const dressCodeSection =
  document.getElementById(
    "codigoVestimenta"
  );


function goToDressCode() {

  goToSection(
    dressCodeSection
  );

}


if (
  timelineContinue
) {

  timelineContinue.addEventListener(
    "click",
    goToDressCode
  );


  timelineContinue.addEventListener(

    "keydown",

    function (event) {

      if (
        event.key === "Enter" ||
        event.key === " "
      ) {

        event.preventDefault();

        goToDressCode();

      }

    }

  );

}

/* =========================================================
   SECCIÓN 08 → SECCIÓN 09
   ========================================================= */

const dressContinue =
  document.getElementById(
    "dressContinue"
  );


const rsvpSection =
  document.getElementById(
    "confirmacionAsistencia"
  );


if (
  dressContinue
) {

  dressContinue.addEventListener(

    "click",

    function () {

      goToSection(
        rsvpSection
      );

    }

  );


  dressContinue.addEventListener(

    "keydown",

    function (event) {

      if (
        event.key === "Enter" ||
        event.key === " "
      ) {

        event.preventDefault();

        goToSection(
          rsvpSection
        );

      }

    }

  );

}

/* =========================================================
   CONFIRMACIÓN DE ASISTENCIA POR WHATSAPP
   ========================================================= */

const rsvpWhatsapp =
  document.getElementById(
    "rsvpWhatsapp"
  );


if (
  rsvpWhatsapp
) {

  rsvpWhatsapp.addEventListener(

    "click",

    function () {

      window.open(
        "https://wa.link/bss6wq",
        "_blank",
        "noopener,noreferrer"
      );

    }

  );

}

/* =========================================================
   SECCIÓN 09 → SECCIÓN 10
   ========================================================= */

const rsvpContinue =
  document.getElementById(
    "rsvpContinue"
  );


const closingSection =
  document.getElementById(
    "cierreInvitacion"
  );


function goToClosingSection() {

  goToSection(
    closingSection
  );

}


if (
  rsvpContinue
) {

  rsvpContinue.addEventListener(
    "click",
    goToClosingSection
  );


  rsvpContinue.addEventListener(

    "keydown",

    function (event) {

      if (
        event.key === "Enter" ||
        event.key === " "
      ) {

        event.preventDefault();

        goToClosingSection();

      }

    }

  );

}

/* =========================================================
   SECCIÓN 10 · VOLVER AL INICIO
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  function () {

    const backToTopButton =
      document.getElementById(
        "backToTop"
      );


    const startSection =
      document.getElementById(
        "inicio"
      );


    if (
      !backToTopButton
    ) {

      console.warn(
        "No se encontró el botón #backToTop"
      );

      return;

    }


    backToTopButton.addEventListener(
      "click",
      function () {

        /* ================================================
           PRIMERO SUBIMOS HASTA LA PORTADA
           ================================================ */

        if (
          startSection
        ) {

          startSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        } else {

          /*
            Respaldo por si no encuentra #inicio
          */

          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });

        }


        /* ================================================
           RESTAURAR PORTADA ORIGINAL
           ================================================ */

        const invitationCard =
          document.getElementById(
            "invitationCard"
          );


        const openedScreen =
          document.getElementById(
            "openedScreen"
          );


        const openingLight =
          document.getElementById(
            "openingLight"
          );


        const openInvitation =
          document.getElementById(
            "openInvitation"
          );


        /*
          Esperamos un poco para que primero
          se realice el desplazamiento.
        */

        window.setTimeout(
          function () {

            /* TARJETA INICIAL */

            if (
              invitationCard
            ) {

              invitationCard
                .classList
                .remove(
                  "exit"
                );

            }


            /* PANTALLA "DESLIZA PARA CONTINUAR" */

            if (
              openedScreen
            ) {

              openedScreen
                .classList
                .remove(
                  "active"
                );


              openedScreen.setAttribute(
                "aria-hidden",
                "true"
              );

            }


            /* FLASH DE APERTURA */

            if (
              openingLight
            ) {

              openingLight
                .classList
                .remove(
                  "active"
                );

            }


            /* REACTIVAR BOTÓN */

            if (
              openInvitation
            ) {

              openInvitation.disabled =
                false;

            }

          },

          450

        );

      }
    );

  }
);
