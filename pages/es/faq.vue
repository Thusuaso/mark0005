<template>
  <div class="container m-auto">
    <div class="row" v-if="!isMobile">
      <div class="col-6">
        <h1 class="header mb-2">PREGUNTAS FRECUENTES</h1>
        <h5 class="subheader_faq">
          <b
            >P: ¿Cuáles son las principales diferencias entre travertino, mármol
            y piedra caliza?</b
          >
        </h5>
        <ul class="description_font" style="margin: 0px">
          <li>
            <b>Travertino</b>: Conocido por sus agujeros y poros naturales,
            ofrece un aspecto rústico.
          </li>
          <li>
            <b>Mármol</b>: Pulido y elegante, a menudo presenta vetas y un
            acabado brillante.
          </li>
          <li>
            <b>Caliza</b>: Más suave con un acabado mate, que proporciona una
            apariencia más natural y discreta.
          </li>
        </ul>

        <h5 class="subheader_faq">
          <b>P: ¿Son estos azulejos aptos para uso en exteriores?</b>
        </h5>
        <ul class="description_font">
          <li>
            Sí, los tres tipos se pueden utilizar en exteriores, pero su
            idoneidad depende del acabado y del clima. El travertino y la piedra
            caliza son populares para patios y terrazas de piscinas debido a sus
            propiedades antideslizantes cuando no están pulidas.
          </li>
        </ul>

        <h5 class="subheader_faq">
          <b>P: ¿Qué tan duraderas son estas baldosas?</b>
        </h5>
        <ul class="description_font">
          <li>
            El mármol es el más duro y duradero, seguido del travertino y la
            piedra caliza. Sin embargo, todos requieren un sellado adecuado para
            mantener su apariencia y longevidad.
          </li>
        </ul>
        <h5 class="subheader_faq">
          <b>P: ¿Es necesario sellar estas baldosas?</b>
        </h5>
        <ul class="description_font">
          <li>
            Sí, se recomienda sellar los tres tipos para evitar manchas y
            mantener su belleza natural, especialmente en áreas con mucha
            humedad o mucho tráfico.
          </li>
        </ul>
        <h5 class="subheader_faq">
          <b>P: ¿Cómo limpio y mantengo estos azulejos?</b>
        </h5>
        <ul class="description_font" style="margin: 0px">
          <li>Utilice un limpiador con pH neutro.</li>
          <li>
            Evite los limpiadores ácidos o abrasivos ya que pueden dañar la
            piedra.
          </li>
          <li>
            Se recomienda volver a sellar periódicamente para proteger las
            baldosas.
          </li>
        </ul>
        <h5 class="subheader_faq"><b>P: ¿Son estos azulejos ecológicos?</b></h5>
        <ul class="description_font">
          <li>
            Sí, el travertino, el mármol y la piedra caliza son piedras
            naturales con un impacto ambiental mínimo durante su extracción y
            producción.
          </li>
        </ul>
        <h5 class="subheader_faq">
          <b
            >P: ¿Se pueden utilizar estas baldosas con calefacción por suelo
            radiante?</b
          >
        </h5>
        <ul class="description_font">
          <li>
            Sí, son excelentes conductores de calor y funcionan bien con
            sistemas de calefacción por suelo radiante.
          </li>
        </ul>
        <h5 class="subheader_faq">
          <b>P: ¿Estas baldosas son resbaladizas cuando están mojadas?</b>
        </h5>
        <ul class="description_font">
          <li>
            El mármol pulido puede ser resbaladizo cuando está mojado, mientras
            que los acabados pulidos o texturizados de travertino y piedra
            caliza ofrecen una mejor resistencia al deslizamiento.
          </li>
        </ul>
        <h5 class="subheader_faq">
          <b>P: ¿Cuáles son las opciones de color disponibles?</b>
        </h5>
        <ul class="description_font" style="margin: 0px">
          <li><b>Travertino:</b> Earthy tones like beige, tan, and cream.</li>
          <li>
            <b>Mármol:</b> Classic whites, greys, blacks, and sometimes greens
            or reds.
          </li>
          <li><b>Caliza:</b> Tonos neutros de beige, gris y blancos suaves.</li>
        </ul>
        <h5 class="subheader_faq">
          <b>P: ¿Cómo elijo el mosaico adecuado para mi proyecto?</b>
        </h5>
        <ul class="description_font">
          <li>
            Considere la ubicación, las preferencias de diseño, la durabilidad y
            los requisitos de mantenimiento. Para obtener ayuda, consulte a los
            expertos de Mekmar para obtener asesoramiento personalizado.
          </li>
        </ul>
        <h5 class="subheader_faq"><b>P: ¿Son caras estas baldosas?</b></h5>
        <ul class="description_font">
          <li>
            Los precios varían según el tipo de piedra, la calidad y el acabado.
            El mármol tiende a ser el más caro, seguido del travertino y la
            piedra caliza.
          </li>
        </ul>
        <h5 class="subheader_faq">
          <b>P: ¿Se pueden utilizar estos azulejos en los baños?</b>
        </h5>
        <ul class="description_font">
          <li>
            Sí, son ideales para baños, pero requieren un sellado adecuado para
            resistir la humedad y las manchas.
          </li>
        </ul>
        <h5 class="subheader_faq"><b>Baldosas</b></h5>
        <ul style="margin: 0px" class="description_font">
          <h5 class="subheader_faq">
            <b
              >P: ¿Son estos mosaicos adecuados para áreas de mucho tránsito?</b
            >
          </h5>
          <ul class="description_font_2">
            <li>
              Sí, el mármol y el travertino son excelentes para áreas de mucho
              tráfico si se sellan adecuadamente. La piedra caliza es más
              adecuada para zonas de tráfico moderado debido a su naturaleza más
              blanda.
            </li>
          </ul>
          <h5 class="subheader_faq">
            <b
              >P: ¿Puedo usar travertino, mármol o piedra caliza para pisos con
              calefacción?</b
            >
          </h5>
          <ul class="description_font_2">
            <li>
              Sí, son excelentes conductores del calor y combinan bien con los
              sistemas de calefacción por suelo radiante.
            </li>
          </ul>
          <h5 class="subheader_faq">
            <b>P: ¿Son estos azulejos resistentes a los rayones?</b>
          </h5>
          <ul class="description_font_2">
            <li>
              El mármol es más resistente a los rayones que el travertino o la
              piedra caliza, pero todos pueden rayarse si se exponen a
              materiales abrasivos.
            </li>
          </ul>
        </ul>
        <h5 class="subheader_faq"><b>Azulejos para fachadas y paredes</b></h5>
        <ul style="margin: 0px" class="description_font">
          <h5 class="subheader_faq">
            <b
              >P: ¿Se puede utilizar travertino, mármol o piedra caliza para
              fachadas?</b
            >
          </h5>
          <ul class="description_font_2">
            <li>
              Sí, se utilizan habitualmente para fachadas. El mármol ofrece una
              apariencia lujosa, el travertino agrega textura y la piedra caliza
              brinda una sensación natural y atemporal.
            </li>
          </ul>
          <h5 class="subheader_faq">
            <b>P: ¿Estos azulejos son buenos para paredes decorativas?</b>
          </h5>
          <ul class="description_font_2">
            <li>
              ¡Absolutamente! Las paredes decorativas de mármol crean una
              declaración, mientras que el travertino y la piedra caliza añaden
              calidez y textura.
            </li>
          </ul>
          <h5 class="subheader_faq">
            <b
              >P: ¿Estos revestimientos requieren algún mantenimiento
              especial?</b
            >
          </h5>
          <ul class="description_font_2">
            <li>
              Para aplicaciones verticales, es suficiente quitar el polvo
              regularmente y limpiar ocasionalmente con un limpiador con pH
              neutro. El sellado ayuda a prevenir la absorción de agua o
              suciedad.
            </li>
          </ul>
        </ul>
        <h5 class="subheader_faq">
          <b>Azulejos exteriores y paisajísticos</b>
        </h5>
        <ul class="description_font" style="margin: 0px">
          <h5 class="subheader_faq">
            <b>P: ¿Qué tipo de baldosa es mejor para uso en exteriores?</b>
          </h5>
          <ul class="description_font_2" style="margin: 0px">
            <li>
              <b>Travertino: </b>Perfecto para patios y terrazas de piscinas
              gracias a su superficie antideslizante.
            </li>
            <li><b>Caliza: </b>Ideal para pasarelas o caminos de jardín.</li>
            <li>
              <b>Mármol: </b>Funciona mejor en áreas exteriores cubiertas debido
              a su superficie pulida.
            </li>
          </ul>
          <h5 class="subheader_faq">
            <b
              >P: ¿Cómo se comportan estas baldosas en temperaturas bajo
              cero?</b
            >
          </h5>
          <ul class="description_font_2">
            <li>
              El travertino y la piedra caliza son más resistentes a los ciclos
              de congelación y descongelación, siempre que estén sellados
              adecuadamente. El mármol puede agrietarse si no se mantiene
              adecuadamente en climas fríos.
            </li>
          </ul>
          <h5 class="subheader_faq">
            <b>P: ¿Puedo utilizar estos azulejos para paisajes de jardín?</b>
          </h5>
          <ul class="description_font_2">
            <li>
              Sí, el travertino y la piedra caliza son populares para el
              paisajismo debido a sus tonos terrosos y su resistencia al
              deslizamiento.
            </li>
          </ul>
        </ul>
        <h5 class="subheader_faq"><b>Adoquines</b></h5>
        <ul style="margin: 0px" class="description_font">
          <h5 class="subheader_faq">
            <b
              >P: ¿Cuáles son las ventajas de utilizar adoquines de piedra
              natural?</b
            >
          </h5>
          <ul class="description_font_2" style="margin: 0px">
            <li>Durabilidad y longevidad.</li>
            <li>Estética atemporal y natural.</li>
            <li>
              Resistentes al calor, lo que los hace cómodos para zonas
              descalzas.
            </li>
          </ul>
          <h5 class="subheader_faq">
            <b
              >P: ¿Cómo se comparan los adoquines de travertino con los
              adoquines de hormigón?</b
            >
          </h5>
          <ul class="description_font_2">
            <li>
              Los adoquines de travertino son más duraderos, resistentes al
              calor y visualmente atractivos que el hormigón, pero tienen un
              costo mayor.
            </li>
          </ul>
          <h5 class="subheader_faq">
            <b>P: ¿Los adoquines requieren una instalación especial?</b>
          </h5>
          <ul class="description_font_2">
            <li>
              Los adoquines de piedra natural requieren una base sólida, una
              nivelación adecuada y un resellado ocasional para una mayor
              longevidad.
            </li>
          </ul>
        </ul>
        <h5 class="subheader_faq"><b>Azulejos para paredes y fachadas</b></h5>
        <ul style="margin: 0px" class="description_font">
          <h5 class="subheader_faq">
            <b
              >P: ¿Puedo usar travertino o piedra caliza como protector contra
              salpicaduras?</b
            >
          </h5>
          <ul class="description_font_2">
            <li>
              Sí, son excelentes opciones para salpicaduras de cocinas o baños,
              ya que agregan textura y carácter.
            </li>
          </ul>
          <h5 class="subheader_faq">
            <b>P: ¿Los azulejos de mármol se manchan fácilmente?</b>
          </h5>
          <ul class="description_font_2">
            <li>
              El mármol puede mancharse si se expone a sustancias ácidas, pero
              el sellado minimiza este riesgo.
            </li>
          </ul>
        </ul>
        <h5 class="subheader_faq"><b>Preguntas de mantenimiento</b></h5>
        <ul style="margin: 0px" class="description_font">
          <h5 class="subheader_faq">
            <b
              >P: ¿Con qué frecuencia es necesario sellar las baldosas
              exteriores?</b
            >
          </h5>
          <ul class="description_font_2">
            <li>
              Para aplicaciones en exteriores, se recomienda volver a sellar
              cada 1 o 2 años, dependiendo de las condiciones climáticas.
            </li>
          </ul>
          <h5 class="subheader_faq">
            <b
              >P: ¿Cuál es la mejor forma de limpiar los azulejos de
              exterior?</b
            >
          </h5>
          <ul class="description_font_2">
            <li>
              Utilice una manguera para una limpieza regular y un limpiador con
              pH neutro para la suciedad rebelde. Evite el lavado a presión, ya
              que puede erosionar piedras más blandas como el travertino y la
              piedra caliza.
            </li>
          </ul>
          <h5 class="subheader_faq">
            <b>P: ¿Son estas baldosas resistentes al musgo o las algas?</b>
          </h5>
          <ul class="description_font_2">
            <li>
              La limpieza y el sellado regulares previenen el crecimiento de
              musgo y algas en las superficies exteriores.
            </li>
          </ul>
        </ul>
      </div>
      <div class="col-6">
        <VideosLazyCardFaq
          v-for="vid in videos"
          :key="vid.id"
          :video-id="vid.videoId"
          :title="vid.name"
        />
      </div>
    </div>
    <div class="row" v-else>
      <div class="col-12">
        <h1 class="header mb-2">PREGUNTAS FRECUENTES</h1>
        <h5 class="subheader_faq">
          <b
            >P: ¿Cuáles son las principales diferencias entre travertino, mármol
            y piedra caliza?</b
          >
        </h5>
        <ul class="description_font" style="margin: 0px">
          <li>
            <b>Travertino</b>: Conocido por sus agujeros y poros naturales,
            ofrece un aspecto rústico.
          </li>
          <li>
            <b>Mármol</b>: Pulido y elegante, a menudo presenta vetas y un
            acabado brillante.
          </li>
          <li>
            <b>Caliza</b>: Más suave con un acabado mate, que proporciona una
            apariencia más natural y discreta.
          </li>
        </ul>

        <h5 class="subheader_faq">
          <b>P: ¿Son estos azulejos aptos para uso en exteriores?</b>
        </h5>
        <ul class="description_font">
          <li>
            Sí, los tres tipos se pueden utilizar en exteriores, pero su
            idoneidad depende del acabado y del clima. El travertino y la piedra
            caliza son populares para patios y terrazas de piscinas debido a sus
            propiedades antideslizantes cuando no están pulidas.
          </li>
        </ul>

        <h5 class="subheader_faq">
          <b>P: ¿Qué tan duraderas son estas baldosas?</b>
        </h5>
        <ul class="description_font">
          <li>
            El mármol es el más duro y duradero, seguido del travertino y la
            piedra caliza. Sin embargo, todos requieren un sellado adecuado para
            mantener su apariencia y longevidad.
          </li>
        </ul>
        <h5 class="subheader_faq">
          <b>P: ¿Es necesario sellar estas baldosas?</b>
        </h5>
        <ul class="description_font">
          <li>
            Sí, se recomienda sellar los tres tipos para evitar manchas y
            mantener su belleza natural, especialmente en áreas con mucha
            humedad o mucho tráfico.
          </li>
        </ul>
        <h5 class="subheader_faq">
          <b>P: ¿Cómo limpio y mantengo estos azulejos?</b>
        </h5>
        <ul class="description_font" style="margin: 0px">
          <li>Utilice un limpiador con pH neutro.</li>
          <li>
            Evite los limpiadores ácidos o abrasivos ya que pueden dañar la
            piedra.
          </li>
          <li>
            Se recomienda volver a sellar periódicamente para proteger las
            baldosas.
          </li>
        </ul>
        <h5 class="subheader_faq"><b>P: ¿Son estos azulejos ecológicos?</b></h5>
        <ul class="description_font">
          <li>
            Sí, el travertino, el mármol y la piedra caliza son piedras
            naturales con un impacto ambiental mínimo durante su extracción y
            producción.
          </li>
        </ul>
        <h5 class="subheader_faq">
          <b
            >P: ¿Se pueden utilizar estas baldosas con calefacción por suelo
            radiante?</b
          >
        </h5>
        <ul class="description_font">
          <li>
            Sí, son excelentes conductores de calor y funcionan bien con
            sistemas de calefacción por suelo radiante.
          </li>
        </ul>
        <h5 class="subheader_faq">
          <b>P: ¿Estas baldosas son resbaladizas cuando están mojadas?</b>
        </h5>
        <ul class="description_font">
          <li>
            El mármol pulido puede ser resbaladizo cuando está mojado, mientras
            que los acabados pulidos o texturizados de travertino y piedra
            caliza ofrecen una mejor resistencia al deslizamiento.
          </li>
        </ul>
        <h5 class="subheader_faq">
          <b>P: ¿Cuáles son las opciones de color disponibles?</b>
        </h5>
        <ul class="description_font" style="margin: 0px">
          <li><b>Travertino:</b> Earthy tones like beige, tan, and cream.</li>
          <li>
            <b>Mármol:</b> Classic whites, greys, blacks, and sometimes greens
            or reds.
          </li>
          <li><b>Caliza:</b> Tonos neutros de beige, gris y blancos suaves.</li>
        </ul>
        <h5 class="subheader_faq">
          <b>P: ¿Cómo elijo el mosaico adecuado para mi proyecto?</b>
        </h5>
        <ul class="description_font">
          <li>
            Considere la ubicación, las preferencias de diseño, la durabilidad y
            los requisitos de mantenimiento. Para obtener ayuda, consulte a los
            expertos de Mekmar para obtener asesoramiento personalizado.
          </li>
        </ul>
        <h5 class="subheader_faq"><b>P: ¿Son caras estas baldosas?</b></h5>
        <ul class="description_font">
          <li>
            Los precios varían según el tipo de piedra, la calidad y el acabado.
            El mármol tiende a ser el más caro, seguido del travertino y la
            piedra caliza.
          </li>
        </ul>
        <h5 class="subheader_faq">
          <b>P: ¿Se pueden utilizar estos azulejos en los baños?</b>
        </h5>
        <ul class="description_font">
          <li>
            Sí, son ideales para baños, pero requieren un sellado adecuado para
            resistir la humedad y las manchas.
          </li>
        </ul>
        <h5 class="subheader_faq"><b>Baldosas</b></h5>
        <ul style="margin: 0px" class="description_font">
          <h5 class="subheader_faq">
            <b
              >P: ¿Son estos mosaicos adecuados para áreas de mucho tránsito?</b
            >
          </h5>
          <ul class="description_font_2">
            <li>
              Sí, el mármol y el travertino son excelentes para áreas de mucho
              tráfico si se sellan adecuadamente. La piedra caliza es más
              adecuada para zonas de tráfico moderado debido a su naturaleza más
              blanda.
            </li>
          </ul>
          <h5 class="subheader_faq">
            <b
              >P: ¿Puedo usar travertino, mármol o piedra caliza para pisos con
              calefacción?</b
            >
          </h5>
          <ul class="description_font_2">
            <li>
              Sí, son excelentes conductores del calor y combinan bien con los
              sistemas de calefacción por suelo radiante.
            </li>
          </ul>
          <h5 class="subheader_faq">
            <b>P: ¿Son estos azulejos resistentes a los rayones?</b>
          </h5>
          <ul class="description_font_2">
            <li>
              El mármol es más resistente a los rayones que el travertino o la
              piedra caliza, pero todos pueden rayarse si se exponen a
              materiales abrasivos.
            </li>
          </ul>
        </ul>
        <h5 class="subheader_faq"><b>Azulejos para fachadas y paredes</b></h5>
        <ul style="margin: 0px" class="description_font">
          <h5 class="subheader_faq">
            <b
              >P: ¿Se puede utilizar travertino, mármol o piedra caliza para
              fachadas?</b
            >
          </h5>
          <ul class="description_font_2">
            <li>
              Sí, se utilizan habitualmente para fachadas. El mármol ofrece una
              apariencia lujosa, el travertino agrega textura y la piedra caliza
              brinda una sensación natural y atemporal.
            </li>
          </ul>
          <h5 class="subheader_faq">
            <b>P: ¿Estos azulejos son buenos para paredes decorativas?</b>
          </h5>
          <ul class="description_font_2">
            <li>
              ¡Absolutamente! Las paredes decorativas de mármol crean una
              declaración, mientras que el travertino y la piedra caliza añaden
              calidez y textura.
            </li>
          </ul>
          <h5 class="subheader_faq">
            <b
              >P: ¿Estos revestimientos requieren algún mantenimiento
              especial?</b
            >
          </h5>
          <ul class="description_font_2">
            <li>
              Para aplicaciones verticales, es suficiente quitar el polvo
              regularmente y limpiar ocasionalmente con un limpiador con pH
              neutro. El sellado ayuda a prevenir la absorción de agua o
              suciedad.
            </li>
          </ul>
        </ul>
        <h5 class="subheader_faq">
          <b>Azulejos exteriores y paisajísticos</b>
        </h5>
        <ul class="description_font" style="margin: 0px">
          <h5 class="subheader_faq">
            <b>P: ¿Qué tipo de baldosa es mejor para uso en exteriores?</b>
          </h5>
          <ul class="description_font_2" style="margin: 0px">
            <li>
              <b>Travertino: </b>Perfecto para patios y terrazas de piscinas
              gracias a su superficie antideslizante.
            </li>
            <li><b>Caliza: </b>Ideal para pasarelas o caminos de jardín.</li>
            <li>
              <b>Mármol: </b>Funciona mejor en áreas exteriores cubiertas debido
              a su superficie pulida.
            </li>
          </ul>
          <h5 class="subheader_faq">
            <b
              >P: ¿Cómo se comportan estas baldosas en temperaturas bajo
              cero?</b
            >
          </h5>
          <ul class="description_font_2">
            <li>
              El travertino y la piedra caliza son más resistentes a los ciclos
              de congelación y descongelación, siempre que estén sellados
              adecuadamente. El mármol puede agrietarse si no se mantiene
              adecuadamente en climas fríos.
            </li>
          </ul>
          <h5 class="subheader_faq">
            <b>P: ¿Puedo utilizar estos azulejos para paisajes de jardín?</b>
          </h5>
          <ul class="description_font_2">
            <li>
              Sí, el travertino y la piedra caliza son populares para el
              paisajismo debido a sus tonos terrosos y su resistencia al
              deslizamiento.
            </li>
          </ul>
        </ul>
        <h5 class="subheader_faq"><b>Adoquines</b></h5>
        <ul style="margin: 0px" class="description_font">
          <h5 class="subheader_faq">
            <b
              >P: ¿Cuáles son las ventajas de utilizar adoquines de piedra
              natural?</b
            >
          </h5>
          <ul class="description_font_2" style="margin: 0px">
            <li>Durabilidad y longevidad.</li>
            <li>Estética atemporal y natural.</li>
            <li>
              Resistentes al calor, lo que los hace cómodos para zonas
              descalzas.
            </li>
          </ul>
          <h5 class="subheader_faq">
            <b
              >P: ¿Cómo se comparan los adoquines de travertino con los
              adoquines de hormigón?</b
            >
          </h5>
          <ul class="description_font_2">
            <li>
              Los adoquines de travertino son más duraderos, resistentes al
              calor y visualmente atractivos que el hormigón, pero tienen un
              costo mayor.
            </li>
          </ul>
          <h5 class="subheader_faq">
            <b>P: ¿Los adoquines requieren una instalación especial?</b>
          </h5>
          <ul class="description_font_2">
            <li>
              Los adoquines de piedra natural requieren una base sólida, una
              nivelación adecuada y un resellado ocasional para una mayor
              longevidad.
            </li>
          </ul>
        </ul>
        <h5 class="subheader_faq"><b>Azulejos para paredes y fachadas</b></h5>
        <ul style="margin: 0px" class="description_font">
          <h5 class="subheader_faq">
            <b
              >P: ¿Puedo usar travertino o piedra caliza como protector contra
              salpicaduras?</b
            >
          </h5>
          <ul class="description_font_2">
            <li>
              Sí, son excelentes opciones para salpicaduras de cocinas o baños,
              ya que agregan textura y carácter.
            </li>
          </ul>
          <h5 class="subheader_faq">
            <b>P: ¿Los azulejos de mármol se manchan fácilmente?</b>
          </h5>
          <ul class="description_font_2">
            <li>
              El mármol puede mancharse si se expone a sustancias ácidas, pero
              el sellado minimiza este riesgo.
            </li>
          </ul>
        </ul>
        <h5 class="subheader_faq"><b>Preguntas de mantenimiento</b></h5>
        <ul style="margin: 0px" class="description_font">
          <h5 class="subheader_faq">
            <b
              >P: ¿Con qué frecuencia es necesario sellar las baldosas
              exteriores?</b
            >
          </h5>
          <ul class="description_font_2">
            <li>
              Para aplicaciones en exteriores, se recomienda volver a sellar
              cada 1 o 2 años, dependiendo de las condiciones climáticas.
            </li>
          </ul>
          <h5 class="subheader_faq">
            <b
              >P: ¿Cuál es la mejor forma de limpiar los azulejos de
              exterior?</b
            >
          </h5>
          <ul class="description_font_2">
            <li>
              Utilice una manguera para una limpieza regular y un limpiador con
              pH neutro para la suciedad rebelde. Evite el lavado a presión, ya
              que puede erosionar piedras más blandas como el travertino y la
              piedra caliza.
            </li>
          </ul>
          <h5 class="subheader_faq">
            <b>P: ¿Son estas baldosas resistentes al musgo o las algas?</b>
          </h5>
          <ul class="description_font_2">
            <li>
              La limpieza y el sellado regulares previenen el crecimiento de
              musgo y algas en las superficies exteriores.
            </li>
          </ul>
        </ul>
      </div>
      <div class="col-12">
        <VideosLazyCardFaq
          v-for="vid in videos"
          :key="vid.id"
          :video-id="vid.videoId"
          :title="vid.name"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
let isMobile = ref(false);
if (process.client) {
  isMobile.value = window.innerWidth <= 768 ? true : false;
}
const videos = [
  {
    id: 30,
    name: "P1: Cuál es la mejor piedra natural para espacios exteriores?",
    videoId: "G5RRCH97-Lk",
  },
];
</script>
