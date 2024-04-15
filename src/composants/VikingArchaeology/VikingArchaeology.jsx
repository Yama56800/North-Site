import React from "react";
import archeologie from "../../images/ilustration/ilustration_archeologie.webp";
export default function VikingArchaeology() {
  return (
    <div className="Archeology-container" id="Archeologie">
      <div className="Archeology-content">
        <h1>Découvertes Archéologiques sur les Vikings</h1>
        <div className="viking-archeologie-img-div">
          <div className="viking-archeologie-img-div-content">
            <section>
              <h2>Les Navires Vikings</h2>
              <p>
                Les fouilles archéologiques ont mis au jour des navires vikings
                remarquablement préservés, comme le navire d'Oseberg et le
                navire de Gokstad en Norvège, qui témoignent de l'expertise
                maritime des Vikings. Ces navires, utilisés pour le commerce,
                l'exploration, et les raids, étaient conçus pour naviguer à la
                fois en haute mer et dans les eaux peu profondes des rivières
                européennes.
              </p>
            </section>

            <section>
              <h2>L'Art Viking</h2>
              <p>
                L'art des Vikings, caractérisé par des motifs animaliers
                stylisés et des entrelacs complexes, se retrouve dans leurs
                bijoux, armes, pierres runiques et objets du quotidien. L'art
                viking reflète non seulement leur esthétique mais aussi leurs
                croyances et leur vision du monde, avec des représentations de
                dieux nordiques, de héros mythologiques et de symboles magiques.
              </p>
            </section>

            <section>
              <h2>Les Tombes et les Rites Funéraires</h2>
              <p>
                Les tombes vikings, telles que celle d'Oseberg, fournissent des
                informations précieuses sur les rites funéraires, la hiérarchie
                sociale, et la vie quotidienne des Vikings. Ces sépultures,
                souvent accompagnées de biens matériels et parfois de navires,
                indiquent l'importance de l'au-delà dans la croyance viking et
                la volonté d'honorer les défunts.
              </p>
            </section>

            <section>
              <h2>Écriture et Runes</h2>
              <p>
                Les runes, forme d'écriture ancienne utilisée par les peuples
                germaniques, sont une source précieuse d'information sur la
                langue, les pratiques religieuses, et l'histoire des Vikings.
                Les inscriptions runiques, retrouvées sur des pierres, des
                bijoux, et des armes, nous donnent un aperçu direct de leur
                pensée et de leur monde spirituel.
              </p>
            </section>

            <p>
              Ces découvertes archéologiques nous permettent de mieux comprendre
              la complexité de la société viking, leurs croyances, leur art, et
              leur impact durable sur l'histoire européenne. Pour une
              exploration plus approfondie, les musées et centres de recherche
              spécialisés offrent des ressources inestimables sur l'héritage des
              Vikings.
            </p>
          </div>
          <img src={archeologie} alt="" />
        </div>
      </div>
    </div>
  );
}
