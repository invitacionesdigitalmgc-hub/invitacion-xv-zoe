/* =========================================================
   EFECTOS PREMIUM · XV ZOE ISHEL
   ========================================================= */

(() => {

  "use strict";


  const reducedMotion =
    window
      .matchMedia(
        "(prefers-reduced-motion: reduce)"
      )
      .matches;


  const finePointer =
    window
      .matchMedia(
        "(pointer: fine)"
      )
      .matches;



  /* =====================================================
     PARTÍCULAS
     ===================================================== */

  class SparkField {


    constructor(
      canvas
    ) {


      this.canvas =
        canvas;


      this.ctx =
        canvas.getContext(
          "2d"
        );


      this.particles =
        [];


      this.width =
        0;


      this.height =
        0;


      this.dpr =
        1;


      this.resize =
        this.resize.bind(
          this
        );


      this.animate =
        this.animate.bind(
          this
        );


      this.resize();


      window.addEventListener(

        "resize",

        this.resize,

        {
          passive: true
        }

      );


      if (
        reducedMotion
      ) {


        this.draw(
          performance.now()
        );


      } else {


        this.animate(
          performance.now()
        );


      }


    }



    resize() {


      const rect =
        this.canvas
          .getBoundingClientRect();


      this.width =
        Math.max(
          1,
          rect.width
        );


      this.height =
        Math.max(
          1,
          rect.height
        );


      this.dpr =
        Math.min(
          window.devicePixelRatio || 1,
          1.5
        );


      this.canvas.width =
        Math.round(
          this.width *
          this.dpr
        );


      this.canvas.height =
        Math.round(
          this.height *
          this.dpr
        );


      this.ctx.setTransform(

        this.dpr,
        0,
        0,
        this.dpr,
        0,
        0

      );


      const area =
        this.width *
        this.height;


      const count =
        Math.max(

          26,

          Math.min(

            72,

            Math.round(
              area /
              19000
            )

          )

        );


      this.particles =
        Array.from(

          {
            length:
              count
          },

          (
            _,
            index
          ) => ({


            x:
              Math.random() *
              this.width,


            y:
              Math.random() *
              this.height,


            size:
              0.55 +
              Math.random() *
              1.65,


            glow:
              5 +
              Math.random() *
              15,


            phase:
              Math.random() *
              Math.PI *
              2,


            speed:
              0.00065 +
              Math.random() *
              0.00125,


            driftX:
              (
                Math.random() -
                0.5
              ) *
              0.025,


            driftY:
              -0.004 -
              Math.random() *
              0.018,


            cross:
              index %
              4 ===
              0


          })

        );


    }



    draw(
      time
    ) {


      const ctx =
        this.ctx;


      ctx.clearRect(

        0,
        0,
        this.width,
        this.height

      );


      ctx.save();


      ctx.globalCompositeOperation =
        "screen";


      for (
        const p
        of this.particles
      ) {


        if (
          !reducedMotion
        ) {


          p.x +=
            p.driftX;


          p.y +=
            p.driftY;


          if (
            p.y <
            -12
          ) {


            p.y =
              this.height +
              12;


          }


          if (
            p.x <
            -12
          ) {


            p.x =
              this.width +
              12;


          }


          if (
            p.x >
            this.width +
            12
          ) {


            p.x =
              -12;


          }


        }


        const pulse =
          0.5 +
          0.5 *
          Math.sin(

            p.phase +
            time *
            p.speed

          );


        const alpha =
          0.10 +
          pulse *
          0.62;


        const radius =
          p.size *
          (
            0.75 +
            pulse *
            0.65
          );


        ctx.save();


        ctx.globalAlpha =
          alpha;


        ctx.shadowBlur =
          p.glow;


        ctx.shadowColor =
          "rgba(255,190,218,0.95)";


        ctx.fillStyle =
          "rgba(255,255,255,0.96)";


        ctx.beginPath();


        ctx.arc(

          p.x,
          p.y,
          radius,
          0,
          Math.PI *
          2

        );


        ctx.fill();



        if (
          p.cross &&
          pulse >
          0.64
        ) {


          const arm =
            4 +
            pulse *
            7;


          ctx.strokeStyle =
            `rgba(
              255,
              255,
              255,
              ${
                0.22 +
                pulse *
                0.45
              }
            )`;


          ctx.lineWidth =
            0.75;


          ctx.beginPath();


          ctx.moveTo(

            p.x -
            arm,

            p.y

          );


          ctx.lineTo(

            p.x +
            arm,

            p.y

          );


          ctx.moveTo(

            p.x,

            p.y -
            arm

          );


          ctx.lineTo(

            p.x,

            p.y +
            arm

          );


          ctx.stroke();


        }


        ctx.restore();


      }


      ctx.restore();


    }



    animate(
      time
    ) {


      if (
        !document.hidden
      ) {


        this.draw(
          time
        );


      }


      requestAnimationFrame(
        this.animate
      );


    }


  }



  document
    .querySelectorAll(
      ".ambient-canvas"
    )
    .forEach(

      (
        canvas
      ) => {


        new SparkField(
          canvas
        );


      }

    );



  /* =====================================================
     LUZ DEL PUNTERO
     ===================================================== */

  function setPointerVars(

    element,
    event,
    xVar,
    yVar

  ) {


    const rect =
      element
        .getBoundingClientRect();


    const x =
      (
        (
          event.clientX -
          rect.left
        ) /
        rect.width
      ) *
      100;


    const y =
      (
        (
          event.clientY -
          rect.top
        ) /
        rect.height
      ) *
      100;


    element.style.setProperty(

      xVar,

      `${
        Math.max(
          0,
          Math.min(
            100,
            x
          )
        )
      }%`

    );


    element.style.setProperty(

      yVar,

      `${
        Math.max(
          0,
          Math.min(
            100,
            y
          )
        )
      }%`

    );


  }



  const cover =
    document.querySelector(
      ".xv-section"
    );


  const section2 =
    document.querySelector(
      ".zoe-section"
    );


  const familySection =
    document.querySelector(
      ".family-section"
    );


  const familyPaper =
    document.querySelector(
      ".family-paper"
    );


  const card =
    document.querySelector(
      ".invitation-card"
    );



  /* =====================================================
     LUZ PORTADA
     ===================================================== */

  if (
    cover
  ) {


    cover.addEventListener(

      "pointermove",

      (
        event
      ) => {


        setPointerVars(

          cover,
          event,
          "--fx-x",
          "--fx-y"

        );


      },

      {
        passive:
          true
      }

    );


  }



  /* =====================================================
     LUZ SECCIÓN 02
     ===================================================== */

  if (
    section2
  ) {


    section2.addEventListener(

      "pointermove",

      (
        event
      ) => {


        setPointerVars(

          section2,
          event,
          "--section2-x",
          "--section2-y"

        );


      },

      {
        passive:
          true
      }

    );


  }



  /* =====================================================
     LUZ SECCIÓN 03
     ===================================================== */

  if (
    familySection
  ) {


    familySection.addEventListener(

      "pointermove",

      (
        event
      ) => {


        setPointerVars(

          familySection,
          event,
          "--family-x",
          "--family-y"

        );


      },

      {
        passive:
          true
      }

    );


  }



  /* =====================================================
     PORTADA · EFECTO 3D
     ===================================================== */

  if (
    card &&
    finePointer &&
    !reducedMotion
  ) {


    card.addEventListener(

      "pointermove",

      (
        event
      ) => {


        const rect =
          card
            .getBoundingClientRect();


        const px =
          (
            event.clientX -
            rect.left
          ) /
          rect.width;


        const py =
          (
            event.clientY -
            rect.top
          ) /
          rect.height;


        const rotateY =
          (
            px -
            0.5
          ) *
          4.2;


        const rotateX =
          (
            0.5 -
            py
          ) *
          3;


        card.style.setProperty(

          "--card-x",

          `${
            px *
            100
          }%`

        );


        card.style.setProperty(

          "--card-y",

          `${
            py *
            100
          }%`

        );


        card.style.transform =
          `perspective(1200px)
           rotateX(${rotateX}deg)
           rotateY(${rotateY}deg)
           translateY(-1px)`;


        card.classList.add(
          "fx-hover"
        );


      }

    );


    card.addEventListener(

      "pointerleave",

      () => {


        card.style.setProperty(

          "--card-x",
          "50%"

        );


        card.style.setProperty(

          "--card-y",
          "35%"

        );


        card.style.transform =
          "perspective(1200px) rotateX(0deg) rotateY(0deg)";


        card.classList.remove(
          "fx-hover"
        );


      }

    );


  }



  /* =====================================================
     MARCO FLORAL · EFECTO 3D
     ===================================================== */

  if (
    familyPaper &&
    finePointer &&
    !reducedMotion
  ) {


    familyPaper.addEventListener(

      "pointermove",

      (
        event
      ) => {


        const rect =
          familyPaper
            .getBoundingClientRect();


        const px =
          (
            event.clientX -
            rect.left
          ) /
          rect.width;


        const py =
          (
            event.clientY -
            rect.top
          ) /
          rect.height;


        const rotateY =
          (
            px -
            0.5
          ) *
          2.1;


        const rotateX =
          (
            0.5 -
            py
          ) *
          1.4;


        familyPaper.style.setProperty(

          "--paper-x",

          `${
            px *
            100
          }%`

        );


        familyPaper.style.setProperty(

          "--paper-y",

          `${
            py *
            100
          }%`

        );


        familyPaper.style.transform =
          `perspective(1500px)
           rotateX(${rotateX}deg)
           rotateY(${rotateY}deg)`;


        familyPaper.classList.add(
          "fx-family-hover"
        );


      }

    );


    familyPaper.addEventListener(

      "pointerleave",

      () => {


        familyPaper.style.setProperty(

          "--paper-x",
          "50%"

        );


        familyPaper.style.setProperty(

          "--paper-y",
          "38%"

        );


        familyPaper.style.transform =
          "perspective(1500px) rotateX(0deg) rotateY(0deg)";


        familyPaper.classList.remove(
          "fx-family-hover"
        );


      }

    );


  }



  /* =====================================================
     ENTRADAS AL HACER SCROLL
     ===================================================== */

  const revealTargets = [

    ".section2-small",

    ".section2-title",

    ".section2-name",

    ".section2-divider",

    ".princess-area",

    ".phrase-card",

    ".section2-continue",

    ".family-reveal"

  ];



  const revealNodes =
    revealTargets
      .flatMap(

        (
          selector
        ) =>

          Array.from(

            document
              .querySelectorAll(
                selector
              )

          )

      );



  revealNodes.forEach(

    (
      node,
      index
    ) => {


      /*
       * Las secciones anteriores usan fx-reveal.
       * Los elementos de familia ya usan family-reveal.
       */

      if (
        !node.classList.contains(
          "family-reveal"
        )
      ) {


        node.classList.add(
          "fx-reveal"
        );


      }


      node.style.setProperty(

        "--fx-delay",

        `${
          Math.min(
            index *
            90,
            480
          )
        }ms`

      );


    }

  );



  if (
    "IntersectionObserver" in window &&
    !reducedMotion
  ) {


    const observer =
      new IntersectionObserver(

        (
          entries,
          obs
        ) => {


          entries.forEach(

            (
              entry
            ) => {


              if (
                !entry.isIntersecting
              ) {


                return;


              }


              entry.target
                .classList
                .add(
                  "is-visible"
                );


              obs.unobserve(
                entry.target
              );


            }

          );


        },

        {

          threshold:
            0.16,

          rootMargin:
            "0px 0px -6% 0px"

        }

      );



    revealNodes.forEach(

      (
        node
      ) => {


        observer.observe(
          node
        );


      }

    );


  } else {


    revealNodes.forEach(

      (
        node
      ) => {


        node
          .classList
          .add(
            "is-visible"
          );


      }

    );


  }



  /* =====================================================
     EXPLOSIÓN DE LUZ AL ABRIR
     ===================================================== */

  function createBurst(
    x,
    y
  ) {


    if (
      reducedMotion
    ) {


      return;


    }


    const burst =
      document.createElement(
        "div"
      );


    burst.className =
      "fx-click-burst";


    burst.style.left =
      `${x}px`;


    burst.style.top =
      `${y}px`;


    const total =
      18;


    for (
      let i = 0;
      i < total;
      i += 1
    ) {


      const particle =
        document.createElement(
          "span"
        );


      const angle =
        (
          Math.PI *
          2 *
          i
        ) /
        total +
        (
          i %
          2
        ) *
        0.09;


      const distance =
        54 +
        (
          i %
          5
        ) *
        14;


      const size =
        3 +
        (
          i %
          4
        ) *
        1.35;


      particle.style.setProperty(

        "--dx",

        `${
          Math.cos(
            angle
          ) *
          distance
        }px`

      );


      particle.style.setProperty(

        "--dy",

        `${
          Math.sin(
            angle
          ) *
          distance
        }px`

      );


      particle.style.setProperty(

        "--s",

        `${size}px`

      );


      particle.style.animationDelay =
        `${
          (
            i %
            4
          ) *
          18
        }ms`;


      burst.appendChild(
        particle
      );


    }


    document.body.appendChild(
      burst
    );


    window.setTimeout(

      () => {


        burst.remove();


      },

      1050

    );


  }



  const openButton =
    document.getElementById(
      "openInvitation"
    );


  if (
    openButton
  ) {


    openButton.addEventListener(

      "pointerdown",

      (
        event
      ) => {


        createBurst(

          event.clientX,
          event.clientY

        );


      },

      {
        passive:
          true
      }

    );


    openButton.addEventListener(

      "click",

      () => {


        if (
          card
        ) {


          card.style.transform =
            "";


          card.classList.remove(
            "fx-hover"
          );


        }


      }

    );


  }


  /* =====================================================
   SECCIÓN 03 · FAMILIA PREMIUM
   ===================================================== */

const familyPremiumSection =
  document.querySelector(
    ".family-section"
  );


const familyPremiumPaper =
  document.querySelector(
    ".family-paper"
  );


/* =====================================================
   LUZ DEL PUNTERO
   ===================================================== */

if (
  familyPremiumPaper
) {

  familyPremiumPaper.addEventListener(

    "pointermove",

    function (event) {

      const rect =
        familyPremiumPaper
          .getBoundingClientRect();


      const x =
        (
          (
            event.clientX -
            rect.left
          ) /
          rect.width
        ) *
        100;


      const y =
        (
          (
            event.clientY -
            rect.top
          ) /
          rect.height
        ) *
        100;


      familyPremiumPaper
        .style
        .setProperty(
          "--paper-x",
          `${x}%`
        );


      familyPremiumPaper
        .style
        .setProperty(
          "--paper-y",
          `${y}%`
        );

    },

    {
      passive: true
    }

  );

}


/* =====================================================
   PARALLAX 3D MUY SUTIL
   SOLO COMPUTADORA
   ===================================================== */

if (
  familyPremiumPaper &&
  finePointer &&
  !reducedMotion
) {

  familyPremiumPaper.addEventListener(

    "pointermove",

    function (event) {

      const rect =
        familyPremiumPaper
          .getBoundingClientRect();


      const px =
        (
          event.clientX -
          rect.left
        ) /
        rect.width;


      const py =
        (
          event.clientY -
          rect.top
        ) /
        rect.height;


      const rotateY =
        (
          px -
          0.5
        ) *
        1.8;


      const rotateX =
        (
          0.5 -
          py
        ) *
        1.15;


      familyPremiumPaper.style.transform =
        `
        perspective(1500px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        `;

    }

  );


  familyPremiumPaper.addEventListener(

    "pointerleave",

    function () {

      familyPremiumPaper.style.transform =
        `
        perspective(1500px)
        rotateX(0deg)
        rotateY(0deg)
        `;

    }

  );

}


/* =====================================================
   REVEAL PROGRESIVO
   ===================================================== */

const familyPremiumReveal =
  Array.from(
    document.querySelectorAll(
      ".family-reveal"
    )
  );


familyPremiumReveal.forEach(

  function (
    element,
    index
  ) {

    element.style.setProperty(

      "--fx-delay",

      `${index * 130}ms`

    );

  }

);


if (
  "IntersectionObserver" in window &&
  !reducedMotion
) {

  const familyObserver =
    new IntersectionObserver(

      function (
        entries,
        observer
      ) {

        entries.forEach(

          function (
            entry
          ) {

            if (
              !entry.isIntersecting
            ) {
              return;
            }


            entry.target
              .classList
              .add(
                "is-visible"
              );


            observer.unobserve(
              entry.target
            );

          }

        );

      },

      {
        threshold:
          0.18,

        rootMargin:
          "0px 0px -5% 0px"
      }

    );


  familyPremiumReveal.forEach(

    function (
      element
    ) {

      familyObserver.observe(
        element
      );

    }

  );

} else {

  familyPremiumReveal.forEach(

    function (
      element
    ) {

      element
        .classList
        .add(
          "is-visible"
        );

    }

  );

}

})();

/* =========================================================
   SECCIÓN 04 · MENSAJE ESPECIAL
   ========================================================= */

(() => {

  "use strict";


  const reducedMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;


  const messageElements =
    Array.from(
      document.querySelectorAll(
        ".message-reveal"
      )
    );


  messageElements.forEach(

    function (
      element,
      index
    ) {

      element.style.setProperty(

        "--message-delay",

        `${index * 125}ms`

      );

    }

  );


  if (
    "IntersectionObserver" in window &&
    !reducedMotion
  ) {

    const messageObserver =
      new IntersectionObserver(

        function (
          entries,
          observer
        ) {

          entries.forEach(

            function (
              entry
            ) {

              if (
                !entry.isIntersecting
              ) {
                return;
              }


              entry.target
                .classList
                .add(
                  "is-visible"
                );


              observer.unobserve(
                entry.target
              );

            }

          );

        },

        {
          threshold:
            0.16,

          rootMargin:
            "0px 0px -5% 0px"
        }

      );


    messageElements.forEach(

      function (
        element
      ) {

        messageObserver.observe(
          element
        );

      }

    );

  } else {

    messageElements.forEach(

      function (
        element
      ) {

        element.classList.add(
          "is-visible"
        );

      }

    );

  }

})();

/* =========================================================
   MESSAGE SECTION · LIGHT FOLLOW
   ========================================================= */

const messageSection = document.getElementById("mensaje");

if (messageSection) {
  messageSection.addEventListener("pointermove", function (event) {
    const rect = messageSection.getBoundingClientRect();

    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    messageSection.style.setProperty("--message-x", `${x}%`);
    messageSection.style.setProperty("--message-y", `${y}%`);
  });
}