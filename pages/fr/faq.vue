<template>
  <div class="container m-auto">
    <div class="row" v-if="!isMobile">
      <div class="col-6">
        <h1 class="header mb-2">QUESTIONS FRÉQUEMMENT POSÉES</h1>
        <h5 class="subheader_faq">
          <b
            >Q: Quelles sont les principales différences entre le travertin, le
            marbre et le calcaire ?</b
          >
        </h5>
        <ul class="description_font" style="margin: 0px">
          <li>
            <b>Travertin</b>: Connu pour ses trous et pores naturels, il offre
            un aspect rustique.
          </li>
          <li>
            <b>Marbre</b>: Poli et élégant, comportant souvent des veines et une
            finition brillante.
          </li>
          <li>
            <b>Calcaire</b>: Plus doux avec une finition mate, offrant une
            apparence plus naturelle et plus discrète.
          </li>
        </ul>

        <h5 class="subheader_faq">
          <b
            >Q: Ces carreaux sont-ils adaptés à une utilisation en extérieur
            ?</b
          >
        </h5>
        <ul class="description_font">
          <li>
            Oui, les trois types peuvent être utilisés à l’extérieur, mais leur
            adéquation dépend de la finition et du climat. Le travertin et le
            calcaire sont populaires pour les patios et les plages de piscine en
            raison de leurs propriétés antidérapantes lorsqu'ils ne sont pas
            polis.
          </li>
        </ul>

        <h5 class="subheader_faq">
          <b>Q: Quelle est la durabilité de ces carreaux ?</b>
        </h5>
        <ul class="description_font">
          <li>
            Le marbre est le plus dur et le plus durable, suivi du travertin et
            du calcaire. Cependant, tous nécessitent une bonne étanchéité pour
            conserver leur apparence et leur longévité.
          </li>
        </ul>
        <h5 class="subheader_faq">
          <b>Q: Ces carreaux ont-ils besoin d'être scellés ?</b>
        </h5>
        <ul class="description_font">
          <li>
            Oui, le scellement est recommandé pour les trois types afin d’éviter
            les taches et de conserver leur beauté naturelle, en particulier
            dans les zones très humides ou à fort trafic.
          </li>
        </ul>
        <h5 class="subheader_faq">
          <b>Q: Comment nettoyer et entretenir ces carreaux ?</b>
        </h5>
        <ul class="description_font" style="margin: 0px">
          <li>Utilisez un nettoyant au pH neutre.</li>
          <li>
            Évitez les nettoyants acides ou abrasifs car ils peuvent endommager
            la pierre.
          </li>
          <li>
            Un rescellement régulier est recommandé pour protéger les carreaux.
          </li>
        </ul>
        <h5 class="subheader_faq">
          <b>Q: Ces carreaux sont-ils écologiques ?</b>
        </h5>
        <ul class="description_font">
          <li>
            Oui, le travertin, le marbre et le calcaire sont des pierres
            naturelles ayant un impact environnemental minimal lors de
            l'extraction et de la production.
          </li>
        </ul>
        <h5 class="subheader_faq">
          <b
            >Q: Ces carreaux peuvent-ils être utilisés avec un chauffage par le
            sol ?</b
          >
        </h5>
        <ul class="description_font">
          <li>
            Oui, ils sont d’excellents conducteurs de chaleur et fonctionnent
            bien avec les systèmes de chauffage par le sol.
          </li>
        </ul>
        <h5 class="subheader_faq">
          <b>Q: Ces carreaux sont-ils glissants lorsqu'ils sont mouillés ?</b>
        </h5>
        <ul class="description_font">
          <li>
            Le marbre poli peut être glissant lorsqu'il est mouillé, tandis que
            les finitions polies ou texturées en travertin et en calcaire
            offrent une meilleure résistance au glissement.
          </li>
        </ul>
        <h5 class="subheader_faq">
          <b>Q: Quelles sont les options de couleurs disponibles ?</b>
        </h5>
        <ul class="description_font" style="margin: 0px">
          <li>
            <b>Travertin:</b> Des tons terreux comme le beige, le bronzage et la
            crème.
          </li>
          <li>
            <b>Marbre:</b> Blancs classiques, gris, noirs et parfois verts ou
            rouges.
          </li>
          <li>
            <b>Calcaire:</b> Nuances neutres de beige, de gris et de blancs
            doux.
          </li>
        </ul>
        <h5 class="subheader_faq">
          <b>Q: Comment choisir le carrelage adapté à mon projet ?</b>
        </h5>
        <ul class="description_font">
          <li>
            Tenez compte de l’emplacement, des préférences de conception, de la
            durabilité et des exigences d’entretien. Pour obtenir de l’aide,
            consultez les experts Mekmar pour des conseils personnalisés.
          </li>
        </ul>
        <h5 class="subheader_faq"><b>Q: Ces carreaux sont-ils chers ?</b></h5>
        <ul class="description_font">
          <li>
            Les prix varient en fonction du type de pierre, de sa qualité et de
            sa finition. Le marbre a tendance à être le plus cher, suivi du
            travertin et du calcaire.
          </li>
        </ul>
        <h5 class="subheader_faq">
          <b
            >Q: Ces carreaux peuvent-ils être utilisés dans les salles de bains
            ?</b
          >
        </h5>
        <ul class="description_font">
          <li>
            Oui, ils sont idéaux pour les salles de bains, mais nécessitent une
            bonne étanchéité pour résister à l’humidité et aux taches.
          </li>
        </ul>
        <h5 class="subheader_faq"><b>Carrelage de Sol</b></h5>
        <ul style="margin: 0px" class="description_font">
          <h5 class="subheader_faq">
            <b>Q: Ces carreaux sont-ils adaptés aux zones à fort trafic ?</b>
          </h5>
          <ul class="description_font_2">
            <li>
              Oui, le marbre et le travertin sont excellents pour les zones à
              fort trafic avec une bonne étanchéité. Le calcaire convient mieux
              aux zones à trafic modéré en raison de sa nature plus tendre.
            </li>
          </ul>
          <h5 class="subheader_faq">
            <b
              >Q: Puis-je utiliser du travertin, du marbre ou du calcaire pour
              les sols chauffants ?</b
            >
          </h5>
          <ul class="description_font_2">
            <li>
              Oui, ils sont d’excellents conducteurs de chaleur et se marient
              bien avec les systèmes de chauffage par le sol.
            </li>
          </ul>
          <h5 class="subheader_faq">
            <b>Q: Ces carreaux sont-ils résistants aux rayures ?</b>
          </h5>
          <ul class="description_font_2">
            <li>
              Le marbre est plus résistant aux rayures que le travertin ou le
              calcaire, mais tous peuvent se rayer s'ils sont exposés à des
              matériaux abrasifs.
            </li>
          </ul>
        </ul>
        <h5 class="subheader_faq"><b>Carrelage Façade et Mur</b></h5>
        <ul style="margin: 0px" class="description_font">
          <h5 class="subheader_faq">
            <b
              >Q: Le travertin, le marbre ou le calcaire peuvent-ils être
              utilisés pour les façades ?</b
            >
          </h5>
          <ul class="description_font_2">
            <li>
              Oui, ils sont couramment utilisés pour les façades. Le marbre
              offre un aspect luxueux, le travertin ajoute de la texture et le
              calcaire donne une sensation naturelle et intemporelle.
            </li>
          </ul>
          <h5 class="subheader_faq">
            <b>Q: Ces carreaux sont-ils bons pour les murs d'accent ?</b>
          </h5>
          <ul class="description_font_2">
            <li>
              Absolument! Les murs d'accent en marbre créent une déclaration,
              tandis que le travertin et le calcaire ajoutent de la chaleur et
              de la texture.
            </li>
          </ul>
          <h5 class="subheader_faq">
            <b
              >Q: Ces carrelages muraux nécessitent-ils un entretien particulier
              ?</b
            >
          </h5>
          <ul class="description_font_2">
            <li>
              Pour les applications verticales, un dépoussiérage régulier et un
              nettoyage occasionnel avec un nettoyant au pH neutre suffisent. Le
              scellement aide à empêcher l’absorption de l’eau ou de la saleté.
            </li>
          </ul>
        </ul>
        <h5 class="subheader_faq"><b>Carrelage extérieur et paysager</b></h5>
        <ul class="description_font" style="margin: 0px">
          <h5 class="subheader_faq">
            <b
              >Q: Quel type de carrelage convient le mieux à une utilisation en
              extérieur ?</b
            >
          </h5>
          <ul class="description_font_2" style="margin: 0px">
            <li>
              <b>Travertin: </b>Parfait pour les patios et les plages de piscine
              grâce à sa surface antidérapante.
            </li>
            <li>
              <b>Calcaire: </b>Idéal pour les allées ou les allées de jardin.
            </li>
            <li>
              <b>Marbre: </b>Fonctionne mieux dans les espaces extérieurs
              couverts grâce à sa surface polie.
            </li>
          </ul>
          <h5 class="subheader_faq">
            <b>Q: Comment ces carreaux se comportent-ils par temps glacial ?</b>
          </h5>
          <ul class="description_font_2">
            <li>
              Le travertin et le calcaire sont plus résistants aux cycles de gel
              et de dégel, à condition qu’ils soient correctement scellés. Le
              marbre peut se fissurer s’il n’est pas correctement entretenu dans
              les climats froids.
            </li>
          </ul>
          <h5 class="subheader_faq">
            <b
              >Q: Puis-je utiliser ces carreaux pour des aménagements de
              jardin ?</b
            >
          </h5>
          <ul class="description_font_2">
            <li>
              Oui, le travertin et le calcaire sont populaires pour
              l’aménagement paysager en raison de leurs tons terreux et de leur
              résistance au glissement.
            </li>
          </ul>
        </ul>
        <h5 class="subheader_faq"><b>Pavers</b></h5>
        <ul style="margin: 0px" class="description_font">
          <h5 class="subheader_faq">
            <b
              >Q: Quels sont les avantages d’utiliser des pavés en pierre
              naturelle ?</b
            >
          </h5>
          <ul class="description_font_2" style="margin: 0px">
            <li>Durabilité et longévité.</li>
            <li>Esthétique intemporelle et naturelle.</li>
            <li>Heat-resistant, making them comfortable for barefoot areas.</li>
          </ul>
          <h5 class="subheader_faq">
            <b
              >Q: Comment les pavés en travertin se comparent-ils aux pavés en
              béton ?</b
            >
          </h5>
          <ul class="description_font_2">
            <li>
              Les pavés en travertin sont plus durables, résistants à la chaleur
              et visuellement attrayants que le béton, mais leur coût est plus
              élevé.
            </li>
          </ul>
          <h5 class="subheader_faq">
            <b>Q: Les pavés nécessitent-ils une installation particulière ?</b>
          </h5>
          <ul class="description_font_2">
            <li>
              Les pavés en pierre naturelle nécessitent une base solide, un
              nivellement approprié et un scellement occasionnel pour assurer
              leur longévité.
            </li>
          </ul>
        </ul>
        <h5 class="subheader_faq"><b>Carrelage Mur et Façade</b></h5>
        <ul style="margin: 0px" class="description_font">
          <h5 class="subheader_faq">
            <b
              >Q: Puis-je utiliser du travertin ou du calcaire pour un dosseret
              ?</b
            >
          </h5>
          <ul class="description_font_2">
            <li>
              Oui, ce sont d’excellents choix pour les dosserets de cuisine ou
              de salle de bain, ajoutant de la texture et du caractère.
            </li>
          </ul>
          <h5 class="subheader_faq">
            <b>Q: Les carreaux muraux en marbre se tachent-ils facilement ?</b>
          </h5>
          <ul class="description_font_2">
            <li>
              Le marbre peut se tacher s’il est exposé à des substances acides,
              mais le scellement minimise ce risque.
            </li>
          </ul>
        </ul>
        <h5 class="subheader_faq"><b>Questions d'entretien</b></h5>
        <ul style="margin: 0px" class="description_font">
          <h5 class="subheader_faq">
            <b
              >Q: À quelle fréquence les carreaux extérieurs doivent-ils être
              scellés ?</b
            >
          </h5>
          <ul class="description_font_2">
            <li>
              Pour les applications extérieures, il est recommandé de resceller
              tous les 1 à 2 ans, en fonction des conditions météorologiques.
            </li>
          </ul>
          <h5 class="subheader_faq">
            <b
              >Q: Quelle est la meilleure façon de nettoyer le carrelage
              extérieur ?</b
            >
          </h5>
          <ul class="description_font_2">
            <li>
              Utilisez un tuyau pour un nettoyage régulier et un nettoyant au pH
              neutre pour les saletés tenaces. Évitez le lavage sous pression
              car cela peut éroder les pierres plus tendres comme le travertin
              et le calcaire.
            </li>
          </ul>
          <h5 class="subheader_faq">
            <b
              >Q: Ces carreaux sont-ils résistants à la mousse ou aux algues
              ?</b
            >
          </h5>
          <ul class="description_font_2">
            <li>
              Un nettoyage et un scellement réguliers empêchent la croissance de
              mousse et d’algues sur les surfaces extérieures.
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
        <VideosLazyCardFaq
          v-for="vid in videos"
          :key="vid.id"
          :video-id="vid.videoId"
          :title="vid.name"
        />
      </div>
      <div class="col-12">
        <h1 class="header mb-2">QUESTIONS FRÉQUEMMENT POSÉES</h1>
        <h5 class="subheader_faq">
          <b
            >Q: Quelles sont les principales différences entre le travertin, le
            marbre et le calcaire ?</b
          >
        </h5>
        <ul class="description_font" style="margin: 0px">
          <li>
            <b>Travertin</b>: Connu pour ses trous et pores naturels, il offre
            un aspect rustique.
          </li>
          <li>
            <b>Marbre</b>: Poli et élégant, comportant souvent des veines et une
            finition brillante.
          </li>
          <li>
            <b>Calcaire</b>: Plus doux avec une finition mate, offrant une
            apparence plus naturelle et plus discrète.
          </li>
        </ul>

        <h5 class="subheader_faq">
          <b
            >Q: Ces carreaux sont-ils adaptés à une utilisation en extérieur
            ?</b
          >
        </h5>
        <ul class="description_font">
          <li>
            Oui, les trois types peuvent être utilisés à l’extérieur, mais leur
            adéquation dépend de la finition et du climat. Le travertin et le
            calcaire sont populaires pour les patios et les plages de piscine en
            raison de leurs propriétés antidérapantes lorsqu'ils ne sont pas
            polis.
          </li>
        </ul>

        <h5 class="subheader_faq">
          <b>Q: Quelle est la durabilité de ces carreaux ?</b>
        </h5>
        <ul class="description_font">
          <li>
            Le marbre est le plus dur et le plus durable, suivi du travertin et
            du calcaire. Cependant, tous nécessitent une bonne étanchéité pour
            conserver leur apparence et leur longévité.
          </li>
        </ul>
        <h5 class="subheader_faq">
          <b>Q: Ces carreaux ont-ils besoin d'être scellés ?</b>
        </h5>
        <ul class="description_font">
          <li>
            Oui, le scellement est recommandé pour les trois types afin d’éviter
            les taches et de conserver leur beauté naturelle, en particulier
            dans les zones très humides ou à fort trafic.
          </li>
        </ul>
        <h5 class="subheader_faq">
          <b>Q: Comment nettoyer et entretenir ces carreaux ?</b>
        </h5>
        <ul class="description_font" style="margin: 0px">
          <li>Utilisez un nettoyant au pH neutre.</li>
          <li>
            Évitez les nettoyants acides ou abrasifs car ils peuvent endommager
            la pierre.
          </li>
          <li>
            Un rescellement régulier est recommandé pour protéger les carreaux.
          </li>
        </ul>
        <h5 class="subheader_faq">
          <b>Q: Ces carreaux sont-ils écologiques ?</b>
        </h5>
        <ul class="description_font">
          <li>
            Oui, le travertin, le marbre et le calcaire sont des pierres
            naturelles ayant un impact environnemental minimal lors de
            l'extraction et de la production.
          </li>
        </ul>
        <h5 class="subheader_faq">
          <b
            >Q: Ces carreaux peuvent-ils être utilisés avec un chauffage par le
            sol ?</b
          >
        </h5>
        <ul class="description_font">
          <li>
            Oui, ils sont d’excellents conducteurs de chaleur et fonctionnent
            bien avec les systèmes de chauffage par le sol.
          </li>
        </ul>
        <h5 class="subheader_faq">
          <b>Q: Ces carreaux sont-ils glissants lorsqu'ils sont mouillés ?</b>
        </h5>
        <ul class="description_font">
          <li>
            Le marbre poli peut être glissant lorsqu'il est mouillé, tandis que
            les finitions polies ou texturées en travertin et en calcaire
            offrent une meilleure résistance au glissement.
          </li>
        </ul>
        <h5 class="subheader_faq">
          <b>Q: Quelles sont les options de couleurs disponibles ?</b>
        </h5>
        <ul class="description_font" style="margin: 0px">
          <li>
            <b>Travertin:</b> Des tons terreux comme le beige, le bronzage et la
            crème.
          </li>
          <li>
            <b>Marbre:</b> Blancs classiques, gris, noirs et parfois verts ou
            rouges.
          </li>
          <li>
            <b>Calcaire:</b> Nuances neutres de beige, de gris et de blancs
            doux.
          </li>
        </ul>
        <h5 class="subheader_faq">
          <b>Q: Comment choisir le carrelage adapté à mon projet ?</b>
        </h5>
        <ul class="description_font">
          <li>
            Tenez compte de l’emplacement, des préférences de conception, de la
            durabilité et des exigences d’entretien. Pour obtenir de l’aide,
            consultez les experts Mekmar pour des conseils personnalisés.
          </li>
        </ul>
        <h5 class="subheader_faq"><b>Q: Ces carreaux sont-ils chers ?</b></h5>
        <ul class="description_font">
          <li>
            Les prix varient en fonction du type de pierre, de sa qualité et de
            sa finition. Le marbre a tendance à être le plus cher, suivi du
            travertin et du calcaire.
          </li>
        </ul>
        <h5 class="subheader_faq">
          <b
            >Q: Ces carreaux peuvent-ils être utilisés dans les salles de bains
            ?</b
          >
        </h5>
        <ul class="description_font">
          <li>
            Oui, ils sont idéaux pour les salles de bains, mais nécessitent une
            bonne étanchéité pour résister à l’humidité et aux taches.
          </li>
        </ul>
        <h5 class="subheader_faq"><b>Carrelage de Sol</b></h5>
        <ul style="margin: 0px" class="description_font">
          <h5 class="subheader_faq">
            <b>Q: Ces carreaux sont-ils adaptés aux zones à fort trafic ?</b>
          </h5>
          <ul class="description_font_2">
            <li>
              Oui, le marbre et le travertin sont excellents pour les zones à
              fort trafic avec une bonne étanchéité. Le calcaire convient mieux
              aux zones à trafic modéré en raison de sa nature plus tendre.
            </li>
          </ul>
          <h5 class="subheader_faq">
            <b
              >Q: Puis-je utiliser du travertin, du marbre ou du calcaire pour
              les sols chauffants ?</b
            >
          </h5>
          <ul class="description_font_2">
            <li>
              Oui, ils sont d’excellents conducteurs de chaleur et se marient
              bien avec les systèmes de chauffage par le sol.
            </li>
          </ul>
          <h5 class="subheader_faq">
            <b>Q: Ces carreaux sont-ils résistants aux rayures ?</b>
          </h5>
          <ul class="description_font_2">
            <li>
              Le marbre est plus résistant aux rayures que le travertin ou le
              calcaire, mais tous peuvent se rayer s'ils sont exposés à des
              matériaux abrasifs.
            </li>
          </ul>
        </ul>
        <h5 class="subheader_faq"><b>Carrelage Façade et Mur</b></h5>
        <ul style="margin: 0px" class="description_font">
          <h5 class="subheader_faq">
            <b
              >Q: Le travertin, le marbre ou le calcaire peuvent-ils être
              utilisés pour les façades ?</b
            >
          </h5>
          <ul class="description_font_2">
            <li>
              Oui, ils sont couramment utilisés pour les façades. Le marbre
              offre un aspect luxueux, le travertin ajoute de la texture et le
              calcaire donne une sensation naturelle et intemporelle.
            </li>
          </ul>
          <h5 class="subheader_faq">
            <b>Q: Ces carreaux sont-ils bons pour les murs d'accent ?</b>
          </h5>
          <ul class="description_font_2">
            <li>
              Absolument! Les murs d'accent en marbre créent une déclaration,
              tandis que le travertin et le calcaire ajoutent de la chaleur et
              de la texture.
            </li>
          </ul>
          <h5 class="subheader_faq">
            <b
              >Q: Ces carrelages muraux nécessitent-ils un entretien particulier
              ?</b
            >
          </h5>
          <ul class="description_font_2">
            <li>
              Pour les applications verticales, un dépoussiérage régulier et un
              nettoyage occasionnel avec un nettoyant au pH neutre suffisent. Le
              scellement aide à empêcher l’absorption de l’eau ou de la saleté.
            </li>
          </ul>
        </ul>
        <h5 class="subheader_faq"><b>Carrelage extérieur et paysager</b></h5>
        <ul class="description_font" style="margin: 0px">
          <h5 class="subheader_faq">
            <b
              >Q: Quel type de carrelage convient le mieux à une utilisation en
              extérieur ?</b
            >
          </h5>
          <ul class="description_font_2" style="margin: 0px">
            <li>
              <b>Travertin: </b>Parfait pour les patios et les plages de piscine
              grâce à sa surface antidérapante.
            </li>
            <li>
              <b>Calcaire: </b>Idéal pour les allées ou les allées de jardin.
            </li>
            <li>
              <b>Marbre: </b>Fonctionne mieux dans les espaces extérieurs
              couverts grâce à sa surface polie.
            </li>
          </ul>
          <h5 class="subheader_faq">
            <b>Q: Comment ces carreaux se comportent-ils par temps glacial ?</b>
          </h5>
          <ul class="description_font_2">
            <li>
              Le travertin et le calcaire sont plus résistants aux cycles de gel
              et de dégel, à condition qu’ils soient correctement scellés. Le
              marbre peut se fissurer s’il n’est pas correctement entretenu dans
              les climats froids.
            </li>
          </ul>
          <h5 class="subheader_faq">
            <b
              >Q: Puis-je utiliser ces carreaux pour des aménagements de
              jardin ?</b
            >
          </h5>
          <ul class="description_font_2">
            <li>
              Oui, le travertin et le calcaire sont populaires pour
              l’aménagement paysager en raison de leurs tons terreux et de leur
              résistance au glissement.
            </li>
          </ul>
        </ul>
        <h5 class="subheader_faq"><b>Pavers</b></h5>
        <ul style="margin: 0px" class="description_font">
          <h5 class="subheader_faq">
            <b
              >Q: Quels sont les avantages d’utiliser des pavés en pierre
              naturelle ?</b
            >
          </h5>
          <ul class="description_font_2" style="margin: 0px">
            <li>Durabilité et longévité.</li>
            <li>Esthétique intemporelle et naturelle.</li>
            <li>Heat-resistant, making them comfortable for barefoot areas.</li>
          </ul>
          <h5 class="subheader_faq">
            <b
              >Q: Comment les pavés en travertin se comparent-ils aux pavés en
              béton ?</b
            >
          </h5>
          <ul class="description_font_2">
            <li>
              Les pavés en travertin sont plus durables, résistants à la chaleur
              et visuellement attrayants que le béton, mais leur coût est plus
              élevé.
            </li>
          </ul>
          <h5 class="subheader_faq">
            <b>Q: Les pavés nécessitent-ils une installation particulière ?</b>
          </h5>
          <ul class="description_font_2">
            <li>
              Les pavés en pierre naturelle nécessitent une base solide, un
              nivellement approprié et un scellement occasionnel pour assurer
              leur longévité.
            </li>
          </ul>
        </ul>
        <h5 class="subheader_faq"><b>Carrelage Mur et Façade</b></h5>
        <ul style="margin: 0px" class="description_font">
          <h5 class="subheader_faq">
            <b
              >Q: Puis-je utiliser du travertin ou du calcaire pour un dosseret
              ?</b
            >
          </h5>
          <ul class="description_font_2">
            <li>
              Oui, ce sont d’excellents choix pour les dosserets de cuisine ou
              de salle de bain, ajoutant de la texture et du caractère.
            </li>
          </ul>
          <h5 class="subheader_faq">
            <b>Q: Les carreaux muraux en marbre se tachent-ils facilement ?</b>
          </h5>
          <ul class="description_font_2">
            <li>
              Le marbre peut se tacher s’il est exposé à des substances acides,
              mais le scellement minimise ce risque.
            </li>
          </ul>
        </ul>
        <h5 class="subheader_faq"><b>Questions d'entretien</b></h5>
        <ul style="margin: 0px" class="description_font">
          <h5 class="subheader_faq">
            <b
              >Q: À quelle fréquence les carreaux extérieurs doivent-ils être
              scellés ?</b
            >
          </h5>
          <ul class="description_font_2">
            <li>
              Pour les applications extérieures, il est recommandé de resceller
              tous les 1 à 2 ans, en fonction des conditions météorologiques.
            </li>
          </ul>
          <h5 class="subheader_faq">
            <b
              >Q: Quelle est la meilleure façon de nettoyer le carrelage
              extérieur ?</b
            >
          </h5>
          <ul class="description_font_2">
            <li>
              Utilisez un tuyau pour un nettoyage régulier et un nettoyant au pH
              neutre pour les saletés tenaces. Évitez le lavage sous pression
              car cela peut éroder les pierres plus tendres comme le travertin
              et le calcaire.
            </li>
          </ul>
          <h5 class="subheader_faq">
            <b
              >Q: Ces carreaux sont-ils résistants à la mousse ou aux algues
              ?</b
            >
          </h5>
          <ul class="description_font_2">
            <li>
              Un nettoyage et un scellement réguliers empêchent la croissance de
              mousse et d’algues sur les surfaces extérieures.
            </li>
          </ul>
        </ul>
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
    name: "Q1 : Quelle est la meilleure pierre naturelle pour un espace extérieur ?",
    videoId: "G5RRCH97-Lk",
  },
];
</script>
