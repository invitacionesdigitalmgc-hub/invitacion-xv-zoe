/* =========================================================
   XV AÑOS · ZOE ISHEL
   SCRIPT PRINCIPAL
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  function () {

    "use strict";


    /* =====================================================
       CONFIGURACIÓN
       ===================================================== */

    const AUDIO_URL =
      "https://static.wixstatic.com/mp3/053330_213a352ebd5245a2b647686638bfda10.mp3";


    const EVENT_DATE =
      new Date(
        "2026-12-19T16:30:00-06:00"
      );


    /* =====================================================
       ELEMENTOS PRINCIPALES
       ===================================================== */

    const openButton =
      document.getElementById(
        "openInvitation"
      );


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

      const openingMagic =
  document.getElementById("openingMagic");

    const nextContent =
      document.getElementById(
        "nextContent"
      );


    const scrollIndicator =
      document.getElementById(
        "scrollIndicator"
      );


    /* =====================================================
       SECCIONES
       ===================================================== */

    const startSection =
      document.getElementById(
        "inicio"
      );


    const presentationSection =
      document.getElementById(
        "presentacion"
      );


    const familySection =
      document.getElementById(
        "familia"
      );


    const dateSection =
      document.getElementById(
        "fechaEvento"
      );


    const locationSection =
      document.getElementById(
        "ubicacionEvento"
      );


    const timelineSection =
      document.getElementById(
        "itinerarioEvento"
      );


    const dressCodeSection =
      document.getElementById(
        "codigoVestimenta"
      );


    const rsvpSection =
      document.getElementById(
        "confirmacionAsistencia"
      );


    const closingSection =
      document.getElementById(
        "cierreInvitacion"
      );


    /* =====================================================
       BOTONES CONTINUAR
       ===================================================== */

    const section2Continue =
      document.getElementById(
        "section2Continue"
      );


    const messageContinue =
      document.getElementById(
        "messageContinue"
      );


    const dateContinue =
      document.getElementById(
        "dateContinue"
      );


    const locationContinue =
      document.getElementById(
        "locationContinue"
      );


    const timelineContinue =
      document.getElementById(
        "timelineContinue"
      );


    const dressContinue =
      document.getElementById(
        "dressContinue"
      );


    const rsvpContinue =
      document.getElementById(
        "rsvpContinue"
      );


    const backToTop =
      document.getElementById(
        "backToTop"
      );


    /* =====================================================
       COUNTDOWN
       ===================================================== */

    const countdownDays =
      document.getElementById(
        "countdownDays"
      );


    const countdownHours =
      document.getElementById(
        "countdownHours"
      );


    const countdownMinutes =
      document.getElementById(
        "countdownMinutes"
      );


    const countdownSeconds =
      document.getElementById(
        "countdownSeconds"
      );


    const countdownFinished =
      document.getElementById(
        "countdownFinished"
      );


    /* =====================================================
       ITINERARIO
       ===================================================== */

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


    /* =====================================================
       VARIABLES
       ===================================================== */

    let music = null;

    let invitationOpened = false;

    let countdownInterval = null;


    /* =====================================================
       FUNCIÓN GENERAL DE SCROLL
       ===================================================== */

    function goToSection(
      section
    ) {

      if (
        !section
      ) {

        return;

      }


      section.scrollIntoView({

        behavior:
          "smooth",

        block:
          "start"

      });

    }


    /* =====================================================
       BOTÓN ACCESIBLE
       Click + Enter + Espacio
       ===================================================== */

    function addAccessibleNavigation(
      element,
      destination
    ) {

      if (
        !element
      ) {

        return;

      }


      function navigate() {

        goToSection(
          destination
        );

      }


      element.addEventListener(
        "click",
        navigate
      );


      element.addEventListener(

        "keydown",

        function (
          event
        ) {

          if (
            event.key === "Enter" ||
            event.key === " "
          ) {

            event.preventDefault();

            navigate();

          }

        }

      );

    }


    /* =====================================================
       HABILITAR SCROLL
       CORRECCIÓN PARA MÓVIL
       ===================================================== */

    function enablePageScroll() {

      /*
        CLASES CSS
      */

      document.documentElement
        .classList
        .add(
          "invitation-open"
        );


      document.body
        .classList
        .add(
          "invitation-open"
        );


      /*
        REFUERZO DIRECTO PARA
        CHROME / SAFARI MÓVIL
      */

      document.documentElement.style.overflowX =
        "hidden";

      document.documentElement.style.overflowY =
        "auto";

      document.documentElement.style.height =
        "auto";

      document.documentElement.style.minHeight =
        "100%";

      document.documentElement.style.touchAction =
        "pan-y";


      document.body.style.overflowX =
        "hidden";

      document.body.style.overflowY =
        "auto";

      document.body.style.height =
        "auto";

      document.body.style.minHeight =
        "100%";

      document.body.style.touchAction =
        "pan-y";

      document.body.style.webkitOverflowScrolling =
        "touch";

    }


    /* =====================================================
       MÚSICA
       ===================================================== */

    function startMusic() {

      if (
        !AUDIO_URL.trim()
      ) {

        return;

      }


      /*
        Si ya existe el audio,
        solamente lo reanudamos.
      */

      if (
        music
      ) {

        music
          .play()
          .catch(
            function () {

              console.log(
                "No fue posible reanudar el audio."
              );

            }
          );

        return;

      }


      /*
        Crear audio solamente una vez.
      */

      music =
        new Audio(
          AUDIO_URL
        );


      music.loop =
        true;


      music.volume =
        0.55;


      music
        .play()
        .catch(
          function () {

            console.log(
              "No fue posible iniciar el audio."
            );

          }
        );

    }


    /* =====================================================
       ABRIR INVITACIÓN
       ===================================================== */

    /* =========================================================
   BRILLITOS DE APERTURA
   ========================================================= */

function createOpeningMagic() {

  if (!openingMagic) {
    return;
  }


  /*
     Limpiamos cualquier brillo anterior.
  */

  openingMagic.innerHTML = "";


  openingMagic.classList.remove(
    "is-active"
  );


  void openingMagic.offsetWidth;


  openingMagic.classList.add(
    "is-active"
  );


  /*
     Usamos pocos elementos para mantener
     buen rendimiento en celulares.
  */

  const isMobile =
    window.matchMedia(
      "(max-width: 600px)"
    ).matches;


  const sparkCount =
    isMobile
      ? 13
      : 20;


  for (
    let i = 0;
    i < sparkCount;
    i++
  ) {

    const spark =
      document.createElement(
        "span"
      );


    spark.className =
      "opening-magic-spark";


    /*
       Repartimos los brillos
       alrededor del centro.
    */

    const angle =
      (
        Math.PI *
        2 *
        i
      ) /
      sparkCount;


    const variation =
      Math.random() *
      0.45 -
      0.225;


    const finalAngle =
      angle +
      variation;


    const distance =
      isMobile

        ? 85 +
          Math.random() *
          125

        : 110 +
          Math.random() *
          210;


    const moveX =
      Math.cos(
        finalAngle
      ) *
      distance;


    const moveY =
      Math.sin(
        finalAngle
      ) *
      distance;


    const size =
      isMobile

        ? 7 +
          Math.random() *
          8

        : 8 +
          Math.random() *
          11;


    const scale =
      0.75 +
      Math.random() *
      0.65;


    const rotation =
      Math.round(
        Math.random() *
        180
      );


    const delay =
      Math.random() *
      0.16;


    spark.style.setProperty(
      "--spark-x",
      moveX + "px"
    );


    spark.style.setProperty(
      "--spark-y",
      moveY + "px"
    );


    spark.style.setProperty(
      "--spark-size",
      size + "px"
    );


    spark.style.setProperty(
      "--spark-scale",
      scale
    );


    spark.style.setProperty(
      "--spark-rotation",
      rotation + "deg"
    );


    spark.style.setProperty(
      "--spark-delay",
      delay + "s"
    );


    const center =
      document.createElement(
        "span"
      );


    spark.appendChild(
      center
    );


    openingMagic.appendChild(
      spark
    );

  }


  /*
     Los eliminamos una vez finalizada
     la animación. Así no consumen recursos.
  */

  window.setTimeout(
    function () {

      openingMagic.innerHTML = "";

      openingMagic.classList.remove(
        "is-active"
      );

    },

    1750
  );

}
    
       function openInvitation() {

      /*
        Evitamos abrirla dos veces.
      */

      if (
        invitationOpened
      ) {

        return;

      }


      invitationOpened =
        true;


      /* ===============================================
         DESACTIVAR BOTÓN
         =============================================== */

      if (openButton) {

  /*
     Quitamos el foco visual del botón
     después de presionarlo.
  */

  openButton.blur();

  openButton.disabled = true;

}


      /* ===============================================
         SALIDA DE TARJETA
         =============================================== */

      if (invitationCard) {

  invitationCard.classList.add(
    "exit"
  );

}


/*
   Ráfaga de destellos al abrir.
*/

createOpeningMagic();


if (openingLight) {

  openingLight.classList.remove(
    "active"
  );

  void openingLight.offsetWidth;

  openingLight.classList.add(
    "active"
  );

}


      /* ===============================================
         DESTELLO
         =============================================== */

      if (
        openingLight
      ) {

        openingLight
          .classList
          .remove(
            "active"
          );


        /*
          Fuerza reinicio de animación.
        */

        void openingLight.offsetWidth;


        openingLight
          .classList
          .add(
            "active"
          );

      }


      /* ===============================================
         MÚSICA
         =============================================== */

      startMusic();


      /* ===============================================
         PANTALLA ZOE ISHEL
         =============================================== */

      window.setTimeout(

        function () {

          if (
            !openedScreen
          ) {

            return;

          }


          openedScreen
            .classList
            .add(
              "active"
            );


          openedScreen
            .setAttribute(
              "aria-hidden",
              "false"
            );

        },

        500

      );


      /* ===============================================
         MOSTRAR RESTO DE LA INVITACIÓN
         =============================================== */

      window.setTimeout(

        function () {

          if (
            nextContent
          ) {

            nextContent
              .classList
              .add(
                "visible"
              );

          }


          /*
            IMPORTANTE:
            habilitamos el desplazamiento
            para dispositivos móviles.
          */

          enablePageScroll();


          /*
            Actualizamos el timeline
            porque ahora ya existe dentro
            del layout visible.
          */

          window.setTimeout(
            updateTimeline07Progress,
            100
          );

        },

        1700

      );

    }


    /* =====================================================
       BOTÓN "ABRIR INVITACIÓN"
       ===================================================== */

    if (
      openButton
    ) {

      openButton.addEventListener(

        "click",

        function (
          event
        ) {

          event.preventDefault();

          openInvitation();

        }

      );

    }


    /* =====================================================
       PORTADA ABIERTA → SECCIÓN 02
       ===================================================== */

    function goToPresentation() {

      if (
        !nextContent ||
        !nextContent
          .classList
          .contains(
            "visible"
          )
      ) {

        return;

      }


      goToSection(
        presentationSection
      );

    }


    if (
      scrollIndicator
    ) {

      scrollIndicator.addEventListener(
        "click",
        goToPresentation
      );


      scrollIndicator.addEventListener(

        "keydown",

        function (
          event
        ) {

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


    /* =====================================================
       SECCIÓN 02 → SECCIÓN 03
       ===================================================== */

    addAccessibleNavigation(
      section2Continue,
      familySection
    );


    /*
      La Sección 03 no tiene actualmente
      un botón "Continúa".

      Se puede seguir desplazando
      naturalmente hacia la Sección 04.
    */


    /* =====================================================
       SECCIÓN 04 → SECCIÓN 05
       ===================================================== */

    addAccessibleNavigation(
      messageContinue,
      dateSection
    );


    /* =====================================================
       SECCIÓN 05 → SECCIÓN 06
       ===================================================== */

    addAccessibleNavigation(
      dateContinue,
      locationSection
    );


    /* =====================================================
       SECCIÓN 06 → SECCIÓN 07
       ===================================================== */

    addAccessibleNavigation(
      locationContinue,
      timelineSection
    );


    /* =====================================================
       SECCIÓN 07 → SECCIÓN 08
       ===================================================== */

    addAccessibleNavigation(
      timelineContinue,
      dressCodeSection
    );


    /* =====================================================
       SECCIÓN 08 → SECCIÓN 09
       ===================================================== */

    addAccessibleNavigation(
      dressContinue,
      rsvpSection
    );


    /* =====================================================
       SECCIÓN 09 → SECCIÓN 10
       ===================================================== */

    addAccessibleNavigation(
      rsvpContinue,
      closingSection
    );


    /* =====================================================
       CUENTA REGRESIVA
       ===================================================== */

    function formatCountdownNumber(
      number
    ) {

      return String(
        number
      ).padStart(
        2,
        "0"
      );

    }


    function resetCountdown() {

      if (
        countdownDays
      ) {

        countdownDays.textContent =
          "00";

      }


      if (
        countdownHours
      ) {

        countdownHours.textContent =
          "00";

      }


      if (
        countdownMinutes
      ) {

        countdownMinutes.textContent =
          "00";

      }


      if (
        countdownSeconds
      ) {

        countdownSeconds.textContent =
          "00";

      }

    }


    function updateCountdown() {

      const now =
        new Date();


      const distance =
        EVENT_DATE.getTime() -
        now.getTime();


      /* ===============================================
         EVENTO FINALIZADO
         =============================================== */

      if (
        distance <= 0
      ) {

        resetCountdown();


        if (
          countdownFinished
        ) {

          countdownFinished.textContent =
            "¡Llegó el gran día!";

        }


        if (
          countdownInterval
        ) {

          window.clearInterval(
            countdownInterval
          );


          countdownInterval =
            null;

        }


        return;

      }


      /* ===============================================
         CÁLCULOS
         =============================================== */

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


      /* ===============================================
         MOSTRAR DATOS
         =============================================== */

      if (
        countdownDays
      ) {

        countdownDays.textContent =
          String(
            days
          );

      }


      if (
        countdownHours
      ) {

        countdownHours.textContent =
          formatCountdownNumber(
            hours
          );

      }


      if (
        countdownMinutes
      ) {

        countdownMinutes.textContent =
          formatCountdownNumber(
            minutes
          );

      }


      if (
        countdownSeconds
      ) {

        countdownSeconds.textContent =
          formatCountdownNumber(
            seconds
          );

      }


      if (
        countdownFinished
      ) {

        countdownFinished.textContent =
          "";

      }

    }


    /* =====================================================
       INICIAR CUENTA REGRESIVA
       ===================================================== */

    const countdownExists =
      countdownDays ||
      countdownHours ||
      countdownMinutes ||
      countdownSeconds;


    if (
      countdownExists
    ) {

      updateCountdown();


      countdownInterval =
        window.setInterval(
          updateCountdown,
          1000
        );

    }


    /* =====================================================
       ITINERARIO
       ACTIVAR EVENTOS AL HACER SCROLL
       ===================================================== */

    if (
      timeline07Events.length > 0
    ) {

      if (
        "IntersectionObserver" in window
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

            timeline07Observer
              .observe(
                event
              );

          }

        );

      } else {

        /*
          Respaldo para navegadores antiguos.
        */

        timeline07Events.forEach(

          function (
            event
          ) {

            event
              .classList
              .add(
                "is-active"
              );

          }

        );

      }

    }


    /* =====================================================
       PROGRESO DE LA LÍNEA DEL ITINERARIO
       ===================================================== */

    function updateTimeline07Progress() {

      if (
        !timelineSection ||
        !timeline07Path ||
        !timeline07Progress
      ) {

        return;

      }


      const pathRect =
        timeline07Path
          .getBoundingClientRect();


      /*
        Evitamos división entre cero.
      */

      if (
        pathRect.height <= 0
      ) {

        return;

      }


      const activationPoint =
        window.innerHeight *
        0.52;


      const travelled =
        activationPoint -
        pathRect.top;


      let progress =
        travelled /
        pathRect.height;


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
        passive:
          true
      }

    );


    window.addEventListener(

      "resize",

      updateTimeline07Progress,

      {
        passive:
          true
      }

    );


    /* =====================================================
       VOLVER AL INICIO
       ===================================================== */

    if (
      backToTop
    ) {

      backToTop.addEventListener(

        "click",

        function () {

          /* =============================================
             SUBIR A LA PORTADA
             ============================================= */

          if (
            startSection
          ) {

            startSection.scrollIntoView({

              behavior:
                "smooth",

              block:
                "start"

            });

          } else {

            window.scrollTo({

              top:
                0,

              behavior:
                "smooth"

            });

          }


          /* =============================================
             RESTAURAR PORTADA
             ============================================= */

          window.setTimeout(

            function () {

              invitationOpened =
                false;


              if (
                invitationCard
              ) {

                invitationCard
                  .classList
                  .remove(
                    "exit"
                  );

              }


              if (
                openedScreen
              ) {

                openedScreen
                  .classList
                  .remove(
                    "active"
                  );


                openedScreen
                  .setAttribute(
                    "aria-hidden",
                    "true"
                  );

              }


              if (
                openingLight
              ) {

                openingLight
                  .classList
                  .remove(
                    "active"
                  );

              }


              if (
                openButton
              ) {

                openButton.disabled =
                  false;

              }


              /*
                Ocultamos nuevamente
                las demás secciones.
              */

              if (
                nextContent
              ) {

                nextContent
                  .classList
                  .remove(
                    "visible"
                  );

              }


              /*
                Quitamos la clase visual
                de invitación abierta.
              */

              document.documentElement
                .classList
                .remove(
                  "invitation-open"
                );


              document.body
                .classList
                .remove(
                  "invitation-open"
                );


              /*
                Dejamos preparado el scroll
                para una segunda apertura.
              */

              document.documentElement
                .style
                .overflowY =
                "auto";


              document.body
                .style
                .overflowY =
                "auto";


              document.documentElement
                .style
                .touchAction =
                "pan-y";


              document.body
                .style
                .touchAction =
                "pan-y";


              /*
                Volvemos exactamente arriba.
              */

              window.scrollTo(
                0,
                0
              );

            },

            800

          );

        }

      );

    }


    /* =====================================================
       ESTADO INICIAL
       ===================================================== */

    /*
      Permitimos gestos verticales desde
      el comienzo.

      nextContent permanece oculto hasta
      abrir la invitación, por lo que no
      muestra anticipadamente las secciones.
    */

    document.documentElement.style.touchAction =
      "pan-y";

    document.body.style.touchAction =
      "pan-y";


    /* =====================================================
       CONTROL
       ===================================================== */

    console.log(
      "XV Zoe Ishel · script.js cargado correctamente."
    );

  }
);
